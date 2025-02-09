import { useCartStore } from "../stores/useCartStore";
import { Link } from "react-router-dom";
import { MoveRight } from "lucide-react";
import axios from "../lib/axios";

const OrderSummary = () => {
	const { total, subtotal, cart } = useCartStore();

	const savings = subtotal - total;
	const formattedSubtotal = subtotal.toFixed(2);
	const formattedTotal = total.toFixed(2);
	const formattedSavings = savings.toFixed(2);

	const handlePayment = async () => {
		try {
			const res = await axios.post("/payments/create-checkout-session", {
				products: cart,
			});
			console.log("Payment initiated:", res.data);
		} catch (error) {
			console.error("Payment error:", error);
		}
	};

	return (
		<div className='space-y-4 rounded-lg border border-[#8519a6] p-4 shadow-sm sm:p-6'>
			<p className='text-xl font-semibold text-[#8519a6]'>Order summary</p>

			<div className='space-y-4'>
				<div className='space-y-2'>
					<dl className='flex items-center justify-between gap-4 border-t border-gray-600 pt-2'>
						<dt className='text-base font-bold'>Total</dt>
						<dd className='text-base font-bold text-[#8519a6]'>Rs. {formattedTotal}</dd>
					</dl>
				</div>

				<button
					className='flex w-full items-center justify-center rounded-lg bg-[#8519a6] px-5 py-2.5 text-sm font-medium text-white hover:bg-[#7a00e6] focus:outline-none focus:ring-4 focus:ring-[#7a00e6]/50'
					onClick={handlePayment}
				>
					Proceed to Checkout
				</button>

				<div className='flex items-center justify-center gap-2'>
					<span className='text-sm font-normal'>or</span>
					<Link
						to='/'
						className='inline-flex items-center gap-2 text-sm font-medium text-[#8519a6] underline hover:text-[#7a00e6] hover:no-underline'
					>
						Continue Shopping
						<MoveRight size={16} />
					</Link>
				</div>
			</div>
		</div>
	);
};

export default OrderSummary;

