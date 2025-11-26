'use client'

import React, { useState } from 'react';
import { Header } from '../../components/Header';
import { Menu } from '../../components/Menu';
import { Terms } from '../../components/Terms';
import { Footer } from '../../components/Footer';

export default function TermsPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-eddie-dark font-sans selection:bg-eddie-purple-light selection:text-eddie-dark overflow-x-hidden">
      <Header onMenuClick={() => setIsMenuOpen(true)} />
      <Menu 
        isOpen={isMenuOpen} 
        onClose={() => setIsMenuOpen(false)}
      />
      <main className="w-full flex flex-col relative">
        <Terms />
        <div>
          <Footer />
        </div>
      </main>
    </div>
  );
}

