import Footer from '@/components/Footer'
import Header from '@/components/Header'
import WhatsAppButton from '@/components/WhatsAppButton'
import { rooftopMenuSections } from '@/utils'
import { useLanguage } from '@/utils/i18n'

export default function Rooftop() {
  const { t } = useLanguage()
  const menuSections = rooftopMenuSections

  return (
    <div className="min-h-screen bg-sand">
      <Header title={t('rooftopTerrace') || 'Rooftop Terrace Menu'} heroImage="/images/rooftop.jpeg" />

      <section className="px-5 py-7">
        <div className="mb-6">
          <p className="eyebrow mb-2">{t('panoramicViews') || 'Panoramic Views'}</p>
          <h2 className="serif text-3xl font-medium text-terracotta-deep mb-3">
            {t('rooftopExperience') || '360° Rooftop Experience'}
          </h2>
          <div className="mini-divider" />
          <p className="text-sm leading-relaxed text-ink/80">
            {t('rooftopDesc') ||
              'Enjoy breathtaking panoramic views of the Medina while savoring our carefully curated selection of desserts, hot drinks, and refreshing beverages. Perfect for sunrise, sunset, and stargazing.'}
          </p>
        </div>

        {/* Menu Sections */}
        <div className="space-y-6">
          {menuSections.map((section, idx) => (
            <div key={idx} className="section-card">
              <div className="mb-4">
                <p className="eyebrow mb-2">
                  {section.symbol} {section.kicker}
                </p>
                <h3 className="serif text-2xl font-medium text-terracotta-deep">{section.title}</h3>
              </div>

              <div className="menu-section">
                {section.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="menu-item">
                    <div className="dish-line">
                      <h4 className="dish-name">{item.name}</h4>
                      <p className="dish-price">{item.price}</p>
                    </div>
                    {item.description && <p className="dish-desc">{item.description}</p>}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Service Hours */}
        <div className="section-card mt-6 mb-4">
          <h3 className="serif text-lg font-medium text-terracotta-deep mb-3">
            {t('serviceHours') || 'Service Hours'}
          </h3>
          <div className="space-y-2 text-sm">
            <p>
              <span className="font-semibold">
                {t('rooftopNote') || 'Open daily from sunset. Best reserved in advance for groups.'}
              </span>
            </p>
          </div>
        </div>

        {/* Book */}
        <div className="section-card">
          <p className="text-sm text-ink/80 mb-4">
            {t('reservationsRecommended') || 'Reservations are recommended to ensure the best experience.'}
          </p>
          <WhatsAppButton
            href="https://wa.me/212662134431?text=Hello%20Riad%20Nila%2C%20I%20would%20like%20to%20reserve%20the%20rooftop."
            label={t('bookNow')}
          />
        </div>
      </section>

      <Footer />
    </div>
  )
}
