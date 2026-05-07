import { motion } from 'framer-motion'
import { RiBriefcaseLine, RiCalendarLine, RiMapPinLine, RiCheckLine } from 'react-icons/ri'

const experiences = [
  {
    id: 1,
    title: 'Financial Fraud Detection System',
    company: 'Naso Technologies Pvt Ltd',
    type: 'Internship',
    duration: 'Jun 2023 – Aug 2023',
    location: 'Chennai, Tamil Nadu',
    stack: ['Python', 'Pandas', 'Scikit-learn'],
    points: [
      'Performed data preprocessing and feature engineering on large financial datasets to prepare them for ML models.',
      'Applied ML algorithms including Logistic Regression and Random Forest for fraud pattern identification.',
      'Achieved significant improvement in fraud detection accuracy through iterative model tuning.',
      'Created comprehensive data visualizations to present findings to the team.',
    ],
    color: '#6C63FF',
  },
  {
    id: 2,
    title: 'Distance Education Admission Management System',
    company: 'University of Madras',
    type: 'Internship / Final Project',
    duration: 'Jan 2024 – Apr 2024',
    location: 'Chennai, Tamil Nadu',
    stack: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    points: [
      'Built a complete full-stack admission portal for university distance education programs from scratch.',
      'Implemented multi-role login system supporting Admin, Staff, and Student dashboards with role-based access.',
      'Automated application processing pipeline and real-time status tracking for applicants.',
      'Optimized database queries and ensured secure user authentication across all roles.',
    ],
    color: '#3EC6E0',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm mb-3 tracking-widest uppercase">My journey</p>
          <h2 className="section-heading gradient-text">Experience</h2>
          <div className="w-20 h-1 mx-auto rounded-full" style={{ background: 'linear-gradient(90deg, #6C63FF, #3EC6E0)' }} />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-gradient-to-b from-primary via-secondary to-primary opacity-30" />

          <div className="flex flex-col gap-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className={`relative grid md:grid-cols-2 gap-4 md:gap-8 items-start ${
                  i % 2 === 0 ? '' : 'md:[&>*:first-child]:order-2'
                }`}
              >
                {/* Card */}
                <div className="md:col-span-1">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="glass rounded-2xl p-6 relative overflow-hidden"
                  >
                    {/* Top gradient bar */}
                    <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
                      style={{ background: `linear-gradient(90deg, ${exp.color}, ${i % 2 === 0 ? '#3EC6E0' : '#6C63FF'})` }}
                    />

                    {/* Header */}
                    <div className="flex items-start gap-3 mb-4">
                      <div className="p-2.5 rounded-xl shrink-0"
                        style={{ background: `${exp.color}22` }}>
                        <RiBriefcaseLine size={20} style={{ color: exp.color }} />
                      </div>
                      <div>
                        <h3 className="font-bold text-base dark:text-white leading-tight">{exp.title}</h3>
                        <p className="text-primary font-semibold text-sm mt-0.5">{exp.company}</p>
                      </div>
                    </div>

                    {/* Meta */}
                    <div className="flex flex-wrap gap-3 mb-4 text-xs text-gray-400">
                      <span className="flex items-center gap-1">
                        <RiCalendarLine size={13} />
                        {exp.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <RiMapPinLine size={13} />
                        {exp.location}
                      </span>
                      <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-primary/20 text-primary">
                        {exp.type}
                      </span>
                    </div>

                    {/* Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {exp.stack.map(tech => (
                        <span key={tech} className="px-2 py-0.5 rounded-lg text-xs font-mono bg-white/5 text-gray-300 border border-white/10">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Points */}
                    <ul className="space-y-2">
                      {exp.points.map((point, j) => (
                        <li key={j} className="flex gap-2 text-sm text-gray-400 leading-relaxed">
                          <RiCheckLine size={16} className="text-primary shrink-0 mt-0.5" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>

                {/* Timeline dot (center) */}
                <div className="hidden md:flex items-start justify-center pt-6 absolute left-1/2 -translate-x-1/2">
                  <div className="w-4 h-4 rounded-full border-2 border-primary bg-dark-900 z-10 shadow-lg shadow-primary/50" />
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
