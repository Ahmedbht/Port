'use client'

import { useState } from 'react'
import emailjs from '@emailjs/browser'
import SectionTitle from './SectionTitle'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      await emailjs.send(
        'service_xqzr0yc',
        'template_7abkc9a',
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
        },
        'NBKgYtOumoCk40OH4'
      )
      setStatus("✅ Message sent! I'll get back to you soon.")
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      setStatus('❌ Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }
  const inputStyle = {
    background: 'var(--cream)',
    border: '1px solid var(--line)',
    borderRadius: '12px',
    padding: '15px',
    color: 'var(--ink)',
    fontSize: '15px',
    fontFamily: 'inherit',
    width: '100%',
    outline: 'none',
  }
  return (
    <section id="contact" style={{ background: 'var(--cream)', padding: '110px 6%' }}>
      <SectionTitle eyebrow="05 — Contact" title="Let's talk" />

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '30px' }} className="contact-grid">

        {/*LEFT*/}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
          <div style={{ background: 'var(--blue)', borderRadius: '24px', padding: '35px', boxShadow: '0 30px 60px -34px rgba(30,36,138,0.7)' }}>
            {[
              { icon: '✉', text: 'ahmedbouhtit8@email.com' },
              { icon: '📞', text: '+212 600300965' },
              { icon: '📍', text: 'Tetouan, Morocco' },
            ].map(item => (
              <div key={item.text} style={{ display: 'flex', gap: '14px', alignItems: 'center', color: '#fff', marginBottom: '18px', fontSize: '16px' }}>
                <span>{item.icon}</span>
                <p style={{ margin: 0 }}>{item.text}</p>
              </div>
            ))}
          </div>

          <div style={{ background: 'var(--card)', border: '1px solid var(--line)', borderRadius: '24px', padding: '35px' }}>
            <h3 style={{ color: 'var(--blue)', marginBottom: '25px', fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: '30px', textTransform: 'uppercase', marginTop: 0 }}>Follow My Journey</h3>
            <div style={{ display: 'flex', gap: '16px' }}>
              {[
                { label: 'GitHub',   href: 'https://github.com/Ahmedbht' },
                { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ahmed-bouhtit-48a880166/' },
    
              ].map(s => (
                <a key={s.label} href={s.href} style={{ flex: 1, padding: '15px', borderRadius: '30px', textAlign: 'center', fontWeight: 600, color: 'var(--blue)', border: '1.5px solid var(--blue)', textDecoration: 'none', transition: 'transform 0.3s, background 0.3s, color 0.3s' }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.background = 'var(--blue)'; e.currentTarget.style.color = '#fff' }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--blue)' }}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div style={{ background: 'var(--card)', border: '1px solid var(--line)', borderRadius: '24px', padding: '35px' }}>
          <h3 style={{ color: 'var(--blue)', marginBottom: '10px', fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: '30px', textTransform: 'uppercase', marginTop: 0 }}>Start a Conversation</h3>
          <p style={{ color: 'var(--muted)', marginBottom: '20px' }}>Fill out the form below and I'll get back to you soon</p>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            <input type="text" name="name" placeholder="Your Name..." value={form.name} onChange={handleChange} required style={inputStyle} />
            <input type="email" name="email" placeholder="Your Email..." value={form.email} onChange={handleChange} required style={inputStyle} />
            <input type="text" name="subject" placeholder="Subject..." value={form.subject} onChange={handleChange} style={inputStyle} />
            <textarea name="message" placeholder="Your message..." value={form.message} onChange={handleChange} required style={{ ...inputStyle, minHeight: '120px', resize: 'vertical' }} />
            {status && <p style={{ color: 'var(--blue)', fontSize: '14px', margin: 0 }}>{status}</p>}
            <button type="submit" disabled={loading} style={{ background: 'var(--blue)', color: '#fff', padding: '16px', border: 'none', borderRadius: '30px', fontSize: '16px', fontWeight: 600, fontFamily: 'inherit', cursor: 'pointer', transition: 'transform 0.3s, background 0.3s', opacity: loading ? 0.7 : 1 }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.background = 'var(--blue-dark)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.background = 'var(--blue)' }}
            >
              {loading ? 'Sending…' : 'Send Message →'}
            </button>
          </form>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
        #contact input::placeholder, #contact textarea::placeholder { color: var(--muted); }
        #contact input:focus, #contact textarea:focus { border-color: var(--blue) !important; }
      `}</style>
    </section>
  )
}
