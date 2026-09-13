import { ExternalLink, Mail, MapPin, Phone } from 'lucide-react'
import { cvData } from '../data/cvData'

function isPlaceholder(value: string) {
  return /^\[.*\]$/.test(value.trim())
}

function normalizePhone(phone: string) {
  return phone.replace(/[\s()-]/g, '')
}

export function Contact() {
  const { contact, footer } = cvData
  const hasEmailLink = !isPlaceholder(contact.email) && contact.email.includes('@')
  const hasPhoneLink = !isPlaceholder(contact.phone) && /\d/.test(contact.phone)
  const hasLinkedInLink =
    !isPlaceholder(contact.linkedin) && (contact.linkedin.startsWith('http://') || contact.linkedin.startsWith('https://'))

  return (
    <>
      <section id="kontakt" className="container section contact-section" aria-labelledby="kontakt-title">
        <div className="contact-layout">
          <header className="contact-intro">
            <h2 id="kontakt-title">{contact.title}</h2>
            <p>{contact.intro}</p>
          </header>

          <address className="contact-address" aria-label="Kontaktdaten">
            <p className="contact-item">
              <MapPin size={17} aria-hidden="true" />
              <span className="contact-item__label">Standort</span>
              <span className="contact-item__value">{contact.location}</span>
            </p>

            <p className="contact-item">
              <Mail size={17} aria-hidden="true" />
              <span className="contact-item__label">E-Mail</span>
              {hasEmailLink ? (
                <a className="contact-item__value" href={`mailto:${contact.email}`}>
                  {contact.email}
                </a>
              ) : (
                <span className="contact-item__value">{contact.email}</span>
              )}
            </p>

            <p className="contact-item">
              <Phone size={17} aria-hidden="true" />
              <span className="contact-item__label">Telefon</span>
              {hasPhoneLink ? (
                <a className="contact-item__value" href={`tel:${normalizePhone(contact.phone)}`}>
                  {contact.phone}
                </a>
              ) : (
                <span className="contact-item__value">{contact.phone}</span>
              )}
            </p>

            <p className="contact-item">
              <ExternalLink size={17} aria-hidden="true" />
              <span className="contact-item__label">LinkedIn</span>
              {hasLinkedInLink ? (
                <a
                  className="contact-item__value"
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {contact.linkedin}
                </a>
              ) : (
                <span className="contact-item__value">{contact.linkedin}</span>
              )}
            </p>
          </address>
        </div>
      </section>

      <footer className="site-footer" aria-label="Footer">
        <div className="container footer-inner">
          <p className="footer-name">{footer.name}</p>
          <p className="footer-subtitle">{footer.subtitle}</p>
          {footer.line ? <p className="footer-line">{footer.line}</p> : null}
        </div>
      </footer>
    </>
  )
}
