'use client'

import { useState, useEffect } from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import CategorySection from '@/components/CategorySection'
import IngredientsSection from '@/components/IngredientsSection'
import DifferentOnPurposeSection from '@/components/DifferentOnPurposeSection'
import BestsellersSection from '@/components/BestsellersSection'
import GiftsSection from '@/components/GiftsSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import Footer from '@/components/Footer'
import CartDrawer from '@/components/CartDrawer'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(false)
  }, [])

  if (isLoading) return null

  return (
    <main className="overflow-x-hidden bg-mithai-off">
      <Navbar />
      <Hero />
      <section className="marquee-strip">
        <div className="marquee-track">
          <div className="marquee-item"><span>✨ No Refined Sugar</span><span className="marquee-diamond"></span></div>
          <div className="marquee-item"><span>🌾 No Maida</span><span className="marquee-diamond"></span></div>
          <div className="marquee-item"><span>💪 PCOS Friendly</span><span className="marquee-diamond"></span></div>
          <div className="marquee-item"><span>🌱 Clean Ingredients</span><span className="marquee-diamond"></span></div>
          <div className="marquee-item"><span>✨ No Refined Sugar</span><span className="marquee-diamond"></span></div>
          <div className="marquee-item"><span>🌾 No Maida</span><span className="marquee-diamond"></span></div>
          <div className="marquee-item"><span>💪 PCOS Friendly</span><span className="marquee-diamond"></span></div>
          <div className="marquee-item"><span>🌱 Clean Ingredients</span><span className="marquee-diamond"></span></div>
        </div>
      </section>
      <CategorySection />
      <IngredientsSection />
      <DifferentOnPurposeSection />
      <BestsellersSection />
      <GiftsSection />
      <TestimonialsSection />
      <Footer />
      <CartDrawer />
      <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="wa-fab">
        <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-5.031 1.378c-1.53.946-2.645 2.291-2.953 3.785a9.9 9.9 0 001.396 5.395 9.86 9.86 0 002.752 3.14c1.554 1.094 3.29 1.684 5.159 1.707h.004c1.086 0 2.147-.203 3.172-.63a9.877 9.877 0 003.488-2.081 9.87 9.87 0 002.081-3.488c.427-1.025.63-2.086.63-3.172 0-1.869-.613-3.606-1.708-5.16a9.865 9.865 0 00-3.14-2.752 9.877 9.877 0 00-5.395-1.396M2.534 22h-.01c-.819 0-1.625-.134-2.413-.4 1.552 1.016 3.382 1.597 5.328 1.6 6.063 0 10.988-4.925 10.988-10.988 0-2.034-.58-3.995-1.678-5.67A10.998 10.998 0 0012.012 2c-6.063 0-10.988 4.925-10.988 10.988 0 1.974.48 3.838 1.327 5.476l-.817 2.536z"/></svg>
      </a>
    </main>
  )
}
