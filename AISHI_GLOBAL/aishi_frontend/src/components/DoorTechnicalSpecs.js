import React from 'react';

const DoorTechnicalSpecs = () => {
  const specs = [
    { label: "Material", value: "Galvanized Steel / Stainless Steel (Grade 304/316L)" },
    { label: "Fire Rating", value: "60 / 120 / 180 Minutes (UL / CBRI Certified)" },
    { label: "Infill", value: "Honeycombed / Rockwool / Polyurethane" },
    { label: "Finish", value: "Pure Polyester Powder Coated (RAL Shades)" },
    { label: "Standard Sizes", value: "Single Leaf / Double Leaf (Customizable)" },
  ];

  return (
    <div className="bg-white border-l-4 border-orange-600 p-6 shadow-sm">
      <h3 className="text-xl font-bold mb-4 text-slate-800 uppercase tracking-tight">
        Hollow Metal Door - Technical Profile
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {specs.map((item, index) => (
          <div key={index} className="flex justify-between border-b pb-2">
            <span className="text-slate-500 text-sm font-medium">{item.label}</span>
            <span className="text-slate-900 text-sm font-bold">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoorTechnicalSpecs;

