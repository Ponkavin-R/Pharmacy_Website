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
    </Router>
  );
}

export default App;
