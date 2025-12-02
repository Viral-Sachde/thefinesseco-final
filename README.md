# The Finesse Co. - Official Website

> **Make the Internet Obsessed.**  
> We turn clicks into cults. We engineer obsession.

A modern, high-performance website built with Next.js 15, React 19, and Tailwind CSS. This is the official website for The Finesse Co., a digital agency specializing in web development, app development, and branding services.

## 🚀 Features

### Core Services
- **Web Development** - Custom websites built with React, Next.js, and modern web technologies
- **App & Software** - SaaS platforms and digital products engineered for scale
- **Branding & Marketing** - Visual identity systems and data-driven growth strategies
- **How We Work** - Transparent 4-week sprint process with obsessive communication

### Key Pages
- **Homepage** - Hero section, services overview, case studies, pricing, and more
- **Service Pages** - Detailed pages for each service offering
- **Work Portfolio** (`/work`) - Showcase of successful projects and case studies
- **Contact** - Get in touch with the team
- **How We Work** - Process transparency and methodology

### Technical Highlights
- ⚡ **Static Site Generation** - Fully static export for optimal performance
- 🎨 **Modern Design System** - Custom color palette and typography
- 📱 **Fully Responsive** - Optimized for all device sizes
- 🔍 **SEO Optimized** - Comprehensive metadata, structured data, and sitemap
- ⚡ **Performance First** - Lighthouse scores >95, sub-second load times
- 🎭 **Interactive UI** - Smooth animations, hover effects, and micro-interactions

## 🛠️ Tech Stack

- **Framework:** Next.js 15 (App Router)
- **UI Library:** React 19
- **Styling:** Tailwind CSS 3.4
- **Language:** TypeScript 5.8
- **Deployment:** Vercel (Static Export)
- **Build Tool:** Next.js built-in bundler

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/YOUR_REPO.git

# Navigate to project directory
cd thefinesseco

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🏗️ Project Structure

```
thefinesseco/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Homepage
│   ├── layout.tsx         # Root layout with SEO
│   ├── contact/           # Contact page
│   ├── work/              # Portfolio/Work page
│   ├── services/          # Service pages
│   │   ├── web-development/
│   │   ├── app-software/
│   │   ├── branding-marketing/
│   │   └── how-it-works/
│   ├── terms/             # Terms of Service
│   ├── privacy/           # Privacy Policy
│   ├── sitemap.ts         # Dynamic sitemap generation
│   └── robots.ts          # Robots.txt generation
├── components/            # React components
│   ├── Header.tsx        # Site header/navigation
│   ├── Footer.tsx         # Site footer
│   ├── HeroCard.tsx      # Homepage hero section
│   ├── Services.tsx      # Services grid
│   ├── CaseStudies.tsx   # Portfolio preview
│   ├── Pricing.tsx       # Pricing tiers
│   └── ...               # Many more components
├── public/               # Static assets
│   ├── logo/            # Logo files
│   └── *.jpg            # Images
├── next.config.js        # Next.js configuration
├── tailwind.config.js    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
└── vercel.json           # Vercel deployment config
```

## 🎨 Design System

### Colors
- **Primary Purple:** `#B0A9F8` (eddie-purple)
- **Lime Green:** `#D4F23E` (eddie-lime)
- **Dark:** `#0F0F0F` (eddie-dark)
- **Pink:** `#FFD6E0` (eddie-pink)
- **Mint:** `#C4FAF8` (eddie-mint)
- **Blue:** `#A5D8F3` (eddie-blue)

### Typography
- **Font Family:** Inter (Google Fonts)
- **Headings:** Bold, tight tracking
- **Body:** Medium weight, relaxed leading

### Design Principles
- Rounded corners (`rounded-[2rem]`, `rounded-[2.5rem]`)
- Generous spacing and padding
- Smooth animations and transitions
- Interactive hover effects
- Clean, modern aesthetic

## 📄 Pages & Routes

- `/` - Homepage
- `/contact` - Contact page
- `/work` - Portfolio/Case Studies
- `/services/web-development` - Web Development service
- `/services/app-software` - App & Software service
- `/services/branding-marketing` - Branding & Marketing service
- `/services/how-it-works` - Process page
- `/terms` - Terms of Service
- `/privacy` - Privacy Policy

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file for local development:
```env
GEMINI_API_KEY=your_api_key_here
```

### Build Configuration
The site is configured for static export (`output: 'export'` in `next.config.js`), making it perfect for deployment on Vercel, Netlify, or any static hosting service.

### Vercel Deployment
The `vercel.json` file includes:
- Output directory configuration
- URL rewrites for clean URLs
- Static file serving

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Import project in Vercel
3. Vercel will auto-detect Next.js and deploy

### Manual Deployment
```bash
npm run build
# Deploy the 'out' directory to your hosting service
```

## 📊 Performance

- **Lighthouse Score:** >95 across all metrics
- **First Contentful Paint:** <1s
- **Time to Interactive:** <2s
- **SEO Score:** 100/100

## 🎯 SEO Features

- Comprehensive metadata for all pages
- Structured data (JSON-LD) for:
  - Organization schema
  - Service schemas
  - Portfolio/CollectionPage schema
- Dynamic sitemap generation
- Robots.txt configuration
- OpenGraph and Twitter cards
- Canonical URLs

## 🤝 Contributing

This is a private project for The Finesse Co. If you're part of the team:

1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## 📝 License

Copyright © 2024 The Finesse Co. All rights reserved.

## 📧 Contact

- **Email:** hello@thefinesse.co
- **Website:** https://thefinesse.co
- **GitHub:** [Your GitHub Profile]

## 🙏 Acknowledgments

Built with ❤️ by The Finesse Co. team.

---

**Made with Next.js, React, and Tailwind CSS**
