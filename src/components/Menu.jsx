import { useState } from 'react'
import { Link } from 'react-router'
import PillGroup from './PillGroup.jsx'
import MenuGrid from './MenuGrid.jsx'
import { menuFilters, filterDrinks } from '../data.js'

export default function Menu() {
  const [activeFilter, setActiveFilter] = useState('All')
  const preview = filterDrinks(activeFilter).slice(0, 4)

  return (
    <section className="menu section" id="menu">
      <div className="container menu-inner">
        <div className="menu-text">
          <p className="eyebrow">OUR MENU</p>
          <h2>Coffee for Every Mood</h2>
          <p>From classic favorites to modern creations, find your perfect cup.</p>
          <Link to="/menu" className="btn">View Full Menu</Link>
        </div>

        <div className="menu-content">
          <PillGroup
            name="home-filter"
            options={menuFilters}
            value={activeFilter}
            onChange={setActiveFilter}
          />
          <MenuGrid drinks={preview} />
        </div>
      </div>
    </section>
  )
}
