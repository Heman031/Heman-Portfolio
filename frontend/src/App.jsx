import { useState, useEffect } from 'react'
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

function LoadingScreen({ onDone }) {
  useEffect(() => {
    const t = setTimeout(onDone, 1800)
    return () => clearTimeout(t)
  }, [onDone])

  return (
    <motion.div
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[100] bg-dark-900 flex flex-col items-center justify-center gap-6"
    >
      <div
        className="w-20 h-20 rounded-2xl flex items-center justify-center text-3xl font-black text-white"
        style={{ background: 'linear-gradient(135deg, #6C63FF, #3EC6E0)' }}
      >
        HR
      </div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="gradient-text font-bold text-2xl"
      >
        Heman Raj L
      </motion.div>
      <div className="w-48 h-0.5 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          initial={{ x: '-100%' }}
          animate={{ x: '100%' }}
          transition={{ duration: 1.2, ease: 'easeInOut', repeat: Infinity }}
          className="h-full w-24 rounded-full"
          style={{ background: 'linear-gradient(90deg, transparent, #6C63FF, #3EC6E0, transparent)' }}
        />
      </div>
    </motion.div>
  )
}

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
          <Toaster
            position="top-right"
            toastOptions={{
              style: {
                background: '#1A1F35',
                color: '#fff',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '12px',
              },
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
