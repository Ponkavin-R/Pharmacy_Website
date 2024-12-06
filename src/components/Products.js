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
  { id: 4, name: " Liya Floor Cleaner", category: "Floor cleaner", price: 50, unit: "50gms", image: p1 },
  { id: 5, name: "Liya Original Phenyle", category: "Phenyle", price: 200, unit: "50gms", image: p2 },
  { id: 6, name: "Liya Original Phenyle", category: "Phenyle", price: 300, unit: "30 tablets", image: p3 },
  { id: 7, name: "Liya Acid", category: "Stain remover", price: 199, unit: "10 Pics", image: p4 },
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
  const [showAddressPopup, setShowAddressPopup] = useState(false);
  const [userData, setUserData] = useState({
    name: "",
    phone: "",
    address: ""
  });
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Handle "Buy Now" button click
  const handleBuyNow = (product) => {
    setSelectedProduct(product); // Store selected product
    setShowAddressPopup(true); // Show the address popup
  };

  // Handle form submission and send data to WhatsApp
  const handleAddressSubmit = () => {
    if (!userData.name || !userData.phone || !userData.address) {
      alert("Please fill in all fields");
      return;
    }
    const message = `Hello! I am interested in buying the following product:\n\nProduct: ${selectedProduct.name}\nCategory: ${selectedProduct.category}\nPrice: ₹${selectedProduct.price}\nUnit: ${selectedProduct.unit}\n\nShipping Details:\nName: ${userData.name}\nPhone: ${userData.phone}\nAddress: ${userData.address}`;
    const whatsappURL = `https://wa.me/6381194126?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
    setShowAddressPopup(false); // Close the address popup after submission
  };

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
              className="w-full h-48 object-fill rounded-md transition-transform duration-300 hover:scale-110"
            />
            <div className="mt-4">
              <p className="text-sm text-yellow-600 font-semibold">{product.category}</p>
              <h3 className="text-lg font-bold">{product.name}</h3>
              <p className="text-gray-600">₹{product.price}</p>
              <p className="text-gray-500">Unit: {product.unit}</p>
            </div>
            <div className="mt-4 flex justify-between">
              <button
                className="bg-green-500 text-white p-2 rounded hover:bg-green-600 transition"
                onClick={() => onAddToCart(product)}
              >
                <FaShoppingCart className="inline mr-2" />
                Add to Cart
              </button>
              <button
                className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
                onClick={() => handleBuyNow(product)}
              >
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Address Popup */}
      {showAddressPopup && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-96 relative">
            <button
              onClick={() => setShowAddressPopup(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-black"
            >
              <FaTimes size={28} />
            </button>
            <h3 className="text-lg font-bold mb-4">Enter Shipping Details</h3>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                value={userData.name}
                onChange={(e) => setUserData({ ...userData, name: e.target.value })}
                className="w-full px-4 py-2 border rounded-md text-black"
              />
              <input
                type="text"
                placeholder="Phone"
                value={userData.phone}
                onChange={(e) => setUserData({ ...userData, phone: e.target.value })}
                className="w-full px-4 py-2 border rounded-md text-black"
              />
              <textarea
                placeholder="Address"
                value={userData.address}
                onChange={(e) => setUserData({ ...userData, address: e.target.value })}
                className="w-full px-4 py-2 border rounded-md text-black"
              ></textarea>
            </div>
            <button
              onClick={handleAddressSubmit}
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 mt-4"
            >
              Submit and Buy
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;