import NavBar from '@/components/NavigationBar/NavBar'
import './globals.css'
import Providers from './providers'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Fazt Course Video',
  description: 'App created with Next.js',
  icons: {
    icon: './assets/favicon.ico',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" >
      <body className={`${inter.className} scrollbar-hide`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
};