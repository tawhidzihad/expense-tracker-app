import ExpenseTable from "@/components/allExpensesComponents/ExpenseTable";
import AddExpenseForm from "@/components/expenseAddForm/AddExpenseForm";
import ExpenseFilter from "@/components/expenseFilter/ExpenseFilter";
import ExpensePieChart from "@/components/ExpensePieChart/ExpensePieChart";
import TotalExpenseCard from "@/components/totalExpenseCard/TotalExpenseCard";
import { getAllExpenses } from "@/lib/api/expenses";
import { ExpenseCategory } from "@/lib/types";

type HomeProps = {
	searchParams: Promise<{
		page?: string;
		category?: ExpenseCategory;
	}>;
};

export default async function Home({ searchParams }: HomeProps) {
	const params = await searchParams;

	const response = await getAllExpenses({
		page: Number(params.page) || 1,
		category: params.category,
	});

	const expenses = response.data?.expenses ?? [];
	const pagination = response.data?.pagination;
	const summary = response.data?.summary;

	return (
		<div className="space-y-8 bg-[#f8f9fc] px-4 pb-20 lg:px-0">
			{/* Total Expense */}
			<TotalExpenseCard
				totalExpenseAmount={summary?.totalExpenseAmount ?? 0}
			/>

			{/* Add Expense Form */}
			<AddExpenseForm />

			{/* Category Filter */}
			<ExpenseFilter />

			{/* Expenses Table */}
			<ExpenseTable
				expenses={expenses}
				totalItems={pagination?.totalExpenses ?? 0}
			/>

			{/* Pie Chart */}
			<ExpensePieChart categorySummary={summary?.categorySummary ?? []} />
		</div>
	);
}
