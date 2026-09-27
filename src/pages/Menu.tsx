import Content from '@/components/Content'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import WhatsAppButton from '@/components/WhatsAppButton'
import { getMenuSections } from '@/utils'
import { useLanguage } from '@/utils/i18n'

export default function Menu() {
  const { t } = useLanguage()
  const menuSections = getMenuSections(t)

  return (
    <div className="min-h-screen bg-sand">
      <Header title={t('lunchDinnerMenu')} heroImage="/images/lunch.jpg" />

      <Content>
        <div className="mb-6">
          <p className="eyebrow mb-2">{t('nilaRestaurant')}</p>
          <h2 className="serif text-3xl font-medium text-terracotta-deep mb-3">{t('lunchDinnerMenu')}</h2>
          <div className="mini-divider" />
          <p className="text-sm leading-relaxed text-ink/80">{t('lunchDinnerDesc')}</p>
        </div>

        {/* Menu Sections */}
        <div className="space-y-8 mb-8">
          {menuSections.map((section, sectionIdx) => (
            <div key={sectionIdx}>
              <div className="mb-4">
                <p className="eyebrow text-sm mb-1">
                  {section.symbol} {section.kicker.toUpperCase()}
                </p>
                <h3 className="serif text-2xl font-medium text-terracotta-deep">{section.title}</h3>
              </div>

              <div className="space-y-4">
                {section.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="section-card">
                    <div className="flex justify-between items-start gap-3 mb-2">
                      <h4 className="serif text-lg font-medium text-terracotta-deep flex-1">{item.name}</h4>
                      <p className="text-terracotta font-semibold text-sm whitespace-nowrap">{item.price}</p>
                    </div>
                    {item.description && <p className="text-sm text-ink/70 leading-relaxed">{item.description}</p>}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Service Hours */}
        <div className="section-card mb-4">
          <h3 className="serif text-lg font-medium text-terracotta-deep mb-3">{t('serviceHours')}</h3>
          <div className="space-y-2 text-sm">
            <p>
              <span className="font-semibold">{t('lunch')}:</span> 1:00 PM - 4:00 PM
            </p>
            <p>
              <span className="font-semibold">{t('dinner')}:</span> 6:00 PM - 10:00 PM
            </p>
          </div>
        </div>

        {/* Book */}
        <div className="section-card">
          <p className="text-sm text-ink/80 mb-4">{t('reservationsRecommended')}</p>
          <WhatsAppButton
            href="https://wa.me/212662134431?text=Hello%20Riad%20Nila!%20I%20would%20like%20to%20make%20a%20reservation%20for%20lunch%20or%20dinner."
            label={t('bookNow')}
          />
        </div>
      </Content>

      <Footer />
    </div>
  )
}
