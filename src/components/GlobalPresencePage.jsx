import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import "../cssfiles/GlobalPresencePage.css";

// Importing images
import office1 from "../assets/office1.jpg";
import office2 from "../assets/office2.jpg";
import office3 from "../assets/office3.jpg";
import office5 from "../assets/office5.jpg";
import office6 from "../assets/office6.jpg";

// Importing video
import earthVideo from "../assets/earth.mp4";

const countryData = {
  America: [
    {
      image: office1,
      name: "New York",
      address: "123 Broadway, NY, USA",
    },
    {
      image: office2,
      name: "Los Angeles",
      address: "456 Sunset Blvd, CA, USA",
    },
    {
      image: office3,
      name: "Chicago",
      address: "789 Lake Shore Dr, IL, USA",
    },
    {
      image: office2,
      name: "Houston",
      address: "101 Main St, TX, USA",
    },
  ],
  France: [
    {
      image: office5,
      name: "Paris",
      address: "1 Avenue des Champs, Paris, France",
    },
    {
      image: office6,
      name: "Lyon",
      address: "2 Rue de Lyon, Lyon, France",
    },
    {
      image: office2,
      name: "Nice",
      address: "3 Promenade des Anglais, Nice, France",
    },
    {
      image: office1,
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
        src={earthVideo} // Imported video file
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
