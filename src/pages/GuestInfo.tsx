import BookingCtaCard from '@/components/BookingCtaCard'
import Content from '@/components/Content'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import InfoCard from '@/components/InfoCard'
import Page from '@/components/Page'
import PageHeader from '@/components/PageHeader'
import {
  getAmenities,
  getGuestInfoCheckInOut,
  getGuestInfoHouseRules,
  getGuestInfoLocalTips,
  getGuestInfoServiceSections,
  PHONE_NUMBER,
  PHONE_TEL_HREF,
  WHATSAPP_BASE_URL,
} from '@/utils'
import { useLanguage } from '@/utils/i18n'

export default function GuestInfo() {
  const { t } = useLanguage()
  const amenities = getAmenities(t)
  const checkInOutDetails = getGuestInfoCheckInOut(t)
  const houseRules = getGuestInfoHouseRules(t)
  const localTips = getGuestInfoLocalTips(t)
  const serviceSections = getGuestInfoServiceSections(t)

  return (
    <Page>
      <Header title={t('guestInformation')} heroImage="/images/info.webp" />

      <Content>
        <PageHeader eyebrow={t('riadNila')} title={t('yourComfortAwaits')} description={t('experienceAuthentic')} />

        {/* Amenities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
          {amenities.map((amenity, idx) => (
            <div key={idx} className="section-card">
              <div className="flex gap-3 items-center">
                <span className="text-2xl leading-none flex-shrink-0">{amenity.icon}</span>
                <div>
                  <h3 className="font-semibold text-ink text-sm">{amenity.title}</h3>
                  <p className="text-sm text-muted-foreground">{amenity.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Check-in & Check-out */}
        <InfoCard icon="✅" title={t('checkInCheckOut')} className="mb-6">
          <div className="space-y-3 text-sm">
            <div>
              <p className="font-semibold text-ink">{t('checkInFrom')}</p>
            </div>
            <div>
              <p className="font-semibold text-ink">{t('checkOutUntil')}</p>
            </div>
            <div className="pt-2 border-t border-gray-200 space-y-1">
              {checkInOutDetails.map((detail, idx) => (
                <p key={idx} className="text-muted-foreground">
                  • {detail}
                </p>
              ))}
            </div>
          </div>
        </InfoCard>

        {/* House Rules & Policies */}
        <InfoCard icon="📋" title={t('houseRules')} className="mb-6">
          <div className="space-y-2 text-sm text-muted-foreground">
            {houseRules.map((rule, idx) => (
              <p key={idx}>{rule}</p>
            ))}
          </div>
        </InfoCard>

        {/* Services & Amenities */}
        <InfoCard icon="🛎️" title={t('servicesAmenities')} className="mb-6">
          <div className="space-y-4">
            {serviceSections.map((section, idx) => (
              <div key={idx}>
                <p className="font-semibold text-ink text-sm mb-1">{section.title}</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  {section.items.map((item, itemIdx) => (
                    <li key={itemIdx}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </InfoCard>

        {/* Local Tips & Area Info */}
        <InfoCard icon="📍" title={t('localTips')} className="mb-6">
          <div className="space-y-2 text-sm text-muted-foreground">
            {localTips.map((tip, idx) => (
              <p key={idx}>{tip}</p>
            ))}
            <p className="pt-2 border-t border-gray-200 mt-2">{t('forTours')}</p>
          </div>
        </InfoCard>

        {/* Housekeeping Note */}
        <InfoCard icon="🛏️" title={t('housekeeping')} className="mb-6">
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
        </InfoCard>

        {/* Contact Information */}
        <div className="section-card">
          <h3 className="serif text-lg font-medium text-terracotta-deep mb-3">{t('contactUs')}</h3>
          <a
            href={PHONE_TEL_HREF}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-sand transition-colors mb-3"
          >
            <span className="text-lg leading-none">📞</span>
            <div>
              <p className="font-semibold text-ink">{PHONE_NUMBER}</p>
            </div>
          </a>
          <BookingCtaCard
            note={t('contactConcierge')}
            href={WHATSAPP_BASE_URL}
            label={t('contactUs')}
            className="p-0 border-0 shadow-none bg-transparent"
          />
        </div>
      </Content>

      <Footer />
    </Page>
  )
}
