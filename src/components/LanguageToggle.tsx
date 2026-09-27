import { useLanguage } from '@/utils/i18n'
import { Check } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

import { languages } from '@/utils'

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const currentLanguage = languages.find(lang => lang.code === language)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      document.addEventListener('keydown', handleKeyDown)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen])

  return (
    <div className="relative inline-block text-left" ref={containerRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="true"
        aria-expanded={isOpen}
        className="h-10 px-3 flex items-center gap-1.5 rounded-full text-sand bg-black/25 hover:bg-black/40 backdrop-blur-md border border-sand/40 transition-colors shadow-sm cursor-pointer"
      >
        <span className="text-base leading-none">{currentLanguage?.flag}</span>
        <span className="text-sm font-semibold tracking-wider uppercase text-sand">{currentLanguage?.code}</span>
      </button>

      {isOpen && (
        <div
          className="absolute right-0 mt-2 w-52 rounded-2xl shadow-2xl border py-2 z-50 max-h-[calc(100vh-120px)] overflow-y-auto pointer-events-auto"
          style={{
            backgroundColor: '#f7f3ec',
            borderColor: 'rgba(179, 147, 104, 0.25)',
          }}
        >
          {languages.map(lang => {
            const isSelected = language === lang.code
            return (
              <button
                key={lang.code}
                type="button"
                onClick={() => {
                  setLanguage(lang.code)
                  setIsOpen(false)
                }}
                className={`w-full text-left px-4 py-2.5 text-sm flex items-center gap-3 transition-colors cursor-pointer ${
                  isSelected ? 'bg-black/10 text-ink font-semibold' : 'text-ink/80 hover:bg-black/5 active:bg-black/10'
                }`}
              >
                <span className="text-base leading-none">{lang.flag}</span>
                <span className="flex-1">{lang.name}</span>
                {isSelected && <Check className="w-4 h-4 ml-auto text-terracotta flex-shrink-0" />}
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}
