import { Url } from './enums'
import type { LanguageOption, MenuSection, NavCardItem, RestaurantMenuItem, Treatment } from './types'

export const languages: LanguageOption[] = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'it', name: 'Italiano', flag: '🇮🇹' },
  { code: 'pt', name: 'Português', flag: '🇵🇹' },
  { code: 'nl', name: 'Nederlands', flag: '🇳🇱' },
  { code: 'ja', name: '日本語', flag: '🇯🇵' },
  { code: 'zh', name: '中文', flag: '🇨🇳' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦' },
]

export const treatments: Treatment[] = [
  {
    name: 'Hammam Tradition',
    duration: '60 min',
    price: '500 MAD',
    description: 'Authentic Moroccan steam bath experience - 1 person',
  },
  {
    name: 'Massage',
    duration: '60 min',
    price: '600 MAD',
    description: 'Relaxing therapeutic massage - 1 person',
  },
  {
    name: 'Nila Ritual',
    duration: '',
    price: '1000 MAD',
    description: 'Premium experience combining hammam and massage - 1 person. Duration varies based on preferences.',
  },
]

export const rooftopMenuSections: MenuSection[] = [
  {
    title: 'Desserts & Sweet Endings',
    kicker: 'Sweet Indulgence',
    symbol: '✦',
    items: [
      {
        name: 'Gourmet Caramel Flan',
        price: '70 MAD',
        description: 'Silky, smooth vanilla bean custard topped with a rich, deep amber caramel sauce.',
      },
      {
        name: 'Nila Mhalabia',
        price: '45 MAD',
        description:
          'Upscale creamy Middle Eastern milk pudding infused with orange blossom water, garnished with dried fruits, roasted exotic nuts, and cinnamon.',
      },
      {
        name: 'Luxury Cheesecake',
        price: '50 MAD',
        description:
          'Rich and creamy artisan cheesecake finished with a choice of wild berry coulis or salted caramel.',
      },
      {
        name: 'Moroccan Sweet Assortment',
        price: '50 MAD',
        description:
          'A curated premium selection of traditional Moroccan almond pastries and homemade sweet delicacies.',
      },
      {
        name: 'Seasonal Fruit Platter',
        price: '60 MAD',
        description: 'An elegant, beautiful presentation of freshly sliced local and seasonal premium fruits.',
      },
    ],
  },
  {
    title: 'Hot Drinks',
    kicker: 'Warm Ritual',
    symbol: '✦',
    items: [
      {
        name: 'Moroccan Mint Tea (Premium Ritual)',
        price: '30 MAD',
        description: 'Fresh organic mint and fine green tea served in a traditional luxury teapot ritual.',
      },
      {
        name: 'Berber Mountain Tea',
        price: '40 MAD',
        description: 'Wild Rif mountain herbs blended with fresh mint.',
      },
      { name: 'Espresso', price: '30 MAD' },
      { name: 'Double Espresso', price: '45 MAD' },
      {
        name: 'Americano',
        price: '35 MAD',
        description: 'Rich espresso lengthened with hot purified water.',
      },
      {
        name: 'Café Latte',
        price: '30 MAD',
        description: 'Premium espresso with silky, velvety steamed milk.',
      },
      {
        name: 'Hot Chocolate',
        price: '50 MAD',
        description: 'Premium chocolate with steamed milk.',
      },
    ],
  },
  {
    title: 'Cold Drinks, Juices & Signature Smoothies',
    kicker: 'Cool & Bright',
    symbol: '✦',
    items: [
      {
        name: 'Freshly Squeezed Orange Juice',
        price: '40 MAD',
      },
      {
        name: 'Signature Lemon Mint Juice',
        price: '35 MAD',
        description: 'An ultra-refreshing local recipe of freshly blended lemons, cold water, and organic mint.',
      },
      {
        name: 'Avocado & Almond Smoothie',
        price: '55 MAD',
        description: 'Creamy avocado blended with organic milk, pure honey, and crushed toasted almonds.',
      },
      {
        name: 'Banana & Honey Smoothie',
        price: '45 MAD',
      },
      {
        name: 'Strawberry & Yogurt Smoothie',
        price: '50 MAD',
      },
      {
        name: 'Tropical Bliss Smoothie',
        price: '65 MAD',
        description: 'Mango, pineapple, and banana.',
      },
      {
        name: 'Mango & Banana Smoothie',
        price: '50 MAD',
      },
      {
        name: 'Mixed Fruit Smoothie',
        price: '60 MAD',
        description: 'A blend of premium seasonal fruits.',
      },
      {
        name: 'Sodas',
        price: '20 MAD',
        description: '(Coca-Cola, Coca-Cola Zero, Sprite, Hawaii, Fanta, Schweppes)',
      },
      { name: 'Energy Drink', price: '40 MAD' },
      { name: 'Mineral Water (Small / Large)', price: '15 MAD / 30 MAD' },
      { name: 'Sparkling Water (Small / Large)', price: '20 MAD / 35 MAD' },
    ],
  },
]

