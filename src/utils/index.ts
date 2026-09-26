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
    symbol: '🍰',
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
    symbol: '☕',
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
    symbol: '🧊',
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
    to: '/restaurant/breakfast',
    titleKey: 'breakfast',
    kickerKey: 'breakfastService',
    descriptionKey: 'breakfastMenu',
    image: '/images/breakfast.jpg',
    disabled: false,
  },
  {
    id: 'lunch-dinner',
    to: '/restaurant/lunch-dinner',
    titleKey: 'lunchDinnerMenu',
    kickerKey: 'flavoursOfMorocco',
    descriptionKey: 'lunchDinnerMenu',
    image: '/images/lunch.jpg',
    disabled: false,
  },
  {
    id: 'rooftop',
    to: '/restaurant/rooftop',
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
