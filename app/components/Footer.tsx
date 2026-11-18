export default function Footer() {
  return (
    <footer style={{ padding: '50px max(6%, 120px) 50px 6%', background: 'var(--blue)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
      <span style={{ fontFamily: 'var(--font-display)', fontSize: '28px', color: '#fff', textTransform: 'uppercase' }}>Ahmed Bouhtit</span>
      <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '13px', letterSpacing: '1px', margin: 0 }}>
        Powered by <span style={{ color: '#fff', fontWeight: 600 }}>Ahmed Bouhtit - 2026</span>
      </p>
    </footer>
  )
}
