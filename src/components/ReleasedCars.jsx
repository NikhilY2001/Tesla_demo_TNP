import React from 'react';
import '../cssfiles/ReleasedCars.css';

function ReleasedCars() {
  const releasedCars = [
    {
      name: "Model S",
      model: "Plaid",
      year: 2023,
    },
    {
      name: "Model 3",
      model: "Performance",
      year: 2023,
    },
    {
      name: "Model X",
      model: "Long Range",
      year: 2023,
    },
    {
      name: "Model Y",
      model: "Performance",
      year: 2023,
    },
    {
      name: "Cybertruck",
      model: "Tri Motor",
      year: 2024,
    }
  ];

  return (
    <div className="released-cars-container">
      <h2>Released Tesla Models</h2>
      <div className="cars-grid">
        {releasedCars.map((car, index) => (
          <div key={index} className="car-card">
            <h3>{car.name}</h3>
            <div className="car-details">
              <p>Model: {car.model}</p>
              <p>Year: {car.year}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ReleasedCars;