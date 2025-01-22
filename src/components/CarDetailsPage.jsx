import React from "react";
import "../cssfiles/CarDetailsPage.css"; // Import the CSS file
import car1 from "../assets/car1.jpg";
import car2 from "../assets/car2.jpg";
import car3 from "../assets/car3.jpg";
import car4 from "../assets/car4.jpg";
import car5 from "../assets/car5.jpg";
import car6 from "../assets/car6.avif";

const cars = [
  {
    id: 1,
    name: "Tesla Model S",
    image: car1,
    details: "Premium electric sedan with unmatched range and performance.",
  },
  {
    id: 2,
    name: "Tesla Model 3",
    image: car2,
    details: "Affordable, high-performance, and cutting-edge electric car.",
  },
  {
    id: 3,
    name: "Tesla Model X",
    image: car3,
    details: "Luxury SUV with falcon-wing doors and unparalleled comfort.",
  },
  {
    id: 4,
    name: "Tesla Model Y",
    image: car4,
    details: "Compact SUV designed for versatility and efficiency.",
  },
  {
    id: 5,
    name: "Tesla Cybertruck",
    image: car5,
    details: "Bold, futuristic truck with impressive durability and utility.",
  },
  {
    id: 6,
    name: "Tesla Roadster",
    image: car6,
    details: "World's fastest electric car with incredible acceleration.",
  },
];

function CarDetailsPage() {
  return (
    <div className="car-details-page">
      <h1 className="page-title">
        Bold, sleek, and stylish—our upcoming future cars are crafted to impress
      </h1>
      <div className="car-grid">
        {cars.map((car) => (
          <div className="car-card" key={car.id}>
            <div
              className="card-image"
              style={{ backgroundImage: `url(${car.image})` }}
            ></div>
            <div className="card-content">
              <h3>{car.name}</h3>
              <p>{car.details}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CarDetailsPage;
