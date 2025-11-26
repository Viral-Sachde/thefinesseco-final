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
             
             {/* Card 1: Client Success - Bottom Left corner */}
             <div 
               className="absolute top-[10%] left-[5%] md:bottom-[15%] md:left-[8%] md:top-auto w-max max-w-[200px] bg-white rounded-2xl p-3.5 shadow-2xl border border-gray-100 transform -rotate-2 md:-rotate-3 scale-90 md:scale-[0.9] origin-center z-[1] animate-float hover:shadow-3xl transition-shadow duration-300 flex-shrink-0" 
               style={{ animationDelay: '1s' }}
             >
                <div className="flex items-center gap-3">
                   <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center text-white shrink-0 shadow-lg">
                      <RocketIcon className="w-6 h-6" />
                   </div>
                   <div className="flex-1 min-w-0">
                      <p className="text-[9px] font-bold text-gray-500 uppercase leading-none mb-1 tracking-wider">Client Win</p>
                      <p className="font-bold text-eddie-dark text-sm leading-tight mb-1">New Project</p>
                      <p className="text-green-600 font-bold text-base leading-none">TechFlow</p>
                   </div>
                </div>
             </div>

             {/* Card 2: Short Testimonial - Bottom Right corner */}
             <div 
               className="absolute top-[45%] right-[5%] md:bottom-[15%] md:right-[8%] md:top-auto w-max max-w-[220px] bg-white rounded-2xl p-4 shadow-2xl border border-gray-100 transform rotate-3 md:rotate-4 scale-90 md:scale-[0.9] origin-center z-[2] animate-float hover:shadow-3xl transition-shadow duration-300 flex-shrink-0" 
               style={{ animationDelay: '2s' }}
             >
                <div className="flex items-start gap-3">
                   <div className="w-10 h-10 bg-gradient-to-br from-eddie-purple to-purple-600 rounded-full flex items-center justify-center shrink-0 shadow-md">
                      <span className="font-bold text-sm text-white">@</span>
                   </div>
                   <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2">
                         <span className="font-bold text-xs text-eddie-dark">@techfounder</span>
                         <span className="text-[10px] text-gray-400">2h</span>
                      </div>
                      <p className="font-bold text-eddie-dark text-sm leading-tight">W work team @finesse 🔥</p>
                      <div className="flex items-center gap-3 mt-2 text-gray-400">
                         <div className="flex items-center gap-1">
                            <HeartIcon className="w-3.5 h-3.5 text-red-500" />
                            <span className="text-[10px] font-bold">1.2k</span>
                         </div>
                      </div>
                   </div>
                </div>
             </div>

             {/* Card 3: Long Testimonial (Focal Point) - Center Top */}
             <div 
               className="absolute top-[25%] md:top-[12%] left-1/2 -translate-x-1/2 w-96 bg-white rounded-3xl p-5 shadow-2xl border border-gray-100 transform scale-100 md:scale-100 origin-center z-[3] md:left-[50%] md:-translate-x-1/2 group-hover:-translate-y-4 transition-transform duration-500 animate-float hover:shadow-3xl flex-shrink-0" 
               style={{ animationDelay: '0s' }}
             >
                <div className="flex justify-between items-start mb-3">
                   <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center shadow-md">
                        <span className="font-bold text-sm text-white">SJ</span>
                      </div>
                      <div>
                         <div className="flex items-center gap-2">
                            <span className="font-bold text-base text-eddie-dark">Sarah Jenkins</span>
                            <span className="text-[10px] text-gray-400">@sarahjenkins</span>
                         </div>
                         <span className="text-xs text-gray-500 font-medium">CEO, TechFlow Inc.</span>
                      </div>
                   </div>
                   <span className="text-[10px] text-gray-400">5h</span>
                </div>
                <p className="text-sm font-medium text-gray-700 mb-3 leading-relaxed">
                   Sales increased by <span className="text-blue-600 font-bold">200%</span> immediately after the design launch. Finesse is magic. 🚀
                </p>
                <div className="flex items-center gap-6 text-gray-400 pt-3 border-t border-gray-100">
                   <div className="flex items-center gap-2 hover:text-red-500 transition-colors cursor-pointer">
                      <HeartIcon className="w-4 h-4" />
                      <span className="text-xs font-bold">2.4k</span>
                   </div>
                   <div className="flex items-center gap-2 hover:text-blue-500 transition-colors cursor-pointer">
                      <span className="text-xs font-bold">Reply</span>
                   </div>
                   <div className="flex items-center gap-2 hover:text-green-500 transition-colors cursor-pointer">
                      <span className="text-xs font-bold">Share</span>
                   </div>
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
