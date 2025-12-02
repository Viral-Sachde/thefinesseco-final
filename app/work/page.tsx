'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Header } from '../../components/Header'
import { Menu } from '../../components/Menu'
import { Footer } from '../../components/Footer'
import { ArrowUpRightIcon, CheckIcon } from '../../components/Icons'
import Link from 'next/link'

export const dynamic = 'force-static'

interface CaseStudy {
  title: string
  category: string
  image: string
  stats: string
  desc: string
  fullDesc: string
  services: string[]
  results: string[]
  color: string
  slug: string
}

const caseStudies: CaseStudy[] = [
  {
    title: "Lumina Skin",
    category: "E-Commerce",
    image: "bg-[#E0DEFA]",
    stats: "240% Revenue Inc.",
    desc: "Rebranding and Shopify headless transition for a luxury skincare line.",
    fullDesc: "Lumina Skin approached us to transform their digital presence from a basic Shopify store into a luxury e-commerce experience. We redesigned their brand identity, implemented a headless commerce architecture, and created a seamless shopping experience that reflects their premium positioning.",
    services: ["Brand Identity Design", "Headless E-commerce", "Shopify Plus Migration", "UI/UX Design", "Performance Optimization"],
    results: ["240% increase in revenue", "65% improvement in page load speed", "42% increase in conversion rate", "3x growth in mobile sales"],
    color: "bg-[#E0DEFA]",
    slug: "lumina-skin"
  },
  {
    title: "Flow State",
    category: "SaaS Product",
    image: "bg-[#E3F2FD]",
    stats: "10k+ Daily Users",
    desc: "Product design system and frontend architecture for productivity software.",
    fullDesc: "Flow State needed a complete redesign of their productivity platform to handle scale. We built a comprehensive design system, rebuilt their frontend with React and Next.js, and implemented real-time collaboration features that made their product stand out in a crowded market.",
    services: ["Product Design System", "React Development", "Next.js Architecture", "Real-time Features", "UI/UX Design"],
    results: ["10,000+ daily active users", "95% user satisfaction score", "50% reduction in bounce rate", "4.8/5 app store rating"],
    color: "bg-[#E3F2FD]",
    slug: "flow-state"
  },
  {
    title: "Urban Roots",
    category: "Non-Profit",
    image: "bg-[#F9FCD0]",
    stats: "$2M Raised",
    desc: "Donation platform optimization and visual storytelling for urban farming.",
    fullDesc: "Urban Roots needed a compelling digital presence to tell their story and drive donations. We created an emotional visual narrative, optimized their donation platform for conversions, and built a community-driven experience that connected donors with the impact of their contributions.",
    services: ["Brand Storytelling", "Donation Platform Design", "Visual Identity", "Content Strategy", "Conversion Optimization"],
    results: ["$2M raised in first year", "300% increase in monthly donations", "85% improvement in donor retention", "50k+ social media engagement"],
    color: "bg-[#F9FCD0]",
    slug: "urban-roots"
  },
  {
    title: "Velvet Capital",
    category: "FinTech",
    image: "bg-[#F4F4F4]",
    stats: "Secure & Fast",
    desc: "Web3 dashboard design and secure marketing site for crypto investment.",
    fullDesc: "Velvet Capital required a secure, trustworthy platform for their crypto investment services. We designed a sophisticated Web3 dashboard with advanced security features, created a marketing site that builds trust, and implemented real-time portfolio tracking that gives users complete transparency.",
    services: ["Web3 Dashboard Design", "Security Architecture", "Crypto Integration", "Brand Identity", "Marketing Website"],
    results: ["99.9% uptime achieved", "Zero security incidents", "40% increase in user signups", "4.9/5 trust rating"],
    color: "bg-[#F4F4F4]",
    slug: "velvet-capital"
  }
]

