import type { GalleryCategory, GalleryPhoto, GalleryRoom } from './types'

const categorySlugMap: Record<string, GalleryCategory> = {
  'the-riad': 'The Riad',
  'restaurant': 'Restaurant',
  'terrace-rooftop': 'Terrace & Rooftop',
  'hammam-spa': 'Hammam & Spa',
  'rooms-suites': 'Rooms & Suites',
}

const roomSlugMap: Record<string, GalleryRoom> = {
  'akchour': 'Akchour',
  'bab-ain': 'Bab Ain',
  'bab-hammar': 'Bab Hammar',
  'bab-harmoun': 'Bab Harmoun',
  'bab-mahrouq': 'Bab Mahrouq',
  'bab-mellah': 'Bab Mellah',
  'bab-mouqaf': 'Bab Mouqaf',
  'bab-mqadem': 'Bab Mqadem',
  'bab-noukba': 'Bab Noukba',
  'bab-onsar': 'Bab Onsar',
  'bab-sebanin': 'Bab Sebanin',
  'bab-souk': 'Bab Souk',
  'kasbah': 'Kasbah',
  'outa-hammam': 'Outa Hammam',
  'ras-al-maa': 'Ras Al Maa',
}

const imageFiles = import.meta.glob<string>(
  '/src/assets/gallery/**/*.{webp,jpeg,jpg,png}',
  { eager: true, import: 'default' }
)

export const galleryPhotos: GalleryPhoto[] = Object.entries(imageFiles).map(([path, src]) => {
  // Path format: /src/assets/gallery/<category-slug>/... or /src/assets/gallery/rooms-suites/<room-slug>/<filename>
  const parts = path.replace('/src/assets/gallery/', '').split('/')
  const categorySlug = parts[0]
  const isRoom = categorySlug === 'rooms-suites' && parts.length > 2
  const roomSlug = isRoom ? parts[1] : undefined

  const category = categorySlugMap[categorySlug] || 'The Riad'
  const room = roomSlug ? roomSlugMap[roomSlug] || null : null
  const alt = room ? `Riad Nila - ${room}` : `Riad Nila - ${category}`

  return {
    src,
    alt,
    category,
    room,
  }
})
