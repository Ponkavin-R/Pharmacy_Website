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
          <p className="mt-2">114, Middle Street, Alaguneri, Kuruvikulam</p>
          <p>Thenkasi (Dist), Tamil Nadu - 627754</p>
          
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
