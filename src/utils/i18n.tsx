import React, { createContext, useContext, useEffect, useState } from 'react'

import ar from '@/translations/ar.json'
import de from '@/translations/de.json'
import en from '@/translations/en.json'
import es from '@/translations/es.json'
import fr from '@/translations/fr.json'
import it from '@/translations/it.json'
import ja from '@/translations/ja.json'
import nl from '@/translations/nl.json'
import pt from '@/translations/pt.json'
import zh from '@/translations/zh.json'

import type { Language, LanguageContextType } from './types'
export type { Language, LanguageContextType }

const translations: Record<Language, Record<string, string>> = { en, fr, es, it, de, ja, zh, pt, ar, nl }

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('language')
    if (saved && translations[saved as Language]) {
      return saved as Language
    }
    return 'en'
  })

  useEffect(() => {
    localStorage.setItem('language', language)
    document.documentElement.lang = language
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr'
  }, [language])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
  }

  const t = (key: string): string => translations[language]?.[key] || translations.en?.[key] || key

  const value: LanguageContextType = { language, setLanguage, t }
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return context
}

export const useLanguageContext = useLanguage
