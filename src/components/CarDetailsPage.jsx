import React from "react";
import "../cssfiles/CarDetailsPage.css"; // Import the CSS file

// Importing car images
import car1 from "../assets/car1.jpg";
import car2 from "../assets/car2.jpg";
import car3 from "../assets/car3.jpg";
import car4 from "../assets/car4.jpg";
import car5 from "../assets/car5.jpg";
import car6 from "../assets/car6.avif";

function CarDetailsPage() {
  return (
    <div className="models-page">
      <h1 className="page-title">Comming Soon... </h1>
      <h1 className="page-title">
        Explore the Bold and Futuristic World of Tesla Cars
      </h1>

      {/* Car Images Section */}
      <div className="model-images">
        {/* Car 1 */}
        <div className="model-image">
          <img src={car1} alt="Tesla Model S" />
          <div className="model-info">
            <h3>Tesla Model S</h3>
            <p>Performance, luxury, and safety in one.</p>
          </div>
        </div>
        {/* Car 2 */}
        <div className="model-image">
          <img src={car2} alt="Tesla Model M" />
          <div className="model-info">
            <h3>Tesla Model M</h3>
            <p>Performance, luxury, and safety in one.</p>
          </div>
        </div>
        {/* Car 3 */}

        <div className="model-image">
          <img src={car3} alt="Tesla Model M" />
          <div className="model-info">
            <h3>Tesla Model M</h3>
            <p>Performance, luxury, and safety in one.</p>
          </div>
        </div>
        {/* Car 4 */}
        <div className="model-image">
          <img src={car4} alt="Tesla Model Y" />
          <div className="model-info">
            <h3>Tesla Model Y</h3>
            <p>Electric crossover with exceptional range.</p>
          </div>
        </div>

        {/* Car 5 */}
        <div className="model-image">
          <img src={car5} alt="Tesla Cybertruck" />
          <div className="model-info">
            <h3>Tesla Cybertruck</h3>
            <p>The future of electric trucks.</p>
          </div>
        </div>

        {/* Car 6 */}
        <div className="model-image">
          <img src={car6} alt="Tesla Roadster" />
          <div className="model-info">
            <h3>Tesla Roadster</h3>
            <p>The world's fastest production car.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarDetailsPage;
