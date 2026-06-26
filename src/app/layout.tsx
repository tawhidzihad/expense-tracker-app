import Navbar from "@/components/shared/Navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
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
		<html
			data-scroll-behavior="smooth"
			lang="en"
			className={`${interFont.className} h-full antialiased scroll-smooth`}
		>
			<body className="min-h-full flex flex-col">
				<Navbar></Navbar>
				{children}
				<Toaster position="top-center" reverseOrder={false} />
			</body>
		</html>
	);
}
