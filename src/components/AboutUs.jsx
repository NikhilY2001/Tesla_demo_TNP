import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import "../cssfiles/AboutUs.css"; // Import the CSS file for styling
import ceo from "../assets/musk.jpg";
import cto from "../assets/ctotesla.jpg";
import bh from "../assets/buisnesshead.jpg";
import hr from "../assets/hrtesla.jpg";

function AboutUs() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false); // Track hover state
  const navigate = useNavigate(); // Initialize useNavigate hook

  const team = [
    {
      name: "CEO",
      image: ceo,
      description:
      //changes
        " okokThe CEO of Tesla oooo is responsible for shaping the company's vision of accelerating the world's transition to sustainable energy. They oversee all aspects of Tesla's operations, from electric vehicle production to energy solutions, ensuring profitability and long-term growth. The CEO actively engages with investors, government bodies, and the public, driving innovation and strategic initiatives. They represent Tesla in key decisions, partnerships, and global expansion efforts while maintaining the company’s mission-driven culture.",
    },
    {
      name: "CTO",
      image: cto,
      description:
        "The CTO at Tesla leads the innovation and technological advancements that define the company. They oversee the development of cutting-edge technologies in electric vehicles, autonomous driving, and energy storage systems. By evaluating emerging tech trends and ensuring Tesla's infrastructure supports its ambitious goals, the CTO ensures Tesla stays ahead of competitors. They collaborate with engineers, designers, and other leaders to integrate advanced technology into Tesla's products and services, fostering innovation.",
    },
    {
      name: "Business Head",
      image: bh,
      description:
        "The Business Head at Tesla drives growth in various markets by developing and executing strategies tailored to meet customer needs. They focus on expanding Tesla's market presence through sales of vehicles, energy products, and services while ensuring high customer satisfaction. They work closely with manufacturing, marketing, and supply chain teams to maintain Tesla's reputation for quality and efficiency. Their role includes analyzing global market trends to identify new opportunities for growth and partnerships.",
    },
    {
      name: "HR",
      image: hr,
      description:
        "Tesla's HR team is dedicated to attracting and retaining top talent aligned with the company’s mission. They design and implement policies that foster innovation, collaboration, and employee satisfaction. The HR department ensures a positive work culture, manages recruitment, onboarding, and professional development, and promotes diversity and inclusion. They also focus on compliance with labor laws, resolving employee concerns, and enhancing overall workforce performance to maintain Tesla’s standing as an employer of choice.",
    },
  ];

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % team.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isHovered, team.length]);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div
      className="about-us"
      style={{
        backgroundImage: `url(${team[currentIndex].image})`, // Dynamic background image
      }}
    >
      <div
        className="carousel-content"
        onMouseEnter={() => setIsHovered(true)} // Pause on hover
        onMouseLeave={() => setIsHovered(false)} // Resume on mouse leave
      >
        <h2>{team[currentIndex].name}</h2>
        <p>
          {team[currentIndex].description}
          <br />
          <button
            className="go-back"
            onClick={() => navigate("/")} // Navigate to the home page
          >
            Go Back
          </button>
        </p>
      </div>
      <div className="dots">
        {team.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default AboutUs;
