import React from 'react';
import { ArrowUpRightIcon, StarIcon } from './Icons';

interface BentoGridProps {
  onSelect?: (text: string) => void;
}

export const BentoGrid: React.FC<BentoGridProps> = ({ onSelect }) => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 mt-6 animate-slide-up" style={{ animationDelay: '0.3s' }}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        
        {/* Large Card (Revenue) - Lime */}
        <div className="group cursor-default lg:col-span-1 lg:row-span-2 bg-eddie-lime rounded-[2.5rem] p-8 flex flex-col justify-between min-h-[320px] transition-all duration-500 hover:scale-[1.02] hover:shadow-xl">
          <div className="bg-white/30 backdrop-blur-sm px-4 py-2 rounded-xl self-start border border-white/20 group-hover:bg-white/50 transition-colors">
            <span className="text-xs font-bold text-eddie-dark uppercase tracking-wide">Digital Value</span>
          </div>
          <div>
            <h3 className="text-5xl font-bold mb-4 tracking-tighter group-hover:translate-x-2 transition-transform duration-300 text-eddie-dark">$120M+</h3>
            <p className="text-lg font-bold leading-tight text-eddie-dark/80">
              Revenue Unlocked.
            </p>
          </div>
        </div>

        {/* Top Middle Card (Award) - White */}
        <div className="group cursor-default lg:col-span-1 bg-white border border-gray-200 rounded-[2.5rem] p-6 flex flex-col items-center justify-center text-center gap-4 transition-all duration-500 hover:scale-[1.03] hover:shadow-xl hover:-rotate-1 relative overflow-hidden">
           <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center shadow-sm mb-2 group-hover:scale-110 transition-transform">
             <StarIcon className="text-eddie-dark w-8 h-8" />
           </div>
           <div>
             <h4 className="font-bold text-2xl tracking-tight text-eddie-dark">World Class</h4>
             <p className="text-sm font-bold text-gray-400">Awwwards x12</p>
           </div>
        </div>

        {/* Top Right Large Card (Growth) - Pink */}
        <div className="group cursor-default lg:col-span-2 bg-eddie-pink rounded-[2.5rem] p-8 flex flex-col justify-between transition-all duration-500 hover:scale-[1.02] hover:shadow-xl border border-transparent">
          <div className="flex justify-between items-start">
             <div className="bg-white/40 text-eddie-dark px-3 py-1 rounded-full text-xs font-bold uppercase">Growth</div>
             <ArrowUpRightIcon className="w-8 h-8 opacity-30 group-hover:opacity-100 transition-all duration-300 group-hover:rotate-45 text-eddie-dark" />
          </div>
          <div className="mt-8">
            <h3 className="text-4xl md:text-5xl font-bold tracking-tighter mb-2 text-eddie-dark">350% Scale</h3>
            <p className="text-eddie-dark/70 font-bold">Year-over-year traffic.</p>
          </div>
        </div>

        {/* Bottom Middle (Retention) - Purple */}
        <div className="group cursor-default lg:col-span-1 lg:row-span-1 bg-eddie-purple text-white rounded-[2.5rem] p-8 flex flex-col justify-end transition-all duration-500 hover:scale-[1.03] hover:shadow-xl hover:rotate-1">
           <p className="text-xs font-bold opacity-80 mb-2 uppercase tracking-wide">Partnerships</p>
           <h3 className="text-5xl font-bold">5yr Retention</h3>
        </div>

        {/* Bottom Right (CTA) - Grey */}
        <div className="group cursor-pointer lg:col-span-2 bg-[#EAEAEA] rounded-[2.5rem] p-8 flex flex-row items-center justify-between transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:bg-eddie-dark hover:text-white">
          <div className="max-w-[70%]">
             <h3 className="text-3xl font-bold mb-2 group-hover:translate-x-2 transition-transform">Unfair Advantage</h3>
             <p className="text-sm font-bold opacity-50 group-hover:opacity-90">Book Strategy.</p>
          </div>
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center group-hover:bg-eddie-lime transition-colors duration-300">
             <ArrowUpRightIcon className="w-6 h-6 text-eddie-dark group-hover:rotate-45 transition-transform duration-300" />
          </div>
        </div>

      </div>
    </div>
  );
};