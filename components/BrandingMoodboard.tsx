'use client'

import React, { useState, useEffect } from 'react';
import { HeartIcon } from './Icons';
import { TypeLab } from './TypeLab';

type FontType = 'sans' | 'serif' | 'mono';
type VibeColor = 'purple' | 'blue' | 'pink' | 'lime' | 'orange' | 'teal';

const colorPalettes = [
  [{ color: 'bg-black', name: 'Primary' }, { color: 'bg-white border border-gray-200', name: 'Secondary' }, { color: 'bg-blue-500', name: 'Accent' }],
  [{ color: 'bg-eddie-purple', name: 'Primary' }, { color: 'bg-eddie-lime', name: 'Secondary' }, { color: 'bg-eddie-dark', name: 'Accent' }],
  [{ color: 'bg-red-500', name: 'Primary' }, { color: 'bg-yellow-400', name: 'Secondary' }, { color: 'bg-green-500', name: 'Accent' }],
  [{ color: 'bg-pink-400', name: 'Primary' }, { color: 'bg-purple-400', name: 'Secondary' }, { color: 'bg-indigo-500', name: 'Accent' }],
];

const vibeColors: Record<VibeColor, string> = {
  purple: 'bg-[#E0DEFA] text-eddie-purple',
  blue: 'bg-[#E3F2FD] text-blue-600',
  pink: 'bg-eddie-pink text-pink-600',
  lime: 'bg-eddie-lime text-eddie-dark',
  orange: 'bg-orange-100 text-orange-600',
  teal: 'bg-teal-100 text-teal-600',
};

