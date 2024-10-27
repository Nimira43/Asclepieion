import type { Metadata } from 'next'
import './globals.css'
import ThemeProvider from '@/theme'

export const metadata: Metadata = {
  title: 'Medi-Care',
  description: 'App using Next JS,',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
