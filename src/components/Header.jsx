import { useCallback, useState } from 'react'
import { useLocation } from 'react-router'
import Logo from './Logo.jsx'
import NavLinks from './NavLinks.jsx'
import SearchBar from './SearchBar.jsx'
import { SearchIcon, AccountIcon, CartIcon, MenuIcon, CloseIcon } from './Icons.jsx'
import useActiveSection from '../hooks/useActiveSection.js'
import { sectionIds } from '../data.js'

const pageSections = { '/menu': 'menu', '/about': 'about' }

export default function Header() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'
  const scrolledSection = useActiveSection(sectionIds, isHome)
  const activeSection = isHome ? scrolledSection : pageSections[pathname]

  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)
  const closeSearch = useCallback(() => setSearchOpen(false), [])

  const toggleSearch = () => {
    setSearchOpen((open) => !open)
    setMenuOpen(false)
  }

  return (
    <header className="header">
      <div className="container header-inner">
        <Logo onClick={closeMenu} />

        <NavLinks
          className={menuOpen ? 'nav open' : 'nav'}
          active={activeSection}
          onNavigate={closeMenu}
        />

        <div className="header-icons">
          <button
            type="button"
            className="icon-btn"
            aria-label={searchOpen ? 'Close search' : 'Search'}
            aria-expanded={searchOpen}
            onClick={toggleSearch}
          >
            {searchOpen ? <CloseIcon /> : <SearchIcon />}
          </button>
          <a href="#" aria-label="Account"><AccountIcon /></a>
          <a href="#" aria-label="Cart"><CartIcon /></a>
          <button
            type="button"
            className="icon-btn menu-toggle"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {searchOpen && <SearchBar onClose={closeSearch} />}
    </header>
  )
}
