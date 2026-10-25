import icedLatte from './assets/images/01_iced_latte.png'
import coldBrew from './assets/images/06_cold_brew_bottle.png'
import caramelMacchiato from './assets/images/caramel_macchiato.png'
import matchaLatte from './assets/images/matchalatte.png'
import blackCoffee from './assets/images/07_black_coffee_cup.png'
import latteGlass from './assets/images/09_latte_glass.png'
import smallCup from './assets/images/10_small_cup.png'
import mocha from './assets/images/mocha.png'
import icedBlackCoffee from './assets/images/05_iced_black_coffee.png'

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'menu', label: 'Menu' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
]

export const sectionIds = navLinks.map((link) => link.id)

export const menuFilters = ['All', 'Classic', 'Milk-Based', 'Specialty', 'Iced']

export const sizes = [
  { label: 'Regular', extra: 0 },
  { label: 'Large', extra: 0.75 },
]

// The first four drinks are the ones shown in the home page menu preview.
export const drinks = [
  {
    name: 'Iced Latte',
    price: 5.5,
    image: icedLatte,
    tags: ['Iced', 'Milk-Based'],
    description: 'Double espresso poured over ice and cold fresh milk. Smooth, light and refreshing.',
  },
  {
    name: 'Cold Brew',
    price: 4.5,
    image: coldBrew,
    tags: ['Iced', 'Classic'],
    description: 'Steeped slowly in cold water for 18 hours for a naturally sweet, low-acid cup.',
  },
  {
    name: 'Caramel Macchiato',
    price: 6.0,
    image: caramelMacchiato,
    tags: ['Specialty', 'Milk-Based'],
    description: 'Vanilla-sweetened milk marked with espresso and finished with a caramel drizzle.',
  },
  {
    name: 'Matcha Latte',
    price: 5.5,
    image: matchaLatte,
    tags: ['Specialty', 'Milk-Based'],
    description: 'Ceremonial-grade matcha whisked with steamed milk. Earthy, creamy and calming.',
  },
  {
    name: 'Americano',
    price: 4.5,
    image: blackCoffee,
    tags: ['Classic'],
    description: 'Espresso topped with hot water for a clean, bold cup that lets the beans shine.',
    featured: true,
  },
  {
    name: 'Latte',
    price: 5.5,
    image: latteGlass,
    tags: ['Classic', 'Milk-Based'],
    description: 'Espresso with silky steamed milk and a thin layer of microfoam.',
    featured: true,
  },
  {
    name: 'Cappuccino',
    price: 5.5,
    image: smallCup,
    tags: ['Classic', 'Milk-Based'],
    description: 'Equal parts espresso, steamed milk and airy foam. Rich and perfectly balanced.',
    featured: true,
  },
  {
    name: 'Mocha',
    price: 6.0,
    image: mocha,
    imageClass: 'img-mocha',
    tags: ['Specialty', 'Milk-Based'],
    description: 'Espresso, dark chocolate and steamed milk for when you want coffee and dessert.',
    featured: true,
  },
  {
    name: 'Iced Americano',
    price: 4.75,
    image: icedBlackCoffee,
    tags: ['Iced', 'Classic'],
    description: 'Our Americano served over ice. Crisp, bold and made for warm afternoons.',
  },
]

export const featuredDrinks = drinks.filter((drink) => drink.featured)

export const filterDrinks = (filter) =>
  filter === 'All' ? drinks : drinks.filter((drink) => drink.tags.includes(filter))

export const searchDrinks = (query) => {
  const q = query.trim().toLowerCase()
  if (!q) return []
  return drinks.filter(
    (drink) =>
      drink.name.toLowerCase().includes(q) ||
      drink.tags.some((tag) => tag.toLowerCase().includes(q)),
  )
}

export const formatPrice = (price) => `$${price.toFixed(2)}`
