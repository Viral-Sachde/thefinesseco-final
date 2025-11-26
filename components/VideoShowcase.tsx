import React from 'react';
import { PlayIcon } from './Icons';

export const VideoShowcase: React.FC = () => {
  return (
    <div className="w-full max-w-[90rem] mx-auto px-4 mt-12 mb-24 animate-slide-up relative" style={{ animationDelay: '0.2s' }}>
      
      {/* Noise Texture Overlay - Now applied to the surrounding area/background effect */}
      <div className="absolute inset-0 -z-10 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>

      {/* Title/Header for the section */}
      <div className="flex flex-col items-center mb-8 md:mb-12">
         <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 rounded-full bg-eddie-lime animate-pulse"></div>
            <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Live Action</span>
         </div>
         <h2 className="text-3xl md:text-5xl font-bold text-center">Visual Storytelling</h2>
      </div>

      <div className="relative w-full aspect-[4/3] md:aspect-[21/9] bg-eddie-dark rounded-[2rem] md:rounded-[3rem] overflow-hidden group cursor-pointer shadow-2xl transition-all duration-700 hover:shadow-eddie-purple/20 border border-white/5">
        
        {/* Placeholder Video Background / Thumbnail with Gradient Mesh */}
        <div className="absolute inset-0 bg-[#0a0a0a]">
           {/* Animated Blobs */}
           <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[80%] bg-eddie-purple/30 rounded-full blur-[120px] animate-float opacity-60"></div>
           <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[80%] bg-eddie-lime/20 rounded-full blur-[120px] animate-float opacity-60" style={{ animationDelay: '2s' }}></div>
           <div className="absolute top-[30%] left-[40%] w-[40%] h-[40%] bg-blue-500/20 rounded-full blur-[100px] animate-pulse opacity-40"></div>
        </div>
        
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500"></div>

        {/* Central Play Button */}
        {/* Added z-30 to ensure it sits ABOVE the bottom text content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-30 -translate-y-8">
          <div className="relative">
             {/* Button - Removed hover bg/border changes and glow ring */}
             <div className="relative w-16 h-16 md:w-32 md:h-32 bg-white/10 backdrop-blur-lg rounded-full flex items-center justify-center border border-white/30 md:group-hover:scale-110 transition-all duration-300 shadow-2xl">
                <PlayIcon className="w-6 h-6 md:w-12 md:h-12 text-white fill-current ml-1 md:ml-2" />
             </div>
          </div>
          <div className="mt-6 flex items-center gap-2 overflow-hidden">
             {/* Mobile: Static Position. Desktop: Animates up. */}
             <span className="text-white font-bold tracking-[0.2em] text-xs md:text-sm uppercase translate-y-0 md:translate-y-8 md:group-hover:translate-y-0 transition-transform duration-500 ease-out">Watch Reel</span>
          </div>
        </div>

        {/* Top Bar UI - REC Removed */}
        <div className="absolute top-0 left-0 right-0 p-6 md:p-10 flex justify-end items-start z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
           <div className="text-white/80 font-mono text-xs hidden md:block">4K • 60FPS</div>
        </div>

        {/* Bottom Bar UI */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 z-20">
           <div className="flex flex-col md:flex-row justify-between items-end gap-6">
              {/* Mobile: Static. Desktop: Slide up. */}
              <div className="transform translate-y-0 md:translate-y-4 md:group-hover:translate-y-0 transition-transform duration-500 w-full md:w-auto">
                <h3 className="text-white text-3xl md:text-5xl font-bold tracking-tighter mb-2">The Finesse Way</h3>
                <p className="text-white/70 font-medium text-sm md:text-base max-w-md line-clamp-2 md:line-clamp-none">
                   A showcase of our philosophy, process, and the obsession behind every pixel.
                </p>
              </div>

              {/* Progress Bar - Removed hover animation */}
              <div className="w-full md:w-64 hidden md:block">
                 <div className="flex justify-between text-xs text-white/60 font-mono mb-2">
                    <span>00:00</span>
                    <span>02:14</span>
                 </div>
                 <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden">
                    <div className="w-0 h-full bg-eddie-lime"></div>
                 </div>
              </div>
           </div>
        </div>

      </div>
    </div>
  );
};