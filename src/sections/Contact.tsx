import { useEffect, useRef, useState } from 'react'
import SectionHeading from '../components/SectionHeading'
import './Contact.css'

type FormState = { name: string; email: string; company: string; message: string }
type Errors = Partial<Record<keyof FormState, string>>

export default function Contact() {
  const ref = useRef<HTMLElement>(null)
  const [form, setForm] = useState<FormState>({ name: '', email: '', company: '', message: '' })
  const [errors, setErrors] = useState<Errors>({})
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    const el = ref.current; if (!el) return
    const io = new IntersectionObserver(e => e.forEach(x => x.isIntersecting && x.target.classList.add('in')), { threshold: 0.1 })
    el.querySelectorAll('.reveal').forEach(n => io.observe(n))
    return () => io.disconnect()
  }, [])

  function validate(values: FormState): Errors {
    const e: Errors = {}
    if (!values.name.trim()) e.name = 'Please enter your name.'
    if (!values.email.trim()) e.email = 'Please enter your email.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) e.email = 'Please enter a valid email.'
    if (!values.message.trim()) e.message = 'Please tell us about your project.'
    else if (values.message.trim().length < 10) e.message = 'Message should be at least 10 characters.'
    return e
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target
    setForm(f => ({ ...f, [name]: value }))
    if (errors[name as keyof FormState]) {
      setErrors(err => ({ ...err, [name]: undefined }))
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const v = validate(form)
    setErrors(v)
    if (Object.keys(v).length) return
    setSubmitting(true)
    // Simulate submission
    await new Promise(r => setTimeout(r, 900))
    setSubmitting(false)
    setSubmitted(true)
    setForm({ name: '', email: '', company: '', message: '' })
  }

  return (
    <section id="contact" className="section contact-section" ref={ref}>
      <div className="container">
        <div className="grid-2">
          <div className="reveal">
            <SectionHeading
              eyebrow="Contact"
              title="Let's build something intelligent together."
              lead="Tell us about your goals and we'll help you find the right AI solution for your business."
            />
            <div className="contact-info">
              <div className="contact-info-item">
                <span className="contact-info-label">Email</span>
                <a href="mailto:hello@trixtin.ai">hello@trixtin.ai</a>
              </div>
              <div className="contact-info-item">
                <span className="contact-info-label">Response time</span>
                <span>Within 1 business day</span>
              </div>
              <div className="contact-info-item">
                <span className="contact-info-label">Engagements</span>
                <span>Strategy, pilots, production</span>
              </div>
            </div>
          </div>
          <div className="contact-form-wrap reveal">
            {submitted ? (
              <div className="contact-success">
                <div className="success-icon">✓</div>
                <h3>Message received</h3>
                <p>Thanks for reaching out. We'll get back to you shortly.</p>
                <button className="btn btn-primary" onClick={() => setSubmitted(false)}>Send another</button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <div className="form-row">
                  <label>
                    Name
                    <input name="name" value={form.name} onChange={handleChange} placeholder="Your name" />
                    {errors.name && <span className="form-error">{errors.name}</span>}
                  </label>
                  <label>
                    Email
                    <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@company.com" />
                    {errors.email && <span className="form-error">{errors.email}</span>}
                  </label>
                </div>
                <label>
                  Company
                  <input name="company" value={form.company} onChange={handleChange} placeholder="Your company (optional)" />
                </label>
                <label>
                  Message
                  <textarea name="message" value={form.message} onChange={handleChange} rows={5} placeholder="Tell us about your project..." />
                  {errors.message && <span className="form-error">{errors.message}</span>}
                </label>
                <button type="submit" className="btn btn-primary form-submit" disabled={submitting}>
                  {submitting ? 'Sending…' : 'Send Enquiry'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
