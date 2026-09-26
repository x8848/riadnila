import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import Header from '@/components/Header'
import { useLanguage } from '@/utils/i18n'
import { Heart, Home, Users } from 'lucide-react'

export default function About() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-sand">
      <Header title={t('aboutRiad') || 'About the Riad'} heroImage="/images/about.jpeg" />

      <section className="px-5 py-7">
        <div className="mb-6">
          <p className="eyebrow mb-2">{t('riadNilaAbout') || 'Riad Nila'}</p>
          <h2 className="serif text-3xl font-medium text-terracotta-deep mb-3">{t('riadNila') || 'Riad Nila'}</h2>
          <div className="mini-divider" />
        </div>

        {/* Main Story */}
        <div className="section-card mb-6">
          <h3 className="serif text-xl font-medium text-terracotta-deep mb-3">
            {t('haveBlueCity') || 'A Haven in the Blue City'}
          </h3>
          <p className="text-sm leading-relaxed text-ink/80 mb-4">
            {t('nestledEnchanting') ||
              'Nestled in the enchanting medina of Chefchaouen, Riad Nila is a beautifully restored traditional Moroccan riad that embodies the essence of authentic hospitality. Our name, "Nila," reflects the serene blue hues that define this magical city.'}
          </p>
          <p className="text-sm leading-relaxed text-ink/80">
            {t('everyCorner') ||
              'Every corner of Riad Nila tells a story of careful restoration and thoughtful design, blending centuries-old architectural elements with modern comforts to create a sanctuary where guests can truly feel at home.'}
          </p>
        </div>

        {/* Values */}
        <div className="space-y-4 mb-8">
          <div className="section-card">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-olive/10 flex items-center justify-center flex-shrink-0 text-olive">
                <Heart className="w-6 h-6" />
              </div>
              <div>
                <h3 className="serif text-lg font-medium text-terracotta-deep mb-1">Authentic Hospitality</h3>
                <p className="text-sm text-ink/70">
                  We believe in genuine connections and personalized service that makes every guest feel valued and
                  cherished.
                </p>
              </div>
            </div>
          </div>

          <div className="section-card">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-olive/10 flex items-center justify-center flex-shrink-0 text-olive">
                <Home className="w-6 h-6" />
              </div>
              <div>
                <h3 className="serif text-lg font-medium text-terracotta-deep mb-1">Respectful Restoration</h3>
                <p className="text-sm text-ink/70">
                  We honor Moroccan traditions and architectural heritage while providing contemporary comfort and
                  amenities.
                </p>
              </div>
            </div>
          </div>

          <div className="section-card">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-olive/10 flex items-center justify-center flex-shrink-0 text-olive">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <h3 className="serif text-lg font-medium text-terracotta-deep mb-1">Community Connection</h3>
                <p className="text-sm text-ink/70">
                  We support local artisans, source from local suppliers, and share the rich culture of Chefchaouen with
                  our guests.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Rooms & Facilities */}
        <div className="section-card mb-6">
          <h3 className="serif text-lg font-medium text-terracotta-deep mb-3">Rooms & Facilities</h3>
          <div className="space-y-3 text-sm">
            <div>
              <p className="font-semibold text-ink mb-1">Accommodations</p>
              <p className="text-muted-foreground">
                Thoughtfully designed rooms featuring traditional Moroccan décor, comfortable beds, ensuite bathrooms,
                and modern amenities.
              </p>
            </div>
            <div>
              <p className="font-semibold text-ink mb-1">Common Spaces</p>
              <p className="text-muted-foreground">
                Enjoy our central courtyard with traditional fountain, rooftop terrace with panoramic views, and
                comfortable lounges.
              </p>
            </div>
            <div>
              <p className="font-semibold text-ink mb-1">Dining</p>
              <p className="text-muted-foreground">
                On-site restaurant serving authentic Moroccan cuisine, plus rooftop bar for evening refreshments.
              </p>
            </div>
            <div>
              <p className="font-semibold text-ink mb-1">Wellness</p>
              <p className="text-muted-foreground">
                Traditional hammam and spa services offering rejuvenating treatments and authentic Moroccan rituals.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="section-card mb-6">
          <h3 className="serif text-lg font-medium text-terracotta-deep mb-3">
            {t('whyChoose') || 'Why Choose Riad Nila?'}
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-gold font-bold mt-0.5">✓</span>
              <span>Prime location in Chefchaouen's historic medina</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold font-bold mt-0.5">✓</span>
              <span>Authentic Moroccan experience with modern comfort</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold font-bold mt-0.5">✓</span>
              <span>Exceptional hospitality and personalized service</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold font-bold mt-0.5">✓</span>
              <span>Complete amenities: dining, spa, and concierge</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold font-bold mt-0.5">✓</span>
              <span>Support for local community and artisans</span>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="section-card">
          <h3 className="serif text-lg font-medium text-terracotta-deep mb-3">{t('getInTouch') || 'Get in Touch'}</h3>
          <p className="text-sm text-muted-foreground mb-4">
            {t('haveQuestions') || "Have questions or ready to book your stay? We'd love to hear from you."}
          </p>
          <WhatsAppButton
            href="https://wa.me/212662134431?text=Hello%20Riad%20Nila%2C%20I%20have%20a%20question%20about%20your%20riad."
            label={t('contactUs')}
          />
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