export const navCards: NavCardItem[] = [
  {
    id: 'guest-info',
    to: '/guest-information',
    titleKey: 'guestInformation',
    kickerKey: 'yourComfortAwaits',
    image: '/images/info.jpeg',
  },
  {
    id: 'restaurant',
    to: '/restaurant',
    titleKey: 'restaurant',
    kickerKey: 'flavoursOfMorocco',
    image: '/images/food.jpeg',
  },
  {
    id: 'spa',
    to: '/spa',
    titleKey: 'spa',
    kickerKey: 'wellnessServices',
    image: '/images/spa.jpeg',
  },
  {
    id: 'services',
    to: '/services',
    titleKey: 'otherServices',
    kickerKey: 'conciergeServices',
    image: '/images/rooftop.jpeg',
  },
  {
    id: 'about',
    to: '/about',
    titleKey: 'about',
    kickerKey: 'ourStory',
    image: '/images/about.jpeg',
  },
]

export const restaurantMenus: RestaurantMenuItem[] = [
  {
    id: 'breakfast',
    to: Url.Breakfast,
    titleKey: 'breakfast',
    kickerKey: 'breakfastService',
    descriptionKey: 'breakfastMenu',
    image: '/images/breakfast.jpg',
    disabled: false,
  },
  {
    id: 'lunch-dinner',
    to: Url.Menu,
    titleKey: 'lunchDinnerMenu',
    kickerKey: 'flavoursOfMorocco',
    descriptionKey: 'lunchDinnerMenu',
    image: '/images/lunch.jpg',
    disabled: false,
  },
  {
    id: 'rooftop',
    to: Url.Rooftop,
    titleKey: 'rooftopTerrace',
    kickerKey: 'dessertsSweet',
    descriptionKey: 'coolBright',
    image: '/images/rooftop.jpeg',
    disabled: false,
  },
  {
    id: 'cooking-class',
    to: '#',
    titleKey: 'cookingClass',
    kickerKey: 'notAvailable',
    descriptionKey: 'notAvailable',
    image: '/images/food.jpeg',
    disabled: true,
  },
]

