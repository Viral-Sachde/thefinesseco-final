import React from 'react';
import { LockIcon, ShieldIcon, CheckIcon, BellIcon } from './Icons';

export const SecurityGrid: React.FC = () => {
  return (
    <div className="bg-[#E0DEFA] rounded-[2.5rem] p-8 md:p-12">
       <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2">Enterprise Grade</h2>
          <p className="text-gray-500 font-medium">Built for compliance and peace of mind.</p>
       </div>

       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-white/50 flex flex-col items-center text-center">
             <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4 text-green-600">
                <ShieldIcon className="w-6 h-6" />
             </div>
             <h4 className="font-bold mb-1">DDoS Protection</h4>
             <p className="text-xs text-gray-500">Global edge network defense.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-white/50 flex flex-col items-center text-center">
             <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-blue-600">
                <LockIcon className="w-6 h-6" />
             </div>
             <h4 className="font-bold mb-1">E2E Encryption</h4>
             <p className="text-xs text-gray-500">Data secure at rest & transit.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-white/50 flex flex-col items-center text-center">
             <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4 text-purple-600">
                <CheckIcon className="w-6 h-6" />
             </div>
             <h4 className="font-bold mb-1">SOC2 Compliant</h4>
             <p className="text-xs text-gray-500">Audit-ready infrastructure.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-white/50 flex flex-col items-center text-center">
             <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4 text-orange-600">
                <BellIcon className="w-6 h-6" />
             </div>
             <h4 className="font-bold mb-1">24/7 Monitoring</h4>
             <p className="text-xs text-gray-500">Real-time threat detection.</p>
          </div>

       </div>
    </div>
  );
};