export const BrandingMoodboard: React.FC = () => {
  const [selectedColor, setSelectedColor] = useState<number | null>(null);
  const [colorPaletteIndex, setColorPaletteIndex] = useState(0);
  const [logoRotation, setLogoRotation] = useState(0);
  const [isHeartRed, setIsHeartRed] = useState(false);
  const [vibeColor, setVibeColor] = useState<VibeColor>('purple');
  const [vibeFont, setVibeFont] = useState<FontType>('serif');

  // Auto-change Vibe colors and fonts every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      const colors: VibeColor[] = ['purple', 'blue', 'pink', 'lime', 'orange', 'teal'];
      const fonts: FontType[] = ['sans', 'serif', 'mono'];
      setVibeColor(colors[Math.floor(Math.random() * colors.length)]);
      setVibeFont(fonts[Math.floor(Math.random() * fonts.length)]);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full overflow-hidden px-2 sm:px-0">
      <div className="columns-1 md:columns-3 gap-4 sm:gap-6 space-y-4 sm:space-y-6 mb-24">
         {/* Vibe Card - Interactive Auto-changing */}
         <div className={`${vibeColors[vibeColor].split(' ')[0]} h-64 rounded-[1.5rem] sm:rounded-[2rem] flex items-center justify-center p-4 sm:p-8 break-inside-avoid cursor-pointer group md:hover:scale-[1.02] transition-all duration-500 md:hover:shadow-lg border border-transparent md:hover:border-eddie-purple/20 overflow-hidden relative`}>
            <span 
               className={`text-3xl sm:text-4xl transition-all duration-500 group-hover:scale-110 ${
                 vibeFont === 'sans' ? 'font-sans font-bold' : 
                 vibeFont === 'serif' ? 'font-serif italic' : 
                 'font-mono'
               } ${vibeColors[vibeColor].split(' ')[1]}`}
            >
               Vibe
            </span>
         </div>
         
         {/* Interactive Type Lab */}
         <div className="break-inside-avoid">
            <TypeLab />
         </div>
         
         {/* Logo Card - Interactive Rotation */}
         <div 
            className="bg-[#F9FCD0] h-72 rounded-[1.5rem] sm:rounded-[2rem] p-4 sm:p-6 break-inside-avoid flex items-center justify-center cursor-pointer group md:hover:scale-[1.02] transition-all duration-300 md:hover:shadow-lg border border-transparent md:hover:border-eddie-dark/10 overflow-hidden"
            onClick={() => setLogoRotation(prev => prev + 90)}
         >
            <div 
               className="w-24 h-24 sm:w-32 sm:h-32 border-4 border-eddie-dark rounded-full flex items-center justify-center font-bold text-base sm:text-xl transition-transform duration-500 md:group-hover:scale-110"
               style={{ transform: `rotate(${logoRotation}deg)` }}
            >
               Logo
            </div>
         </div>
         
         {/* Color Theory Card - Interactive Color Selection */}
         <div className="bg-eddie-pink h-64 rounded-[1.5rem] sm:rounded-[2rem] break-inside-avoid p-4 sm:p-8 cursor-pointer group md:hover:scale-[1.02] transition-all duration-300 md:hover:shadow-lg border border-transparent md:hover:border-eddie-pink/30 overflow-hidden">
            <div className="flex gap-2 mb-3 sm:mb-4 flex-wrap">
               {colorPalettes[colorPaletteIndex].map((item, idx) => (
                 <div
                    key={idx}
                    onClick={(e) => {
                       e.stopPropagation();
                       setSelectedColor(selectedColor === idx ? null : idx);
                       // Cycle through color palettes on click
                       setColorPaletteIndex((prev) => (prev + 1) % colorPalettes.length);
                    }}
                    className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full ${item.color} cursor-pointer transition-all duration-300 active:scale-110 sm:hover:scale-125 sm:hover:shadow-md touch-manipulation ${
                       selectedColor === idx ? 'ring-2 ring-eddie-dark ring-offset-1 sm:ring-offset-2 scale-110 sm:scale-125' : ''
                    }`}
                    title={item.name}
                 />
               ))}
            </div>
            <p className="font-bold text-sm sm:text-base text-eddie-dark group-hover:text-eddie-dark/80 transition-colors">Color Theory</p>
            {selectedColor !== null && (
               <p className="text-[10px] sm:text-xs text-eddie-dark/60 mt-2 animate-fade-in">
                  {colorPalettes[colorPaletteIndex][selectedColor].name} selected
               </p>
            )}
         </div>
         
         {/* Minimalist Card - Interactive */}
         <div className="bg-eddie-dark h-80 rounded-[1.5rem] sm:rounded-[2rem] p-4 sm:p-8 text-white break-inside-avoid flex flex-col justify-between cursor-pointer group md:hover:scale-[1.02] transition-all duration-300 md:hover:shadow-2xl border border-transparent md:hover:border-white/10 overflow-hidden">
            <div 
               className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 group-hover:bg-white/30 transition-all duration-300 md:group-hover:scale-110"
            ></div>
            <p className="font-bold text-xl sm:text-2xl md:group-hover:scale-105 transition-transform duration-300 leading-tight">Minimalist.<br/>Bold.<br/>Timeless.</p>
         </div>
         
         {/* Heart Card - Interactive Red on Hover/Click */}
         <div 
            className="bg-eddie-mint h-64 rounded-[1.5rem] sm:rounded-[2rem] break-inside-avoid flex items-center justify-center cursor-pointer group md:hover:scale-[1.02] transition-all duration-300 md:hover:shadow-lg border border-transparent md:hover:border-eddie-mint/30 overflow-hidden relative"
            onClick={() => setIsHeartRed(!isHeartRed)}
            onMouseEnter={() => setIsHeartRed(true)}
            onMouseLeave={() => setIsHeartRed(false)}
         >
            <HeartIcon 
               className={`w-12 h-12 sm:w-16 sm:h-16 transition-all duration-300 z-10 ${
                  isHeartRed ? 'text-red-500 opacity-100 scale-110' : 'text-eddie-dark opacity-20 group-hover:opacity-40'
               }`}
            />
         </div>
      </div>
    </div>
  );
};

