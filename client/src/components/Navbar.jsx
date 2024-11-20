import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <div className='flex justify-around items-center bg-purple-800 py-4 text-white'>

        <div className='text-4xl font-semibold'>Navbar</div>
        <ul className='flex gap-4'>
          <li><Link to="/">Home</Link></li>
          <li>Admin</li>
          <li><Link to="/cart">Cart</Link></li>
        </ul>
      </div>
    </>
  )
}

export default Navbar