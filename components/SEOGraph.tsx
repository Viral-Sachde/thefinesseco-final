'use client'

import React, { useEffect, useState } from 'react';
import { GraphIcon } from './Icons';

export const SEOGraph: React.FC = () => {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    // Trigger animation on mount
    setIsAnimated(true);
  }, []);

  return (
    <div className="bg-eddie-dark text-white rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[2.5rem] p-6 sm:p-8 md:p-12 relative overflow-hidden group min-h-[300px] sm:min-h-[350px] md:min-h-[400px] flex flex-col justify-between">
       <div className="absolute top-0 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-eddie-lime/10 blur-[80px] sm:blur-[100px] rounded-full"></div>
       
       <div className="relative z-10 flex justify-between items-start mb-6 sm:mb-8">
         <div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2">The Traffic Curve</h3>
            <p className="text-gray-400 text-xs sm:text-sm md:text-base font-medium">Organic Growth vs Paid Ad Spend</p>
         </div>
         <div className="bg-white/10 p-2 sm:p-3 rounded-lg sm:rounded-xl backdrop-blur-md border border-white/10 shrink-0">
            <GraphIcon className="w-5 h-5 sm:w-6 sm:h-6 text-eddie-lime" />
         </div>
       </div>

       {/* Chart Visual */}
       <div className="relative w-full h-32 sm:h-40 md:h-48 mt-auto overflow-visible">
          {/* Grid Lines */}
          <div className="absolute inset-0 flex flex-col justify-between">
             {[0, 1, 2, 3].map((i) => (
               <div key={i} className="border-b border-gray-800 w-full h-0"></div>
             ))}
          </div>
          
          {/* SVG Line with Animation - Continuous Green Line from left border to right border */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none" style={{ overflow: 'visible' }}>
             {/* Continuous Animated Stroke - Starts at left edge (x=0) and ends at right edge (x=100) */}
             <path 
               d="M 0,90 Q 20,80 40,60 Q 60,40 80,25 Q 90,15 100,8" 
               fill="none" 
               stroke="#D4F23E" 
               strokeWidth="2.5" 
               strokeLinecap="round"
               strokeLinejoin="round"
               className={isAnimated ? 'animate-[drawStroke_2s_ease-out_forwards]' : ''}
               style={{
                 strokeDasharray: '250',
                 strokeDashoffset: isAnimated ? '0' : '250',
               }}
             />
          </svg>
       </div>

       {/* X Axis */}
       <div className="flex justify-between text-[10px] sm:text-xs text-gray-500 font-bold uppercase mt-3 sm:mt-4 gap-2">
          <span>Month 1</span>
          <span>Month 3</span>
          <span>Month 6</span>
          <span>Year 1</span>
       </div>
    </div>
  );
};

