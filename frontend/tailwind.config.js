/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Sora', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        primary: '#6C63FF',
        secondary: '#3EC6E0',
        accent: '#a855f7',
        dark: {
          950: '#04060E',
          900: '#080B14',
          800: '#0D1022',
          700: '#131729',
          600: '#1A1F35',
          500: '#242A45',
          400: '#2E3550',
        },
        light: {
          50:  '#FFFFFF',
          100: '#F8F9FF',
          200: '#EEF0FF',
          300: '#E0E4FF',
          400: '#C8CEEE',
        },
      },
      backgroundImage: {
        'gradient-primary':   'linear-gradient(135deg, #6C63FF, #3EC6E0)',
        'gradient-secondary': 'linear-gradient(135deg, #3EC6E0, #6C63FF)',
        'gradient-radial':    'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':     'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'mesh-1': 'radial-gradient(at 40% 20%, #6C63FF22 0px, transparent 50%), radial-gradient(at 80% 0%,  #3EC6E022 0px, transparent 50%), radial-gradient(at 0%  50%, #a855f722 0px, transparent 50%)',
        'mesh-2': 'radial-gradient(at 60% 80%, #3EC6E022 0px, transparent 50%), radial-gradient(at 20% 100%,#6C63FF22 0px, transparent 50%)',
      },
      boxShadow: {
        'glow-primary':   '0 0 20px rgba(108, 99, 255, 0.35)',
        'glow-secondary': '0 0 20px rgba(62, 198, 224, 0.35)',
        'glow-accent':    '0 0 20px rgba(168, 85, 247, 0.35)',
        'glow-sm':        '0 0 10px rgba(108, 99, 255, 0.2)',
        'glow-lg':        '0 0 40px rgba(108, 99, 255, 0.4)',
        'card-dark':      '0 8px 32px rgba(0,0,0,0.4)',
        'card-light':     '0 4px 24px rgba(0,0,0,0.08)',
        'inner-glow':     'inset 0 1px 0 rgba(255,255,255,0.08)',
      },
      animation: {
        'float':            'float 6s ease-in-out infinite',
        'float-delay':      'float 8s ease-in-out 2s infinite',
        'float-slow':       'float 10s ease-in-out 4s infinite',
        'pulse-slow':       'pulse 4s ease-in-out infinite',
        'spin-slow':        'spin 20s linear infinite',
        'bounce-slow':      'bounce 3s ease-in-out infinite',
        'glow-pulse':       'glow-pulse 3s ease-in-out infinite',
        'gradient-shift':   'gradient-shift 6s ease-in-out infinite',
        'shimmer':          'shimmer 2.5s linear infinite',
        'slide-in-down':    'slide-in-down 0.6s ease-out',
        'fade-up':          'fade-up 0.6s ease-out',
        'count-up':         'count-up 1.5s ease-out',
        'progress-fill':    'progress-fill 1.2s ease-out',
        'orbit':            'orbit 8s linear infinite',
        'blob':             'blob 10s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%':       { transform: 'translateY(-20px) rotate(3deg)' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%':       { opacity: '0.7', transform: 'scale(1.05)' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%':       { backgroundPosition: '100% 50%' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition:  '200% center' },
        },
        'slide-in-down': {
          from: { opacity: '0', transform: 'translateY(-30px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        'progress-fill': {
          from: { width: '0%' },
          to:   { width: 'var(--progress-width, 80%)' },
        },
        orbit: {
          from: { transform: 'rotate(0deg) translateX(60px) rotate(0deg)' },
          to:   { transform: 'rotate(360deg) translateX(60px) rotate(-360deg)' },
        },
        blob: {
          '0%, 100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
          '50%':       { borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      transitionTimingFunction: {
        'spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
    },
  },
  plugins: [],
}
