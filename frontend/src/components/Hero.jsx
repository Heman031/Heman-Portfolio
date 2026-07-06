import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { RiGithubLine, RiLinkedinLine, RiMailLine, RiArrowDownLine, RiArrowRightLine, RiEyeLine } from 'react-icons/ri'

const socialLinks = [
  { icon: RiGithubLine,   href: 'https://github.com/Heman031',                    label: 'GitHub'   },
  { icon: RiLinkedinLine, href: 'https://www.linkedin.com/in/heman-raj',           label: 'LinkedIn' },
  { icon: RiMailLine,     href: 'mailto:hemanoffice31@gmail.com',                  label: 'Email'    },
]

const stats = [
  { value: '4+',  label: 'Projects'     },
  { value: '2',   label: 'Internships'  },
  { value: '1+',  label: 'Yrs Exp'      },
  { value: '10+', label: 'Technologies' },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.25 },
  },
}
const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Background layer */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />

        {/* Subtle grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(var(--border-subtle) 1px, transparent 1px), linear-gradient(90deg, var(--border-subtle) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />

        {/* Radial fade center */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 80% 60% at 50% 50%, transparent 0%, var(--bg-base) 100%)',
          }}
        />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-24 pb-16"
      >
        {/* Status badge */}
        <motion.div variants={item} className="flex justify-center mb-8">
          <div
            className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
            style={{
              background: 'var(--bg-glass)',
              backdropFilter: 'blur(12px)',
              border: '1px solid var(--border-default)',
              color: 'var(--text-secondary)',
            }}
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Available for opportunities
          </div>
        </motion.div>

        {/* Avatar */}
        <motion.div variants={item} className="flex justify-center mb-8">
          <div className="relative">
            {/* Glow backdrop */}
            <div
              className="absolute inset-0 rounded-full animate-glow-pulse"
              style={{
                background: 'linear-gradient(135deg, #6C63FF, #3EC6E0)',
                filter: 'blur(28px)',
                opacity: 0.45,
                transform: 'scale(1.2)',
              }}
            />
            {/* Avatar circle */}
            <div
              className="relative w-32 h-32 rounded-full flex items-center justify-center text-4xl font-black text-white shadow-glow-lg"
              style={{ background: 'linear-gradient(135deg, #6C63FF 0%, #3EC6E0 100%)' }}
            >
              HR
              {/* Shine overlay */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.25) 0%, transparent 60%)',
                }}
              />
            </div>
            {/* Orbit ring */}
            <div
              className="absolute inset-[-14px] rounded-full border animate-spin-slow"
              style={{ borderColor: 'rgba(108,99,255,0.25)' }}
            />
            {/* Orbiting dot */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-[-14px]"
            >
              <div
                className="absolute w-2.5 h-2.5 rounded-full top-0 left-1/2 -translate-x-1/2"
                style={{ background: '#3EC6E0', boxShadow: '0 0 8px #3EC6E0' }}
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={item}
          className="text-5xl md:text-7xl font-black mb-4 leading-tight tracking-tight"
        >
          <span className="gradient-text">Heman Raj L</span>
        </motion.h1>

        {/* Typing subtitle */}
        <motion.div variants={item} className="text-xl md:text-2xl font-semibold mb-5 h-10">
          <span style={{ color: 'var(--text-secondary)' }}>I am a </span>
          <TypeAnimation
            sequence={[
              'Full Stack Web Developer', 2200,
              'MSc Computer Science Graduate', 2200,
              'Problem Solver', 1800,
              'Open to Opportunities', 1800,
            ]}
            wrapper="span"
            speed={55}
            repeat={Infinity}
            className="shimmer-text"
          />
        </motion.div>

        {/* Tagline */}
        <motion.p
          variants={item}
          className="text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ color: 'var(--text-muted)' }}
        >
          Building responsive, scalable, and user-friendly web applications that solve real-world challenges.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={item}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary text-sm font-semibold"
          >
            <RiEyeLine size={17} />
            View Projects
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-outline text-sm font-semibold"
          >
            Hire Me
            <RiArrowRightLine size={17} />
          </motion.button>
        </motion.div>

        {/* Social links */}
        <motion.div variants={item} className="flex items-center justify-center gap-3 mb-14">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              whileHover={{ scale: 1.15, y: -3 }}
              whileTap={{ scale: 0.92 }}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200"
              style={{
                background: 'var(--bg-glass)',
                backdropFilter: 'blur(10px)',
                border: '1px solid var(--border-default)',
                color: 'var(--text-secondary)',
              }}
            >
              <Icon size={18} />
              <span className="hidden sm:inline">{label}</span>
            </motion.a>
          ))}
        </motion.div>

        {/* Bento stats strip */}
        <motion.div
          variants={item}
          className="grid grid-cols-4 gap-3 max-w-md mx-auto mb-14"
        >
          {stats.map(({ value, label }) => (
            <motion.div
              key={label}
              whileHover={{ scale: 1.06, y: -2 }}
              className="stat-card"
            >
              <div className="text-xl font-black gradient-text leading-none mb-1">{value}</div>
              <div className="text-xs font-medium" style={{ color: 'var(--text-muted)' }}>{label}</div>
            </motion.div>
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
            className="transition-colors p-2"
            style={{ color: 'var(--text-muted)' }}
            aria-label="Scroll to about"
          >
            <RiArrowDownLine size={26} />
          </button>
        </motion.div>
      </motion.div>
    </section>
  )
}
