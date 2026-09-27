import Content from '@/components/Content'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import NavCard from '@/components/NavCard'
import Page from '@/components/Page'
import { getNavCards, OCTORATE_URL } from '@/utils'
import { useLanguage } from '@/utils/i18n'

export default function Home() {
  const { language, t } = useLanguage()
  const navCards = getNavCards(t)

  return (
    <Page dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <Header subtitle={t('tagline')} heroImage="/images/info.jpeg" />

      <Content className="pb-8">
        <div className="mb-6">
          <p className="eyebrow mb-2">{t('yourStayWithUs')}</p>
          <h2 className="serif text-3xl font-medium text-terracotta-deep mb-3">{t('discoverRiadNila')}</h2>
          <div className="mini-divider" />
        </div>

        <div className="space-y-4">
          {navCards.map(card => (
            <NavCard key={card.id} to={card.to} image={card.image} title={card.title} kicker={card.kicker} />
          ))}

          <NavCard
            href={OCTORATE_URL}
            image="/images/booking.jpeg"
            title={t('bookOnline')}
            kicker={t('directBooking')}
            className="lg:h-40"
          />
        </div>
      </Content>

      <Footer />
    </Page>
  )
}
