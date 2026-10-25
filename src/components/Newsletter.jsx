import { useState } from 'react'

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState({ type: 'idle', message: '' })

  const handleSubmit = (event) => {
    event.preventDefault()
    const trimmed = email.trim()

    if (!trimmed) {
      setStatus({ type: 'error', message: 'Please enter your email address.' })
    } else if (!emailPattern.test(trimmed)) {
      setStatus({ type: 'error', message: 'That email doesn\u2019t look right. Please check it and try again.' })
    } else {
      setStatus({ type: 'success', message: `Thanks for subscribing! We\u2019ll send updates to ${trimmed}.` })
      setEmail('')
    }
  }

  const handleChange = (event) => {
    setEmail(event.target.value)
    if (status.type === 'error') setStatus({ type: 'idle', message: '' })
  }

  return (
    <section className="newsletter section">
      <div className="container newsletter-inner">
        <div>
          <p className="eyebrow">STAY CONNECTED</p>
          <h2>Join Our Newsletter</h2>
          <p className="small">Get the latest updates, new arrivals, and exclusive offers straight to your inbox.</p>
        </div>
        <div>
          <form className="newsletter-form" onSubmit={handleSubmit} noValidate>
            <input
              type="email"
              placeholder="Your email address"
              aria-label="Email address"
              aria-invalid={status.type === 'error'}
              aria-describedby="newsletter-message"
              value={email}
              onChange={handleChange}
            />
            <button type="submit" className="btn">Subscribe</button>
          </form>
          <p id="newsletter-message" className={`form-message ${status.type}`} aria-live="polite">
            {status.message}
          </p>
        </div>
      </div>
    </section>
  )
}
