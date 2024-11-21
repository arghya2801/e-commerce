import React from 'react'
import Navbar from '../components/Navbar.jsx'
import Sidebar from '../components/Sidebar.jsx'
import Item from '../components/Item.jsx'

const Cart = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <div className='ml-80 py-4 mr-10'>
        <h1 className='text-2xl font-semibold'>Cart</h1>
        <div className='grid grid-cols-3 gap-4 mt-4'>
          {localStorage.getItem('cartItems') ? 
            JSON.parse(localStorage.getItem('cartItems')).map((item, i) => (
              <Item
                key={`${item.name}-${i}`}
                name={item.name}
                price={item.price}
                category={item.category}
                description={item.description}
                quantity={item.quantity}
              />
            )) : <p className='col-span-3 text-center'>No items in cart</p>
          }
        </div>
      </div>
    </>
  )
}

export default Cart