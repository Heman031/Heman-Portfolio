/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Sora', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        primary: '#6C63FF',
        secondary: '#3EC6E0',
        dark: {
          900: '#080B14',
          800: '#0D1022',
          700: '#131729',
          600: '#1A1F35',
          500: '#242A45',
        },
        light: {
          100: '#F8F9FF',
          200: '#EEF0FF',
          300: '#E0E4FF',
        },
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #6C63FF, #3EC6E0)',
        'gradient-secondary': 'linear-gradient(135deg, #3EC6E0, #6C63FF)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delay': 'float 8s ease-in-out 2s infinite',
        'float-slow': 'float 10s ease-in-out 4s infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'bounce-slow': 'bounce 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
