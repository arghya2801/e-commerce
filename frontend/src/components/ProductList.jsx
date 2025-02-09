import React, { useState, useEffect } from "react";
import axios from "../lib/axios.js";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get("/products");
      setProducts(response.data.products);
    };

    fetchProducts();
  }, []);

  return (
    <>
      <div className="flex flex-col items-center gap-4">
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="px-4 py-2 text-center">Product</th>
              <th className="px-4 py-2 text-center">Price</th>
              <th className="px-4 py-2 text-center">Stock</th>
              <th className="px-4 py-2 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id} className="hover:bg-gray-100 even:bg-white odd:bg-gray-50">
                <td className="px-4 py-3 text-center">{product.name}</td>
                <td className="px-4 py-3 text-center">₹ {product.price}</td>
                <td className="px-4 py-3 text-center">{product.stock}</td>
                <td className="px-4 py-3 text-center">
                  <button className="text-blue-500 mr-2">Edit</button>
                  <button className="text-red-500">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ProductList;

