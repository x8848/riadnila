import BookingCtaCard from '@/components/BookingCtaCard'
import Content from '@/components/Content'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import InfoCard from '@/components/InfoCard'
import Page from '@/components/Page'
import PageHeader from '@/components/PageHeader'
import { getConciergeItems, getServices, getWhatsAppUrl } from '@/utils'
import { useLanguage } from '@/utils/i18n'

export default function Services() {
  const { t } = useLanguage()
  const services = getServices(t)
  const conciergeItems = getConciergeItems(t)

  return (
    <Page>
      <Header title={t('otherServices')} heroImage="/images/rooftop.webp" />

      <Content>
        <PageHeader eyebrow={t('riadNila')} title={t('personalizedExperiences')} description={t('servicesDesc')} />

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {services.map((service, idx) => (
            <div key={idx} className="section-card flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-lg leading-none">{service.icon}</span>
                  <h3 className="serif text-lg font-medium text-terracotta-deep">{service.title}</h3>
                </div>
                <p className="text-sm text-ink/80 mb-3 leading-relaxed">{service.description}</p>
              </div>
              <ul className="text-sm text-muted-foreground space-y-1">
                {service.details.map((detail, detailIdx) => (
                  <li key={detailIdx} className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-gold" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Concierge Information */}
        <InfoCard icon="🛎️" title={t('conciergeServices')} className="mb-6">
          <p className="text-sm text-ink/80 mb-3">{t('conciergeAvailable')}</p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {conciergeItems.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-gold mt-0.5">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </InfoCard>

        {/* Contact CTA */}
        <BookingCtaCard
          note={t('contactConcierge')}
          href={getWhatsAppUrl('Hello Riad Nila, I would like to inquire about services.')}
          label={t('contactUs')}
        />
      </Content>

      <Footer />
    </Page>
  )
}
