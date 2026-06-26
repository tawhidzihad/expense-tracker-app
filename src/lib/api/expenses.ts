"use server";

import { serverQuery } from "../core/server";
import { ApiResponse, GetExpensesData } from "../types";

type GetAllExpensesParams = {
	page?: number;
	limit?: number;
	category?: string;
};

export const getAllExpenses = async ({
	page = 1,
	limit = 6,
	category,
}: GetAllExpensesParams): Promise<ApiResponse<GetExpensesData>> => {
	const params = new URLSearchParams();

	params.set("page", page.toString());
	params.set("limit", limit.toString());

	if (category) {
		params.set("category", category);
	}

	return serverQuery<GetExpensesData>(`/api/expense?${params.toString()}`);
};
