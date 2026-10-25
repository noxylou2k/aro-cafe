import { Link } from 'react-router'

export default function Logo({ onClick }) {
  return (
    <Link to="/" className="logo" onClick={onClick}>
      <span className="logo-main">ARO</span>
      <span className="logo-sub">COFFEE CO.</span>
    </Link>
  )
}
