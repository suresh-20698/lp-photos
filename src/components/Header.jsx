import React, { useState } from 'react'

export function Header({ brand }) {
  const [imgSrc, setImgSrc] = useState(brand.logo)

  const handleImageError = () => {
    if (brand.logoFallback && imgSrc !== brand.logoFallback) {
      setImgSrc(brand.logoFallback)
    }
  }

  return (
    <header className="flex flex-col items-center w-full relative z-10">
      {/* Refined Circular Medallion Frame */}
      <div className="relative w-20 h-20 sm:w-22 sm:h-22 mb-3.5 rounded-full p-[2.5px] bg-gradient-to-tr from-[#d1bc8a]/35 via-[#214b38]/15 to-[#d1bc8a]/35 shadow-sm ring-1 ring-[#214b38]/15 ring-offset-3 ring-offset-[#fefcf5] flex items-center justify-center transition-transform hover:scale-105 duration-300 group cursor-default">
        <div className="w-full h-full rounded-full overflow-hidden flex items-center justify-center bg-[#fdfaf1] border border-[#214b38]/12 shadow-inner">
          <img
            alt={`${brand.name} Logo`}
            className="w-full h-full object-contain p-2 select-none transition-transform duration-300 group-hover:scale-105"
            src={imgSrc}
            onError={handleImageError}
            loading="eager"
          />
        </div>
      </div>

      {/* Wedding & Traditional Photography Badge */}
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#214b38]/[0.04] border border-[#214b38]/12 text-[#063423] text-[9.5px] font-semibold tracking-[0.24em] uppercase mb-2 select-none">
        <span>WEDDING</span>
        <span className="text-[#c4a87a] text-[7px]">◆</span>
        <span>TRADITIONAL PHOTOGRAPHY</span>
      </div>

      {/* Brand Title */}
      {/* <h1 className="text-2xl sm:text-[28px] font-semibold text-[#063423] tracking-[-0.025em] leading-tight">
        {brand.name}
      </h1> */}

      {/* Brand Tagline */}
      <p className="text-[10.5px] sm:text-[11px] uppercase tracking-[0.22em] text-[#063423]/70 font-semibold mt-1.5">
        {brand.tagline}
      </p>

      {/* Narrative Description */}
      {brand.description && (
        <p className="text-xs sm:text-[13px] text-[#414943]/85 leading-relaxed max-w-[340px] mt-2.5 font-normal px-2">
          {brand.description}
        </p>
      )}

      {/* Ornamental Hairline Flourish Divider */}
      <div className="flex items-center justify-center gap-3 w-32 my-6 opacity-60">
        <div className="h-px bg-gradient-to-r from-transparent via-[#214b38]/30 to-transparent flex-1"></div>
        <span className="text-[#c4a87a] text-[8px] select-none">◆</span>
        <div className="h-px bg-gradient-to-r from-transparent via-[#214b38]/30 to-transparent flex-1"></div>
      </div>
    </header>
  )
}
