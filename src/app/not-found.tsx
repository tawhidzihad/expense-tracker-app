import { Button } from "@heroui/react";
import { House, SearchX } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
	return (
		<div className="flex min-h-screen items-center justify-center bg-[#f8f9fc] px-4">
			<div className="w-full max-w-2xl rounded-3xl border border-default-200 bg-white p-10 text-center shadow-sm">
				{/* Icon */}
				<div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-violet-100">
					<SearchX className="size-12 text-violet-600" />
				</div>

				{/* 404 */}
				<h1 className="mt-8 text-7xl font-extrabold tracking-tight text-violet-600">
					404
				</h1>

				<h2 className="mt-4 text-3xl font-bold text-default-800">
					Page Not Found
				</h2>

				<p className="mx-auto mt-4 max-w-lg text-default-500">
					Sorry, the page you&apos;re looking for doesn&apos;t exist or may
					have been moved.
				</p>

				{/* Buttons */}
				<div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
					<Link href={"/"}>
						<Button className={"rounded"}>
							<House className="size-5" />
							Go to Home
						</Button>
					</Link>
				</div>
			</div>
		</div>
	);
}
