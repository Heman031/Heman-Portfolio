import { motion } from 'framer-motion'
import { RiGithubLine, RiLinkedinLine, RiMailLine, RiArrowUpLine, RiHeartFill } from 'react-icons/ri'

const socials = [
  { icon: RiGithubLine,   href: 'https://github.com/Heman031',                  label: 'GitHub'   },
  { icon: RiLinkedinLine, href: 'https://www.linkedin.com/in/heman-raj',         label: 'LinkedIn' },
  { icon: RiMailLine,     href: 'mailto:hemanoffice31@gmail.com',                label: 'Email'    },
]

export default function Footer() {
  return (
    <footer
      className="relative py-12 px-4"
      style={{ borderTop: '1px solid var(--border-default)' }}
    >
      {/* Gradient top separator */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(108,99,255,0.4), rgba(62,198,224,0.4), transparent)' }}
      />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Branding */}
        <div className="text-center md:text-left">
          <div className="font-bold gradient-text text-lg mb-1 tracking-tight">Heman Raj L</div>
          <p className="text-sm flex items-center gap-1.5" style={{ color: 'var(--text-muted)' }}>
            Built with <RiHeartFill className="text-primary" size={14} /> using React, Tailwind & Framer Motion
          </p>
          <p className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        {/* Social links */}
        <div className="flex items-center gap-2.5">
          {socials.map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              whileHover={{ scale: 1.15, y: -3 }}
              whileTap={{ scale: 0.9 }}
              className="p-2.5 rounded-xl transition-all duration-200"
              style={{
                background: 'var(--bg-elevated)',
                border: '1px solid var(--border-default)',
                color: 'var(--text-secondary)',
              }}
            >
              <Icon size={18} />
            </motion.a>
          ))}
        </div>

        {/* Back to top */}
        <motion.button
          whileHover={{ scale: 1.1, y: -3 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          title="Back to top"
          className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200"
          style={{
            background: 'linear-gradient(135deg, rgba(108,99,255,0.15), rgba(62,198,224,0.15))',
            border: '1px solid rgba(108,99,255,0.25)',
            color: '#6C63FF',
          }}
        >
          <RiArrowUpLine size={18} />
          Top
        </motion.button>
      </div>
    </footer>
  )
}
