import React from 'react'
import { Header } from './components/Header'
import { StickyHeader } from './components/StickyHeader'
import { ServicesSection } from './components/ServicesSection'
import { GallerySection } from './components/GallerySection'
import { Footer } from './components/Footer'
import { CornerFlourishes } from './components/CornerFlourishes'
import { photographyData } from './data/photographyData'

export default function App() {
  const { brand, services, gallery } = photographyData

  return (
    <main className="flex-1 w-full flex flex-col items-center justify-center bg-golden-dots pt-safe pb-safe pl-safe pr-safe min-h-screen sm:py-14 text-[#1d1c12]">
      {/* Sticky Compact Header (Appears on Scroll, Centered, No Buttons) */}
      <StickyHeader brand={brand} />

      {/* Main Content Container: Fluid on Mobile, Luxury Framed Stationery Card on Desktop */}
      <div className="flex flex-col w-full items-center justify-center px-0 sm:px-4">
        {/* Outer Stationery Envelope Liner on Desktop / Seamless on Mobile */}
        <div className="w-full max-w-[436px] sm:max-w-[466px] sm:bg-[#ebdcc0]/85 sm:backdrop-blur-xs sm:rounded-2xl sm:p-3 sm:shadow-[0_20px_60px_rgba(180,142,75,0.18),0_4px_16px_rgba(6,52,35,0.06)] sm:border sm:border-[#d8cdb4]/80 transition-all duration-300">
          {/* Inner Pressed Cotton Card Layer */}
          <div className="w-full bg-card-golden-shades sm:rounded-xl px-4 py-8 sm:p-8 flex flex-col items-center text-center shadow-[0_4px_24px_rgba(196,168,122,0.16)] sm:border sm:border-[#214b38]/15 relative overflow-hidden">
            {/* Blind-Debossed Double Inset Hairline Frame (Desktop Stationery Refinement) */}
            <div
              className="hidden sm:block absolute inset-2.5 rounded-lg border border-[#214b38]/10 pointer-events-none"
              aria-hidden="true"
            />
            <div
              className="hidden sm:block absolute inset-3.5 rounded-[6px] border border-[#d1bc8a]/25 pointer-events-none"
              aria-hidden="true"
            />

            {/* Subtle Decorative Corner Accents */}
            <div className="hidden sm:block">
              <CornerFlourishes />
            </div>

            {/* SECTION 1: Brand Identity (Hero State with Medallion Logo) */}
            <Header brand={brand} />

            {/* SECTION 2: Our Services (Wedding & Traditional Celebrations) */}
            <ServicesSection services={services} />

            {/* Fine Gilded Separation Rule */}
            <div className="flex items-center justify-center gap-3 w-32 my-7 opacity-70">
              <div className="h-px bg-gradient-to-r from-transparent via-[#214b38]/30 to-transparent flex-1"></div>
              <span className="text-[#d1bc8a] text-[8px] select-none">◆</span>
              <div className="h-px bg-gradient-to-r from-transparent via-[#214b38]/30 to-transparent flex-1"></div>
            </div>

            {/* SECTION 4: Sample Works (Fine Art Gallery Collage) */}
            <GallerySection items={gallery} />

            {/* Footer with Contact Information & Drive Link */}
            <Footer brand={brand} />
          </div>
        </div>
      </div>
    </main>
  )
}
