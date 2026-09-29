import type { ReactNode } from 'react'
import type { Url } from './enums'

export type Language = 'en' | 'fr' | 'es' | 'it' | 'de' | 'ja' | 'zh' | 'pt' | 'ar' | 'nl'

export type TranslateFn = (key: string) => string

export interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: TranslateFn
}

export interface MenuItem {
  name: string
  price: string
  description?: string
}

export interface MenuSection {
  title: string
  kicker: string
  symbol: string
  items: MenuItem[]
}

export interface Service {
  icon: ReactNode | string
  title: string
  description: string
  details: string[]
}

export interface Amenity {
  icon: ReactNode | string
  title: string
  description: string
}

export interface Treatment {
  name: string
  duration: string
  price: string
  description: string
}

export interface AboutValue {
  icon: string
  title: string
  description: string
}

export interface AboutFacility {
  title: string
  description: string
}

export interface BreakfastMenuData {
  drinks: string[]
  eggs: string[]
  traditional: string[]
}

export interface GuestInfoSection {
  title: string
  items: string[]
}

export interface LanguageOption {
  code: Language
  name: string
  flag: string
}

export interface NavCardItem {
  id: string
  to: Url
  image: string
  title: string
  kicker: string
}

export interface RestaurantMenuItem {
  id: string
  to: Url | string
  image: string
  disabled: boolean
  title: string
  kicker: string
  description?: string
}

// -------------------------------------------------------------
// Component Props
// -------------------------------------------------------------

export interface PageProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
}

export interface ContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
}

export interface HeaderProps {
  title?: string
  subtitle?: string
  showBack?: boolean
  heroImage?: string
}

export interface PageHeaderProps {
  eyebrow?: string
  title: string
  description?: ReactNode
  className?: string
}

export interface InfoCardProps {
  title?: ReactNode
  icon?: ReactNode
  children: ReactNode
  className?: string
}

export interface ServiceHoursCardProps {
  title: ReactNode
  children: ReactNode
  className?: string
}

export interface AlertNoticeProps {
  icon?: ReactNode
  title?: ReactNode
  children: ReactNode
  className?: string
}

export interface BookingCtaCardProps {
  note: ReactNode
  href: string
  label?: string
  className?: string
}

export interface WhatsAppButtonProps {
  href: string
  label: string
  className?: string
}

export interface NavCardProps {
  image: string
  title: string
  kicker: string
  to?: Url | string
  href?: string
  disabled?: boolean
  className?: string
}

export interface MenuSectionCardProps {
  section: MenuSection
  showKicker?: boolean
  className?: string
}

export interface QRCardProps {
  title: string
  description: string
  url: string
  filename: string
}

export interface LightboxProps {
  src: string
  alt: string
  currentIndex: number
  totalCount: number
  closeLabel?: string
  prevLabel?: string
  nextLabel?: string
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}

// -------------------------------------------------------------
// Gallery Types
// -------------------------------------------------------------

export type GalleryCategory = 'The Riad' | 'Rooms & Suites' | 'Terrace & Rooftop' | 'Restaurant' | 'Hammam & Spa'

export type GalleryRoom =
  | 'Akchour'
  | 'Bab Ain'
  | 'Bab Hammar'
  | 'Bab Harmoun'
  | 'Bab Mahrouq'
  | 'Bab Mouqaf'
  | 'Bab Mqadem'
  | 'Bab Noukba'
  | 'Bab Onsar'
  | 'Bab Sebanin'
  | 'Bab Souk'
  | 'Kasbah'
  | 'Bab Mellah'
  | 'Outa Hammam'
  | 'Ras Al Maa'

export interface GalleryCategoryItem {
  key: GalleryCategory
  labelKey: string
  slug: string
}

export interface GalleryRoomItem {
  name: GalleryRoom
  slug: string
}

export interface GalleryPhoto {
  src: string
  thumbnailSrc?: string | null
  posterSrc?: string | null
  alt: string
  category: GalleryCategory
  size?: 'feature' | 'tall' | 'standard' | 'wide'
  type?: 'image' | 'video'
  room?: GalleryRoom | null
  featuredInAll?: boolean
  hiddenFromAll?: boolean
}
