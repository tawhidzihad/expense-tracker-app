"use client";

import { Button } from "@heroui/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

// Can't add or remove any array item
const expenseCategories = [
	"Food",
	"Transport",
	"Shopping",
	"Groceries",
	"Bills",
	"Healthcare",
	"Education",
	"Entertainment",
	"Travel",
	"Rent",
	"Utilities",
	"Salary",
	"Investment",
	"Gift",
	"Personal Care",
	"Subscriptions",
	"Others",
] as const;

type ExpenseCategory = (typeof expenseCategories)[number];

export default function ExpenseFilter() {
	const router = useRouter();
	const pathname = usePathname();

	// Set the search params
	const searchParams = useSearchParams();

	const selectedCategory =
		(searchParams.get("category") as ExpenseCategory | null) ?? "";

	// Handle category changing
	const handleCategoryChange = (
		event: React.ChangeEvent<HTMLSelectElement>,
	) => {
		const value = event.target.value as ExpenseCategory | "";

		const params = new URLSearchParams(searchParams.toString());

		if (value) {
			params.set("category", value);
		} else {
			params.delete("category");
		}

		router.push(`${pathname}?${params.toString()}`);
	};

	// Clear category filter
	const handleClearFilter = (): void => {
		router.push(pathname);
	};

	return (
		<section className="mx-auto w-full max-w-7xl rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
			<div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
				<div className="w-full">
					<label
						htmlFor="category"
						className="mb-2 block text-sm font-medium text-gray-700"
					>
						Filter by Category
					</label>

					<select
						id="category"
						value={selectedCategory}
						onChange={handleCategoryChange}
						className="h-12 w-full rounded-xl border border-gray-300 bg-white px-4 outline-none transition focus:border-violet-600"
					>
						<option value="">All Categories</option>

						{expenseCategories.map((category) => (
							<option key={category} value={category}>
								{category}
							</option>
						))}
					</select>
				</div>

				<Button
					type="button"
					size="lg"
					variant="tertiary"
					onPress={handleClearFilter}
					className="h-12 w-full rounded-xl px-6 md:w-auto"
				>
					Clear Filter
				</Button>
			</div>
		</section>
	);
}
