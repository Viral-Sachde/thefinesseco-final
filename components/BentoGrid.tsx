import React from 'react';
import { ArrowUpRightIcon, StarIcon, RocketIcon, GraphIcon, BoltIcon, HandshakeIcon, SparkleIcon } from './Icons';

interface BentoGridProps {
  onSelect?: (text: string) => void;
}

export const BentoGrid: React.FC<BentoGridProps> = ({ onSelect }) => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 mt-6 animate-slide-up" style={{ animationDelay: '0.3s' }}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        
        {/* 1. Large Card (Revenue) - Lime [Col 1, Row 1-2] */}
        <div className="group cursor-default lg:col-span-1 lg:row-span-2 bg-eddie-lime rounded-[2.5rem] p-8 flex flex-col justify-between min-h-[320px] transition-all duration-500 hover:scale-[1.02] hover:shadow-xl relative overflow-hidden">
          <div className="absolute top-8 right-8 w-10 h-10 flex items-center justify-center">
             <GraphIcon className="w-6 h-6 text-eddie-dark/40" />
          </div>
          <div className="self-start">
            <span className="text-xs font-bold text-eddie-dark uppercase tracking-wide opacity-80">Digital Value</span>
          </div>
          <div>
            <h3 className="text-5xl font-bold mb-4 tracking-tighter group-hover:translate-x-2 transition-transform duration-300 text-eddie-dark">$120M+</h3>
            <p className="text-lg font-bold leading-tight text-eddie-dark/80">
              Revenue Unlocked.
            </p>
          </div>
        </div>

        {/* 2. Top Middle Left (Award) - White [Col 2, Row 1] */}
        <div className="group cursor-default lg:col-span-1 bg-white border border-gray-200 rounded-[2.5rem] p-6 flex flex-col items-center justify-center text-center gap-4 transition-all duration-500 hover:scale-[1.03] hover:shadow-xl hover:-rotate-1 relative overflow-hidden">
           <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center shadow-sm mb-2 group-hover:scale-110 transition-transform">
             <StarIcon className="text-eddie-dark w-8 h-8" />
           </div>
           <div>
             <h4 className="font-bold text-2xl tracking-tight text-eddie-dark">World Class</h4>
             <p className="text-sm font-bold text-gray-400">Awwwards x12</p>
           </div>
        </div>

        {/* 3. Top Middle Right (Growth) - Pink [Col 3, Row 1] */}
        <div className="group cursor-default lg:col-span-1 bg-eddie-pink rounded-[2.5rem] p-6 flex flex-col justify-between transition-all duration-500 hover:scale-[1.02] hover:shadow-xl border border-transparent relative">
          <div className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center">
             <RocketIcon className="w-5 h-5 text-eddie-dark/40" />
          </div>
          <div className="flex justify-between items-start mb-6">
             <div className="text-eddie-dark text-xs font-bold uppercase opacity-80">Growth</div>
          </div>
          <div>
            <h3 className="text-3xl font-bold tracking-tighter mb-1 text-eddie-dark">350%</h3>
            <p className="text-eddie-dark/70 font-bold text-sm">YoY Traffic.</p>
          </div>
        </div>

        {/* 4. Top Right (New Card: Speed) - Blue [Col 4, Row 1] */}
        <div className="group cursor-default lg:col-span-1 bg-eddie-blue rounded-[2.5rem] p-6 flex flex-col justify-between transition-all duration-500 hover:scale-[1.02] hover:shadow-xl border border-transparent relative">
          <div className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center">
             <BoltIcon className="w-5 h-5 text-eddie-dark/40" />
          </div>
          <div className="flex justify-between items-start mb-6">
             <div className="text-eddie-dark text-xs font-bold uppercase opacity-80">Speed</div>
          </div>
          <div>
            <h3 className="text-3xl font-bold tracking-tighter mb-1 text-eddie-dark">2 Wks</h3>
            <p className="text-eddie-dark/70 font-bold text-sm">Avg Sprint.</p>
          </div>
        </div>

        {/* 5. Bottom Middle (Retention) - Purple [Col 2, Row 2] */}
        <div className="group cursor-default lg:col-span-1 lg:row-span-1 bg-eddie-purple text-white rounded-[2.5rem] p-8 flex flex-col justify-end transition-all duration-500 hover:scale-[1.03] hover:shadow-xl hover:rotate-1 relative">
           <div className="absolute top-8 right-8 w-10 h-10 flex items-center justify-center">
             <HandshakeIcon className="w-6 h-6 text-white/40" />
           </div>
           <p className="text-xs font-bold opacity-80 mb-2 uppercase tracking-wide">Partnerships</p>
           <h3 className="text-5xl font-bold">5yr+</h3>
           <p className="text-sm font-bold opacity-70">Retention.</p>
        </div>

        {/* 6. Bottom Right (CTA) - Grey [Col 3-4, Row 2] */}
        <div className="group cursor-pointer lg:col-span-2 bg-[#EAEAEA] rounded-[2.5rem] p-8 flex flex-row items-center justify-between transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:bg-eddie-dark hover:text-white relative">
          <div className="max-w-[70%]">
             <h3 className="text-3xl font-bold mb-2 group-hover:translate-x-2 transition-transform">Unfair Advantage</h3>
             <p className="text-sm font-bold opacity-50 group-hover:opacity-90">Book Strategy Session.</p>
          </div>
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center group-hover:bg-eddie-lime transition-colors duration-300">
             <ArrowUpRightIcon className="w-6 h-6 text-eddie-dark group-hover:rotate-45 transition-transform duration-300" />
          </div>
        </div>

      </div>
    </div>
  );
};