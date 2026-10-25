import { useDrinkModal } from '../context/DrinkModalContext.js'
import { formatPrice } from '../data.js'

export default function MenuGrid({ drinks }) {
  const { openDrink } = useDrinkModal()

  if (drinks.length === 0) {
    return <p className="empty-state">No drinks in this category yet.</p>
  }

  return (
    <div className="menu-grid">
      {drinks.map((drink) => (
        <button key={drink.name} type="button" className="menu-item" onClick={() => openDrink(drink)}>
          <span className="img-box menu-img">
            <img src={drink.image} alt={drink.name} className={drink.imageClass} />
          </span>
          <span className="menu-item-name">{drink.name}</span>
          <span className="price">{formatPrice(drink.price)}</span>
        </button>
      ))}
    </div>
  )
}
