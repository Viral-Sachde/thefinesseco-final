import React from 'react';
import { GlobeIcon, MouseIcon, RocketIcon } from './Icons';

export const HeadlessVisual: React.FC = () => {
  return (
    <div className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] bg-white rounded-[1.5rem] sm:rounded-[2rem] border border-gray-100 p-4 sm:p-6 md:p-8 flex items-center justify-center overflow-hidden">
      {/* Central Hub */}
      <div className="relative z-20 bg-eddie-dark text-white w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full flex flex-col items-center justify-center shadow-xl">
        <span className="font-bold text-[10px] sm:text-xs md:text-sm uppercase tracking-wider mb-0.5 sm:mb-1 text-gray-400">Core</span>
        <span className="font-bold text-base sm:text-lg md:text-xl">CMS</span>
      </div>

      {/* Orbiting Satellites */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
         {/* Orbit Circle */}
         <div className="w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[360px] md:h-[360px] border border-dashed border-gray-200 sm:border-gray-300 rounded-full absolute animate-[spin_20s_linear_infinite]"></div>
         
         {/* Orbit Container that spins */}
         <div className="absolute w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[360px] md:h-[360px] animate-[spin_20s_linear_infinite]">
            
            {/* Node 1: Web (Top) */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1.5 sm:gap-2 animate-[spin_20s_linear_infinite_reverse]">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-eddie-blue rounded-lg sm:rounded-xl flex items-center justify-center shadow-md border-2 border-white">
                  <GlobeIcon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-eddie-dark" />
                </div>
                <span className="text-[10px] sm:text-xs font-bold text-gray-500 bg-white px-1.5 sm:px-2 py-0.5 rounded-full shadow-sm whitespace-nowrap">Web</span>
            </div>

            {/* Node 2: Mobile (Bottom Right - 120 degrees) */}
            <div className="absolute top-[86.6%] left-[75%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1.5 sm:gap-2 animate-[spin_20s_linear_infinite_reverse]">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-eddie-purple rounded-lg sm:rounded-xl flex items-center justify-center shadow-md border-2 border-white">
                  <MouseIcon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                </div>
                <span className="text-[10px] sm:text-xs font-bold text-gray-500 bg-white px-1.5 sm:px-2 py-0.5 rounded-full shadow-sm whitespace-nowrap">iOS/Android</span>
            </div>

             {/* Node 3: Kiosk (Bottom Left - 240 degrees) */}
             <div className="absolute top-[86.6%] left-[25%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1.5 sm:gap-2 animate-[spin_20s_linear_infinite_reverse]">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-eddie-lime rounded-lg sm:rounded-xl flex items-center justify-center shadow-md border-2 border-white">
                  <RocketIcon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-eddie-dark" />
                </div>
                <span className="text-[10px] sm:text-xs font-bold text-gray-500 bg-white px-1.5 sm:px-2 py-0.5 rounded-full shadow-sm whitespace-nowrap">Kiosk</span>
            </div>

         </div>
      </div>
      
      {/* Static Decoration */}
      <div className="absolute bottom-2 sm:bottom-3 md:bottom-4 right-2 sm:right-3 md:right-4 bg-gray-50 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[9px] sm:text-[10px] font-bold text-gray-400">
        Live API
      </div>
    </div>
  );
};

