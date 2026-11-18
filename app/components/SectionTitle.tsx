// Shared heading: small numbered eyebrow + big condensed title
export default function SectionTitle({ eyebrow, title, align = 'left' }: { eyebrow: string; title: string; align?: 'left' | 'center' }) {
  return (
    <div style={{ textAlign: align, marginBottom: '50px' }}>
      <p style={{ color: 'var(--blue)', fontSize: '12px', fontWeight: 600, letterSpacing: '4px', textTransform: 'uppercase', margin: '0 0 14px' }}>
        {eyebrow}
      </p>
      <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'clamp(48px, 7vw, 84px)', lineHeight: 0.92, color: 'var(--blue)', textTransform: 'uppercase', margin: 0 }}>
        {title}
      </h2>
      <span style={{ display: 'inline-block', width: '44px', height: '3px', background: 'var(--blue)', marginTop: '22px' }} />
    </div>
  )
}
