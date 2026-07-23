import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Md. Emon Mian | RF & Hardware Design Engineer',
  description:
    'Portfolio of Md. Emon Mian — Electrical & Electronic Engineer, RF & Hardware Design Engineer, and Researcher specializing in Antenna Design, Metamaterials, and THz Biosensing.',
  keywords: [
    'Md. Emon Mian',
    'RF Engineer',
    'Antenna Design',
    'Metamaterials',
    'THz Biosensing',
    'Hardware Design',
    'PCB Design',
    'Electromagnetic Simulation',
    'Electrical Engineer',
    'Research',
  ],
  authors: [{ name: 'Md. Emon Mian' }],
  creator: 'Md. Emon Mian',
  generator: 'v0.app',
  openGraph: {
    title: 'Md. Emon Mian | RF & Hardware Design Engineer',
    description:
      'Advancing RF Engineering, Antenna Systems, Metamaterials, and THz Biosensing through innovative research and practical engineering.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0a0e1a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`dark bg-background ${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
