"use client"

import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function HeroVideo() {
  const scrollToContact = () => {
    const contactElement = document.getElementById('contact')
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="w-full h-full object-cover"
          poster="/images/7DB3F5C8-2849-406E-A8EF-C1D4E3CE8ADD_1_105_c.jpeg"
        >
          <source src="/videos/websitevideo1.mp4" type="video/mp4" />
        </video>
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex items-center justify-center h-full text-center px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-primary mb-6 drop-shadow-lg">
            THE DETAIL LAB
          </h1>
          
          <div className="mb-8">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-white mb-2 drop-shadow-md">
              Mobile auto detailing across Connecticut
            </h2>
            <p className="text-lg md:text-xl text-white/90 drop-shadow-md">
              We come to you for complete-package auto detailing
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="text-lg px-8 py-3">
              <Link href="/contact">Book Now</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-3 bg-white/10 border-white text-white hover:bg-white hover:text-black">
              <Link href="/services">View Services</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center space-y-2 animate-bounce">
          <div className="w-0 h-0 border-l-[10px] border-r-[10px] border-t-[10px] border-l-transparent border-r-transparent border-t-white/70" />
          <div className="w-0 h-0 border-l-[10px] border-r-[10px] border-t-[10px] border-l-transparent border-r-transparent border-t-white/70" />
        </div>
      </div>
    </section>
  )
}