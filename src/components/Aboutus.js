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
            At <span className="font-semibold">Classic Natural</span>, where nature meets purity in every product we create. We are committed to providing high-quality, eco-friendly, and health-focused products that cater to your everyday needs. Our mission is to deliver natural, safe, and effective solutions that promote a healthier lifestyle for you and your loved ones.

At Classic Natural, we believe in the power of nature's goodness. Our diverse range of products includes pain relief solutions, natural hair care, cleaning essentials, pet care, and wellness products. Each product is carefully crafted using premium ingredients to ensure maximum effectiveness and safety.
          </p>
          <p className="text-gray-700 leading-relaxed text-justify">
          At Classic Natural, customer satisfaction is our top priority. We are committed to ensuring that every product meets the highest standards of quality, effectiveness, and safety. Our team continually strives to innovate and expand our product range, keeping in mind the well-being of our customers and the environment.

With Classic Natural, you can trust that every product is a step towards a cleaner, healthier, and more natural lifestyle. We invite you to explore our wide selection and experience the magic of natural living.


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
    {/* Left Section - Product Highlights */}
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-green-700">Our Product Line</h2>
      <ul className="space-y-4 text-start">
        <li className="flex items-start space-x-4">
          <span className="w-8 h-8 flex items-center justify-center bg-green-700 text-yellow-500 font-bold rounded-full">
            ✓
          </span>
          <span>
            <strong>Herbal Remedies:</strong> From <strong>Root Cleaner</strong> to 
            <strong> Raja Kalpa Sooranam</strong>, we offer natural solutions for 
            pain relief and cold & cough.
          </span>
        </li>
        <li className="flex items-start space-x-4">
          <span className="w-8 h-8 flex items-center justify-center bg-green-700 text-yellow-500 font-bold rounded-full">
            ✓
          </span>
          <span>
            <strong>Personal Care:</strong> Nourish your hair with 
            <strong> Rabbit Hair Growth Oil</strong> and 
            <strong> Yal Natural Hair Oil</strong>, crafted to promote healthy hair growth.
          </span>
        </li>
        <li className="flex items-start space-x-4">
          <span className="w-8 h-8 flex items-center justify-center bg-green-700 text-yellow-500 font-bold rounded-full">
            ✓
          </span>
          <span>
            <strong>Household Cleaning:</strong> Keep your home fresh and clean with 
            <strong> Liya Floor Cleaner</strong>, 
            <strong> Liya Original Phenyle</strong>, 
            <strong> Liya Acid</strong>, and 
            <strong> Liya Toilet Cleaner</strong>.
          </span>
        </li>
        <li className="flex items-start space-x-4">
        <span className="w-6 -ml-1 h-8 flex items-center justify-center bg-green-700 text-yellow-500 font-bold rounded-full">
            ✓
          </span>
          <span>
            <strong>Pet Care:</strong> Maintain a hygienic environment for your pets with 
            <strong> Bow Kennel Wash</strong>.
          </span>
        </li>
        <li className="flex items-start space-x-4">
          <span className="w-8 h-8 flex items-center justify-center bg-green-700 text-yellow-500 font-bold rounded-full">
            ✓
          </span>
          <span>
            <strong>Everyday Essentials:</strong> Our versatile cleaning products, like 
            <strong> Soap Oil</strong> and 
            <strong> Veterinary Soaps</strong>, provide multi-purpose utility.
          </span>
        </li>
      </ul>
    </div>

    {/* Right Section - Company Logo Image */}
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
