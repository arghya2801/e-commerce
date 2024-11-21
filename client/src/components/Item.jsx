import React from 'react'
import { useState } from 'react';

const Item = ({ name, price, category, description, quantity }) => {
  const [itemData, setItemData] = useState(
    JSON.parse(localStorage.getItem('itemData')) || []
  );

  const addItemToCart = () => {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const itemExists = cartItems.some((item) => item.name === name);
    if (!itemExists) {
      const newCartItems = [...cartItems, { name, price, category, description, quantity }];
      localStorage.setItem('cartItems', JSON.stringify(newCartItems));
      console.log('Item added to cart');
    } else {
      console.log('Item already exists in cart');
    }
  };
  
  const deleteItem = (id) => {
    const filteredItems = itemData.filter((item) => item.name !== id);
    localStorage.setItem('itemData', JSON.stringify(filteredItems));
    setItemData(filteredItems);
    console.log('Item deleted from main database');
  };

  return (
    <div className="border border-solid-2 p-6 bg-white flex flex-col items-center">
      <h3 className="text-2xl font-semibold">{name}</h3>
      <p>Price: Rs {price}</p>
      <p>Category: {category}</p>
      <p>Description: {description}</p>
      <p>Quantity: {quantity}</p>
      <div className='flex gap-4'>
        <button
          className="bg-purple-700 rounded-md text-white p-2 mt-2"
          onClick={addItemToCart}
        >
          Add to Cart
        </button>
        <button
          className="bg-purple-700 rounded-md text-white p-2 mt-2"
          onClick={() => deleteItem(name)}
        >
          Delete Item
        </button>
      </div>
    </div>
  );
};

export default Item