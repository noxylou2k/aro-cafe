import { Link } from 'react-router'
import latteCup from '../assets/images/02_latte_cup.png'

export default function Hero() {
  return (
    <section className="hero section" id="home">
      <div className="container hero-inner">
        <div className="hero-text">
          <p className="eyebrow">GOOD COFFEE. BETTER DAYS.</p>
          <h1>Your daily<br />ritual.</h1>
          <p className="lead">Thoughtfully crafted coffee for your everyday moments.</p>
          <Link to="/#menu" className="btn">Explore Our Menu &rarr;</Link>
        </div>
        <div className="img-box hero-img">
          <img src={latteCup} alt="ARO latte with latte art" />
        </div>
      </div>
    </section>
  )
}
