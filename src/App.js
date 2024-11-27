import React from 'react';
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
  return (
    <Router>
      <div className="App">
        <Header />
        <Navbar />
        <Routes>
          {/* Wrap Features and Products in a React.Fragment */}
          <Route 
            path="/" 
            element={
              <>
                <Features />
                <Products />
              </>
            } 
          />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
        <Traditional/>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
