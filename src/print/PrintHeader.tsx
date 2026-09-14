import { Mail, MapPin, Phone } from 'lucide-react'
import { useState } from 'react'
import { cvData } from '../data/cvData'

function toPrintToken(value: string, fallback: string) {
  if (/^\[.*\]$/.test(value.trim())) {
    return fallback
  }

  return value
}

export function PrintHeader() {
  const [imageMissing, setImageMissing] = useState(false)
  const showImage = Boolean(cvData.person.photoPath) && !imageMissing
  const email = toPrintToken(cvData.contact.email, '[E-Mail]')
  const phone = toPrintToken(cvData.contact.phone, '[Telefon]')

  return (
    <header className="print-header">
      <div className="print-header__content">
        <h1>{cvData.person.fullName.toUpperCase()}</h1>
        <p className="print-header__title">{cvData.person.headline}</p>
        <p className="print-header__subtitle">{cvData.person.subline}</p>
        <p className="print-header__profile">{cvData.person.profileText}</p>

        <ul className="print-header__contact" aria-label="Kontaktinformationen">
          <li>
            <MapPin size={10} aria-hidden="true" />
            <span>{cvData.contact.location}</span>
          </li>
          <li>
            <Mail size={10} aria-hidden="true" />
            <span>{email}</span>
          </li>
          <li>
            <Phone size={10} aria-hidden="true" />
            <span>{phone}</span>
          </li>
        </ul>
      </div>

      <figure className="print-header__photo" aria-label="Foto Bereich">
        {showImage ? (
          <img
            src={cvData.person.photoPath}
            alt={cvData.person.fullName}
            onError={() => setImageMissing(true)}
          />
        ) : (
          <div className="print-header__placeholder">
            <p>Hier kommt dein Foto hin</p>
            <small>3,5 × 4,5 cm</small>
          </div>
        )}
      </figure>
    </header>
  )
}
