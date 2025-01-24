import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import "../cssfiles/ModelsPage.css"; // Add your CSS file here
import suv1 from "../assets/suv1.webp";
import suv2 from "../assets/suv2.webp";
import suv3 from "../assets/suv1.webp";
import suv4 from "../assets/sedan2.webp";
import suv5 from "../assets/sedan4.webp";
import suv6 from "../assets/sedan3.webp";

import sedan1 from "../assets/sedan1.webp";
import sedan2 from "../assets/sedan2.webp";
import sedan3 from "../assets/sedan3.webp";
import sedan4 from "../assets/sedan4.webp";
import sedan5 from "../assets/suv1.webp";
import sedan6 from "../assets/suv2.webp";

import x4x1 from "../assets/sedan2.webp";
import x4x2 from "../assets/suv2.webp";
import x4x3 from "../assets/suv2.webp";
import x4x4 from "../assets/suv1.webp";
import x4x5 from "../assets/sedan4.webp";
import x4x6 from "../assets/sedan3.webp";

import bullet1 from "../assets/bullet1.jpg";
import bullet2 from "../assets/bullet2.avif";
import bullet3 from "../assets/suv1.webp";
import bullet4 from "../assets/sedan4.webp";
import bullet5 from "../assets/suv2.webp";
import bullet6 from "../assets/sedan3.webp";

const modelsData = {
  SUV: [suv1, suv2, suv3, suv4, suv5, suv6],
  Sedan: [sedan1, sedan2, sedan3, sedan4, sedan5, sedan6],
  "4X4": [x4x1, x4x2, x4x3, x4x4, x4x5, x4x6],
  Bulletproofs: [bullet1, bullet2, bullet3, bullet4, bullet5, bullet6],
};

function ModelsPage() {
  const [selectedModel, setSelectedModel] = useState("SUV");
  const navigate = useNavigate(); // Initialize navigate hook

  return (
    <div className="models-page">
      {/* Go Back Button */}
      <button className="go-back-button" onClick={() => navigate(-1)}>
        &#8592; Go Back
      </button>

      {/* Buttons for Model Selection */}
      <div className="model-buttons">
        {Object.keys(modelsData).map((model) => (
          <button
            key={model}
            className={`model-button ${
              selectedModel === model ? "active" : ""
            }`}
            onClick={() => setSelectedModel(model)} // Update selected model
          >
            {model}
          </button>
        ))}
      </div>

      {/* Display Images for the Selected Model */}
      <div className="model-images">
        {modelsData[selectedModel].map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${selectedModel} ${index + 1}`}
            className="model-image"
          />
        ))}
      </div>
    </div>
  );
}

export default ModelsPage;
