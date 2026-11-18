import type { Metadata } from 'next'
import { Anton, Jost } from 'next/font/google'
import './globals.css'

const display = Anton({ weight: '400', subsets: ['latin'], variable: '--font-display' })
const body = Jost({ subsets: ['latin'], variable: '--font-body' })

export const metadata: Metadata = {
  title: 'Ahmed — Full-Stack & Mobile Developer',
  description: 'Portfolio of Ahmed, Full-Stack & Mobile Developer based in Tetouan, Morocco.',
  icons:{
    icon: '/Ab-modified.png',
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="bg-[var(--cream)] min-h-screen overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
