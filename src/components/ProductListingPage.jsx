import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import "../cssfiles/ProductListingPage.css"; // Import CSS for styling

function ProductListingPage() {
  const navigate = useNavigate(); // Initialize the navigate hook
  const [cars, setCars] = useState([]); // Store car data
  const [searchQuery, setSearchQuery] = useState(""); // For search functionality
  const [filteredCars, setFilteredCars] = useState([]); // Store filtered cars
  const [sortOption, setSortOption] = useState("low-to-high"); // For sorting prices
  const [filterOption, setFilterOption] = useState("model"); // For filter option (Model or Price)

  // Fetch data from API
  useEffect(() => {
    async function fetchCars() {
      try {
        const response = await axios.get(
          "https://run.mocky.io/v3/0ed12daa-19ce-4f6e-80f2-d107e22454ab"
        ); // Replace with your API URL
        setCars(response.data);
        setFilteredCars(response.data); // Initialize filteredCars
      } catch (error) {
        console.error("Error fetching car data:", error);
      }
    }
    fetchCars();
  }, []);

  // Handle search input and sorting/filtering
  useEffect(() => {
    let filtered = [...cars]; // Copy the cars array before applying any filtering

    // Filter based on the selected option (model or description)
    if (filterOption === "model") {
      filtered = filtered.filter((car) =>
        car.modelName.toLowerCase().includes(searchQuery.toLowerCase())
      );
    } else if (filterOption === "description") {
      filtered = filtered.filter((car) =>
        car.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Sort cars based on price
    if (sortOption === "low-to-high") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortOption === "high-to-low") {
      filtered.sort((a, b) => b.price - a.price);
    }

    setFilteredCars(filtered);
  }, [searchQuery, cars, sortOption, filterOption]);

  // Go back to the home page
  const handleGoHome = () => {
    navigate("/"); // Navigates to the home page
  };

  return (
    <div className="product-listing-page">
      <h1 className="page-title">Product Listing</h1>

      {/* Go Back Button */}
      <button className="go-home-button" onClick={handleGoHome}>
        Go Back to Home Page
      </button>

      {/* Search Bar */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for a car model or feature..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-bar"
        />
      </div>

      {/* Filter Options (Model or Description) */}
      <div className="filter-container">
        <label htmlFor="filter-option" style={{ color: "white" }}>
          Filter by:{" "}
        </label>
        <select
          id="filter-option"
          value={filterOption}
          onChange={(e) => setFilterOption(e.target.value)}
        >
          <option value="model">Model Name</option>
          <option value="description">Description</option>
        </select>
      </div>

      {/* Sort Options (Price) */}
      <div className="sort-container">
        <label htmlFor="sort-option" style={{ color: "white" }}>
          Sort by Price:{" "}
        </label>
        <select
          id="sort-option"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="low-to-high">Price: Low to High</option>
          <option value="high-to-low">Price: High to Low</option>
        </select>
      </div>

      {/* Car Grid */}
      <div className="car-grid">
        {filteredCars.length > 0 ? (
          filteredCars.map((car) => (
            <div className="car-card" key={car.id}>
              <img src={car.image} alt={car.modelName} className="car-image" />
              <div className="car-info">
                <h3>{car.modelName}</h3>
                <p>{car.description}</p>
                <p>Price: ${car.price.toLocaleString()}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No cars found matching your search or filter.</p> // Message if no results
        )}
      </div>
    </div>
  );
}

export default ProductListingPage;
