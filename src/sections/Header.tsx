import { type MouseEvent, useState } from 'react'
import { Download, Menu, X } from 'lucide-react'
import { cvData } from '../data/cvData'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const handlePrint = (event: MouseEvent<HTMLElement>) => {
    event.preventDefault()
    setMenuOpen(false)
    window.print()
  }

  return (
    <header className="site-header">
      <div className="container header-inner">
        <p className="brand" aria-label="Name">
          {cvData.person.fullName}
        </p>

        <nav className="top-nav" aria-label="Hauptnavigation">
          <button
            className="menu-toggle"
            type="button"
            aria-label="Navigation öffnen"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>

          <ul className="nav-list">
            {cvData.navigation.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`}>{item.label}</a>
              </li>
            ))}
          </ul>

          <button
            className="pdf-button no-print"
            type="button"
            aria-label="Lebenslauf als PDF herunterladen"
            onClick={handlePrint}
          >
            <Download size={15} aria-hidden="true" />
            Lebenslauf als PDF
          </button>

          <ul id="mobile-navigation" className={`mobile-nav-list${menuOpen ? ' is-open' : ''}`}>
            {cvData.navigation.map((item) => (
              <li key={`mobile-${item.id}`}>
                <a href={`#${item.id}`} onClick={() => setMenuOpen(false)}>
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#" className="mobile-pdf-link" onClick={handlePrint}>
                Lebenslauf als PDF
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
