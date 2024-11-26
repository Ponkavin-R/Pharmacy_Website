// import React from 'react';

// const Footer = () => {
//   return (
//     <footer className="bg-green-900 text-white py-2">
//       <div className="container mx-auto px-4">
//         {/* Top Section */}
//         <div className="flex flex-col md:flex-row items-start justify-between p-2">
//           {/* Instagram Section */}
//           <div className="text-left mb-8 md:mb-0 md:w-1/2">
//             <a href="#" className="text-yellow-300 text-left">
//               <h2 className="font-bold mb-4">Follow us on Instagram @vaseegrahveda</h2>
//             </a>
//             <h2 className="mt-2">
//               Stay up to date with our family. We <br />
//               celebrate our journey with you all!
//             </h2>
//           </div>

//           {/* Factory Location Section */}
//           <div className="text-left mb-8 md:mb-0 md:w-1/2">
//             <a href="#" className="text-yellow-300 text-left">
//               <h2 className="font-bold mb-4">Factory Location</h2>
//             </a>
//             <p>
//               #9 Vijaya Nagar Srinivasapuram Post<br />
//               Thanjavur, TN 613009
//             </p>
//           </div>
//         </div>

//         <div className="mb-8"></div>

//         {/* Toll-Free Section */}
//         <div className="flex justify-center items-center">
//           <div className="border-2 border-opacity-50 border-gray-300 rounded-lg px-4 py-2 text-center font-bold text-yellow-500">
//             Toll Free (080-123-123)
//           </div>
//         </div>

//         <div className="mb-12"></div>
//         <hr className="border-t border-gray-300 border-opacity-50 mb-4" />
//         <div className="mb-12"></div>

//         {/* Footer Grid */}
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 justify-items-end lg:ml-10">
//           {/* Support Section */}
//           <div>
//             <h2>Support@vaseegrahveda.com</h2>
//             <h3>
//               Monday – Saturday: 9:30 am – 6:30pm<br />
//               Sunday: 1:00 pm – 5:00pm
//             </h3>
//           </div>

//           {/* Information Links */}
//           <div>
//             <h2 className="font-bold mb-4">Information</h2>
//             <ul>
//               <li><a href="#" className="hover:text-yellow-300">Contact</a></li>
//               <li><a href="#" className="hover:text-yellow-300">Shipping Policy</a></li>
//               <li><a href="#" className="hover:text-yellow-300">Privacy Policy</a></li>
//               <li><a href="#" className="hover:text-yellow-300">Return & Refund</a></li>
//               <li><a href="#" className="hover:text-yellow-300">Terms & Condition</a></li>
//               <li><a href="#" className="hover:text-yellow-300">About Us</a></li>
//             </ul>
//           </div>

//           {/* My Account Links */}
//           <div>
//             <h2 className="font-bold mb-4">My Account</h2>
//             <ul>
//               <li><a href="#" className="hover:text-yellow-300">My Account</a></li>
//               <li><a href="#" className="hover:text-yellow-300">Tech Support</a></li>
//               <li><a href="#" className="hover:text-yellow-300">Shopping Cart</a></li>
//               <li><a href="#" className="hover:text-yellow-300">Shop</a></li>
//               <li><a href="#" className="hover:text-yellow-300">Checkout</a></li>
//             </ul>
//           </div>

//           {/* Shop Links */}
//           <div>
//             <h2 className="font-bold mb-4">Categories</h2>
//             <ul>
//               <li><a href="#" className="hover:text-yellow-300">Glowing Skin</a></li>
//               <li><a href="#" className="hover:text-yellow-300">Edibles Oils</a></li>
//               <li><a href="#" className="hover:text-yellow-300">Herbal Teas</a></li>
//               <li><a href="#" className="hover:text-yellow-300">Natural Dye</a></li>
//               <li><a href="#" className="hover:text-yellow-300">Oral Care</a></li>
//             </ul>
//           </div>

