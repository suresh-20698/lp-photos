import React, { useEffect, useCallback } from 'react'

export function LightboxModal({ items, activeIndex, onClose, onChangeIndex }) {
  const currentItem = items?.[activeIndex]

  const handleNext = useCallback(
    (e) => {
      e?.stopPropagation()
      if (items && items.length > 0) {
        onChangeIndex((activeIndex + 1) % items.length)
      }
    },
    [activeIndex, items, onChangeIndex],
  )

  const handlePrev = useCallback(
    (e) => {
      e?.stopPropagation()
      if (items && items.length > 0) {
        onChangeIndex((activeIndex - 1 + items.length) % items.length)
      }
    },
    [activeIndex, items, onChangeIndex],
  )

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') handleNext()
      if (e.key === 'ArrowLeft') handlePrev()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose, handleNext, handlePrev])

  if (!currentItem) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="lightbox-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-primary/80 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-w-lg w-full bg-surface-bright rounded-xl overflow-hidden shadow-2xl border border-secondary-container/60 p-3 sm:p-4 text-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Controls: Counter & Close */}
        <div className="flex items-center justify-between mb-2">
          <span className="font-meta-date text-on-surface-variant text-xs tracking-wider">
            {activeIndex + 1} of {items.length}
          </span>
          <button
            type="button"
            onClick={onClose}
            className="w-7 h-7 rounded-full bg-surface-container/90 hover:bg-surface-container-high text-primary flex items-center justify-center transition-colors shadow-xs cursor-pointer"
            aria-label="Close modal"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
            </svg>
          </button>
        </div>

        {/* Image Display Frame with Prev/Next buttons */}
        <div className="relative aspect-4/3 w-full rounded-lg overflow-hidden bg-surface-container shadow-inner mb-3 group">
          <img
            key={currentItem.id}
            src={currentItem.fullSrc || currentItem.src}
            alt={currentItem.alt}
            className="w-full h-full object-cover transition-opacity duration-300"
          />

          {/* Navigation Arrows */}
          {items.length > 1 && (
            <>
              <button
                type="button"
                onClick={handlePrev}
                className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-surface-bright/80 hover:bg-surface-bright text-primary flex items-center justify-center shadow-md transition-all cursor-pointer"
                aria-label="Previous work"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-surface-bright/80 hover:bg-surface-bright text-primary flex items-center justify-center shadow-md transition-all cursor-pointer"
                aria-label="Next work"
              >
                ›
              </button>
            </>
          )}
        </div>

        {/* Details */}
        <h3 id="lightbox-title" className="font-headline-sm text-primary text-lg font-normal">
          {currentItem.title}
        </h3>
        <p className="font-label-caps text-on-surface-variant text-[11px] tracking-[0.18em] mt-1 uppercase">
          {currentItem.subtitle}
        </p>
        <p className="font-body-sm text-on-surface-variant/90 text-xs mt-2 px-2 italic">
          {currentItem.alt}
        </p>

        {/* Inquiry Action */}
        <div className="mt-4 pt-3 border-t border-primary/10 flex justify-center">
          <a
            href={`https://wa.me/?text=Hello%20LP%20Photography,%20I%20am%20inquiring%20about%20the%20${encodeURIComponent(
              currentItem.title,
            )}%20photography.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 py-2 px-4 rounded-lg bg-primary hover:bg-primary-container text-surface-bright text-xs font-medium tracking-wide transition-all shadow-xs cursor-pointer"
          >
            Inquire About This Work
            <span className="text-xs">→</span>
          </a>
        </div>
      </div>
    </div>
  )
}
