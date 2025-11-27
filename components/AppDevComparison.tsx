import React from 'react';

export const AppDevComparison: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-16 sm:mb-20 md:mb-24">
       <div className="bg-gray-100 rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[2.5rem] p-6 sm:p-8 md:p-10 opacity-70 border border-transparent">
          <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-400 line-through decoration-red-500">Spaghetti Code</h3>
          <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-500">
             <li className="flex items-center gap-2 sm:gap-3"><span className="w-2 h-2 bg-red-400 rounded-full shrink-0"></span>Monolithic nightmares</li>
             <li className="flex items-center gap-2 sm:gap-3"><span className="w-2 h-2 bg-red-400 rounded-full shrink-0"></span>Downtime on Fridays</li>
             <li className="flex items-center gap-2 sm:gap-3"><span className="w-2 h-2 bg-red-400 rounded-full shrink-0"></span>Tech debt bankruptcy</li>
             <li className="flex items-center gap-2 sm:gap-3"><span className="w-2 h-2 bg-red-400 rounded-full shrink-0"></span>Slow feature rollouts</li>
          </ul>
       </div>
       <div className="bg-eddie-dark text-white rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[2.5rem] p-6 sm:p-8 md:p-10 border border-gray-800 shadow-2xl md:scale-[1.02]">
          <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-eddie-lime">Finesse Symphony</h3>
          <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base">
             <li className="flex items-center gap-2 sm:gap-3"><span className="w-2 h-2 bg-eddie-lime rounded-full shrink-0"></span>Modular Microservices</li>
             <li className="flex items-center gap-2 sm:gap-3"><span className="w-2 h-2 bg-eddie-lime rounded-full shrink-0"></span>99.99% Uptime SLA</li>
             <li className="flex items-center gap-2 sm:gap-3"><span className="w-2 h-2 bg-eddie-lime rounded-full shrink-0"></span>Auto-scaling Infrastructure</li>
             <li className="flex items-center gap-2 sm:gap-3"><span className="w-2 h-2 bg-eddie-lime rounded-full shrink-0"></span>CI/CD Pipelines</li>
          </ul>
       </div>
    </div>
  );
};

