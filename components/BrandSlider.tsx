'use client'

import React, { useRef } from 'react';
import { ArrowRightIcon } from './Icons';

export const BrandSlider: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 320; // Card width + gap
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="w-full mb-24 relative">
      {/* Navigation Arrows - Mobile Only */}
      <div className="md:hidden absolute top-1/2 -translate-y-1/2 left-2 z-20">
        <button
          onClick={() => scroll('left')}
          className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm shadow-lg border border-gray-200 flex items-center justify-center hover:bg-white transition-colors"
          aria-label="Scroll left"
        >
          <svg className="w-5 h-5 text-eddie-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      </div>
      <div className="md:hidden absolute top-1/2 -translate-y-1/2 right-2 z-20">
        <button
          onClick={() => scroll('right')}
          className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm shadow-lg border border-gray-200 flex items-center justify-center hover:bg-white transition-colors"
          aria-label="Scroll right"
        >
          <ArrowRightIcon className="w-5 h-5 text-eddie-dark" />
        </button>
      </div>

      <div 
        ref={scrollContainerRef}
        className="w-full overflow-x-auto no-scrollbar px-4 md:px-0 snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <div className="flex gap-6 min-w-max pb-8">
            {/* Card 1 */}
            <div className="w-[calc(66.666vw-2rem)] sm:w-[280px] md:w-[400px] h-[300px] bg-eddie-dark rounded-[2rem] p-8 flex flex-col justify-between text-white relative overflow-hidden group snap-start flex-shrink-0">
               <div className="absolute top-0 right-0 w-32 h-32 bg-eddie-purple rounded-full blur-[60px] opacity-20"></div>
               <span className="font-bold text-sm uppercase tracking-wider opacity-60">Mockups</span>
               <div className="flex-1 flex items-center justify-center">
                   <div className="w-32 h-48 bg-white/10 rounded-xl border border-white/10 rotate-6 group-hover:rotate-12 transition-transform duration-500 backdrop-blur-sm"></div>
                   <div className="w-32 h-48 bg-white/10 rounded-xl border border-white/10 -ml-16 -rotate-6 group-hover:-rotate-12 transition-transform duration-500 backdrop-blur-sm z-10"></div>
               </div>
               <div className="flex justify-between items-end">
                  <span className="font-bold text-xl">Real World</span>
                  <ArrowRightIcon className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
               </div>
            </div>

            {/* Card 2 */}
            <div className="w-[calc(66.666vw-2rem)] sm:w-[280px] md:w-[400px] h-[300px] bg-white border border-gray-200 rounded-[2rem] p-8 flex flex-col justify-between relative overflow-hidden group snap-start flex-shrink-0">
               <span className="font-bold text-sm uppercase tracking-wider text-gray-400">Guidelines</span>
               <div className="flex-1 flex flex-col gap-2 justify-center">
                  <div className="h-4 bg-gray-100 rounded w-3/4 group-hover:bg-gray-200 transition-colors"></div>
                  <div className="h-4 bg-gray-100 rounded w-1/2 group-hover:bg-gray-200 transition-colors"></div>
                  <div className="h-4 bg-gray-100 rounded w-5/6 group-hover:bg-gray-200 transition-colors"></div>
               </div>
               <div className="flex justify-between items-end">
                  <span className="font-bold text-xl text-eddie-dark">Design System</span>
                   <div className="w-8 h-8 rounded-full bg-eddie-dark text-white flex items-center justify-center">
                       <span className="text-[10px] font-bold">Aa</span>
                   </div>
               </div>
            </div>

             {/* Card 3 */}
             <div className="w-[calc(66.666vw-2rem)] sm:w-[280px] md:w-[400px] h-[300px] bg-eddie-pink rounded-[2rem] p-8 flex flex-col justify-between relative overflow-hidden group snap-start flex-shrink-0">
               <span className="font-bold text-sm uppercase tracking-wider opacity-60">Palette</span>
               <div className="flex-1 flex items-center justify-center gap-2">
                   <div className="w-16 h-16 rounded-full bg-eddie-dark shadow-sm group-hover:scale-110 transition-transform"></div>
                   <div className="w-16 h-16 rounded-full bg-eddie-purple shadow-sm group-hover:scale-110 transition-transform delay-75"></div>
                   <div className="w-16 h-16 rounded-full bg-white shadow-sm group-hover:scale-110 transition-transform delay-100"></div>
               </div>
               <div className="flex justify-between items-end">
                  <span className="font-bold text-xl text-eddie-dark">Color Story</span>
               </div>
            </div>

             {/* Card 4 */}
             <div className="w-[calc(66.666vw-2rem)] sm:w-[280px] md:w-[400px] h-[300px] bg-eddie-mint rounded-[2rem] p-8 flex flex-col justify-between relative overflow-hidden group snap-start flex-shrink-0">
               <span className="font-bold text-sm uppercase tracking-wider opacity-60">Social</span>
               <div className="flex-1 flex items-center justify-center">
                   <div className="grid grid-cols-2 gap-2 w-32">
                       <div className="aspect-square bg-white/50 rounded-lg"></div>
                       <div className="aspect-square bg-white/50 rounded-lg"></div>
                       <div className="aspect-square bg-white/50 rounded-lg"></div>
                       <div className="aspect-square bg-white/50 rounded-lg"></div>
                   </div>
               </div>
               <div className="flex justify-between items-end">
                  <span className="font-bold text-xl text-eddie-dark">Assets</span>
               </div>
            </div>

        </div>
      </div>
    </div>
  );
};

