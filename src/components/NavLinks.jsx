import { Link } from 'react-router'
import { navLinks } from '../data.js'

export default function NavLinks({ className, active, onNavigate }) {
  return (
    <nav className={className}>
      {navLinks.map((link) => (
        <Link
          key={link.id}
          to={`/#${link.id}`}
          className={link.id === active ? 'active' : undefined}
          onClick={onNavigate}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  )
}
