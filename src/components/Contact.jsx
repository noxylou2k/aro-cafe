import Socials from './Socials.jsx'
import { PinIcon, PhoneIcon, MailIcon } from './Icons.jsx'

export default function Contact() {
  return (
    <section className="contact section" id="contact">
      <div className="container contact-inner">
        <div className="contact-text">
          <p className="eyebrow">GET IN TOUCH</p>
          <h2>Contact Us</h2>
          <p>We'd love to hear from you. Reach out anytime.</p>

          <ul className="contact-list">
            <li><PinIcon />123 Coffee Lane, Bacolod City, Negros Occidental</li>
            <li><PhoneIcon />+63 912 345 6789</li>
            <li><MailIcon />arocoffee@gmail.com</li>
          </ul>

          <Socials />
        </div>

        <div className="img-box map-box">
          <iframe
            src="https://maps.google.com/maps?q=Bacolod%20City%2C%20Negros%20Occidental&z=14&output=embed"
            title="ARO Coffee Co. location map"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  )
}
