import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Features from './components/Features';
import Products from './components/Products';
import Footer from './components/Footer';
import AboutUs from './components/Aboutus';
import Contact from './components/Contact';
import Traditional from './components/Traditional';

function App() {
  const [cartItems, setCartItems] = useState([]); // Keep if needed for cart functionality

  const handleAddToCart = (product) => {
    const quantityInput = document.getElementById(`quantity-${product.id}`);
    const quantity = parseInt(quantityInput?.value || 1);

    setCartItems((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prevCart, { ...product, quantity }];
    });
  };

  return (
    <Router>
      <div className="App">
        <Header />
        <Navbar cartItems={cartItems} /> {/* Pass cartItems */}
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
        <Traditional />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
