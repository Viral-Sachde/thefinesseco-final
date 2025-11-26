import React from 'react';
import { ArrowRightIcon, PaletteIcon, CodeIcon, RocketIcon, StarIcon } from './Icons';

export const Process: React.FC = () => {
  const steps = [
    { name: "Discovery", icon: <StarIcon className="w-6 h-6" />, color: "bg-eddie-mint", desc: "Deep dive into your brand DNA." },
    { name: "Strategy", icon: <ArrowRightIcon className="w-6 h-6 rotate-45" />, color: "bg-eddie-purple", desc: "Mapping the path to victory." },
    { name: "Design", icon: <PaletteIcon className="w-6 h-6" />, color: "bg-eddie-pink", desc: "Crafting the visual narrative." },
    { name: "Build", icon: <CodeIcon className="w-6 h-6" />, color: "bg-eddie-blue", desc: "Pixel-perfect engineering." },
    { name: "Launch", icon: <RocketIcon className="w-6 h-6" />, color: "bg-eddie-lime", desc: "Liftoff and optimization." }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 mb-24">
      <div className="mb-12 text-center">
        <span className="text-eddie-purple font-bold tracking-wider uppercase text-sm">Our Method</span>
        <h2 className="text-4xl md:text-6xl font-bold mt-4 mb-6">The Finesse Process</h2>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto">
          From concept to launch, we engineer digital experiences that convert.
        </p>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="w-full overflow-x-auto no-scrollbar py-8 -my-8">
         <div className="flex gap-4 md:gap-6 min-w-max px-4 md:px-8">
            {steps.map((step, idx) => (
              <div key={idx} className="flex items-center gap-4 py-4">
                 
                 {/* Card - Slightly longer than square */}
                 <div className={`w-64 h-72 ${step.color} rounded-[2.5rem] p-8 flex flex-col justify-between group transition-all duration-500 hover:scale-[1.05] hover:-rotate-2 hover:shadow-2xl shadow-lg border border-white/20 flex-shrink-0`}>
                    <div className="flex justify-between items-start">
                       <span className="font-bold text-5xl text-eddie-dark/30 group-hover:text-eddie-dark transition-colors duration-300">0{idx + 1}</span>
                       <div className="w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          {step.icon}
                       </div>
                    </div>
                    <div>
                       <h3 className="text-2xl font-bold mb-2">{step.name}</h3>
                       <p className="text-sm font-medium opacity-90 leading-relaxed">{step.desc}</p>
                    </div>
                 </div>

                 {/* Connector Arrow (except last item) */}
                 {idx !== steps.length - 1 && (
                    <div className="text-gray-300 flex-shrink-0">
                       <ArrowRightIcon className="w-6 h-6 opacity-60" />
                    </div>
                 )}
              </div>
            ))}
         </div>
      </div>
    </div>
  );
};