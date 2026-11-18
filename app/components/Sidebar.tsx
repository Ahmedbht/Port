const verticalText = {
  writingMode: 'vertical-rl' as const,
  transform: 'rotate(180deg)',
  textTransform: 'uppercase' as const,
  letterSpacing: '3px',
  fontSize: '10px',
  fontWeight: 600,
  whiteSpace: 'nowrap' as const,
}

export default function Sidebar() {
  return (
    <aside
      className="sidebar"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        bottom: 0,
        width: 'var(--sidebar)',
        background: 'var(--card)',
        borderRight: '1px solid var(--line)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        zIndex: 1001,
      }}
    >
      {/* top: logo star + what I do */}
      <svg width="20" height="20" viewBox="0 0 24 24" style={{ marginTop: '26px', flexShrink: 0 }} aria-hidden="true">
        {Array.from({ length: 12 }).map((_, i) => (
          <line key={i} x1="12" y1="1" x2="12" y2="23" stroke="var(--blue)" strokeWidth="1.6" transform={`rotate(${i * 15} 12 12)`} />
        ))}
      </svg>
      <span style={{ ...verticalText, color: 'var(--blue)', marginTop: '22px' }}>Web · Mobile · APIs</span>

      {/* bottom: availability */}
      <div style={{ marginTop: 'auto', width: '100%', height: '58%', background: 'var(--blue)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', padding: '26px 0 18px' }}>
        <span style={{ ...verticalText, color: '#fff' }}>Based in Tetouan, Morocco · Open to freelance &amp; full-time work</span>
        <div style={{ display: 'flex', gap: '2px', height: '38px', marginTop: '16px' }} aria-hidden="true">
          {[2, 1, 3, 1, 2, 1, 1, 3].map((w, i) => (
            <span key={i} style={{ width: `${w}px`, background: '#fff', opacity: 0.85 }} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .sidebar { display: none !important; }
        }
      `}</style>
    </aside>
  )
}
