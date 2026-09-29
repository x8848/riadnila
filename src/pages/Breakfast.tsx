import BookingCtaCard from '@/components/BookingCtaCard'
import Content from '@/components/Content'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import InfoCard from '@/components/InfoCard'
import Page from '@/components/Page'
import PageHeader from '@/components/PageHeader'
import ServiceHoursCard from '@/components/ServiceHoursCard'
import { getBreakfastMenuData, getWhatsAppUrl } from '@/utils'
import { useLanguage } from '@/utils/i18n'

export default function Breakfast() {
  const { t } = useLanguage()
  const { drinks, eggs, traditional } = getBreakfastMenuData(t)

  return (
    <Page>
      <Header title={t('breakfast')} heroImage="/images/breakfast.webp" />

      <Content>
        <PageHeader eyebrow={t('riadNila')} title={t('breakfastService')} description={t('readyBreakfast')} />

        {/* Breakfast Menu */}
        <div className="section-card mb-6">
          <h3 className="serif text-2xl font-medium text-terracotta-deep mb-4">{t('breakfastMenu')}</h3>

          {/* Drink Choice */}
          <div className="mb-5">
            <p className="font-semibold text-ink mb-2">🥤 {t('drinkChoice')}</p>
            <ul className="text-sm text-muted-foreground space-y-1 ml-4">
              {drinks.map((drink, idx) => (
                <li key={idx}>• {drink}</li>
              ))}
            </ul>
            <p className="text-sm text-olive font-semibold mt-2">✓ {t('freshOrangeJuice')}</p>
          </div>

          {/* Egg Choice */}
          <div className="mb-5">
            <p className="font-semibold text-ink mb-2">🥚 {t('eggChoice')}</p>
            <ul className="text-sm text-muted-foreground space-y-1 ml-4">
              {eggs.map((egg, idx) => (
                <li key={idx}>• {egg}</li>
              ))}
            </ul>
          </div>

          {/* Shared Fruit */}
          <div className="mb-5">
            <p className="font-semibold text-ink mb-2">🍎 {t('sharedFruit')}</p>
            <p className="text-sm text-muted-foreground ml-4">{t('mixedFruitPlate')}</p>
          </div>

          {/* Traditional Items */}
          <div className="mb-5">
            <p className="font-semibold text-ink mb-2">🥖 {t('traditionalMoroccan')}</p>
            <ul className="text-sm text-muted-foreground space-y-1 ml-4">
              {traditional.map((item, idx) => (
                <li key={idx}>• {item}</li>
              ))}
            </ul>
          </div>

          {/* Important Note */}
          <div className="bg-amber-50 border-l-4 border-gold p-3 rounded">
            <p className="text-sm text-ink/80">
              <span className="font-semibold text-terracotta-deep">{t('important')}</span> {t('additionalFood')}
            </p>
          </div>
        </div>

        {/* Breakfast Location */}
        <InfoCard title={t('breakfastLocation')} className="mb-6">
          <p className="text-sm mb-2">{t('breakfastMay')}</p>
          <ul className="text-sm space-y-1 ml-4 text-muted-foreground">
            <li>• {t('onTerrace')}</li>
            <li>• {t('inRestaurant')}</li>
          </ul>
          <p className="text-sm mt-2">{t('pleaseNote')}</p>
        </InfoCard>

        {/* Service Hours */}
        <ServiceHoursCard title={t('serviceHours')} className="mb-6">
          <p>
            <span className="font-semibold">{t('breakfastServedBetween')}</span>
          </p>
        </ServiceHoursCard>

        {/* Early Departure */}
        <InfoCard title={t('earlyDeparture')} className="mb-6">
          <p className="text-sm text-ink/80">{t('importantGuests')}</p>
        </InfoCard>

        {/* Booking CTA */}
        <BookingCtaCard
          note={t('ifYouDo')}
          href={getWhatsAppUrl('Hello Riad Nila, I would like to request breakfast')}
          label={t('bookNow')}
        />
      </Content>

      <Footer />
    </Page>
  )
}
