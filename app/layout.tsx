import type { Metadata } from 'next'
import { Outfit, } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar.client'
import Footer from './components/Footer'
import { ToastProvider } from '@/context/BookingCreatedContext'
import Head from 'next/head'
import Script from 'next/script'

const inter = Outfit({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Reliable & Affordable Cab Service in Jamshedpur | Jet Set Go Cabs',
  description: 'Experience premium car rental and cab booking services with Jet Set Go Cabs. Convenient airport cabs in Ranchi. Book your ride today!',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html lang="en">
        <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-5GNE6KRMLR"
        />

        <Script id="google-analytics">
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '5GNE6KRMLR');
          `}
        </Script>
        </head>
        {/* <SessionWrapper session={session}> */}
        <ToastProvider>
          <body className={`${inter.className} min-h-screen`}>
              <Navbar />
              {children}
              <Footer />
          </body>
        </ToastProvider>
          
        {/* </SessionWrapper> */}
      </html>
  )
}
