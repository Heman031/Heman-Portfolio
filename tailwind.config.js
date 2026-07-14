/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    /* ─── Spatial UI Design Token Extensions ─────────────────── */
    extend: {

      /* ── Fonts ──────────────────────────────────────────────── */
      fontFamily: {
        sans:    ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
        mono:    ['JetBrains Mono', 'Fira Code', 'monospace'],
      },

      /* ── Colors (mapped to CSS vars) ────────────────────────── */
      colors: {
        /* Backgrounds */
        'space-void':     'var(--color-space-void)',
        'space-deep':     'var(--color-space-deep)',
        'space-surface':  'var(--color-space-surface)',
        'space-elevated': 'var(--color-space-elevated)',
        'space-panel':    'var(--color-space-panel)',
        /* Accents */
        'blue':           'var(--color-blue)',
        'blue-light':     'var(--color-blue-light)',
        'cyan':           'var(--color-cyan)',
        'cyan-light':     'var(--color-cyan-light)',
        'purple':         'var(--color-purple)',
        'purple-light':   'var(--color-purple-light)',
        'neon':           'var(--color-neon)',
        'amber':          'var(--color-amber)',
        'rose':           'var(--color-rose)',
        /* Text */
        'text-primary':   'var(--color-text-primary)',
        'text-secondary': 'var(--color-text-secondary)',
        'text-muted':     'var(--color-text-muted)',
        'text-faint':     'var(--color-text-faint)',
      },

      /* ── Spacing Scale (spatial spacing tokens) ─────────────── */
      spacing: {
        'xs':  'var(--space-xs)',
        'sm':  'var(--space-sm)',
        'md':  'var(--space-md)',
        'lg':  'var(--space-lg)',
        'xl':  'var(--space-xl)',
        '2xl': 'var(--space-2xl)',
        '3xl': 'var(--space-3xl)',
        '4xl': 'var(--space-4xl)',
      },

      /* ── Border Radius ──────────────────────────────────────── */
      borderRadius: {
        'xs':  'var(--radius-xs)',
        'sm':  'var(--radius-sm)',
        'md':  'var(--radius-md)',
        'lg':  'var(--radius-lg)',
        'xl':  'var(--radius-xl)',
        '2xl': 'var(--radius-2xl)',
        '3xl': 'var(--radius-3xl)',
        '4xl': 'var(--radius-4xl)',
      },

      /* ── Custom Box Shadows / Glows ──────────────────────────── */
      boxShadow: {
        'depth-1':        'var(--shadow-depth-1)',
        'depth-2':        'var(--shadow-depth-2)',
        'depth-3':        'var(--shadow-depth-3)',
        'float':          'var(--shadow-float)',
        'modal':          'var(--shadow-modal)',
        'glow-blue':      'var(--glow-blue)',
        'glow-cyan':      'var(--glow-cyan)',
        'glow-purple':    'var(--glow-purple)',
        'glow-neon':      'var(--glow-neon)',
        'glow-amber':     'var(--glow-amber)',
        'inner-shine':    'inset 0 1px 0 rgba(255,255,255,0.07)',
      },

      /* ── Background Images ──────────────────────────────────── */
      backgroundImage: {
        'grad-primary':   'var(--grad-primary)',
        'grad-cyan':      'var(--grad-cyan)',
        'grad-purple':    'var(--grad-purple)',
        'grad-neon':      'var(--grad-neon)',
        'grad-warm':      'var(--grad-warm)',
        'grad-surface':   'var(--grad-surface)',
        'mesh-hero':      'var(--mesh-hero)',
        'mesh-alt':       'var(--mesh-alt)',
        'dot-grid':       'radial-gradient(circle, rgba(59,130,246,0.18) 1px, transparent 1px)',
      },

      /* ── Backdrop Blur ──────────────────────────────────────── */
      backdropBlur: {
        'xs':  '4px',
        'sm':  '8px',
        'md':  '16px',
        'lg':  '24px',
        'xl':  '40px',
        '2xl': '60px',
      },

      /* ── Z-Index Layers ─────────────────────────────────────── */
      zIndex: {
        'below':      '-1',
        'base':       '0',
        'raised':     '10',
        'dropdown':   '20',
        'sticky':     '30',
        'overlay':    '40',
        'modal':      '50',
        'navbar':     '60',
        'toast':      '70',
        'cursor':     '80',
        'top':        '9999',
      },

      /* ── Animation Durations ─────────────────────────────────── */
      transitionDuration: {
        '75':   '75ms',
        '150':  '150ms',
        '250':  '250ms',
        '350':  '350ms',
        '500':  '500ms',
        '700':  '700ms',
        '1000': '1000ms',
      },

      /* ── Easing Curves ──────────────────────────────────────── */
      transitionTimingFunction: {
        'out-expo':  'cubic-bezier(0.16, 1, 0.3, 1)',
        'spring':    'cubic-bezier(0.34, 1.56, 0.64, 1)',
        'in-back':   'cubic-bezier(0.36, 0, 0.66, -0.56)',
        'out-back':  'cubic-bezier(0.34, 1.56, 0.64, 1)',
        'smooth':    'cubic-bezier(0.4, 0, 0.2, 1)',
      },

      /* ── Custom Animations ──────────────────────────────────── */
      animation: {
        'float':           'float-up 6s ease-in-out infinite',
        'float-slow':      'float-up 9s ease-in-out infinite',
        'float-drift':     'float-drift 8s ease-in-out infinite',
        'fade-in':         'fade-in 0.5s ease forwards',
        'slide-up':        'slide-up 0.7s cubic-bezier(0.16,1,0.3,1) forwards',
        'scale-in':        'scale-in 0.5s cubic-bezier(0.34,1.56,0.64,1) forwards',
        'spin-slow':       'spin-slow 14s linear infinite',
        'shimmer':         'shimmer-flow 3.5s linear infinite',
        'pulse-ring':      'pulse-ring 2.2s ease-in-out infinite',
        'glow-throb':      'glow-throb 3s ease-in-out infinite',
        'blob-morph':      'blob-morph 14s ease-in-out infinite',
        'neon-pulse':      'neon-pulse 2.5s ease-in-out infinite',
        'slide-nav':       'slide-in-down 0.5s cubic-bezier(0.16,1,0.3,1) forwards',
        'gradient-shift':  'gradient-shift 6s ease-in-out infinite',
        'dot-travel':      'dot-travel 4s linear infinite',
      },

      keyframes: {
        'float-up': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':       { transform: 'translateY(-14px)' },
        },
        'float-drift': {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px) rotate(0deg)' },
          '33%':       { transform: 'translateY(-18px) translateX(8px) rotate(2deg)' },
          '66%':       { transform: 'translateY(-8px) translateX(-5px) rotate(-1deg)' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
        'slide-up': {
          from: { opacity: '0', transform: 'translateY(40px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        'scale-in': {
          from: { opacity: '0', transform: 'scale(0.82)' },
          to:   { opacity: '1', transform: 'scale(1)' },
        },
        'spin-slow': {
          from: { transform: 'rotate(0deg)' },
          to:   { transform: 'rotate(360deg)' },
        },
        'shimmer-flow': {
          '0%':   { backgroundPosition: '-300% center' },
          '100%': { backgroundPosition:  '300% center' },
        },
        'pulse-ring': {
          '0%, 100%': { opacity: '0.25', transform: 'scale(1)' },
          '50%':       { opacity: '0.75', transform: 'scale(1.35)' },
        },
        'glow-throb': {
          '0%, 100%': { opacity: '0.5' },
          '50%':       { opacity: '1' },
        },
        'blob-morph': {
          '0%, 100%': { borderRadius: '58% 42% 32% 68% / 58% 32% 68% 42%' },
          '50%':       { borderRadius: '32% 58% 68% 42% / 52% 58% 32% 58%' },
        },
        'neon-pulse': {
          '0%, 100%': { opacity: '0.55' },
          '50%':       { opacity: '1' },
        },
        'slide-in-down': {
          from: { opacity: '0', transform: 'translateY(-20px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%':       { backgroundPosition: '100% 50%' },
        },
        'dot-travel': {
          from: { transform: 'rotate(0deg) translateX(80px) rotate(0deg)' },
          to:   { transform: 'rotate(360deg) translateX(80px) rotate(-360deg)' },
        },
      },

      /* ── Screens / Breakpoints ──────────────────────────────── */
      screens: {
        'xs':   '420px',
        'sm':   '640px',
        'md':   '768px',
        'lg':   '1024px',
        'xl':   '1280px',
        '2xl':  '1440px',
        '3xl':  '1920px',
      },
    },
  },
  plugins: [],
}
