import { Link } from 'react-router'
import coffeeBag from '../assets/images/04_coffee_bag.png'

export default function Story() {
  return (
    <section className="story section" id="about">
      <div className="container story-inner">
        <div className="img-box story-img">
          <img src={coffeeBag} alt="ARO Coffee Co. house blend bag" />
        </div>
        <div className="story-text">
          <p className="eyebrow">MORE THAN JUST COFFEE</p>
          <h2>Our Story</h2>
          <p>At ARO Coffee Co., we believe great coffee brings people together. Crafted with care, served for your everyday moments.</p>
          <Link to="/about" className="btn">Learn More</Link>
        </div>
      </div>
    </section>
  )
}
