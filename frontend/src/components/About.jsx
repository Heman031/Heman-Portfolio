import { motion } from 'framer-motion'
import { RiComputerLine, RiRocketLine, RiRulerLine, RiGraduationCapLine } from 'react-icons/ri'

const highlights = [
  { icon: RiComputerLine, title: 'Core Technologies', desc: 'Strong in HTML, CSS, JS, PHP, MySQL' },
  { icon: RiRocketLine, title: 'Real-World Experience', desc: 'Internship experience with industry projects' },
  { icon: RiRulerLine, title: 'Scalable Design', desc: 'Passion for scalable application architecture' },
  { icon: RiGraduationCapLine, title: 'Academic Excellence', desc: 'MSc Computer Science, University of Madras' },
]

const stats = [
  { value: '4+', label: 'Projects' },
  { value: '2', label: 'Internships' },
  { value: '1+', label: 'Years Experience' },
  { value: '10+', label: 'Technologies' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function About() {
  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm mb-3 tracking-widest uppercase">Get to know me</p>
          <h2 className="section-heading gradient-text">About Me</h2>
          <div className="w-20 h-1 mx-auto rounded-full" style={{ background: 'linear-gradient(90deg, #6C63FF, #3EC6E0)' }} />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Avatar card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-center"
          >
            <div className="relative mb-8">
              <div
                className="w-52 h-52 rounded-3xl flex items-center justify-center text-6xl font-black text-white shadow-2xl"
                style={{ background: 'linear-gradient(135deg, #6C63FF, #3EC6E0)' }}
              >
                HR
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 rounded-2xl glass flex items-center justify-center text-2xl animate-float">
                💻
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-2xl glass flex items-center justify-center text-2xl animate-float-delay">
                🚀
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
              {stats.map(({ value, label }) => (
                <motion.div
                  key={label}
                  whileHover={{ scale: 1.05 }}
                  className="glass rounded-2xl p-4 text-center"
                >
                  <div className="text-3xl font-black gradient-text">{value}</div>
                  <div className="text-gray-400 text-sm mt-1">{label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Text + highlights */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl font-bold mb-4 dark:text-white">
              MSc Computer Science Graduate &{' '}
              <span className="gradient-text">Full Stack Developer</span>
            </h3>
            <p className="text-gray-400 leading-relaxed mb-8 text-lg">
              I am a motivated MSc Computer Science postgraduate with a strong passion for full-stack web development 
              and problem-solving. I enjoy building clean, scalable applications that solve real-world challenges. 
              With hands-on experience in internships and academic projects, I am actively seeking opportunities 
              to grow as a developer and contribute to meaningful technology solutions.
            </p>

            {/* Highlight cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map(({ icon: Icon, title, desc }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.03, y: -2 }}
                  className="glass rounded-2xl p-4 flex gap-3 items-start cursor-default"
                >
                  <div className="p-2 rounded-xl shrink-0" style={{ background: 'linear-gradient(135deg, #6C63FF22, #3EC6E022)' }}>
                    <Icon size={20} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm dark:text-white mb-1">{title}</div>
                    <div className="text-gray-400 text-xs leading-relaxed">{desc}</div>
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
