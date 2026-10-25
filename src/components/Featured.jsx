import { useDrinkModal } from '../context/DrinkModalContext.js'
import { featuredDrinks, formatPrice } from '../data.js'

export default function Featured() {
  const { openDrink } = useDrinkModal()

  return (
    <section className="featured section">
      <div className="container">
        <p className="eyebrow">OUR FAVORITES</p>
        <h2>Featured Drinks</h2>

        <div className="product-grid">
          {featuredDrinks.map((drink) => (
            <article key={drink.name} className="product-card">
              <div className="img-box product-img">
                <img src={drink.image} alt={drink.name} className={drink.imageClass} />
              </div>
              <h3>{drink.name}</h3>
              <p className="price">{formatPrice(drink.price)}</p>
              <button type="button" className="btn btn-small" onClick={() => openDrink(drink)}>
                View Details
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
