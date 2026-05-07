import { useState } from 'react'
import { motion } from 'framer-motion'
import { RiMailLine, RiLinkedinLine, RiGithubLine, RiMapPinLine, RiSendPlaneLine } from 'react-icons/ri'
import emailjs from '@emailjs/browser'
import toast from 'react-hot-toast'

const EMAILJS_SERVICE_ID  = 'service_n30a9n8'
const EMAILJS_TEMPLATE_ID = 'template_hq2qqjd'
const EMAILJS_PUBLIC_KEY  = 'LzCPwcurztAufl9Cq'

const info = [
  { icon: RiMailLine,     label: 'Email',    value: 'hemanoffice31@gmail.com',   href: 'mailto:hemanoffice31@gmail.com' },
  { icon: RiLinkedinLine, label: 'LinkedIn', value: 'linkedin.com/in/heman-raj', href: 'https://www.linkedin.com/in/heman-raj' },
  { icon: RiGithubLine,   label: 'GitHub',   value: 'github.com/Heman031',       href: 'https://github.com/Heman031' },
  { icon: RiMapPinLine,   label: 'Location', value: 'Chennai, Tamil Nadu, India', href: null },
]

const inputCls = `w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-primary/60 focus:bg-primary/5 transition-all duration-200`

export default function Contact() {
  const [form, setForm]       = useState({ name: '', email: '', subject: '', message: '' })
  const [loading, setLoading] = useState(false)

  const handleChange = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  const validateEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

  const handleSubmit = async e => {
    e.preventDefault()
    const { name, email, subject, message } = form
    if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) { toast.error('Please fill in all fields.'); return }
    if (!validateEmail(email)) { toast.error('Please enter a valid email address.'); return }
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
    <section id="contact" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <p className="text-primary font-mono text-sm mb-3 tracking-widest uppercase">Let's connect</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(135deg,#6C63FF,#3EC6E0)' }}>Hire Me / Contact</h2>
          <div className="w-20 h-1 mx-auto rounded-full" style={{ background: 'linear-gradient(90deg,#6C63FF,#3EC6E0)' }} />
          <p className="text-gray-400 text-lg mt-4">Have an opportunity or want to collaborate? I'd love to hear from you.</p>
        </motion.div>
        <div className="grid lg:grid-cols-5 gap-8">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-2 flex flex-col gap-4">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 mb-2">
              <h3 className="font-bold text-lg text-white mb-2">Open to opportunities</h3>
              <p className="text-gray-400 text-sm leading-relaxed">I'm currently looking for full-time roles, internships, or freelance projects in web development. Feel free to reach out — let's build something great together!</p>
            </div>
            {info.map(({ icon: Icon, label, value, href }) => (
              <motion.div key={label} whileHover={{ x: 4 }} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 flex items-center gap-4">
                <div className="p-3 rounded-xl shrink-0" style={{ background: 'linear-gradient(135deg,#6C63FF22,#3EC6E022)' }}><Icon size={20} className="text-primary" /></div>
                <div>
                  <div className="text-xs text-gray-500 mb-0.5">{label}</div>
                  {href ? <a href={href} target="_blank" rel="noopener noreferrer" className="text-sm text-white hover:text-primary transition-colors font-medium">{value}</a> : <span className="text-sm text-white font-medium">{value}</span>}
                </div>
              </motion.div>
            ))}
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-3">
            <form onSubmit={handleSubmit} noValidate>
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div><label className="block text-xs text-gray-400 mb-2 font-medium">Full Name *</label><input name="name" value={form.name} onChange={handleChange} placeholder="Heman Raj" className={inputCls} /></div>
                  <div><label className="block text-xs text-gray-400 mb-2 font-medium">Email *</label><input name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@example.com" className={inputCls} /></div>
                </div>
                <div><label className="block text-xs text-gray-400 mb-2 font-medium">Subject *</label><input name="subject" value={form.subject} onChange={handleChange} placeholder="Job Opportunity / Collaboration" className={inputCls} /></div>
                <div><label className="block text-xs text-gray-400 mb-2 font-medium">Message *</label><textarea name="message" value={form.message} onChange={handleChange} placeholder="Tell me about the opportunity..." rows={6} className={`${inputCls} resize-none`} /></div>
                <motion.button type="submit" disabled={loading} whileHover={!loading ? { scale: 1.02 } : {}} whileTap={!loading ? { scale: 0.98 } : {}} className="w-full flex items-center justify-center gap-2 py-3.5 text-base font-semibold text-white rounded-xl disabled:opacity-60 disabled:cursor-not-allowed" style={{ background: 'linear-gradient(135deg,#6C63FF,#3EC6E0)' }}>
                  {loading ? <><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />Sending...</> : <><RiSendPlaneLine size={18} />Send Message</>}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}