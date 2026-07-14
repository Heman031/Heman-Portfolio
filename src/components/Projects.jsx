import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { RiGithubLine, RiExternalLinkLine, RiStarLine, RiCodeSSlashLine, RiBrainLine } from 'react-icons/ri'

const projects = [
  {
    id: 1,
    title: 'Distance Education Admission System',
    desc: 'Full-stack multi-role admission portal for University of Madras distance education. Features admin, staff, and student dashboards with automated application tracking.',
    tags: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    filter: 'Web',
    github: 'https://github.com/Heman031',
    live: null,
    featured: true,
    gradient: ['#6C63FF', '#3EC6E0'],
    emoji: '🎓',
  },
  {
    id: 2,
    title: 'Student Result Management System',
    desc: 'A web-based system to manage and publish student academic results with role-based access control for admins, faculty, and students.',
    tags: ['PHP', 'MySQL', 'HTML', 'CSS'],
    filter: 'Web',
    github: 'https://github.com/Heman031',
    live: null,
    featured: false,
    gradient: ['#3b82f6', '#6366f1'],
    emoji: '📊',
  },
  {
    id: 3,
    title: 'Tourist Travel Booking System',
    desc: 'End-to-end travel booking platform with destination browsing, booking management, and a comprehensive admin dashboard.',
    tags: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    filter: 'Web',
    github: 'https://github.com/Heman031',
    live: null,
    featured: false,
    gradient: ['#10b981', '#3EC6E0'],
    emoji: '✈️',
  },
  {
    id: 4,
    title: 'Flower Detection Using CNN',
    desc: 'Deep learning model using Convolutional Neural Networks to classify flower species from images with high accuracy using transfer learning.',
    tags: ['Python', 'TensorFlow', 'Keras', 'OpenCV'],
    filter: 'ML/AI',
    github: 'https://github.com/Heman031',
    live: null,
    featured: false,
    gradient: ['#f43f5e', '#f97316'],
    emoji: '🌸',
  },
]

const tabs = ['All', 'Web', 'ML/AI']

export default function Projects() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? projects : projects.filter(p => p.filter === active)

  return (
    <section id="projects" className="py-28 px-4" style={{ background: 'var(--bg-base)' }}>
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="section-badge justify-center">What I've built</div>
          <h2 className="section-heading gradient-text">Projects</h2>
          <div className="w-16 h-1 mx-auto rounded-full" style={{ background: 'linear-gradient(90deg, #6C63FF, #3EC6E0)' }} />
        </motion.div>

        {/* Filter tabs */}
        <div className="flex justify-center gap-2 mb-12">
          {tabs.map(tab => (
            <motion.button
              key={tab}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActive(tab)}
              className="relative px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 overflow-hidden"
              style={{
                background: active === tab
                  ? 'linear-gradient(135deg, #6C63FF, #3EC6E0)'
                  : 'var(--bg-elevated)',
                color: active === tab ? '#fff' : 'var(--text-secondary)',
                border: '1px solid var(--border-default)',
                boxShadow: active === tab ? '0 4px 16px rgba(108,99,255,0.35)' : 'none',
              }}
            >
              {tab}
            </motion.button>
          ))}
        </div>

        {/* Project grid */}
        <motion.div layout className="grid md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                whileHover={{ y: -6 }}
                className="rounded-2xl overflow-hidden group cursor-default transition-all duration-300"
                style={{
                  background: 'var(--bg-surface)',
                  border: '1px solid var(--border-default)',
                  boxShadow: 'var(--shadow-card)',
                }}
              >
                {/* Top gradient accent bar */}
                <div
                  className="h-1"
                  style={{ background: `linear-gradient(90deg, ${project.gradient[0]}, ${project.gradient[1]})` }}
                />

                {/* Preview area with animated shimmer */}
                <div
                  className="relative h-40 flex items-center justify-center overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, ${project.gradient[0]}14, ${project.gradient[1]}0A)`,
                  }}
                >
                  {/* Shimmer on hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(135deg, ${project.gradient[0]}20, ${project.gradient[1]}15)`,
                    }}
                  />
                  {/* Decorative blobs */}
                  <div
                    className="absolute w-32 h-32 rounded-full blur-2xl opacity-20 group-hover:opacity-30 transition-opacity"
                    style={{ background: project.gradient[0], top: '-20px', left: '-20px' }}
                  />
                  <div
                    className="absolute w-24 h-24 rounded-full blur-2xl opacity-15 group-hover:opacity-25 transition-opacity"
                    style={{ background: project.gradient[1], bottom: '-10px', right: '-10px' }}
                  />
                  <span className="relative text-6xl">{project.emoji}</span>
                </div>

                <div className="p-6">
                  {/* Badges row */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      {project.featured && (
                        <span
                          className="flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold"
                          style={{ background: 'rgba(251,191,36,0.15)', color: '#f59e0b' }}
                        >
                          <RiStarLine size={11} />
                          Featured
                        </span>
                      )}
                      <span
                        className="flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold"
                        style={{ background: 'rgba(108,99,255,0.12)', color: '#6C63FF' }}
                      >
                        {project.filter === 'ML/AI' ? <RiBrainLine size={11} /> : <RiCodeSSlashLine size={11} />}
                        {project.filter}
                      </span>
                    </div>

                    {/* Icon links */}
                    <div className="flex gap-1.5">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.15, y: -2 }}
                        className="p-2 rounded-xl transition-all duration-200"
                        style={{
                          background: 'var(--bg-elevated)',
                          border: '1px solid var(--border-default)',
                          color: 'var(--text-muted)',
                        }}
                        title="GitHub"
                      >
                        <RiGithubLine size={16} />
                      </motion.a>
                      {project.live && (
                        <motion.a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.15, y: -2 }}
                          className="p-2 rounded-xl transition-all duration-200"
                          style={{
                            background: 'var(--bg-elevated)',
                            border: '1px solid var(--border-default)',
                            color: 'var(--text-muted)',
                          }}
                          title="Live Demo"
                        >
                          <RiExternalLinkLine size={16} />
                        </motion.a>
                      )}
                    </div>
                  </div>

                  <h3 className="font-bold text-lg mb-2 leading-snug" style={{ color: 'var(--text-primary)' }}>
                    {project.title}
                  </h3>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
                    {project.desc}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map(tag => (
                      <span key={tag} className="tech-badge">{tag}</span>
                    ))}
                  </div>
                </div>

                {/* Bottom hover glow line */}
                <div
                  className="h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 mx-6 mb-4 rounded-full"
                  style={{ background: `linear-gradient(90deg, ${project.gradient[0]}, ${project.gradient[1]})` }}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
