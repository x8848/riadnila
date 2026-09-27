import type { ReactNode } from 'react'
import type { Url } from './enums'

export type Language = 'en' | 'fr' | 'es' | 'it' | 'de' | 'ja' | 'zh' | 'pt' | 'ar' | 'nl'

export interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

export interface HeaderProps {
  title?: string
  subtitle?: string
  showBack?: boolean
  heroImage?: string
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

export interface Treatment {
  name: string
  duration: string
  price: string
  description: string
}

export interface LanguageOption {
  code: Language
  name: string
  flag: string
}

export interface NavCardItem {
  id: string
  to: Url
  titleKey: string
  kickerKey: string
  image: string
}

export interface RestaurantMenuItem {
  id: string
  to: Url | string
  titleKey: string
  kickerKey: string
  descriptionKey: string
  image: string
  disabled: boolean
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
