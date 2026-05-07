import { motion } from 'framer-motion'
import { RiGithubLine, RiLinkedinLine, RiMailLine, RiArrowUpLine } from 'react-icons/ri'

const socials = [
  { icon: RiGithubLine, href: 'https://github.com/Heman031', label: 'GitHub' },
  { icon: RiLinkedinLine, href: 'https://www.linkedin.com/in/heman-raj', label: 'LinkedIn' },
  { icon: RiMailLine, href: 'mailto:hemanoffice31@gmail.com', label: 'Email' },
]

export default function Footer() {
  return (
    <footer className="relative py-12 px-4 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Branding */}
        <div className="text-center md:text-left">
          <div className="font-bold gradient-text text-lg mb-1">Heman Raj L</div>
          <p className="text-gray-500 text-sm">
            Built with ❤ using React, Tailwind CSS & Framer Motion
          </p>
          <p className="text-gray-600 text-xs mt-1">© {new Date().getFullYear()} All rights reserved.</p>
        </div>

        {/* Socials */}
        <div className="flex items-center gap-3">
          {socials.map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="glass p-2.5 rounded-xl text-gray-400 hover:text-white transition-colors"
            >
              <Icon size={18} />
            </motion.a>
          ))}
        </div>

        {/* Back to top */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="p-3 rounded-xl text-gray-400 hover:text-white transition-colors"
          style={{ background: 'linear-gradient(135deg, #6C63FF33, #3EC6E033)' }}
          title="Back to top"
        >
          <RiArrowUpLine size={20} />
        </motion.button>
      </div>
    </footer>
  )
}
