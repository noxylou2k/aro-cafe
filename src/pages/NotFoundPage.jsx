import { Link } from 'react-router'

export default function NotFoundPage() {
  return (
    <section className="section page-hero page-cta">
      <div className="container">
        <p className="eyebrow">404</p>
        <h1>Page not found</h1>
        <p className="lead">This page doesn&rsquo;t exist, but there&rsquo;s still plenty of coffee.</p>
        <Link to="/" className="btn">Back to Home</Link>
      </div>
    </section>
  )
}
