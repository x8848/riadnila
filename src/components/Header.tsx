import { Url } from '@/utils/enums'
import { useLanguage } from '@/utils/i18n'
import type { HeaderProps } from '@/utils/types'
import { ArrowLeft } from 'lucide-react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import LanguageToggle from './LanguageToggle'

export default function Header({ subtitle, showBack, heroImage }: HeaderProps) {
  const { t } = useLanguage()
  const navigate = useNavigate()
  const location = useLocation()
  const isHome = location.pathname === Url.Home
  const shouldShowBack = showBack ?? !isHome

  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1)
    } else {
      navigate(Url.Home)
    }
  }

  return (
    <section className="hero-section relative z-30">
      {/* Curved Hero Background */}
      <div className="absolute inset-0 overflow-hidden rounded-b-[44%_10%] pointer-events-none">
        {heroImage && (
          <img
            src={heroImage}
            alt=""
            fetchPriority="high"
            decoding="async"
            className="hero-bg absolute inset-0 w-full h-full object-cover"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/55 to-black/75" />
      </div>

      {/* Top Bar */}
      <div
        className={`relative z-50 w-full max-w-[1180px] mx-auto px-5 lg:px-8 pt-5 flex items-center ${
          shouldShowBack ? 'justify-between' : 'justify-end'
        }`}
      >
        {shouldShowBack && (
          <button
            type="button"
            onClick={handleBack}
            aria-label={t('goBack')}
            title={t('goBack')}
            className="w-11 h-11 rounded-full border border-white/55 bg-black/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-black/30 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 rtl:rotate-180" />
          </button>
        )}
        <LanguageToggle />
      </div>

      {/* Title Area - Centered with single white logo above title */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 pb-8 sm:pb-10 pt-2">
        <Link to={Url.Home} className="flex items-center justify-center mb-3" title="Riad Nila Home">
          <div
            role="img"
            aria-label="Riad Nila"
            className="w-44 sm:w-56 md:w-64 aspect-[1124/863] bg-sand mx-auto drop-shadow-md"
            style={{
              maskImage: 'url(/images/logo.png)',
              WebkitMaskImage: 'url(/images/logo.png)',
              maskSize: 'contain',
              WebkitMaskSize: 'contain',
              maskRepeat: 'no-repeat',
              WebkitMaskRepeat: 'no-repeat',
              maskPosition: 'center',
              WebkitMaskPosition: 'center',
            }}
          />
        </Link>
        {subtitle && (
          <p className="serif italic text-base sm:text-lg leading-relaxed max-w-md mx-auto text-white/90 px-4 py-1.5 mt-1">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}
