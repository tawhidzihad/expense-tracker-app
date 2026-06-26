"use client";

import { Button } from "@heroui/react";
import { Pencil, Trash2 } from "lucide-react";

import { badgeColors, formatCurrency, formatDate } from "@/lib/expense-utils";
import type { Expense } from "@/lib/types";

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
			<div className="mt-6 flex gap-3">
				<Button size="sm" variant="outline" className="flex-1">
					<Pencil className="size-4" />
					Edit
				</Button>

				<Button size="sm" variant="danger" className="flex-1">
					<Trash2 className="size-4" />
					Delete
				</Button>
			</div>
		</div>
	);
}
