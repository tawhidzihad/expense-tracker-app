"use client";

import { Pagination } from "@heroui/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

type ExpensePaginationProps = {
	totalItems: number;
	itemsPerPage?: number;
};

export default function ExpensePagination({
	totalItems,
	itemsPerPage = 6,
}: ExpensePaginationProps) {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();

	const currentPage = Number(searchParams.get("page")) || 1;

	const totalPages = Math.ceil(totalItems / itemsPerPage);

	const getPageNumbers = (): (number | "ellipsis")[] => {
		const pages: (number | "ellipsis")[] = [];

		pages.push(1);

		if (currentPage > 3) {
			pages.push("ellipsis");
		}

		const start = Math.max(2, currentPage - 1);
		const end = Math.min(totalPages - 1, currentPage + 1);

		for (let i = start; i <= end; i++) {
			pages.push(i);
		}

		if (currentPage < totalPages - 2) {
			pages.push("ellipsis");
		}

		if (totalPages > 1) {
			pages.push(totalPages);
		}

		return pages;
	};

	const changePage = (page: number): void => {
		const params = new URLSearchParams(searchParams.toString());

		params.set("page", page.toString());

		router.replace(`${pathname}?${params.toString()}`);
	};

	const startItem = (currentPage - 1) * itemsPerPage + 1;

	const endItem = Math.min(currentPage * itemsPerPage, totalItems);

	return (
		<div className="mx-auto mt-8 w-full max-w-7xl">
			<Pagination className="w-full">
				<div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
					<Pagination.Summary className="text-center md:text-left">
						Showing {startItem}-{endItem} of {totalItems} results
					</Pagination.Summary>

					<Pagination.Content className="flex flex-wrap items-center justify-center gap-1 md:justify-end">
						<Pagination.Item>
							<Pagination.Previous
								isDisabled={currentPage === 1}
								onPress={() => changePage(currentPage - 1)}
							>
								<Pagination.PreviousIcon />
								<span className="hidden sm:inline">Previous</span>
							</Pagination.Previous>
						</Pagination.Item>

						{getPageNumbers().map((page, index) =>
							page === "ellipsis" ? (
								<Pagination.Item key={index}>
									<Pagination.Ellipsis />
								</Pagination.Item>
							) : (
								<Pagination.Item key={page}>
									<Pagination.Link
										isActive={page === currentPage}
										onPress={() => changePage(page)}
									>
										{page}
									</Pagination.Link>
								</Pagination.Item>
							),
						)}

						<Pagination.Item>
							<Pagination.Next
								isDisabled={currentPage === totalPages}
								onPress={() => changePage(currentPage + 1)}
							>
								<span className="hidden sm:inline">Next</span>
								<Pagination.NextIcon />
							</Pagination.Next>
						</Pagination.Item>
					</Pagination.Content>
				</div>
			</Pagination>
		</div>
	);
}
