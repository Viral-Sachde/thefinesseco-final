'use client'

import React from 'react';
import Image from 'next/image';
import { RocketIcon, CodeIcon } from './Icons';

export const Founders: React.FC = () => {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 mb-24">
      <div className="mb-16 text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-4 tracking-tighter">No Suits. Just Skills.</h2>
        <p className="text-xl text-gray-500">We don't do corporate speak. We just ship greatness.</p>
      </div>

      {/* Grid - Cards stand together (equal height, side by side) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
        
        {/* Founder Card 1: Viral Sachde */}
        <div className="relative group hover:rotate-1 transition-transform duration-300 rounded-[2.5rem] overflow-hidden shadow-lg min-h-[600px] border border-gray-100 bg-[#1A1A1A]">
           
           {/* Founder Image */}
           <div className="absolute inset-0">
             <Image
               src="/v.jpg"
               alt="Viral Sachde"
               fill
               className="object-cover object-center"
               unoptimized
             />
           </div>

           {/* Gradient Overlay for Text Visibility */}
           <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>

           <div className="absolute bottom-0 left-0 right-0 p-8 text-white z-10">
              <div className="flex justify-between items-end mb-6">
                 <div>
                    <h3 className="text-3xl font-bold leading-none mb-2 text-white">Viral Sachde</h3>
                    <p className="text-sm font-bold uppercase tracking-widest opacity-60 text-gray-300">Founder</p>
                 </div>
              </div>
              
              <div className="border-t border-white/10 pt-4">
                 <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                       <RocketIcon className="w-4 h-4 text-white" />
                    </div>
                    <div>
                        <p className="text-[10px] font-bold uppercase tracking-wide opacity-50 mb-0.5">Superpower</p>
                        <p className="text-lg font-bold text-white">Scaling like crazy 🔥</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>

        {/* Founder Card 2: Bhautik Prajapati */}
        <div className="relative group hover:-rotate-1 transition-transform duration-300 rounded-[2.5rem] overflow-hidden shadow-lg min-h-[600px] border border-gray-100 bg-[#1A1A1A]">
           
           {/* Founder Image */}
           <div className="absolute inset-0">
             <Image
               src="/b.jpeg"
               alt="Bhautik Prajapati"
               fill
               className="object-cover object-center"
               unoptimized
             />
           </div>

           {/* Gradient Overlay */}
           <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>

           <div className="absolute bottom-0 left-0 right-0 p-8 text-white z-10">
              <div className="flex justify-between items-end mb-6">
                 <div>
                    <h3 className="text-3xl font-bold leading-none mb-2 text-white">Bhautik Prajapati</h3>
                    <p className="text-sm font-bold uppercase tracking-widest opacity-60 text-gray-300">Co-Founder</p>
                 </div>
              </div>
              
              <div className="border-t border-white/10 pt-4">
                 <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                       <CodeIcon className="w-4 h-4 text-white" />
                    </div>
                    <div>
                        <p className="text-[10px] font-bold uppercase tracking-wide opacity-50 mb-0.5">Superpower</p>
                        <p className="text-lg font-bold text-white">Building systems that hit different ⚡</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>

      </div>

    </div>
  );
};