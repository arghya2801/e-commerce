import React from 'react'
import { useState, useEffect } from 'react'
import axios from '../lib/axios'
import { useCartStore } from '../stores/useCartStore'
import CartItem from '../components/CartItem.jsx'
import OrderSummary from '../components/OrderSummary.jsx'

const CartPage = () => {
  // const { cart } = useCartStore()
  const { cart, getCartItems } = useCartStore();

  useEffect(() => {
    getCartItems();
  }, []);


  return (
    <>
      <div className='py-8 md:py-16'>
			<div className='mx-auto max-w-screen-xl px-4 2xl:px-0'>
				<div className='mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8'>
					<div className='mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl'>
						{cart.length === 0 ? (
							<EmptyCartUI />
						) : (
							<div className='space-y-6'>
								{cart.map((item) => (
									<CartItem key={item._id} item={item} quantity={item.quantity} />
								))}
							</div>
						)}
					</div>

					{cart.length > 0 && (
						<div className='mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full'>
							<OrderSummary />
						</div>
					)}
				</div>
			</div>
		</div>
    </>
  )
}


const EmptyCartUI = () => (
	<div className='flex flex-col items-center justify-center space-y-4 py-16'>
		<h3 className='text-2xl font-semibold '>Your cart is empty</h3>
		<p className='text-gray-400'>Looks like you {"haven't"} added anything to your cart yet.</p>
	</div>
);

export default CartPage;

