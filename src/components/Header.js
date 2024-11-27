import React from 'react';
import Logo from '../assest/logo1.jpg';

const Header = () => {
  return (
    <header className="flex flex-wrap items-center justify-between px-4 py-4 bg-white shadow-md md:px-8">
      {/* Logo Section */}
      <div className="flex items-center space-x-4">
        <img
          src={Logo}
          alt="Logo"
          className="h-36 w-46 md:h-36 md:w-36 sm:h-36 sm:w-28 lg:h-36 lg:w-52"
        />
        {/* Optional Logo Text */}
        {/* Uncomment below for additional branding */}
        {/* <div className="hidden sm:block">
          <h1 className="text-lg font-bold text-green-700 sm:text-xl lg:text-2xl">
            Vaseegrah Veda
          </h1>
          <p className="text-xs text-gray-600 sm:text-sm">
            - THE PURE HERBAL FACTORY -
          </p>
        </div> */}
      </div>

      {/* Search Bar */}
      <div className="flex-grow mx-4 mt-4 md:mt-0 md:mx-8">
        <div className="relative">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full px-4 py-2 text-sm border rounded-full text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 sm:text-base"
          />
          <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 sm:h-6 sm:w-6"
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

      {/* Placeholder for future right-section elements */}
      <div className="hidden md:block">
        {/* Add your cart, user icons, or links here */}
      </div>
    </header>
  );
};

export default Header;
