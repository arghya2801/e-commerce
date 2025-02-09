import React, { useState } from 'react'

const Sidebar = () => {
  const [category, setCategory] = useState('all')

  const handleCategoryChange = (e) => {
    setCategory(e.target.value)
  }

  return (
    <>
    <aside className="mt-24 w-64 p-4 bg-white border-r border-gray-200">
      <h2 className="text-lg font-semibold mb-4">Categories</h2>
      <ul>
        <li>
          <label className="flex items-center">
            <input type="radio" name="category" value="electronics" checked={category === 'electronics'} onChange={handleCategoryChange} className="mr-2" />
            <span>Electronics</span>
          </label>
        </li>
        <li>
          <label className="flex items-center">
            <input type="radio" name="category" value="furniture" checked={category === 'furniture'} onChange={handleCategoryChange} className="mr-2" />
            <span>Furniture</span>
          </label>
        </li>
        <li>
          <label className="flex items-center">
            <input type="radio" name="category" value="clothing" checked={category === 'clothing'} onChange={handleCategoryChange} className="mr-2" />
            <span>Clothing</span>
          </label>
        </li>
        <li>
          <label className="flex items-center">
            <input type="radio" name="category" value="all" checked={category === 'all'} onChange={handleCategoryChange} className="mr-2" />
            <span>All</span>
          </label>
        </li>
      </ul>
    </aside>
    </>
  )
}
export default Sidebar

