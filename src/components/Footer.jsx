import Logo from './Logo.jsx'
import NavLinks from './NavLinks.jsx'
import Socials from './Socials.jsx'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <Logo />
        <NavLinks className="footer-nav" />
        <Socials small />
        <p className="copyright">&copy; 2025 ARO Coffee Co. All rights reserved.</p>
      </div>
    </footer>
  )
}
