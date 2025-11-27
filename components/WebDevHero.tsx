import React from 'react';
import { ArrowRightIcon } from './Icons';

interface WebDevHeroProps {
  onNavigate: (page: string) => void;
}

export const WebDevHero: React.FC<WebDevHeroProps> = ({ onNavigate }) => {
  return (
    <div className="text-center mb-16 sm:mb-20 md:mb-24">
      <span className="bg-[#E3F2FD] text-eddie-dark px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wide mb-4 sm:mb-6 inline-block">Web Engineering</span>
      
      {/* Aesthetic Headline: Sans Bold */}
      <h1 className="text-center leading-[0.85] tracking-tighter mb-6 sm:mb-8 md:mb-10 flex flex-wrap justify-center items-center gap-x-2 sm:gap-x-3 md:gap-x-6 gap-y-0 px-2">
        <span className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl font-sans font-bold text-eddie-dark tracking-tighter">
          Code that prints
        </span>
        <span className="bg-eddie-purple w-12 h-8 sm:w-14 sm:h-10 md:w-28 md:h-24 rounded-[1rem] sm:rounded-[1.5rem] md:rounded-[2.5rem] flex items-center justify-center text-eddie-dark mx-1 shadow-sm hover:animate-spin-slow flex-basis-full md:flex-basis-auto">
          <span className="text-xl sm:text-2xl md:text-4xl leading-none">💸</span>
        </span>
        <span className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl font-sans font-bold text-eddie-dark tracking-tighter">
          money.
        </span>
      </h1>
      <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-500 max-w-3xl mx-auto font-medium px-4">
        We don't build brochures. We build high-performance digital assets that convert traffic into revenue.
      </p>
      <div className="mt-8 sm:mt-10 md:mt-12 flex justify-center px-4">
        <button onClick={() => onNavigate('contact')} className="bg-eddie-dark text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-sm sm:text-base hover:scale-105 transition-transform flex items-center gap-2 sm:gap-3 shadow-lg">
          Book a Call <ArrowRightIcon className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>
    </div>
  );
};

