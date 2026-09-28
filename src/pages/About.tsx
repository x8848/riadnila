import Content from '@/components/Content'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Page from '@/components/Page'
import WhatsAppButton from '@/components/WhatsAppButton'
import { useLanguage } from '@/utils/i18n'

export default function About() {
  const { t } = useLanguage()

  return (
    <Page>
      <Header title={t('about')} heroImage="/images/about.webp" />

      <Content>
        <div className="mb-6">
          <p className="eyebrow mb-2">{t('riadNila')}</p>
          <h2 className="serif text-3xl font-medium text-terracotta-deep mb-3">{t('ourStory')}</h2>
          <div className="mini-divider" />
        </div>

        {/* Main Story */}
        <div className="section-card mb-6">
          <h3 className="serif text-xl font-medium text-terracotta-deep mb-3">{t('haveBlueCity')}</h3>
          <p className="text-sm leading-relaxed text-ink/80 mb-4">{t('nestledEnchanting')}</p>
          <p className="text-sm leading-relaxed text-ink/80">{t('everyCorner')}</p>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="section-card">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-lg leading-none">❤️</span>
              <h3 className="serif text-lg font-medium text-terracotta-deep">{t('authenticHospitality')}</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">{t('authenticHospitalityDesc')}</p>
          </div>

          <div className="section-card">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-lg leading-none">🏛️</span>
              <h3 className="serif text-lg font-medium text-terracotta-deep">{t('respectfulRestoration')}</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">{t('respectfulRestorationDesc')}</p>
          </div>

          <div className="section-card">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-lg leading-none">🤝</span>
              <h3 className="serif text-lg font-medium text-terracotta-deep">{t('communityConnection')}</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">{t('communityConnectionDesc')}</p>
          </div>
        </div>

        {/* Rooms & Facilities */}
        <div className="section-card mb-6">
          <h3 className="serif text-lg font-medium text-terracotta-deep mb-3">{t('roomsFacilities')}</h3>
          <div className="space-y-3 text-sm">
            <div>
              <p className="font-semibold text-ink mb-1">{t('accommodations')}</p>
              <p className="text-muted-foreground">{t('accommodationsDesc')}</p>
            </div>
            <div>
              <p className="font-semibold text-ink mb-1">{t('commonSpaces')}</p>
              <p className="text-muted-foreground">{t('commonSpacesDesc')}</p>
            </div>
            <div>
              <p className="font-semibold text-ink mb-1">{t('dining')}</p>
              <p className="text-muted-foreground">{t('diningDesc')}</p>
            </div>
            <div>
              <p className="font-semibold text-ink mb-1">{t('wellness')}</p>
              <p className="text-muted-foreground">{t('wellnessDesc')}</p>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="section-card mb-6">
          <h3 className="serif text-lg font-medium text-terracotta-deep mb-3">{t('whyChoose')}</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-gold font-bold mt-0.5">✓</span>
              <span>{t('whyChoose1')}</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold font-bold mt-0.5">✓</span>
              <span>{t('whyChoose2')}</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold font-bold mt-0.5">✓</span>
              <span>{t('whyChoose3')}</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold font-bold mt-0.5">✓</span>
              <span>{t('whyChoose4')}</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold font-bold mt-0.5">✓</span>
              <span>{t('whyChoose5')}</span>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="section-card">
          <h3 className="serif text-lg font-medium text-terracotta-deep mb-3">{t('getInTouch')}</h3>
          <p className="text-sm text-muted-foreground mb-4">{t('haveQuestions')}</p>
          <WhatsAppButton
            href="https://wa.me/212662134431?text=Hello%20Riad%20Nila%2C%20I%20have%20a%20question%20about%20your%20riad."
            label={t('contactUs')}
          />
        </div>
      </Content>

      {/* Footer */}
      <Footer />
    </Page>
  )
}
