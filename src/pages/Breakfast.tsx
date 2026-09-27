import Footer from '@/components/Footer'
import Header from '@/components/Header'
import WhatsAppButton from '@/components/WhatsAppButton'
import { useLanguage } from '@/utils/i18n'

export default function Breakfast() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-sand">
      <Header title={t('breakfast')} heroImage="/images/breakfast.jpg" />

      <section className="px-5 py-7">
        <div className="mb-6">
          <p className="eyebrow mb-2">{t('breakfastService')}</p>
          <h2 className="serif text-3xl font-medium text-terracotta-deep mb-3">{t('breakfastService')}</h2>
          <div className="mini-divider" />
          <p className="text-sm leading-relaxed text-ink/80">{t('readyBreakfast')}</p>
        </div>

        {/* Breakfast Menu */}
        <div className="section-card mb-6">
          <h3 className="serif text-2xl font-medium text-terracotta-deep mb-4">{t('breakfastMenu')}</h3>

          {/* Drink Choice */}
          <div className="mb-5">
            <p className="font-semibold text-ink mb-2">🥤 {t('drinkChoice')}</p>
            <ul className="text-sm text-muted-foreground space-y-1 ml-4">
              <li>• {t('moroccanMintTea')}</li>
              <li>• {t('coffee')}</li>
              <li>• {t('milk')}</li>
              <li>• {t('blackTea')}</li>
              <li>• {t('chocolateMilk')}</li>
            </ul>
            <p className="text-sm text-olive font-semibold mt-2">✓ {t('freshOrangeJuice')}</p>
          </div>

          {/* Egg Choice */}
          <div className="mb-5">
            <p className="font-semibold text-ink mb-2">🥚 {t('eggChoice')}</p>
            <ul className="text-sm text-muted-foreground space-y-1 ml-4">
              <li>• {t('scrambledEggs')}</li>
              <li>• {t('friedEggs')}</li>
              <li>• {t('omelette')}</li>
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
              <li>• {t('msemen')}</li>
              <li>• {t('moroccanBread')}</li>
              <li>• {t('olives')}</li>
              <li>• {t('oliveOil')}</li>
              <li>• {t('whiteCheese')}</li>
              <li>• {t('jam')}</li>
              <li>• {t('honey')}</li>
              <li>• {t('amlou')}</li>
            </ul>
          </div>

          {/* Important Note */}
          <div className="bg-amber-50 border-l-4 border-gold p-3 rounded mb-4">
            <p className="text-sm text-ink/80">
              <span className="font-semibold text-terracotta-deep">{t('important')}</span> {t('additionalFood')}
            </p>
          </div>

          {/* Location */}
          <div>
            <p className="font-semibold text-ink mb-2">📍 {t('breakfastLocation')}:</p>
            <p className="text-sm text-muted-foreground mb-2">{t('breakfastMay')}:</p>
            <ul className="text-sm text-muted-foreground space-y-1 ml-4">
              <li>• {t('onTerrace')}</li>
              <li>• {t('inRestaurant')}</li>
            </ul>
            <p className="text-sm text-muted-foreground mt-2">{t('pleaseNote')}</p>
          </div>
        </div>

        {/* Early Departure */}
        <div className="section-card mb-4">
          <h3 className="serif text-lg font-medium text-terracotta-deep mb-3">{t('earlyDeparture')}</h3>
          <p className="text-sm text-ink/80">{t('importantGuests')}</p>
        </div>

        {/* Service Hours */}
        <div className="section-card mb-4">
          <h3 className="serif text-lg font-medium text-terracotta-deep mb-3">{t('serviceHours')}</h3>
          <div className="space-y-2 text-sm">
            <p>
              <span className="font-semibold">{t('breakfastServedBetween')}</span>
            </p>
          </div>
        </div>

        {/* Book */}
        <div className="section-card">
          <p className="text-sm text-ink/80 mb-4">{t('ifYouDo')}</p>
          <WhatsAppButton
            href="https://wa.me/212662134431?text=Hello%20Riad%20Nila%2C%20I%20would%20like%20to%20request%20breakfast"
            label={t('bookNow')}
          />
        </div>
      </section>

      <Footer />
    </div>
  )
}
