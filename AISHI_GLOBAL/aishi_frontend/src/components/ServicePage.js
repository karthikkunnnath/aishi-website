import React from "react";
import { useParams } from "react-router-dom";

import ProductCatalog from "./ProductCatalog";
import DoorTechnicalSpecs from "./DoorTechnicalSpecs";
import DoorColorVisualizer from "./DoorColorVisualizer";
import TankComparison from "./TankComparison";
import ProductEnquiryForm from "./ProductEnquiryForm";

const ServicePage = () => {
  const { name } = useParams();

  // Convert slug to proper title
  const formatTitle = (text) => {
    if (!text) return "Service";

    const map = {
      iot: "IoT Solutions",
      cleanroom: "Cleanroom Solutions",
      interior: "Interior Solutions",
      finance: "Finance Consultancy",
      management: "Management Consultancy",
      export: "Export Services"
    };

    return map[text] || text;
  };

  return (
    <div className="bg-white">

      {/* HERO SECTION */}
      <section className="py-24 text-center bg-[#0F172A]">
  
  <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
    {formatTitle(name)}
  </h1>

  <p className="text-gray-300 text-lg max-w-2xl mx-auto">
    Delivering premium solutions with engineering excellence.
  </p>

</section>

      {/* INTERIOR PAGE CONTENT */}
      {name === "interior" && (
        <div>

          <ProductCatalog />

          <DoorTechnicalSpecs />

          <DoorColorVisualizer />

          <TankComparison />

          <ProductEnquiryForm /> 

        </div>
      )}

      {/* DEFAULT CONTENT FOR OTHER PAGES */}
      {name !== "interior" && (
        <div className="text-center py-20 text-slate-500">
          Content coming soon for {formatTitle(name)}
        </div>
      )}

    </div>
  );
};

export default ServicePage;