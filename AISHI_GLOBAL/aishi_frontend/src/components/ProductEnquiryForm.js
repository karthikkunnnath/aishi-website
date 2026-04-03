import React, { useState } from 'react';

const ProductEnquiryForm = () => {
  return (
    <section className="bg-slate-50 p-8 rounded-lg border border-slate-200">
      <h2 className="text-2xl font-bold text-slate-900 mb-6">Bulk Product Quote Request</h2>
      
      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Product Selection Logic */}
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">Select Product Category</label>
            <select className="w-full p-3 border rounded-md bg-white">
              <option>Hollow Metal Doors (iClean Std)</option>
              <option>SS Water Tanks (Swedenox Std)</option>
              <option>Modular Partitions & Ceilings</option>
              <option>Stainless Steel Furniture</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">Quantity Required</label>
            <input type="number" placeholder="e.g. 50" className="w-full p-3 border rounded-md" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-bold text-slate-700 mb-2">Product Code / Description</label>
          <input type="text" placeholder="e.g. SST-GRADE-316-5000L" className="w-full p-3 border rounded-md" />
        </div>

        <div>
          <label className="block text-sm font-bold text-slate-700 mb-2">Reference Image / Drawing (Optional)</label>
          <input type="file" className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-orange-50 file:text-orange-700 hover:file:bg-orange-100" />
        </div>

        <button className="bg-orange-600 text-white px-10 py-3 font-bold rounded shadow-lg hover:bg-orange-700 transition w-full md:w-auto">
          SUBMIT FOR QUOTATION
        </button>
      </form>
    </section>
  );
};

export default ProductEnquiryForm;

