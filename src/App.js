import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Features from "./components/Features";
import Products from "./components/Products";
import Footer from "./components/Footer";
import AboutUs from "./components/Aboutus";
import Contact from "./components/Contact";
import Traditional from "./components/Traditional";
import ProductDescriptionPage from "./components/ProductDescription";
import { FaWhatsapp } from "react-icons/fa"; // Import WhatsApp Icon

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    setCartItems((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: product.quantity || 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: product.quantity || 1 }];
    });
  };

  return (
    <Router>
      <Header />
      <Navbar cartItems={cartItems} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Features />
              <Products onAddToCart={handleAddToCart} />
            </>
          }
        />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <ProductDescriptionPage />
      <Traditional />
      <Footer />

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/6384685325"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed right-6 bottom-6 bg-green-500 text-white rounded-full p-4 shadow-lg hover:bg-green-600 transition-all duration-300"
      >
        <FaWhatsapp className="h-8 w-8" />
      </a>
    </Router>
  );
}

export default App;
