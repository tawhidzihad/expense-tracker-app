export default function ExpenseEmptyState() {
	return (
		<div className="mx-auto flex max-w-7xl flex-col items-center justify-center rounded-2xl border border-dashed border-default-300 bg-white px-6 py-16 text-center">
			<h2 className="text-2xl font-bold text-default-700">
				No Expenses Found
			</h2>

			<p className="mt-2 max-w-md text-default-500">
				You haven&apos;t added any expenses yet. Start by adding your first
				expense to keep track of your spending.
			</p>
		</div>
	);
}
