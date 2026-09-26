import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { useLanguage } from '@/utils/i18n'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

import { navCards } from '@/utils'

export default function Home() {
  const { language, t } = useLanguage()

  return (
    <div className="min-h-screen bg-sand" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      {/* General Header Component */}
      <Header subtitle={t('tagline')} heroImage="/images/info.jpeg" />

      {/* Content Section */}
      <section className="px-5 py-7 pb-8">
        <div className="mb-6">
          <p className="eyebrow mb-2">{t('yourStayWithUs')}</p>
          <h2 className="serif text-3xl font-medium text-terracotta-deep mb-3">{t('discoverRiadNila')}</h2>
          <div className="mini-divider" />
        </div>

        {/* Navigation Cards */}
        <div className="space-y-4">
          {navCards.map(card => (
            <Link key={card.id} to={card.to} className="nav-card group block">
              <img src={card.image} alt={t(card.titleKey)} />
              <div className="relative z-10 flex items-center justify-between p-5 h-full">
                <div className="text-left">
                  <p className="text-xs font-medium uppercase tracking-wider text-white/70 mb-1">{t(card.kickerKey)}</p>
                  <h3 className="serif text-2xl font-medium text-white">{t(card.titleKey)}</h3>
                </div>
                <ArrowUpRight className="w-5 h-5 text-white/70 group-hover:text-white transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </Link>
          ))}

          <a
            href="https://book.octorate.com/octobook/site/reservation/index.xhtml;octobooksessionid=26a078a9c0bd7bab60b71d1e532e?codice=470391"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-card group block lg:h-40"
          >
            <img src="/images/booking.jpeg" alt={t('bookOnline')} />
            <div className="relative z-10 flex items-center justify-between p-5 h-full">
              <div className="text-left">
                <p className="text-xs font-medium uppercase tracking-wider text-white/70 mb-1">{t('directBooking')}</p>
                <h3 className="serif text-2xl font-medium text-white">{t('bookOnline')}</h3>
              </div>
              <ArrowUpRight className="w-5 h-5 text-white/70 group-hover:text-white transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </a>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
