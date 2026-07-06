import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { RiComputerLine, RiRocketLine, RiRulerLine, RiGraduationCapLine } from 'react-icons/ri'

const highlights = [
  { icon: RiComputerLine,       title: 'Core Technologies',     desc: 'Strong in HTML, CSS, JS, PHP, MySQL', color: '#6C63FF' },
  { icon: RiRocketLine,         title: 'Real-World Experience',  desc: 'Internship experience with industry projects', color: '#3EC6E0' },
  { icon: RiRulerLine,          title: 'Scalable Design',        desc: 'Passion for scalable application architecture', color: '#a855f7' },
  { icon: RiGraduationCapLine,  title: 'Academic Excellence',    desc: 'MSc Computer Science, University of Madras', color: '#f59e0b' },
]

const stats = [
  { value: '4+',  label: 'Projects'     },
  { value: '2',   label: 'Internships'  },
  { value: '1+',  label: 'Years Exp.'   },
  { value: '10+', label: 'Technologies' },
]

function AnimatedStat({ value, label }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })
  return (
    <motion.div
      ref={ref}
      whileHover={{ scale: 1.05, y: -2 }}
      className="stat-card"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
        className="text-3xl font-black gradient-text leading-none mb-1"
      >
        {value}
      </motion.div>
      <div className="text-xs font-medium" style={{ color: 'var(--text-muted)' }}>{label}</div>
    </motion.div>
  )
}

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65 } },
}

export default function About() {
  return (
    <section id="about" className="py-28 px-4" style={{ background: 'var(--bg-base)' }}>
      <div className="max-w-7xl mx-auto">

        {/* Section header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="text-center mb-16"
        >
          <div className="section-badge justify-center">Get to know me</div>
          <h2 className="section-heading gradient-text">About Me</h2>
          <div className="w-16 h-1 mx-auto rounded-full" style={{ background: 'linear-gradient(90deg, #6C63FF, #3EC6E0)' }} />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Left: Avatar + stats */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-center"
          >
            {/* Avatar card */}
            <div className="relative mb-8 group">
              {/* Glow ring */}
              <div
                className="absolute inset-[-16px] rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: 'linear-gradient(135deg, #6C63FF22, #3EC6E022)',
                  filter: 'blur(24px)',
                }}
              />

              <div
                className="w-52 h-52 rounded-3xl flex items-center justify-center text-6xl font-black text-white shadow-glow-lg relative overflow-hidden"
                style={{ background: 'linear-gradient(135deg, #6C63FF 0%, #3EC6E0 100%)' }}
              >
                HR
                {/* Shine */}
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, transparent 60%)' }}
                />
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -right-4 w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shadow-lg"
                style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-default)' }}
              >
                💻
              </motion.div>
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
                className="absolute -bottom-4 -left-4 w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shadow-lg"
                style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-default)' }}
              >
                🚀
              </motion.div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4 w-full max-w-xs">
              {stats.map(s => <AnimatedStat key={s.label} {...s} />)}
            </div>
          </motion.div>

          {/* Right: Text + highlight cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl font-bold mb-4 leading-snug" style={{ color: 'var(--text-primary)' }}>
              MSc Computer Science Graduate &{' '}
              <span className="gradient-text">Full Stack Developer</span>
            </h3>

            <p className="leading-relaxed mb-8 text-base" style={{ color: 'var(--text-secondary)' }}>
              I am a motivated MSc Computer Science postgraduate with a strong passion for full-stack web development
              and problem-solving. I enjoy building clean, scalable applications that solve real-world challenges.
              With hands-on experience in internships and academic projects, I am actively seeking opportunities
              to grow as a developer and contribute to meaningful technology solutions.
            </p>

            {/* Highlight cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map(({ icon: Icon, title, desc, color }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.03, y: -3 }}
                  className="rounded-2xl p-4 flex gap-3 items-start cursor-default transition-all"
                  style={{
                    background: 'var(--bg-surface)',
                    border: `1px solid var(--border-default)`,
                    borderLeft: `3px solid ${color}`,
                    boxShadow: 'var(--shadow-card)',
                  }}
                >
                  <div
                    className="p-2 rounded-xl shrink-0"
                    style={{ background: `${color}18` }}
                  >
                    <Icon size={20} style={{ color }} />
                  </div>
                  <div>
                    <div className="font-semibold text-sm mb-1" style={{ color: 'var(--text-primary)' }}>
                      {title}
                    </div>
                    <div className="text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                      {desc}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
