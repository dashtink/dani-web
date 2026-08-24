import '@/styles/tailwind.css'
import type { Metadata } from 'next'
import { JetBrains_Mono, Red_Hat_Display } from 'next/font/google'

const redHatDisplay = Red_Hat_Display({
  subsets: ['latin'],
  variable: '--font-red-hat-display',
  display: 'swap',
})

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://dani-kellogg.com'),
  title: {
    template: '%s - Dani Kellogg',
    default: 'Dani Kellogg',
  },
  description: 'Product marketer, writer, and occasional builder based in Seattle. Notes on product marketing and technical B2B, plus small side projects.',
  keywords: [
    'Dani Kellogg',
    'product marketing',
    'B2B SaaS',
    'technical marketing',
    'Seattle',
    'writing',
    'side projects'
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
    title: 'Dani Kellogg',
    description: 'Product marketer, writer, and occasional builder based in Seattle. Notes on product marketing and technical B2B, plus small side projects.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Dani Kellogg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dani Kellogg',
    description: 'Product marketer, writer, and occasional builder based in Seattle.',
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
    <html lang="en" className={`${redHatDisplay.variable} ${jetBrainsMono.variable}`}>
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.png" />
        <link rel="shortcut icon" href="/favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0a0f0c" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body className="bg-bg-base text-text-primary antialiased">
        {children}
      </body>
    </html>
  )
}
