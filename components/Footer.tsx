import React from 'react';
import { SparkleIcon, ArrowUpRightIcon, GlobeIcon } from './Icons';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full px-4 mb-4">
      <div className="bg-eddie-dark text-white rounded-[2.5rem] p-8 md:p-16 overflow-hidden relative">
        
        {/* Abstract Background */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-eddie-purple/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

        <div className="relative z-10 flex flex-col gap-16 md:gap-24">
          
          {/* Top Section */}
          <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
            <div className="max-w-xl">
               <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                    <SparkleIcon className="text-eddie-lime w-5 h-5" />
                  </div>
                  <span className="font-bold text-xl">The Finesse Co.</span>
               </div>
               <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9] mb-8">
                 Let's build<br/>something<br/><span className="text-eddie-lime">iconic.</span>
               </h2>
               <div className="flex flex-col sm:flex-row gap-4">
                 <button className="bg-eddie-lime text-eddie-dark px-8 py-4 rounded-2xl font-bold hover:bg-[#ccee2d] transition-colors hover:scale-105 duration-200">
                   Start a Project
                 </button>
                 <button className="bg-white/10 text-white border border-white/20 px-8 py-4 rounded-2xl font-bold hover:bg-white/20 transition-colors">
                   view@finesse.co
                 </button>
               </div>
            </div>

            {/* Links Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-24">
              <div className="flex flex-col gap-6">
                <h4 className="font-bold text-gray-400 uppercase text-xs tracking-wider">Socials</h4>
                <a href="#" className="font-bold hover:text-eddie-lime transition-colors">Instagram</a>
                <a href="#" className="font-bold hover:text-eddie-lime transition-colors">Twitter / X</a>
                <a href="#" className="font-bold hover:text-eddie-lime transition-colors">LinkedIn</a>
                <a href="#" className="font-bold hover:text-eddie-lime transition-colors">Dribbble</a>
              </div>
              <div className="flex flex-col gap-6">
                <h4 className="font-bold text-gray-400 uppercase text-xs tracking-wider">Company</h4>
                <a href="#" className="font-bold hover:text-eddie-lime transition-colors">Services</a>
                <a href="#" className="font-bold hover:text-eddie-lime transition-colors">Agency</a>
                <a href="#" className="font-bold hover:text-eddie-lime transition-colors">Careers</a>
                <a href="#" className="font-bold hover:text-eddie-lime transition-colors">Contact</a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-400 font-medium text-sm">
              © {new Date().getFullYear()} The Finesse Co. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
               <a href="#" className="text-sm font-bold hover:underline decoration-eddie-lime">Privacy Policy</a>
               <a href="#" className="text-sm font-bold hover:underline decoration-eddie-lime">Terms of Service</a>
               <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full">
                  <GlobeIcon className="w-4 h-4 text-gray-400" />
                  <span className="text-xs font-bold text-gray-300">Global Agency</span>
               </div>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};