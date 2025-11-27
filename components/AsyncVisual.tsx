import React from 'react';
import { PlayIcon, CheckIcon } from './Icons';

export const AsyncVisual: React.FC = () => {
  return (
    <div className="bg-white rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[2.5rem] p-4 sm:p-6 md:p-8 border border-gray-100 h-full min-h-[350px] sm:min-h-[400px] relative overflow-hidden">
       {/* Timeline line - positioned at center of icons: padding + half icon width */}
       <div className="absolute top-0 bottom-0 w-0.5 bg-gray-100 z-0 left-[2.5rem] sm:left-[3.25rem] md:left-[4rem]"></div>

       <div className="relative z-10 flex flex-col gap-6 sm:gap-8">
          
          {/* Event 1 */}
          <div className="flex gap-4 sm:gap-6 animate-[slideUp_0.8s_ease-out_forwards]">
             <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-eddie-purple text-white flex items-center justify-center shrink-0 z-10 shadow-sm border-2 sm:border-4 border-white">
                <span className="font-bold text-xs sm:text-sm">AM</span>
             </div>
             <div className="bg-gray-50 p-3 sm:p-4 rounded-xl sm:rounded-2xl rounded-tl-none w-full">
                <div className="flex justify-between mb-2">
                   <span className="font-bold text-xs sm:text-sm text-eddie-dark">Daily Update</span>
                   <span className="text-[10px] sm:text-xs text-gray-400 font-bold">09:00</span>
                </div>
                <div className="bg-white rounded-lg sm:rounded-xl p-2 sm:p-3 border border-gray-200 flex items-center gap-2 sm:gap-3 cursor-pointer hover:bg-gray-50 transition-colors group">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-eddie-purple/20 rounded-full flex items-center justify-center text-eddie-purple group-hover:scale-110 transition-transform shrink-0">
                        <PlayIcon className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                    </div>
                    <span className="text-[10px] sm:text-xs font-bold text-gray-500">Video: Sprint Progress</span>
                </div>
             </div>
          </div>

          {/* Event 2 */}
          <div className="flex gap-4 sm:gap-6 animate-[slideUp_0.8s_ease-out_forwards]" style={{ animationDelay: '0.2s' }}>
             <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-white text-eddie-dark border border-gray-200 flex items-center justify-center shrink-0 z-10 shadow-sm">
                <span className="font-bold text-xs sm:text-sm text-gray-400">Noon</span>
             </div>
             <div className="bg-eddie-blue-light p-3 sm:p-4 rounded-xl sm:rounded-2xl rounded-tl-none w-full">
                <div className="flex justify-between mb-2">
                   <span className="font-bold text-xs sm:text-sm text-eddie-dark">Design Review</span>
                   <span className="text-[10px] sm:text-xs text-gray-400 font-bold">12:30</span>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 font-medium">Figma link updated. Check the new landing page hero section. 🎨</p>
             </div>
          </div>

          {/* Event 3 */}
           <div className="flex gap-4 sm:gap-6 animate-[slideUp_0.8s_ease-out_forwards]" style={{ animationDelay: '0.5s' }}>
             <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-eddie-lime text-eddie-dark flex items-center justify-center shrink-0 z-10 shadow-sm border-2 sm:border-4 border-white">
                <CheckIcon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
             </div>
             <div className="bg-gray-50 p-3 sm:p-4 rounded-xl sm:rounded-2xl rounded-tl-none w-full">
                <div className="flex justify-between mb-2">
                   <span className="font-bold text-xs sm:text-sm text-eddie-dark">Approved</span>
                   <span className="text-[10px] sm:text-xs text-gray-400 font-bold">16:45</span>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 font-medium">Changes look great. Proceed to dev.</p>
             </div>
          </div>

       </div>
    </div>
  );
};

