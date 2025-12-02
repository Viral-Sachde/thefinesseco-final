import React from 'react';
import { ArrowRightIcon } from './Icons';

interface HowWeWorkHeroProps {
  onNavigate: (page: string) => void;
}

export const HowWeWorkHero: React.FC<HowWeWorkHeroProps> = ({ onNavigate }) => {
  return (
    <div className="text-center mb-24">
      <span className="bg-[#F4F4F4] text-eddie-dark px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide mb-6 inline-block">The Philosophy</span>
      
      <h1 className="text-center leading-[0.85] tracking-tighter mb-10 flex flex-wrap justify-center items-center gap-x-3 md:gap-x-6 gap-y-2">
        <span className="text-6xl md:text-8xl lg:text-9xl font-sans font-bold text-eddie-dark tracking-tighter">
          No suits.
        </span>
        <span className="bg-eddie-purple w-14 h-10 md:w-28 md:h-24 rounded-[1.5rem] md:rounded-[2.5rem] flex items-center justify-center text-eddie-dark mx-1 shadow-sm hover:animate-spin-slow flex-basis-full md:flex-basis-auto">
          <span className="text-2xl md:text-4xl">🤝</span>
        </span>
        <span className="text-6xl md:text-8xl lg:text-9xl font-sans font-bold text-eddie-dark tracking-tighter">
          No fluff.
        </span>
      </h1>

      <p className="text-xl md:text-2xl text-gray-500 max-w-3xl mx-auto font-medium">
        We ditched the agency bloat. You get direct access to the talent, rapid sprints, and zero corporate jargon.
      </p>
      <div className="mt-8 md:mt-10 flex justify-center">
        <button onClick={() => onNavigate('contact')} className="bg-eddie-dark text-white px-6 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl font-bold text-sm md:text-base hover:scale-105 transition-transform flex items-center gap-2 md:gap-3 shadow-lg">
          Work With Us <ArrowRightIcon className="w-4 h-4 md:w-5 md:h-5" />
        </button>
      </div>
    </div>
  );
};

