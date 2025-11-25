import React from 'react';
import { SparkleIcon, GlobeIcon } from './Icons';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="w-full px-4 mb-4">
      <div className="bg-white border border-gray-200 text-eddie-dark rounded-[2.5rem] p-8 md:p-16 overflow-hidden relative shadow-sm">
        
        <div className="relative z-10 flex flex-col gap-16 md:gap-24">
          
          {/* Top Section */}
          <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
            <div className="max-w-xl">
               <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center shadow-sm border border-gray-100">
                    <SparkleIcon className="text-eddie-dark w-5 h-5" />
                  </div>
                  <span className="font-bold text-xl">The Finesse Co.</span>
               </div>
               <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9] mb-8">
                 Let's build<br/>something<br/><span className="text-eddie-purple">iconic.</span>
               </h2>
               <div className="flex flex-col sm:flex-row gap-4">
                 <button 
                    onClick={() => onNavigate('pricing')}
                    className="bg-eddie-dark text-white px-8 py-4 rounded-2xl font-bold hover:bg-gray-800 transition-colors hover:scale-105 duration-200 shadow-lg"
                 >
                   Book a Call
                 </button>
                 <button className="bg-gray-50 border border-gray-200 text-eddie-dark px-8 py-4 rounded-2xl font-bold hover:bg-gray-100 transition-colors shadow-sm">
                   view@finesse.co
                 </button>
               </div>
            </div>

            {/* Links Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-24">
              <div className="flex flex-col gap-6">
                <h4 className="font-bold text-gray-400 uppercase text-xs tracking-wider">Socials</h4>
                <a href="#" className="font-bold hover:text-eddie-purple transition-colors">Instagram</a>
                <a href="#" className="font-bold hover:text-eddie-purple transition-colors">Twitter / X</a>
                <a href="#" className="font-bold hover:text-eddie-purple transition-colors">LinkedIn</a>
                <a href="#" className="font-bold hover:text-eddie-purple transition-colors">Dribbble</a>
              </div>
              <div className="flex flex-col gap-6">
                <h4 className="font-bold text-gray-400 uppercase text-xs tracking-wider">Company</h4>
                <button onClick={() => onNavigate('services')} className="text-left font-bold hover:text-eddie-purple transition-colors">Services</button>
                <button onClick={() => onNavigate('process')} className="text-left font-bold hover:text-eddie-purple transition-colors">Process</button>
                <button onClick={() => onNavigate('founders')} className="text-left font-bold hover:text-eddie-purple transition-colors">Vision</button>
                <button onClick={() => onNavigate('careers')} className="text-left font-bold hover:text-eddie-purple transition-colors">Careers</button>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-12 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-400 font-medium text-sm">
              © {new Date().getFullYear()} The Finesse Co. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
               <a href="#" className="text-sm font-bold hover:underline decoration-eddie-purple text-gray-600">Privacy Policy</a>
               <a href="#" className="text-sm font-bold hover:underline decoration-eddie-purple text-gray-600">Terms of Service</a>
               <div className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-200">
                  <GlobeIcon className="w-4 h-4 text-gray-400" />
                  <span className="text-xs font-bold text-gray-500">Global Agency</span>
               </div>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};