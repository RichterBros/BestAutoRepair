import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import React from 'react'
import Image from 'next/image'
import HydrationGuard from './components/HydrationGuard'
import Navigation from './components/Navigation'
import WedgeStack from './components/WedgeStack'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'RZGarageLLC',
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
      <body className={inter.className + ' bg-black overflow-x-hidden'}>
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
        <main className="site-content overflow-x-hidden">{children}</main>
        
        {/* Footer Section */}
        <footer style={{ backgroundColor: 'rgb(127, 29, 29)', position: 'relative', zIndex: 2500 }}>
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
                        <h3 className="text-xl font-bold mb-2">RZ Garage</h3>
                        <p className="text-sm mb-2">FULL SERVICE AUTO REPAIR AND MAINTENANCE</p>
                        <p className="text-sm mb-2">1540 NE Killingsworth St, Portland, OR 97211
                        </p>
                        <p className="text-sm mb-4">Call to schedule: <a href="tel:+19719909845" className="font-bold hover:underline">(971) 990-9845</a></p>
                        <div className="text-sm">
                          <p>Mon-Fri: 9:00 am - 6:00 pm</p>
                          <p>Sat-Sun: Closed</p>
                        </div>
                      </div>
                      
                                             {/* Map Placeholder */}
                                               <div className="relative">
                          <a 
                            href="https://www.google.com/maps/place/1540+NE+Killingsworth+St,+Portland,+OR+97211/@45.5624726,-122.6496424,18.75z/data=!4m6!3m5!1s0x5495a71e0ecaac55:0xf65b8f41ebde5257!8m2!3d45.5625053!4d-122.6492327!16s%2Fg%2F11c4tn4rwy?entry=ttu&g_ep=EgoyMDI1MDkwNy4wIKXMDSoASAFQAw%3D%3D" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="block w-full h-48 rounded-lg overflow-hidden hover:opacity-90 transition-opacity"
                          >
                            <Image 
                              src="/map-placeholder.jpg" 
                              alt="RZ Garage Location Map" 
                              width={800} height={192}
                              className="w-full h-48 object-cover"
                            />
                          </a>
                          <a 
                            href="https://www.google.com/maps/place/1540+NE+Killingsworth+St,+Portland,+OR+97211/@45.5624726,-122.6496424,18.75z/data=!4m6!3m5!1s0x5495a71e0ecaac55:0xf65b8f41ebde5257!8m2!3d45.5625053!4d-122.6492327!16s%2Fg%2F11c4tn4rwy?entry=ttu&g_ep=EgoyMDI1MDkwNy4wIKXMDSoASAFQAw%3D%3D" 
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
            <div className="py-4" style={{ backgroundColor: 'rgb(200, 205, 202)' }}>
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
            <div className="py-4">
              <div className="container mx-auto px-4">
                <div className="flex justify-center">
                  <div className="text-sm" style={{ color: 'rgb(255, 255, 255)' }}>
                    <span>© 2025 RZ Garage. All rights reserved. // Site by Richter Bros. Media</span>
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