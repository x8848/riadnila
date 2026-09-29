import Content from '@/components/Content'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Lightbox from '@/components/Lightbox'
import Page from '@/components/Page'
import PageHeader from '@/components/PageHeader'
import { GALLERY_CATEGORIES, GALLERY_ROOMS } from '@/utils'
import { useGallery } from '@/utils/hooks'
import { useLanguage } from '@/utils/i18n'

export default function Gallery() {
  const { t } = useLanguage()
  const {
    activeCategory,
    activeRoom,
    selectedIndex,
    setSelectedIndex,
    visiblePhotos,
    selectedPhoto,
    handleSelectCategory,
    handleSelectRoom,
    handleMoveLightbox,
  } = useGallery()

  return (
    <Page>
      <Header title={t('gallery')} heroImage="/images/gallery.webp" />

      <Content>
        {/* Intro Section */}
        <PageHeader
          eyebrow={t('discoverRiadNila')}
          title={t('galleryIntroTitle')}
          description={
            <p className="text-sm leading-relaxed text-ink/80 max-w-2xl">{t('galleryFeaturedDescription')}</p>
          }
        />

        {/* Categories Tab Navigation */}
        <nav aria-label={t('galleryCategories')} className="mb-6 flex flex-wrap gap-2">
          {GALLERY_CATEGORIES.map(category => {
            const isActive = activeCategory === category.key
            return (
              <button
                key={category.key}
                type="button"
                onClick={() => handleSelectCategory(category.key)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-terracotta-deep text-white shadow-xs'
                    : 'border border-terracotta-deep/20 bg-white/70 text-ink hover:border-terracotta-deep/50 hover:bg-white'
                }`}
              >
                {t(category.labelKey)}
              </button>
            )
          })}
        </nav>

        {/* Room Sub-filters */}
        {activeCategory === 'Rooms & Suites' && (
          <nav
            aria-label={t('galleryRoomsSuites')}
            className="mb-8 p-4 bg-white/60 rounded-2xl border border-terracotta/10"
          >
            <div className="flex flex-wrap gap-2">
              {GALLERY_ROOMS.map(room => {
                const isRoomActive = activeRoom === room.name
                return (
                  <button
                    key={room.name}
                    type="button"
                    onClick={() => handleSelectRoom(room.name)}
                    className={`rounded-lg px-3.5 py-1.5 text-xs font-medium transition-all ${
                      isRoomActive
                        ? 'bg-terracotta text-white shadow-xs'
                        : 'border border-terracotta/25 bg-white/80 text-ink hover:border-terracotta/60 hover:bg-white'
                    }`}
                  >
                    {room.name}
                  </button>
                )
              })}
            </div>
          </nav>
        )}

        {/* Responsive Photo & Video Layout */}
        <div className="flex flex-col">
          {/* Video: first on mobile, last on desktop */}
          {activeCategory === 'The Riad' && (
            <div className="order-first md:order-last mb-6 md:mb-0 md:mt-6 overflow-hidden rounded-2xl">
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

          {/* Clean Responsive Photo Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {visiblePhotos.map((photo, index) => (
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
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </button>
            ))}
          </div>
        </div>
      </Content>

      <Footer />

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <Lightbox
          src={selectedPhoto.src}
          alt={selectedPhoto.alt}
          currentIndex={selectedIndex!}
          totalCount={visiblePhotos.length}
          closeLabel={t('close')}
          prevLabel={t('previous')}
          nextLabel={t('next')}
          onClose={() => setSelectedIndex(null)}
          onPrev={() => handleMoveLightbox(-1)}
          onNext={() => handleMoveLightbox(1)}
        />
      )}
    </Page>
  )
}
