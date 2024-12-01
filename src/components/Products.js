import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
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

// Sample product data
const products = [
  { id: 1, name: "Pain Relief Gel", category: "Pain Relief", price: 120, unit: "100gms", image: "https://www.netmeds.com/images/product-v1/600x600/1099137/flamisun_instant_pain_relief_gel_50_gm_585385_0_0.jpg" },
  { id: 2, name: "Cough Syrup", category: "Cough & Cold", price: 80, unit: "100ml", image: "https://via.placeholder.com/150" },
  { id: 3, name: "Vitamin Tablets", category: "Vitamins", price: 150, unit: "30 tablets", image: "https://via.placeholder.com/150" },
  { id: 4, name: " Liya Floor Cleaner", category: "Floor cleaner", price: 50, unit: "50gms", image: p1 },
  { id: 5, name: "Liya Original Phenyle", category: "Phenyle", price: 200, unit: "50gms", image: p2 },
  { id: 6, name: "Liya Original Phenyle", category: "Phenyle", price: 300, unit: "30 tablets", image: p3 },
  { id: 7, name: "Liya Acid", category: "Stain remover", price: 100, unit: "20 tablets", image: p4 },
  { id: 8, name: "Liya Original Phenyle", category: "Phenyle", price: 180, unit: "50ml", image: p5 },
  { id: 9, name: "Liya Original Phenyle", category: "Phenyle", price: 140, unit: "30ml", image: p6 },
  { id: 10, name: "Liya Original Phenyle", category: "Phenyle", price: 90, unit: "10ml", image: p7 },
  { id: 11, name: "Liya Soap Oil", category: "Soap oil", price: 90, unit: "10ml", image: p8 },
  { id: 12, name: "Liya Original Phenyle", category: "Phenyle", price: 90, unit: "10ml", image: p9},
  { id: 13, name: "Liya Original Phenyle", category: "Phenyle", price: 90, unit: "10ml", image: p10 },
  { id: 14, name: "Bow Kennel Wash", category: "Kennel Wash", price: 90, unit: "10ml", image: p11 },
  { id: 15, name: "Yal Natural Hair oil", category: "Hair oil", price: 90, unit: "10ml", image: p12},
  { id: 16, name: "Coconut Oil Veterinary Soap", category: "Veterinary soap", price: 90, unit: "10ml", image: p13},
  { id: 17, name: "Liya Floor Cleaner", category: "Floor cleaner", price: 90, unit: "10ml", image: p14 },
  { id: 18, name: "Liya Toilet Cleaner", category: "Toilet Cleaner", price: 90, unit: "10ml", image: p15 },
  { id: 19, name: "Brand soap", category: "Soap", price: 90, unit: "10ml", image: p16 },
  { id: 20, name: "Bow Kennel Wash", category: "Kennel Wash", price: 90, unit: "10ml", image: p17 },
  { id: 21, name: "Liya Floor Cleaner", category: "Floor Cleaner", price: 90, unit: "10ml", image: p18 },
  { id: 22, name: "Liya Toilet Cleaner", category: "Toilet Cleaner", price: 90, unit: "10ml", image: p19 },
];

const Products = ({ onAddToCart }) => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [sortOption, setSortOption] = useState("");

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

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold text-green-700 text-center mb-6">OUR PRODUCTS</h1>

      <div className="flex justify-between items-center mb-6">
        <div>
          <label className="mr-2 text-gray-700">Filter by Category:</label>
          <select
            className="p-2 border rounded"
            onChange={(e) => handleFilterChange(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Floor cleaner">Floor cleaner</option>
            <option value="Phenyle">Phenyle</option>
            <option value="Stain remover">Stain remover</option>
            <option value="Soap oil">Soap oil</option>
            <option value="Kennel Wash">Kennel Wash</option>
            <option value="Hair oil">Hair oil</option>
            <option value="Veterinary soap">Veterinary soap</option>
            <option value="Toilet Cleaner">Toilet Cleaner</option>
            <option value="Soap">Soap</option>
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

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow bg-white"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded-md transition-transform duration-300 hover:scale-125"
            />
            <div className="mt-4">
              <p className="text-sm text-yellow-600 font-semibold">{product.category}</p>
              <h2 className="text-lg font-bold mt-1">{product.name}</h2>
              <p className="text-sm text-gray-500">Unit: {product.unit}</p>
              <p className="text-green-600 font-bold mt-2">₹{product.price}.00 inc. GST</p>

              <div className="flex items-center justify-between mt-4">
                <input
                  type="number"
                  min="1"
                  defaultValue="1"
                  className="w-16 p-2 border rounded text-center"
                />
                <FaShoppingCart
                  className="text-blue-500 hover:text-red-600 text-2xl cursor-pointer ml-2"
                  title="Add to Cart"
                  onClick={() => onAddToCart(product)}
                />
              </div>
              <button className="w-full bg-green-500 text-white py-2 rounded mt-4 hover:bg-green-600">
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
