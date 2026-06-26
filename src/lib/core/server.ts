import { ApiResponse, Expense } from "../types";

const baseApiUrl = process.env.NEXT_PUBLIC_BASE_API_URL!;

// Server Mutaion
export const serverMutation = async (
	path: string,
	method: "GET" | "POST" | "PATCH" | "DELETE",
	data?: Expense,
): Promise<ApiResponse> => {
	const res = await fetch(`${baseApiUrl}${path}`, {
		method,
		headers: {
			"content-type": "application/json",
		},
		...(data && {
			body: JSON.stringify(data),
		}),
	});

	return res.json();
};
