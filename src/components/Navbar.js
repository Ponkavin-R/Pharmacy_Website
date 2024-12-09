import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { FaTimes } from "react-icons/fa"; // Importing the X icon

const Nav = ({ cartItems }) => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [mobileCategories, setMobileCategories] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showAddressPopup, setShowAddressPopup] = useState(false);
  const [userData, setUserData] = useState({
    name: "",
    phone: "",
    address: "",
  });

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    setShowAddressPopup(true);
  };

  const handleAddressSubmit = () => {
    const whatsappNumber = "6384685325";
    const message = `*Checkout Details*%0A%0A${cartItems
      .map(
        (item) =>
          `Product Name: ${item.name}    Price: ₹ ${item.price}      Number Of Quantity: ${item.quantity}   Total= ₹${
            item.price * item.quantity
          }%0A%0A `
      )
      .join("%0A")}%0A%0A*Total Amount:* ₹${totalAmount}%0A%0A*Shipping Details*%0AName: ${
      userData.name
    }%0APhone: ${userData.phone}%0AAddress: ${userData.address}`;

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(whatsappURL, "_blank");
    setShowAddressPopup(false);
  };

  return (
    <div className="flex items-center justify-between bg-green-700 text-white px-4 py-4 m-3 rounded-md">
      {/* Left Section */}
      <div className="flex items-center space-x-4">
       
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
      <div className="relative group">
  {/* Cart */}
  <div className="relative group">
  {/* Cart */}
  <div className="relative">
    <button
      onClick={() => setShowCart(!showCart)}
      className="cursor-pointer bg-green-100 p-3 rounded-full flex items-center justify-center"
    >
      <FaShoppingCart className="text-green-700 text-2xl group-hover:w-8 transition-all group-hover:h-8 duration-300" />
      <span className="absolute top-0 right-0 bg-yellow-500 text-black text-xs font-semibold group-hover:w-8 transition-all duration-300 rounded-full w-5 h-5 flex items-center justify-center">{cartItems.length}</span>
    </button>
    {showCart && (
      <div className="absolute right-0 top-full bg-white text-black p-4 rounded-lg shadow-lg w-80">
        <h3 className="font-bold">Cart Items</h3>
        <ul>
          {cartItems.map((item) => (
            <li className="mb-2 flex justify-between py-2" key={item.id}>
             <span>
                        {item.name} (x{item.quantity})
                      </span>
                      <span>₹{item.price * item.quantity}</span>
            </li>
          ))}
        </ul>
        <hr className="my-2" />
        <p className="text-right font-bold">Total: ₹{totalAmount}</p>
        <button 
          onClick={handleCheckout} 
          className="mt-2 bg-green-500 px-4 py-2 text-white rounded"
        >
          Checkout
        </button>
      </div>
    )}
  </div>
</div>

</div>

      </div>

      

      {/* Address Popup */}
      {showAddressPopup && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-96">
            <button
              onClick={() => setShowAddressPopup(false)}
              className=" justify-end relative text-end items-end left-72  text-gray-500 hover:text-black"
            >
              <FaTimes size={28} />
            </button>
            <h3 className="text-lg text-green-700 font-bold mb-4">Enter Shipping Details</h3>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                value={userData.name}
                onChange={(e) => setUserData({ ...userData, name: e.target.value })}
                className="w-full p-2 border text-gray-700 border-gray-300 rounded-md"
              />
              <input
                type="text"
                placeholder="Phone"
                value={userData.phone}
                onChange={(e) => setUserData({ ...userData, phone: e.target.value })}
                className="w-full p-2 border text-gray-700 border-gray-300 rounded-md"
              />
              <textarea
                placeholder="Address"
                value={userData.address}
                onChange={(e) => setUserData({ ...userData, address: e.target.value })}
                className="w-full p-2 border text-gray-700 border-gray-300 rounded-md"
              />
            </div>
            <div className="mt-4 text-right">
              <button
                onClick={handleAddressSubmit}
                className="bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Nav;
