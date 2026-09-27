import Footer from '@/components/Footer'
import Header from '@/components/Header'
import WhatsAppButton from '@/components/WhatsAppButton'
import { getSpaTreatments } from '@/utils'
import { useLanguage } from '@/utils/i18n'
import { AlertCircle, Clock, Droplet, Users } from 'lucide-react'

export default function Spa() {
  const { t } = useLanguage()
  const spaTreatments = getSpaTreatments(t)

  return (
    <div className="min-h-screen bg-sand">
      <Header title={t('spa')} heroImage="/images/spa.jpeg" />

      <section className="px-5 py-7">
        <div className="mb-6">
          <p className="eyebrow mb-2">{t('nilaSpa')}</p>
          <h2 className="serif text-3xl font-medium text-terracotta-deep mb-3">{t('wellnessRelaxation')}</h2>
          <div className="mini-divider" />
          <p className="text-sm leading-relaxed text-ink/80">{t('spaDesc')}</p>
        </div>

        {/* Treatments Grid */}
        <div className="space-y-4 mb-8">
          {spaTreatments.map((treatment, idx) => (
            <div key={idx} className="section-card">
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
              <p className="text-sm text-ink/70">{treatment.description}</p>
            </div>
          ))}
        </div>

        {/* Important Reservation Notice */}
        <div className="section-card bg-amber-50 border-l-4 border-gold mb-6 py-4 px-6">
          <div className="flex gap-3">
            <AlertCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="serif text-lg font-medium text-terracotta-deep mb-2">{t('importantReservation')}</h3>
              <div className="space-y-2 text-sm text-ink/80">
                <p>
                  <span className="font-semibold">⏰ {t('spaAdvanceBookingNotice')}</span> {t('spaAdvanceBookingNoticeDesc')}
                </p>
                <p>
                  <span className="font-semibold">🕘 {t('spaOperatingHoursNotice')}</span> {t('spaOperatingHoursNoticeDesc')}
                </p>
                <p>
                  <span className="font-semibold">👥 {t('spaCapacityNotice')}</span> {t('spaCapacityNoticeDesc')}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Spa Information */}
        <div className="section-card mb-6">
          <h3 className="serif text-lg font-medium text-terracotta-deep mb-3">{t('spaInformation')}</h3>
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
        </div>

        {/* Booking CTA */}
        <div className="section-card">
          <p className="text-sm text-muted-foreground mb-4">{t('spaBookingNote')}</p>
          <WhatsAppButton
            href="https://wa.me/212662134431?text=Hello%20Riad%20Nila%2C%20I%20would%20like%20to%20book%20a%20spa%20treatment."
            label={t('bookNow')}
          />
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