//           {/* Customer Point Links */}
//           <div>
//             <h2 className="font-bold mb-4">Customer Point</h2>
//             <ul>
//               <li><a href="#" className="hover:text-yellow-300">Your Account</a></li>
//               <li><a href="#" className="hover:text-yellow-300">Get Suggestion</a></li>
//               <li><a href="#" className="hover:text-yellow-300">How to use?</a></li>
//               <li><a href="#" className="hover:text-yellow-300">Order History</a></li>
//               <li><a href="#" className="hover:text-yellow-300">Order Tracking</a></li>
//             </ul>
//           </div>
//         </div>

//         <div className="mb-4"></div>
//         <hr className="border-t border-gray-300 border-opacity-50 mb-4" />

//         {/* Copyright */}
//         <div>
//           <h2>Copyright ©️ 2024 Vaseegrah Veda. All Rights Reserved.</h2>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Instagram Section */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-bold text-yellow-500">
            Follow us on Instagram @classicnatural
          </h3>
          <p className="mt-2">
            Stay up to date with our family. We celebrate our journey with you all!
          </p>
        </div>

        {/* Factory Location Section */}
        <div className="text-center">
          <h3 className="text-lg font-bold text-yellow-500">Factory Location</h3>
          <p className="mt-2">#9 Vijaya Nagar Srinivasapuram Post</p>
          <p>Thanjavur, TN 613009</p>
          <div className="mt-4 flex justify-center items-center md:justify-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-yellow-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15.05 12.72l.9-.62a1 1 0 00.15-1.63L14.5 8.5M9.55 6.63a2.57 2.57 0 113.9 3.9L9.55 6.63zM9.55 18.15a3.43 3.43 0 110-4.86M9.55 18.15a3.43 3.43 0 110-4.86m4.9-4.13c.45-.4.6-1 .15-1.63l-.9-.62"
              />
            </svg>
            <span className="ml-2 text-yellow-500">Toll-Free (080-6258-007)</span>
          </div>
        </div>

        {/* Social Media and Payments */}
        <div className="text-center md:text-right">
          <h3 className="text-lg font-bold text-yellow-500">Follow Us</h3>
          <div className="mt-2 flex justify-center md:justify-end space-x-4">
            <a href="#" className="text-white hover:text-yellow-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.667C14 5.924 14.667 5 15.77 5H18V0h-2.5C11.433 0 9 2.134 9 6v2z" />
              </svg>
            </a>
            <a href="#" className="text-white hover:text-yellow-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 4.557a9.828 9.828 0 01-2.828.775A4.916 4.916 0 0023.337 3c-.938.555-1.978.959-3.084 1.175a4.92 4.92 0 00-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.91 4.91 0 001.523 6.573 4.904 4.904 0 01-2.23-.616c-.054 2.28 1.582 4.415 3.949 4.89a4.937 4.937 0 01-2.224.084 4.92 4.92 0 004.604 3.419A9.867 9.867 0 010 21.539a13.94 13.94 0 007.548 2.211c9.142 0 14.307-7.721 14.307-14.417 0-.22-.005-.439-.014-.657A10.243 10.243 0 0024 4.557z" />
              </svg>
            </a>
            <a href="#" className="text-white hover:text-yellow-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19.615 3H4.385C3.62 3 3 3.62 3 4.385v15.23C3 20.38 3.62 21 4.385 21H12v-6H9.844v-3H12V9.462c0-2.214 1.356-3.423 3.33-3.423.948 0 1.763.07 2.001.102v2.32h-1.375c-1.08 0-1.291.513-1.291 1.267V12h2.582l-.338 3H14.67v6h4.945c.765 0 1.385-.62 1.385-1.385V4.385C21 3.62 20.38 3 19.615 3z" />
              </svg>
            </a>
          </div>
          <h3 className="mt-6 text-lg font-bold text-yellow-500">Accept Payment</h3>
          <div className="mt-2 flex justify-center md:justify-end space-x-4">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Visa_2021.svg"
              alt="Visa"
              className="h-6"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
              alt="Mastercard"
              className="h-6"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
              alt="PayPal"
              className="h-6"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Bitcoin.svg"
              alt="Bitcoin"
              className="h-6"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
