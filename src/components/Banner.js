import React from 'react';

const Banner = () => {
  return (
    <div className="bg-white">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-center p-6 md:h-[500px] h-[400px]">
        <div className="text-left bg-yellow-100 rounded-lg p-6 md:w-1/2 w-full">
          <h1 className="text-green-800 font-bold text-2xl md:text-4xl">
            YOUR TRUSTED MEDICAL PHARMACY
          </h1>
          <h2 className="text-gray-800 font-extrabold text-4xl md:text-5xl mt-2">
            Quality Medicines & Health Essentials
          </h2>
          <p className="text-gray-600 font-medium mt-2 text-base md:text-lg">
            Reliable Products{' '}
            <span className="text-yellow-600 font-bold">
              for Better Health
            </span>
          </p>
          <button className="mt-4 bg-yellow-500 text-white font-bold py-2 px-4 rounded-md">
            Shop Now
          </button>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 md:mt-0 md:w-1/2 w-full z-20">
          {/* Vitamins and Supplements */}
          <div className="relative z-12 bg-gray-100 rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://via.placeholder.com/300" // Replace with your hibiscus image URL
              alt="Hibiscus Herb"
              className="w-full h-56 sm:h-64 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white">
              <h3 className="font-bold text-xl">Vitamins & Supplements</h3>
              <p className="mt-2">Boost Your Immunity</p>
            </div>
          </div>

          {/* Prescription Medicines */}
          <div className="relative bg-gray-100 rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://via.placeholder.com/300" // Replace with your almond oil image URL
              alt="Facial Oils"
              className="w-full h-56 sm:h-64 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white">
              <h3 className="font-bold text-xl">Prescription Medicines</h3>
              <p className="mt-2">Affordable & Trusted Brands</p>
            </div>
          </div>

          {/* Medical Devices */}
          <div className="relative bg-gray-100 rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtQxWwWW2LDQGYFILYmwz91jTvBwSHWQep7A&s" // Replace with your curly mask image URL
              alt="Curly Mask"
              className="w-full h-56 sm:h-64 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white">
              <h3 className="font-bold text-xl">Medical Devices</h3>
              <p className="mt-2">Thermometers, BP Monitors & More</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
