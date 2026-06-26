import AddExpenseForm from "@/components/expenseAddForm/AddExpenseForm";
import ExpenseFilter from "@/components/expenseFilter/ExpenseFilter";
import TotalExpenseCard from "@/components/totalExpenseCard/TotalExpenseCard";

export default function Home() {
	return (
		<div className="bg-[#f8f9fc] px-4 space-y-8 lg:px-0">
			<TotalExpenseCard></TotalExpenseCard>
			<AddExpenseForm></AddExpenseForm>
			<ExpenseFilter></ExpenseFilter>
		</div>
	);
}
