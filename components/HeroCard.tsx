import React from 'react';
import { MouseIcon, HeartIcon, BellIcon, RocketIcon } from './Icons';

interface HeroCardProps {
  onClick?: () => void;
}

export const HeroCard: React.FC<HeroCardProps> = ({ onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="w-full max-w-6xl mx-auto px-4 mt-4 cursor-pointer animate-slide-up"
    >
      <div className="relative w-full bg-eddie-purple rounded-[2.5rem] overflow-hidden min-h-[600px] md:min-h-[600px] group transition-transform hover:scale-[1.01] duration-500 shadow-sm hover:shadow-xl border border-transparent">
        
        {/* Background Gradients */}
        <div className="absolute inset-0 bg-gradient-to-tr from-eddie-purple via-[#B0A9F8] to-[#9E94F5] opacity-100"></div>
        <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-white/20 blur-[100px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-[#8B80F9]/20 blur-[80px] rounded-full"></div>
        
        {/* Gradient Overlay for Text Readability on Mobile */}
        <div className="absolute inset-0 bg-gradient-to-t from-eddie-purple via-transparent to-transparent md:hidden z-10"></div>
        
        {/* Top UI Elements */}
        <div className="absolute top-6 left-6 md:top-8 md:left-8 z-20 flex gap-2">
           <div className="bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wide flex items-center gap-2 shadow-sm border border-white/20">
             <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
             High Demand
           </div>
        </div>

        {/* Central Visual: Floating "Social Stack" */}
        <div className="absolute inset-0 pointer-events-none z-0">
           <div className="relative w-full h-full max-w-md mx-auto">
             
             {/* Card 1: Funding Raised - Top Left scatter */}
             <div className="absolute top-[8%] left-[50%] -translate-x-1/2 md:translate-x-0 md:top-[40%] md:left-[15%] w-max bg-white rounded-2xl p-3 px-5 shadow-xl transform -rotate-2 md:-rotate-6 scale-90 md:scale-100 origin-center z-[1] animate-float" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-3 whitespace-nowrap">
                   <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 shrink-0">
                      <RocketIcon className="w-5 h-5" />
                   </div>
                   <div>
                      <p className="text-[10px] font-bold text-gray-400 uppercase leading-none mb-1">Funding Secured</p>
                      <p className="font-bold text-eddie-dark text-sm leading-none">Series A</p>
                   </div>
                   <div className="ml-4 text-green-500 font-bold text-sm">$2.4M</div>
                </div>
             </div>

             {/* Card 2: Short Testimonial - Top Right scatter */}
             <div className="absolute top-[20%] left-[50%] -translate-x-1/2 md:translate-x-0 md:top-[30%] md:right-[15%] md:left-auto w-max bg-white rounded-2xl p-3 px-5 shadow-xl transform rotate-3 md:rotate-6 scale-90 md:scale-100 origin-center z-[2] animate-float" style={{ animationDelay: '2s' }}>
                <div className="flex items-center gap-3 whitespace-nowrap">
                   <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center shrink-0">
                      <span className="font-bold text-xs text-eddie-dark">@</span>
                   </div>
                   <div>
                      <p className="text-[10px] font-bold text-gray-400 uppercase leading-none mb-1">New Comment</p>
                      <p className="font-bold text-eddie-dark text-xs leading-none">W work team @finesse</p>
                   </div>
                </div>
             </div>

             {/* Card 3: Long Testimonial (Focal Point) - Center/Bottom */}
             <div className="absolute top-[32%] left-1/2 -translate-x-1/2 w-[85%] md:w-80 bg-white rounded-3xl p-5 shadow-2xl transform scale-100 md:scale-100 origin-center z-[3]
                             md:top-[20%] group-hover:-translate-y-4 transition-transform duration-500 animate-float" style={{ animationDelay: '0s' }}>
                <div className="flex justify-between items-start mb-3">
                   <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                        <span className="font-bold text-xs text-eddie-dark">SJ</span>
                      </div>
                      <span className="font-bold text-sm text-eddie-dark">Sarah Jenkins</span>
                   </div>
                   <span className="text-xs text-gray-400">CEO</span>
                </div>
                <p className="text-sm font-medium text-gray-600 mb-3 leading-relaxed">
                   Sales increased by <span className="text-blue-600 font-bold">200%</span> immediately after the design launch. Finesse is magic.
                </p>
                <div className="flex gap-4 text-gray-400">
                   <div className="flex items-center gap-1"><HeartIcon className="w-4 h-4 text-red-500" /><span className="text-xs font-bold text-eddie-dark">842</span></div>
                   <div className="flex items-center gap-1"><span className="text-xs font-bold">Reply</span></div>
                </div>
             </div>

           </div>
        </div>

        {/* Content Overlay */}
        <div className="absolute bottom-0 left-0 p-6 md:p-12 w-full max-w-4xl z-20">
          <div className="flex items-center gap-3 mb-4">
             <div className="bg-white/20 p-2 rounded-lg backdrop-blur-sm border border-white/20">
                <MouseIcon className="w-5 h-5 text-white" />
             </div>
             <span className="font-bold text-white/90 text-sm tracking-wide">SCROLL TO DISCOVER</span>
          </div>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.9] tracking-tighter mb-4 drop-shadow-sm">
            We turn clicks<br/>into <span className="italic font-serif">cults.</span>
          </h2>
        </div>

      </div>
    </div>
  );
};