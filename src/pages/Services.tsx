import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import Header from '@/components/Header'
import { useLanguage } from '@/utils/i18n'
import { BookOpen, Camera, Compass, MapPin, ShoppingBag, Users } from 'lucide-react'

import type { Service } from '@/utils/types'

export default function Services() {
  const { t } = useLanguage()
  const services: Service[] = [
    {
      icon: <Compass className="w-6 h-6" />,
      title: 'Guided City Tours',
      description: 'Explore Chefchaouen with our knowledgeable local guides',
      details: ['Medina walking tours', 'Hidden gems discovery', 'Photography tours', 'Sunset viewpoint visits'],
    },
    {
      icon: <Camera className="w-6 h-6" />,
      title: 'Photography Services',
      description: 'Professional photography for your Moroccan memories',
      details: ['Portrait sessions', 'Couple photoshoots', 'Group photography', 'Sunset sessions'],
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Day Excursions',
      description: 'Curated day trips to nearby attractions',
      details: ['Mountain hikes', 'Waterfall visits', 'Berber villages', 'Artisan workshops'],
    },
    {
      icon: <ShoppingBag className="w-6 h-6" />,
      title: 'Shopping Assistance',
      description: 'Personal shopping and market navigation',
      details: ['Souk guidance', 'Artisan introductions', 'Authentic purchases', 'Negotiation support'],
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Group Events',
      description: 'Host your special events at Riad Nila',
      details: ['Private dinners', 'Celebrations', 'Workshops', 'Retreats'],
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: 'Cultural Experiences',
      description: 'Immerse yourself in Moroccan culture',
      details: ['Cooking classes', 'Traditional crafts', 'Music sessions', 'Language lessons'],
    },
  ]

  return (
    <div className="min-h-screen bg-sand">
      <Header title={t('otherServices')} heroImage="/images/rooftop.jpeg" />

      <section className="px-5 py-7">
        <div className="mb-6">
          <p className="eyebrow mb-2">{t('nilaServices')}</p>
          <h2 className="serif text-3xl font-medium text-terracotta-deep mb-3">
            {t('personalizedExperiences')}
          </h2>
          <div className="mini-divider" />
          <p className="text-sm leading-relaxed text-ink/80">
            {t('servicesDesc')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-4 mb-8">
          {services.map((service, idx) => (
            <div key={idx} className="section-card">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-olive/10 flex items-center justify-center flex-shrink-0 text-olive">
                  {service.icon}
                </div>
                <div className="flex-1">
                  <h3 className="serif text-lg font-medium text-terracotta-deep mb-1">{service.title}</h3>
                  <p className="text-sm text-ink/70 mb-2">{service.description}</p>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    {service.details.map((detail, detailIdx) => (
                      <li key={detailIdx} className="flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-gold" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Concierge Information */}
        <div className="section-card mb-6">
          <h3 className="serif text-lg font-medium text-terracotta-deep mb-3">
            {t('conciergeServices')}
          </h3>
          <p className="text-sm text-ink/70 mb-4">
            {t('conciergeAvailable')}
          </p>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-gold mt-1">•</span>
              <span>Restaurant reservations and dining recommendations</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold mt-1">•</span>
              <span>Transportation and vehicle rentals</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold mt-1">•</span>
              <span>Activity bookings and tour arrangements</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold mt-1">•</span>
              <span>Special requests and custom arrangements</span>
            </li>
          </ul>
        </div>

        {/* Contact CTA */}
        <div className="section-card">
          <p className="text-sm text-muted-foreground mb-4">
            {t('contactConcierge')}
          </p>
          <WhatsAppButton
            href="https://wa.me/212662134431?text=Hello%20Riad%20Nila%2C%20I%20would%20like%20to%20inquire%20about%20services."
            label={t('contactUs')}
          />
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
