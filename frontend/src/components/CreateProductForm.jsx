import React, { useState } from "react";
import { useProductStore } from "../stores/useProductStore.js";

const CreateProductForm = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    stock: "",
  });

  const { createProduct, loading } = useProductStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!newProduct.name || !newProduct.description || !newProduct.price || !newProduct.category) {
        throw new Error("All fields are required.");
      }
      await createProduct(newProduct);
      setNewProduct({
        name: "",
        description: "",
        price: "",
        category: "",
        stock: "",
      });
    } catch (error) {
      console.error("Error in createProduct controller", error.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit} className="p-4">
          <div className="mb-4">
            <label className="block mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={newProduct.name}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-100"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="description">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={newProduct.description}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-100"
              rows={6}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="price">
              Price
            </label>
            <input
              type="number"
              id="price"
              name="price"
              value={newProduct.price}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-100"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="category">
              Category
            </label>
            <select
              id="category"
              name="category"
              value={newProduct.category}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-100"
            >
              <option value="">Select</option>
              <option value="electronics">Electronics</option>
              <option value="clothing">Clothing</option>
              <option value="accessories">Accessories</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="stock">
              Stock
            </label>
            <input
              type="number"
              id="stock"
              name="stock"
              value={newProduct.stock}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-100"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#78009c] px-4 py-2 text-white"
            disabled={loading}
          >
            Create Product
          </button>
        </form>
      </div>
    </>
  );
};

export default CreateProductForm;

