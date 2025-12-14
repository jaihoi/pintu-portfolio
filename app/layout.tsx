import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Pintu Kumar Sharma - Full Stack Developer',
    template: '%s | Pintu Kumar Sharma',
  },
  description: 'Full Stack Developer specializing in React, Node.js, and cloud technologies. Building scalable web applications with modern tech stack.',
  keywords: ['Full Stack Developer', 'React', 'Node.js', 'TypeScript', 'Web Development', 'Software Engineer'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://pintu-portfolio.vercel.app',
    siteName: 'Pintu Kumar Sharma',
    title: 'Pintu Kumar Sharma - Full Stack Developer',
    description: 'Full Stack Developer specializing in React, Node.js, and cloud technologies.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Pintu Kumar Sharma Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pintu Kumar Sharma - Full Stack Developer',
    description: 'Full Stack Developer specializing in React, Node.js, and cloud technologies.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
