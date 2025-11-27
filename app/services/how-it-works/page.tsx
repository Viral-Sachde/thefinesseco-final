'use client'

import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Header } from '../../../components/Header'
import { Menu } from '../../../components/Menu'
import { Footer } from '../../../components/Footer'
import { HowWeWork } from '../../../components/HowWeWork'

export const dynamic = 'force-static'

export default function HowItWorksPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  // Title is set via metadata in layout.tsx

  const handleNavigate = (page: string) => {
    router.push(`/${page}`);
  };

  return (
    <div className="min-h-screen bg-white text-eddie-dark font-sans">
      <Header onMenuClick={() => setIsMenuOpen(true)} />
      <Menu 
        isOpen={isMenuOpen} 
        onClose={() => setIsMenuOpen(false)}
      />
      <main className="w-full flex flex-col relative">
        <HowWeWork onNavigate={handleNavigate} />
        <Footer />
      </main>
    </div>
  )
}

