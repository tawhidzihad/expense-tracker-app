"use server";

import { serverMutation } from "../core/server";
import { ApiResponse, Expense, ExpenseFormData } from "../types";

// Adding new expense
export const addNewExpense = async (data: Expense): Promise<ApiResponse> => {
	return serverMutation("/api/expense", "POST", data);
};

// Update single expense
export const updateExpense = async (
	id: string,
	data?: ExpenseFormData,
): Promise<ApiResponse> => {
	return serverMutation(`/api/expense/${id}`, "PATCH", data);
};
