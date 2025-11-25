import React from 'react';
import { CloseIcon, ArrowUpRightIcon } from './Icons';

interface MenuProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (page: string) => void;
}

export const Menu: React.FC<MenuProps> = ({ isOpen, onClose, onNavigate }) => {
  if (!isOpen) return null;

  const handleLinkClick = (page: string) => {
    onNavigate(page);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[60] flex justify-end items-start p-4 md:p-6">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/10 backdrop-blur-sm animate-fade-in" 
        onClick={onClose}
      ></div>

      {/* Menu Card */}
      <div 
        className="relative w-full max-w-[440px] bg-[#EAE8E4] rounded-[2rem] p-6 md:p-8 flex flex-col shadow-2xl animate-scale-in-tr origin-top-right max-h-[calc(100vh-48px)] overflow-hidden"
      >
        
        {/* Top Bar inside Menu */}
        <div className="flex justify-between items-center mb-8">
          <button 
            onClick={onClose}
            className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors hover:rotate-90 duration-300 shadow-sm"
          >
            <CloseIcon className="w-5 h-5 text-eddie-dark" />
          </button>
          
          <button 
            onClick={() => handleLinkClick('pricing')}
            className="bg-eddie-dark text-white px-6 py-3 rounded-full font-bold text-sm hover:scale-105 transition-transform duration-200"
          >
            Start Project
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto no-scrollbar pr-2">
          {/* Explore Section */}
          <div className="mb-10">
            <h4 className="text-[#9CA3AF] text-xl font-medium mb-6">Explore</h4>
            <ul className="space-y-3">
              {[
                { label: 'Services', value: 'services' },
                { label: 'Case Studies', value: 'cases' },
                { label: 'Pricing', value: 'pricing' },
                { label: 'FAQ', value: 'faq' }
              ].map((item) => (
                <li key={item.label} className="group cursor-pointer flex items-center justify-between py-1">
                  <button onClick={() => handleLinkClick(item.value)} className="text-3xl font-bold text-eddie-dark group-hover:text-gray-600 transition-colors tracking-tight flex-1 text-left">
                    {item.label}
                  </button>
                  <ArrowUpRightIcon className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </li>
              ))}
            </ul>
          </div>

          {/* Agency Section */}
          <div className="mb-10">
            <h4 className="text-[#9CA3AF] text-xl font-medium mb-6">Agency</h4>
            <ul className="space-y-3">
              {[
                  { label: 'About Us', value: 'agency' },
                  { label: 'Careers', value: 'careers' }
              ].map((item) => (
                <li key={item.label} className="group cursor-pointer py-1">
                  <button onClick={() => handleLinkClick(item.value)} className="text-3xl font-bold text-eddie-dark group-hover:text-gray-600 transition-colors tracking-tight text-left block w-full">
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="mt-auto pt-6 border-t border-gray-300/30">
          <div className="flex gap-3 items-center">
            <button className="flex-1 bg-[#DCDCDC]/50 hover:bg-[#DCDCDC] text-eddie-dark font-bold py-4 rounded-2xl transition-colors">
              hello@finesse.co
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};