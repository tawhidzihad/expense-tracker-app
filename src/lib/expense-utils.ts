import type { ExpenseCategory } from "./types";

export const badgeColors: Record<ExpenseCategory, string> = {
	Food: "bg-green-100 text-green-700",

	Transport: "bg-blue-100 text-blue-700",

	Shopping: "bg-purple-100 text-purple-700",

	Groceries: "bg-emerald-100 text-emerald-700",

	Bills: "bg-orange-100 text-orange-700",

	Healthcare: "bg-red-100 text-red-700",

	Education: "bg-cyan-100 text-cyan-700",

	Entertainment: "bg-pink-100 text-pink-700",

	Travel: "bg-sky-100 text-sky-700",

	Rent: "bg-yellow-100 text-yellow-700",

	Utilities: "bg-gray-200 text-gray-700",

	Salary: "bg-lime-100 text-lime-700",

	Investment: "bg-indigo-100 text-indigo-700",

	Gift: "bg-rose-100 text-rose-700",

	"Personal Care": "bg-violet-100 text-violet-700",

	Subscriptions: "bg-teal-100 text-teal-700",

	Others: "bg-slate-200 text-slate-700",
};

export const formatCurrency = (amount: number): string => {
	return `৳${amount.toLocaleString("en-BD", {
		minimumFractionDigits: 2,
		maximumFractionDigits: 2,
	})}`;
};

export const formatDate = (date: string): string => {
	return new Date(date).toLocaleDateString("en-GB", {
		day: "2-digit",
		month: "short",
		year: "numeric",
	});
};
