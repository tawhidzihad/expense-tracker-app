"use client";

import { Button } from "@heroui/react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

	return (
		<nav className="sticky top-0 z-50 backdrop-blur-xl bg-[#f8f9fc]">
			<div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-0">
				{/* Left Side */}
				<div className="flex items-center gap-3">
					<button
						onClick={() => setIsMenuOpen(!isMenuOpen)}
						className="rounded-lg p-2 transition hover:bg-default-100 md:hidden"
						aria-label="Toggle Menu"
					>
						{isMenuOpen ? (
							<X className="size-5" />
						) : (
							<Menu className="size-5" />
						)}
					</button>

					<Link href="/" className="flex items-center gap-3">
						<Image
							src="/logo.png"
							alt="Expense Tracker Logo"
							width={40}
							height={40}
							priority
							className="size-10 object-contain"
						/>

						<span className="font-semibold text-lg">Expense Tracker</span>
					</Link>
				</div>

				{/* Desktop Buttons */}
				<div className="hidden items-center gap-3 md:flex">
					<Link href={"#add-expense"}>
						<Button
							variant="outline"
							className="w-full rounded-xl"
							onPress={() => setIsMenuOpen(false)}
						>
							Add Expense
						</Button>
					</Link>
				</div>
			</div>

			{/* Mobile Menu */}
			{isMenuOpen && (
				<div className="border-t bg-white md:hidden">
					<div className="p-4">
						<Link href={"#add-expense"}>
							<Button
								variant="outline"
								className="w-full rounded-xl"
								onPress={() => setIsMenuOpen(false)}
							>
								Add Expense
							</Button>
						</Link>
					</div>
				</div>
			)}
		</nav>
	);
}
