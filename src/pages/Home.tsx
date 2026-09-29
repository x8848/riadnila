import Content from '@/components/Content'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import NavCard from '@/components/NavCard'
import Page from '@/components/Page'
import PageHeader from '@/components/PageHeader'
import { getNavCards, OCTORATE_URL } from '@/utils'
import { useLanguage } from '@/utils/i18n'

export default function Home() {
  const { t } = useLanguage()
  const navCards = getNavCards(t)

  return (
    <Page>
      <Header subtitle={t('tagline')} heroImage="/images/info.webp" />

      <Content className="pb-8">
        <PageHeader eyebrow={t('yourStayWithUs')} title={t('discoverRiadNila')} />

        <div className="space-y-4">
          {navCards.map(card => (
            <NavCard key={card.id} to={card.to} image={card.image} title={card.title} kicker={card.kicker} />
          ))}

          <NavCard
            href={OCTORATE_URL}
            image="/images/booking.webp"
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
