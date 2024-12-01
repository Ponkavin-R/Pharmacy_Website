import React, { useState } from "react";

const AdminUpload = ({ onAddProduct }) => {
  const [product, setProduct] = useState({
    name: "",
    category: "",
    price: "",
    unit: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setProduct((prev) => ({ ...prev, image: files[0] }));
    } else {
      setProduct((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!product.image) {
      alert("Please upload an image.");
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const newProduct = {
        id: Date.now(), // Unique ID
        name: product.name,
        category: product.category,
        price: parseFloat(product.price),
        unit: product.unit,
        image: reader.result, // Base64 image string
      };

      onAddProduct(newProduct);
      alert("Product added successfully!");
      setProduct({ name: "", category: "", price: "", unit: "", image: null });
    };
    reader.readAsDataURL(product.image);
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold text-blue-700 text-center mb-6">Admin - Add New Product</h1>

      <form className="max-w-md mx-auto bg-white p-6 rounded shadow" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Product Name</label>
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Category</label>
          <input
            type="text"
            name="category"
            value={product.category}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Price</label>
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Unit</label>
          <input
            type="text"
            name="unit"
            value={product.unit}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Image</label>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
            className="w-full p-2"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AdminUpload;
