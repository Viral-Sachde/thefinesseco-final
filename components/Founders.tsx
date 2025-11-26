import React from 'react';
import { GlobeIcon, RocketIcon, BoltIcon, GraphIcon, CoffeeIcon, FileIcon } from './Icons';

export const Founders: React.FC = () => {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 mb-24">
      <div className="mb-16 text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-4 tracking-tighter">No Suits. Just Skills.</h2>
        <p className="text-xl text-gray-500">We don't do corporate speak. We just ship greatness.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 items-start">
        
        {/* Founder Card 1: Viral Sachde */}
        <div className="relative group hover:rotate-1 transition-transform duration-300 rounded-[2.5rem] overflow-hidden shadow-lg h-[500px] border border-gray-100 bg-[#1A1A1A]">
           
           {/* Immersive Background Gradient */}
           <div className="absolute inset-0 bg-gradient-to-br from-[#2A2A2A] to-[#121212] flex items-center justify-center">
             <div className="w-64 h-64 bg-white/5 rounded-full blur-[80px]"></div>
           </div>

           {/* Gradient Overlay for Text Visibility */}
           <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

           <div className="absolute bottom-0 left-0 right-0 p-8 text-white z-10">
              <div className="flex justify-between items-end mb-6">
                 <div>
                    <h3 className="text-3xl font-bold leading-none mb-2 text-white">Viral Sachde</h3>
                    <p className="text-sm font-bold uppercase tracking-widest opacity-60 text-gray-300">Founder</p>
                 </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-4">
                 <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                       <GlobeIcon className="w-4 h-4 text-white" />
                    </div>
                    <div>
                        <p className="text-[10px] font-bold uppercase tracking-wide opacity-50 mb-0.5">Global Partners</p>
                        <p className="text-lg font-bold">40+</p>
                    </div>
                 </div>
                 <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                       <GraphIcon className="w-4 h-4 text-white" />
                    </div>
                    <div>
                        <p className="text-[10px] font-bold uppercase tracking-wide opacity-50 mb-0.5">Superpower</p>
                        <p className="text-lg font-bold text-white">Scale</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>

        {/* Founder Card 2: Bhautik Prajapati */}
        <div className="relative group hover:-rotate-1 transition-transform duration-300 rounded-[2.5rem] overflow-hidden shadow-lg h-[500px] border border-gray-100 bg-[#1A1A1A]">
           
            {/* Immersive Background Gradient */}
           <div className="absolute inset-0 bg-gradient-to-br from-[#202020] to-[#0A0A0A] flex items-center justify-center">
             <div className="w-64 h-64 bg-white/5 rounded-full blur-[80px]"></div>
           </div>

           {/* Gradient Overlay */}
           <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

           <div className="absolute bottom-0 left-0 right-0 p-8 text-white z-10">
              <div className="flex justify-between items-end mb-6">
                 <div>
                    <h3 className="text-3xl font-bold leading-none mb-2 text-white">Bhautik Prajapati</h3>
                    <p className="text-sm font-bold uppercase tracking-widest opacity-60 text-gray-300">Co-Founder</p>
                 </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-4">
                 <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                       <RocketIcon className="w-4 h-4 text-white" />
                    </div>
                    <div>
                        <p className="text-[10px] font-bold uppercase tracking-wide opacity-50 mb-0.5">Products Shipped</p>
                        <p className="text-lg font-bold">80+</p>
                    </div>
                 </div>
                 <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                        <BoltIcon className="w-4 h-4 text-white" />
                    </div>
                    <div>
                        <p className="text-[10px] font-bold uppercase tracking-wide opacity-50 mb-0.5">Superpower</p>
                        <p className="text-lg font-bold text-white">Systems</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>

      </div>
    </div>
  );
};