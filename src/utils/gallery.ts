import type { GalleryCategory, GalleryCategoryItem, GalleryPhoto, GalleryRoom, GalleryRoomItem } from './types'

export const GALLERY_CATEGORIES: GalleryCategoryItem[] = [
  { key: 'The Riad', labelKey: 'galleryTheRiad', slug: 'the-riad' },
  { key: 'Restaurant', labelKey: 'galleryRestaurant', slug: 'restaurant' },
  { key: 'Terrace & Rooftop', labelKey: 'galleryTerraceRooftop', slug: 'terrace-rooftop' },
  { key: 'Hammam & Spa', labelKey: 'galleryHammamSpa', slug: 'hammam-spa' },
  { key: 'Rooms & Suites', labelKey: 'galleryRoomsSuites', slug: 'rooms-suites' },
]

export const GALLERY_ROOMS: GalleryRoomItem[] = [
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

export const CATEGORY_SLUG_MAP: Record<string, GalleryCategory> = Object.fromEntries(
  GALLERY_CATEGORIES.map(c => [c.slug, c.key]),
)

export const ROOM_SLUG_MAP: Record<string, GalleryRoom> = Object.fromEntries(GALLERY_ROOMS.map(r => [r.slug, r.name]))

const imageFiles = import.meta.glob<string>('/src/assets/gallery/**/*.{webp,jpeg,jpg,png}', {
  eager: true,
  import: 'default',
})

export const galleryPhotos: GalleryPhoto[] = Object.entries(imageFiles).map(([path, src]) => {
  // Path format: /src/assets/gallery/<category-slug>/... or /src/assets/gallery/rooms-suites/<room-slug>/<filename>
  const parts = path.replace('/src/assets/gallery/', '').split('/')
  const categorySlug = parts[0]
  const isRoom = categorySlug === 'rooms-suites' && parts.length > 2
  const roomSlug = isRoom ? parts[1] : undefined

  const category = CATEGORY_SLUG_MAP[categorySlug] || 'The Riad'
  const room = roomSlug ? ROOM_SLUG_MAP[roomSlug] || null : null
  const alt = room ? `Riad Nila - ${room}` : `Riad Nila - ${category}`

  return { src, alt, category, room }
})
