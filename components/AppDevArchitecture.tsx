import React from 'react';
import { ArrowRightIcon, BoltIcon, CodeIcon, RocketIcon } from './Icons';
import { SecurityGrid } from './SecurityGrid';

export const AppDevArchitecture: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-16 sm:mb-20 md:mb-24">
       {/* Security Grid Component */}
      <div className="order-2 lg:order-1">
        <SecurityGrid />
      </div>

      <div className="bg-white border border-gray-100 rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[2.5rem] p-6 sm:p-8 md:p-12 text-center relative overflow-hidden flex flex-col justify-center order-1 lg:order-2">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Architecture Logic</h2>
          <div className="flex flex-col gap-3 sm:gap-4 relative z-10">
              <div className="bg-gray-50 p-3 sm:p-4 rounded-lg sm:rounded-xl flex items-center justify-between border border-gray-200">
                  <div className="flex items-center gap-2 sm:gap-3">
                       <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 shrink-0"><BoltIcon className="w-4 h-4 sm:w-5 sm:h-5"/></div>
                       <span className="font-bold text-sm sm:text-base">Frontend</span>
                  </div>
                  <ArrowRightIcon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-300 shrink-0" />
              </div>
               <div className="bg-gray-50 p-3 sm:p-4 rounded-lg sm:rounded-xl flex items-center justify-between border border-gray-200">
                  <div className="flex items-center gap-2 sm:gap-3">
                       <div className="w-8 h-8 sm:w-10 sm:h-10 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 shrink-0"><CodeIcon className="w-4 h-4 sm:w-5 sm:h-5"/></div>
                       <span className="font-bold text-sm sm:text-base">API Gateway</span>
                  </div>
                  <ArrowRightIcon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-300 shrink-0" />
              </div>
               <div className="bg-gray-50 p-3 sm:p-4 rounded-lg sm:rounded-xl flex items-center justify-between border border-gray-200">
                  <div className="flex items-center gap-2 sm:gap-3">
                       <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-100 rounded-lg flex items-center justify-center text-green-600 shrink-0"><RocketIcon className="w-4 h-4 sm:w-5 sm:h-5"/></div>
                       <span className="font-bold text-sm sm:text-base">Database</span>
                  </div>
                  <div className="w-4 h-4 sm:w-5 sm:h-5"></div> 
              </div>
          </div>
      </div>
    </div>
  );
};

