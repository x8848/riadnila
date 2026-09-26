import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { useLanguage } from '@/utils/i18n'
import { rooftopMenuSections } from '@/utils'

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
                <div className="section-symbol">{section.symbol}</div>
                <p className="eyebrow mb-2">{section.kicker}</p>
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

        {/* Reservation Note */}
        <div className="section-card mt-6">
          <p className="serif text-sm text-terracotta mb-4">
            {t('rooftopNote') || 'Open daily from sunset. Best reserved in advance for groups.'}
          </p>
          <a
            href="https://wa.me/212662134431?text=Hello%20Riad%20Nila%2C%20I%20would%20like%20to%20reserve%20the%20rooftop."
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

      <Footer />
    </div>
  )
}
