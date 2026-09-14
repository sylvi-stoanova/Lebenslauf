import { SectionTitle } from '../components/SectionTitle'
import { cvData } from '../data/cvData'

export function Education() {
  return (
    <section id="ausbildung" className="container section education-section" aria-labelledby="ausbildung-title">
      <SectionTitle id="ausbildung-title" title="Studium & Ausbildung" />

      <div className="education-list" aria-label="Studium und Ausbildung in umgekehrter Chronologie">
        {cvData.education.map((entry) => (
          <article key={`${entry.title}-${entry.period}`} className={`education-entry${entry.compact ? ' is-compact' : ''}`}>
            <p className="education-entry__period">{entry.period}</p>

            <div className="education-entry__content">
              <h3>{entry.title}</h3>
              <p className="education-entry__institution">{entry.institution}</p>
              {entry.location ? <p className="education-entry__location">{entry.location}</p> : null}

              {entry.details || entry.degreeResult ? (
                <div className="education-entry__detail-box">
                  {entry.details ? <p>{entry.details}</p> : null}
                  {entry.degreeResult ? <p>{entry.degreeResult}</p> : null}
                </div>
              ) : null}

              {entry.language ? <p className="education-entry__secondary">{entry.language}</p> : null}
              {entry.overallGrade ? <p className="education-entry__secondary">{entry.overallGrade}</p> : null}
              {entry.gradeSystemNote ? <p className="education-entry__note">{entry.gradeSystemNote}</p> : null}
              {entry.focusLine ? <p className="education-entry__focus">{entry.focusLine}</p> : null}
              {entry.qualification ? <p className="education-entry__secondary">{entry.qualification}</p> : null}
            </div>
          </article>
        ))}
      </div>

      <section className="languages-block" aria-labelledby="weitere-stationen-title">
        <h3 id="weitere-stationen-title">{cvData.additionalStations.title}</h3>
        <div className="education-list" aria-label="Weitere Stationen in umgekehrter Chronologie">
          {cvData.additionalStations.entries.map((entry) => (
            <article key={`${entry.title}-${entry.period}`} className="education-entry is-compact">
              <p className="education-entry__period">{entry.period}</p>

              <div className="education-entry__content">
                <h3>{entry.title}</h3>
                <p className="education-entry__institution">{entry.institution}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </section>
  )
}
