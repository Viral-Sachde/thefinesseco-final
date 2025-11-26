import React from 'react';
import { ArrowRightIcon } from './Icons';

export const Careers: React.FC = () => {
  const roles = [
    { title: "Frontend Intern", type: "Remote", dept: "Engineering" },
    { title: "Product Strategist", type: "Remote", dept: "Strategy" },
    { title: "UI/UX Intern", type: "Remote", dept: "Design" },
    { title: "Creative Director", type: "Remote", dept: "Design" },
    { title: "Marketing Strategist Intern", type: "Remote", dept: "Marketing" }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto px-4">
       <div className="mb-16 text-center">
         <span className="bg-[#E3F2FD] text-eddie-dark px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide mb-4 inline-block">Join the Team</span>
         <h2 className="text-4xl md:text-6xl font-bold mb-6">Create with Finesse</h2>
         <p className="text-xl text-gray-500 max-w-2xl mx-auto">
           We are always looking for exceptional talent to help us redefine digital experiences.
         </p>
      </div>

      <div className="flex flex-col gap-4">
        {roles.map((role, idx) => (
          <div 
            key={idx} 
            className="bg-[#F9F9F9] hover:bg-[#F0F0F0] p-6 md:p-8 rounded-[2rem] flex flex-col md:flex-row items-center justify-between transition-all duration-300 group cursor-pointer border border-transparent hover:border-gray-200"
          >
            <div className="text-center md:text-left mb-4 md:mb-0">
               <h3 className="text-xl md:text-2xl font-bold mb-1">{role.title}</h3>
               <div className="flex items-center gap-3 justify-center md:justify-start text-gray-500 font-medium text-sm">
                  <span>{role.dept}</span>
                  <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                  <span>{role.type}</span>
               </div>
            </div>
            
            <a 
              href={`mailto:hr@thefinesse.co?subject=Application for ${encodeURIComponent(role.title)}`}
              className="bg-white text-eddie-dark px-6 py-3 rounded-xl font-bold text-sm shadow-sm group-hover:scale-105 transition-all flex items-center gap-2"
            >
              Apply Now <ArrowRightIcon className="w-4 h-4" />
            </a>
          </div>
        ))}
      </div>
      
      <div className="mt-12 p-8 bg-[#EAE8E4] rounded-[2.5rem] text-center">
        <h4 className="font-bold text-xl mb-2">Don't see your role?</h4>
        <p className="text-gray-500 mb-6">We are always open to spontaneous applications.</p>
        <a 
          href="mailto:hr@thefinesse.co?subject=Portfolio Submission"
          className="text-eddie-dark font-bold underline decoration-2 hover:text-gray-600"
        >
          Send us your portfolio
        </a>
      </div>
    </div>
  );
};