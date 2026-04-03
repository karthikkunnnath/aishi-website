import React, { useState, useEffect } from 'react';
import { Activity, Thermometer, Droplets, ShieldAlert } from 'lucide-react';

const IoTDashboard = () => {
  // Simulating live sensor data
  const [pressure, setPressure] = useState(25.2); // Pa (Pascals)
  const [temp, setTemp] = useState(22.1); // °C

  useEffect(() => {
    const interval = setInterval(() => {
      setPressure(p => +(p + (Math.random() * 0.4 - 0.2)).toFixed(1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const sensorCards = [
    { label: "Cleanroom Pressure", value: `${pressure} Pa`, status: "Normal", color: "text-green-500", icon: <Activity /> },
    { label: "HVAC Temperature", value: `${temp} °C`, status: "Stable", color: "text-blue-500", icon: <Thermometer /> },
    { label: "Fire Pump Pressure", value: "12.5 Bar", status: "Active", color: "text-orange-500", icon: <Droplets /> },
    { label: "Fire Suppression", value: "Ready", status: "Armed", color: "text-red-500", icon: <ShieldAlert /> },
  ];

  return (
    <div className="p-8 bg-slate-950 text-white rounded-2xl border border-slate-800 shadow-2xl">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-2xl font-bold">AISHI IoT Live Sentinel</h2>
          <p className="text-slate-400 text-sm">Location: Project Site Alpha (Calicut)</p>
        </div>
        <div className="px-4 py-1 bg-green-900/30 border border-green-500 text-green-500 rounded-full text-xs animate-pulse">
          LIVE MONITORING ACTIVE
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {sensorCards.map((card, i) => (
          <div key={i} className="bg-slate-900 p-6 rounded-xl border border-slate-800">
            <div className={`mb-4 ${card.color}`}>{card.icon}</div>
            <p className="text-slate-400 text-xs uppercase font-bold">{card.label}</p>
            <h3 className="text-3xl font-bold my-1">{card.value}</h3>
            <p className={`text-xs ${card.color}`}>{card.status}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 p-4 bg-slate-800/50 rounded-lg text-sm text-slate-300">
        <strong>System Note:</strong> Remote monitoring via AISHI Global IoT gateway is currently active for all Fire Fighting systems.
      </div>
    </div>
  );
};

export default IoTDashboard;

