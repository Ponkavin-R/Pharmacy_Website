import React, { useState } from "react";
import { FaShoppingCart, FaTimes } from "react-icons/fa";
 import p1 from '../assest/products/p1.JPG';
 import p2 from '../assest/products/p2.JPG';
 import p3 from '../assest/products/p3.JPG';
 import p4 from '../assest/products/p4.JPG';
 import p5 from '../assest/products/p5.JPG';
 import p6 from '../assest/products/p6.JPG';
 import p7 from '../assest/products/p7.JPG';
 import p8 from '../assest/products/p8.JPG';
 import p9 from '../assest/products/p9.JPG';
 import p10 from '../assest/products/p10.JPG';
 import p11 from '../assest/products/p11.JPG';
 import p12 from '../assest/products/p12.JPG';
 import p13 from '../assest/products/p13.JPG';
 import p14 from '../assest/products/p14.JPG';
 import p15 from '../assest/products/p15.JPG';
 import p16 from '../assest/products/p16.JPG';
 import p17 from '../assest/products/p17.JPG';
 import p18 from '../assest/products/p18.jpg';
 import p19 from '../assest/products/p19.jpg';
 import p01 from '../assest/products/01.jpg';
 import p02 from '../assest/products/02.jpg';
 import p03 from '../assest/products/03.jpg';

// Sample product data
const products = [
  { id: 1, name: "Root cleaner", category: "Pain Relief", price: 350, unit: "1", image: p01 },
  { id: 2, name: "Raja Kalpa Sooranam", category: "Cough & Cold", price: 1300, unit: "1", image: p02 },
  { id: 3, name: "Rabbit hair growth Oil", category: "Hair oil", price: 250, unit: "1", image: p03},
  { id: 4, name: " Liya Floor Cleaner", category: "Floor cleaner", price: 499, unit: "10Lit", image: p1 },
  { id: 5, name: "Liya Original Phenyle", category: "Phenyle", price: 199, unit: "1", image: p2 },
  { id: 6, name: "Liya Original Phenyle", category: "Phenyle", price: 199, unit: "1", image: p3 },
  { id: 7, name: "Liya Acid", category: "Stain remover", price: 199, unit: "10Pics", image: p4 },
  { id: 8, name: "Liya Original Phenyle", category: "Phenyle", price: 199, unit: "1", image: p5 },
  { id: 9, name: "Liya Original Phenyle", category: "Phenyle", price: 199, unit: "1", image: p6 },
  { id: 10, name: "Liya Original Phenyle", category: "Phenyle", price: 199, unit: "1", image: p7 },
  { id: 11, name: "Liya Soap Oil", category: "Soap oil", price: 399, unit: "10Lit", image: p8 },
  { id: 12, name: "Liya Original Phenyle", category: "Phenyle", price: 199, unit: "1", image: p9},
  { id: 13, name: "Liya Original Phenyle", category: "Phenyle", price: 199, unit: "1", image: p10 },
  { id: 14, name: "Bow Kennel Wash", category: "Kennel Wash", price: 199, unit: "1", image: p11 },
  { id: 15, name: "Yal Natural Hair oil", category: "Hair oil", price: 149, unit: "1", image: p12},
  { id: 16, name: "Coconut Oil Veterinary Soap", category: "Veterinary soap", price: 69, unit: "1", image: p13},
  { id: 17, name: "Liya Floor Cleaner", category: "Floor cleaner", price: 499, unit: "10Lit", image: p14 },
  { id: 18, name: "Liya Toilet Cleaner", category: "Toilet Cleaner", price: 199, unit: "1", image: p15 },
  { id: 19, name: "Brand soap", category: "Soap", price: 69, unit: "1", image: p16 },
  { id: 20, name: "Bow Kennel Wash", category: "Kennel Wash", price: 199, unit: "1", image: p17 },
  { id: 21, name: "Liya Floor Cleaner", category: "Floor Cleaner", price: 499, unit: "10Lit", image: p18 },
  { id: 22, name: "Liya Toilet Cleaner", category: "Toilet Cleaner", price: 199, unit: "1", image: p19 },
];
const Products = ({ onAddToCart }) => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [sortOption, setSortOption] = useState("");
  const [quantities, setQuantities] = useState({});

  // Filter products by category
  const handleFilterChange = (category) => {
    if (category === "All") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((product) => product.category === category);
      setFilteredProducts(filtered);
    }
  };

  // Sort products
  const handleSortChange = (option) => {
    setSortOption(option);
    const sortedProducts = [...filteredProducts].sort((a, b) => {
      if (option === "priceAsc") return a.price - b.price;
      if (option === "priceDesc") return b.price - a.price;
      if (option === "nameAsc") return a.name.localeCompare(b.name);
      return 0;
    });
    setFilteredProducts(sortedProducts);
  };

  // Handle quantity input
  const handleQuantityChange = (id, value) => {
    setQuantities({ ...quantities, [id]: Number(value) });
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold text-green-700 text-center mb-6">OUR PRODUCTS</h1>

      {/* Filter and Sort Controls */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <label className="mr-2 text-gray-700">Filter by Category:</label>
          <select
            className="p-2 border rounded"
            onChange={(e) => handleFilterChange(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Floor cleaner">Floor cleaner</option>
            <option value="Pain Relief">Pain Relief</option>
            <option value="Hair oil">Hair oil</option>
          </select>
        </div>

        <div>
          <label className="mr-2 text-gray-700">Sort by:</label>
          <select
            className="p-2 border rounded"
            value={sortOption}
            onChange={(e) => handleSortChange(e.target.value)}
          >
            <option value="">Select</option>
            <option value="priceAsc">Price (Low to High)</option>
            <option value="priceDesc">Price (High to Low)</option>
            <option value="nameAsc">Name (A-Z)</option>
          </select>
        </div>
      </div>

      {/* Products List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-center">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow bg-white"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-fill rounded-md transition-transform duration-300 hover:scale-110"
            />
            <div className="mt-4">
              <p className="text-sm text-yellow-600 font-semibold">{product.category}</p>
              <h3 className="text-lg font-bold">{product.name}</h3>
              <p className="text-gray-600">₹{product.price}</p>
              <p className="text-gray-500">Unit: {product.unit}</p>
            </div>

            {/* Quantity Input */}
            <div className="mt-4">
              <label htmlFor={`quantity-${product.id}`} className="block text-sm text-gray-700 mb-2 text-start">
                Quantity:
              </label>
              <input
                type="number"
                min="1"
                placeholder="Quantity"
                value={quantities[product.id] || ""}
                className="w-full p-2 border rounded-md"
                onChange={(e) => handleQuantityChange(product.id, e.target.value)}
              />
            </div>

            {/* Add to Cart Button */}
            <div className="mt-4">
              <button
                className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600 transition"
                onClick={() =>
                  onAddToCart({ ...product, quantity: quantities[product.id] || 1 })
                }
              >
                <FaShoppingCart className="inline mr-2" />
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;