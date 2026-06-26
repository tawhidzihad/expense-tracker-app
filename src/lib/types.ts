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
	title: string;
	category: ExpenseCategory;
	amount: number;
	date: string;
}

export type ApiResponse = {
	success: boolean;
	message: string;
	data?: unknown;
};
