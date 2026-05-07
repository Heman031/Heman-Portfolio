import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { RiMoonLine, RiSunLine, RiMenuLine, RiCloseLine, RiDownloadLine } from 'react-icons/ri'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar({ isDark, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNav = (href) => {
    setActive(href)
    setMobileOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'glass shadow-lg shadow-black/20 dark:shadow-black/40'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">

            {/* Logo */}
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2"
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-lg"
                style={{ background: 'linear-gradient(135deg, #6C63FF, #3EC6E0)' }}>
                HR
              </div>
              <span className="font-bold text-lg hidden sm:block gradient-text">Heman Raj</span>
            </motion.a>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    active === link.href
                      ? 'gradient-text bg-primary/10'
                      : isDark
                        ? 'text-gray-300 hover:text-white hover:bg-white/5'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-black/5'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Right controls */}
            <div className="flex items-center gap-3">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleTheme}
                className={`p-2 rounded-lg transition-all duration-200 ${
                  isDark ? 'text-gray-300 hover:text-white hover:bg-white/10' : 'text-gray-600 hover:text-gray-900 hover:bg-black/10'
                }`}
              >
                {isDark ? <RiSunLine size={20} /> : <RiMoonLine size={20} />}
              </motion.button>

              {/* ✅ FIXED: correct path and filename */}
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/resume.pdf"
                download="Heman_Raj_Resume.pdf"
                className="hidden sm:flex items-center gap-2 btn-primary text-sm py-2 px-4"
              >
                <RiDownloadLine size={16} />
                Resume
              </motion.a>

              <button
                onClick={() => setMobileOpen(true)}
                className="md:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10"
              >
                <RiMenuLine size={22} />
              </button>
            </div>

          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-72 bg-dark-800 shadow-2xl p-8 flex flex-col"
            >
              <div className="flex items-center justify-between mb-10">
                <span className="gradient-text font-bold text-xl">Menu</span>
                <button onClick={() => setMobileOpen(false)} className="text-gray-400 hover:text-white">
                  <RiCloseLine size={24} />
                </button>
              </div>
              <nav className="flex flex-col gap-2 flex-1">
                {navLinks.map((link, i) => (
                  <motion.button
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 }}
                    onClick={() => handleNav(link.href)}
                    className="text-left px-4 py-3 rounded-xl text-gray-300 hover:text-white hover:bg-white/10 font-medium transition-all"
                  >
                    {link.label}
                  </motion.button>
                ))}
              </nav>

              {/* ✅ FIXED: correct path and filename */}
              <a
                href="/resume.pdf"
                download="Heman_Raj_Resume.pdf"
                className="flex items-center justify-center gap-2 btn-primary mt-6"
                onClick={() => setMobileOpen(false)}
              >
                <RiDownloadLine size={16} />
                Download Resume
              </a>

            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}