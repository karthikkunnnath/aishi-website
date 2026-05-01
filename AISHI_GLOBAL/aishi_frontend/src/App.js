import { HashRouter, Routes, Route } from "react-router-dom";
import AboutSection from './components/AboutSection';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
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

      { <EngineeringForm /> }

      <Gallery />

    </div>
  );
}

function App() {
  return (
    <HashRouter>
      <Routes>

        {/* Homepage */}
        <Route path="/" element={<Home />} />

        {/* Service Pages */}
        <Route path="/service/:name" element={<ServicePage />} />

      </Routes>
    </HashRouter>
  );
}

export default App;