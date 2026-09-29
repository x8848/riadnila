import type { LightboxProps } from '@/utils/types'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { useEffect, useRef } from 'react'

export default function Lightbox({
  src,
  alt,
  currentIndex,
  totalCount,
  closeLabel = 'Close',
  prevLabel = 'Previous',
  nextLabel = 'Next',
  onClose,
  onPrev,
  onNext,
}: LightboxProps) {
  const touchStart = useRef<number | null>(null)

  useEffect(() => {
    document.body.style.overflow = 'hidden'

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [onClose, onPrev, onNext])

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStart.current = e.touches[0]?.clientX ?? null
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart.current === null) return
    const delta = (e.changedTouches[0]?.clientX ?? touchStart.current) - touchStart.current
    if (Math.abs(delta) > 50) {
      if (delta < 0) {
        onNext()
      } else {
        onPrev()
      }
    }
    touchStart.current = null
  }

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/95 p-4 md:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={alt}
      onClick={onClose}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Close button */}
      <button
        type="button"
        onClick={e => {
          e.stopPropagation()
          onClose()
        }}
        aria-label={closeLabel}
        className="absolute right-4 top-4 z-20 rounded-full bg-white/15 p-3 text-white transition-colors hover:bg-white/30 backdrop-blur-xs"
      >
        <X className="h-6 w-6" />
      </button>

      {/* Desktop Previous button */}
      <button
        type="button"
        onClick={e => {
          e.stopPropagation()
          onPrev()
        }}
        aria-label={prevLabel}
        className="hidden md:flex absolute left-4 lg:left-8 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/15 p-3.5 text-white transition-colors hover:bg-white/30 backdrop-blur-xs"
      >
        <ChevronLeft className="h-7 w-7" />
      </button>

      {/* Media figure */}
      <figure
        className="flex max-h-full max-w-5xl flex-col items-center select-none"
        onClick={e => e.stopPropagation()}
      >
        <img
          src={src}
          alt={alt}
          className="max-h-[70vh] md:max-h-[78vh] max-w-full rounded-2xl object-contain shadow-2xl"
        />

        {/* Controls & Counter under the image */}
        <div className="mt-4 flex items-center justify-center gap-6">
          <button
            type="button"
            onClick={e => {
              e.stopPropagation()
              onPrev()
            }}
            aria-label={prevLabel}
            className="flex md:hidden rounded-full bg-white/20 p-2.5 text-white transition-colors hover:bg-white/35 backdrop-blur-xs"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <span className="text-xs font-medium text-white/70 tracking-wider">
            {currentIndex + 1} / {totalCount}
          </span>

          <button
            type="button"
            onClick={e => {
              e.stopPropagation()
              onNext()
            }}
            aria-label={nextLabel}
            className="flex md:hidden rounded-full bg-white/20 p-2.5 text-white transition-colors hover:bg-white/35 backdrop-blur-xs"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </figure>

      {/* Desktop Next button */}
      <button
        type="button"
        onClick={e => {
          e.stopPropagation()
          onNext()
        }}
        aria-label={nextLabel}
        className="hidden md:flex absolute right-4 lg:right-8 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/15 p-3.5 text-white transition-colors hover:bg-white/30 backdrop-blur-xs"
      >
        <ChevronRight className="h-7 w-7" />
      </button>
    </div>
  )
}
