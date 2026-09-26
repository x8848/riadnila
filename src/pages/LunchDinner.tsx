import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { useLanguage } from '@/utils/i18n'
import type { MenuItem, MenuSection } from '@/utils/types'

export default function LunchDinner() {
  const { t } = useLanguage()
  const menuSections: MenuSection[] = [
    {
      title: 'Soups & Traditional Starters',
      kicker: 'Begin softly',
      symbol: '✦',
      items: [
        {
          name: 'Harira',
          price: '50 MAD',
          description:
            'Traditional Moroccan soup prepared with tomatoes, lentils, chickpeas, fresh herbs, and tender meat. Served with dates, lemon, and fresh bread.',
        },
        {
          name: 'Rif Bissara',
          price: '45 MAD',
          description: 'Slow-simmered fava bean cream with garlic, olive oil, and cumin. Served with warm bread.',
        },
        {
          name: 'Seasonal Vegetable Soup',
          price: '45 MAD',
          description: 'A light homemade broth with seasonal vegetables, tomatoes, and fresh herbs.',
        },
      ],
    },
    {
      title: 'Moroccan Salads & Cold Starters',
      kicker: 'Fresh & vibrant',
      symbol: '✦',
      items: [
        {
          name: 'Traditional Moroccan Salad',
          price: '30 MAD',
          description: 'Fresh tomatoes, cucumber, onion, parsley, and olive oil.',
        },
        {
          name: 'Taktouka',
          price: '30 MAD',
          description: 'Roasted peppers and tomatoes cooked with garlic and paprika.',
        },
        {
          name: 'Zaalouk',
          price: '30 MAD',
          description: 'Smoky eggplant salad with tomatoes, garlic, and Moroccan herbs.',
        },
        {
          name: 'Moroccan Avocado Salad',
          price: '60 MAD',
          description: 'Fresh avocado, tomatoes, cucumber, herbs, and a citrus olive oil dressing.',
        },
        {
          name: 'Moroccan Salads Trio',
          price: '30 MAD',
          description: 'A selection of Moroccan salad, zaalouk, and taktouka served with fresh bread.',
        },
      ],
    },
    {
      title: 'Light Meals & Riad Favorites',
      kicker: 'Quick bites',
      symbol: '✦',
      items: [
        {
          name: 'Cheese Omelette',
          price: '50 MAD',
          description:
            'Fluffy eggs prepared with melted Moroccan cheese and fresh herbs. Served with bread and oliveoil, olive.',
        },
        {
          name: 'Msemen with Honey & Butter',
          price: '35 MAD',
          description: 'Traditional flaky Moroccan flatbread served warm with local honey and butter.',
        },
        {
          name: 'Msemen with Cheese',
          price: '40 MAD',
          description: 'Freshly prepared msemen filled with melted cheese.',
        },
      ],
    },
    {
      title: 'Appetizers & Sharing Plates',
      kicker: 'To share',
      symbol: '✦',
      items: [
        {
          name: 'Moroccan Briouats',
          price: '60 MAD',
          description: 'Three assorted briouats: chicken, cheese, and fish, served hot and crispy.',
        },
        {
          name: 'Olives & Mixed Nuts',
          price: '40 MAD',
          description: 'Selection of local olives and roasted nuts.',
        },
        {
          name: 'Moroccan Mezze Platter',
          price: '90 MAD',
          description: 'Hummus, zaalouk, taktouka, olives, and fresh bread.',
        },
      ],
    },
    {
      title: 'Signature Tagines',
      kicker: 'House specialties',
      symbol: '✦',
      items: [
        {
          name: 'Chicken Tagine with Preserved Lemon & Olives',
          price: '120 MAD',
          description: 'A classic Moroccan favorite slow-cooked with saffron and onions.',
        },
        {
          name: 'Chicken & Garden Vegetable Tagine',
          price: '120 MAD',
          description: 'Tender chicken cooked with seasonal vegetables and herbs.',
        },
        {
          name: 'Chicken Tagine with Plums',
          price: '140 MAD',
          description: 'Sweet and savory chicken with caramelized onions and plums.',
        },
        {
          name: 'Classic Beef Tagine',
          price: '150 MAD',
          description: 'Slow-cooked beef with onions, herbs, and traditional spices.',
        },
        {
          name: 'Beef Tagine with Plums',
          price: '170 MAD',
          description: 'Tender beef cooked with plums, sesame seeds, and cinnamon.',
        },
        {
          name: 'Kefta Tagine',
          price: '140 MAD',
          description: 'Seasoned Moroccan meatballs simmered in a rich tomato sauce.',
        },
        {
          name: 'Rif Anchovy Tagine',
          price: '145 MAD',
          description: 'Local anchovies cooked with peppers, tomatoes, olives, and chermoula.',
        },
        {
          name: 'Shrimp Tagine',
          price: '180 MAD',
          description: 'Fresh shrimp cooked in a flavorful tomato and pepper sauce.',
        },
        {
          name: t('chefRecommendedPilPilShrimpTagine'),
          price: '180 MAD',
          description: t('pilPilShrimpTagineDescription'),
        },
      ],
    },
    {
      title: 'Pastilla Specialties',
      kicker: 'Traditional pastry',
      symbol: '✦',
      items: [
        {
          name: 'Chicken Pastilla',
          price: '150 MAD',
          description: 'Traditional Moroccan chicken pastilla. Medium size, ideal for two to three people.',
        },
        {
          name: 'Seafood Pastilla',
          price: '180 MAD',
          description:
            'Shrimp, fish, calamari, vermicelli, and aromatic herbs wrapped in crisp pastry. Medium size, ideal for two to three people.',
        },
      ],
    },
    {
      title: 'From the Grill',
      kicker: t('fromGrillKicker'),
      symbol: '✦',
      items: [
        {
          name: 'Chicken Brochettes',
          price: '80 MAD',
          description: 'Marinated chicken skewers served with vegetables and fries or rice.',
        },
        {
          name: 'Lamb Kefta Skewers',
          price: '95 MAD',
          description: 'Charcoal-grilled lamb kefta served with roasted vegetables.',
        },
        {
          name: 'Beef Skewers',
          price: '100 MAD',
          description: 'Tender marinated beef grilled to perfection.',
        },
        {
          name: 'Mixed Grill Platter',
          price: '199 MAD',
          description: 'Chicken, lamb kefta, and beef skewers served with grilled vegetables.',
        },
      ],
    },
    {
      title: t('pasta'),
      kicker: t('pastaKicker'),
      symbol: '✦',
      items: [
        {
          name: t('spaghettiMincedBeef'),
          price: '110 MAD',
          description: t('spaghettiMincedBeefDescription'),
        },
        {
          name: t('spaghettiShrimpCream'),
          price: '140 MAD',
          description: t('spaghettiShrimpCreamDescription'),
        },
        {
          name: t('spaghettiProvencalHerbs'),
          price: '85 MAD',
          description: t('spaghettiProvencalHerbsDescription'),
        },
      ],
    },
    {
      title: 'Vegetarian Selection',
      kicker: 'Plant-based',
      symbol: '✦',
      items: [
        {
          name: 'Vegetable Tagine',
          price: '110 MAD',
          description: 'Seasonal vegetables slow-cooked with chickpeas and herbs.',
        },
        {
          name: 'Couscous with Seven Vegetables',
          price: '150 MAD',
          description: 'Traditional Moroccan couscous with seven seasonal vegetables and chickpeas.',
        },
        {
          name: 'Falafel Plate',
          price: '95 MAD',
          description: 'Homemade falafel served with hummus and fresh salad.',
        },
        {
          name: 'Stuffed Garden Vegetables',
          price: '105 MAD',
          description: 'Seasonal vegetables stuffed with aromatic rice and herbs.',
        },
        {
          name: 'Vegetable Pasta',
          price: '95 MAD',
          description: 'Pasta tossed with Mediterranean vegetables and tomato sauce.',
        },
      ],
    },
    {
      title: 'Friday Special',
      kicker: 'Weekly tradition',
      symbol: '✦',
      items: [
        {
          name: 'Friday Royal Couscous',
          price: '165 MAD',
          description:
            'Choice of chicken, beef, or lamb served over fine couscous with seven vegetables, tfaya, and raisins. Available Fridays only.',
        },
      ],
    },
    {
      title: 'Sweet Endings',
      kicker: 'Desserts',
      symbol: '✦',
      items: [
        {
          name: 'Caramel Flan',
          price: '40 MAD',
          description: 'Homemade vanilla custard with caramel sauce.',
        },
        {
          name: 'Mhalabia',
          price: '45 MAD',
          description: 'Milk pudding infused with orange blossom water and topped with nuts.',
        },
        {
          name: 'Cheesecake',
          price: '50 MAD',
          description: 'Creamy cheesecake served with berry coulis or caramel sauce.',
        },
        {
          name: 'Moroccan Pastry Selection',
          price: '60 MAD',
          description: 'A selection of traditional almond pastries.',
        },
        {
          name: 'Seasonal Fruit Plate',
          price: '55 MAD',
          description: 'Fresh local and seasonal fruits.',
        },
      ],
    },
    {
      title: 'Hot Drinks',
      kicker: 'Warm beverages',
      symbol: '✦',
      items: [
        {
          name: 'Moroccan Mint Tea',
          price: '25 MAD',
          description: 'Traditional Moroccan tea service.',
        },
        {
          name: 'Berber Herbal Tea',
          price: '35 MAD',
          description: 'Wild mountain herbs blended with fresh mint.',
        },
        {
          name: 'Espresso',
          price: '20 MAD',
        },
        {
          name: 'Double Espresso',
          price: '35 MAD',
        },
        {
          name: 'Americano',
          price: '25 MAD',
        },
        {
          name: 'Café Latte',
          price: '30 MAD',
        },
        {
          name: 'Hot Chocolate',
          price: '40 MAD',
        },
      ],
    },
    {
      title: 'Fresh Juices & Cold Drinks',
      kicker: 'Refreshing',
      symbol: '✦',
      items: [
        {
          name: 'Fresh Orange Juice',
          price: '30 MAD',
        },
        {
          name: 'Lemon Mint Juice',
          price: '30 MAD',
        },
        {
          name: 'Avocado & Almond Smoothie',
          price: '50 MAD',
        },
        {
          name: 'Banana & Honey Smoothie',
          price: '40 MAD',
        },
        {
          name: 'Strawberry Smoothie',
          price: '45 MAD',
        },
        {
          name: 'Tropical Smoothie',
          price: '55 MAD',
        },
        {
          name: 'Mango & Banana Smoothie',
          price: '45 MAD',
        },
        {
          name: 'Mixed Fruit Smoothie',
          price: '55 MAD',
        },
        {
          name: 'Soft Drinks',
          price: '20 MAD',
        },
        {
          name: 'Mineral Water (Small / Large)',
          price: '10 MAD / 20 MAD',
        },
        {
          name: 'Sparkling Water (Small / Large)',
          price: '25 MAD / 35 MAD',
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-sand">
      <Header title={t('lunchDinnerMenu') || 'Lunch & Dinner'} heroImage="/images/lunch.jpg" />

      <section className="px-5 py-7">
        <div className="mb-6">
          <p className="eyebrow mb-2">{t('nilaRestaurant') || 'Riad Nila Restaurant'}</p>
          <h2 className="serif text-3xl font-medium text-terracotta-deep mb-3">
            {t('lunchDinnerMenu') || 'Lunch & Dinner Menu'}
          </h2>
          <div className="mini-divider" />
          <p className="text-sm leading-relaxed text-ink/80">
            {t('lunchDinnerDesc') ||
              'Discover our comprehensive selection of authentic Moroccan cuisine, from traditional soups and salads to signature tagines and grilled specialties.'}
          </p>
        </div>

        {/* Menu Sections */}
        <div className="space-y-8 mb-8">
          {menuSections.map((section, sectionIdx) => (
            <div key={sectionIdx}>
              <div className="mb-4">
                <p className="eyebrow text-sm mb-1">
                  {section.symbol} {section.kicker.toUpperCase()}
                </p>
                <h3 className="serif text-2xl font-medium text-terracotta-deep">{section.title}</h3>
              </div>

              <div className="space-y-4">
                {section.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="section-card">
                    <div className="flex justify-between items-start gap-3 mb-2">
                      <h4 className="serif text-lg font-medium text-terracotta-deep flex-1">{item.name}</h4>
                      <p className="text-terracotta font-semibold text-sm whitespace-nowrap">{item.price}</p>
                    </div>
                    {item.description && <p className="text-sm text-ink/70 leading-relaxed">{item.description}</p>}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Service Hours */}
        <div className="section-card mb-6 bg-teal/5 border border-teal/20">
          <h3 className="serif text-lg font-medium text-terracotta-deep mb-3">
            {t('serviceHours') || 'Service Hours'}
          </h3>
          <div className="space-y-2 text-sm">
            <p>
              <span className="font-semibold">{t('lunch') || 'Lunch'}:</span> 1:00 PM - 4:00 PM
            </p>
            <p>
              <span className="font-semibold">{t('dinner') || 'Dinner'}:</span> 6:00 PM - 10:00 PM
            </p>
            <p className="text-ink/70 mt-3">
              {t('reservationsRecommended') || 'Reservations are recommended to ensure the best experience.'}
            </p>
          </div>
        </div>

        {/* WhatsApp Booking */}
        <a
          href="https://wa.me/212662134431?text=Hello%20Riad%20Nila!%20I%20would%20like%20to%20make%20a%20reservation%20for%20lunch%20or%20dinner."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-lg font-semibold transition-colors"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.255.949c-1.238.503-2.37 1.236-3.356 2.241C3.060 10.378 2.275 11.950 2.275 13.607c0 1.052.215 2.074.636 3.028L2.581 22l3.507-1.114c.882.537 1.882.817 2.922.817h.001c5.514 0 10-4.486 10-10s-4.486-10-10-10z" />
          </svg>
          {t('bookNow') || 'Book Now via WhatsApp'}
        </a>
      </section>

      <Footer />
    </div>
  )
}
