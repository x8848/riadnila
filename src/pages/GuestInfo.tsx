import Content from '@/components/Content'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Page from '@/components/Page'
import WhatsAppButton from '@/components/WhatsAppButton'
import { getAmenities } from '@/utils'
import { useLanguage } from '@/utils/i18n'
import { Phone } from 'lucide-react'

export default function GuestInfo() {
  const { t } = useLanguage()
  const amenities = getAmenities(t)

  return (
    <Page>
      <Header title={t('guestInformation')} heroImage="/images/info.jpeg" />

      <Content>
        <div className="mb-6">
          <p className="eyebrow mb-2">{t('nila')}</p>
          <h2 className="serif text-3xl font-medium text-terracotta-deep mb-3">{t('yourComfortAwaits')}</h2>
          <div className="mini-divider" />
          <p className="text-sm leading-relaxed text-ink/80">{t('experienceAuthentic')}</p>
        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
          {amenities.map((amenity, idx) => (
            <div key={idx} className="section-card">
              <div className="flex gap-3 items-center">
                <div className="w-10 h-10 rounded-full bg-olive/10 flex items-center justify-center flex-shrink-0 text-xl leading-none">
                  {amenity.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-ink text-sm">{amenity.title}</h3>
                  <p className="text-sm text-muted-foreground">{amenity.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Check-in & Check-out */}
        <div className="section-card mb-6">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-lg leading-none">✅</span>
            <h3 className="serif text-lg font-medium text-terracotta-deep">{t('checkInCheckOut')}</h3>
          </div>
          <div className="space-y-3 text-sm">
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
          <div className="flex items-center gap-2 mb-3">
            <span className="text-lg leading-none">📋</span>
            <h3 className="serif text-lg font-medium text-terracotta-deep">{t('houseRules')}</h3>
          </div>
          <div className="space-y-2 text-sm">
            <p className="text-muted-foreground">{t('quietHours')}</p>
            <p className="text-muted-foreground">{t('noSmoking')}</p>
            <p className="text-muted-foreground">{t('petsWelcome')}</p>
            <p className="text-muted-foreground">{t('outsideFood')}</p>
          </div>
        </div>

        {/* Services & Amenities */}
        <div className="section-card mb-6">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-lg leading-none">🛎️</span>
            <h3 className="serif text-lg font-medium text-terracotta-deep">{t('servicesAmenities')}</h3>
          </div>
          <div className="space-y-4">
            {/* Accommodation */}
            <div>
              <p className="font-semibold text-ink text-sm mb-1">{t('accommodation')}</p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• {t('fifteenRooms')}</li>
                <li>• {t('roomsRange')}</li>
              </ul>
            </div>

            {/* Restaurant */}
            <div>
              <p className="font-semibold text-ink text-sm mb-1">{t('restaurant')}</p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• {t('ourRestaurant')}</li>
                <li>• {t('breakfastServed')}</li>
                <li>• {t('lunchDinner')}</li>
                <li>• {t('guestsDine')}</li>
              </ul>
            </div>

            {/* Spa */}
            <div>
              <p className="font-semibold text-ink text-sm mb-1">{t('spa')}</p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• {t('locatedSection')}</li>
                <li>• {t('advanceBooking')}</li>
                <li>• {t('browseFull')}</li>
                <li>• {t('openDaily')}</li>
              </ul>
            </div>

            {/* Terraces & Rooftop */}
            <div>
              <p className="font-semibold text-ink text-sm mb-1">{t('terraces')}</p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• {t('twoLevels')}</li>
                <li>• {t('perfectFor')}</li>
                <li>• {t('rooftopMay')}</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Local Tips & Area Info */}
        <div className="section-card mb-6">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-lg leading-none">📍</span>
            <h3 className="serif text-lg font-medium text-terracotta-deep">{t('localTips')}</h3>
          </div>
          <div className="space-y-2 text-sm">
            <p className="text-muted-foreground">{t('riadNilaJust')}</p>
            <p className="text-muted-foreground">{t('medinaStreets')}</p>
            <p className="text-muted-foreground">{t('weRecommend')}</p>
            <p className="text-muted-foreground">{t('bargaining')}</p>
            <p className="text-muted-foreground pt-2 border-t border-gray-200 mt-2">{t('forTours')}</p>
          </div>
        </div>

        {/* Housekeeping Note */}
        <div className="section-card mb-6">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-lg leading-none">🛏️</span>
            <h3 className="serif text-lg font-medium text-terracotta-deep">{t('housekeeping')}</h3>
          </div>
          <div className="space-y-3 text-sm">
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
          <div className="flex items-center gap-2 mb-3">
            <span className="text-lg leading-none">📞</span>
            <h3 className="serif text-lg font-medium text-terracotta-deep">{t('contact')}</h3>
          </div>
          <a
            href="tel:+212662134431"
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-sand transition-colors mb-3"
          >
            <Phone className="w-5 h-5 text-olive" />
            <div>
              <p className="font-semibold text-ink">+212 662 134 431</p>
            </div>
          </a>
          <p className="text-sm text-ink/80 mb-4">{t('contactConcierge')}</p>
          <WhatsAppButton href="https://wa.me/212662134431" label={t('contactUs')} />
        </div>
      </Content>

      {/* Footer */}
      <Footer />
    </Page>
  )
}
