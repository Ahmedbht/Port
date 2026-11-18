'use client'
import SectionTitle from './SectionTitle'

const skills = [
  'React','FastAPI','Python', 'TypeScript', 'Next.js', 'C', 'Django','Java','Git', 'GitHub','HTML', 'CSS', 'JavaScript', 'PHP', 'VB.NET', 'Responsive Design', 'UI / UX Basics', 'Flutter', 'Dart', 'Firebase', 'CI/CD (Codemagic)', 'App Store / Google Play publishing',

]

export default function Skills() {
  return (
    <section id="skills" style={{ padding: '110px 6%', background: 'var(--cream-deep)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
      <SectionTitle eyebrow="02 — What I use" title="Skills" />
      <p style={{ color: 'var(--muted)', letterSpacing: '1px', fontSize: '16px', margin: '-24px 0 0' }}>
        I constantly try to improve
      </p>
      <div style={{ marginTop: '34px', display: 'flex', flexWrap: 'wrap', gap: '14px' }}>
        {skills.map(skill => (
          <span
            key={skill}
            style={{
              padding: '12px 22px',
              borderRadius: '999px',
              background: 'var(--card)',
              color: 'var(--ink)',
              fontSize: '14px',
              fontWeight: 500,
              border: '1px solid var(--line)',
              cursor: 'default',
              transition: 'all 0.35s ease',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget
              el.style.transform = 'translateY(-4px)'
              el.style.background = 'var(--blue)'
              el.style.borderColor = 'var(--blue)'
              el.style.color = '#fff'
            }}
            onMouseLeave={e => {
              const el = e.currentTarget
              el.style.transform = 'none'
              el.style.background = 'var(--card)'
              el.style.borderColor = 'var(--line)'
              el.style.color = 'var(--ink)'
            }}
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  )
}
