import ExpenseTable from "@/components/allExpensesComponents/ExpenseTable";
import AddExpenseForm from "@/components/expenseAddForm/AddExpenseForm";
import ExpenseFilter from "@/components/expenseFilter/ExpenseFilter";
import ExpensePieChart from "@/components/ExpensePieChart/ExpensePieChart";
import TotalExpenseCard from "@/components/totalExpenseCard/TotalExpenseCard";
import { expenses } from "@/lib/expense-data";

export default function Home() {
	return (
		<div className="bg-[#f8f9fc] px-4 space-y-8 lg:px-0 pb-20">
			<TotalExpenseCard></TotalExpenseCard>
			<AddExpenseForm></AddExpenseForm>
			<ExpenseFilter></ExpenseFilter>
			<ExpenseTable></ExpenseTable>
			<ExpensePieChart expenses={expenses}></ExpensePieChart>
		</div>
	);
}
