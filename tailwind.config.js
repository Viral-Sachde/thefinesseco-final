/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        'eddie-lime': '#D4F23E',
        'eddie-purple': '#B0A9F8',
        'eddie-purple-light': '#E0DEFA',
        'eddie-blue': '#A5D8F3',
        'eddie-blue-light': '#E3F2FD',
        'eddie-beige': '#EAE8E4',
        'eddie-dark': '#0F0F0F',
        'eddie-gray': '#F4F4F4',
        'eddie-card-gray': '#DCDCDC',
        'eddie-pink': '#FFD6E0',
        'eddie-mint': '#C4FAF8',
        'eddie-cream': '#FDFBF7',
        'eddie-lavender': '#D8B4FE',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'float': 'float 6s ease-in-out infinite',
        'scale-in-tr': 'scaleInTr 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'spin-slow': 'spinRounds 2s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'gravity': 'gravity 0.6s ease-in forwards',
        'drawPath': 'drawPath 2s ease-out forwards',
        'drawStroke': 'drawStroke 2s ease-out forwards',
        'fadeInScale': 'fadeInScale 0.5s ease-out forwards',
        'slideInBounce': 'slideInBounce 0.8s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(40px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        scaleInTr: {
          '0%': { transform: 'scale(0.8) translate(20px, -20px)', opacity: '0' },
          '100%': { transform: 'scale(1) translate(0, 0)', opacity: '1' },
        },
        spinRounds: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(720deg)' },
        },
        gravity: {
          '0%': { transform: 'translateY(0) rotate(0deg)', opacity: '1' },
          '50%': { transform: 'translateY(100px) rotate(5deg)', opacity: '0.5' },
          '100%': { transform: 'translateY(200px) rotate(10deg)', opacity: '0' },
        },
        drawPath: {
          '0%': { opacity: '0', transform: 'scaleY(0)' },
          '100%': { opacity: '1', transform: 'scaleY(1)' },
        },
        drawStroke: {
          '0%': { strokeDashoffset: '200', opacity: '0' },
          '100%': { strokeDashoffset: '0', opacity: '1' },
        },
        fadeInScale: {
          '0%': { opacity: '0', transform: 'scale(0)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        slideInBounce: {
          '0%': { opacity: '0', transform: 'translateX(50%) translateY(-50%) scale(0)' },
          '50%': { opacity: '1', transform: 'translateX(50%) translateY(-50%) scale(1.2)' },
          '100%': { opacity: '1', transform: 'translateX(50%) translateY(-50%) scale(1)' },
        }
      }
    },
  },
  plugins: [],
}

