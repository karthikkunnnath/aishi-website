import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PremiumGlobeLogo from "./PremiumGlobeLogo";

const slides = [
  {
    title: "Cleanroom Solutions",
    slug: "cleanroom",
    desc: "ISO-certified cleanroom design and execution.",
    image: "/1.jpg"
  },
  {
    title: "Interior Solutions",
    slug: "interior",
    desc: "Modern, aesthetic interiors.",
    image: "/2.jpg"
  },
  {
    title: "IoT Solutions",
    slug: "iot",
    desc: "Smart automation systems.",
    image: "/3.jpg"
  },
  {
    title: "Finance Consultancy",
    slug: "finance",
    desc: "Strategic financial planning.",
    image: "/4.jpg"
  },
  {
    title: "Management Consultancy",
    slug: "management",
    desc: "Business growth solutions.",
    image: "/5.jpg"
  },
  {
    title: "Export Services",
    slug: "export",
    desc: "Global sourcing solutions.",
    image: "/6.jpg"
  }
];

const Hero = () => {
  const [active, setActive] = useState(0);
  const [showContact, setShowContact] = useState(false);

  const navigate = useNavigate();

  // AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const next = () => {
    setActive((prev) => (prev + 1) % slides.length);
  };

  const prev = () => {
    setActive((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const current = slides[active];

  return (
    <section className="relative h-screen w-full overflow-hidden">

      {/* BACKGROUND */}
      <img
        src={current.image}
        className="absolute w-full h-full object-cover transition-all duration-700 scale-105"
        alt=""
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* AISHI GLOBAL */}
      <div className="absolute top-20 left-1/2 transform -translate-x-1/2 text-center z-30">
        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-widest">
          AISHI GLOBAL
        </h1>
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-20 h-full flex items-center justify-between px-6 md:px-16 gap-10 pt-40">

        {/* LEFT TEXT */}
        <div className="w-full md:w-[40%] text-white ">

          <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
            {current.title}
          </h2>

          <p className="text-gray-300 mb-8">
            {current.desc}
          </p>

          {/* BUTTONS */}
          <div className="flex gap-4 flex-wrap">

            <button
              onClick={() => navigate(`/service/${current.slug}`)}
              className="bg-sky-500 hover:bg-sky-600 px-6 py-3 rounded-md transition duration-300 shadow-lg"
            >
              Explore
            </button>

            <button
              onClick={() => setShowContact(true)}
              className="border border-white/60 backdrop-blur-md bg-white/10 px-6 py-3 rounded-md hover:bg-white hover:text-black transition duration-300"
            >
              Contact
            </button>

          </div>
        </div>

        {/* ROTATING CAROUSEL */}
        <div className="hidden md:flex items-center justify-center w-[60%] relative h-[350px]">

          {slides.map((slide, i) => {
            const position = (i - active + slides.length) % slides.length;

            let style = "";

            if (position === 0) {
              style = "translate-x-0 scale-110 opacity-100 z-30";
            } else if (position === 1) {
              style = "translate-x-[200px] scale-95 opacity-70 z-20";
            } else if (position === slides.length - 1) {
              style = "translate-x-[-200px] scale-95 opacity-70 z-20";
            } else if (position === 2) {
              style = "translate-x-[380px] scale-90 opacity-40 z-10";
            } else if (position === slides.length - 2) {
              style = "translate-x-[-380px] scale-90 opacity-40 z-10";
            } else {
              style = "opacity-0 scale-75";
            }

            return (
              <div
                key={i}
                onClick={() => setActive(i)}
                className={`absolute w-56 h-80 rounded-xl overflow-hidden cursor-pointer transition-all duration-700 ease-in-out ${style}`}
              >
                <img
                  src={slide.image}
                  className="w-full h-full object-cover"
                  alt=""
                />

                {/* LABEL */}
                <div className="absolute bottom-4 left-4 text-white text-sm font-semibold">
                  {slide.title}
                </div>
              </div>
            );
          })}

        </div>
      </div>

      {/* NAVIGATION */}
      <div className="absolute bottom-10 right-10 flex items-center gap-4 text-white z-30">

        <button
          onClick={prev}
          className="w-10 h-10 border border-white rounded-full flex items-center justify-center hover:bg-white hover:text-black transition"
        >
          ←
        </button>

        <button
          onClick={next}
          className="w-10 h-10 border border-white rounded-full flex items-center justify-center hover:bg-white hover:text-black transition"
        >
          →
        </button>

        <span className="ml-4 text-lg font-semibold">
          {String(active + 1).padStart(2, "0")}
        </span>
      </div>

      {/* PREMIUM CONTACT POPUP */}
      {showContact && (

        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-6"
          onClick={() => setShowContact(false)}
        >

          {/* CARD */}
          <div
            className="relative w-full max-w-md rounded-3xl border border-white/20 bg-white/10 backdrop-blur-2xl p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >

            {/* CLOSE */}
            <button
              onClick={() => setShowContact(false)}
              className="absolute top-4 right-4 text-white text-2xl hover:text-sky-400 transition"
            >
              ×
            </button>

            {/* SMALL TITLE */}
            <p className="text-sky-400 tracking-[0.3em] text-xs uppercase mb-3">
              AISHI GLOBAL
            </p>

            {/* MAIN TITLE */}
            <h2 className="text-3xl font-bold text-white mb-3">
              Contact Us
            </h2>

            <p className="text-gray-300 mb-8">
              Connect with our engineering and consulting team.
            </p>

            {/* CONTACT ITEMS */}
            <div className="space-y-5">

              {/* MOBILE */}
              <a
                href="tel:+919876543210"
                className="flex items-center justify-between bg-white/5 hover:bg-white/10 transition rounded-2xl px-5 py-4 border border-white/10"
              >
                <div>
                  <p className="text-gray-400 text-sm">
                    Mobile
                  </p>

                  <p className="text-white font-semibold">
                    +91 6238560225
                  </p>
                </div>

                <div className="text-sky-400 text-xl">
                  ↗
                </div>
              </a>

              {/* LANDLINE */}
              <a
                href="tel:+914844000000"
                className="flex items-center justify-between bg-white/5 hover:bg-white/10 transition rounded-2xl px-5 py-4 border border-white/10"
              >
                <div>
                  <p className="text-gray-400 text-sm">
                    Landline
                  </p>

                  <p className="text-white font-semibold">
                    +91 495 3150116
                  </p>
                </div>

                <div className="text-sky-400 text-xl">
                  ↗
                </div>
              </a>

              {/* EMAIL */}
              <a
                href="mailto:info@aishiglobal.co"
                className="flex items-center justify-between bg-white/5 hover:bg-white/10 transition rounded-2xl px-5 py-4 border border-white/10"
              >
                <div>
                  <p className="text-gray-400 text-sm">
                    Email
                  </p>

                  <p className="text-white font-semibold">
                    mail@aishiglobal.co
                  </p>
                </div>

                <div className="text-sky-400 text-xl">
                  ↗
                </div>
              </a>

            </div>

            {/* ENQUIRY BUTTON */}
            <button
              className="w-full mt-8 bg-sky-500 hover:bg-sky-600 transition rounded-2xl py-4 text-white font-semibold shadow-lg"
            >
              Send Enquiry
            </button>

          </div>

        </div>

      )}

    </section>
  );
};

export default Hero;