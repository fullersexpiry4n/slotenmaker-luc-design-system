import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Luc — Slotenmaker Gent · 0470 12 34 56',
  description: 'Buitengesloten of slot kapot? Luc staat binnen 30 minuten voor je deur. Vast tarief €85 — geen voorrijkost, dag en nacht bereikbaar.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl">
      <head>
        <meta name="theme-color" content="#F7F4EF" />
        <link rel="icon" href="/assets/favicon.svg" type="image/svg+xml" />
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />
        <link rel="preload" href="/assets/fonts/inter-latin.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/assets/fonts/inter-latin-ext.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  )
}
