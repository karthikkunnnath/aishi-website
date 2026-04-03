import React from 'react';

const EngineeringHero = () => {
  return (
    <div className="relative h-[80vh] w-full overflow-hidden bg-slate-900">
      {/* Background Video Placeholder - Replace 'src' with your actual drone/site footage */}
      <video 
        autoPlay 
        loop 
        muted 
        className="absolute z-0 w-auto min-w-full min-h-full max-w-none opacity-40 grayscale"
      >
        <source src="https://assets.mixkit.co/videos/preview/mixkit-industrial-robotic-arm-in-a-factory-40340-large.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col items-start justify-center h-full max-w-7xl mx-auto px-8">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4 tracking-tighter">
          AISHI GLOBAL <br/>
          <span className="text-orange-500 underline decoration-2 underline-offset-8">ENGINEERING</span>
        </h1>
        <p className="text-xl text-slate-300 max-w-2xl mb-8 leading-relaxed">
          Independent providers of high-precision Cleanrooms, Fire Suppression, 
          and IoT-integrated building solutions. From 'DWARAKA' Calicut to 
          global project sites.
        </p>
        <div className="flex space-x-4">
          <button className="bg-orange-600 text-white px-8 py-4 font-bold rounded hover:bg-orange-700 transition">
            OUR CAPABILITIES
          </button>
          <button className="border-2 border-white text-white px-8 py-4 font-bold rounded hover:bg-white hover:text-black transition">
            REQUEST SITE SURVEY
          </button>
        </div>
      </div>
    </div>
  );
};

export default EngineeringHero;

