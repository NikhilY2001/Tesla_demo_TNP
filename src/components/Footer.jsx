import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "../cssfiles/Footer.css"; // Import CSS for styling
import keyFeaturesBg from "../assets/carbackgroundimg.jpg"; // Import the background image for footer

function Footer() {
  return (
    <footer
      className="footer"
      style={{
        backgroundImage: `url(${keyFeaturesBg})`, // Apply the background image to footer
        backgroundSize: "cover", // Ensure the image covers the entire footer
        backgroundPosition: "center", // Center the image
        backgroundRepeat: "no-repeat", // Prevent image tiling
      }}
    >
      <div className="footer-content">
        {/* Copyright Information */}
        <p>2025 Tesla, Inc. All Rights Reserved.</p>

        {/* Social Media Links */}
        <div className="footer-social">
          <a
            href="https://www.facebook.com/tesla"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook"></i>
          </a>
          <a
            href="https://twitter.com/Tesla"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://www.instagram.com/teslamotors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
