import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { restaurantMenus } from '@/utils'
import { useLanguage } from '@/utils/i18n'
import { ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Restaurant() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-sand">
      <Header title={t('restaurant')} heroImage="/images/food.jpeg" />

      <section className="px-5 py-7">
        <div className="mb-6">
          <p className="eyebrow mb-2">{t('nila')}</p>
          <h2 className="serif text-3xl font-medium text-terracotta-deep mb-3">{t('nilaRestaurant')}</h2>
          <div className="mini-divider" />
          <p className="text-sm leading-relaxed text-ink/80">{t('flavoursOfMorocco')}</p>
        </div>

        <div className="space-y-4 lg:grid lg:grid-cols-2 lg:gap-5 lg:space-y-0">
          {restaurantMenus.map(menu => {
            const title = t(menu.titleKey)
            const kicker = t(menu.kickerKey)
            const description = t(menu.descriptionKey)

            const cardContent = (
              <>
                <img src={menu.image} alt={title} />
                <div className="relative z-10 h-full flex flex-col justify-between p-5 text-white">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-white/70 mb-1">{kicker}</p>
                    <h3 className="serif text-2xl font-medium text-white">{title}</h3>
                  </div>

                  {!menu.disabled && (
                    <div className="flex items-center justify-between mt-3">
                      <p className="text-xs text-white/80">{description}</p>
                      <ChevronRight className="w-5 h-5 text-white/70 group-hover:text-white transition-transform duration-200 group-hover:translate-x-1 flex-shrink-0" />
                    </div>
                  )}

                  {menu.disabled && <p className="text-xs font-semibold text-white/70 mt-3">{description}</p>}
                </div>
              </>
            )

            if (menu.disabled) {
              return (
                <div key={menu.id} className="nav-card group block opacity-60 cursor-not-allowed">
                  {cardContent}
                </div>
              )
            }

            return (
              <Link key={menu.id} to={menu.to} className="nav-card group block">
                {cardContent}
              </Link>
            )
          })}
        </div>
      </section>

      <Footer />
    </div>
  )
}
