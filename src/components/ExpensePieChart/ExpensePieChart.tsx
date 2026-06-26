"use client";

import { useMemo } from "react";
import { Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

import type { Expense } from "@/lib/types";

type ExpensePieChartProps = {
	expenses: Expense[];
};

const COLORS = [
	"#7C3AED",
	"#10B981",
	"#3B82F6",
	"#F59E0B",
	"#EF4444",
	"#06B6D4",
	"#EC4899",
	"#6366F1",
	"#14B8A6",
	"#84CC16",
];

export default function ExpensePieChart({ expenses }: ExpensePieChartProps) {
	const chartData = useMemo(() => {
		const grouped: Record<string, number> = {};

		for (const expense of expenses) {
			grouped[expense.category] =
				(grouped[expense.category] || 0) + expense.amount;
		}

		return Object.entries(grouped).map(([category, amount], index) => ({
			category,
			amount,
			fill: COLORS[index % COLORS.length],
		}));
	}, [expenses]);

	return (
		<section className="mx-auto w-full max-w-7xl rounded-2xl border border-default-200 bg-white p-6 shadow-sm">
			<div className="mb-6">
				<h2 className="text-2xl font-bold">Expense by Category</h2>

				<p className="mt-1 text-sm text-default-500">
					Expense distribution across all categories.
				</p>
			</div>

			<div className="h-87.5 w-full sm:h-105">
				<ResponsiveContainer width="100%" height="100%">
					<PieChart>
						<Pie
							data={chartData}
							dataKey="amount"
							nameKey="category"
							cx="50%"
							cy="50%"
							outerRadius={110}
							label
						/>

						<Tooltip
							formatter={(value, name) => [
								`$${Number(value).toLocaleString()}`,
								name,
							]}
						/>
						<Legend />
					</PieChart>
				</ResponsiveContainer>
			</div>
		</section>
	);
}
