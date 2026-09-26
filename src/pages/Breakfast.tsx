import Footer from '@/components/Footer'
import Header from '@/components/Header'
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
          <div className="section-symbol">☀️</div>
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
            <p className="text-xs text-teal font-semibold mt-2">✓ {t('freshOrangeJuice')}</p>
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
            <p className="text-xs text-ink/70">
              <span className="font-semibold text-terracotta-deep">⚠️ {t('important')}:</span> {t('additionalFood')}
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
            <p className="text-xs text-muted-foreground mt-2">{t('pleaseNote')}</p>
          </div>
        </div>

        {/* WhatsApp Request */}
        <div className="section-card mb-6">
          <h3 className="serif text-lg font-medium text-terracotta-deep mb-3">{t('whatsappBreakfast')}</h3>
          <p className="text-xs text-muted-foreground mb-4">{t('ifYouDo')}</p>
          <a
            href="https://wa.me/212662134431?text=Hello%20Riad%20Nila%2C%20I%20would%20like%20to%20request%20breakfast"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button w-full bg-[#25D366] text-white font-semibold hover:bg-[#20ba5a] transition-colors flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.255.949c-1.238.503-2.37 1.236-3.356 2.241C3.060 10.378 2.275 11.950 2.275 13.607c0 1.052.215 2.074.636 3.028L2.581 22l3.507-1.114c.882.537 1.882.817 2.922.817h.001c5.514 0 10-4.486 10-10s-4.486-10-10-10z" />
            </svg>
            {t('bookNow')}
          </a>
        </div>

        {/* Early Departure */}
        <div className="section-card">
          <h3 className="serif text-lg font-medium text-terracotta-deep mb-3">{t('earlyDeparture')}</h3>
          <p className="text-sm text-muted-foreground">{t('importantGuests')}</p>
        </div>

        {/* Breakfast Hours */}
        <div className="section-card mt-6">
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-ink">⏰ {t('breakfastServedBetween')}</span>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
