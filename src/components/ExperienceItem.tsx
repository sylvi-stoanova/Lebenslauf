import type { ExperienceEntry } from '../types/cv'

type ExperienceItemProps = {
  item: ExperienceEntry
}

export function ExperienceItem({ item }: ExperienceItemProps) {
  return (
    <article className={`experience-entry${item.compact ? ' is-compact' : ''}`}>
      <p className="experience-entry__period" aria-label="Zeitraum">
        {item.period}
      </p>

      <div className="experience-entry__content">
        <h3>{item.role}</h3>

        {item.company ? <p className="experience-entry__company">{item.company}</p> : null}

        {item.contextLine ? <p className="experience-entry__context">{item.contextLine}</p> : null}

        {item.highlights?.length ? (
          <ul className="experience-entry__highlights" aria-label="Kennzahlen">
            {item.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        ) : null}

        {item.details.length > 0 ? (
          <ul className="experience-entry__details">
            {item.details.map((detail) => (
              <li key={detail}>{detail}</li>
            ))}
          </ul>
        ) : null}
      </div>
    </article>
  )
}
