import React from 'react'

export function Footer({ quote }) {
  return (
    <footer className="mt-8 pt-2 flex flex-col items-center text-center">
      {/* Delicate Ornamental Sprig with Champagne Tint */}
      <div className="text-[#c4a87a] mb-2 flex items-center justify-center">
        <svg
          className="w-5 h-3.5 stroke-current fill-none stroke-[1.4]"
          viewBox="0 0 24 16"
          aria-hidden="true"
        >
          <path d="M12 15C12 9 8 3 2 2" strokeLinecap="round" />
          <path d="M12 15C12 9 16 3 22 2" strokeLinecap="round" />
          <path d="M12 15V1" strokeLinecap="round" />
        </svg>
      </div>

      {/* Quote */}
      <p className="text-xs sm:text-[12.5px] text-[#063423]/80 font-normal italic tracking-wide max-w-[280px] leading-relaxed">
        {quote || "Let's Make Your Celebrations Memorable."}
      </p>
    </footer>
  )
}
