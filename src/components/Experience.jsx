import { motion } from 'framer-motion'
import { RiBriefcaseLine, RiCalendarLine, RiMapPinLine, RiCheckboxCircleLine } from 'react-icons/ri'

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
      'Performed data preprocessing and feature engineering on large financial datasets.',
      'Applied ML algorithms including Logistic Regression and Random Forest for fraud pattern identification.',
      'Achieved significant improvement in fraud detection accuracy through iterative model tuning.',
      'Created comprehensive data visualizations to present findings to the team.',
    ],
    color: '#6C63FF',
    icon: '🔍',
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
      'Built a complete full-stack admission portal for university distance education programs.',
      'Implemented multi-role login system supporting Admin, Staff, and Student dashboards.',
      'Automated application processing pipeline and real-time status tracking for applicants.',
      'Optimized database queries and ensured secure user authentication across all roles.',
    ],
    color: '#3EC6E0',
    icon: '🎓',
  },
]

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-28 px-4"
      style={{ background: 'var(--bg-elevated)' }}
    >
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="section-badge justify-center">My journey</div>
          <h2 className="section-heading gradient-text">Experience</h2>
          <div className="w-16 h-1 mx-auto rounded-full" style={{ background: 'linear-gradient(90deg, #6C63FF, #3EC6E0)' }} />
        </motion.div>

        {/* Timeline */}
        <div className="relative pl-10">
          {/* Vertical line */}
          <div className="timeline-line" />

          <div className="flex flex-col gap-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.65, delay: i * 0.1 }}
                className="relative"
              >
                {/* Timeline dot */}
                <div
                  className="timeline-dot"
                  style={{ top: '1.75rem', boxShadow: `0 0 0 3px var(--bg-elevated), 0 0 14px ${exp.color}80` }}
                />

                {/* Card */}
                <motion.div
                  whileHover={{ x: 4 }}
                  className="rounded-2xl overflow-hidden transition-all duration-300"
                  style={{
                    background: 'var(--bg-surface)',
                    border: `1px solid var(--border-default)`,
                    borderLeft: `4px solid ${exp.color}`,
                    boxShadow: 'var(--shadow-card)',
                  }}
                >
                  {/* Top accent bar */}
                  <div
                    className="h-1"
                    style={{ background: `linear-gradient(90deg, ${exp.color}, ${i === 0 ? '#3EC6E0' : '#6C63FF'})` }}
                  />

                  <div className="p-6">
                    {/* Header row */}
                    <div className="flex items-start gap-3.5 mb-4">
                      <div
                        className="p-2.5 rounded-xl shrink-0 text-xl"
                        style={{ background: `${exp.color}18` }}
                      >
                        {exp.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-base leading-snug mb-1" style={{ color: 'var(--text-primary)' }}>
                          {exp.title}
                        </h3>
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="font-semibold text-sm" style={{ color: exp.color }}>
                            {exp.company}
                          </span>
                          <span
                            className="px-2 py-0.5 rounded-full text-xs font-medium"
                            style={{ background: `${exp.color}18`, color: exp.color }}
                          >
                            {exp.type}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Meta */}
                    <div className="flex flex-wrap gap-4 mb-4 text-xs" style={{ color: 'var(--text-muted)' }}>
                      <span className="flex items-center gap-1.5">
                        <RiCalendarLine size={13} />
                        {exp.duration}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <RiMapPinLine size={13} />
                        {exp.location}
                      </span>
                    </div>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {exp.stack.map(tech => (
                        <span key={tech} className="tech-badge">{tech}</span>
                      ))}
                    </div>

                    {/* Bullet points */}
                    <ul className="space-y-2">
                      {exp.points.map((point, j) => (
                        <motion.li
                          key={j}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: j * 0.07 }}
                          className="flex gap-2.5 text-sm leading-relaxed"
                          style={{ color: 'var(--text-secondary)' }}
                        >
                          <RiCheckboxCircleLine
                            size={16}
                            className="shrink-0 mt-0.5"
                            style={{ color: exp.color }}
                          />
                          {point}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
