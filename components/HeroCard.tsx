import React from 'react';
import { MouseIcon } from './Icons';

interface HeroCardProps {
  onClick?: () => void;
}

export const HeroCard: React.FC<HeroCardProps> = ({ onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="w-full max-w-6xl mx-auto px-4 mt-4 cursor-pointer animate-slide-up"
    >
      <div className="relative w-full bg-eddie-purple-light rounded-[2.5rem] overflow-hidden min-h-[450px] md:min-h-[550px] group transition-transform hover:scale-[1.01] duration-500 shadow-sm hover:shadow-xl">
        
        {/* Background Gradient/3D Effect Simulation */}
        <div className="absolute inset-0 bg-gradient-to-br from-eddie-purple-light via-[#d5d2f5] to-[#c4bdf0]"></div>
        
        {/* Top UI Elements simulating interface */}
        <div className="absolute top-6 left-6 md:top-8 md:left-8 z-10 flex gap-2">
           <div className="bg-white/40 backdrop-blur-md border border-white/30 text-eddie-dark px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide flex items-center gap-2">
             <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
             Accepting New Clients
           </div>
        </div>

        {/* 3D Elements Placeholder (CSS Art) */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {/* Abstract 3D Shapes */}
          <div className="relative w-full h-full">
            {/* Ground Plane */}
            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-white/20 skew-y-3 transform origin-bottom-right"></div>
            
            {/* Main Element (Abstract Creative Block) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-40 md:w-[28rem] md:h-64 bg-eddie-purple rounded-[2rem] shadow-2xl transform group-hover:-translate-y-4 transition-transform duration-700 ease-out flex items-center justify-center overflow-hidden border border-white/20">
               {/* Inner "Screen" */}
               <div className="w-[90%] h-[85%] bg-eddie-purple-light/50 rounded-2xl flex flex-col items-center justify-center relative overflow-hidden">
                  {/* Decorative lines */}
                  <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white to-transparent"></div>
                  <span className="text-5xl md:text-7xl font-serif italic text-white mix-blend-overlay z-10">Excellence</span>
               </div>
               <div className="absolute -bottom-12 left-8 w-full h-12 bg-black/10 blur-2xl rounded-full transform scale-x-90"></div>
            </div>

            {/* Floating Elements */}
            <div className="absolute top-[25%] left-[15%] w-20 h-20 bg-eddie-lime rounded-full transform shadow-lg animate-float flex items-center justify-center border-4 border-white/20" style={{ animationDelay: '0s' }}>
                <span className="text-3xl">💎</span>
            </div>
            <div className="absolute bottom-[30%] right-[15%] w-24 h-24 bg-eddie-blue rounded-[2rem] transform rotate-12 shadow-lg animate-float flex items-center justify-center border-4 border-white/20" style={{ animationDelay: '1s' }}>
                 <div className="w-10 h-10 bg-white/30 rounded-xl backdrop-blur-sm"></div>
            </div>
          </div>
        </div>

        {/* Content Overlay */}
        <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full max-w-3xl z-20">
          <div className="flex items-center gap-3 mb-4">
             <div className="bg-eddie-dark/10 p-2 rounded-lg backdrop-blur-sm">
                <MouseIcon className="w-5 h-5 text-eddie-dark" />
             </div>
             <span className="font-bold text-eddie-dark/60 text-sm tracking-wide">SCROLL TO DISCOVER</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-eddie-dark leading-tight tracking-tight mb-2">
            Digital Excellence for Brands<br/>That Refuse to Blend In.
          </h2>
        </div>

      </div>
    </div>
  );
};