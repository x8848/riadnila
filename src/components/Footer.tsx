import { scrollToTop, Url, WHATSAPP_BASE_URL } from '@/utils'
import { useLanguage } from '@/utils/i18n'
import { ArrowUp, MapPin, MessageCircle, QrCode, Star } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="relative mt-4 border-t border-terracotta-deep/15 bg-black/[0.03] text-ink">
      {/* Back to top button positioned right on the divider line, aligned with content */}
      <div className="max-w-[1180px] mx-auto px-5 lg:px-8 relative">
        <button
          type="button"
          onClick={() => scrollToTop()}
          aria-label={t('scrollToTop')}
          title={t('scrollToTop')}
          className="absolute end-5 lg:end-8 top-0 -translate-y-1/2 z-10 w-11 h-11 rounded-full border border-white/40 bg-black/25 backdrop-blur-xl backdrop-saturate-150 shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.45),0_6px_20px_0_rgba(0,0,0,0.12)] flex items-center justify-center text-white transition-all duration-300 hover:bg-black/35 hover:border-white/60 hover:shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.65),0_8px_24px_0_rgba(0,0,0,0.18)] active:scale-90"
        >
          <ArrowUp className="w-4 h-4 drop-shadow-xs" />
        </button>
      </div>

      <div className="max-w-6xl mx-auto py-8 px-6 flex flex-col items-center">
        {/* Social Media Links */}
        <div className="flex justify-center gap-6 mb-6">
          {/* Instagram */}
          <a
            href="https://www.instagram.com/riadnila/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-terracotta transition-colors duration-200 flex items-center gap-2"
            title="Follow us on Instagram"
          >
            <svg
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
            <span className="text-sm hidden sm:inline">Instagram</span>
          </a>

          {/* Google Maps */}
          <a
            href="https://www.google.com/maps/place/Riad+Nila/@35.1697248,-5.2634902,17z/data=!3m1!4b1!4m9!3m8!1s0xd0b271f75f19cbb:0x1855dde75a352b32!5m2!4m1!1i2!8m2!3d35.1697204!4d-5.2609153!16s%2Fg%2F11j0wj45t4?entry=ttu"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-terracotta transition-colors duration-200 flex items-center gap-2"
            title="View location on Google Maps"
          >
            <MapPin className="w-6 h-6" />
            <span className="text-sm hidden sm:inline">Google Maps</span>
          </a>

          {/* WhatsApp */}
          <a
            href={WHATSAPP_BASE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-terracotta transition-colors duration-200 flex items-center gap-2"
            title="Contact us on WhatsApp"
          >
            <MessageCircle className="w-6 h-6" />
            <span className="text-sm hidden sm:inline">WhatsApp</span>
          </a>

          {/* TripAdvisor */}
          <a
            href="https://www.tripadvisor.com/Hotel_Review-g304013-d19516865-Reviews-Riad_Nila-Chefchaouen_Tanger_Tetouan_Al_Hoceima.html"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-terracotta transition-colors duration-200 flex items-center gap-2"
            title="Read reviews on TripAdvisor"
          >
            <Star className="w-6 h-6" />
            <span className="text-sm hidden sm:inline">TripAdvisor</span>
          </a>
        </div>

        {/* Digital Guest Access & Copyright */}
        <div className="text-center text-sm text-ink/60 flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
          <span>
            © {new Date().getFullYear()} Riad Nila. {t('allRightsReserved')}
          </span>
          <Link
            to={Url.QRCode}
            className="hover:text-terracotta transition-colors duration-200 inline-flex items-center gap-1.5"
            title={t('digitalGuestAccess')}
          >
            <span>{t('digitalGuestAccess')}</span>
            <QrCode className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </footer>
  )
}
