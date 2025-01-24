import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import "../cssfiles/GlobalPresencePage.css";

const countryData = {
  America: [
    {
      image: "src/assets/office1.jpg",
      name: "New York",
      address: "123 Broadway, NY, USA",
    },
    {
      image: "src/assets/office2.jpg",
      name: "Los Angeles",
      address: "456 Sunset Blvd, CA, USA",
    },
    {
      image: "src/assets/office3.jpg",
      name: "Chicago",
      address: "789 Lake Shore Dr, IL, USA",
    },
    {
      image: "src/assets/office2.jpg",
      name: "Houston",
      address: "101 Main St, TX, USA",
    },
  ],
  France: [
    {
      image: "src/assets/office5.jpg",
      name: "Paris",
      address: "1 Avenue des Champs, Paris, France",
    },
    {
      image: "src/assets/office6.jpg",
      name: "Lyon",
      address: "2 Rue de Lyon, Lyon, France",
    },
    {
      image: "src/assets/office2.jpg",
      name: "Nice",
      address: "3 Promenade des Anglais, Nice, France",
    },
    {
      image: "src/assets/office1.jpg",
      name: "Marseille",
      address: "4 Quai de la Joliette, Marseille, France",
    },
  ],
};

function GlobalPresencePage() {
  const [selectedCountry, setSelectedCountry] = useState("America"); // Set default state to "America"
  const navigate = useNavigate(); // Initialize useNavigate

  const handleCountryClick = (country) => {
    setSelectedCountry(country);
  };

  const handleGoBack = () => {
    navigate(-1); // Navigate back to the previous page
  };

  return (
    <div className="global-presence-page">
      {/* Go Back Button */}
      <button className="go-back-button" onClick={handleGoBack}>
        Go Back
      </button>

      {/* Background Video */}
      <video
        className="background-video"
        src="src/assets/earth.mp4" // Path to your video file in the src folder
        autoPlay
        loop
        muted
      />

      {/* Content Section */}
      <div className="buttons-container">
        <button onClick={() => handleCountryClick("America")}>America</button>
        <button onClick={() => handleCountryClick("France")}>France</button>
      </div>
      <div className="cards-container">
        {selectedCountry &&
          countryData[selectedCountry].map((location, index) => (
            <div key={index} className="card">
              <img
                src={location.image}
                alt={location.name}
                className="card-image"
              />
              <h3>{location.name}</h3>
              <p>{location.address}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default GlobalPresencePage;
