import BookingCtaCard from '@/components/BookingCtaCard'
import Content from '@/components/Content'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import MenuSectionCard from '@/components/MenuSectionCard'
import Page from '@/components/Page'
import PageHeader from '@/components/PageHeader'
import ServiceHoursCard from '@/components/ServiceHoursCard'
import { getRooftopMenuSections, getWhatsAppUrl } from '@/utils'
import { useLanguage } from '@/utils/i18n'

export default function Rooftop() {
  const { t } = useLanguage()
  const menuSections = getRooftopMenuSections(t)

  return (
    <Page>
      <Header title={t('rooftopTerrace')} heroImage="/images/rooftop.webp" />

      <Content>
        <PageHeader eyebrow={t('riadNila')} title={t('rooftopExperience')} description={t('rooftopDesc')} />

        {/* Menu Sections */}
        <div className="space-y-6 mb-6">
          {menuSections.map((section, idx) => (
            <MenuSectionCard key={idx} section={section} showKicker />
          ))}
        </div>

        {/* Service Hours */}
        <ServiceHoursCard title={t('serviceHours')} className="mb-6">
          <p>
            <span className="font-semibold">{t('rooftopNote')}</span>
          </p>
        </ServiceHoursCard>

        {/* Booking CTA */}
        <BookingCtaCard
          note={t('reservationsRecommended')}
          href={getWhatsAppUrl('Hello Riad Nila, I would like to reserve the rooftop.')}
          label={t('bookNow')}
        />
      </Content>

      <Footer />
    </Page>
  )
}
