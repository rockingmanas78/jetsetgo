import type { Metadata } from 'next'
import { Outfit, } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar.client'
import Footer from './components/Footer'
import { ToastProvider } from '@/context/BookingCreatedContext'

const inter = Outfit({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Top Car Rental & Cab Booking in Ranchi | Jet Set Go Cabs',
  description: 'Experience premium car rental and cab booking services with Jet Set Go Cabs. Convenient airport cabs in Ranchi. Book your ride today!',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html lang="en">
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
