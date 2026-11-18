'use client'

// Swap this for the new photo when it's ready (a cut-out PNG works best)
const HERO_PHOTO = '/ana.png'

// Keep these in sync with the projects and skills lists
const stats = [
  { value: '25+', label: 'projects' },
  { value: '20+', label: 'skills' },
]

// Soft decorative spheres, like pearls floating around the hero
const spheres = [
  { size: 110, top: '58%', left: '-2%', delay: '0s' },
  { size: 70, top: '14%', right: '6%', delay: '1.5s' },
  { size: 150, bottom: '6%', right: '-3%', delay: '3s' },
]

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'grid',
        gridTemplateColumns: '1.05fr 1fr',
        alignItems: 'center',
        gap: '40px',
        padding: '110px 6% 60px',
        background: 'var(--cream)',
        borderBottom: '1px solid var(--line)',
        overflow: 'hidden',
      }}
      className="hero-grid"
    >
      {spheres.map((s, i) => (
        <span
          key={i}
          className="float hero-sphere"
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: s.top, left: s.left, right: s.right, bottom: s.bottom,
            width: s.size, height: s.size,
            borderRadius: '50%',
            background: 'radial-gradient(circle at 32% 28%, #ffffff 0%, #f4eee5 45%, #e2d6c3 100%)',
            boxShadow: '0 18px 40px -18px rgba(120,100,70,0.35)',
            animationDelay: s.delay,
            pointerEvents: 'none',
          }}
        />
      ))}

      {/* LEFT: intro */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <p className="reveal" style={{ color: 'var(--blue)', fontSize: '13px', fontWeight: 600, letterSpacing: '4px', textTransform: 'uppercase', margin: '0 0 18px' }}>
          Full-Stack &amp; Mobile Developer
        </p>
        <h1 className="reveal" style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'clamp(84px, 12vw, 190px)', lineHeight: 0.92, color: 'var(--blue)', textTransform: 'uppercase', margin: 0, animationDelay: '0.1s' }}>
          Ahmed<br />Bouhtit
        </h1>
        <span className="reveal" style={{ display: 'block', width: '44px', height: '3px', background: 'var(--blue)', margin: '30px 0 24px', animationDelay: '0.2s' }} />
        <p className="reveal" style={{ color: 'var(--ink)', maxWidth: '440px', lineHeight: 1.7, fontSize: '17px', margin: 0, animationDelay: '0.25s' }}>
          I design and develop experiences that make people's lives simple. I build web platforms with{' '}
          <strong style={{ color: 'var(--blue)', fontWeight: 600 }}>Next.js, React and FastAPI</strong>, and mobile apps with{' '}
          <strong style={{ color: 'var(--blue)', fontWeight: 600 }}>Flutter</strong>.
        </p>

        <div className="reveal" style={{ display: 'flex', gap: '28px', flexWrap: 'wrap', marginTop: '30px', animationDelay: '0.35s' }}>
          {stats.map(s => (
            <p key={s.label} style={{ margin: 0, display: 'flex', alignItems: 'baseline', gap: '7px' }}>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '28px', color: 'var(--blue)' }}>{s.value}</span>
              <span style={{ fontSize: '13px', color: 'var(--muted)' }}>{s.label}</span>
            </p>
          ))}
        </div>

        <div className="reveal" style={{ marginTop: '34px', display: 'flex', gap: '14px', flexWrap: 'wrap', animationDelay: '0.55s' }}>
          <a
            href="#contact"
            style={{ padding: '14px 28px', borderRadius: '30px', background: 'var(--blue)', color: '#fff', textDecoration: 'none', fontSize: '15px', fontWeight: 500, transition: 'transform 0.3s, background 0.3s' }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.background = 'var(--blue-dark)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.background = 'var(--blue)' }}
          >
            Connect with me →
          </a>
          <a
            href="/AHMEDBOUHTIT-CV.pdf"
            download
            style={{ padding: '14px 28px', borderRadius: '30px', border: '1.5px solid var(--blue)', color: 'var(--blue)', textDecoration: 'none', fontSize: '15px', fontWeight: 500, transition: 'transform 0.3s' }}
            onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-2px)')}
            onMouseLeave={e => (e.currentTarget.style.transform = 'none')}
          >
            Download Resume ↓
          </a>
        </div>
      </div>

      {/* RIGHT: photo composition */}
      <div className="reveal hero-photo" style={{ position: 'relative', height: '600px', animationDelay: '0.3s' }}>
        {/* sand circle */}
        <span style={{ position: 'absolute', top: '6%', right: '4%', width: '62%', aspectRatio: '1', borderRadius: '50%', background: 'var(--sand)' }} />
        {/* striped panel */}
        <span style={{ position: 'absolute', bottom: 0, left: '46%', width: '34%', height: '66%', borderRadius: '140px 140px 0 0', background: 'repeating-linear-gradient(90deg, rgba(160,135,95,0.35) 0 1px, transparent 1px 9px)' }} />
        {/* outline arch */}
        <span style={{ position: 'absolute', bottom: 0, left: '10%', width: '58%', height: '88%', borderRadius: '999px 999px 0 0', border: '1.5px solid var(--blue)', borderBottom: 'none', opacity: 0.5 }} />
        {/* photo arch */}
        <div style={{ position: 'absolute', bottom: 0, left: '17%', width: '58%', height: '86%', borderRadius: '999px 999px 0 0', overflow: 'hidden', background: 'var(--cream-deep)', boxShadow: '0 30px 60px -30px rgba(30,36,138,0.45)' }}>
          <img src={HERO_PHOTO} alt="Ahmed Bouhtit" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }} />
          <span style={{ position: 'absolute', inset: 'auto 0 0 0', height: '22%', background: 'linear-gradient(to top, var(--cream) 0%, transparent 100%)' }} />
        </div>
        {/* monogram badge */}
        <div style={{ position: 'absolute', top: '52%', right: '2%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
          <span style={{ width: '84px', height: '84px', borderRadius: '50%', background: 'var(--blue)', border: '4px solid var(--card)', boxShadow: '0 12px 30px -10px rgba(30,36,138,0.6)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontFamily: 'var(--font-display)', fontSize: '30px' }}>
            AB
          </span>
          <span style={{ color: 'var(--blue)', fontSize: '10px', fontWeight: 600, letterSpacing: '3px', textTransform: 'uppercase', textAlign: 'center', lineHeight: 1.6 }}>
            Ahmed B.<br />Tetouan
          </span>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; padding-top: 100px !important; }
          .hero-photo { height: 440px !important; max-width: 460px; width: 100%; margin: 0 auto; }
          .hero-sphere:nth-child(2) { display: none; }
        }
      `}</style>
    </section>
  )
}
