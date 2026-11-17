import React from 'react'

export function ServiceCard({ service, index }) {
  const formattedIndex = String(index + 1).padStart(2, '0')

  return (
    <div className="py-2.5 px-3.5 flex items-center justify-between text-left transition-all duration-200 hover:bg-[#fefcf5] rounded-lg group border-b border-[#214b38]/6 last:border-b-0">
      <div className="flex items-center min-w-0">
        {/* Archival Repertoire Index */}
        <span className="text-[10.5px] font-mono tracking-widest text-[#c4a87a] font-medium mr-3.5 select-none">
          {formattedIndex}
        </span>
        {/* Service Title */}
        <span className="text-[13.5px] sm:text-sm font-medium tracking-tight text-[#063423] group-hover:text-[#1b4332] transition-colors">
          {service.title}
        </span>
      </div>

      {/* Subtle Micro-Diamond Accent */}
      <span
        className="text-[7.5px] text-[#214b38]/30 group-hover:text-[#c4a87a] transition-colors select-none ml-2"
        aria-hidden="true"
      >
        ◆
      </span>
    </div>
  )
}
