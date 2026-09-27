export { Url } from './enums'
import { Url } from './enums'
import type {
  Amenity,
  LanguageOption,
  MenuSection,
  NavCardItem,
  RestaurantMenuItem,
  Service,
  TranslateFn,
  Treatment,
} from './types'

export const OCTORATE_URL = `https://book.octorate.com/octobook/site/reservation/index.xhtml;octobooksessionid=26a078a9c0bd7bab60b71d1e532e?codice=470391`

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

export const getNavCards = (t: TranslateFn): NavCardItem[] => [
  {
    id: 'guest-info',
    to: Url.GuestInfo,
    title: t('guestInformation'),
    kicker: t('yourComfortAwaits'),
    image: '/images/info.jpeg',
  },
  {
    id: 'restaurant',
    to: Url.Restaurant,
    title: t('restaurant'),
    kicker: t('flavoursOfMorocco'),
    image: '/images/food.jpeg',
  },
  {
    id: 'spa',
    to: Url.Spa,
    title: t('spa'),
    kicker: t('wellnessServices'),
    image: '/images/spa.jpeg',
  },
  {
    id: 'services',
    to: Url.Services,
    title: t('otherServices'),
    kicker: t('conciergeServices'),
    image: '/images/rooftop.jpeg',
  },
  {
    id: 'about',
    to: Url.About,
    title: t('about'),
    kicker: t('ourStory'),
    image: '/images/about.jpeg',
  },
]

export const getRestaurantMenus = (t: TranslateFn): RestaurantMenuItem[] => [
  {
    id: 'breakfast',
    to: Url.Breakfast,
    title: t('breakfast'),
    kicker: t('breakfastService'),
    description: t('breakfastMenu'),
    image: '/images/breakfast.jpg',
    disabled: false,
  },
  {
    id: 'lunch-dinner',
    to: Url.Menu,
    title: t('lunchDinnerMenu'),
    kicker: t('flavoursOfMorocco'),
    description: t('lunchDinnerMenu'),
    image: '/images/lunch.jpg',
    disabled: false,
  },
  {
    id: 'rooftop',
    to: Url.Rooftop,
    title: t('rooftopTerrace'),
    kicker: t('dessertsSweet'),
    description: t('coolBright'),
    image: '/images/rooftop.jpeg',
    disabled: false,
  },
  {
    id: 'cooking-class',
    to: '#',
    title: t('cookingClass'),
    kicker: t('notAvailable'),
    description: t('notAvailable'),
    image: '/images/food.jpeg',
    disabled: true,
  },
]

