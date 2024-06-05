import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navigation } from '@/components/Navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'State of Mac',
    template: '%s | State of Mac',
  },
  description: 'Generated by create next app',
  openGraph: {
    title: 'State of Mac',
    description: 'Find out if your favorite game runs on your Apple Silicon',
    siteName: 'State of Mac',
    images: [
      {
        url: 'https://res.cloudinary.com/duyusab1p/image/upload/v1647977915/opengraph_wdmvoz.png',
        width: 1200,
        height: 630,
        alt: 'Image',
      },
    ],
    locale: 'es_COL',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Navigation />
        {children}
      </body>
    </html>
  )
}