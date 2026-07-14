import { useState } from 'react'
import { motion } from 'framer-motion'
import { RiMailLine, RiLinkedinLine, RiGithubLine, RiMapPinLine, RiSendPlaneLine, RiCheckLine } from 'react-icons/ri'
import emailjs from '@emailjs/browser'
import toast from 'react-hot-toast'

const EMAILJS_SERVICE_ID = 'service_n30a9n8'
const EMAILJS_TEMPLATE_ID = 'template_hq2qqjd'
const EMAILJS_PUBLIC_KEY = 'LzCPwcurztAufl9Cq'

const info = [
  { icon: RiMailLine, label: 'Email', value: 'hemanoffice31@gmail.com', href: 'mailto:hemanoffice31@gmail.com', color: '#6C63FF' },
  { icon: RiLinkedinLine, label: 'LinkedIn', value: 'linkedin.com/in/heman-raj', href: 'https://www.linkedin.com/in/heman-raj', color: '#0A66C2' },
  { icon: RiGithubLine, label: 'GitHub', value: 'github.com/Heman031', href: 'https://github.com/Heman031', color: '#6e5494' },
  { icon: RiMapPinLine, label: 'Location', value: 'Chennai, Tamil Nadu, India', href: null, color: '#3EC6E0' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [loading, setLoading] = useState(false)

  const handleChange = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  const validateEmail = e => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)

  const handleSubmit = async e => {
    e.preventDefault()
    const { name, email, subject, message } = form
    if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
      toast.error('Please fill in all fields.')
      return
    }
    if (!validateEmail(email)) {
      toast.error('Please enter a valid email address.')
      return
    }
    setLoading(true)
    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, { name, email, subject, message }, EMAILJS_PUBLIC_KEY)
      toast.success("Message sent! I'll get back to you soon 🚀")
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch (err) {
      console.error('EmailJS error:', err)
      toast.error('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-28 px-4" style={{ background: 'var(--bg-base)' }}>
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="section-badge justify-center">Let's connect</div>
          <h2 className="section-heading gradient-text">Hire Me / Contact</h2>
          <div className="w-16 h-1 mx-auto rounded-full" style={{ background: 'linear-gradient(90deg, #6C63FF, #3EC6E0)' }} />
          <p className="text-base mt-4 max-w-lg mx-auto" style={{ color: 'var(--text-muted)' }}>
            Have an opportunity or want to collaborate? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">

          {/* Left: Info panel */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 flex flex-col gap-4"
          >
            {/* Availability card */}
            <div
              className="rounded-2xl p-6 relative overflow-hidden"
              style={{
                background: 'var(--bg-surface)',
                border: '1px solid var(--border-default)',
                boxShadow: 'var(--shadow-card)',
              }}
            >
              {/* Top gradient accent */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5"
                style={{ background: 'linear-gradient(90deg, #6C63FF, #3EC6E0)' }}
              />
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <h3 className="font-bold text-base" style={{ color: 'var(--text-primary)' }}>
                  Open to opportunities
                </h3>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                I'm currently looking for full-time roles, internships, or freelance projects in web development.
                Feel free to reach out — let's build something great together!
              </p>
            </div>

            {/* Contact info cards */}
            {info.map(({ icon: Icon, label, value, href, color }) => (
              <motion.div
                key={label}
                whileHover={{ x: 5 }}
                className="rounded-2xl p-4 flex items-center gap-4 transition-all duration-200"
                style={{
                  background: 'var(--bg-surface)',
                  border: '1px solid var(--border-default)',
                  boxShadow: 'var(--shadow-card)',
                }}
              >
                <div
                  className="p-3 rounded-xl shrink-0"
                  style={{ background: `${color}15` }}
                >
                  <Icon size={20} style={{ color }} />
                </div>
                <div>
                  <div className="text-xs font-medium mb-0.5" style={{ color: 'var(--text-muted)' }}>
                    {label}
                  </div>
                  {href
                    ? (
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-semibold transition-colors duration-200 hover:underline"
                        style={{ color: 'var(--text-primary)' }}
                        onMouseEnter={e => e.target.style.color = color}
                        onMouseLeave={e => e.target.style.color = 'var(--text-primary)'}
                      >
                        {value}
                      </a>
                    )
                    : (
                      <span className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>
                        {value}
                      </span>
                    )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} noValidate>
              <div
                className="rounded-3xl p-8 space-y-5"
                style={{
                  border: '1px solid rgba(108, 99, 255, 0.3)',
                  background: 'rgba(255,255,255,0.03)',
                  backdropFilter: 'blur(10px)',
                  boxShadow: '0 0 20px rgba(108,99,255,0.15)',
                }}
              >
                {/* Name + Email row */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold mb-2" style={{ color: 'var(--text-muted)' }}>
                      Full Name *
                    </label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Heman Raj"
                      className="input-spatial"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold mb-2" style={{ color: 'var(--text-muted)' }}>
                      Email *
                    </label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="input-spatial"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-xs font-semibold mb-2" style={{ color: 'var(--text-muted)' }}>
                    Subject *
                  </label>
                  <input
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Job Opportunity / Collaboration"
                    className="input-spatial"
                  />
                </div>

                {/* Messag */}
                <div>
                  <label className="block text-xs font-semibold mb-2" style={{ color: 'var(--text-muted)' }}>
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about the opportunity..."
                    rows={6}
                    className="input-spatial input-spatial-area resize-none"
                  />
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={!loading ? { scale: 1.02, y: -1 } : {}}
                  whileTap={!loading ? { scale: 0.98 } : {}}
                  className="w-full flex items-center justify-center gap-2 py-3.5 text-sm font-semibold text-white rounded-xl disabled:opacity-60 disabled:cursor-not-allowed transition-all"
                  style={{ background: 'linear-gradient(135deg, #6C63FF, #3EC6E0)' }}
                >
                  {loading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <RiSendPlaneLine size={17} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}