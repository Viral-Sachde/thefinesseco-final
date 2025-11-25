import React from 'react';
import { ArrowUpRightIcon, RocketIcon, StarIcon } from './Icons';

interface BentoGridProps {
  onSelect?: (text: string) => void;
}

export const BentoGrid: React.FC<BentoGridProps> = ({ onSelect }) => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 mt-6 animate-slide-up" style={{ animationDelay: '0.3s' }}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        
        {/* Large Blue Card (Revenue) */}
        <div className="group cursor-default lg:col-span-1 lg:row-span-2 bg-eddie-blue rounded-[2.5rem] p-8 flex flex-col justify-between min-h-[320px] transition-all duration-500 hover:scale-[1.02] hover:shadow-xl">
          <div className="bg-white/30 backdrop-blur-sm px-4 py-2 rounded-xl self-start border border-white/20 group-hover:bg-white/50 transition-colors">
            <span className="text-xs font-bold text-white uppercase tracking-wide">Client Revenue</span>
          </div>
          <div>
            <h3 className="text-6xl font-bold mb-4 tracking-tighter group-hover:translate-x-2 transition-transform duration-300 text-white">$50M+</h3>
            <p className="text-lg font-medium leading-tight text-white/90">
              Generated for our partners through strategic digital transformation.
            </p>
          </div>
        </div>

        {/* Top Middle Card (Award) */}
        <div className="group cursor-default lg:col-span-1 bg-eddie-lime rounded-[2.5rem] p-6 flex flex-col items-center justify-center text-center gap-4 transition-all duration-500 hover:scale-[1.03] hover:shadow-xl hover:-rotate-1 relative overflow-hidden">
           <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-2 group-hover:scale-110 transition-transform">
             <StarIcon className="text-eddie-dark w-8 h-8" />
           </div>
           <div>
             <h4 className="font-bold text-2xl tracking-tight">Awwwards</h4>
             <p className="text-sm font-medium opacity-70">Site of the Day x4</p>
           </div>
        </div>

        {/* Top Right Large Card (Impact) */}
        <div className="group cursor-default lg:col-span-2 bg-eddie-gray rounded-[2.5rem] p-8 flex flex-col justify-between transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:bg-white">
          <div className="flex justify-between items-start">
             <div className="bg-eddie-dark text-white px-3 py-1 rounded-full text-xs font-bold uppercase">Impact</div>
             <ArrowUpRightIcon className="w-8 h-8 opacity-30 group-hover:opacity-100 transition-all duration-300 group-hover:rotate-45" />
          </div>
          <div className="mt-8">
            <h3 className="text-4xl md:text-5xl font-bold tracking-tighter mb-2">400% avg. ROI</h3>
            <p className="text-gray-500 font-medium">Within the first 6 months of launch.</p>
          </div>
        </div>

        {/* Bottom Middle (Retention) */}
        <div className="group cursor-default lg:col-span-1 lg:row-span-1 bg-eddie-purple text-eddie-dark rounded-[2.5rem] p-8 flex flex-col justify-end transition-all duration-500 hover:scale-[1.03] hover:shadow-xl hover:rotate-1">
           <p className="text-xs font-bold opacity-60 mb-2 uppercase tracking-wide text-white">Client Retention</p>
           <h3 className="text-5xl font-bold text-white">98%</h3>
        </div>

        {/* Bottom Right (CTA) */}
        <div className="group cursor-pointer lg:col-span-2 bg-[#DCDCDC] rounded-[2.5rem] p-8 flex flex-row items-center justify-between transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:bg-eddie-dark hover:text-white">
          <div className="max-w-[70%]">
             <h3 className="text-3xl font-bold mb-2 group-hover:translate-x-2 transition-transform">Ready to scale?</h3>
             <p className="text-sm font-medium opacity-70 group-hover:opacity-90">Book a free strategy call today.</p>
          </div>
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center group-hover:bg-eddie-lime transition-colors duration-300">
             <ArrowUpRightIcon className="w-6 h-6 text-eddie-dark group-hover:rotate-45 transition-transform duration-300" />
          </div>
        </div>

      </div>
    </div>
  );
};