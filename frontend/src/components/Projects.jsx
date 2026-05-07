import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { RiGithubLine, RiExternalLinkLine, RiStarLine } from 'react-icons/ri'

const projects = [
  {
    id: 1,
    title: 'Distance Education Admission System',
    desc: 'Full-stack multi-role admission portal for University of Madras distance education. Features admin, staff, and student dashboards with automated application tracking.',
    tags: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    filter: 'Web',
    github: 'https://github.com/hemanraj',
    live: null,
    featured: true,
    gradient: 'from-purple-500 to-cyan-400',
  },
  {
    id: 2,
    title: 'Student Result Management System',
    desc: 'A web-based system to manage and publish student academic results with role-based access control for admins, faculty, and students.',
    tags: ['PHP', 'MySQL', 'HTML', 'CSS'],
    filter: 'Web',
    github: 'https://github.com/hemanraj',
    live: null,
    featured: false,
    gradient: 'from-blue-500 to-indigo-400',
  },
  {
    id: 3,
    title: 'Tourist Travel Booking System',
    desc: 'End-to-end travel booking platform with destination browsing, booking management, and a comprehensive admin dashboard.',
    tags: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    filter: 'Web',
    github: 'https://github.com/hemanraj',
    live: null,
    featured: false,
    gradient: 'from-teal-500 to-emerald-400',
  },
  {
    id: 4,
    title: 'Flower Detection Using CNN',
    desc: 'Deep learning model using Convolutional Neural Networks to classify flower species from images with high accuracy using transfer learning.',
    tags: ['Python', 'TensorFlow', 'Keras', 'OpenCV'],
    filter: 'ML/AI',
    github: 'https://github.com/hemanraj',
    live: null,
    featured: false,
    gradient: 'from-rose-500 to-orange-400',
  },
]

const tabs = ['All', 'Web', 'ML/AI']

export default function Projects() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? projects : projects.filter(p => p.filter === active)

  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm mb-3 tracking-widest uppercase">What I've built</p>
          <h2 className="section-heading gradient-text">Projects</h2>
          <div className="w-20 h-1 mx-auto rounded-full" style={{ background: 'linear-gradient(90deg, #6C63FF, #3EC6E0)' }} />
        </motion.div>

        {/* Filter tabs */}
        <div className="flex justify-center gap-3 mb-12">
          {tabs.map(tab => (
            <motion.button
              key={tab}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActive(tab)}
              className={`px-5 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                active === tab
                  ? 'text-white'
                  : 'glass text-gray-400 hover:text-white'
              }`}
              style={active === tab ? { background: 'linear-gradient(135deg, #6C63FF, #3EC6E0)' } : {}}
            >
              {tab}
            </motion.button>
          ))}
        </div>

        {/* Project grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="glass rounded-2xl overflow-hidden group cursor-default"
              >
                {/* Gradient top bar */}
                <div className={`h-1.5 bg-gradient-to-r ${project.gradient}`} />

                {/* Preview area */}
                <div className={`h-36 bg-gradient-to-br ${project.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-300 flex items-center justify-center`}>
                  <div className="text-5xl opacity-40">
                    {project.filter === 'ML/AI' ? '🤖' : '🌐'}
                  </div>
                </div>

                <div className="p-6">
                  {/* Title row */}
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2">
                      {project.featured && (
                        <span className="flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium bg-yellow-400/20 text-yellow-400">
                          <RiStarLine size={11} /> Featured
                        </span>
                      )}
                      <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-primary/20 text-primary">
                        {project.filter}
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2 }}
                        className="p-2 rounded-lg glass text-gray-400 hover:text-white transition-colors"
                        title="GitHub"
                      >
                        <RiGithubLine size={17} />
                      </motion.a>
                      {project.live && (
                        <motion.a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.2 }}
                          className="p-2 rounded-lg glass text-gray-400 hover:text-white transition-colors"
                          title="Live Demo"
                        >
                          <RiExternalLinkLine size={17} />
                        </motion.a>
                      )}
                    </div>
                  </div>

                  <h3 className="font-bold text-lg dark:text-white mb-2 leading-snug">{project.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">{project.desc}</p>

                  {/* Tech badges */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-2 py-0.5 rounded-md text-xs font-mono bg-white/5 text-gray-400 border border-white/10">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
