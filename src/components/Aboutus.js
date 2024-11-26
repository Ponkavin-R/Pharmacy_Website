import React from "react";
import Logo from '../assest/logo.jpg'
const AboutUs = () => {
  return (
    <div className="bg-gray-50 mx-2">
        {/* Breadcrumb Section */}
      <div className="px-4 py-2">
        <div className="text-sm text-gray-600">
          <a href="/" className="hover:underline text-green-700">Home</a> / About Us
        </div>
      </div>
      {/* Header Section */}
      <div
        className="relative w-full h-[60vh] bg-cover hover:brightness-100 hover:duration-300 brightness-50  bg-center bg-[url('https://www.uniraylifesciences.co.in/wp-content/uploads/2021/09/Ayurvedic-Classical-Medicine-Manufacturer.jpg')]"
        style={{
          backgroundImage: Logo,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-md">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold">Discover About Us</h1>
            <button className="mt-4 px-6 py-3 bg-green-700 text-white rounded-lg hover:bg-green-600">
              Watch Video
            </button>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Our Story Section */}
        <div>
          <h2 className="text-3xl text-green-700 font-bold mb-6">Our Story</h2>
          <p className="text-gray-700 leading-relaxed text-justify mb-6">
            At <span className="font-semibold">Classic Natural</span>, we are
            committed to providing premium-quality herbal medicines and hair
            oils that blend the ancient science of Ayurveda with modern
            research. Our journey began with a passion for creating solutions
            that are natural, effective, and accessible to all.
          </p>
          <p className="text-gray-700 leading-relaxed text-justify">
            Every product at Classic Natural is crafted with love and care,
            using ingredients sourced sustainably from nature. Our mission is to
            inspire healthier lifestyles while staying rooted in the timeless
            wisdom of nature.
          </p>
        </div>

        {/* Timeline Section */}
        <div>
          <h2 className="text-3xl font-bold text-green-700 mb-6">Company History</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 w-0.5 h-full bg-green-700"></div>
            <div className="space-y-12">
              {/* Timeline Item */}
              <div className="relative flex items-center">
                <div className="w-1/2 text-right pr-6">
                  <h3 className="text-lg font-semibold">Company Founded</h3>
                  <p className="text-gray-600">It is a long established in 1988</p>
                </div>
                <div className="w-8 h-8 bg-white border-4 border-yellow-600 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>
                </div>
                <div className="w-1/2"></div>
              </div>
              {/* Timeline Item */}
              <div className="relative flex items-center">
                <div className="w-1/2"></div>
                <div className="w-8 h-8 bg-white border-4 border-yellow-600 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>
                </div>
                <div className="w-1/2 text-left pl-6">
                  <h3 className="text-lg font-semibold">500k Monthly Views</h3>
                  <p className="text-gray-600">It is a long established in 1988</p>
                </div>
              </div>
              {/* Timeline Item */}
              <div className="relative flex items-center">
                <div className="w-1/2 text-right pr-6">
                  <h3 className="text-lg font-semibold">200k Users</h3>
                  <p className="text-gray-600">It is a long established in 1988</p>
                </div>
                <div className="w-8 h-8 bg-white border-4 border-yellow-600 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>
                </div>
                <div className="w-1/2"></div>
              </div>
              {/* Timeline Item */}
              <div className="relative flex items-center">
                <div className="w-1/2"></div>
                <div className="w-8 h-8 bg-white border-4 border-yellow-600 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>
                </div>
                <div className="w-1/2 text-left pl-6">
                  <h3 className="text-lg font-semibold">200+ Team</h3>
                  <p className="text-gray-600">It is a long established in 1988</p>
                </div>
              </div>
            </div>
          </div>
        </div>
         {/* Key Highlights Section */}
     
      </div>
      <div className="container mx-full justify-between px-4 py-12">
        <div className="grid grid-cols-1 justify-between md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-green-700">Key Highlights</h2>
            <ul className="space-y-4">
              <li className="flex items-start space-x-4">
                <span className="w-8 h-8 flex items-center justify-center bg-green-700 text-yellow-500 font-bold rounded-full">
                  ✓
                </span>
                <span>
                  <strong>Founded:</strong> 2010 - over a decade of trust and
                  excellence.
                </span>
              </li>
              <li className="flex items-start space-x-4">
                <span className="w-8 h-8 flex items-center justify-center bg-green-700 text-yellow-500 font-bold rounded-full">
                  ✓
                </span>
                <span>
                  <strong>Global Reach:</strong> Available in 30+ countries
                  worldwide.
                </span>
              </li>
              <li className="flex items-start space-x-4">
                <span className="w-8 h-8 flex items-center justify-center bg-green-700 text-yellow-500 font-bold rounded-full">
                  ✓
                </span>
                <span>
                  <strong>Products:</strong> Over 50 herbal medicines and oils.
                </span>
              </li>
              <li className="flex items-start space-x-4">
                <span className="w-8 h-8 flex items-center justify-center bg-green-700 text-yellow-500 font-bold rounded-full">
                  ✓
                </span>
                <span>
                  <strong>Team:</strong> 300+ dedicated professionals.
                </span>
              </li>
            </ul>
          </div>

          <div>
            <img
              src={Logo}
              alt="Classic Natural"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
        </div>
    </div>
  );
};

export default AboutUs;
