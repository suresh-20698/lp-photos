import React from 'react'

export function CornerFlourishes() {
  return (
    <>
      <div
        className="absolute top-4 left-4 text-[#d1bc8a]/70 text-[9px] select-none font-serif pointer-events-none transition-opacity"
        aria-hidden="true"
      >
        ✦
      </div>
      <div
        className="absolute top-4 right-4 text-[#d1bc8a]/70 text-[9px] select-none font-serif pointer-events-none transition-opacity"
        aria-hidden="true"
      >
        ✦
      </div>
      <div
        className="absolute bottom-4 left-4 text-[#d1bc8a]/70 text-[9px] select-none font-serif pointer-events-none transition-opacity"
        aria-hidden="true"
      >
        ✦
      </div>
      <div
        className="absolute bottom-4 right-4 text-[#d1bc8a]/70 text-[9px] select-none font-serif pointer-events-none transition-opacity"
        aria-hidden="true"
      >
        ✦
      </div>
    </>
  )
}
