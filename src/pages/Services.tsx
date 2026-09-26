import Footer from '@/components/Footer'
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
      <Header title={t('otherServices') || 'Other Services'} heroImage="/images/rooftop.jpeg" />

      <section className="px-5 py-7">
        <div className="mb-6">
          <p className="eyebrow mb-2">{t('nilaServices') || 'Riad Nila Services'}</p>
          <h2 className="serif text-3xl font-medium text-terracotta-deep mb-3">
            {t('personalizedExperiences') || 'Personalized Experiences'}
          </h2>
          <div className="mini-divider" />
          <p className="text-sm leading-relaxed text-ink/80">
            {t('servicesDesc') ||
              'Beyond accommodation and dining, we offer curated services to make your stay unforgettable. Our concierge team is dedicated to creating personalized experiences tailored to your interests.'}
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-4 mb-8">
          {services.map((service, idx) => (
            <div key={idx} className="section-card">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-teal/10 flex items-center justify-center flex-shrink-0 text-teal">
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
            {t('conciergeServices') || 'Concierge Services'}
          </h3>
          <p className="text-sm text-ink/70 mb-4">
            {t('conciergeAvailable') || 'Our dedicated concierge team is available to assist with:'}
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
            {t('contactConcierge') || 'Contact our concierge team to arrange any service or experience you desire.'}
          </p>
          <a
            href="https://wa.me/212662134431?text=Hello%20Riad%20Nila%2C%20I%20would%20like%20to%20inquire%20about%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button w-full bg-[#25D366] hover:bg-[#20ba5a] text-white flex items-center justify-center gap-2 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.255.949c-1.238.503-2.37 1.236-3.356 2.241C3.060 10.378 2.275 11.950 2.275 13.607c0 1.052.215 2.074.636 3.028L2.581 22l3.507-1.114c.882.537 1.882.817 2.922.817h.001c5.514 0 10-4.486 10-10s-4.486-10-10-10z" />
            </svg>
            {t('contactUs') || 'Contact Us via WhatsApp'}
          </a>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
