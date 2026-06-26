export const expenseCategories = [
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

export type ExpenseCategory = (typeof expenseCategories)[number];

export interface Expense {
	id: string;
	title: string;
	category: ExpenseCategory;
	amount: number;
	date: string;
}
