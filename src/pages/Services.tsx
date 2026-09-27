import Content from '@/components/Content'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import WhatsAppButton from '@/components/WhatsAppButton'
import { getServices } from '@/utils'
import { useLanguage } from '@/utils/i18n'

export default function Services() {
  const { t } = useLanguage()
  const services = getServices(t)

  return (
    <div className="min-h-screen bg-sand">
      <Header title={t('otherServices')} heroImage="/images/rooftop.jpeg" />

      <Content>
        <div className="mb-6">
          <p className="eyebrow mb-2">{t('nilaServices')}</p>
          <h2 className="serif text-3xl font-medium text-terracotta-deep mb-3">{t('personalizedExperiences')}</h2>
          <div className="mini-divider" />
          <p className="text-sm leading-relaxed text-ink/80">{t('servicesDesc')}</p>
        </div>

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
        <div className="section-card mb-6">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-lg leading-none">🛎️</span>
            <h3 className="serif text-lg font-medium text-terracotta-deep">{t('conciergeServices')}</h3>
          </div>
          <p className="text-sm text-ink/80 mb-3">{t('conciergeAvailable')}</p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="text-gold mt-0.5">•</span>
              <span>{t('conciergeItem1')}</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold mt-0.5">•</span>
              <span>{t('conciergeItem2')}</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold mt-0.5">•</span>
              <span>{t('conciergeItem3')}</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold mt-0.5">•</span>
              <span>{t('conciergeItem4')}</span>
            </li>
          </ul>
        </div>

        {/* Contact CTA */}
        <div className="section-card">
          <p className="text-sm text-muted-foreground mb-4">{t('contactConcierge')}</p>
          <WhatsAppButton
            href="https://wa.me/212662134431?text=Hello%20Riad%20Nila%2C%20I%20would%20like%20to%20inquire%20about%20services."
            label={t('contactUs')}
          />
        </div>
      </Content>

      {/* Footer */}
      <Footer />
    </div>
  )
}