export const getMenuSections = (t: (key: string) => string = k => k): MenuSection[] => [
  {
    title: t('soupsTraditionalStarters'),
    kicker: t('beginSoftly'),
    symbol: '✦',
    items: [
      { name: t('harira'), price: '50 MAD', description: t('hariraDesc') },
      { name: t('rifBissara'), price: '45 MAD', description: t('rifBissaraDesc') },
      { name: t('seasonalVegetableSoup'), price: '45 MAD', description: t('seasonalVegetableSoupDesc') },
    ],
  },
  {
    title: t('moroccanSaladsColdStarters'),
    kicker: t('freshVibrant'),
    symbol: '✦',
    items: [
      { name: t('traditionalMoroccanSalad'), price: '30 MAD', description: t('traditionalMoroccanSaladDesc') },
      { name: t('taktouka'), price: '30 MAD', description: t('taktoukaDesc') },
      { name: t('zaalouk'), price: '30 MAD', description: t('zaaloukDesc') },
      { name: t('moroccanAvocadoSalad'), price: '60 MAD', description: t('moroccanAvocadoSaladDesc') },
      { name: t('moroccanSaladsTrio'), price: '30 MAD', description: t('moroccanSaladsTrioDesc') },
    ],
  },
  {
    title: t('lightMealsRiadFavorites'),
    kicker: t('quickBites'),
    symbol: '✦',
    items: [
      { name: t('cheeseOmelette'), price: '50 MAD', description: t('cheeseOmeletteDesc') },
      { name: t('msemenHoneyButter'), price: '35 MAD', description: t('msemenHoneyButterDesc') },
      { name: t('msemenCheese'), price: '40 MAD', description: t('msemenCheeseDesc') },
    ],
  },
  {
    title: t('appetizersSharingPlates'),
    kicker: t('toShare'),
    symbol: '✦',
    items: [
      { name: t('moroccanBriouats'), price: '60 MAD', description: t('moroccanBriouatsDesc') },
      { name: t('olivesMixedNuts'), price: '40 MAD', description: t('olivesMixedNutsDesc') },
      { name: t('moroccanMezzePlatter'), price: '90 MAD', description: t('moroccanMezzePlatterDesc') },
    ],
  },
  {
    title: t('signatureTagines'),
    kicker: t('houseSpecialties'),
    symbol: '✦',
    items: [
      { name: t('chickenTagineLemonOlives'), price: '120 MAD', description: t('chickenTagineLemonOlivesDesc') },
      { name: t('chickenGardenVegetableTagine'), price: '120 MAD', description: t('chickenGardenVegetableTagineDesc') },
      { name: t('chickenTaginePlums'), price: '140 MAD', description: t('chickenTaginePlumsDesc') },
      { name: t('classicBeefTagine'), price: '150 MAD', description: t('classicBeefTagineDesc') },
      { name: t('beefTaginePlums'), price: '170 MAD', description: t('beefTaginePlumsDesc') },
      { name: t('keftaTagine'), price: '140 MAD', description: t('keftaTagineDesc') },
      { name: t('rifAnchovyTagine'), price: '145 MAD', description: t('rifAnchovyTagineDesc') },
      { name: t('shrimpTagine'), price: '180 MAD', description: t('shrimpTagineDesc') },
      {
        name: t('chefRecommendedPilPilShrimpTagine'),
        price: '180 MAD',
        description: t('pilPilShrimpTagineDescription'),
      },
    ],
  },
  {
    title: t('pastillaSpecialties'),
    kicker: t('traditionalPastry'),
    symbol: '✦',
    items: [
      { name: t('chickenPastilla'), price: '150 MAD', description: t('chickenPastillaDesc') },
      { name: t('seafoodPastilla'), price: '180 MAD', description: t('seafoodPastillaDesc') },
    ],
  },
  {
    title: t('fromTheGrill'),
    kicker: t('fromGrillKicker'),
    symbol: '✦',
    items: [
      { name: t('chickenBrochettes'), price: '80 MAD', description: t('chickenBrochettesDesc') },
      { name: t('lambKeftaSkewers'), price: '95 MAD', description: t('lambKeftaSkewersDesc') },
      { name: t('beefSkewers'), price: '100 MAD', description: t('beefSkewersDesc') },
      { name: t('mixedGrillPlatter'), price: '199 MAD', description: t('mixedGrillPlatterDesc') },
    ],
  },
  {
    title: t('pasta'),
    kicker: t('pastaKicker'),
    symbol: '✦',
    items: [
      { name: t('spaghettiMincedBeef'), price: '110 MAD', description: t('spaghettiMincedBeefDescription') },
      { name: t('spaghettiShrimpCream'), price: '140 MAD', description: t('spaghettiShrimpCreamDescription') },
      { name: t('spaghettiProvencalHerbs'), price: '85 MAD', description: t('spaghettiProvencalHerbsDescription') },
    ],
  },
  {
    title: t('vegetarianSelection'),
    kicker: t('plantBased'),
    symbol: '✦',
    items: [
      { name: t('vegetableTagine'), price: '110 MAD', description: t('vegetableTagineDesc') },
      { name: t('couscousSevenVegetables'), price: '150 MAD', description: t('couscousSevenVegetablesDesc') },
      { name: t('falafelPlate'), price: '95 MAD', description: t('falafelPlateDesc') },
      { name: t('stuffedGardenVegetables'), price: '105 MAD', description: t('stuffedGardenVegetablesDesc') },
      { name: t('vegetablePasta'), price: '95 MAD', description: t('vegetablePastaDesc') },
    ],
  },
  {
    title: t('fridaySpecial'),
    kicker: t('weeklyTradition'),
    symbol: '✦',
    items: [{ name: t('fridayRoyalCouscous'), price: '165 MAD', description: t('fridayRoyalCouscousDesc') }],
  },
  {
    title: t('sweetEndings'),
    kicker: t('dessertsSweetEndings'),
    symbol: '✦',
    items: [
      { name: t('menuCaramelFlan'), price: '40 MAD', description: t('menuCaramelFlanDesc') },
      { name: t('menuMhalabia'), price: '45 MAD', description: t('menuMhalabiaDesc') },
      { name: t('menuCheesecake'), price: '50 MAD', description: t('menuCheesecakeDesc') },
      { name: t('moroccanPastrySelection'), price: '60 MAD', description: t('moroccanPastrySelectionDesc') },
      { name: t('seasonalFruitPlate'), price: '55 MAD', description: t('seasonalFruitPlateDesc') },
    ],
  },
  {
    title: t('hotDrinks'),
    kicker: t('warmBeverages'),
    symbol: '✦',
    items: [
      { name: t('moroccanMintTea'), price: '25 MAD', description: t('moroccanMintTeaDesc') },
      { name: t('berberHerbalTea'), price: '35 MAD', description: t('berberHerbalTeaDesc') },
      { name: t('espresso'), price: '20 MAD' },
      { name: t('doubleEspresso'), price: '35 MAD' },
      { name: t('americano'), price: '25 MAD' },
      { name: t('cafeLatte'), price: '30 MAD' },
      { name: t('hotChocolate'), price: '40 MAD' },
    ],
  },
  {
    title: t('freshJuicesColdDrinks'),
    kicker: t('refreshingKicker'),
    symbol: '✦',
    items: [
      { name: t('menuFreshOrangeJuice'), price: '30 MAD' },
      { name: t('lemonMintJuice'), price: '30 MAD' },
      { name: t('avocadoAlmondSmoothie'), price: '50 MAD' },
      { name: t('bananaHoneySmoothie'), price: '40 MAD' },
      { name: t('strawberrySmoothie'), price: '45 MAD' },
      { name: t('tropicalSmoothie'), price: '55 MAD' },
      { name: t('mangoBananaSmoothie'), price: '45 MAD' },
      { name: t('mixedFruitSmoothie'), price: '55 MAD' },
      { name: t('softDrinks'), price: '20 MAD' },
      { name: t('mineralWaterSmallLarge'), price: '10 MAD / 20 MAD' },
      { name: t('sparklingWaterSmallLarge'), price: '25 MAD / 35 MAD' },
    ],
  },
]
