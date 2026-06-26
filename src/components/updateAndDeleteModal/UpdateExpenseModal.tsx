"use client";

import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { Pencil } from "lucide-react";
import { useForm } from "react-hook-form";

import { updateExpense } from "@/lib/actions/expenses";
import {
	expenseCategories,
	type Expense,
	type ExpenseFormData,
} from "@/lib/types";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

type UpdateExpenseModalProps = {
	expense: Expense;
};

export default function UpdateExpenseModal({
	expense,
}: UpdateExpenseModalProps) {
	const router = useRouter();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<ExpenseFormData>();

	const onSubmit = async (updatedData: ExpenseFormData): Promise<void> => {
		const response = await updateExpense(expense?._id, updatedData);

		if (!response.success) {
			toast.error("Expense updating faild");
			return;
		}

		if (response.success) {
			toast.success(response.message);
			router.refresh();
		}
	};

	return (
		<Modal>
			{/* For Desktop */}
			<Button
				isIconOnly
				size="sm"
				variant="tertiary"
				className={"hidden lg:flex"}
			>
				<Pencil className="size-4" />
			</Button>

			{/* For Mobile and Tablet */}
			<Button size="sm" variant="outline" className="flex-1 flex lg:hidden">
				<Pencil className="size-4" />
				Edit
			</Button>

			<Modal.Backdrop>
				<Modal.Container placement="center">
					<Modal.Dialog key={expense._id} className="sm:max-w-xl">
						<Modal.CloseTrigger />

						<Modal.Header>
							<Modal.Heading>Update Expense</Modal.Heading>

							<p className="mt-1 text-sm text-muted">
								Update your expense information.
							</p>
						</Modal.Header>

						<Modal.Body className="p-6">
							<Surface variant="default">
								<form
									id="update-expense-form"
									onSubmit={handleSubmit(onSubmit)}
									className="grid grid-cols-1 gap-5 md:grid-cols-2"
								>
									{/* Title */}
									<TextField
										defaultValue={expense?.title}
										name="title"
										variant="secondary"
									>
										<Label>Title</Label>

										<Input
											placeholder="Enter title"
											{...register("title", {
												required: "Title is required",
											})}
										/>

										{errors.title && (
											<p className="mt-1 text-sm text-danger">
												{errors.title.message}
											</p>
										)}
									</TextField>

									{/* Amount */}
									<TextField
										defaultValue={expense.amount.toString()}
										name="amount"
										variant="secondary"
									>
										<Label>Amount</Label>

										<Input
											type="number"
											placeholder="Enter amount"
											{...register("amount", {
												required: "Amount is required",
												valueAsNumber: true,
												min: {
													value: 1,
													message: "Amount must be greater than 0",
												},
											})}
										/>

										{errors.amount && (
											<p className="mt-1 text-sm text-danger">
												{errors.amount.message}
											</p>
										)}
									</TextField>

									{/* Category */}
									<div className="space-y-2">
										<label className="text-sm font-medium">
											Category
										</label>

										<select
											defaultValue={expense?.category}
											className={`h-11 w-full rounded-xl border bg-white px-4 outline-none ${
												errors.category
													? "border-danger"
													: "border-default-300"
											}`}
											{...register("category", {
												required: "Category is required",
											})}
										>
											{expenseCategories.map((category) => (
												<option key={category} value={category}>
													{category}
												</option>
											))}
										</select>

										{errors.category && (
											<p className="text-sm text-danger">
												{errors.category.message}
											</p>
										)}
									</div>

									{/* Date */}
									<TextField
										defaultValue={expense?.date}
										name="date"
										variant="secondary"
									>
										<Label>Date</Label>

										<Input
											type="date"
											{...register("date", {
												required: "Date is required",
											})}
										/>

										{errors.date && (
											<p className="mt-1 text-sm text-danger">
												{errors.date.message}
											</p>
										)}
									</TextField>
								</form>
							</Surface>
						</Modal.Body>

						<Modal.Footer>
							<Button
								slot="close"
								variant="secondary"
								className={"rounded-xl"}
							>
								Cancel
							</Button>

							<Button
								slot="close"
								type="submit"
								form="update-expense-form"
								className={
									"rounded-xl bg-violet-600 hover:bg-violet-700"
								}
							>
								Update Expense
							</Button>
						</Modal.Footer>
					</Modal.Dialog>
				</Modal.Container>
			</Modal.Backdrop>
		</Modal>
	);
}