export const getMenuSections = (t: TranslateFn): MenuSection[] => [
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

export const getRooftopMenuSections = (t: TranslateFn): MenuSection[] => [
  {
    title: t('dessertsSweet'),
    kicker: t('sweetIndulgence'),
    symbol: '✦',
    items: [
      { name: t('gourmetCaramelFlan'), price: '70 MAD', description: t('gourmetCaramelFlanDesc') },
      { name: t('nilaMhalabia'), price: '45 MAD', description: t('nilaMhalabiaDesc') },
      { name: t('luxuryCheesecake'), price: '50 MAD', description: t('luxuryCheesecakeDesc') },
      { name: t('moroccanSweetAssortment'), price: '50 MAD', description: t('moroccanSweetAssortmentDesc') },
      { name: t('seasonalFruitPlatter'), price: '60 MAD', description: t('seasonalFruitPlatterDesc') },
    ],
  },
  {
    title: t('hotDrinks'),
    kicker: t('warmRitualKicker'),
    symbol: '✦',
    items: [
      { name: t('moroccanMintTeaPremium'), price: '30 MAD', description: t('moroccanMintTeaPremiumDesc') },
      { name: t('berberMountainTea'), price: '40 MAD', description: t('berberMountainTeaDesc') },
      { name: t('espresso'), price: '30 MAD' },
      { name: t('doubleEspresso'), price: '45 MAD' },
      { name: t('americano'), price: '35 MAD', description: t('americanoDesc') },
      { name: t('cafeLatte'), price: '30 MAD', description: t('cafeLatteDesc') },
      { name: t('hotChocolate'), price: '50 MAD', description: t('hotChocolateDesc') },
    ],
  },
  {
    title: t('coldDrinksJuicesSmoothies'),
    kicker: t('coolBrightKicker'),
    symbol: '✦',
    items: [
      { name: t('freshlySqueezedOrangeJuice'), price: '40 MAD' },
      { name: t('signatureLemonMintJuice'), price: '35 MAD', description: t('signatureLemonMintJuiceDesc') },
      { name: t('avocadoAlmondSmoothie'), price: '55 MAD', description: t('avocadoAlmondSmoothieDesc') },
      { name: t('bananaHoneySmoothie'), price: '45 MAD' },
      { name: t('strawberryYogurtSmoothie'), price: '50 MAD' },
      { name: t('tropicalBlissSmoothie'), price: '65 MAD', description: t('tropicalBlissSmoothieDesc') },
      { name: t('mangoBananaSmoothie'), price: '50 MAD' },
      { name: t('mixedFruitSmoothie'), price: '60 MAD', description: t('mixedFruitSmoothieDesc') },
      { name: t('sodas'), price: '20 MAD', description: t('sodasDesc') },
      { name: t('energyDrink'), price: '40 MAD' },
      { name: t('mineralWater'), price: '15 MAD / 30 MAD' },
      { name: t('sparklingWater'), price: '20 MAD / 35 MAD' },
    ],
  },
]

export const getSpaTreatments = (t: TranslateFn): Treatment[] => [
  { name: t('hammamTradition'), duration: '60 min', price: '500 MAD', description: t('hammamTraditionDesc') },
  { name: t('massage'), duration: '60 min', price: '600 MAD', description: t('massageDesc') },
  { name: t('nilaRitual'), duration: '', price: '1000 MAD', description: t('nilaRitualDesc') },
]

export const getServices = (t: TranslateFn): Service[] => [
  {
    icon: '🧭',
    title: t('guidedCityTours'),
    description: t('guidedCityToursDesc'),
    details: [t('medinaWalkingTours'), t('hiddenGemsDiscovery'), t('photographyTours'), t('sunsetViewpointVisits')],
  },
  {
    icon: '📸',
    title: t('photographyServicesTitle'),
    description: t('photographyServicesDesc'),
    details: [t('portraitSessions'), t('couplePhotoshoots'), t('groupPhotography'), t('sunsetSessions')],
  },
  {
    icon: '📍',
    title: t('dayExcursions'),
    description: t('dayExcursionsDesc'),
    details: [t('mountainHikes'), t('waterfallVisits'), t('berberVillages'), t('artisanWorkshops')],
  },
  {
    icon: '🛍️',
    title: t('shoppingAssistanceTitle'),
    description: t('shoppingAssistanceDesc'),
    details: [t('soukGuidance'), t('artisanIntroductions'), t('authenticPurchases'), t('negotiationSupport')],
  },
  {
    icon: '👥',
    title: t('groupEvents'),
    description: t('groupEventsDesc'),
    details: [t('privateDinners'), t('celebrations'), t('workshops'), t('retreats')],
  },
  {
    icon: '📖',
    title: t('culturalExperiences'),
    description: t('culturalExperiencesDesc'),
    details: [t('cookingClasses'), t('traditionalCrafts'), t('musicSessions'), t('languageLessons')],
  },
]

export const getAmenities = (t: TranslateFn): Amenity[] => [
  { icon: '🛜', title: t('freeWiFi'), description: t('highSpeedInternet') },
  { icon: '🍽️', title: t('restaurant'), description: t('onSiteDining') },
  { icon: '🚿', title: t('hotWater'), description: t('hotWaterSupply') },
  { icon: '❄️', title: t('airConditioning'), description: t('climateControl') },
]
