'use client'
import SectionTitle from './SectionTitle'

const socials = [
  { label: 'GitHub',    sub: 'Currently on',   href: 'https://github.com/Ahmedbht' },
  { label: 'LinkedIn',  sub: "Let's connect",  href: 'https://www.linkedin.com/in/ahmed-bouhtit-48a880166/' },
  { label: 'Instagram', sub: 'Follow me',href: 'https://www.instagram.com/call_me_tigre1' },
]

export default function About() {
  return (
    <section id="about" style={{ padding: '110px 6%', background: 'var(--cream-deep)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
      <SectionTitle eyebrow="04 — Who I am" title="About me" />

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gridTemplateRows: '1fr 1fr', gap: '20px' }} className="about-grid">

        {/* Main card */}
        <div style={{ gridRow: 'span 2', background: 'var(--card)', border: '1px solid var(--line)', borderRadius: '20px', padding: '40px' }}>
          <img
            src="/ana.png"
            alt="Ahmed"
            style={{ width: '150px', height: '150px', objectFit: 'cover', marginBottom: '30px', borderRadius: '999px 999px 20px 20px', border: '3px solid var(--blue)' }}
            onError={e => { (e.target as HTMLImageElement).style.display = 'none' }}
          />
          <h2 style={{ fontSize: '34px', lineHeight: 1.25, color: 'var(--ink)', fontWeight: 500, margin: 0 }}>
            Hi, I'm <span style={{ color: 'var(--blue)', fontWeight: 600 }}>Ahmed</span>. I build cool{' '}
            <span style={{ color: 'var(--muted)' }}>websites like this one.</span>
          </h2>
          <a href="#contact" style={{ display: 'inline-block', marginTop: '30px', color: 'var(--blue)', textDecoration: 'none', fontSize: '17px', fontWeight: 600 }}>
            Contact me →
          </a>
        </div>

        {/* Social cards */}
        {socials.map(s => (
          <a
            key={s.label}
            href={s.href}
            style={{
              background: 'var(--card)',
              border: '1px solid var(--line)',
              borderRadius: '20px',
              padding: '30px',
              color: 'var(--ink)',
              textDecoration: 'none',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              transition: 'transform 0.3s ease, background 0.3s, color 0.3s',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.background = 'var(--blue)'; e.currentTarget.style.color = '#fff' }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.background = 'var(--card)'; e.currentTarget.style.color = 'var(--ink)' }}
          >
            <small style={{ fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase', opacity: 0.7 }}>{s.sub}</small>
            <h3 style={{ margin: '8px 0 0', fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: '30px', textTransform: 'uppercase' }}>{s.label} ↗</h3>
          </a>
        ))}
      </div>

      <p style={{ marginTop: '44px', maxWidth: '760px', color: 'var(--muted)', fontSize: '18px', lineHeight: 1.7 }}>
        I'm passionate about creating meaningful experiences. I design and build solutions that make life easier and more enjoyable, blending functionality with thoughtful, intuitive design.
      </p>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; grid-template-rows: auto !important; }
          .about-grid > div:first-child { grid-row: span 1 !important; }
        }
      `}</style>
    </section>
  )
}
