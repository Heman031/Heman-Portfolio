import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { RiMoonLine, RiSunLine, RiMenuLine, RiCloseLine, RiDownloadLine } from 'react-icons/ri'

const navLinks = [
  { label: 'About',      href: '#about'      },
  { label: 'Experience', href: '#experience'  },
  { label: 'Projects',   href: '#projects'    },
  { label: 'Skills',     href: '#skills'      },
  { label: 'Contact',    href: '#contact'     },
]

export default function Navbar({ isDark, toggleTheme }) {
  const [scrolled,    setScrolled]    = useState(false)
  const [mobileOpen,  setMobileOpen]  = useState(false)
  const [activeSection, setActiveSection] = useState('')

  /* Scroll shadow */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* Active-section via IntersectionObserver */
  useEffect(() => {
    const ids = navLinks.map(l => l.href.slice(1))
    const observers = []

    ids.forEach(id => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(`#${id}`) },
        { threshold: 0.35 }
      )
      obs.observe(el)
      observers.push(obs)
    })

    return () => observers.forEach(o => o.disconnect())
  }, [])

  const handleNav = (href) => {
    setMobileOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.65, ease: 'easeOut' }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? 'var(--bg-glass)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid var(--border-default)' : '1px solid transparent',
          boxShadow: scrolled ? 'var(--shadow-card)' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-[4.5rem]">

            {/* Logo */}
            <motion.a
              href="#"
              onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2.5 select-none"
            >
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center text-white font-bold text-sm shadow-glow-sm"
                style={{ background: 'linear-gradient(135deg, #6C63FF, #3EC6E0)' }}
              >
                HR
              </div>
              <span className="font-bold text-base hidden sm:block gradient-text tracking-tight">
                Heman Raj
              </span>
            </motion.a>

            {/* Desktop nav links */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map(link => {
                const isActive = activeSection === link.href
                return (
                  <button
                    key={link.href}
                    onClick={() => handleNav(link.href)}
                    className="relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200"
                    style={{
                      color: isActive ? '#6C63FF' : 'var(--text-secondary)',
                    }}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-xl"
                        style={{ background: 'rgba(108,99,255,0.1)' }}
                        transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
                      />
                    )}
                    <span className="relative">{link.label}</span>
                  </button>
                )
              })}
            </div>

            {/* Right controls */}
            <div className="flex items-center gap-2">
              {/* Theme toggle */}
              <motion.button
                whileHover={{ scale: 1.1, rotate: 15 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="p-2.5 rounded-xl transition-all duration-200"
                style={{
                  color: 'var(--text-secondary)',
                  background: 'var(--bg-elevated)',
                  border: '1px solid var(--border-default)',
                }}
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={isDark ? 'sun' : 'moon'}
                    initial={{ rotate: -30, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 30, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="block"
                  >
                    {isDark ? <RiSunLine size={18} /> : <RiMoonLine size={18} />}
                  </motion.span>
                </AnimatePresence>
              </motion.button>

              {/* Resume download */}
              <motion.a
                whileHover={{ scale: 1.04, y: -1 }}
                whileTap={{ scale: 0.96 }}
                href="/resume.pdf"
                download="Heman_Raj_Resume.pdf"
                className="hidden sm:flex items-center gap-1.5 btn-primary text-xs py-2 px-3.5"
                style={{ borderRadius: '0.75rem' }}
              >
                <RiDownloadLine size={15} />
                Resume
              </motion.a>

              {/* Mobile menu toggle */}
              <motion.button
                whileTap={{ scale: 0.92 }}
                onClick={() => setMobileOpen(true)}
                aria-label="Open menu"
                className="md:hidden p-2.5 rounded-xl transition-all duration-200"
                style={{
                  color: 'var(--text-secondary)',
                  background: 'var(--bg-elevated)',
                  border: '1px solid var(--border-default)',
                }}
              >
                <RiMenuLine size={20} />
              </motion.button>
            </div>

          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-40"
              style={{ background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(4px)' }}
            />

            {/* Drawer panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 220 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-72 flex flex-col p-7 shadow-2xl"
              style={{
                background: 'var(--bg-surface)',
                borderLeft: '1px solid var(--border-default)',
              }}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-2">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs font-bold"
                    style={{ background: 'linear-gradient(135deg, #6C63FF, #3EC6E0)' }}
                  >
                    HR
                  </div>
                  <span className="gradient-text font-bold">Menu</span>
                </div>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setMobileOpen(false)}
                  className="p-2 rounded-xl transition-colors"
                  style={{ color: 'var(--text-muted)', background: 'var(--bg-elevated)' }}
                >
                  <RiCloseLine size={20} />
                </motion.button>
              </div>

              {/* Nav links */}
              <nav className="flex flex-col gap-1.5 flex-1">
                {navLinks.map((link, i) => (
                  <motion.button
                    key={link.href}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                    onClick={() => handleNav(link.href)}
                    className="text-left px-4 py-3 rounded-xl font-medium text-sm transition-all duration-200"
                    style={{
                      color: activeSection === link.href ? '#6C63FF' : 'var(--text-secondary)',
                      background: activeSection === link.href ? 'rgba(108,99,255,0.1)' : 'transparent',
                    }}
                  >
                    {link.label}
                  </motion.button>
                ))}
              </nav>

              {/* Resume button */}
              <motion.a
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                href="/resume.pdf"
                download="Heman_Raj_Resume.pdf"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-2 btn-primary mt-4 text-sm"
              >
                <RiDownloadLine size={16} />
                Download Resume
              </motion.a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}