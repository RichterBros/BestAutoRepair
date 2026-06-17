import type { Metadata } from 'next'
import { Inter, Roboto_Condensed } from 'next/font/google'
import './globals.css'
import React from 'react'
import Image from 'next/image'
import HydrationGuard from './components/HydrationGuard'
import Navigation from './components/Navigation'
import WedgeStack from './components/WedgeStack'

const inter = Inter({ subsets: ['latin'] })
const robotoCondensed = Roboto_Condensed({ subsets: ['latin'], variable: '--font-roboto-condensed' })

export const metadata: Metadata = {
  title: 'Best Auto Repair PDX',
  description: 'Professional automobile repair services',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
      </head>
      <body className={robotoCondensed.className + ' bg-black overflow-x-hidden'}>
        <HydrationGuard />
        {/* AngleCut corner wedges */}
        {/* Original wedges disabled */}
        <div className="anglecut-wedge anglecut-wedge-tl" style={{ zIndex: 101, display: 'none' }} />
        <div className="anglecut-wedge anglecut-wedge-br" style={{ zIndex: 101, display: 'none' }} />
        {/* Three separate layered wedges at the exact top-left baseline position */}
        <WedgeStack enableParallax={false} topSize={0} gap={0} position="tl" />
        <WedgeStack enableParallax={false} topSize={0} gap={0} position="br" />
        {/* Remove previous large copies now that band pattern is in place */}
        
        
        <Navigation />
        <div className="h-[100px]" />
        <main className="site-content overflow-x-hidden">{children}</main>
        
        {/* Footer Section */}
        <footer style={{ backgroundColor: '#c46927', position: 'relative', zIndex: 2500 }}>
          {/* Main Footer Content */}
          <div className="py-16">
            <div className="container mx-auto px-4">
              <div className="flex justify-center">
                <div className="flex flex-col lg:flex-row gap-12 max-w-4xl w-full">
                  {/* Left Side - Certifications and Ratings */}
                  <div className="w-full lg:w-1/2">
                    <div className="space-y-6">
                      {/* ASE Certified */}
                      <div className="flex items-center gap-4">
                        <Image src="/ase-certified.png" alt="ASE Certified" width={120} height={120} />
                        <div style={{ color: 'rgb(255, 255, 255)' }}>
                          <p className="text-sm font-semibold">AUTOMOTIVE</p>
                          <p className="text-sm font-semibold">SERVICE EXCELLENCE</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Side - Business Info and Map */}
                  <div className="w-full lg:w-1/2">
                    <div className="space-y-6">
                      {/* Business Information */}
                      <div style={{ color: 'rgb(255, 255, 255)' }}>
                        <h3 className="text-xl font-bold mb-2">Best Auto Repair</h3>
                        <p className="text-sm mb-2">FULL SERVICE AUTO REPAIR AND MAINTENANCE</p>
                        <p className="text-sm mb-2">4222 NE Martin Luther King Jr Blvd, Portland, OR 97211
                        </p>
                        <p className="text-sm mb-4">Call to schedule: <a href="tel:+15032875715" className="font-bold hover:underline">(503) 287-5715</a></p>
                        <div className="text-sm">
                          <p>Mon-Fri: 9:00 am - 6:00 pm</p>
                          <p>Sat-Sun: Closed</p>
                        </div>
                      </div>
                      
                        {/* Live Google Maps embed */}
                        <div className="relative w-full h-48 rounded-lg overflow-hidden">
                          <iframe
                            src="https://maps.google.com/maps?q=4222+NE+Martin+Luther+King+Jr+Blvd,+Portland,+OR+97211&hl=en&z=15&output=embed"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Best Auto Repair location map"
                          />
                          <a
                            href="https://www.google.com/maps?q=4222+NE+Martin+Luther+King+Jr+Blvd,+Portland,+OR+97211"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="absolute top-2 left-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded hover:bg-opacity-90 transition-colors"
                          >
                            View larger map
                          </a>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Navigation Bar */}
          <div style={{ backgroundColor: 'rgb(127, 29, 29)' }}>
            {/* Light Grey Navigation Links Bar */}
            <div className="py-4" style={{ backgroundColor: '#f4f1ec' }}>
              <div className="container mx-auto px-4">
                                 <div className="flex flex-wrap gap-2 md:gap-20 text-[10px] md:text-base font-semibold justify-center" style={{ color: 'rgb(30, 46, 67)' }}>
                   <a href="/" className="hover:text-gray-400">HOME</a>
                   <a href="/services" className="hover:text-gray-400">SERVICES</a>
                   <a href="/about" className="hover:text-gray-400">ABOUT</a>
                   <a href="/reviews" className="hover:text-gray-400">OUR WORK</a>
                   <a href="/contact" className="hover:text-gray-400">CONTACT</a>
                   <a href="/blog" className="hover:text-gray-400">BLOG</a>
                 </div>
              </div>
            </div>
            
            {/* Social Bar (icons removed) */}
            <div className="py-4" style={{ backgroundColor: '#c46927' }}>
              <div className="container mx-auto px-4">
                <div className="flex justify-center">
                  <div className="text-sm" style={{ color: 'rgb(255, 255, 255)' }}>
                    <span>© 2025 Best Auto Repair. All rights reserved. // Site by <a href="https://richterbrosmedia.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>Richter Bros. Media</a></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
} 
