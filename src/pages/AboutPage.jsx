import { Link } from 'react-router'
import coffeeBeans from '../assets/images/03_coffee_beans.png'

const values = [
  {
    title: 'Sourced with care',
    text: 'We choose beans from growers we trust, so every cup starts with quality.',
  },
  {
    title: 'Roasted fresh',
    text: 'Small batches roasted often, so the flavor is always at its best.',
  },
  {
    title: 'Made for community',
    text: 'A warm place to slow down, catch up with friends, or get some work done.',
  },
]

export default function AboutPage() {
  return (
    <>
      <section className="section page-hero">
        <div className="container">
          <p className="eyebrow">MORE THAN JUST COFFEE</p>
          <h1>Our Story</h1>
          <p className="lead">Great coffee brings people together.</p>
        </div>
      </section>

      <section className="section">
        <div className="container story-inner">
          <div className="img-box story-img">
            <img src={coffeeBeans} alt="Freshly roasted coffee beans" />
          </div>
          <div className="story-text">
            <h2>Crafted with care</h2>
            <p>ARO Coffee Co. started with a simple idea: everyday coffee should feel special. We serve thoughtfully made drinks in a space where everyone feels welcome.</p>
            <p>From your first espresso of the morning to an afternoon iced latte, we&rsquo;re here for the small rituals that make a day better.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">WHAT WE BELIEVE</p>
          <h2>Our Values</h2>
          <div className="values-grid">
            {values.map((value) => (
              <article key={value.title} className="value-card">
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section page-cta">
        <div className="container">
          <h2>Ready for your next cup?</h2>
          <Link to="/menu" className="btn">See Our Menu</Link>
        </div>
      </section>
    </>
  )
}
