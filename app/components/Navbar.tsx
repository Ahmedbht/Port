'use client'

import { useState, useEffect } from 'react'
const navLinks = [
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
      const sections = ['home', 'projects', 'skills', 'education', 'about', 'contact']
      for (const id of sections) {
        const el = document.getElementById(id)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(id)
            break
          }
        }
      }
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Hamburger button - mobile only */}
      <button
        onClick={() => setMenuOpen(v => !v)}
        aria-label="Toggle menu"
        style={{
          display: 'none',
          position: 'fixed',
          top: '16px',
          right: '20px',
          zIndex: 1100,
          flexDirection: 'column',
          gap: '5px',
          background: 'transparent',
          border: 'none',
          padding: '8px',
          cursor: 'pointer',
        }}
        className="hamburger-btn"
      >
        <span style={{ display: 'block', width: '24px', height: '2px', background: 'var(--blue)', borderRadius: '2px', transition: 'all 0.3s', transform: menuOpen ? 'translateY(7px) rotate(45deg)' : 'none' }} />
        <span style={{ display: 'block', width: '24px', height: '2px', background: 'var(--blue)', borderRadius: '2px', transition: 'all 0.3s', opacity: menuOpen ? 0 : 1 }} />
        <span style={{ display: 'block', width: '24px', height: '2px', background: 'var(--blue)', borderRadius: '2px', transition: 'all 0.3s', transform: menuOpen ? 'translateY(-7px) rotate(-45deg)' : 'none' }} />
      </button>

      {/* Mobile fullscreen menu */}
      <div style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1050,
        background: 'var(--cream)',
        flexDirection: 'column',
        transition: 'opacity 0.3s, visibility 0.3s',
        opacity: menuOpen ? 1 : 0,
        visibility: menuOpen ? 'visible' : 'hidden',
        display: 'none',
      }} className="mobile-menu">
        <ul style={{ listStyle: 'none', margin: 0, padding: '100px 30px 0', display: 'flex', flexDirection: 'column' }}>
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1)
            return (
              <li key={link.href} style={{ padding: '16px 0', borderBottom: '1px solid var(--line)' }}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  style={{ textDecoration: 'none', fontFamily: 'var(--font-display)', fontSize: '40px', textTransform: 'uppercase', color: isActive ? 'var(--blue)' : 'var(--ink)', transition: 'color 0.3s' }}
                >
                  {link.label}
                </a>
              </li>
            )
          })}
        </ul>
        <a href="/AHMEDBOUHTIT-CV.pdf" download style={{ margin: '36px 30px 0', alignSelf: 'flex-start', padding: '12px 24px', borderRadius: '30px', background: 'var(--blue)', color: '#fff', textDecoration: 'none', fontSize: '13px', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase' }}>
          Resume ↓
        </a>
      </div>

      {/* Top bar */}
      <header className="site-header" style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '68px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 6%',
        zIndex: 1000,
        background: scrolled ? 'rgba(243,236,225,0.88)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        borderBottom: `1px solid ${scrolled ? 'var(--line)' : 'transparent'}`,
        transition: 'background 0.3s, border-color 0.3s',
      }}>
        <a href="#home" style={{ fontFamily: 'var(--font-display)', fontSize: '22px', color: 'var(--blue)', textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
          Ahmed Bouhtit
        </a>

        <nav className="desktop-nav" style={{ display: 'flex', gap: '36px', alignItems: 'center' }}>
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1)
            return (
              <a
                key={link.href}
                href={link.href}
                style={{
                  textDecoration: 'none',
                  color: isActive ? 'var(--blue)' : 'var(--ink)',
                  fontSize: '12px',
                  fontWeight: 600,
                  letterSpacing: '2.5px',
                  textTransform: 'uppercase',
                  paddingBottom: '4px',
                  borderBottom: `2px solid ${isActive ? 'var(--blue)' : 'transparent'}`,
                  transition: 'color 0.3s, border-color 0.3s',
                }}
              >
                {link.label}
              </a>
            )
          })}
        </nav>

        <a
          href="/AHMEDBOUHTIT-CV.pdf"
          download
          className="desktop-nav"
          style={{ padding: '9px 20px', borderRadius: '30px', border: '1.5px solid var(--blue)', color: 'var(--blue)', textDecoration: 'none', fontSize: '12px', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', transition: 'background 0.3s, color 0.3s' }}
          onMouseEnter={e => { e.currentTarget.style.background = 'var(--blue)'; e.currentTarget.style.color = '#fff' }}
          onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--blue)' }}
        >
          Resume ↓
        </a>
      </header>

      <style>{`
        @media (max-width: 1024px) {
          .hamburger-btn { display: flex !important; }
          .mobile-menu { display: flex !important; }
          .desktop-nav { display: none !important; }
          .site-header { padding: 0 20px !important; }
        }
      `}</style>
    </>
  )
}
