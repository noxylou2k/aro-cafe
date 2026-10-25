import { useEffect, useRef, useState } from 'react'
import PillGroup from './PillGroup.jsx'
import { CloseIcon } from './Icons.jsx'
import { sizes, formatPrice } from '../data.js'

export default function DrinkModal({ drink, onClose }) {
  const [sizeLabel, setSizeLabel] = useState(sizes[0].label)
  const closeRef = useRef(null)
  const size = sizes.find((s) => s.label === sizeLabel)

  useEffect(() => {
    closeRef.current.focus()
    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button ref={closeRef} type="button" className="icon-btn modal-close" aria-label="Close" onClick={onClose}>
          <CloseIcon />
        </button>

        <div className="img-box modal-img">
          <img src={drink.image} alt={drink.name} className={drink.imageClass} />
        </div>

        <div className="modal-body">
          <p className="eyebrow">{drink.tags.join(' · ').toUpperCase()}</p>
          <h2 id="modal-title">{drink.name}</h2>
          <p className="modal-description">{drink.description}</p>

          <p className="modal-label">Size</p>
          <PillGroup
            name="size"
            options={sizes.map((s) => s.label)}
            value={sizeLabel}
            onChange={setSizeLabel}
          />

          <p className="modal-price">{formatPrice(drink.price + size.extra)}</p>
        </div>
      </div>
    </div>
  )
}
