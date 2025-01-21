import React, { useRef } from "react";
import "../cssfiles/LandingPage.css"; // Import the CSS
import teslacarimage from "../assets/teslacarimage.png"; // Import the image
import teslavideo from "../assets/teslavideo.mp4";
import CarDetailsPage from "./CarDetailsPage";
import keyFeaturesBg from "../assets/carbackgroundimg.jpg"; // Import the background image for key features
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation

function LandingPage() {
  const videoRef = useRef(null); // Reference for the video
  const videoSectionRef = useRef(null); // Reference for the video section
  const navigate = useNavigate(); // Initialize the navigate hook

  const handleExploreClick = () => {
    // Scroll to video section
    videoSectionRef.current.scrollIntoView({ behavior: "smooth" });
    // Play the video
    videoRef.current.play();
  };
  const handleViewCarsClick = () => {
    // Use navigate to go to the Product Listing Page
    navigate("/products"); // This navigates to /products route
  };

  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section
        className="hero"
        style={{
          backgroundImage: `url(${teslacarimage})`,
        }}
      >
        <div className="hero-content">
          <h1 className="hero-title">Welcome to Tesla</h1>
          <p className="hero-subtitle">
            The future of electric driving is here
          </p>
          {/* Button triggers scroll to video section and starts the video */}
          <button className="cta-button" onClick={handleExploreClick}>
            Feel the Ride
          </button>
          {/* View Cars Button to Navigate to Product Listing Page */}
          <button
            className="cta-button view-cars-button"
            onClick={handleViewCarsClick}
          >
            View Cars
          </button>
        </div>
      </section>

      {/* Video Section */}
      <section ref={videoSectionRef} className="video-section">
        <h2 className="section-title">Watch Our Cars in Action</h2>
        <div className="video-container">
          <video
            ref={videoRef}
            width="100%" // Adjust width as needed
            height="auto"
            controls
            muted
            style={{
              borderRadius: "10px",
              boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.1)",
            }}
          >
            <source
              src={teslavideo} // Path to your 15-second video
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      {/* Key Features Section with Background Image */}
      <section
        className="features"
        style={{
          backgroundImage: `url(${keyFeaturesBg})`, // Apply background image to Key Features section
          backgroundSize: "cover", // Ensure the image covers the entire section
          backgroundPosition: "center", // Center the image
          backgroundRepeat: "no-repeat", // Prevent image tiling
        }}
      >
        <h2 className="section-title">Key Features</h2>
        <div className="feature-items">
          <div className="feature-item">
            <h3>Autopilot</h3>
            <p>
              Experience the future of driving with Tesla’s Autopilot system.
            </p>
          </div>
          <div className="feature-item">
            <h3>Performance</h3>
            <p>
              Fast acceleration and smooth handling for a superior driving
              experience.
            </p>
          </div>
          <div className="feature-item">
            <h3>Safety</h3>
            <p>
              Advanced safety features to protect you and your family on the
              road.
            </p>
          </div>
        </div>
      </section>
      <CarDetailsPage />
    </div>
  );
}

export default LandingPage;
