import AlertNotice from '@/components/AlertNotice'
import BookingCtaCard from '@/components/BookingCtaCard'
import Content from '@/components/Content'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import InfoCard from '@/components/InfoCard'
import Page from '@/components/Page'
import PageHeader from '@/components/PageHeader'
import { getSpaTreatments, getWhatsAppUrl } from '@/utils'
import { useLanguage } from '@/utils/i18n'
import { Clock, Droplet, Users } from 'lucide-react'

export default function Spa() {
  const { t } = useLanguage()
  const spaTreatments = getSpaTreatments(t)

  return (
    <Page>
      <Header title={t('spa')} heroImage="/images/spa.webp" />

      <Content>
        <PageHeader eyebrow={t('riadNila')} title={t('wellnessRelaxation')} description={t('spaDesc')} />

        {/* Treatments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {spaTreatments.map((treatment, idx) => (
            <div key={idx} className="section-card flex flex-col justify-between">
              <div>
                <div className="flex items-start justify-between mb-2">
                  <h3 className="serif text-lg font-medium text-terracotta-deep flex-1">{treatment.name}</h3>
                  <p className="font-semibold text-gold ml-3 flex-shrink-0">{treatment.price}</p>
                </div>
                {treatment.duration && (
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {treatment.duration}
                    </span>
                  </div>
                )}
                <p className="text-sm text-ink/70 leading-relaxed">{treatment.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Important Reservation Notice */}
        <AlertNotice title={t('importantReservation')} className="mb-6">
          <p>
            <span className="font-semibold">⏰ {t('spaAdvanceBookingNotice')}</span> {t('spaAdvanceBookingNoticeDesc')}
          </p>
          <p>
            <span className="font-semibold">🕘 {t('spaOperatingHoursNotice')}</span> {t('spaOperatingHoursNoticeDesc')}
          </p>
          <p>
            <span className="font-semibold">👥 {t('spaCapacityNotice')}</span> {t('spaCapacityNoticeDesc')}
          </p>
        </AlertNotice>

        {/* Spa Information */}
        <InfoCard title={t('spaInformation')} className="mb-6">
          <div className="space-y-3 text-sm">
            <div className="flex gap-3">
              <Clock className="w-5 h-5 text-olive flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-ink">{t('spaHoursTitle')}</p>
                <p className="text-muted-foreground">{t('spaHoursDesc')}</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Users className="w-5 h-5 text-olive flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-ink">{t('spaAdvanceBookingTitle')}</p>
                <p className="text-muted-foreground">{t('spaAdvanceBookingDesc')}</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Droplet className="w-5 h-5 text-olive flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-ink">{t('spaNaturalProductsTitle')}</p>
                <p className="text-muted-foreground">{t('spaNaturalProductsDesc')}</p>
              </div>
            </div>
          </div>
        </InfoCard>

        {/* Booking CTA */}
        <BookingCtaCard
          note={t('spaBookingNote')}
          href={getWhatsAppUrl('Hello Riad Nila, I would like to book a spa treatment.')}
          label={t('bookNow')}
        />
      </Content>

      <Footer />
    </Page>
  )
}
