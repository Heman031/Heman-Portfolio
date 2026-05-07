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
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E', category: 'Programming', pct: 80 },
  { name: 'SQL', icon: SiMysql, color: '#4479A1', category: 'Programming', pct: 80 },
  { name: 'MySQL', icon: SiMysql, color: '#4479A1', category: 'Database', pct: 80 },
  { name: 'VS Code', icon: RiTerminalBoxLine, color: '#007ACC', category: 'Tools', pct: 90 },
  { name: 'Jupyter', icon: SiJupyter, color: '#F37626', category: 'Tools', pct: 75 },
  { name: 'Power BI', icon: RiBarChartBoxLine, color: '#F2C811', category: 'Tools', pct: 65 },
  { name: 'MS Office', icon: RiFileTextLine, color: '#D83B01', category: 'Tools', pct: 80 },
]

const tabs = ['All', 'Programming', 'Web', 'Tools', 'Database']

function SkillBar({ pct }) {
  return (
    <div className="mt-3 bg-white/10 rounded-full h-1.5 overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${pct}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
        className="h-full rounded-full"
        style={{ background: 'linear-gradient(90deg, #6C63FF, #3EC6E0)' }}
      />
    </div>
  )
}

export default function Skills() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All'
    ? skills.filter((s, i, arr) => arr.findIndex(x => x.name === s.name) === i)
    : skills.filter(s => s.category === active)

  return (
    <section id="skills" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm mb-3 tracking-widest uppercase">What I work with</p>
          <h2 className="section-heading gradient-text">Skills & Technologies</h2>
          <div className="w-20 h-1 mx-auto rounded-full" style={{ background: 'linear-gradient(90deg, #6C63FF, #3EC6E0)' }} />
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {tabs.map(tab => (
            <motion.button
              key={tab}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActive(tab)}
              className={`px-5 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                active === tab
                  ? 'text-white shadow-lg'
                  : 'glass text-gray-400 hover:text-white'
              }`}
              style={active === tab ? { background: 'linear-gradient(135deg, #6C63FF, #3EC6E0)' } : {}}
            >
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
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: -20 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                whileHover={{ scale: 1.05, y: -4 }}
                className="glass rounded-2xl p-4 flex flex-col items-center text-center cursor-default"
              >
                <div className="mb-3 p-3 rounded-xl bg-white/5">
                  <Icon size={32} color={color} />
                </div>
                <span className="text-sm font-semibold dark:text-white mb-1">{name}</span>
                <span className="text-xs text-gray-500 mb-2">{pct}%</span>
                <div className="w-full bg-white/10 rounded-full h-1.5 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${pct}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: 'easeOut', delay: 0.2 + i * 0.05 }}
                    className="h-full rounded-full"
                    style={{ background: 'linear-gradient(90deg, #6C63FF, #3EC6E0)' }}
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
