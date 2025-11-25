import React from 'react';
import { MouseIcon, HeartIcon, BellIcon, StarIcon, ArrowUpRightIcon } from './Icons';

interface HeroCardProps {
  onClick?: () => void;
}

export const HeroCard: React.FC<HeroCardProps> = ({ onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="w-full max-w-6xl mx-auto px-4 mt-4 cursor-pointer animate-slide-up"
    >
      <div className="relative w-full bg-eddie-blue rounded-[2.5rem] overflow-hidden min-h-[500px] md:min-h-[600px] group transition-transform hover:scale-[1.01] duration-500 shadow-sm hover:shadow-xl">
        
        {/* Background Gradients */}
        <div className="absolute inset-0 bg-gradient-to-tr from-eddie-blue via-[#C6EAFF] to-eddie-blue opacity-80"></div>
        <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-white/40 blur-[100px] rounded-full"></div>
        
        {/* Top UI Elements simulating interface */}
        <div className="absolute top-6 left-6 md:top-8 md:left-8 z-10 flex gap-2">
           <div className="bg-white/90 backdrop-blur-md text-eddie-dark px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wide flex items-center gap-2 shadow-sm border border-black/5">
             <div className="w-2 h-2 bg-black rounded-full animate-pulse"></div>
             High Demand
           </div>
        </div>

        {/* Central Visual: Floating "Social Stack" */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
           <div className="relative w-full h-full max-w-md mx-auto">
             
             {/* Card 1: New Sale (Bottom) */}
             <div className="absolute top-[40%] left-[10%] md:left-[15%] w-64 bg-white rounded-2xl p-4 shadow-xl transform -rotate-6 animate-float" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-3">
                   <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                      <span className="font-bold text-lg">$</span>
                   </div>
                   <div>
                      <p className="text-xs font-bold text-gray-400 uppercase">New Sale</p>
                      <p className="font-bold text-eddie-dark">Order #2931</p>
                   </div>
                   <div className="ml-auto text-green-500 font-bold text-sm">+$420</div>
                </div>
             </div>

             {/* Card 2: New Follower (Middle) */}
             <div className="absolute top-[30%] right-[5%] md:right-[15%] w-64 bg-white rounded-2xl p-4 shadow-xl transform rotate-3 animate-float" style={{ animationDelay: '2s' }}>
                <div className="flex items-center gap-3">
                   <div className="w-10 h-10 bg-eddie-purple rounded-full flex items-center justify-center text-white">
                      <BellIcon className="w-5 h-5" />
                   </div>
                   <div>
                      <p className="text-xs font-bold text-gray-400 uppercase">New Follower</p>
                      <p className="font-bold text-eddie-dark">@design_god</p>
                   </div>
                   <button className="ml-auto bg-gray-100 text-xs font-bold px-2 py-1 rounded-md">View</button>
                </div>
             </div>

             {/* Card 3: Mention (Top Center - Focal Point) */}
             <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-72 bg-white rounded-3xl p-5 shadow-2xl transform group-hover:-translate-y-4 transition-transform duration-500 animate-float" style={{ animationDelay: '0s' }}>
                <div className="flex justify-between items-start mb-3">
                   <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                      <span className="font-bold text-sm">Sarah Jenkins</span>
                   </div>
                   <span className="text-xs text-gray-400">2m ago</span>
                </div>
                <p className="text-sm font-medium text-gray-600 mb-3">
                   Omg, have you seen this branding? It's actually insane. <span className="text-blue-500">@finesse</span>
                </p>
                <div className="flex gap-4 text-gray-400">
                   <div className="flex items-center gap-1"><HeartIcon className="w-4 h-4 text-red-500" /><span className="text-xs font-bold text-eddie-dark">4.2k</span></div>
                   <div className="flex items-center gap-1"><span className="text-xs font-bold">Reply</span></div>
                </div>
             </div>

           </div>
        </div>

        {/* Content Overlay */}
        <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full max-w-4xl z-20">
          <div className="flex items-center gap-3 mb-4">
             <div className="bg-black/10 p-2 rounded-lg backdrop-blur-sm">
                <MouseIcon className="w-5 h-5 text-eddie-dark" />
             </div>
             <span className="font-bold text-eddie-dark/60 text-sm tracking-wide">SCROLL TO DISCOVER</span>
          </div>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-eddie-dark leading-[0.9] tracking-tighter mb-4">
            We turn clicks<br/>into <span className="italic font-serif">cults.</span>
          </h2>
        </div>

      </div>
    </div>
  );
};