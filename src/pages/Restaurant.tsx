import Footer from '@/components/Footer'
import Header from '@/components/Header'
import NavCard from '@/components/NavCard'
import { restaurantMenus } from '@/utils'
import { useLanguage } from '@/utils/i18n'

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
          {restaurantMenus.map(menu => (
            <NavCard
              key={menu.id}
              to={menu.to}
              image={menu.image}
              title={t(menu.titleKey)}
              kicker={t(menu.kickerKey)}
              disabled={menu.disabled}
            />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}
