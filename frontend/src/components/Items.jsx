import React, { useState, useEffect } from 'react';
import axios from '../lib/axios.js';
import { useCartStore } from '../stores/useCartStore.js';

const Items = ({ category }) => {
  const [products, setProducts] = useState([]);
  const addToCart = useCartStore((state) => state.addToCart);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get(`/products${category ? `/category/${category}` : ''}`);
      setProducts(response.data.products);
    };

    fetchProducts();
  }, [category]);

  return (
    <div className="ml-64 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map((product) => (
        <div key={product._id} className="bg-white border rounded-lg shadow-lg p-4">
          <h3 className="text-lg font-semibold">{product.name}</h3>
          <p className="text-gray-600">Price: ₹{product.price}</p>
          <p className="text-gray-600">Stock: {product.stock}</p>
          <p className="text-gray-600">{product.description}</p>
          <button
            className="mt-2 bg-[#78009c] text-white px-3 py-1 rounded"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Items;

