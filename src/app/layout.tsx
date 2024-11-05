import { Poppins } from 'next/font/google' 
import type { Metadata } from 'next'
import './globals.css'
import ThemeProvider from '@/theme'
import { ClerkProvider } from '@clerk/nextjs'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

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
    <ClerkProvider>
      <html lang='en'>
        <body className={poppins.className}>
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
