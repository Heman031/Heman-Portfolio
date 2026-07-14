import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  SiHtml5, SiCss, SiJavascript, SiReact, SiPhp, SiMysql,
  SiPython, SiBootstrap, SiJupyter
} from 'react-icons/si'
import { RiTerminalBoxLine, RiBarChartBoxLine, RiFileTextLine } from 'react-icons/ri'

const skills = [
  { name: 'HTML5', icon: SiHtml5, color: '#E34F26', category: 'Web', pct: 90 },
  { name: 'CSS3', icon: SiCss, color: '#1572B6', category: 'Web', pct: 85 },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E', category: 'Web', pct: 80 },
  { name: 'React', icon: SiReact, color: '#61DAFB', category: 'Web', pct: 75 },
  { name: 'Bootstrap', icon: SiBootstrap, color: '#7952B3', category: 'Web', pct: 85 },
  { name: 'PHP', icon: SiPhp, color: '#777BB4', category: 'Programming', pct: 80 },
  { name: 'Python', icon: SiPython, color: '#3776AB', category: 'Programming', pct: 70 },
  { name: 'SQL', icon: SiMysql, color: '#4479A1', category: 'Programming', pct: 80 },
  { name: 'MySQL', icon: SiMysql, color: '#4479A1', category: 'Database', pct: 80 },
  { name: 'VS Code', icon: RiTerminalBoxLine, color: '#007ACC', category: 'Tools', pct: 90 },
  { name: 'Jupyter', icon: SiJupyter, color: '#F37626', category: 'Tools', pct: 75 },
  { name: 'Power BI', icon: RiBarChartBoxLine, color: '#F2C811', category: 'Tools', pct: 65 },
  { name: 'MS Office', icon: RiFileTextLine, color: '#D83B01', category: 'Tools', pct: 80 },
]

const tabs = ['All', 'Programming', 'Web', 'Tools', 'Database']

export default function Skills() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All'
    ? skills.filter((s, i, arr) => arr.findIndex(x => x.name === s.name) === i)
    : skills.filter(s => s.category === active)

  return (
    <section id="skills" className="py-28 px-4" style={{ background: 'var(--bg-elevated)' }}>
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="section-badge justify-center">What I work with</div>
          <h2 className="section-heading gradient-text">Skills & Technologies</h2>
          <div className="w-16 h-1 mx-auto rounded-full" style={{ background: 'linear-gradient(90deg, #6C63FF, #3EC6E0)' }} />
        </motion.div>

        {/* Filter tabs with sliding indicator */}
        <div
          className="flex flex-wrap justify-center gap-2 mb-12 p-1.5 rounded-2xl max-w-xl mx-auto"
          style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-default)' }}
        >
          {tabs.map(tab => (
            <motion.button
              key={tab}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActive(tab)}
              className="relative px-5 py-2 rounded-xl text-sm font-semibold transition-colors duration-200 z-10"
              style={{
                color: active === tab ? '#fff' : 'var(--text-muted)',
              }}
            >
              {active === tab && (
                <motion.span
                  layoutId="skills-tab-pill"
                  className="absolute inset-0 rounded-xl z-[-1]"
                  style={{ background: 'linear-gradient(135deg, #6C63FF, #3EC6E0)' }}
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
                />
              )}
              {tab}
            </motion.button>
          ))}
        </div>

        {/* Skill cards */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map(({ name, icon: Icon, color, pct }, i) => (
              <motion.div
                key={`${name}-${i}`}
                layout
                initial={{ opacity: 0, scale: 0.85, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: -15 }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                whileHover={{ scale: 1.06, y: -5 }}
                className="rounded-2xl p-4 flex flex-col items-center text-center cursor-default transition-all duration-300 group"
                style={{
                  background: 'var(--bg-surface)',
                  border: '1px solid var(--border-default)',
                  boxShadow: 'var(--shadow-card)',
                }}
              >
                {/* Icon with glow on hover */}
                <div
                  className="mb-3 p-3 rounded-xl transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: `${color}15`,
                    boxShadow: `0 0 0 0 ${color}40`,
                  }}
                >
                  <Icon size={32} color={color} />
                </div>

                <span
                  className="text-sm font-bold mb-1 leading-tight"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {name}
                </span>
                <span
                  className="text-xs font-mono mb-2.5"
                  style={{ color: 'var(--text-muted)' }}
                >
                  {pct}%
                </span>

                {/* Animated progress bar */}
                <div
                  className="w-full rounded-full h-1.5 overflow-hidden"
                  style={{ background: 'var(--border-default)' }}
                >
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${pct}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.1, ease: 'easeOut', delay: 0.15 + i * 0.04 }}
                    className="h-full rounded-full"
                    style={{ background: `linear-gradient(90deg, ${color}99, ${color})` }}
                  />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
