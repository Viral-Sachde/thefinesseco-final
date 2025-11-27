'use client'

import React, { useState } from 'react';

const TECH_STACK = [
  'React', 'Next.js', 'Node.js', 'TypeScript', 'GraphQL', 'PostgreSQL', 
  'Redis', 'AWS', 'Vercel', 'Tailwind', 'Python', 'Docker', 'Kubernetes',
  'Three.js', 'GSAP', 'Supabase', 'Sanity', 'Shopify'
];

export const TechMarquee: React.FC = () => {
  const [fallenItems, setFallenItems] = useState<Set<number>>(new Set());

  const handleTechHover = (index: number) => {
    // Only fall once - if already fallen, don't do anything
    if (!fallenItems.has(index)) {
      setFallenItems(prev => new Set(prev).add(index));
    }
  };

  const handleTechClick = (index: number) => {
    // Also work on click for mobile
    handleTechHover(index);
  };

  return (
    <div className="w-full py-8 sm:py-12 bg-white overflow-hidden relative border-y border-gray-100">
      
      {/* Gradient Fade Edges */}
      <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

      <div className="flex w-max animate-[float_20s_linear_infinite]">
         <div className="flex gap-3 sm:gap-4 px-2 sm:px-4">
            {[...TECH_STACK, ...TECH_STACK].map((tech, i) => (
               <div 
                 key={i} 
                 onMouseEnter={() => handleTechHover(i)}
                 onClick={() => handleTechClick(i)}
                 className={`px-4 sm:px-6 py-2 sm:py-3 rounded-xl bg-gray-50 border border-gray-100 text-eddie-dark font-bold text-xs sm:text-sm md:text-base whitespace-nowrap cursor-pointer touch-manipulation ${
                   fallenItems.has(i) ? 'animate-[gravity_0.6s_ease-in_forwards] opacity-0 pointer-events-none' : 'md:hover:bg-eddie-purple/10 md:hover:border-eddie-purple/20 transition-colors duration-300'
                 }`}
               >
                 {tech}
               </div>
            ))}
         </div>
      </div>
      
      {/* Second Row Reverse */}
      <div className="flex w-max animate-[float_25s_linear_infinite_reverse] mt-3 sm:mt-4 opacity-70">
         <div className="flex gap-3 sm:gap-4 px-2 sm:px-4">
            {[...TECH_STACK.reverse(), ...TECH_STACK].map((tech, i) => {
              const index = i + TECH_STACK.length * 2;
              return (
                <div 
                  key={i} 
                  onMouseEnter={() => handleTechHover(index)}
                  onClick={() => handleTechClick(index)}
                  className={`px-4 sm:px-6 py-2 sm:py-3 rounded-xl bg-white border border-gray-100 text-gray-500 font-bold text-[10px] sm:text-xs md:text-sm whitespace-nowrap cursor-pointer touch-manipulation ${
                    fallenItems.has(index) ? 'animate-[gravity_0.6s_ease-in_forwards] opacity-0 pointer-events-none' : 'transition-colors duration-300'
                  }`}
                >
                  {tech}
                </div>
              );
            })}
         </div>
      </div>

    </div>
  );
};

