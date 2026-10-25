import { useState } from 'react'
import PillGroup from '../components/PillGroup.jsx'
import MenuGrid from '../components/MenuGrid.jsx'
import { menuFilters, filterDrinks } from '../data.js'

export default function MenuPage() {
  const [activeFilter, setActiveFilter] = useState('All')

  return (
    <>
      <section className="section page-hero">
        <div className="container">
          <p className="eyebrow">OUR MENU</p>
          <h1>Full Menu</h1>
          <p className="lead">Every drink we make, from everyday classics to house specialties. Tap a drink to see the details.</p>
        </div>
      </section>

      <section className="section menu-page">
        <div className="container">
          <PillGroup
            name="menu-filter"
            options={menuFilters}
            value={activeFilter}
            onChange={setActiveFilter}
          />
          <MenuGrid drinks={filterDrinks(activeFilter)} />
        </div>
      </section>
    </>
  )
}
