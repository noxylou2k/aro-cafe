import { useEffect, useRef, useState } from 'react'
import { useDrinkModal } from '../context/DrinkModalContext.js'
import { searchDrinks, formatPrice } from '../data.js'

export default function SearchBar({ onClose }) {
  const [query, setQuery] = useState('')
  const inputRef = useRef(null)
  const { openDrink } = useDrinkModal()
  const results = searchDrinks(query)

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [onClose])

  const selectDrink = (drink) => {
    openDrink(drink)
    onClose()
  }

  return (
    <div className="search-panel">
      <div className="container">
        <input
          ref={inputRef}
          type="search"
          className="search-input"
          placeholder="Search drinks, e.g. latte or iced"
          aria-label="Search drinks"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />

        {query.trim() && (
          results.length > 0 ? (
            <ul className="search-results">
              {results.map((drink) => (
                <li key={drink.name}>
                  <button type="button" className="search-result" onClick={() => selectDrink(drink)}>
                    <span className="img-box search-thumb">
                      <img src={drink.image} alt="" className={drink.imageClass} />
                    </span>
                    <span className="search-name">{drink.name}</span>
                    <span className="price">{formatPrice(drink.price)}</span>
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p className="empty-state">No drinks match &ldquo;{query.trim()}&rdquo;.</p>
          )
        )}
      </div>
    </div>
  )
}
