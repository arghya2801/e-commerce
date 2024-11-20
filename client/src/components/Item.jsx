import React from 'react'

const Item = ({ name, price, category, description, quantity }) => {
    return (
      <div className="border border-solid-2 p-6 bg-white flex flex-col items-center">
        <h3 className="text-2xl font-semibold">{name}</h3>
        <p>Price: Rs {price}</p>
        <p>Category: {category}</p>
        <p>Description: {description}</p>
        <p>Quantity: {quantity}</p>
        <button className="bg-purple-700 rounded-md text-white p-2 mt-2">
          Add to Cart
        </button>
      </div>
    );
  };

export default Item