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
    <div className="w-full max-w-[90rem] mx-auto px-4 mb-24 overflow-hidden">
      <div className="mb-12 px-4 md:px-12">
        <span className="text-eddie-purple font-bold tracking-wider uppercase text-sm">Our Method</span>
        <h2 className="text-4xl md:text-5xl font-bold mt-4">The Finesse Process</h2>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="w-full overflow-x-auto no-scrollbar pb-8 px-4 md:px-12">
         <div className="flex gap-4 md:gap-6 min-w-max">
            {steps.map((step, idx) => (
              <div key={idx} className="flex items-center gap-4">
                 
                 {/* Card */}
                 <div className={`w-64 h-80 ${step.color} rounded-[2rem] p-8 flex flex-col justify-between group transition-transform duration-300 hover:scale-[1.02] hover:-rotate-1 shadow-sm`}>
                    <div className="flex justify-between items-start">
                       <span className="font-bold text-4xl opacity-20">0{idx + 1}</span>
                       <div className="w-10 h-10 bg-white/40 rounded-full flex items-center justify-center backdrop-blur-sm">
                          {step.icon}
                       </div>
                    </div>
                    <div>
                       <h3 className="text-2xl font-bold mb-2">{step.name}</h3>
                       <p className="text-sm font-medium opacity-80 leading-relaxed">{step.desc}</p>
                    </div>
                 </div>

                 {/* Connector Arrow (except last item) */}
                 {idx !== steps.length - 1 && (
                    <div className="hidden md:block text-gray-300">
                       <ArrowRightIcon className="w-8 h-8 opacity-50" />
                    </div>
                 )}
              </div>
            ))}
         </div>
      </div>
    </div>
  );
};