import React, { useState } from 'react';

const EngineeringForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', service: 'Cleanrooms', file: null });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting to AISHI Global Backend...", formData);
    // Logic for Axios/Fetch to send to Django goes here
  };

  return (
    <section className="p-10 bg-slate-900 text-white rounded-xl shadow-2xl">
      <h2 className="text-3xl font-bold mb-6 border-b-2 border-orange-500 pb-2">
        AISHI Global Engineering Enquiry
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4 text-black">
        <input 
          type="text" placeholder="Client/Company Name" 
          className="w-full p-3 rounded" required 
        />
        
        <select className="w-full p-3 rounded bg-white">
          <option>Cleanrooms & HVAC</option>
          <option>Fire Suppression (Gas/Water)</option>
          <option>IoT & Automation</option>
          <option>Interior Engineering</option>
        </select>

        <div className="bg-slate-800 p-4 rounded border-2 border-dashed border-slate-600">
          <p className="text-white mb-2">Upload CAD/3D Max Drawings (.dwg, .max)</p>
          <input 
            type="file" 
            className="text-white"
            accept=".dwg,.max,.pdf,.zip"
            onChange={(e) => setFormData({...formData, file: e.target.files[0]})}
          />
        </div>

        <button className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 rounded transition">
          REQUEST TECHNICAL QUOTE
        </button>
      </form>
      
      <div className="mt-6 text-sm text-slate-400">
        <p>Corporate Office: 'DWARAKA', Annie Hall Road, Calicut</p>
      </div>
    </section>
  );
};

export default EngineeringForm;

