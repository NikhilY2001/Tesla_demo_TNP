import React from 'react';
import '../cssfiles/ReleasedCars.css';

function ReleasedCars() {
  const carFeatures = [
    {
      id: "01",
      icon: "📘",  // You can replace these with actual icons
      title: "Model S",
      description: "Tesla's flagship sedan, combining luxury with electric performance. Features advanced autopilot and premium interior.",
    },
    {
      id: "02",
      icon: "🌍",
      title: "Model 3",
      description: "The most affordable Tesla sedan. Perfect balance of efficiency, performance, and value with cutting-edge technology.",
    },
    {
      id: "03",
      icon: "💬",
      title: "Model X",
      description: "Luxury SUV with falcon-wing doors. Spacious interior with third-row seating and exceptional performance.",
    },
    {
      id: "04",
      icon: "⏰",
      title: "Model Y",
      description: "Compact SUV combining versatility with performance. Perfect for families with ample cargo space.",
    },
    {
      id: "05",
      icon: "✈️",
      title: "Cybertruck",
      description: "Futuristic electric pickup truck with unique design. Features bulletproof exterior and impressive towing capacity.",
    },
    {
      id: "06",
      icon: "📱",
      title: "Roadster",
      description: "Next-generation sports car. The fastest production car with groundbreaking acceleration and range.",
    }
  ];

  return (
    <div className="released-cars-container">
      <h2>Tesla Vehicle Lineup</h2>
      <div className="cars-grid">
        {carFeatures.map((car) => (
          <div key={car.id} className="car-card">
            <div className="card-header">
              <span className="card-number">{car.id}</span>
              <span className="card-icon">{car.icon}</span>
            </div>
            <h3>{car.title}</h3>
            <p className="card-description">{car.description}</p>
            <button className="read-more-btn">Read More</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ReleasedCars;