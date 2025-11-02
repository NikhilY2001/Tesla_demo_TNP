import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../cssfiles/Navbar.css";
import logo from "../assets/logo.png";

function Navbar() {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo */}
        <Link to="/" className="logo">
          <img src={logo} alt="Tesla Logo" />
        </Link>

        {/* Navigation Links */}
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about-us">About Us</Link>
          <Link to="/products">Services</Link>
          <Link to="/models">Featured</Link>
          <Link to="/contact">Contact Me</Link>
        </div>

        {/* Right Side Icons */}
        <div className="nav-icons">
          <button 
            className="search-btn"
            onClick={() => setShowSearch(!showSearch)}
          >
            <i className="fas fa-search"></i>
          </button>
          <Link to="/profile" className="profile-btn">
            <i className="fas fa-user"></i>
          </Link>
        </div>

        {/* Search Overlay */}
        {showSearch && (
          <div className="search-overlay">
            <div className="search-container">
              <input 
                type="text" 
                placeholder="What are you looking for?"
                className="search-input"
              />
              <button 
                className="close-search"
                onClick={() => setShowSearch(false)}
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
