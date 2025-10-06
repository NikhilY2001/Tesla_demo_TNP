import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";
import ProductListingPage from "./components/ProductListingPage";
import ColorSelectorPage from "./components/ColorSelectorPage";
import ModelsPage from "./components/ModelsPage";
import AboutUs from "./components/AboutUs";
import GlobalPresencePage from "./components/GlobalPresencePage";
import Testimonials from "./components/testimonials";

function App() {
  return (
    <Router>
      <Navbar />
      <AppRoutes />
      <ConditionalFooter />
    </Router>
  );
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/products" element={<ProductListingPage />} />
      <Route path="/choose-color" element={<ColorSelectorPage />} />
      <Route path="/models" element={<ModelsPage />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/global-presence" element={<GlobalPresencePage />} />
        <Route path="/testimonials" element={<Testimonials />} />

    </Routes>
  );
}

function ConditionalFooter() {
  const location = useLocation();
  const hideFooterRoutes = [
    "/choose-color",
    "/models",
    "/global-presence",
    "/about-us",
  ]; // Remove unnecessary paths
  return !hideFooterRoutes.includes(location.pathname) ? <Footer /> : null;
}

export default App;
