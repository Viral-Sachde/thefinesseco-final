import React from 'react';
import { MouseIcon, HeartIcon, BellIcon } from './Icons';

interface HeroCardProps {
  onClick?: () => void;
}

export const HeroCard: React.FC<HeroCardProps> = ({ onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="w-full max-w-7xl mx-auto cursor-pointer animate-slide-up"
    >
      <div className="relative w-full bg-[#0F0F0F] rounded-[2rem] md:rounded-[3rem] overflow-hidden min-h-[550px] md:min-h-[700px] group transition-transform md:hover:scale-[1.01] duration-500 shadow-2xl border border-white/5">
        
        {/* Background Gradients - Deep Dark Theme */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A] via-[#0F0F0F] to-[#050505] opacity-100"></div>
        <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] bg-eddie-purple/20 blur-[120px] rounded-full animate-float"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 blur-[100px] rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        
        {/* Top UI Elements */}
        <div className="absolute top-6 left-6 md:top-10 md:left-10 z-20 flex gap-3">
           <div className="bg-white/10 backdrop-blur-md text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wide flex items-center gap-2 border border-white/10 shadow-lg">
             <div className="w-1.5 h-1.5 bg-eddie-lime rounded-full animate-pulse"></div>
             Growth Engine
           </div>
        </div>

        {/* Central Visual: Floating "Social Stack" */}
        <div className="absolute inset-0 pointer-events-none z-0">
           <div className="relative w-full h-full max-w-3xl mx-auto">
             
             {/* Card 1: New Comment (Short) - Mobile: Top Right, Desktop: Right Side */}
             <div className="absolute top-[16%] right-[24%] md:top-[15%] md:right-[12%] w-auto min-w-[14rem] bg-white/95 backdrop-blur-sm rounded-2xl p-4 px-5 shadow-2xl transform rotate-3 md:rotate-6 scale-[0.8] md:scale-100 origin-top-right z-[2] md:group-hover:-translate-y-4 transition-transform duration-500 animate-float" style={{ animationDelay: '2s' }}>
                <div className="flex items-center gap-4 whitespace-nowrap">
                   <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center shrink-0 border border-gray-100">
                      <span className="font-bold text-sm text-eddie-dark">@</span>
                   </div>
                   <div>
                      <p className="text-[10px] font-bold text-gray-400 uppercase leading-none mb-1.5">New Comment</p>
                      <p className="font-bold text-eddie-dark text-xs leading-none">W work team @finesse</p>
                   </div>
                </div>
             </div>

             {/* Card 2: Long Testimonial (Focal Point) - Mobile: Mid Left, Desktop: Mid Left */}
             <div className="absolute top-[28%] left-[35%] md:top-[27%] md:left-[70%] w-[85%] max-w-[90vw] md:w-96 bg-white rounded-[1.5rem] p-6 shadow-2xl transform scale-[0.85] md:scale-100 -rotate-2 md:-rotate-3 origin-top-left z-[3]
                             md:group-hover:-translate-y-6 transition-transform duration-500 animate-float border border-gray-100" style={{ animationDelay: '0s' }}>
                <div className="flex justify-between items-start mb-4">
                   <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-eddie-purple to-blue-500 rounded-full flex items-center justify-center text-white border-2 border-white shadow-sm">
                        <span className="font-bold text-xs">SJ</span>
                      </div>
                      <div>
                        <span className="font-bold text-sm text-eddie-dark block leading-none">Sarah Jenkins</span>
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-wide">CEO, Lumina</span>
                      </div>
                   </div>
                </div>
                <p className="text-sm font-medium text-gray-600 mb-4 leading-relaxed">
                   Sales increased by <span className="bg-blue-50 text-blue-600 font-bold px-1 rounded">200%</span> immediately after the design launch. Finesse is pure magic. 🪄
                </p>
                <div className="flex gap-4 text-gray-400 border-t border-gray-50 pt-3">
                   <div className="flex items-center gap-1.5"><HeartIcon className="w-4 h-4 text-red-500 fill-current" /><span className="text-xs font-bold text-eddie-dark">842</span></div>
                   <div className="flex items-center gap-1.5"><BellIcon className="w-4 h-4" /><span className="text-xs font-bold">Reply</span></div>
                </div>
             </div>

           </div>
        </div>

        {/* Content Overlay */}
        <div className="absolute bottom-0 left-0 p-6 md:p-12 w-full max-w-5xl z-20 pointer-events-none">
          <div className="flex items-center gap-3 mb-6">
             <div className="bg-white/10 p-2 rounded-lg backdrop-blur-sm border border-white/10 animate-bounce">
                <MouseIcon className="w-5 h-5 text-white" />
             </div>
             <span className="font-bold text-white/60 text-xs tracking-[0.2em] uppercase">Scroll to Discover</span>
          </div>
          <h2 className="text-5xl md:text-7xl lg:text-9xl font-bold text-white leading-[0.85] tracking-tighter drop-shadow-2xl">
            We turn clicks<br/>into <span className="italic font-serif font-black text-eddie-purple">cults.</span>
          </h2>
        </div>

      </div>
    </div>
  );
};
