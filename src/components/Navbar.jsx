import React from "react";
import { Link } from "react-router-dom";
import "../cssfiles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/about-us" className="nav-link about-link">
        About Us
      </Link>
      <Link to="/global-presence" className="nav-link">
        Global Presence
      </Link>
      <Link to="/testimonials" className="nav-link">
        Testimonials
      </Link>
    </nav>
  );
}

export default Navbar;
