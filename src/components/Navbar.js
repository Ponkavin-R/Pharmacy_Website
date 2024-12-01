import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
const Nav = ({cartItems}) => {
  const [showCategories, setShowCategories] = useState(false);
  const [showShop, setShowShop] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false); // State for mobile menu toggle
  const [mobileCategories, setMobileCategories] = useState(false); // Mobile categories toggle
  const [mobileShop, setMobileShop] = useState(false); // Mobile shop toggle
  const [showCart, setShowCart] = useState(false);

  const totalAmount = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="flex items-center justify-between bg-green-700 text-white px-4 py-4 m-3 rounded-md">
      {/* Left Section */}
      <div className="flex items-center space-x-4">
        {/* Mobile Hamburger Icon */}
        <div className="lg:hidden">
          <button
            className="text-white"
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* All Categories */}
        <div
          className="relative hidden lg:block"
          onMouseEnter={() => setShowCategories(true)}
          onMouseLeave={() => setShowCategories(false)}
        >
          <button className="bg-yellow-500 text-white px-3 py-1 rounded-lg font-bold hover:bg-yellow-600 flex items-center">
            All Categories
            <span className="ml-2">▼</span>
          </button>
          {showCategories && (
            <div className="absolute left-0 top-full bg-white text-black shadow-lg rounded-lg p-4 w-64 ">
              <ul className="space-y-2">
                <li className="hover:text-green-600 flex justify-between items-center">
                Floor cleaner
                </li>
                <li className="hover:text-green-600 flex justify-between items-center">
                Phenyle
                </li>
                <li className="hover:text-green-600 flex justify-between items-center">
                Stain remover
                </li>
                <li className="hover:text-green-600 flex justify-between items-center">
                Soap oil
                </li>
                <li className="hover:text-green-600 flex justify-between items-center">
                Kennel Wash
                </li>
                <li className="hover:text-green-600 flex justify-between items-center">
                Hair oil
                </li>
                <li className="hover:text-green-600 flex justify-between items-center">
                Veterinary soap
                </li>
                <li className="hover:text-green-600 flex justify-between items-center">
                Toilet Cleaner
                </li>
                <li className="hover:text-green-600 flex justify-between items-center">
                Soap
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Shop */}
        
        {/* <div
          className="relative hidden lg:block bg-yellow-500 px-3 py-1 rounded-lg  hover:bg-yellow-600"
          onMouseEnter={() => setShowShop(true)}
          onMouseLeave={() => setShowShop(false)}
        >
          <a
            href="#shop"
            className="hover:text-yellow-400 flex items-center cursor-pointer"
          >
            Shop <span className="ml-2">▼</span>
          </a>
          {showShop && (
            <div className="absolute left-0 top-full bg-white text-black shadow-lg rounded-lg p-4 w-96">
              <div className="grid grid-cols-3 gap-4">
                {/* Categories Types 
                <div>
                  <h4 className="font-bold mb-2">CATEGORIES TYPES</h4>
                  <ul className="space-y-2">
                    <li className="hover:text-green-600">Prescription Medicines</li>
                    <li className="hover:text-green-600">Over-the-Counter (OTC)</li>
                    <li className="hover:text-green-600">Health Supplements</li>
                    <li className="hover:text-green-600">Personal Care</li>
                    <li className="hover:text-green-600">Mother & Baby Care</li>
                    <li className="hover:text-green-600">Medical Equipment</li>
                  </ul>
                </div>
                {/* Hot Sellers 
                <div>
                  <h4 className="font-bold mb-2">HOT SELLERS</h4>
                  <ul className="space-y-2">
                    <li className="hover:text-green-600">Paracetamol Tablets</li>
                    <li className="hover:text-green-600">Vitamin C Supplements</li>
                    <li className="hover:text-green-600">Antacid Syrup</li>
                    <li className="hover:text-green-600">Protein Powders</li>
                    <li className="hover:text-green-600">Pain Relief Balm</li>
                  </ul>
                </div>
                
                {/* Image Section 
                <div>
                  <img
                    src="https://via.placeholder.com/150"
                    alt="Promotional"
                    className="rounded-lg"
                  />
                </div>
              </div>
            </div>
          )}
        </div> */}

        {/* About and Contact */}
        <div className="space-x-4">
          <Link
            to="/about"
            className="hover:text-yellow-400 bg-yellow-500 px-2 lg:px-3 py-1 lg:py-2 text-sm lg:text-base rounded-lg font-bold hover:bg-yellow-600"
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className="hover:text-yellow-400 bg-yellow-500 px-2 lg:px-3 py-1 lg:py-2 text-sm lg:text-base rounded-lg font-bold hover:bg-yellow-600"
          >
            Contact
          </Link>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-2">
        <div className="flex items-center space-x-4">
          {/* Wishlist */}
          <div className="relative group">
            <div className="flex items-center justify-center w-10 h-10 bg-green-100 rounded-full group-hover:w-14 group-hover:h-14 transition-all duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-green-700 group-hover:h-8 group-hover:w-8 transition-all duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4.318C12 4.318 7 8 7 12c0 3.318 5 5 5 5s5-1.682 5-5c0-4-5-7.682-5-7.682z"
                />
              </svg>
            </div>
            <span className="absolute top-0 right-0 w-5 h-5 text-xs font-semibold text-white bg-yellow-400 rounded-full flex items-center justify-center">
              0
            </span>
          </div>

          {/* Cart */}
          <div className="relative group">
             {/* Other Navbar Items */}
      <div className="relative">
        <div onClick={() => setShowCart(!showCart)} className="cursor-pointer">
          <FaShoppingCart className="text-white text-2xl" />
          <span className="absolute top-0 right-0 bg-yellow-500 text-black text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center">
            {cartItems.length}
          </span>
        </div>
        {showCart && (
          <div className="absolute right-0 top-full bg-white text-black p-4 rounded-lg shadow-lg w-80">
            <h3 className="text-lg font-bold">Cart</h3>
            <ul>
              {cartItems.map((item) => (
                <li key={item.id} className="flex justify-between py-2">
                  <span>{item.name} (x{item.quantity})</span>
                  <span>₹{item.price * item.quantity}</span>
                </li>
              ))}
            </ul>
            <hr className="my-2" />
            <p className="text-right font-bold">Total: ₹{totalAmount}</p>
          </div>
        )}
      </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden ${mobileMenu ? 'block' : 'hidden'} absolute top-60 left-1/2 transform -translate-x-1/2 bg-green-700 text-white p-6 w-40 rounded-md shadow-lg`}>
        <ul className="space-y-6">
          <li className="hover:text-yellow-400 hover:bg-green-500 cursor-pointer" onClick={() => setMobileCategories(!mobileCategories)}>
            All Categories
          </li>
          {mobileCategories && (
            <div className="space-y-2 text-justify">
              <ul className=" text-justify">
                <li className="hover:text-yellow-400">Floor cleaner</li>
                <li className="hover:text-yellow-400">Phenyle</li>
                <li className="hover:text-yellow-400">Stain remover</li>
                <li className="hover:text-yellow-400">Soap oil</li>
                <li className="hover:text-yellow-400">Kennel Wash</li>
                <li className="hover:text-yellow-400">Hair oil</li>
                <li className="hover:text-yellow-400">Veterinary soap</li>
                <li className="hover:text-yellow-400">Toilet Cleaner</li>
                <li className="hover:text-yellow-400">Soap</li>
              </ul>
            </div>
          )}
        
        </ul>
      </div>
    </div>
  );
};

export default Nav;
