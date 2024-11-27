import React, { useState } from "react";
import { FaCartPlus, FaHeart } from "react-icons/fa"; // Import cart and favorite icons

const products = [
  { id: 1, name: "Pain Relief Gel", category: "Pain Relief", price: 120, unit: "100gms", image: "https://www.netmeds.com/images/product-v1/600x600/1099137/flamisun_instant_pain_relief_gel_50_gm_585385_0_0.jpg" },
  { id: 2, name: "Cough Syrup", category: "Cough & Cold", price: 80, unit: "100ml", image: "https://via.placeholder.com/150" },
  { id: 3, name: "Vitamin Tablets", category: "Vitamins", price: 150, unit: "30 tablets", image: "https://via.placeholder.com/150" },
  { id: 4, name: "Antibiotic Ointment", category: "First Aid", price: 50, unit: "50gms", image: "https://via.placeholder.com/150" },
  { id: 5, name: "Skin Cream", category: "Dermatology", price: 200, unit: "50gms", image: "https://via.placeholder.com/150" },
  { id: 6, name: "Diabetic Medicine", category: "Diabetes Care", price: 300, unit: "30 tablets", image: "https://via.placeholder.com/150" },
  { id: 7, name: "Antacid Tablets", category: "Digestion", price: 100, unit: "20 tablets", image: "https://via.placeholder.com/150" },
  { id: 8, name: "Allergy Spray", category: "Allergy Care", price: 180, unit: "50ml", image: "https://via.placeholder.com/150" },
  { id: 9, name: "Nasal Spray", category: "Cold Care", price: 140, unit: "30ml", image: "https://via.placeholder.com/150" },
  { id: 10, name: "Eye Drops", category: "Eye Care", price: 90, unit: "10ml", image: "https://via.placeholder.com/150" },
];

const Products = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [sortOption, setSortOption] = useState("");

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

  const handleFilterChange = (category) => {
    if (category === "All") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((product) => product.category === category);
      setFilteredProducts(filtered);
    }
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
            <option value="Pain Relief">Pain Relief</option>
            <option value="Cough & Cold">Cough & Cold</option>
            <option value="Vitamins">Vitamins</option>
            <option value="First Aid">First Aid</option>
            <option value="Dermatology">Dermatology</option>
            <option value="Diabetes Care">Diabetes Care</option>
            <option value="Digestion">Digestion</option>
            <option value="Allergy Care">Allergy Care</option>
            <option value="Cold Care">Cold Care</option>
            <option value="Eye Care">Eye Care</option>
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
              className="w-full h-48 object-cover rounded-md"
            />
            <FaHeart className=" text-red-500 hover:text-green-600 text-2xl mt-2 cursor-pointer" title="Add to Favorites" />

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
                 <button className=" w-fit p-8 bg-green-500 text-white py-2 rounded hover:bg-green-600">
                Buy Now
              </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
