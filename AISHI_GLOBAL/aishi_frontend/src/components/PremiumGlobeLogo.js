import React from "react";

const PremiumGlobeLogo = () => {
  return (
    <div className="flex flex-col items-center justify-center">

      {/* GLOBE */}
      <div className="relative w-28 h-28 flex items-center justify-center">

        {/* OUTER GLOW */}
        <div className="absolute inset-0 rounded-full bg-sky-500/20 blur-2xl animate-pulse"></div>

        {/* ORBIT RING */}
        <div className="absolute w-full h-full rounded-full border border-sky-400/30 animate-spin-slow"></div>

        {/* SECOND ORBIT */}
        <div className="absolute w-[85%] h-[85%] rounded-full border border-white/10 animate-reverse-spin"></div>

        {/* GLOBE BODY */}
        <div className="relative w-24 h-24 rounded-full overflow-hidden border border-white/20 bg-gradient-to-br from-sky-500 via-[#0F172A] to-black shadow-2xl">

          {/* CONTINENTS */}
          <div className="absolute inset-0 opacity-70 animate-globe">

            {/* TOP LAND */}
            <div className="absolute top-4 left-3 w-8 h-4 bg-white/70 rounded-full blur-[1px]"></div>

            {/* MIDDLE LAND */}
            <div className="absolute top-10 right-4 w-10 h-5 bg-white/60 rounded-full blur-[1px]"></div>

            {/* LOWER LAND */}
            <div className="absolute bottom-5 left-5 w-6 h-3 bg-white/60 rounded-full blur-[1px]"></div>

          </div>

          {/* INNER SHADOW */}
          <div className="absolute inset-0 bg-gradient-to-tr from-black/50 via-transparent to-white/10"></div>

        </div>

      </div>

      {/* BRAND NAME */}
      <div className="mt-6 text-center">

        <h1 className="text-white text-2xl md:text-3xl tracking-[0.35em] font-light">
          <span className="font-bold text-sky-400">
            AISHI
          </span>{" "}
          GLOBAL
        </h1>

        <p className="text-gray-400 text-xs tracking-[0.25em] mt-2 uppercase">
          Engineering • Consulting • Global Solutions
        </p>

      </div>

      {/* CUSTOM ANIMATIONS */}
      <style jsx>{`
        @keyframes globeRotate {
          0% {
            transform: translateX(0px);
          }
          50% {
            transform: translateX(4px);
          }
          100% {
            transform: translateX(0px);
          }
        }

        @keyframes spinSlow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes reverseSpin {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }

        .animate-globe {
          animation: globeRotate 6s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spinSlow 10s linear infinite;
        }

        .animate-reverse-spin {
          animation: reverseSpin 14s linear infinite;
        }
      `}</style>

    </div>
  );
};

export default PremiumGlobeLogo;