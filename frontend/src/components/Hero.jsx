import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { RiGithubLine, RiLinkedinLine, RiMailLine, RiArrowDownLine, RiArrowRightLine, RiEyeLine } from 'react-icons/ri'

const socialLinks = [
  { icon: RiGithubLine, href: 'https://github.com/Heman031', label: 'GitHub' },
  { icon: RiLinkedinLine, href: 'https://www.linkedin.com/in/heman-raj', label: 'LinkedIn' },
  { icon: RiMailLine, href: 'mailto:hemanoffice31@gmail.com', label: 'Email' },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(rgba(108,99,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(108,99,255,0.3) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 text-center px-4 max-w-5xl mx-auto"
      >
        {/* Badge */}
        <motion.div variants={item} className="flex justify-center mb-8">
          <div className="glass px-4 py-2 rounded-full text-sm font-medium text-gray-300 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Available for opportunities
          </div>
        </motion.div>

        {/* Avatar */}
        <motion.div variants={item} className="flex justify-center mb-8">
          <div className="relative">
            <div
              className="w-32 h-32 rounded-full flex items-center justify-center text-4xl font-black text-white shadow-2xl"
              style={{ background: 'linear-gradient(135deg, #6C63FF, #3EC6E0)' }}
            >
              HR
            </div>
            <div className="absolute inset-0 rounded-full"
              style={{
                background: 'linear-gradient(135deg, #6C63FF, #3EC6E0)',
                filter: 'blur(20px)',
                opacity: 0.4,
                zIndex: -1,
              }}
            />
            {/* Orbit ring */}
            <div className="absolute inset-[-12px] rounded-full border border-primary/30 animate-spin-slow" />
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1 variants={item} className="text-5xl md:text-7xl font-black mb-4 leading-tight">
          <span className="gradient-text">Heman Raj L</span>
        </motion.h1>

        {/* Typing animation */}
        <motion.div variants={item} className="text-xl md:text-2xl font-medium mb-6 h-10">
          <span className="text-gray-300">I am a </span>
          <TypeAnimation
            sequence={[
              'Full Stack Web Developer', 2000,
              'MSc Computer Science Student', 2000,
              'Problem Solver', 2000,
              'Open to Opportunities', 2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="gradient-text font-semibold"
          />
        </motion.div>

        {/* Tagline */}
        <motion.p variants={item} className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Building responsive, scalable, and user-friendly web applications that solve real-world challenges.
        </motion.p>

        {/* CTAs */}
        <motion.div variants={item} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary flex items-center gap-2 text-base"
          >
            <RiEyeLine size={18} />
            View Projects
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-outline flex items-center gap-2 text-base"
          >
            Hire Me
            <RiArrowRightLine size={18} />
          </motion.button>
        </motion.div>

        {/* Social links */}
        <motion.div variants={item} className="flex items-center justify-center gap-4 mb-16">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              whileHover={{ scale: 1.2, y: -3 }}
              whileTap={{ scale: 0.9 }}
              className="glass p-3 rounded-xl text-gray-400 hover:text-white transition-colors duration-200"
            >
              <Icon size={22} />
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll chevron */}
        <motion.div
          variants={item}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex justify-center"
        >
          <button
            onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-gray-500 hover:text-primary transition-colors"
          >
            <RiArrowDownLine size={28} />
          </button>
        </motion.div>
      </motion.div>
    </section>
  )
}
