import React from 'react'
import Navigation from './components/Navigation'
import '../styles/globals.css'

export const metadata = {
  title: {
    default: 'State of Mac',
    template: '%s | State of Mac',
  },
  description: 'Find out if your favorite game runs on Apple Silicon.',
  openGraph: {
    title: 'State of Mac',
    description: 'Find out if your favorite game runs on Apple Silicon',
    siteName: 'State of Mac',
    images: [
      {
        url: 'https://res.cloudinary.com/duyusab1p/image/upload/v1647977915/opengraph_wdmvoz.png',
        width: 1200,
        height: 630,
        alt: 'Og Image',
      },
    ],
    locale: 'es_COL',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
