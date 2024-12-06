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
import { FaFacebook, FaInstagram } from "react-icons/fa";
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
          
        </div>

        {/* Social Media and Payments */}
        <div className="text-center md:text-right">
          <h3 className="text-lg font-bold text-yellow-500">Follow Us</h3>
          <div className="mt-2 flex justify-center md:justify-end space-x-4">
            
            <a href="#" className="text-white hover:text-yellow-500">
           <FaInstagram className="h-6 w-6" />
            </a>
            <a href="#" className="text-white hover:text-yellow-500">
           <FaFacebook className="h-6 w-6" />
            </a>
          </div>
         
        </div>
      </div>
    </footer>
  );
};

export default Footer;
