import BookingCtaCard from '@/components/BookingCtaCard'
import Content from '@/components/Content'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import InfoCard from '@/components/InfoCard'
import Page from '@/components/Page'
import PageHeader from '@/components/PageHeader'
import { getAboutFacilities, getAboutReasons, getAboutValues, getWhatsAppUrl } from '@/utils'
import { useLanguage } from '@/utils/i18n'

export default function About() {
  const { t } = useLanguage()
  const values = getAboutValues(t)
  const facilities = getAboutFacilities(t)
  const reasons = getAboutReasons(t)

  return (
    <Page>
      <Header title={t('about')} heroImage="/images/about.webp" />

      <Content>
        <PageHeader eyebrow={t('riadNila')} title={t('ourStory')} />

        {/* Main Story */}
        <InfoCard title={t('haveBlueCity')} className="mb-6">
          <p className="text-sm leading-relaxed text-ink/80 mb-4">{t('nestledEnchanting')}</p>
          <p className="text-sm leading-relaxed text-ink/80">{t('everyCorner')}</p>
        </InfoCard>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {values.map((val, idx) => (
            <div key={idx} className="section-card">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg leading-none">{val.icon}</span>
                <h3 className="serif text-lg font-medium text-terracotta-deep">{val.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{val.description}</p>
            </div>
          ))}
        </div>

        {/* Rooms & Facilities */}
        <InfoCard title={t('roomsFacilities')} className="mb-6">
          <div className="space-y-3 text-sm">
            {facilities.map((facility, idx) => (
              <div key={idx}>
                <p className="font-semibold text-ink mb-1">{facility.title}</p>
                <p className="text-muted-foreground">{facility.description}</p>
              </div>
            ))}
          </div>
        </InfoCard>

        {/* Why Choose Us */}
        <InfoCard title={t('whyChoose')} className="mb-6">
          <ul className="space-y-2 text-sm">
            {reasons.map((reason, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-gold font-bold mt-0.5">✓</span>
                <span>{reason}</span>
              </li>
            ))}
          </ul>
        </InfoCard>

        {/* Contact CTA */}
        <BookingCtaCard
          note={t('haveQuestions')}
          href={getWhatsAppUrl('Hello Riad Nila, I have a question about your riad.')}
          label={t('contactUs')}
        />
      </Content>

      <Footer />
    </Page>
  )
}
