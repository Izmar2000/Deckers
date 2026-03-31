import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Deckers Grand-Café',
  description: 'Digitale menukaart van Deckers Grand-Café Venlo',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl">
      <body>{children}</body>
    </html>
  )
}
