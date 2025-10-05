import '@/styles/tailwind.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    template: '%s - Dani Kellogg',
    default: 'Dani Kellogg - Product Marketing Leader for Technical B2B SaaS',
  },
  description: 'Senior product marketer with 10+ years helping technical B2B companies translate what they\'ve built into narratives that resonate. Track record across AI/ML, data platforms, and SaaS—anywhere the technology is complex and the story matters.',
  keywords: [
    'product marketing',
    'B2B SaaS',
    'technical marketing',
    'AI marketing',
    'data platforms',
    'startup marketing',
    'product positioning',
    'GTM strategy',
    'marketing leadership',
    'technical B2B'
  ],
  authors: [{ name: 'Dani Kellogg' }],
  creator: 'Dani Kellogg',
  publisher: 'Dani Kellogg',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://dani-kellogg.com',
    siteName: 'Dani Kellogg',
    title: 'Dani Kellogg - Product Marketing Leader for Technical B2B SaaS',
    description: 'Senior product marketer with 10+ years helping technical B2B companies translate what they\'ve built into narratives that resonate. Track record across AI/ML, data platforms, and SaaS.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Dani Kellogg - Product Marketing Leader',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dani Kellogg - Product Marketing Leader for Technical B2B SaaS',
    description: 'Senior product marketer with 10+ years helping technical B2B companies translate what they\'ve built into narratives that resonate.',
    images: ['/og-image.png'],
    creator: '@dashkellogg',
  },
  alternates: {
    canonical: 'https://dani-kellogg.com',
  },
  category: 'Business',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Red+Hat+Display:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        />
        <link rel="icon" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/dani-1.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body className="text-black antialiased">
        {children}
      </body>
    </html>
  )
}
