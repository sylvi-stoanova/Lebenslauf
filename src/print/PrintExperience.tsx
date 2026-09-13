import type { ExperienceEntry } from '../types/cv'

type PrintExperienceProps = {
  title: string
  entries: ExperienceEntry[]
  compact: boolean
}

export function PrintExperience({ title, entries, compact }: PrintExperienceProps) {
  return (
    <section className={`print-section print-experience${compact ? ' is-compact' : ''}`} aria-label={title}>
      <h2>{title}</h2>

      <div className="print-experience-list">
        {entries.map((entry) => (
          <article key={`${entry.organization}-${entry.period}`} className={`print-experience-entry${entry.compact ? ' is-short' : ''}`}>
            <p className="print-experience-entry__period">{entry.period}</p>

            <div className="print-experience-entry__body">
              <h3>{entry.role}</h3>
              {entry.company ? <p className="print-experience-entry__company">{entry.company}</p> : null}
              {entry.contextLine ? <p className="print-experience-entry__context">{entry.contextLine}</p> : null}

              {entry.highlights?.length ? (
                <ul className="print-experience-entry__highlights">
                  {entry.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              ) : null}

              {entry.details.length > 0 ? (
                <ul className="print-experience-entry__details">
                  {entry.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
