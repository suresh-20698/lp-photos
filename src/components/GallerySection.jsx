import React, { useEffect, useState } from 'react'

export function GallerySection({ items = [] }) {
  const [loadedImages, setLoadedImages] = useState({})

  // Actively prefetch all gallery images into the browser cache
  useEffect(() => {
    if (!items || items.length === 0) return

    items.forEach((item) => {
      if (item?.src) {
        // High priority eager prefetch for next items, idle prefetch for rest
        const img = new Image()
        img.src = item.src
      }
    })
  }, [items])

  if (!items || items.length === 0) return null

  return (
    <section className="w-full flex flex-col items-center">
      {/* Section Header */}
      <h2 className="text-lg sm:text-xl font-semibold text-[#063423] tracking-tight mb-1">
        A Glimpse of Our Work
      </h2>
      <p className="text-xs text-[#414943]/80 font-normal mb-3.5">
        Some beautiful moments from our celebrations.
      </p>

      {/* Fine Art Passe-Partout Gallery Collage */}
      <div className="flex flex-col gap-4 w-full">
        {items.map((item, index) => (
          <div
            key={item.id}
            className="p-2 sm:p-2.5 bg-[#fcf9ef] rounded-xl border border-[#214b38]/12 shadow-[0_4px_16px_-2px_rgba(6,52,35,0.06),0_1px_3px_rgba(6,52,35,0.03)] transition-all duration-300 hover:shadow-[0_8px_24px_-4px_rgba(6,52,35,0.12)] group"
          >
            {/* Inner Image Mounting Frame */}
            <div className="relative w-full rounded-lg overflow-hidden bg-[#ece5d4] shadow-inner min-h-[220px]">
              <img
                src={item.src}
                alt={item.alt || `LP Photography work ${index + 1}`}
                className={`w-full h-auto object-cover group-hover:scale-[1.015] transition-all duration-500 ease-out select-none ${
                  loadedImages[item.id] || index < 2 ? 'opacity-100' : 'opacity-0'
                }`}
                loading={index < 2 ? 'eager' : 'lazy'}
                fetchPriority={index < 2 ? 'high' : 'auto'}
                decoding={index < 2 ? 'sync' : 'async'}
                onLoad={() =>
                  setLoadedImages((prev) => ({ ...prev, [item.id]: true }))
                }
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
