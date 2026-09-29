import BookingCtaCard from '@/components/BookingCtaCard'
import Content from '@/components/Content'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import MenuSectionCard from '@/components/MenuSectionCard'
import Page from '@/components/Page'
import PageHeader from '@/components/PageHeader'
import ServiceHoursCard from '@/components/ServiceHoursCard'
import { getMenuSections, getWhatsAppUrl } from '@/utils'
import { useLanguage } from '@/utils/i18n'

export default function Menu() {
  const { t } = useLanguage()
  const menuSections = getMenuSections(t)

  return (
    <Page>
      <Header title={t('lunchDinnerMenu')} heroImage="/images/lunch.webp" />

      <Content>
        <PageHeader eyebrow={t('riadNila')} title={t('lunchDinnerMenu')} description={t('lunchDinnerDesc')} />

        {/* Menu Sections */}
        <div className="space-y-6 mb-6">
          {menuSections.map((section, sectionIdx) => (
            <MenuSectionCard key={sectionIdx} section={section} showKicker />
          ))}
        </div>

        {/* Service Hours */}
        <ServiceHoursCard title={t('serviceHours')} className="mb-6">
          <p>
            <span className="font-semibold">{t('lunch')}:</span> 1:00 PM - 4:00 PM
          </p>
          <p>
            <span className="font-semibold">{t('dinner')}:</span> 6:00 PM - 10:00 PM
          </p>
        </ServiceHoursCard>

        {/* Book */}
        <BookingCtaCard
          note={t('reservationsRecommended')}
          href={getWhatsAppUrl('Hello Riad Nila! I would like to make a reservation for lunch or dinner.')}
          label={t('bookNow')}
        />
      </Content>

      <Footer />
    </Page>
  )
}
