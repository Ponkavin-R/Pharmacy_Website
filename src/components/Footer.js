import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row md:justify-between md:items-center space-y-8 md:space-y-0">
        
        {/* Instagram Section */}
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-lg font-bold text-yellow-500">
            Follow us on Instagram @classicnatural
          </h3>
          <p className="mt-2">
            Stay up to date with our family. We celebrate our journey with you all!
          </p>
        </div>

        {/* Factory Location Section */}
        <div className="flex-1 text-center">
          <h3 className="text-lg font-bold lg:-mt-9 text-yellow-500">Factory Location</h3>
          <p className="mt-2">114, Middle Street, Alaguneri, Kuruvikulam</p>
          <p>Thenkasi (Dist), Tamil Nadu - 627754</p>
        </div>

        {/* Social Media Links Section */}
        <div className="flex-1 text-center md:text-right">
          <h3 className="text-lg lg:-mt-12 font-bold text-yellow-500">Follow Us</h3>
          <div className="mt-2 flex justify-center md:justify-end space-x-6">
            <a href="#" className="text-white hover:text-yellow-500">
              <FaInstagram className="h-6 w-6" />
            </a>
            <a href="#" className="text-white hover:text-yellow-500">
              <FaFacebook className="h-6 w-6" />
            </a>
          </div>
        </div>

        {/* Contact Us Section */}
        <div className="flex-1 text-center md:text-right">
          <h3 className="text-lg font-bold text-yellow-500">Contact Us</h3>
          <div className="mt-2 space-y-2">
            <p>📞 +91 6381194126</p>
            <p>📞 +91 8015371070</p>
            <p>📧 admin@classicnaturals.shop</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
