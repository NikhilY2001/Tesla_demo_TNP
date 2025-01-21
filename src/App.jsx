import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";
import ProductListingPage from "./components/ProductListingPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<ProductListingPage />} />{" "}
        {/* Product Listing page */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;