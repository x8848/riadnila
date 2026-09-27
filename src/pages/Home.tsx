import Footer from '@/components/Footer'
import Header from '@/components/Header'
import NavCard from '@/components/NavCard'
import { getNavCards } from '@/utils'
import { useLanguage } from '@/utils/i18n'

export default function Home() {
  const { language, t } = useLanguage()
  const navCards = getNavCards(t)

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
            <NavCard key={card.id} to={card.to} image={card.image} title={card.title} kicker={card.kicker} />
          ))}

          <NavCard
            href="https://book.octorate.com/octobook/site/reservation/index.xhtml;octobooksessionid=26a078a9c0bd7bab60b71d1e532e?codice=470391"
            image="/images/booking.jpeg"
            title={t('bookOnline')}
            kicker={t('directBooking')}
            className="lg:h-40"
          />
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
