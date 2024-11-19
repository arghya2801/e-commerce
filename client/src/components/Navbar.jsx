import React from 'react'

const Navbar = () => {
  return (
    <>
      <div className='flex justify-around items-center bg-purple-600 py-4 text-white'>

        <div className='text-2xl font-semibold'>Navbar</div>
        <ul className='flex gap-4'>
          <li>Home</li>
          <li>Admin</li>
          <li>Cart</li>
        </ul>
      </div>
    </>
  )
}

export default Navbar