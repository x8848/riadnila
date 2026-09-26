import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { treatments } from '@/utils'
import { useLanguage } from '@/utils/i18n'
import { AlertCircle, Clock, Droplet, Users } from 'lucide-react'

export default function Spa() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-sand">
      <Header title={t('spa') || 'SPA'} heroImage="/images/spa.jpeg" />

      <section className="px-5 py-7">
        <div className="mb-6">
          <p className="eyebrow mb-2">{t('nilaSpa') || 'Riad Nila SPA'}</p>
          <h2 className="serif text-3xl font-medium text-terracotta-deep mb-3">
            {t('wellnessRelaxation') || 'Wellness & Relaxation'}
          </h2>
          <div className="mini-divider" />
          <p className="text-sm leading-relaxed text-ink/80">
            {t('spaDesc') ||
              'Indulge in authentic Moroccan spa treatments designed to rejuvenate your body and soul. Our experienced therapists use traditional techniques and natural products to create a sanctuary of peace and wellness.'}
          </p>
        </div>

        {/* Treatments Grid */}
        <div className="space-y-4 mb-8">
          {treatments.map((treatment, idx) => (
            <div key={idx} className="section-card">
              <div className="flex items-start justify-between mb-2">
                <h3 className="serif text-lg font-medium text-terracotta-deep flex-1">{treatment.name}</h3>
                <p className="font-semibold text-gold ml-3 flex-shrink-0">{treatment.price}</p>
              </div>
              {treatment.duration && (
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-2">
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
        <div className="section-card bg-amber-50 border-l-4 border-gold mb-6 p-4">
          <div className="flex gap-3">
            <AlertCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="serif text-lg font-medium text-terracotta-deep mb-2">
                {t('importantReservation') || 'Important Reservation Information'}
              </h3>
              <div className="space-y-2 text-sm text-ink/80">
                <p>
                  <span className="font-semibold">⏰ Advance Booking Required:</span> Minimum 2 hours in advance
                </p>
                <p>
                  <span className="font-semibold">🕘 Operating Hours:</span> 9:00 AM - 10:00 PM daily
                </p>
                <p>
                  <span className="font-semibold">👥 Capacity:</span> Maximum 2 people inside the spa at the same time
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Spa Information */}
        <div className="section-card mb-6">
          <h3 className="serif text-lg font-medium text-terracotta-deep mb-3">
            {t('spaInformation') || 'Spa Information'}
          </h3>
          <div className="space-y-3 text-sm">
            <div className="flex gap-3">
              <Clock className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-ink">Hours</p>
                <p className="text-muted-foreground">Daily 9:00 AM - 10:00 PM</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Users className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-ink">Advance Booking</p>
                <p className="text-muted-foreground">Minimum 2 hours in advance required</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Droplet className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-ink">Natural Products</p>
                <p className="text-muted-foreground">100% organic and locally sourced</p>
              </div>
            </div>
          </div>
        </div>

        {/* Booking CTA */}
        <div className="section-card">
          <p className="text-sm text-muted-foreground mb-4">
            {t('spaBookingNote') ||
              'Book your spa treatment in advance to secure your preferred time slot. Contact us via WhatsApp to make a reservation.'}
          </p>
          <a
            href="https://wa.me/212662134431?text=Hello%20Riad%20Nila%2C%20I%20would%20like%20to%20book%20a%20spa%20treatment."
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button w-full bg-[#25D366] hover:bg-[#20ba5a] text-white flex items-center justify-center gap-2 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.255.949c-1.238.503-2.37 1.236-3.356 2.241C3.060 10.378 2.275 11.950 2.275 13.607c0 1.052.215 2.074.636 3.028L2.581 22l3.507-1.114c.882.537 1.882.817 2.922.817h.001c5.514 0 10-4.486 10-10s-4.486-10-10-10z" />
            </svg>
            {t('bookNow') || 'Book Now via WhatsApp'}
          </a>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
