import { ApiResponse } from "../types";

const baseApiUrl = process.env.NEXT_PUBLIC_BASE_API_URL!;

// Server Mutation
export const serverMutation = async (
	path: string,
	method: "GET" | "POST" | "PATCH" | "DELETE",
	data?: object,
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

// Server Query Fetching
export const serverQuery = async <T>(path: string): Promise<ApiResponse<T>> => {
	const res = await fetch(`${baseApiUrl}${path}`, {
		cache: "no-store",
	});

	return res.json();
};
