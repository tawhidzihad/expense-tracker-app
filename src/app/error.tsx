"use client";

import { Button } from "@heroui/react";
import { AlertTriangle, RefreshCw } from "lucide-react";

type ErrorProps = {
	error: Error & { digest?: string };
	reset: () => void;
};

export default function Error({ error, reset }: ErrorProps) {
	return (
		<div className="flex min-h-screen items-center justify-center bg-[#f8f9fc] px-4">
			<div className="w-full max-w-xl rounded-3xl border border-default-200 bg-white p-10 text-center shadow-sm">
				{/* Icon */}
				<div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-red-100">
					<AlertTriangle className="size-12 text-red-500" />
				</div>

				{/* Title */}
				<h1 className="mt-8 text-3xl font-bold text-default-900">
					Oops! Something went wrong
				</h1>

				<p className="mt-3 text-default-500">
					We couldn&apos;t complete your request. Please try again or
					refresh the page.
				</p>

				{/* Error Message */}
				<div className="mt-8 rounded-xl border border-red-200 bg-red-50 p-4 text-left">
					<p className="text-sm font-semibold text-red-600">
						Error Details
					</p>

					<p className="mt-2 break-all text-sm text-red-500">
						{error.message || "An unexpected error occurred."}
					</p>
				</div>

				{/* Actions */}
				<div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
					<Button size="lg" onPress={() => reset()}>
						<RefreshCw className="size-4" /> Try Again
					</Button>

					<Button size="lg" onPress={() => window.location.reload()}>
						Refresh Page
					</Button>
				</div>
			</div>
		</div>
	);
}
