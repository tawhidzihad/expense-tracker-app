import Image from "next/image";
import { MdAttachMoney } from "react-icons/md";

export default function TotalExpenseCard() {
	return (
		<div className="border max-w-7xl mx-auto rounded-xl mt-5 bg-white">
			<div className="flex items-center justify-between px-5 py-5">
				<div>
					<p className="text-lg font-medium text-default-500">
						Total Expense
					</p>

					<h2 className="mt-2 flex items-center text-3xl font-bold tracking-tight">
						<span className="text-violet-600">
							<MdAttachMoney />
						</span>
						<span>12,850.00</span>
					</h2>
				</div>

				<div>
					<Image
						src="/expense-wallet.png"
						alt="Expense Wallet"
						width={240}
						height={140}
						priority
						className="hidden h-auto w-56 object-contain md:block"
					/>
				</div>
			</div>
		</div>
	);
}
