import React from 'react';
import Logo from '../assest/logo.jpg'
const Header = () => {
  return (
    <header className="flex items-center justify-between px-8 py-4 bg-white shadow-md">
      {/* Logo Section */}
      <div className="flex items-center space-x-2">
        <img
          src={Logo} // Replace with your logo image URL
          alt="Logo"
          className="h-20 w-24 rounded-full lg:scale-150"
        />
        {/* <div>
          <h1 className="text-2xl font-bold text-green-700">Vaseegrah Veda</h1>
          <p className="text-sm text-gray-600">- THE PURE HERBAL FACTORY -</p>
        </div> */}
      </div>

      {/* Search Bar */}
      <div className="flex-grow mx-8">
        <div className="relative">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full px-4 py-2 border rounded-full text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 16l-4-4m0 0l4-4m-4 4h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Right Section */}
     
    </header>
  );
};

export default Header;
