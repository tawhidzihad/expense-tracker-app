"use client";

import { badgeColors, formatCurrency, formatDate } from "@/lib/expense-utils";
import type { Expense } from "@/lib/types";
import { Button, Chip, Table } from "@heroui/react";
import { Trash2 } from "lucide-react";
import { useSearchParams } from "next/navigation";
import UpdateExpenseModal from "../updateAndDeleteModal/UpdateExpenseModal";
import ExpenseCard from "./ExpenseCard";
import ExpenseEmptyState from "./ExpenseEmptyState";
import ExpensePagination from "./ExpensePagination";

type ExpenseTableProps = {
	expenses: Expense[];
	totalItems: number;
};

const ITEMS_PER_PAGE = 6;

export default function ExpenseTable({
	expenses,
	totalItems,
}: ExpenseTableProps) {
	const searchParams = useSearchParams();

	const currentPage = Number(searchParams.get("page") ?? "1");

	// Empty state
	if (expenses.length === 0) {
		return <ExpenseEmptyState />;
	}

	return (
		<>
			{/* For desktop Table */}
			<section className="hidden lg:block max-w-7xl mx-auto">
				<Table>
					<Table.ScrollContainer>
						<Table.Content
							aria-label="Expense Table"
							className="min-w-237.5"
						>
							<Table.Header>
								<Table.Column className="w-16" isRowHeader>
									#
								</Table.Column>

								<Table.Column>Title</Table.Column>

								<Table.Column>Category</Table.Column>

								<Table.Column>Amount</Table.Column>

								<Table.Column>Date</Table.Column>

								<Table.Column className="text-center">
									Actions
								</Table.Column>
							</Table.Header>

							<Table.Body>
								{expenses.map((expense, index) => (
									<Table.Row
										key={expense._id}
										id={expense._id.toString()}
									>
										{/* Serial Number */}
										<Table.Cell className="font-medium">
											{(currentPage - 1) * ITEMS_PER_PAGE +
												index +
												1}
										</Table.Cell>

										{/* Title */}
										<Table.Cell>
											<p className="font-medium text-default-700">
												{expense.title}
											</p>
										</Table.Cell>

										{/* Category */}
										<Table.Cell>
											<Chip
												size="sm"
												className={badgeColors[expense.category]}
											>
												{expense.category}
											</Chip>
										</Table.Cell>

										{/* Amount */}
										<Table.Cell className="font-semibold">
											{formatCurrency(expense.amount)}
										</Table.Cell>

										{/* Date */}
										<Table.Cell>
											{formatDate(expense.date)}
										</Table.Cell>

										{/* Actions */}
										<Table.Cell>
											<div className="flex items-center justify-center gap-2">
												{/* <Button
													isIconOnly
													size="sm"
													variant="tertiary"
												>
													<Pencil className="size-4" />
												</Button> */}
												<UpdateExpenseModal expense={expense} />

												<Button
													isIconOnly
													size="sm"
													variant="danger"
												>
													<Trash2 className="size-4" />
												</Button>
											</div>
										</Table.Cell>
									</Table.Row>
								))}
							</Table.Body>
						</Table.Content>
					</Table.ScrollContainer>
				</Table>
			</section>

			{/* For Mobile Card */}
			<section className="space-y-4 lg:hidden">
				{expenses.map((expense, index) => (
					<ExpenseCard
						key={expense._id}
						expense={expense}
						serialNumber={(currentPage - 1) * ITEMS_PER_PAGE + index + 1}
					/>
				))}
			</section>

			{/* Pagination */}
			<ExpensePagination totalItems={totalItems} />
		</>
	);
}
