import React, { useState } from 'react';

const colors = [
  { name: 'Pure White', ral: 'RAL 9010', hex: '#F7F9EF' },
  { name: 'Signal Grey', ral: 'RAL 7004', hex: '#969992' },
  { name: 'Anthracite Grey', ral: 'RAL 7016', hex: '#383E42' },
  { name: 'Flame Red', ral: 'RAL 3000', hex: '#AF2B1E' }, // Common for Fire Doors
  { name: 'Gentian Blue', ral: 'RAL 5010', hex: '#0E467F' },
  { name: 'Oyster White', ral: 'RAL 1013', hex: '#EAE6D1' },
];

const DoorColorVisualizer = () => {
  const [selected, setSelected] = useState(colors[0]);

  return (
    <div className="p-8 bg-white rounded-xl shadow-lg border border-slate-200">
      <h3 className="text-xl font-bold mb-6 text-slate-800">iClean Series: Finish Customization</h3>
      
      <div className="flex flex-col md:flex-row gap-8">
        {/* Door Mockup Visual */}
        <div className="flex-1 flex flex-col items-center justify-center p-10 bg-slate-100 rounded-lg border-2 border-dashed border-slate-300">
           <div 
             className="w-32 h-64 rounded-sm shadow-2xl transition-colors duration-500 border-4 border-slate-800 relative"
             style={{ backgroundColor: selected.hex }}
           >
             {/* Simple Door Handle Mockup */}
             <div className="absolute right-2 top-1/2 w-4 h-1 bg-slate-400 rounded-full"></div>
           </div>
           <p className="mt-4 font-bold text-slate-700">{selected.name} ({selected.ral})</p>
        </div>

        {/* Color Palette */}
        <div className="flex-1">
          <p className="text-sm text-slate-500 mb-4 font-semibold uppercase tracking-wider">Select Standard Shade</p>
          <div className="grid grid-cols-3 gap-3">
            {colors.map((color) => (
              <button
                key={color.ral}
                onClick={() => setSelected(color)}
                className={`h-12 w-full rounded border-2 transition ${selected.ral === color.ral ? 'border-orange-500 scale-105 shadow-md' : 'border-transparent'}`}
                style={{ backgroundColor: color.hex }}
                title={color.name}
              />
            ))}
          </div>
          <div className="mt-6 p-4 bg-orange-50 rounded text-xs text-orange-800">
            <strong>Note:</strong> Custom RAL matching is available for large-scale engineering projects. All finishes are pure polyester powder coated to withstand 300 hours of salt spray.
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoorColorVisualizer;

