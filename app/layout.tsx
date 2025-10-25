import type { Metadata } from 'next'
import { Providers } from './components/Providers'
import './globals.css'

export const metadata: Metadata = {
  title: 'PricePoint - Scan, Verify, Share Prices Onchain',
  description: 'Transparent, verifiable pricing for physical items using onchain data',
  icons: {
    icon: '/icon.png',
  },
  openGraph: {
    title: 'PricePoint',
    description: 'Scan, verify, and share prices onchain',
    images: ['/og.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
