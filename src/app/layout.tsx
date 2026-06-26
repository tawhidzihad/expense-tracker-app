import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const interFont = Inter({
	variable: "--font-inter",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Expense Tracker | Manage Your Daily Expenses",
	description:
		"A modern and responsive expense tracker application built with Next.js and TypeScript. Easily add, edit, delete, and organize your daily expenses while tracking your spending by category.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={`${interFont.className} h-full antialiased`}>
			<body className="min-h-full flex flex-col">{children}</body>
		</html>
	);
}
