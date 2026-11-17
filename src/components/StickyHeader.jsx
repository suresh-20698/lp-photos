import React, { useState, useEffect } from 'react'

export function StickyHeader({ brand }) {
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      setIsSticky(offset > 140)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ease-out ${
        isSticky
          ? 'translate-y-0 opacity-100 shadow-[0_4px_20px_rgba(6,52,35,0.05)]'
          : '-translate-y-full opacity-0 pointer-events-none'
      }`}
    >
      <header className="w-full bg-[#fdfaf2]/95 backdrop-blur-md border-b border-[#d1bc8a]/35 shadow-xs">
        <div className="w-full max-w-[466px] mx-auto px-4 h-12 sm:h-13 flex items-center justify-center">
          {/* Centered Brand Emblem & Title (No buttons) */}
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2.5 group cursor-pointer"
            aria-label="Scroll to top of LP Photography"
          >
            <div className="w-7 h-7 rounded-full p-0.5 bg-gradient-to-tr from-[#d1bc8a]/50 via-[#214b38]/20 to-[#d1bc8a]/50 ring-1 ring-[#d1bc8a]/40 shadow-xs flex items-center justify-center shrink-0">
              <div className="w-full h-full rounded-full overflow-hidden bg-[#fdfaf1] border border-[#214b38]/15 flex items-center justify-center">
                <img
                  src={brand.logo}
                  alt=""
                  className="w-full h-full object-contain p-1 select-none"
                />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[13.5px] font-semibold text-[#063423] tracking-[-0.02em] group-hover:text-[#1b4332] transition-colors">
                {brand.name}
              </span>
              <span className="text-[#c4a87a] text-[7px] select-none">◆</span>
              <span className="text-[9.5px] uppercase tracking-[0.18em] text-[#063423]/65 font-medium">
                Cinematic Weddings &amp; Candid Stories  
              </span>
            </div>
          </button>
        </div>
      </header>
    </div>
  )
}
