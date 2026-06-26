"use client";

import { badgeColors, formatCurrency, formatDate } from "@/lib/expense-utils";
import type { Expense } from "@/lib/types";
import DeleteExpenseDialog from "../updateAndDeleteModal/DeleteExpenseDialog";
import UpdateExpenseModal from "../updateAndDeleteModal/UpdateExpenseModal";

type ExpenseCardProps = {
	serialNumber: number;
	expense: Expense;
};

export default function ExpenseCard({
	serialNumber,
	expense,
}: ExpenseCardProps) {
	return (
		<div className="rounded-2xl border border-default-200 bg-white p-5 shadow-sm">
			{/* Header */}
			<div className="flex items-start justify-between gap-4">
				<div>
					<p className="text-xs text-default-500">#{serialNumber}</p>

					<h3 className="mt-1 text-lg font-semibold">{expense.title}</h3>
				</div>

				<span
					className={`rounded-full px-3 py-1 text-xs font-medium ${badgeColors[expense.category]}`}
				>
					{expense.category}
				</span>
			</div>

			{/* Body */}
			<div className="mt-5 space-y-3">
				<div className="flex items-center justify-between">
					<span className="text-sm text-default-500">Amount</span>

					<span className="font-semibold">
						{formatCurrency(expense.amount)}
					</span>
				</div>

				<div className="flex items-center justify-between">
					<span className="text-sm text-default-500">Date</span>

					<span>{formatDate(expense.date)}</span>
				</div>
			</div>

			{/* Footer */}
			<div className="mt-6 flex items-center gap-3">
				<UpdateExpenseModal expense={expense} />

				<DeleteExpenseDialog expense={expense} />
			</div>
		</div>
	);
}
