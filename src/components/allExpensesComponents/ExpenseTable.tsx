"use client";

import { expenses } from "@/lib/expense-data";
import { badgeColors, formatCurrency, formatDate } from "@/lib/expense-utils";
import { Button, Chip, Table } from "@heroui/react";
import { Pencil, Trash2 } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useMemo } from "react";
import ExpenseCard from "./ExpenseCard";
import ExpensePagination from "./ExpensePagination";

const ITEMS_PER_PAGE = 6;

export default function ExpenseTable() {
	const searchParams = useSearchParams();

	const currentPage = Number(searchParams.get("page")) || 1;

	const paginatedExpenses = useMemo(() => {
		const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
		const endIndex = startIndex + ITEMS_PER_PAGE;

		return expenses.slice(startIndex, endIndex);
	}, [currentPage]);

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
								{paginatedExpenses.map((expense, index) => (
									<Table.Row key={expense.id} id={expense.id}>
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
												<Button
													isIconOnly
													size="sm"
													variant="tertiary"
												>
													<Pencil className="size-4" />
												</Button>

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
				{paginatedExpenses.map((expense, index) => (
					<ExpenseCard
						key={expense.id}
						expense={expense}
						serialNumber={(currentPage - 1) * ITEMS_PER_PAGE + index + 1}
					/>
				))}
			</section>

			{/* Pagination */}
			<ExpensePagination totalItems={expenses.length} />
		</>
	);
}
