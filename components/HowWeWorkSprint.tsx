import React from 'react';
import { ChecklistVisual } from './ChecklistVisual';

export const HowWeWorkSprint: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-16 sm:mb-20 md:mb-24 items-stretch">
        {/* Cycle Diagram */}
        <div className="bg-white border border-gray-100 rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[2.5rem] p-4 sm:p-6 md:p-8 lg:p-12 shadow-sm flex flex-col">
            <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 md:mb-10 text-center">The 4-Week Sprint</h3>
            <div className="flex-1 flex flex-col gap-3 sm:gap-4">
                <div className="bg-gray-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center">
                    <div className="text-[10px] sm:text-xs font-bold uppercase text-gray-400 mb-1 sm:mb-2">Week 1</div>
                    <div className="font-bold text-base sm:text-lg mb-1 sm:mb-2">Strategy & Scope</div>
                    <p className="text-xs sm:text-sm text-gray-500">Locking in the goals.</p>
                </div>
                <div className="bg-eddie-purple/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center border border-eddie-purple/20 flex-1 flex flex-col justify-center">
                    <div className="text-[10px] sm:text-xs font-bold uppercase text-eddie-purple mb-1 sm:mb-2">Week 2-3</div>
                    <div className="font-bold text-base sm:text-lg mb-1 sm:mb-2">Deep Work</div>
                    <p className="text-xs sm:text-sm text-gray-500">Design & Code marathon.</p>
                </div>
                <div className="bg-gray-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center">
                    <div className="text-[10px] sm:text-xs font-bold uppercase text-gray-400 mb-1 sm:mb-2">Week 4</div>
                    <div className="font-bold text-base sm:text-lg mb-1 sm:mb-2">Review & Ship</div>
                    <p className="text-xs sm:text-sm text-gray-500">Testing and deployment.</p>
                </div>
            </div>
        </div>

        {/* QA Visual Component */}
        <ChecklistVisual />
    </div>
  );
};

