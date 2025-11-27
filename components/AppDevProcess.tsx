import React from 'react';

export const AppDevProcess: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-16 sm:mb-20 md:mb-24">
       {[
         { title: "MVP", desc: "2-4 Weeks. Core features only. Validate fast." },
         { title: "Beta", desc: "4-8 Weeks. User feedback loops. Polish UX." },
         { title: "Scale", desc: "Ongoing. Feature drops. Performance tuning." }
       ].map((step, i) => (
         <div key={i} className="bg-white border border-gray-100 p-6 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] hover:shadow-lg transition-shadow">
           <span className="text-3xl sm:text-4xl font-bold text-gray-200 mb-3 sm:mb-4 block">0{i+1}</span>
           <h3 className="text-lg sm:text-xl font-bold mb-2">{step.title}</h3>
           <p className="text-gray-500 text-xs sm:text-sm font-medium">{step.desc}</p>
         </div>
       ))}
    </div>
  );
};

