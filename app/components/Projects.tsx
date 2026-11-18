'use client'

import { useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import SectionTitle from './SectionTitle'

const projects = [
  {
    id: 18,
    title: 'Horizon : Goal-Based Savings Planner',
    desc: 'Flutter mobile app for planning savings goals like a car, a home, travel or retirement. A dashboard shows your total saved and monthly plan across all goals. Each goal has a compound-growth projection chart with milestones based on an expected annual return, and a "What if I saved…" slider that instantly shows how the finish date moves. Supports MAD, USD, EUR and GBP, with light and dark themes.',
    tags: ['Flutter', 'Dart', 'Provider', 'fl_chart'],
    img: '/flutter3.jpg',
},
  {
    id: 19,
    title: 'MediTrack : Medication Reminder',
    desc: 'Flutter mobile app for tracking medications. Add each medication with its dosage, form and time, get reminder notifications, mark doses as taken or missed, and review your history on a calendar. An AI assistant (Gemini) explains what a medication is used for. Available in English, French and Arabic.',
    tags: ['Flutter', 'Dart', 'Local Notifications', 'Gemini AI'],
    img: '/flutter1.jpg',
},
  {
    id: 17,
    title: 'EV Finder : Mobile Charging Station Map',
    desc: 'Flutter mobile app that finds EV charging stations near you on a live OpenStreetMap map, using real-time data from the Open Charge Map API. Tap a station to see its address, connector types and number of charging points, and save your favorite stations on the device.',
    tags: ['Flutter', 'Dart', 'flutter_map', 'Open Charge Map API'],
    img: '/flutter2.jpg',
},
  {
    id: 20,
    title: 'Dotrova : AI Domain Scout',
    desc: 'AI domain scout that watches tech trends and finds valuable domain names before anyone registers them. It reads new posts from Hacker News, GitHub, Lobsters and Product Hunt, spots rising words, generates brandable .com, .ai and .si names, confirms availability with DNS and the official registry (RDAP), and scores each one like a domain investor, including a Flip score for cost vs. value. Features a live Scout Log streamed with Server-Sent Events, a Daily Catch of the top domains rebuilt every day, and Portfolio Watch for domains you own. A GitHub Actions pipeline refreshes the data every 12 hours, for $0 running cost.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'FastAPI', 'Python', 'GitHub Actions'],
    img: '/dotrova.png',
    liveUrl: 'https://dotrova.onrender.com',
},
  {
    id: 16,
    title: 'GSK Product Tracker',
    desc: 'Full-stack internal dashboard built for GSK to track cosmetic product launches across global markets. Features an interactive world map, revenue charts, multi-country launch management, news & articles system, role-based authentication (Admin/Viewer), and email notifications. Built with React, FastAPI, and MySQL.',
    tags: ['React', 'FastAPI', 'MySQL', 'D3.js', 'JWT'],
    img: '/pharma.png',
    video: 'https://www.youtube.com/embed/edXDEQsFCow?si=kKvcnGozroBa7-HG',
    liveUrl: 'https://trade-tracker-frontend-delta.vercel.app/',
},
  {
    id: 2,
    title: 'Discover Tetouan',
    desc: 'Tourist guide website for the city of Tétouan, launched and ranked on Google Search under (Discover Tetouan). Features local attractions, culture, and travel tips. Currently migrating to React.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    img: '/screen2.png',
    video: '/videos/tetouan.mp4',
    liveUrl: 'https://www.discovertetouan.com/',
  },
  {
   id: 7,
    title: 'Tetouan Doctors : Medical Booking Platform',
     desc: 'Full-stack appointment booking app for doctors in Tétouan. Patients browse specialists, book available slots, and doctors manage their schedule via a personal dashboard.',
    tags: ['Next.js', 'Django', 'REST API', 'TypeScript'], 
    img: '/doctor.png',
     video: 'https://www.youtube.com/embed/V-fs8Iy6XmA?si=j4lLHVPjCWjZ9XVi',
      liveUrl: 'https://tetouan-doctor.vercel.app/'
  
  },
  {
    id: 14,
    title: 'EV Charging Station Finder',
    desc: 'Full stack app showing real EV charging stations in Morocco. Features city search, filtering, analytics dashboard with charts and top 10 ranking.',
    tags: ['React', 'FastAPI', 'Python', 'Pydantic'],
    img: '/screen9.png',
    video: 'https://www.youtube.com/embed/Kl3oLZljcBk?si=ChNiiO3FAh59wIQf',
    liveUrl: 'https://ev-charging-frontend-ebon.vercel.app/',
},
]

// "Horizon : Goal-Based Savings Planner" -> name + subtitle
const splitTitle = (title: string) => {
  const [name, ...rest] = title.split(' : ')
  return { name, subtitle: rest.join(' : ') }
}

const tagStyle = { padding: '6px 13px', border: '1px solid var(--line)', borderRadius: '20px', fontSize: '12px', color: 'var(--blue)', fontWeight: 500 }

export default function Projects() {
  const [active, setActive] = useState(projects[0])
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth <= 768) return
      const middle = window.innerHeight / 2
      cardRefs.current.forEach((card, i) => {
        if (!card) return
        const rect = card.getBoundingClientRect()
        if (rect.top < middle && rect.bottom > middle) {
          setActive(projects[i])
        }
      })
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const activeIndex = projects.indexOf(active)
  const activeTitle = splitTitle(active.title)

  return (
    <section id="projects" style={{ padding: '110px 6%', background: 'var(--cream)' }}>
      <SectionTitle eyebrow="01 — Selected work" title="Projects" />

      <div style={{ display: 'grid', gridTemplateColumns: '55% 45%', gap: '60px', alignItems: 'start' }} className="projects-wrapper">

        {/* LEFT: project images */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '120px' }}>
          {projects.map((project, i) => {
            const t = splitTitle(project.title)
            return (
            <div
              key={project.id}
              ref={el => { cardRefs.current[i] = el }}
              style={{ cursor: 'pointer' }}
            >
              <img
                src={project.img}
                alt={project.title}
                style={{ width: '100%', height: '360px', background: 'var(--cream-deep)', borderRadius: '18px', border: '1px solid var(--line)', objectFit: 'cover', display: 'block', boxShadow: '0 24px 48px -28px rgba(30,36,138,0.45)' }}
                onError={e => { (e.target as HTMLImageElement).style.background = 'var(--cream-deep)' }}
              />
              {/* Mobile content */}
              <div className="mobile-project-content" style={{ display: 'none', marginTop: '18px', background: 'var(--card)', border: '1px solid var(--line)', padding: '22px', borderRadius: '18px' }}>
                <p style={{ color: 'var(--blue)', fontSize: '11px', fontWeight: 600, letterSpacing: '3px', margin: '0 0 8px' }}>{String(i + 1).padStart(2, '0')}</p>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: '28px', color: 'var(--blue)', textTransform: 'uppercase', margin: 0 }}>{t.name}</h3>
                {t.subtitle && <p style={{ color: 'var(--muted)', fontSize: '13px', letterSpacing: '1px', margin: '4px 0 0' }}>{t.subtitle}</p>}
                <p style={{ color: 'var(--ink)', lineHeight: 1.6, margin: '14px 0' }}>{project.desc}</p>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '16px' }}>
                  {project.tags.map(tag => (
                    <span key={tag} style={tagStyle}>{tag}</span>
                  ))}
                </div>
                {project.liveUrl && (
                  <a href={project.liveUrl} style={{ color: 'var(--blue)', textDecoration: 'none', fontSize: '14px', fontWeight: 600 }}>Visit website ↗</a>
                )}
              </div>
            </div>
            )
          })}
        </div>

        {/* RIGHT: sticky panel */}
        <div className="sticky-panel" style={{ position: 'sticky', top: '18vh', background: 'var(--card)', border: '1px solid var(--line)', padding: '34px', borderRadius: '20px', boxShadow: '0 24px 48px -32px rgba(30,36,138,0.35)' }}>
          <p style={{ color: 'var(--blue)', fontSize: '12px', fontWeight: 600, letterSpacing: '3px', margin: '0 0 14px' }}>
            {String(activeIndex + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
          </p>
          <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: '40px', lineHeight: 1, color: 'var(--blue)', textTransform: 'uppercase', margin: 0 }}>{activeTitle.name}</h3>
          {activeTitle.subtitle && <p style={{ color: 'var(--muted)', fontSize: '14px', letterSpacing: '1px', margin: '8px 0 0' }}>{activeTitle.subtitle}</p>}
          <p style={{ color: 'var(--ink)', lineHeight: 1.65, margin: '20px 0' }}>{active.desc}</p>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: active.liveUrl ? '26px' : 0 }}>
            {active.tags.map(tag => (
              <span key={tag} style={tagStyle}>{tag}</span>
            ))}
          </div>
          {active.liveUrl && (
            <a href={active.liveUrl} style={{ display: 'inline-block', padding: '12px 26px', borderRadius: '30px', background: 'var(--blue)', color: '#fff', textDecoration: 'none', fontSize: '15px', fontWeight: 500 }}>Visit website ↗</a>
          )}
        </div>
      </div>

      <div style={{ marginTop: '90px', textAlign: 'center' }}>
        <Link href="/Projects" style={{ display: 'inline-block', padding: '16px 36px', borderRadius: '30px', border: '1.5px solid var(--blue)', color: 'var(--blue)', textDecoration: 'none', fontSize: '15px', fontWeight: 600, letterSpacing: '1px' }}>
          View All Projects →
        </Link>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .projects-wrapper { grid-template-columns: 1fr !important; }
          .sticky-panel { display: none !important; }
          .mobile-project-content { display: block !important; }
        }
      `}</style>
    </section>
  )
}
