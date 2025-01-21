import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import "../cssfiles/ColorSelectorPage.css";

// Import all car images
import whiteTesla from "../assets/white-tesla.jpg";
import blueTesla from "../assets/blue-tesla.jpg";
import redTesla from "../assets/red-tesla.jpg";
import midnightBlackTesla from "../assets/midnight-black-tesla.jpg";
import purpleTesla from "../assets/purple-tesla.jpg";

function ColorSelectorPage() {
  const [carImage, setCarImage] = useState(whiteTesla);
  const navigate = useNavigate(); // Hook for navigation

  const handleColorChange = (color) => {
    switch (color) {
      case "white":
        setCarImage(whiteTesla);
        break;
      case "blue":
        setCarImage(blueTesla);
        break;
      case "red":
        setCarImage(redTesla);
        break;
      case "midnight-black":
        setCarImage(midnightBlackTesla);
        break;
      case "purple":
        setCarImage(purpleTesla);
        break;
      default:
        setCarImage(whiteTesla);
    }
  };

  return (
    <div
      className="color-selector-page"
      style={{
        backgroundImage: `url(${carImage})`,
      }}
    >
      {/* Go Back Button */}
      <button className="go-back-button" onClick={() => navigate("/")}>
        Go Back
      </button>

      <div className="color-options">
        <button
          onClick={() => handleColorChange("white")}
          style={{ backgroundColor: "white" }}
        >
          White
        </button>
        <button
          onClick={() => handleColorChange("blue")}
          style={{ backgroundColor: "blue" }}
        >
          Blue
        </button>
        <button
          onClick={() => handleColorChange("red")}
          style={{ backgroundColor: "red" }}
        >
          Red
        </button>
        <button
          onClick={() => handleColorChange("midnight-black")}
          style={{ backgroundColor: "black", color: "white" }}
        >
          Midnight Black
        </button>
        <button
          onClick={() => handleColorChange("purple")}
          style={{ backgroundColor: "purple" }}
        >
          Purple
        </button>
      </div>
    </div>
  );
}

export default ColorSelectorPage;
