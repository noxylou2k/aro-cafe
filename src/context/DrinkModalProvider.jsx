import { useCallback, useMemo, useState } from 'react'
import { DrinkModalContext } from './DrinkModalContext.js'
import DrinkModal from '../components/DrinkModal.jsx'

export default function DrinkModalProvider({ children }) {
  const [drink, setDrink] = useState(null)
  const closeDrink = useCallback(() => setDrink(null), [])
  const value = useMemo(() => ({ openDrink: setDrink }), [])

  return (
    <DrinkModalContext value={value}>
      {children}
      {drink && <DrinkModal key={drink.name} drink={drink} onClose={closeDrink} />}
    </DrinkModalContext>
  )
}
