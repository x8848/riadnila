import Content from '@/components/Content'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Page from '@/components/Page'
import WhatsAppButton from '@/components/WhatsAppButton'
import { useLanguage } from '@/utils/i18n'
import { Heart, Home, Users } from 'lucide-react'

export default function About() {
  const { t } = useLanguage()

  return (
    <Page>
      <Header title={t('aboutRiad')} heroImage="/images/about.jpeg" />

      <Content>
        <div className="mb-6">
          <p className="eyebrow mb-2">{t('riadNilaAbout')}</p>
          <h2 className="serif text-3xl font-medium text-terracotta-deep mb-3">{t('riadNila')}</h2>
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
            <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row gap-4 items-start">
              <div className="w-12 h-12 rounded-full bg-olive/10 flex items-center justify-center flex-shrink-0 text-olive">
                <Heart className="w-6 h-6" />
              </div>
              <div>
                <h3 className="serif text-lg font-medium text-terracotta-deep mb-1">{t('authenticHospitality')}</h3>
                <p className="text-sm text-ink/70 leading-relaxed">{t('authenticHospitalityDesc')}</p>
              </div>
            </div>
          </div>

          <div className="section-card">
            <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row gap-4 items-start">
              <div className="w-12 h-12 rounded-full bg-olive/10 flex items-center justify-center flex-shrink-0 text-olive">
                <Home className="w-6 h-6" />
              </div>
              <div>
                <h3 className="serif text-lg font-medium text-terracotta-deep mb-1">{t('respectfulRestoration')}</h3>
                <p className="text-sm text-ink/70 leading-relaxed">{t('respectfulRestorationDesc')}</p>
              </div>
            </div>
          </div>

          <div className="section-card">
            <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row gap-4 items-start">
              <div className="w-12 h-12 rounded-full bg-olive/10 flex items-center justify-center flex-shrink-0 text-olive">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <h3 className="serif text-lg font-medium text-terracotta-deep mb-1">{t('communityConnection')}</h3>
                <p className="text-sm text-ink/70 leading-relaxed">{t('communityConnectionDesc')}</p>
              </div>
            </div>
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
