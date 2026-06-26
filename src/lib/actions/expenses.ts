"use server";

import { serverMutation } from "../core/server";
import { ApiResponse, Expense } from "../types";

export const addNewExpense = async (data: Expense): Promise<ApiResponse> => {
	return serverMutation("/api/expense", "POST", data);
};
