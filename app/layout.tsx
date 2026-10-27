import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ahmed — Full-Stack & Mobile Developer',
  description: 'Portfolio of Ahmed, Full-Stack & Mobile Developer based in Tetouan, Morocco.',
  icons:{
    icon: '/Ab-modified.png',
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#002a3a] min-h-screen overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
