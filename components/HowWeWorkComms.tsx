import React from 'react';
import { AsyncVisual } from './AsyncVisual';

export const HowWeWorkComms: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-16 sm:mb-20 md:mb-24">
       <div className="bg-eddie-dark text-white rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[2.5rem] p-6 sm:p-8 md:p-10 flex flex-col justify-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">Obsessive Comms</h2>
          <p className="text-gray-400 text-base sm:text-lg mb-6 sm:mb-8">
            We stay in sync. Daily async updates, quick responses, and clear documentation. No radio silence. No surprises.
          </p>
          <div className="flex gap-3 sm:gap-4 flex-wrap">
             <div className="flex items-center gap-2 bg-white/10 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-bold">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span> Always Responsive
             </div>
             <div className="flex items-center gap-2 bg-white/10 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-bold">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span> Daily Updates
             </div>
          </div>
       </div>
       
       {/* Visual Timeline Component */}
       <AsyncVisual />
    </div>
  );
};

