import React, { useState } from "react";
import { FaCartPlus } from "react-icons/fa"; // Import cart icon

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
  const [viewAll, setViewAll] = useState(false);
  const [quantities, setQuantities] = useState(products.reduce((acc, product) => {
    acc[product.id] = 1;
    return acc;
  }, {}));

  const handleQuantityChange = (id, increment) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(1, prev[id] + increment),
    }));
  };

  const displayedProducts = viewAll ? products : products.slice(0, 3);

  return (
    <div className="container flex flex-wrap justify-around  mx-auto p-4">
      {/* Banner */}
      <div className="flex flex-wrap w-full bg-yellow-100 rounded-lg shadow-md p-6 sm:flex-col lg:w-1/4">
        <div className="sm:w-full">
          <img
            src="https://img.freepik.com/premium-photo/happy-pharmacist-paper-bag-patient-with-clipboard-signature-prescription-consultation-pharmacy-black-man-medical-healthcare-professional-giving-medication-sick-customer_590464-216997.jpg"
            alt="Healthy Hair"
            className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
          />
        </div>
        <div className="sm:w-full text-justify p-6">
  <h1 className="text-3xl font-bold text-green-700">Nature's Wellness Pharmacy</h1>
  <p className="text-lg text-gray-700 mt-2 ">
    Explore our trusted range of medicines for all your health needs. We also specialize in crafting unique hair oils infused with natural extracts, including formulations using rabbit blood, to ensure strong and healthy hair.
  </p>
  <button
    className="mt-4 bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
    onClick={() => setViewAll(!viewAll)}
  >
    {viewAll ? "Show Less Products" : "View All Products"}
  </button>
</div>

      </div>

      {/* Products */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 h-fit lg:grid-cols-3 gap-6 mt-8">
        {displayedProducts.map((product) => (
          <div
            key={product.id}
            className="relative border rounded-lg p-4 shadow-lg hover:shadow-xl hover:border-green-500 transition-all group"
          >
            {/* Product Image */}
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded-md"
            />
            <div className="mt-4">
              <p className="text-sm text-yellow-600 font-semibold">{product.category}</p>
              <h2 className="text-lg font-bold mt-1">{product.name}</h2>
              <p className="text-sm text-gray-500">Unit: {product.unit}</p>
              <p className="text-green-600 font-bold mt-2">₹{product.price}.00 inc. GST</p>
            </div>

            {/* Hover Effect for Quantity and Cart */}
            <div className="absolute inset-0 bg-white bg-opacity-90 rounded-lg opacity-0 group-hover:opacity-100 flex items-center justify-center flex-col transition-opacity">
              <div className="flex items-center space-x-2 mb-4">
                <button
                  className="bg-gray-200 text-gray-700 rounded-full px-3 py-1"
                  onClick={() => handleQuantityChange(product.id, -1)}
                >
                  -
                </button>
                <span className="text-sm font-medium">{quantities[product.id]}</span>
                <button
                  className="bg-gray-200 text-gray-700 rounded-full px-3 py-1"
                  onClick={() => handleQuantityChange(product.id, 1)}
                >
                  +
                </button>
              </div>
              <button className="bg-green-600 text-white p-3 rounded-full hover:bg-green-700">
                <FaCartPlus className="text-xl" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
