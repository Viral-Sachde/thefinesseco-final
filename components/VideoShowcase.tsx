import React from 'react';
import { PlayIcon } from './Icons';

export const VideoShowcase: React.FC = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 mt-8 mb-16 animate-slide-up" style={{ animationDelay: '0.2s' }}>
      <div className="relative w-full aspect-square md:aspect-video bg-black rounded-[2.5rem] overflow-hidden group cursor-pointer shadow-2xl ring-4 ring-black/5 hover:ring-eddie-purple/20 transition-all duration-500">
        
        {/* Placeholder Video Background / Thumbnail */}
        <div className="absolute inset-0 bg-gradient-to-br from-eddie-dark via-[#1a1a1a] to-eddie-dark opacity-90"></div>
        
        {/* Abstract shapes in background to simulate video content */}
        <div className="absolute inset-0 opacity-30 group-hover:scale-105 transition-transform duration-700">
           <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-eddie-purple rounded-full blur-[100px] animate-float"></div>
           <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-eddie-lime rounded-full blur-[100px] animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
          <div className="w-20 h-20 md:w-24 md:h-24 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform duration-300 group-hover:bg-white/20 shadow-lg">
             <PlayIcon className="w-8 h-8 md:w-10 md:h-10 text-white fill-current ml-1" />
          </div>
          <span className="mt-4 text-white font-bold tracking-widest text-sm uppercase opacity-70 group-hover:opacity-100 transition-opacity">Watch Showreel</span>
        </div>

        {/* Video UI Elements */}
        <div className="absolute bottom-8 left-8 right-8 flex flex-col md:flex-row justify-between items-start md:items-end z-10 gap-4 md:gap-0">
           <div>
             <h3 className="text-white text-2xl md:text-3xl font-bold">The Finesse Way</h3>
             <p className="text-white/60 font-medium">Agency Reel 2024</p>
           </div>
           <div className="flex items-center gap-2 text-white/80 font-mono text-xs w-full md:w-auto">
             <span>00:00</span>
             <div className="flex-1 md:w-32 h-1 bg-white/20 rounded-full overflow-hidden">
                <div className="w-1/3 h-full bg-eddie-lime"></div>
             </div>
             <span>01:45</span>
           </div>
        </div>

      </div>
    </div>
  );
};