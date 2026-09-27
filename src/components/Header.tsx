import { Url } from '@/utils/enums'
import type { HeaderProps } from '@/utils/types'
import { ArrowLeft } from 'lucide-react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import LanguageToggle from './LanguageToggle'

export default function Header({ title, subtitle, showBack, heroImage }: HeaderProps) {
  const navigate = useNavigate()
  const location = useLocation()
  const isHome = location.pathname === Url.Home
  const shouldShowBack = showBack ?? !isHome

  return (
    <section className="hero-section relative z-30">
      {/* Curved Hero Background */}
      <div className="absolute inset-0 overflow-hidden rounded-b-[44%_10%] pointer-events-none">
        {heroImage && <img src={heroImage} alt="" className="hero-bg absolute inset-0 w-full h-full object-cover" />}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/55 to-black/75" />
      </div>

      {/* Top Bar */}
      <div className="relative z-50 w-full max-w-[1180px] mx-auto px-5 lg:px-8 pt-5 flex items-center justify-between">
        {shouldShowBack ? (
          <button
            onClick={() => navigate(-1)}
            aria-label="Go back"
            className="w-11 h-11 rounded-full border border-white/55 bg-black/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-black/30 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
        ) : (
          <div className="w-11 h-11" />
        )}
        <div className="ml-auto">
          <LanguageToggle />
        </div>
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
        {title && (
          <h1 className="serif text-3xl sm:text-4xl font-medium text-white tracking-wide px-4 py-2">{title}</h1>
        )}
        {subtitle && (
          <p className="serif italic text-base sm:text-lg leading-relaxed max-w-md mx-auto text-white/90 px-4 py-1.5 mt-1">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}
