'use client'

import React, { useState } from 'react';
import { SEOGraph } from './SEOGraph';

export const WebDevSpeedStack: React.FC = () => {
  const [fallenTech, setFallenTech] = useState<Set<string>>(new Set());

  const handleTechHover = (tech: string) => {
    // Only fall once - if already fallen, don't do anything
    if (!fallenTech.has(tech)) {
      setFallenTech(prev => new Set(prev).add(tech));
    }
  };

  const handleTechClick = (tech: string) => {
    // Also work on click for mobile
    handleTechHover(tech);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-16 sm:mb-20 md:mb-24">
      {/* SEO Graph Visual Component */}
      <div className="order-2 lg:order-1">
        <SEOGraph />
      </div>
      
      <div className="bg-[#E3F2FD] rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[2.5rem] p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-center order-1 lg:order-2 overflow-hidden relative">
         <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 md:mb-6 text-eddie-dark">The Modern Stack</h3>
         <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-4 sm:mb-6 md:mb-8 font-medium">
            Our sites are built on the bleeding edge. No Wordpress bloat. Just pure, compiled performance.
         </p>
         {/* Falling Tech Stack Effect */}
         <div className="flex flex-wrap gap-1.5 sm:gap-2 md:gap-3 group/stack relative min-h-[80px] sm:min-h-[100px] md:min-h-[120px] lg:min-h-[140px] items-start">
           {['Next.js 14', 'React', 'Three.js', 'GSAP', 'R3F', 'Lenis', 'Zustand', 'TypeScript', 'Vercel', 'WebGL'].map((tech, i) => (
             <span 
                key={tech}
                onMouseEnter={() => handleTechHover(tech)}
                onClick={() => handleTechClick(tech)}
                className={`bg-white px-2.5 sm:px-3 md:px-4 lg:px-5 py-1 sm:py-1.5 md:py-2 rounded-full font-bold text-[10px] sm:text-xs md:text-sm text-eddie-dark border border-blue-100 shadow-sm cursor-pointer touch-manipulation whitespace-nowrap ${
                  fallenTech.has(tech) ? 'animate-[gravity_0.6s_ease-in_forwards] opacity-0 pointer-events-none' : 'hover:scale-105 transition-transform duration-300'
                }`}
             >
               {tech}
             </span>
           ))}
         </div>
      </div>
    </div>
  );
};

