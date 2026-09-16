import { GraduationCap, Truck, Users, Workflow } from 'lucide-react'
import { useEffect, useMemo, useRef, useState, type CSSProperties } from 'react'
import { SectionTitle } from '../components/SectionTitle'
import { cvData } from '../data/cvData'
import type { CareerJourneyIconKey } from '../types/cv'

const iconByKey: Record<CareerJourneyIconKey, typeof Truck> = {
  truck: Truck,
  users: Users,
  'graduation-cap': GraduationCap,
  workflow: Workflow,
}

export function CareerJourney() {
  const journey = cvData.careerJourney
  const revealDelays = [300, 1200, 2200, 3200]
  const initialId = journey[0]?.id ?? ''
  const [activeId, setActiveId] = useState(initialId)
  const [isVisible, setIsVisible] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const sectionRef = useRef<HTMLElement | null>(null)

  const activeStep = useMemo(() => journey.find((step) => step.id === activeId) ?? journey[0], [activeId, journey])

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')

    const updatePreference = () => {
      const reduced = mediaQuery.matches
      setPrefersReducedMotion(reduced)
      if (reduced) {
        setIsVisible(true)
      }
    }

    updatePreference()

    if (typeof mediaQuery.addEventListener === 'function') {
      mediaQuery.addEventListener('change', updatePreference)
      return () => mediaQuery.removeEventListener('change', updatePreference)
    }

    mediaQuery.addListener(updatePreference)
    return () => mediaQuery.removeListener(updatePreference)
  }, [])

  useEffect(() => {
    if (prefersReducedMotion || !sectionRef.current) {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (entry?.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.35 },
    )

    observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [prefersReducedMotion])

  if (!journey.length || !activeStep) {
    return null
  }

  return (
    <section
      id="weg"
      ref={sectionRef}
      className={`container section career-journey${isVisible ? ' is-visible' : ''}`}
      aria-labelledby="career-journey-title"
    >
      <SectionTitle id="career-journey-title" title="Mein Weg: Logistik → Prozesse → Digitalisierung" />

      <div className="career-journey__track" role="list" aria-label="Interaktiver Karriereweg">
        <span className="career-journey__line" aria-hidden="true">
          <span className="career-journey__line-fill" />
        </span>

        {journey.map((step, index) => {
          const Icon = iconByKey[step.icon]
          const isActive = step.id === activeId
          const mobileDetailsId = `career-journey-mobile-details-${step.id}`

          return (
            <div
              key={step.id}
              className={`career-journey__step${isActive ? ' is-active' : ''}`}
              style={{ '--delay': `${revealDelays[index] ?? revealDelays[revealDelays.length - 1]}ms` } as CSSProperties}
              role="listitem"
            >
              <button
                type="button"
                className="career-journey__button"
                onClick={() => setActiveId(step.id)}
                aria-expanded={isActive}
                aria-controls={mobileDetailsId}
              >
                <span className="career-journey__node" aria-hidden="true">
                  <Icon size={19} />
                </span>
                <span className="career-journey__meta">
                  <span className="career-journey__number">{step.number}</span>
                  <span className="career-journey__label">{step.title}</span>
                </span>
              </button>

              <div id={mobileDetailsId} className="career-journey__mobile-details" hidden={!isActive}>
                <ul>
                  {step.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
                <p>
                  Bezug: <strong>{step.reference}</strong>
                </p>
              </div>
            </div>
          )
        })}
      </div>

      <article key={activeStep.id} className="career-journey__details" aria-live="polite">
        <ul>
          {activeStep.details.map((detail) => (
            <li key={detail}>{detail}</li>
          ))}
        </ul>
        <p>
          Bezug: <strong>{activeStep.reference}</strong>
        </p>
      </article>

      <p className="career-journey__statement">
        Heute verbinde ich diese Perspektiven an der Schnittstelle von <strong>Supply Chain, Prozessen und IT</strong>.
      </p>
    </section>
  )
}
