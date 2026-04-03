import React, { useState } from 'react';

const EnquiryForm = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];

    if (!selectedFile) return;

    const allowedExtensions = ['.dwg', '.max', '.pdf'];
    const fileName = selectedFile.name.toLowerCase();

    if (allowedExtensions.some(ext => fileName.endsWith(ext))) {
      setFile(selectedFile);
    } else {
      alert("Please upload a valid .dwg or .max drawing.");
    }
  };

  return (
    <div className="p-8 bg-gray-100 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">AISHI Global - Project Enquiry</h2>

      <form className="grid grid-cols-1 gap-4">

        <input
          type="text"
          placeholder="Full Name"
          className="p-2 border rounded"
          required
        />

        <select className="p-2 border rounded">
          <option>Cleanroom Services</option>
          <option>Fire Suppression Systems</option>
          <option>Financial Audit / CA Services</option>
        </select>

        <textarea
          placeholder="Describe your requirements"
          className="p-2 border rounded"
          rows="4"
        />

        <label className="font-semibold">
          Attach Drawings (.dwg, .max):
        </label>

        <input
          type="file"
          onChange={handleFileChange}
          className="bg-white p-2"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Submit Enquiry
        </button>

      </form>

    </div>
  );
};

export default EnquiryForm;