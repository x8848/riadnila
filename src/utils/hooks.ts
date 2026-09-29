import { type RefObject, useEffect, useMemo, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { GALLERY_CATEGORIES, GALLERY_ROOMS, galleryPhotos } from './gallery'
import type { GalleryCategory, GalleryRoom } from './types'

export function useClickOutside<T extends HTMLElement>(
  ref: RefObject<T | null>,
  handler: () => void,
  isActive = true,
): void {
  useEffect(() => {
    if (!isActive) return

    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        handler()
      }
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handler()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [ref, handler, isActive])
}

export function useGallery() {
  const navigate = useNavigate()
  const { category: categorySlug, room: roomSlug } = useParams<{ category?: string; room?: string }>()

  const activeCategory: GalleryCategory = useMemo(() => {
    if (!categorySlug) return 'The Riad'
    const found = GALLERY_CATEGORIES.find(c => c.slug === categorySlug)
    return found ? found.key : 'The Riad'
  }, [categorySlug])

  const activeRoom: GalleryRoom = useMemo(() => {
    if (activeCategory !== 'Rooms & Suites') return GALLERY_ROOMS[0].name
    if (!roomSlug) return GALLERY_ROOMS[0].name
    const found = GALLERY_ROOMS.find(r => r.slug === roomSlug)
    return found ? found.name : GALLERY_ROOMS[0].name
  }, [activeCategory, roomSlug])

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const visiblePhotos = useMemo(() => {
    if (activeCategory === 'Rooms & Suites') {
      return galleryPhotos.filter(photo => photo.category === 'Rooms & Suites' && photo.room === activeRoom)
    }
    return galleryPhotos.filter(photo => photo.category === activeCategory)
  }, [activeCategory, activeRoom])

  const handleSelectCategory = (cat: GalleryCategory) => {
    const slug = GALLERY_CATEGORIES.find(c => c.key === cat)?.slug || 'the-riad'
    if (cat === 'Rooms & Suites') {
      const defaultRoomSlug = GALLERY_ROOMS.find(r => r.name === activeRoom)?.slug || GALLERY_ROOMS[0].slug
      navigate(`/gallery/${slug}/${defaultRoomSlug}`)
    } else {
      navigate(`/gallery/${slug}`)
    }
    setSelectedIndex(null)
  }

  const handleSelectRoom = (roomName: GalleryRoom) => {
    const rSlug = GALLERY_ROOMS.find(r => r.name === roomName)?.slug || GALLERY_ROOMS[0].slug
    navigate(`/gallery/rooms-suites/${rSlug}`)
    setSelectedIndex(null)
  }

  const handleMoveLightbox = (delta: number) => {
    if (selectedIndex === null || visiblePhotos.length === 0) return
    const nextIndex = (selectedIndex + delta + visiblePhotos.length) % visiblePhotos.length
    setSelectedIndex(nextIndex)
  }

  const selectedPhoto = selectedIndex !== null ? visiblePhotos[selectedIndex] : null

  return {
    activeCategory,
    activeRoom,
    selectedIndex,
    setSelectedIndex,
    visiblePhotos,
    selectedPhoto,
    handleSelectCategory,
    handleSelectRoom,
    handleMoveLightbox,
  }
}
