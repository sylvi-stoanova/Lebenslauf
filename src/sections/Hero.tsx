import { Mail, MapPin, Phone } from 'lucide-react'
import { PhotoPlaceholder } from '../components/PhotoPlaceholder'
import { cvData } from '../data/cvData'

export function Hero() {
  return (
    <section id="profil" className="hero-section container" aria-labelledby="hero-title">
      <div className="hero-copy">
        <h1 id="hero-title">{cvData.person.fullName.toUpperCase()}</h1>
        <p className="hero-headline">{cvData.person.headline}</p>
        <p className="hero-subline">{cvData.person.subline}</p>
        <p className="hero-print-contact" aria-label="Kontaktzeile Druckansicht">
          {cvData.contact.location} · {cvData.contact.email} · {cvData.contact.phone}
        </p>
        <p className="hero-profile">{cvData.person.profileText}</p>

        <div className="hero-actions">
          <a href="#kompetenzen" className="hero-button hero-button--primary">
            Mehr über mich
          </a>
          <a href="#kontakt" className="hero-button hero-button--secondary">
            Kontakt aufnehmen
          </a>
        </div>

        <ul className="hero-meta" aria-label="Kontakt und Standort">
          <li>
            <MapPin size={16} aria-hidden="true" />
            <span>{cvData.contact.location}</span>
          </li>
          <li>
            <Mail size={16} aria-hidden="true" />
            <span>{cvData.contact.email}</span>
          </li>
          <li>
            <Phone size={16} aria-hidden="true" />
            <span>{cvData.contact.phone}</span>
          </li>
        </ul>
      </div>

      <PhotoPlaceholder imageSrc={cvData.person.photoPath} alt={cvData.person.fullName} showImage={false} />
    </section>
  )
}
