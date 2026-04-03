import React from 'react';

const TankComparison = () => {
  const features = [
    { feature: "Durability", ss: "50+ Years", plastic: "5-10 Years", concrete: "20 Years (Cracks)" },
    { feature: "Hygiene", ss: "Grade 304/316 Food Grade", plastic: "BPA/Toxic Risks", concrete: "Algae/Fungus Growth" },
    { feature: "Maintenance", ss: "Zero / Self-Cleaning", plastic: "Frequent Scrubbing", concrete: "High Leakage Repair" },
    { feature: "Recyclability", ss: "100% Eco-friendly", plastic: "Non-recyclable Waste", concrete: "N/A" },
  ];

  return (
    <div className="py-12 bg-white">
      <h3 className="text-2xl font-bold text-center mb-8">Why Choose AISHI Global SS Storage?</h3>
      <div className="overflow-x-auto max-w-5xl mx-auto shadow-xl rounded-lg">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-900 text-white">
              <th className="p-4">Feature</th>
              <th className="p-4 bg-orange-600">AISHI SS Tanks</th>
              <th className="p-4">Plastic (PVC)</th>
              <th className="p-4">Concrete (RCC)</th>
            </tr>
          </thead>
          <tbody>
            {features.map((row, i) => (
              <tr key={i} className="border-b hover:bg-slate-50">
                <td className="p-4 font-bold text-slate-700">{row.feature}</td>
                <td className="p-4 font-bold text-orange-700">{row.ss}</td>
                <td className="p-4 text-slate-500">{row.plastic}</td>
                <td className="p-4 text-slate-500">{row.concrete}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TankComparison;

