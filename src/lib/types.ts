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

// Add/Edit Expense Form
export interface ExpenseFormData {
	title: string;
	category: ExpenseCategory;
	amount: number;
	date: string;
}

// Expense from Database
export interface Expense extends ExpenseFormData {
	_id: string;
}

// Pagination Types
export interface Pagination {
	currentPage: number;
	totalPages: number;
	totalExpenses: number;
	limit: number;
}

// Summary Types
export interface CategorySummary {
	category: ExpenseCategory;
	totalAmount: number;
}

export interface ExpenseSummary {
	totalExpenseAmount: number;
	categorySummary: CategorySummary[];
}

// Get Expenses Response
export interface GetExpensesData {
	expenses: Expense[];
	pagination: Pagination;
	summary: ExpenseSummary;
}

// Common API Response
export interface ApiResponse<T = unknown> {
	success: boolean;
	message: string;
	data?: T;
}
