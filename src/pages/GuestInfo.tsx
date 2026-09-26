import Footer from '@/components/Footer'
import Header from '@/components/Header'
import WhatsAppButton from '@/components/WhatsAppButton'
import { useLanguage } from '@/utils/i18n'
import { Droplet, Phone, Utensils, Wifi, Wind } from 'lucide-react'

export default function GuestInfo() {
  const { t } = useLanguage()
  const amenities = [
    {
      icon: Wifi,
      title: t('freeWiFi'),
      description: t('highSpeedInternet'),
      network: 'Riadnila',
      password: 'Nila1471',
    },
    { icon: Utensils, title: t('restaurant'), description: t('onSiteDining') },
    { icon: Droplet, title: t('hotWater'), description: t('hotWaterSupply') },
    { icon: Wind, title: t('airConditioning'), description: t('climateControl') },
  ]

  return (
    <div className="min-h-screen bg-sand">
      <Header title={t('guestInformation')} heroImage="/images/info.jpeg" />

      <section className="px-5 py-7">
        <div className="mb-6">
          <p className="eyebrow mb-2">{t('nila')}</p>
          <h2 className="serif text-3xl font-medium text-terracotta-deep mb-3">{t('yourComfortAwaits')}</h2>
          <div className="mini-divider" />
          <p className="text-sm leading-relaxed text-ink/80">{t('experienceAuthentic')}</p>
        </div>

        {/* Amenities Grid */}
        <div className="space-y-3 mb-8">
          {amenities.map((amenity, idx) => {
            const Icon = amenity.icon
            return (
              <div key={idx} className="section-card">
                <div className="flex gap-3">
                  <div className="w-10 h-10 rounded-full bg-olive/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-olive" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-ink text-sm">{amenity.title}</h3>
                    <p className="text-xs text-muted-foreground">{amenity.description}</p>
                    {amenity.network && (
                      <div className="mt-2 text-xs space-y-1">
                        <p className="text-ink/70">
                          <span className="font-semibold">{t('network')}:</span> {amenity.network}
                        </p>
                        <p className="text-ink/70">
                          <span className="font-semibold">{t('password')}:</span> {amenity.password}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Check-in & Check-out */}
        <div className="section-card mb-6">
          <div className="flex gap-3 mb-3">
            <div className="w-6 h-6 text-olive flex-shrink-0">✅</div>
            <h3 className="serif text-lg font-medium text-terracotta-deep">{t('checkInCheckOut')}</h3>
          </div>
          <div className="space-y-3 text-sm ml-9">
            <div>
              <p className="font-semibold text-ink">{t('checkInFrom')}</p>
            </div>
            <div>
              <p className="font-semibold text-ink">{t('checkOutUntil')}</p>
            </div>
            <div className="pt-2 border-t border-gray-200">
              <p className="text-muted-foreground">• {t('receptionLocated')}</p>
              <p className="text-muted-foreground mt-1">• {t('pleaseInform')}</p>
              <p className="text-muted-foreground mt-1">• {t('validID')}</p>
            </div>
          </div>
        </div>

        {/* House Rules & Policies */}
        <div className="section-card mb-6">
          <div className="flex gap-3 mb-3">
            <div className="w-6 h-6 text-olive flex-shrink-0">📋</div>
            <h3 className="serif text-lg font-medium text-terracotta-deep">{t('houseRules')}</h3>
          </div>
          <div className="space-y-2 text-sm ml-9">
            <p className="text-muted-foreground">{t('quietHours')}</p>
            <p className="text-muted-foreground">{t('noSmoking')}</p>
            <p className="text-muted-foreground">{t('petsWelcome')}</p>
            <p className="text-muted-foreground">{t('outsideFood')}</p>
          </div>
        </div>

        {/* Services & Amenities */}
        <div className="section-card mb-6">
          <div className="flex gap-3 mb-3">
            <div className="w-6 h-6 text-olive flex-shrink-0">🛎️</div>
            <h3 className="serif text-lg font-medium text-terracotta-deep">{t('servicesAmenities')}</h3>
          </div>
          <div className="space-y-4 ml-9">
            {/* Accommodation */}
            <div>
              <p className="font-semibold text-ink text-sm mb-1">{t('accommodation')}</p>
              <ul className="text-xs text-muted-foreground space-y-1">
                <li>• {t('fifteenRooms')}</li>
                <li>• {t('roomsRange')}</li>
              </ul>
            </div>

            {/* Restaurant */}
            <div>
              <p className="font-semibold text-ink text-sm mb-1">{t('restaurant')}</p>
              <ul className="text-xs text-muted-foreground space-y-1">
                <li>• {t('ourRestaurant')}</li>
                <li>• {t('breakfastServed')}</li>
                <li>• {t('lunchDinner')}</li>
                <li>• {t('guestsDine')}</li>
              </ul>
            </div>

            {/* Spa */}
            <div>
              <p className="font-semibold text-ink text-sm mb-1">{t('spa')}</p>
              <ul className="text-xs text-muted-foreground space-y-1">
                <li>• {t('locatedSection')}</li>
                <li>• {t('advanceBooking')}</li>
                <li>• {t('browseFull')}</li>
                <li>• {t('openDaily')}</li>
              </ul>
            </div>

            {/* Terraces & Rooftop */}
            <div>
              <p className="font-semibold text-ink text-sm mb-1">{t('terraces')}</p>
              <ul className="text-xs text-muted-foreground space-y-1">
                <li>• {t('twoLevels')}</li>
                <li>• {t('perfectFor')}</li>
                <li>• {t('rooftopMay')}</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Local Tips & Area Info */}
        <div className="section-card mb-6">
          <div className="flex gap-3 mb-3">
            <div className="w-6 h-6 text-olive flex-shrink-0">📍</div>
            <h3 className="serif text-lg font-medium text-terracotta-deep">{t('localTips')}</h3>
          </div>
          <div className="space-y-2 text-sm ml-9">
            <p className="text-muted-foreground">{t('riadNilaJust')}</p>
            <p className="text-muted-foreground">{t('medinaStreets')}</p>
            <p className="text-muted-foreground">{t('weRecommend')}</p>
            <p className="text-muted-foreground">{t('bargaining')}</p>
            <p className="text-muted-foreground pt-2 border-t border-gray-200 mt-2">{t('forTours')}</p>
          </div>
        </div>

        {/* Housekeeping Note */}
        <div className="section-card mb-6">
          <div className="flex gap-3 mb-3">
            <div className="w-6 h-6 text-olive flex-shrink-0">🛏️</div>
            <h3 className="serif text-lg font-medium text-terracotta-deep">{t('housekeeping')}</h3>
          </div>
          <div className="space-y-3 text-sm ml-9">
            <p className="text-muted-foreground">{t('forGuests')}</p>
            <div className="bg-sand/50 rounded-lg p-3 space-y-2">
              <p className="text-muted-foreground">
                <span className="font-semibold">🧺 {t('towelsFloor')}</span>
              </p>
              <p className="text-muted-foreground">
                <span className="font-semibold">🪝 {t('towelsHung')}</span>
              </p>
            </div>
            <p className="text-muted-foreground italic">{t('smallGesture')}</p>
          </div>
        </div>

        {/* Contact Information */}
        <div className="section-card">
          <h3 className="serif text-lg font-medium text-terracotta-deep mb-3">{t('contactUs')}</h3>
          <a
            href="tel:+212662134431"
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-sand transition-colors mb-3"
          >
            <Phone className="w-5 h-5 text-olive" />
            <div>
              <p className="text-xs text-muted-foreground">Phone</p>
              <p className="font-semibold text-ink">+212 662 134 431</p>
            </div>
          </a>
          <p className="text-sm text-ink/80 mb-4">{t('contactConcierge')}</p>
          <WhatsAppButton href="https://wa.me/212662134431" label={t('contactUs')} />
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
