import React from 'react';
import { PlayIcon } from './Icons';

export const VideoShowcase: React.FC = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 mt-12 mb-24 animate-slide-up relative" style={{ animationDelay: '0.2s' }}>

      {/* Title/Header for the section */}
      <div className="mb-12 text-center">
        <span className="text-eddie-purple font-bold tracking-wider uppercase text-sm">Showreel</span>
        <h2 className="text-4xl md:text-6xl font-bold mt-4 mb-6">Visual Storytelling</h2>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto">
          A showcase of our philosophy, process, and the obsession behind every pixel.
        </p>
      </div>

      <div className="relative w-full aspect-[4/3] md:aspect-[21/9] bg-eddie-dark rounded-[2.5rem] overflow-hidden group cursor-pointer shadow-2xl transition-all duration-500 hover:scale-[1.01] hover:shadow-3xl border border-gray-100">
        
        {/* Placeholder Video Background / Thumbnail with Gradient Mesh */}
        <div className="absolute inset-0 bg-gradient-to-br from-eddie-dark via-[#1a1a1a] to-eddie-dark">
           {/* Animated Blobs */}
           <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[80%] bg-eddie-purple/40 rounded-full blur-[120px] animate-float opacity-70"></div>
           <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[80%] bg-eddie-lime/30 rounded-full blur-[120px] animate-float opacity-70" style={{ animationDelay: '2s' }}></div>
           <div className="absolute top-[30%] left-[40%] w-[40%] h-[40%] bg-eddie-blue/25 rounded-full blur-[100px] animate-pulse opacity-50"></div>
        </div>
        
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500"></div>

        {/* Central Play Button */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-30 -translate-y-8">
          <div className="relative group/play">
             <div className="relative w-20 h-20 md:w-32 md:h-32 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center md:group-hover:scale-110 md:group-hover:bg-white/30 transition-all duration-300 shadow-2xl">
                <PlayIcon className="w-8 h-8 md:w-12 md:h-12 text-white fill-current ml-1 md:ml-2" />
             </div>
             {/* Glow effect on hover */}
             <div className="absolute inset-0 bg-white/20 rounded-full blur-xl opacity-0 md:group-hover/play:opacity-100 transition-opacity duration-300 -z-10"></div>
          </div>
        </div>

        {/* Top Bar UI - REC Removed */}
        

        {/* Bottom Bar UI */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 z-20 bg-gradient-to-t from-black/60 via-black/20 to-transparent">
           <div className="flex flex-col md:flex-row justify-between items-end gap-6">
              {/* Mobile: Static. Desktop: Slide up. */}
              <div className="transform translate-y-0 md:translate-y-4 md:group-hover:translate-y-0 transition-transform duration-500 w-full md:w-auto">
                <h3 className="text-white text-3xl md:text-5xl font-bold tracking-tighter mb-2 drop-shadow-lg">The Finesse Way</h3>
                <p className="text-white/80 font-medium text-sm md:text-base max-w-md line-clamp-2 md:line-clamp-none drop-shadow-md">
                   Where art meets engineering. Every pixel, every interaction, every moment crafted with obsession.
                </p>
              </div>

              {/* Progress Bar */}
              <div className="w-full md:w-64 hidden md:block">
                 <div className="flex justify-between text-xs text-white/70 font-mono mb-2">
                    <span>00:00</span>
                    <span>02:14</span>
                 </div>
                 <div className="w-full h-1.5 bg-white/20 rounded-full overflow-hidden backdrop-blur-sm">
                    <div className="w-0 h-full bg-gradient-to-r from-eddie-purple to-eddie-lime"></div>
                 </div>
              </div>
           </div>
        </div>

      </div>
    </div>
  );
};
