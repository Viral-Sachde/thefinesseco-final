import React from 'react';
import { ArrowUpRightIcon } from './Icons';

export const CaseStudies: React.FC = () => {
  const cases = [
    {
      title: "Lumina Skin",
      category: "E-Commerce",
      image: "bg-[#E0DEFA]", // Placeholder color representing image
      stats: "240% Revenue Inc.",
      desc: "Rebranding and Shopify headless transition for a luxury skincare line."
    },
    {
      title: "Flow State",
      category: "SaaS Product",
      image: "bg-[#E3F2FD]",
      stats: "10k+ Daily Users",
      desc: "Product design system and frontend architecture for productivity software."
    },
    {
      title: "Urban Roots",
      category: "Non-Profit",
      image: "bg-[#F9FCD0]",
      stats: "$2M Raised",
      desc: "Donation platform optimization and visual storytelling for urban farming."
    },
    {
      title: "Velvet Capital",
      category: "FinTech",
      image: "bg-[#F4F4F4]",
      stats: "Secure & Fast",
      desc: "Web3 dashboard design and secure marketing site for crypto investment."
    }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 overflow-hidden">
      <div className="mb-12 md:mb-16 text-center">
         <span className="bg-eddie-purple/20 text-eddie-dark px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide mb-4 inline-block">Selected Work</span>
         <h2 className="text-4xl md:text-6xl font-bold mb-6">Our Masterpieces</h2>
         <p className="text-xl text-gray-500 max-w-2xl mx-auto">
           A curated selection of projects where strategy meets aesthetic perfection.
         </p>
      </div>

      {/* Cards: Slider on Mobile (1.5 view ~ 65vw), Grid on Desktop */}
      <div className="flex md:grid md:grid-cols-2 gap-4 md:gap-8 overflow-x-auto md:overflow-visible snap-x snap-mandatory no-scrollbar pb-8 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0">
        {cases.map((project, idx) => (
          <div key={idx} className="group cursor-pointer min-w-[65vw] md:min-w-0 snap-center shrink-0 flex flex-col md:block">
            {/* Enhanced Mobile Container */}
            <div className="h-full md:h-auto flex flex-col md:block p-3 md:p-0 rounded-[2.2rem] md:rounded-none bg-white md:bg-transparent border border-gray-100 md:border-none shadow-lg md:shadow-none">
                
                {/* Image Card */}
                <div className={`w-full aspect-video md:aspect-[4/3] rounded-[2rem] md:rounded-[2.5rem] ${project.image} mb-4 md:mb-6 relative overflow-hidden transition-transform duration-500 group-hover:scale-[1.02] shadow-sm group-hover:shadow-xl`}>
                   <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="bg-white rounded-full px-6 py-3 font-bold text-eddie-dark flex items-center gap-2 shadow-lg">
                        View Case Study <ArrowUpRightIcon className="w-4 h-4" />
                      </div>
                   </div>
                   
                   {/* Decorative Placeholder Shape */}
                   <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-white/30 rounded-full blur-3xl"></div>
                </div>

                {/* Content */}
                <div className="px-2 md:px-4 flex-1 flex flex-col">
                  {/* Single line header with truncation + badge */}
                  <div className="flex flex-nowrap justify-between items-center mb-2 gap-3">
                    <h3 className="text-xl md:text-2xl font-bold leading-tight truncate min-w-0">{project.title}</h3>
                    <span className="text-[10px] md:text-xs font-bold border border-gray-200 px-2 md:px-3 py-1 rounded-full whitespace-nowrap bg-white/50 shrink-0">{project.stats}</span>
                  </div>
                  <p className="text-gray-500 font-medium mb-3 text-sm md:text-base leading-snug line-clamp-2">{project.desc}</p>
                  <div className="mt-auto flex gap-2">
                     <span className="text-[10px] md:text-xs font-bold text-eddie-purple uppercase tracking-wide bg-eddie-purple/10 px-2 py-1 rounded-md">{project.category}</span>
                  </div>
                </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};