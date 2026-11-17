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
          ? 'translate-y-0 opacity-100 shadow-[0_4px_20px_rgba(209,188,138,0.14)]'
          : '-translate-y-full opacity-0 pointer-events-none'
      }`}
    >
      <header className="w-full bg-[#fdfaf2]/95 backdrop-blur-md border-b border-[#d1bc8a]/35 shadow-xs">
        <div className="w-full max-w-[466px] mx-auto px-4 h-13 sm:h-14 flex items-center justify-center">
          {/* Centered Brand Emblem, Name & Description (Stacked) */}
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2.5 group cursor-pointer text-left"
            aria-label={`Scroll to top of ${brand.name || 'LP Photography'}`}
          >
            <div className="w-8 h-8 rounded-full p-0.5 bg-gradient-to-tr from-[#d1bc8a]/50 via-[#214b38]/20 to-[#d1bc8a]/50 ring-1 ring-[#d1bc8a]/40 shadow-xs flex items-center justify-center shrink-0">
              <div className="w-full h-full rounded-full overflow-hidden bg-[#fdfaf1] border border-[#214b38]/15 flex items-center justify-center">
                <img
                  src={brand.logo}
                  alt={`${brand.name || 'LP Photography'} Logo`}
                  className="w-full h-full object-contain p-1 select-none"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center text-left min-w-0">
              <span className="text-[13px] sm:text-[13.5px] font-semibold text-[#063423] tracking-tight leading-tight group-hover:text-[#1b4332] transition-colors">
                {brand.name}
              </span>
              {brand.description && (
                <span className="text-[10px] sm:text-[10.5px] text-[#414943]/85 font-medium tracking-normal leading-tight mt-0.5 truncate max-w-[240px] sm:max-w-[300px]">
                  {brand.description}
                </span>
              )}
            </div>
          </button>
        </div>
      </header>
    </div>
  )
}
