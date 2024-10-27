import type { Metadata } from 'next'
import './globals.css'
import ThemeProvider from '@/theme'

export const metadata: Metadata = {
  title: 'Asclepieion',
  description: 'Medi-care app using Next JS, Ant-D, Clerk, Tailwind and TypeScript',
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
