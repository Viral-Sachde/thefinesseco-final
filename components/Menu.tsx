'use client'

import React from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { CloseIcon, ArrowUpRightIcon } from './Icons';

interface MenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Menu: React.FC<MenuProps> = ({ isOpen, onClose }) => {
  const router = useRouter();
  const pathname = usePathname();

  if (!isOpen) return null;

  const handleSectionClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    onClose();
    if (pathname !== '/') {
      router.push(`/#${id}`);
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const offset = 100;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        const offset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  const handleRouteClick = (path: string) => {
    onClose();
    router.push(path);
  };

  return (
    <div className="fixed inset-0 z-[60] flex justify-end items-start pointer-events-none">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/10 backdrop-blur-sm animate-fade-in pointer-events-auto" 
        onClick={onClose}
      ></div>

      {/* Menu Card */}
      <div 
        className="pointer-events-auto absolute top-4 right-4 md:right-6 md:top-6 w-[calc(100vw-32px)] md:w-full md:max-w-[440px] bg-[#EAE8E4] rounded-[2rem] p-5 md:p-8 flex flex-col shadow-2xl animate-scale-in-tr origin-top-right max-h-[calc(100vh-32px)] overflow-hidden transition-all duration-500 ease-out"
      >
        
        {/* Top Bar inside Menu */}
        <div className="flex justify-between items-center mb-6 md:mb-8 shrink-0">
          <button 
            onClick={onClose}
            className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors hover:rotate-90 duration-300 shadow-sm"
          >
            <CloseIcon className="w-5 h-5 text-eddie-dark" />
          </button>
          
          <button 
            onClick={() => handleRouteClick('/contact')}
            className="bg-eddie-dark text-white px-5 py-2.5 md:px-6 md:py-3 rounded-full font-bold text-xs md:text-sm hover:scale-105 transition-transform duration-200"
          >
            Book a Call
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto no-scrollbar pr-2 min-h-0">
          {/* Explore Section */}
          <div className="mb-6 md:mb-10">
            <h4 className="text-[#9CA3AF] text-lg md:text-xl font-medium mb-4 md:mb-6">Explore</h4>
            <ul className="space-y-2 md:space-y-3">
              {[
                { label: 'How We Work', value: '/services/how-it-works', type: 'route' },
                { label: 'Process', value: 'process', type: 'section' },
                { label: 'Vision', value: 'philosophy', type: 'section' }
              ].map((item) => (
                <li key={item.label} className="group cursor-pointer flex items-center justify-between py-1">
                  {item.type === 'route' ? (
                    <>
                      <button onClick={() => handleRouteClick(item.value)} className="text-2xl md:text-3xl font-bold text-eddie-dark group-hover:text-gray-600 transition-colors tracking-tight flex-1 text-left">
                        {item.label}
                      </button>
                      <ArrowUpRightIcon className="w-5 h-5 md:w-6 md:h-6 opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </>
                  ) : (
                    <>
                      <a href={`/#${item.value}`} onClick={(e) => handleSectionClick(e, item.value)} className="text-2xl md:text-3xl font-bold text-eddie-dark group-hover:text-gray-600 transition-colors tracking-tight flex-1 text-left">
                        {item.label}
                      </a>
                      <ArrowUpRightIcon className="w-5 h-5 md:w-6 md:h-6 opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Services Section */}
          <div className="mb-6 md:mb-10">
            <h4 className="text-[#9CA3AF] text-lg md:text-xl font-medium mb-4 md:mb-6">Services</h4>
            <ul className="space-y-2 md:space-y-3">
              {[
                  { label: 'Web Development', value: '/services/web-development', type: 'route' },
                  { label: 'App & Software', value: '/services/app-software', type: 'route' },
                  { label: 'Branding & Marketing', value: '/services/branding-marketing', type: 'route' }
              ].map((item) => (
                <li key={item.label} className="group cursor-pointer py-1">
                  {item.type === 'route' ? (
                    <button onClick={() => handleRouteClick(item.value)} className="text-2xl md:text-3xl font-bold text-eddie-dark group-hover:text-gray-600 transition-colors tracking-tight text-left block w-full">
                    {item.label}
                  </button>
                  ) : (
                    <a href={`/#${item.value}`} onClick={(e) => handleSectionClick(e, item.value)} className="text-2xl md:text-3xl font-bold text-eddie-dark group-hover:text-gray-600 transition-colors tracking-tight text-left block w-full">
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Agency Section */}
          <div className="mb-6 md:mb-10">
            <h4 className="text-[#9CA3AF] text-lg md:text-xl font-medium mb-4 md:mb-6">Agency</h4>
            <ul className="space-y-2 md:space-y-3">
              {[
                  { label: 'Careers', value: 'careers', type: 'section' },
                  { label: 'Contact', value: '/contact', type: 'route' },
                  { label: 'FAQ', value: 'faq', type: 'section' }
              ].map((item) => (
                <li key={item.label} className="group cursor-pointer py-1">
                  {item.type === 'route' ? (
                    <button onClick={() => handleRouteClick(item.value)} className="text-2xl md:text-3xl font-bold text-eddie-dark group-hover:text-gray-600 transition-colors tracking-tight text-left block w-full">
                    {item.label}
                  </button>
                  ) : (
                    <a href={`/#${item.value}`} onClick={(e) => handleSectionClick(e, item.value)} className="text-2xl md:text-3xl font-bold text-eddie-dark group-hover:text-gray-600 transition-colors tracking-tight text-left block w-full">
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="mt-auto pt-4 md:pt-6 border-t border-gray-300/30 shrink-0">
          <div className="flex gap-3 items-center">
            <a 
              href="mailto:hello@thefinesse.co"
              className="flex-1 bg-[#DCDCDC]/50 hover:bg-[#DCDCDC] text-eddie-dark font-bold py-3 md:py-4 rounded-2xl transition-colors text-sm md:text-base text-center block"
            >
              hello@thefinesse.co
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};