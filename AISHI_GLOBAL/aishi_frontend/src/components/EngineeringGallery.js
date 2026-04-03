import React from "react";
import { useNavigate } from "react-router-dom";
import { FaMicrochip, FaIndustry, FaCouch, FaChartLine, FaBriefcase, FaGlobe } from "react-icons/fa";

const divisions = [
  {
    title: "IoT Solutions",
    slug: "iot",
    icon: <FaMicrochip />,
    desc: "Smart monitoring, automation, and connected systems."
  },
  {
    title: "Cleanroom Solutions",
    slug: "cleanroom",
    icon: <FaIndustry />,
    desc: "ISO-certified cleanroom design and execution."
  },
  {
    title: "Interior Solutions",
    slug: "interior",   // 🔥 THIS IS IMPORTANT
    icon: <FaCouch />,
    desc: "Modern, functional, and aesthetic interior spaces."
  },
  {
    title: "Finance Consultancy",
    slug: "finance",
    icon: <FaChartLine />,
    desc: "Strategic financial planning and advisory services."
  },
  {
    title: "Management Consultancy",
    slug: "management",
    icon: <FaBriefcase />,
    desc: "Business strategy, operations, and growth solutions."
  },
  {
    title: "Export Services",
    slug: "export",
    icon: <FaGlobe />,
    desc: "Global sourcing and export management solutions."
  }
];

const EngineeringGallery = () => {
  const navigate = useNavigate(); // 🔥 important

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
          Our Business Verticals
        </h2>

        {/* Subheading */}
        <p className="text-slate-600 mb-14 max-w-2xl mx-auto">
          Delivering integrated solutions across technology, infrastructure, consulting, and global trade.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

          {divisions.map((item, index) => (
            <div
              key={index}
              onClick={() => navigate(`/service/${item.slug}`)} // 🔥 navigation
              className="bg-[#0F172A] rounded-2xl p-8 text-left shadow-md hover:shadow-xl transition duration-300 cursor-pointer"
            >

              {/* Icon */}
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-white/10 text-sky-400 text-xl mb-5">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-white mb-2">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 text-sm leading-relaxed">
                {item.desc}
              </p>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default EngineeringGallery;