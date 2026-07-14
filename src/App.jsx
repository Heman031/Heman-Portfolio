import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Toaster } from 'react-hot-toast'
import useTheme from './hooks/useTheme'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

/* ── Scroll Progress Bar ─────────────────────────────────── */
function ScrollProgress() {
  const [pct, setPct] = useState(0)

  useEffect(() => {
    const update = () => {
      const el  = document.documentElement
      const top = el.scrollTop  || document.body.scrollTop
      const h   = el.scrollHeight - el.clientHeight
      setPct(h > 0 ? (top / h) * 100 : 0)
    }
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  return (
    <div
      className="scroll-progress"
      style={{ width: `${pct}%` }}
      role="progressbar"
      aria-valuenow={Math.round(pct)}
      aria-valuemin={0}
      aria-valuemax={100}
    />
  )
}

/* ── Loading Screen ──────────────────────────────────────── */
function LoadingScreen({ onDone }) {
  useEffect(() => {
    const t = setTimeout(onDone, 2000)
    return () => clearTimeout(t)
  }, [onDone])

  return (
    <motion.div
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-6"
      style={{ background: 'var(--bg-base)' }}
    >
      {/* Logo */}
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
        className="relative"
      >
        <div
          className="w-24 h-24 rounded-3xl flex items-center justify-center text-4xl font-black text-white shadow-glow-lg"
          style={{ background: 'linear-gradient(135deg, #6C63FF, #3EC6E0)' }}
        >
          HR
        </div>
        {/* Glowing ring */}
        <div
          className="absolute inset-[-10px] rounded-[2rem] border border-primary/30 animate-glow-pulse"
          style={{ boxShadow: '0 0 30px rgba(108,99,255,0.3)' }}
        />
        {/* Orbiting dot */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-[-22px]"
        >
          <div
            className="absolute w-3 h-3 rounded-full top-0 left-1/2 -translate-x-1/2"
            style={{ background: 'linear-gradient(135deg, #6C63FF, #3EC6E0)', boxShadow: '0 0 8px #6C63FF' }}
          />
        </motion.div>
      </motion.div>

      {/* Name */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.5 }}
        className="text-center"
      >
        <div className="shimmer-text font-bold text-2xl tracking-tight mb-1">Heman Raj L</div>
        <div className="text-sm font-mono" style={{ color: 'var(--text-muted)' }}>
          Full Stack Developer
        </div>
      </motion.div>

      {/* Loading bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="w-52 h-0.5 rounded-full overflow-hidden"
        style={{ background: 'var(--border-default)' }}
      >
        <motion.div
          initial={{ x: '-100%' }}
          animate={{ x: '100%' }}
          transition={{ duration: 1.2, ease: 'easeInOut', repeat: Infinity, delay: 0.1 }}
          className="h-full w-28 rounded-full"
          style={{ background: 'linear-gradient(90deg, transparent, #6C63FF, #3EC6E0, transparent)' }}
        />
      </motion.div>
    </motion.div>
  )
}

/* ── App ─────────────────────────────────────────────────── */
export default function App() {
  const { isDark, toggleTheme } = useTheme()
  const [loading, setLoading] = useState(true)

  return (
    <div className={isDark ? 'dark' : 'light'}>
      <AnimatePresence>
        {loading && <LoadingScreen onDone={() => setLoading(false)} key="loader" />}
      </AnimatePresence>

      {!loading && (
        <>
          <ScrollProgress />
          <Toaster
            position="top-right"
            toastOptions={{
              style: {
                background: isDark ? '#1A1F35' : '#ffffff',
                color: isDark ? '#F0F2FF' : '#0F1020',
                border: isDark ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(0,0,0,0.08)',
                borderRadius: '14px',
                fontSize: '0.875rem',
                boxShadow: isDark
                  ? '0 8px 32px rgba(0,0,0,0.4)'
                  : '0 4px 24px rgba(0,0,0,0.1)',
              },
              success: { iconTheme: { primary: '#6C63FF', secondary: '#fff' } },
              error:   { iconTheme: { primary: '#ef4444', secondary: '#fff' } },
            }}
          />
          <Navbar isDark={isDark} toggleTheme={toggleTheme} />
          <main>
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Skills />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </div>
  )
}
