import { BrowserRouter, Routes, Route } from "react-router-dom";

import DoorColorVisualizer from './components/DoorColorVisualizer';
import AboutSection from './components/AboutSection';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import IoTDashboard from './components/IoTDashboard';
import TankComparison from './components/TankComparison';
import ProductEnquiryForm from './components/ProductEnquiryForm';
import DoorTechnicalSpecs from './components/DoorTechnicalSpecs';
import ProductCatalog from './components/ProductCatalog';
import EngineeringHero from './components/EngineeringHero';
import EngineeringGallery from './components/EngineeringGallery';
import EngineeringForm from './components/EngineeringForm';
import ServicePage from './components/ServicePage';

function Home() {
  return (
    <div>

      <Hero />

      <AboutSection />

      <EngineeringHero />

      <EngineeringGallery />

      {/* ⚠️ Enable these one by one later if needed */}

      {/* <IoTDashboard /> */}

      { <EngineeringForm /> }

      <Gallery />

    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Homepage */}
        <Route path="/" element={<Home />} />

        {/* Service Pages */}
        <Route path="/service/:name" element={<ServicePage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;