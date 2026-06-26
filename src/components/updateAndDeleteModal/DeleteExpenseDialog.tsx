"use client";

import { deleteExpense } from "@/lib/actions/expenses";
import type { Expense } from "@/lib/types";
import { AlertDialog, Button } from "@heroui/react";
import { Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

type DeleteExpenseDialogProps = {
	expense: Expense;
};

export default function DeleteExpenseDialog({
	expense,
}: DeleteExpenseDialogProps) {
	const router = useRouter();

	// Handle delete button
	const handleDelete = async (): Promise<void> => {
		const response = await deleteExpense(expense._id);

		if (response.success) {
			toast.success(response.message);
			router.refresh();
		} else {
			toast.error(response.message);
		}
	};

	return (
		<AlertDialog>
			{/* For Desktop */}
			<Button
				isIconOnly
				size="sm"
				variant="danger"
				className={"hidden lg:flex"}
			>
				<Trash2 className="size-4" />
			</Button>

			{/* For Tablet and Mobile */}
			<Button size="sm" variant="danger" className="flex-1 flex lg:hidden">
				<Trash2 className="size-4" />
				Delete
			</Button>

			<AlertDialog.Backdrop>
				<AlertDialog.Container placement="center">
					<AlertDialog.Dialog className="sm:max-w-md">
						<AlertDialog.CloseTrigger />

						<AlertDialog.Header>
							<AlertDialog.Icon status="danger" />

							<AlertDialog.Heading>Delete Expense?</AlertDialog.Heading>
						</AlertDialog.Header>

						<AlertDialog.Body>
							<p className="text-default-600">
								Are you sure you want to delete{" "}
								<strong>&quot;{expense.title}&quot;</strong>?
							</p>

							<p className="mt-2 text-sm text-danger">
								This action cannot be undone.
							</p>
						</AlertDialog.Body>

						<AlertDialog.Footer>
							<Button slot="close" variant="tertiary">
								Cancel
							</Button>

							<Button
								slot="close"
								variant="danger"
								onPress={handleDelete}
							>
								Delete Expense
							</Button>
						</AlertDialog.Footer>
					</AlertDialog.Dialog>
				</AlertDialog.Container>
			</AlertDialog.Backdrop>
		</AlertDialog>
	);
}
