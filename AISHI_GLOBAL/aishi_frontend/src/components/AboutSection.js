import React from 'react';

const AboutSection = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            Total Building Solutions <br/>
            <span className="text-orange-600">From the Heart of Calicut</span>
          </h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            Registered as <strong>AISHI Global Pvt. Ltd.</strong>, we are a multi-disciplinary engineering 
            firm dedicated to high-precision environments. From specialized ISO-standard Cleanrooms 
            to life-saving Fire Suppression systems, we provide end-to-end consultancy, supply, and installation.
          </p>
          <div className="border-l-4 border-orange-600 pl-4 mb-6">
            <h4 className="font-bold text-slate-900 uppercase">Corporate Office</h4>
            <p className="text-slate-600">'DWARAKA', Annie Hall Road, Calicut, Kerala</p>
          </div>
          <p className="text-slate-700 italic">
            "We don't just build structures; we engineer safety and precision into every cubic meter."
          </p>
        </div>
        <div className="bg-slate-900 p-8 rounded-2xl shadow-2xl text-white">
          <h3 className="text-xl font-bold mb-4">Our Core Pillars</h3>
          <ul className="space-y-4 text-sm text-slate-300">
            <li>• <strong>Engineering:</strong> Cleanrooms, IoT, and Advanced Fire Protection.</li>
            <li>• <strong>Products:</strong> iClean-standard Doors & Swedenox-standard SS Tanks.</li>
            <li>• <strong>Compliance:</strong> Strict adherence to NFPA, NBC, and ISO 14644.</li>
            <li>• <strong>Future Wing:</strong> Strategic expansion into Financial Audit & IT Consultancy.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;