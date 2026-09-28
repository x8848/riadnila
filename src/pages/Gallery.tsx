import Content from '@/components/Content'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Page from '@/components/Page'
import { galleryPhotos } from '@/utils'
import { useLanguage } from '@/utils/i18n'
import type { GalleryCategory, GalleryPhoto, GalleryRoom } from '@/utils/types'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { useEffect, useMemo, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const categories: { key: GalleryCategory; labelKey: string; slug: string }[] = [
  { key: 'The Riad', labelKey: 'galleryTheRiad', slug: 'the-riad' },
  { key: 'Restaurant', labelKey: 'galleryRestaurant', slug: 'restaurant' },
  { key: 'Terrace & Rooftop', labelKey: 'galleryTerraceRooftop', slug: 'terrace-rooftop' },
  { key: 'Hammam & Spa', labelKey: 'galleryHammamSpa', slug: 'hammam-spa' },
  { key: 'Rooms & Suites', labelKey: 'galleryRoomsSuites', slug: 'rooms-suites' },
]

const rooms: { name: GalleryRoom; slug: string }[] = [
  { name: 'Akchour', slug: 'akchour' },
  { name: 'Bab Ain', slug: 'bab-ain' },
  { name: 'Bab Hammar', slug: 'bab-hammar' },
  { name: 'Bab Harmoun', slug: 'bab-harmoun' },
  { name: 'Bab Mahrouq', slug: 'bab-mahrouq' },
  { name: 'Bab Mellah', slug: 'bab-mellah' },
  { name: 'Bab Mouqaf', slug: 'bab-mouqaf' },
  { name: 'Bab Mqadem', slug: 'bab-mqadem' },
  { name: 'Bab Noukba', slug: 'bab-noukba' },
  { name: 'Bab Onsar', slug: 'bab-onsar' },
  { name: 'Bab Sebanin', slug: 'bab-sebanin' },
  { name: 'Bab Souk', slug: 'bab-souk' },
  { name: 'Kasbah', slug: 'kasbah' },
  { name: 'Outa Hammam', slug: 'outa-hammam' },
  { name: 'Ras Al Maa', slug: 'ras-al-maa' },
]

export default function Gallery() {
  const { t } = useLanguage()
  const navigate = useNavigate()
  const { category: categorySlug, room: roomSlug } = useParams<{ category?: string; room?: string }>()

  const activeCategory: GalleryCategory = useMemo(() => {
    if (!categorySlug) return 'The Riad'
    const found = categories.find(c => c.slug === categorySlug)
    return found ? found.key : 'The Riad'
  }, [categorySlug])

  const activeRoom: GalleryRoom = useMemo(() => {
    if (activeCategory !== 'Rooms & Suites') return rooms[0].name
    if (!roomSlug) return rooms[0].name
    const found = rooms.find(r => r.slug === roomSlug)
    return found ? found.name : rooms[0].name
  }, [activeCategory, roomSlug])

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const touchStart = useRef<number | null>(null)

  const photos = galleryPhotos as GalleryPhoto[]

  const visiblePhotos = useMemo(() => {
    if (activeCategory === 'Rooms & Suites') {
      return photos.filter(photo => photo.category === 'Rooms & Suites' && photo.room === activeRoom)
    }
    return photos.filter(photo => photo.category === activeCategory)
  }, [photos, activeCategory, activeRoom])

  const handleSelectCategory = (cat: GalleryCategory) => {
    const slug = categories.find(c => c.key === cat)?.slug || 'the-riad'
    if (cat === 'Rooms & Suites') {
      const defaultRoomSlug = rooms.find(r => r.name === activeRoom)?.slug || rooms[0].slug
      navigate(`/gallery/${slug}/${defaultRoomSlug}`)
    } else {
      navigate(`/gallery/${slug}`)
    }
    setSelectedIndex(null)
  }

  const handleSelectRoom = (roomName: GalleryRoom) => {
    const rSlug = rooms.find(r => r.name === roomName)?.slug || rooms[0].slug
    navigate(`/gallery/rooms-suites/${rSlug}`)
    setSelectedIndex(null)
  }

  const moveLightbox = (delta: number) => {
    if (selectedIndex === null || visiblePhotos.length === 0) return
    const nextIndex = (selectedIndex + delta + visiblePhotos.length) % visiblePhotos.length
    setSelectedIndex(nextIndex)
  }

  useEffect(() => {
    if (selectedIndex === null) {
      document.body.style.overflow = ''
      return
    }

    document.body.style.overflow = 'hidden'

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedIndex(null)
      if (e.key === 'ArrowLeft') moveLightbox(-1)
      if (e.key === 'ArrowRight') moveLightbox(1)
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [selectedIndex, visiblePhotos.length])

  const selectedPhoto = selectedIndex !== null ? visiblePhotos[selectedIndex] : null

  return (
    <Page>
      <Header title={t('gallery')} heroImage="/images/gallery.webp" />

      <Content>
        {/* Intro Section */}
        <div className="mb-6">
          <p className="eyebrow mb-2">{t('discoverRiadNila')}</p>
          <h2 className="serif text-3xl font-medium text-terracotta-deep mb-3">{t('galleryIntroTitle')}</h2>
          <div className="mini-divider" />
          <p className="text-sm leading-relaxed text-ink/80 max-w-2xl">{t('galleryFeaturedDescription')}</p>
        </div>

        {/* Categories Tab Navigation (Always visible, non-scrollable) */}
        <nav aria-label={t('galleryCategories')} className="mb-6 flex flex-wrap gap-2">
          {categories.map(cat => {
            const isActive = activeCategory === cat.key
            return (
              <button
                key={cat.key}
                type="button"
                onClick={() => handleSelectCategory(cat.key)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-terracotta-deep text-white shadow-xs'
                    : 'border border-terracotta-deep/20 bg-white/70 text-ink hover:border-terracotta-deep/50 hover:bg-white'
                }`}
              >
                {t(cat.labelKey)}
              </button>
            )
          })}
        </nav>

        {/* Room Sub-filters (No "All Rooms" pill) */}
        {activeCategory === 'Rooms & Suites' && (
          <nav
            aria-label={t('galleryRoomsSuites')}
            className="mb-8 p-4 bg-white/60 rounded-2xl border border-terracotta/10"
          >
            <div className="flex flex-wrap gap-2">
              {rooms.map(r => {
                const isRoomActive = activeRoom === r.name
                return (
                  <button
                    key={r.name}
                    type="button"
                    onClick={() => handleSelectRoom(r.name)}
                    className={`rounded-lg px-3.5 py-1.5 text-xs font-medium transition-all ${
                      isRoomActive
                        ? 'bg-terracotta text-white shadow-xs'
                        : 'border border-terracotta/25 bg-white/80 text-ink hover:border-terracotta/60 hover:bg-white'
                    }`}
                  >
                    {r.name}
                  </button>
                )
              })}
            </div>
          </nav>
        )}

        {/* Clean Responsive Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {visiblePhotos.map((photo, index) => {
            return (
              <button
                key={`${photo.src}-${index}`}
                type="button"
                onClick={() => setSelectedIndex(index)}
                aria-label={photo.alt}
                className="group relative block w-full aspect-[4/3] overflow-hidden rounded-2xl bg-terracotta-deep/10 text-left shadow-xs transition-shadow hover:shadow-md focus:outline-none focus:ring-2 focus:ring-terracotta"
              >
                <img
                  src={photo.thumbnailSrc || photo.posterSrc || photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </button>
            )
          })}
        </div>

        {/* Video at the bottom of The Riad category */}
        {activeCategory === 'The Riad' && (
          <div className="mb-12 overflow-hidden rounded-2xl">
            <video
              src="/video.mp4"
              poster="/video-poster.webp"
              controls
              playsInline
              preload="metadata"
              className="w-full aspect-video rounded-2xl object-cover bg-black"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        )}
      </Content>

      <Footer />

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/95 p-4 md:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={selectedPhoto.alt}
          onClick={() => setSelectedIndex(null)}
          onTouchStart={e => {
            touchStart.current = e.touches[0]?.clientX ?? null
          }}
          onTouchEnd={e => {
            if (touchStart.current === null) return
            const delta = (e.changedTouches[0]?.clientX ?? touchStart.current) - touchStart.current
            if (Math.abs(delta) > 50) moveLightbox(delta < 0 ? 1 : -1)
            touchStart.current = null
          }}
        >
          {/* Close button */}
          <button
            type="button"
            onClick={e => {
              e.stopPropagation()
              setSelectedIndex(null)
            }}
            aria-label={t('close')}
            className="absolute right-4 top-4 z-20 rounded-full bg-white/15 p-3 text-white transition-colors hover:bg-white/30 backdrop-blur-xs"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Desktop Previous button (hidden on mobile, on side for desktop) */}
          <button
            type="button"
            onClick={e => {
              e.stopPropagation()
              moveLightbox(-1)
            }}
            aria-label={t('previous')}
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
              src={selectedPhoto.src}
              alt={selectedPhoto.alt}
              className="max-h-[70vh] md:max-h-[78vh] max-w-full rounded-2xl object-contain shadow-2xl"
            />

            {/* Controls & Counter under the image */}
            <div className="mt-4 flex items-center justify-center gap-6">
              {/* Mobile Previous Button (below image) */}
              <button
                type="button"
                onClick={e => {
                  e.stopPropagation()
                  moveLightbox(-1)
                }}
                aria-label={t('previous')}
                className="flex md:hidden rounded-full bg-white/20 p-2.5 text-white transition-colors hover:bg-white/35 backdrop-blur-xs"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              {/* Counter */}
              <span className="text-xs font-medium text-white/70 tracking-wider">
                {selectedIndex! + 1} / {visiblePhotos.length}
              </span>

              {/* Mobile Next Button (below image) */}
              <button
                type="button"
                onClick={e => {
                  e.stopPropagation()
                  moveLightbox(1)
                }}
                aria-label={t('next')}
                className="flex md:hidden rounded-full bg-white/20 p-2.5 text-white transition-colors hover:bg-white/35 backdrop-blur-xs"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </figure>

          {/* Desktop Next button (hidden on mobile, on side for desktop) */}
          <button
            type="button"
            onClick={e => {
              e.stopPropagation()
              moveLightbox(1)
            }}
            aria-label={t('next')}
            className="hidden md:flex absolute right-4 lg:right-8 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/15 p-3.5 text-white transition-colors hover:bg-white/30 backdrop-blur-xs"
          >
            <ChevronRight className="h-7 w-7" />
          </button>
        </div>
      )}
    </Page>
  )
}
