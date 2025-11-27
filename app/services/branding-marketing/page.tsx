'use client'

import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Header } from '../../../components/Header'
import { Menu } from '../../../components/Menu'
import { Footer } from '../../../components/Footer'
import { Branding } from '../../../components/Branding'

export const dynamic = 'force-static'

export default function BrandingMarketingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

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
        <Branding onNavigate={handleNavigate} />
        <Footer />
      </main>
    </div>
  )
}

