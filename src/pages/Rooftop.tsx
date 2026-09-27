import Content from '@/components/Content'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import MenuSectionCard from '@/components/MenuSectionCard'
import Page from '@/components/Page'
import WhatsAppButton from '@/components/WhatsAppButton'
import { getRooftopMenuSections } from '@/utils'
import { useLanguage } from '@/utils/i18n'

export default function Rooftop() {
  const { t } = useLanguage()
  const menuSections = getRooftopMenuSections(t)

  return (
    <Page>
      <Header title={t('rooftopTerrace')} heroImage="/images/rooftop.jpeg" />

      <Content>
        <div className="mb-6">
          <p className="eyebrow mb-2">{t('panoramicViews')}</p>
          <h2 className="serif text-3xl font-medium text-terracotta-deep mb-3">{t('rooftopExperience')}</h2>
          <div className="mini-divider" />
          <p className="text-sm leading-relaxed text-ink/80">{t('rooftopDesc')}</p>
        </div>

        {/* Menu Sections */}
        <div className="space-y-6">
          {menuSections.map((section, idx) => (
            <MenuSectionCard key={idx} section={section} showKicker />
          ))}
        </div>

        {/* Service Hours */}
        <div className="section-card mt-6 mb-4">
          <h3 className="serif text-lg font-medium text-terracotta-deep mb-3">{t('serviceHours')}</h3>
          <div className="space-y-2 text-sm">
            <p>
              <span className="font-semibold">{t('rooftopNote')}</span>
            </p>
          </div>
        </div>

        {/* Book */}
        <div className="section-card">
          <p className="text-sm text-ink/80 mb-4">{t('reservationsRecommended')}</p>
          <WhatsAppButton
            href="https://wa.me/212662134431?text=Hello%20Riad%20Nila%2C%20I%20would%20like%20to%20reserve%20the%20rooftop."
            label={t('bookNow')}
          />
        </div>
      </Content>

      <Footer />
    </Page>
  )
}
