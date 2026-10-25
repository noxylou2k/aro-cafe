import { createContext, useContext } from 'react'

export const DrinkModalContext = createContext(null)

export const useDrinkModal = () => useContext(DrinkModalContext)
