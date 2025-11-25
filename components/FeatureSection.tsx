import React from 'react';

export const FeatureSection: React.FC = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 mt-8 mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
        
        {/* Left Image Section */}
        <div className="w-full lg:w-1/2">
          <div className="relative aspect-square w-full bg-[#F4F4F4] rounded-[2.5rem] overflow-hidden flex items-center justify-center group hover:scale-[1.02] transition-transform duration-500">
            {/* 3D Object Representation */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 perspective-1000">
              <div className="absolute inset-0 bg-eddie-lime rounded-full transform scale-90 shadow-2xl transition-all duration-700 group-hover:scale-100 group-hover:rotate-180 bg-gradient-to-tr from-eddie-lime to-[#eefcb3]">
                 <div className="absolute inset-8 bg-white/30 backdrop-blur-xl rounded-full"></div>
              </div>
              {/* Highlight */}
              <div className="absolute top-10 right-20 w-32 h-32 bg-white/40 blur-2xl rounded-full"></div>
              
              {/* Floating Badge */}
               <div className="absolute bottom-10 -left-4 bg-white px-6 py-3 rounded-xl shadow-lg transform rotate-6 group-hover:rotate-0 transition-transform">
                  <span className="font-bold text-eddie-dark">Pixel Perfect</span>
               </div>
            </div>
          </div>
        </div>

        {/* Right Content Section */}
        <div className="w-full lg:w-1/2 flex flex-col items-start gap-6 lg:pl-4">
          <div className="bg-[#E3F2FD] text-eddie-dark px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
            Strategy
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-eddie-dark leading-[1.1] tracking-tight">
            Refining your<br />
            Brand Identity<br />
            & Presence
          </h2>
          
          <p className="text-lg text-gray-600 font-medium leading-relaxed max-w-md">
            In a crowded digital landscape, standing out is essential. The Finesse Co. blends data-driven strategy with bespoke aesthetics to ensure your brand resonates, engages, and converts across all touchpoints.
          </p>

          <button className="bg-black text-white px-8 py-4 rounded-full font-bold text-sm hover:scale-105 transition-transform duration-200 shadow-lg mt-2">
            Explore Strategy
          </button>
        </div>

      </div>
    </div>
  );
};