import React from 'react';
import { PaletteIcon, CodeIcon, RocketIcon, SparkleIcon, ArrowRightIcon } from './Icons';

export const Services: React.FC = () => {
  const services = [
    {
      icon: <PaletteIcon className="w-8 h-8" />,
      title: "Brand Identity",
      desc: "We craft memorable visual systems that tell your story. From logos to comprehensive brand guidelines.",
      color: "bg-[#F9FCD0]"
    },
    {
      icon: <CodeIcon className="w-8 h-8" />,
      title: "Web Engineering",
      desc: "Robust, scalable, and lightning-fast websites built with modern technologies (React, Next.js, WebGL).",
      color: "bg-[#E3F2FD]"
    },
    {
      icon: <RocketIcon className="w-8 h-8" />,
      title: "Growth Strategy",
      desc: "Data-driven marketing campaigns, SEO optimization, and conversion rate optimization (CRO).",
      color: "bg-[#E0DEFA]"
    },
    {
      icon: <SparkleIcon className="w-8 h-8" />,
      title: "UX/UI Design",
      desc: "User-centric interfaces that delight and convert. We design for usability and aesthetic perfection.",
      color: "bg-[#F4F4F4]"
    }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <div className="mb-12 md:mb-16 text-center md:text-left">
        <span className="text-eddie-purple font-bold tracking-wider uppercase text-sm">Our Expertise</span>
        <h2 className="text-4xl md:text-6xl font-bold mt-4 leading-tight">
          Comprehensive<br />Digital Services
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, idx) => (
          <div 
            key={idx} 
            className={`
              ${service.color} rounded-[2.5rem] p-8 flex flex-col justify-between min-h-[350px]
              group transition-all duration-300 hover:scale-[1.02] hover:shadow-xl cursor-default
            `}
          >
            <div>
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-eddie-dark/70 font-medium leading-relaxed">
                {service.desc}
              </p>
            </div>
            
            <div className="mt-8 flex items-center gap-2 font-bold text-sm opacity-60 group-hover:opacity-100 group-hover:gap-4 transition-all">
              <span>Learn More</span>
              <ArrowRightIcon className="w-4 h-4" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};