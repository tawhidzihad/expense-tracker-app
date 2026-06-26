export default function Loading() {
	return (
		<div className="flex min-h-screen flex-col items-center justify-center bg-[#f8f9fc] px-4">
			{/* Wallet */}
			<div className="relative">
				<div className="relative h-28 w-36 overflow-hidden rounded-2xl border-4 border-violet-700 bg-linear-to-br from-violet-600 to-purple-700 shadow-2xl">
					{/* Wallet Strap */}
					<div className="absolute top-6 right-0 h-10 w-8 rounded-l-xl bg-violet-800" />

					{/* Wallet Button */}
					<div className="absolute top-10 right-3 h-3 w-3 rounded-full bg-yellow-300" />
				</div>

				{/* Coin 1 */}
				<div className="absolute left-4 -top-16 h-10 w-10 animate-[coinDrop_1.8s_ease-in-out_infinite] rounded-full bg-yellow-400 shadow-lg">
					<span className="flex h-full items-center justify-center text-lg font-bold text-yellow-900">
						$
					</span>
				</div>

				{/* Coin 2 */}
				<div className="absolute left-14 -top-28 h-10 w-10 animate-[coinDrop_1.8s_0.4s_ease-in-out_infinite] rounded-full bg-yellow-400 shadow-lg">
					<span className="flex h-full items-center justify-center text-lg font-bold text-yellow-900">
						$
					</span>
				</div>

				{/* Coin 3 */}
				<div className="absolute left-24 -top-20 h-10 w-10 animate-[coinDrop_1.8s_0.8s_ease-in-out_infinite] rounded-full bg-yellow-400 shadow-lg">
					<span className="flex h-full items-center justify-center text-lg font-bold text-yellow-900">
						$
					</span>
				</div>
			</div>

			{/* Text */}
			<div className="mt-14 text-center">
				<h2 className="text-3xl font-bold text-violet-700">
					Tracking Expenses...
				</h2>

				<p className="mt-2 text-default-500">
					Loading your financial records
				</p>

				{/* Animated dots */}
				<div className="mt-6 flex justify-center gap-2">
					<span className="h-3 w-3 animate-bounce rounded-full bg-violet-500" />

					<span className="h-3 w-3 animate-bounce rounded-full bg-violet-500 [animation-delay:.2s]" />

					<span className="h-3 w-3 animate-bounce rounded-full bg-violet-500 [animation-delay:.4s]" />
				</div>
			</div>
		</div>
	);
}
