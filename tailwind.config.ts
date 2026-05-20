import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#FFB800',
          light: '#FFD04D',
          dark: '#CC9200',
          muted: '#FFB80026',
        },
        jet: {
          DEFAULT: '#0A0A0A',
          100: '#111111',
          200: '#1A1A1A',
          300: '#262626',
          400: '#333333',
        },
      },
      fontFamily: {
        display: ['var(--font-bebas)', 'Impact', 'sans-serif'],
        body: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-2xl': ['clamp(4rem, 10vw, 8rem)', { lineHeight: '0.95', letterSpacing: '0.02em' }],
        'display-xl': ['clamp(3rem, 7vw, 6rem)', { lineHeight: '1', letterSpacing: '0.02em' }],
        'display-lg': ['clamp(2rem, 5vw, 4rem)', { lineHeight: '1.05', letterSpacing: '0.02em' }],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(to bottom, rgba(10,10,10,0) 0%, rgba(10,10,10,0.7) 50%, rgba(10,10,10,1) 100%)',
        'gold-radial': 'radial-gradient(ellipse at top, rgba(255,184,0,0.12) 0%, transparent 70%)',
      },
      animation: {
        marquee: 'marquee 35s linear infinite',
        'pulse-gold': 'pulseGold 2s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-25%)' },
        },
        pulseGold: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(255,184,0,0.25)' },
          '50%': { boxShadow: '0 0 0 12px rgba(255,184,0,0)' },
        },
      },
      boxShadow: {
        'gold-sm': '0 0 20px rgba(255,184,0,0.2)',
        'gold-md': '0 0 40px rgba(255,184,0,0.3)',
        'gold-lg': '0 0 80px rgba(255,184,0,0.35)',
      },
      borderRadius: {
        card: '12px',
      },
    },
  },
  plugins: [],
}

export default config
