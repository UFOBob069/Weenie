import type { Metadata } from 'next'
import { Header, Footer } from '@/components/layout'
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL } from '@/lib/constants'
import './globals.css'

// Use CSS variable fonts with fallback to system fonts
// In production, you can add Google Fonts via next/font/google or link tag
// For optimal performance, consider self-hosting fonts

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} - A Cozy Winter Story Kids Love`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    'children\'s book',
    'dachshund',
    'winter story',
    'kids book',
    'picture book',
    'weenie dog',
    'beanie',
    'cozy',
    'bedtime story',
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} - A Cozy Winter Story Kids Love`,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: '/images/cover.png',
        width: 1200,
        height: 630,
        alt: 'Weenie in a Beanie - A dachshund wearing a colorful beanie in the snow',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} - A Cozy Winter Story Kids Love`,
    description: SITE_DESCRIPTION,
    images: ['/images/cover.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts - Nunito for display, Nunito Sans for body */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&family=Nunito+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
