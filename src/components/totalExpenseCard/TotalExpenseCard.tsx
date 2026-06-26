import Image from "next/image";
import { MdAttachMoney } from "react-icons/md";

type TotalExpenseCardProps = {
	totalExpenseAmount: number;
};

export default function TotalExpenseCard({
	totalExpenseAmount,
}: TotalExpenseCardProps) {
	return (
		<div className="mx-auto mt-5 max-w-7xl rounded-xl border bg-white">
			<div className="flex items-center justify-between gap-5 px-5 py-5">
				<div>
					<p className="text-lg font-medium text-default-500">
						Total Expense
					</p>

					<h2 className="mt-2 flex items-center font-bold">
						<span className="text-violet-600">
							<MdAttachMoney className="text-2xl md:text-4xl" />
						</span>

						<span className="text-2xl md:text-4xl">
							{totalExpenseAmount}
						</span>
					</h2>
				</div>

				<div>
					<Image
						src="/expense-wallet.png"
						alt="Expense Wallet"
						width={240}
						height={140}
						priority
						className="h-auto w-30 md:w-56 object-contain"
					/>
				</div>
			</div>
		</div>
	);
}
