"use client";

import { CategorySummary } from "@/lib/types";
import { Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

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

type ExpensePieChartProps = {
	categorySummary: CategorySummary[];
};

export default function ExpensePieChart({
	categorySummary,
}: ExpensePieChartProps) {
	const chartData = categorySummary?.map((item, index) => ({
		...item,
		fill: COLORS[index % COLORS.length],
	}));

	// Empty state for there is no data
	if (categorySummary.length === 0) {
		return (
			<section className="mx-auto w-full max-w-7xl rounded-2xl border border-default-200 bg-white p-6 shadow-sm">
				<div className="mb-6">
					<h2 className="text-2xl font-bold">Expense by Category</h2>

					<p className="mt-1 text-sm text-default-500">
						Expense distribution across all categories.
					</p>
				</div>

				<div className="flex h-87.5 flex-col items-center justify-center rounded-xl border border-dashed border-default-300 bg-default-50 sm:h-105 p-1">
					<h3 className="text-xl font-semibold text-default-700">
						No Expense Data Available
					</h3>

					<p className="mt-2 max-w-sm text-center text-sm text-default-500">
						Add some expenses to see the category-wise distribution in the
						pie chart.
					</p>
				</div>
			</section>
		);
	}

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
							dataKey="totalAmount"
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
