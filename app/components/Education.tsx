import React from 'react'
import SectionTitle from './SectionTitle'

const items = [
  { side: 'left',  icon: '🎓', degree: 'Bachelor in Computer Science',   place: 'SUPISI',            date: '2024 – 2027' },
  { side: 'right', icon: '🎓', degree: 'Licence (University Degree)',     place: 'ABDELMALE ESSAIDI', date: '2020 – 2022' },
  { side: 'left',  icon: '📚', degree: 'Online Courses & Certifications', place: 'UDEMY - COURSERA',  date: '2019 – 2023' },
]

export default function Education() {
  return (
    <section id="education" style={{ background: 'var(--cream)', padding: '110px 6%', overflow: 'hidden' }}>
      <SectionTitle eyebrow="03 — Path" title="Education" align="center" />
      <div style={{ maxWidth: '900px', margin: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '26px' }}>
        {items.map((item, i) => (
          <React.Fragment key={item.degree}>
            <div
              style={{
                width: '520px',
                maxWidth: '100%',
                padding: '30px 32px',
                background: 'var(--card)',
                border: '1px solid var(--line)',
                borderRadius: '20px',
                boxShadow: '0 24px 48px -34px rgba(30,36,138,0.4)',
                alignSelf: item.side === 'left' ? 'flex-start' : 'flex-end',
              }}
              className="edu-card"
            >
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '30px', color: 'var(--blue)' }}>{item.date}</span>
              <h3 style={{ margin: '10px 0 6px', fontSize: '19px', fontWeight: 600, color: 'var(--ink)' }}>{item.icon} {item.degree}</h3>
              <p style={{ color: 'var(--muted)', margin: 0, fontSize: '12px', fontWeight: 600, letterSpacing: '3px' }}>{item.place}</p>
            </div>
            {i < items.length - 1 && (
              <div style={{ width: '12px', height: '12px', background: 'var(--blue)', borderRadius: '50%', boxShadow: '0 0 0 6px rgba(43,51,184,0.12)' }} />
            )}
          </React.Fragment>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .edu-card { align-self: stretch !important; }
        }
      `}</style>
    </section>
  )
}
