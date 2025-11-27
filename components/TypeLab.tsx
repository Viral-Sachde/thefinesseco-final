import React, { useState } from 'react';

type FontType = 'sans' | 'serif' | 'mono';

export const TypeLab: React.FC = () => {
  const [activeFont, setActiveFont] = useState<FontType>('sans');

  return (
    <div className="bg-white border border-gray-200 h-96 rounded-[1.5rem] sm:rounded-[2rem] break-inside-avoid p-4 sm:p-8 flex flex-col items-center justify-between text-center relative overflow-hidden">
       
        {/* Background Letters for Texture */}
        <div className="absolute top-[-20px] left-[-20px] text-[6rem] sm:text-[10rem] font-bold text-gray-50 opacity-[0.05] pointer-events-none select-none">
           Aa
        </div>

        <h3 className="font-bold text-base sm:text-xl uppercase tracking-widest text-gray-400">Type Lab</h3>
        
        <div className="flex-1 flex items-center justify-center w-full overflow-hidden px-2">
            <p 
                className={`text-4xl sm:text-6xl md:text-7xl transition-all duration-300 leading-none truncate max-w-full
                ${activeFont === 'sans' ? 'font-sans font-bold' : ''}
                ${activeFont === 'serif' ? 'font-serif italic' : ''}
                ${activeFont === 'mono' ? 'font-mono' : ''}
                `}
            >
                Finesse
            </p>
        </div>

        <div className="flex gap-1.5 sm:gap-2 bg-gray-50 p-1 sm:p-1.5 rounded-lg sm:rounded-xl border border-gray-100 z-10 w-full max-w-full overflow-hidden">
            {(['sans', 'serif', 'mono'] as FontType[]).map((type) => (
                <button
                   key={type}
                   onClick={() => setActiveFont(type)}
                   className={`flex-1 px-2 sm:px-4 py-1.5 sm:py-2 rounded-md sm:rounded-lg text-[10px] sm:text-xs font-bold capitalize transition-all touch-manipulation ${activeFont === type ? 'bg-white shadow-sm text-eddie-dark' : 'text-gray-400 active:text-gray-600'}`}
                >
                    {type}
                </button>
            ))}
        </div>
    </div>
  );
};