export default function WorkPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const router = useRouter()
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const categories = Array.from(new Set(caseStudies.map(cs => cs.category)))
  const filteredStudies = selectedCategory 
    ? caseStudies.filter(cs => cs.category === selectedCategory)
    : caseStudies

  return (
    <div className="min-h-screen bg-white text-eddie-dark font-sans">
      <Header onMenuClick={() => setIsMenuOpen(true)} />
      <Menu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />
      
      <main className="w-full flex flex-col relative">
        {/* Hero Section */}
        <div className="pt-32 md:pt-40 pb-16 md:pb-24 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <span className="bg-eddie-purple/20 text-eddie-dark px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide mb-6 inline-block">
              Our Portfolio
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tighter leading-[0.9] flex flex-wrap justify-center items-center gap-x-3 md:gap-x-6 gap-y-2">
              <span>View Our</span>
              <span className="bg-eddie-purple w-14 h-10 md:w-28 md:h-24 rounded-[1.5rem] md:rounded-[2.5rem] flex items-center justify-center text-eddie-dark mx-1 shadow-sm hover:animate-spin-slow">
                <span className="text-2xl md:text-4xl">🚀</span>
              </span>
              <span>Work</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-500 max-w-3xl mx-auto font-medium mb-12">
              A curated selection of projects where strategy meets aesthetic perfection. 
              Real results from real clients.
            </p>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${
                  selectedCategory === null
                    ? 'bg-eddie-dark text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                All Work
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${
                    selectedCategory === category
                      ? 'bg-eddie-dark text-white shadow-lg'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="max-w-7xl mx-auto px-4 pb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {filteredStudies.map((project, idx) => (
              <div
                key={idx}
                className="group cursor-pointer animate-fade-in"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                {/* Main Card */}
                <div className="h-full rounded-[2.5rem] bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden group-hover:scale-[1.02]">
                  
                  {/* Image/Visual Area */}
                  <div className={`w-full aspect-[4/3] ${project.image} relative overflow-hidden`}>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="bg-white rounded-full px-6 py-3 font-bold text-eddie-dark flex items-center gap-2 shadow-lg">
                        View Details <ArrowUpRightIcon className="w-4 h-4" />
                      </div>
                    </div>
                    
                    {/* Decorative Elements */}
                    <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-white/30 rounded-full blur-3xl"></div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-6 left-6">
                      <span className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-xs font-bold text-eddie-dark shadow-sm">
                        {project.category}
                      </span>
                    </div>

                    {/* Stats Badge */}
                    <div className="absolute top-6 right-6">
                      <span className="bg-eddie-dark text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg">
                        {project.stats}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 md:p-10">
                    <h3 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-600 font-medium mb-6 text-lg leading-relaxed">
                      {project.fullDesc}
                    </p>

                    {/* Services */}
                    <div className="mb-6">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
                        Services Delivered
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.services.map((service, i) => (
                          <span
                            key={i}
                            className="bg-gray-50 px-3 py-1.5 rounded-lg text-sm font-bold text-eddie-dark border border-gray-100"
                          >
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Results */}
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
                        Key Results
                      </h4>
                      <ul className="space-y-2">
                        {project.results.map((result, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <div className="mt-1 w-5 h-5 rounded-full bg-eddie-purple flex items-center justify-center shrink-0">
                              <CheckIcon className="w-3 h-3 text-white" />
                            </div>
                            <span className="font-bold text-eddie-dark">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-eddie-dark text-white py-20 md:py-32 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tighter">
              Ready to Create<br/>Something Iconic?
            </h2>
            <p className="text-xl text-gray-300 mb-10 font-medium max-w-2xl mx-auto">
              Let's discuss how we can turn your vision into a digital masterpiece that drives real results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-eddie-dark px-10 py-5 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-xl inline-flex items-center justify-center gap-2"
              >
                Start Your Project <ArrowUpRightIcon className="w-5 h-5" />
              </Link>
              <Link
                href="/services/how-it-works"
                className="bg-transparent border-2 border-white text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white/10 transition-colors inline-flex items-center justify-center gap-2"
              >
                How We Work
              </Link>
            </div>
          </div>
        </div>

        <Footer />
      </main>
    </div>
  )
}

