"use client";

import { useForm } from "react-hook-form";

type ExpenseFormData = {
	title: string;
	amount: number;
	category: string;
	date: string;
};

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

export default function AddExpenseForm() {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<ExpenseFormData>();

	const onSubmit = (data: ExpenseFormData) => {
		console.log(data);
		reset();
	};

	return (
		<section
			id="add-expense"
			className="mx-auto w-full max-w-7xl rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
		>
			<div className="mb-8">
				<h2 className="text-2xl font-bold text-gray-900">Add Expense</h2>

				<p className="mt-1 text-sm text-gray-500">
					Fill in the information below.
				</p>
			</div>

			<form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
				<div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
					{/* Title */}
					<div>
						<label className="mb-2 block text-sm font-medium text-gray-700">
							Title
						</label>

						<input
							type="text"
							placeholder="Enter title"
							className="h-12 w-full rounded-xl border border-gray-300 px-4 outline-none transition focus:border-violet-600"
							{...register("title", {
								required: "Title is required",
							})}
						/>

						{errors.title && (
							<p className="mt-1 text-sm text-red-500">
								{errors.title.message}
							</p>
						)}
					</div>

					{/* Amount */}
					<div>
						<label className="mb-2 block text-sm font-medium text-gray-700">
							Amount
						</label>

						<input
							type="number"
							placeholder="Enter amount"
							className="h-12 w-full rounded-xl border border-gray-300 px-4 outline-none transition focus:border-violet-600"
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
							<p className="mt-1 text-sm text-red-500">
								{errors.amount.message}
							</p>
						)}
					</div>

					{/* Category */}
					<div>
						<label className="mb-2 block text-sm font-medium text-gray-700">
							Category
						</label>

						<select
							className="h-12 w-full rounded-xl border border-gray-300 bg-white px-4 outline-none transition focus:border-violet-600"
							defaultValue=""
							{...register("category", {
								required: "Category is required",
							})}
						>
							<option value="" disabled>
								Select Category
							</option>

							{expenseCategories.map((category) => (
								<option key={category} value={category}>
									{category}
								</option>
							))}
						</select>

						{errors.category && (
							<p className="mt-1 text-sm text-red-500">
								{errors.category.message}
							</p>
						)}
					</div>

					{/* Date */}
					<div>
						<label className="mb-2 block text-sm font-medium text-gray-700">
							Date
						</label>

						<input
							type="date"
							className="h-12 w-full rounded-xl border border-gray-300 px-4 outline-none transition focus:border-violet-600"
							{...register("date", {
								required: "Date is required",
							})}
						/>

						{errors.date && (
							<p className="mt-1 text-sm text-red-500">
								{errors.date.message}
							</p>
						)}
					</div>
				</div>

				<div className="flex flex-col justify-end gap-3 sm:flex-row">
					<button
						type="submit"
						className="h-12 rounded-xl bg-violet-600 px-6 font-medium text-white transition hover:bg-violet-700"
					>
						Add Expense
					</button>

					<button
						type="button"
						onClick={() => reset()}
						className="h-12 rounded-xl border border-gray-300 px-6 font-medium transition hover:bg-gray-100"
					>
						Reset
					</button>
				</div>
			</form>
		</section>
	);
}
