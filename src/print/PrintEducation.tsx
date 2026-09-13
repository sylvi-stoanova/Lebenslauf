import { cvData } from '../data/cvData'

export function PrintEducation() {
  return (
    <section className="print-section print-education" aria-label="Studium und Ausbildung">
      <h2>STUDIUM & AUSBILDUNG</h2>

      <div className="print-education__container">
        <div className="print-education-list">
          {cvData.education.map((entry) => {
            const isBachelor = entry.title.toLowerCase().includes('bachelor')

            return (
              <article key={`${entry.title}-${entry.period}`} className="print-education-entry">
                <p className="print-education-entry__period">{entry.period}</p>

                <div className="print-education-entry__body">
                  <h3>{entry.title}</h3>
                  <p className="print-education-entry__institution">
                    {entry.institution}
                    {entry.location ? `, ${entry.location}` : ''}
                  </p>

                  {isBachelor && (entry.details || entry.degreeResult) ? (
                    <p className="print-education-entry__strip">
                      {entry.details ? entry.details : ''}
                      {entry.details && entry.degreeResult ? ' · ' : ''}
                      {entry.degreeResult ? entry.degreeResult : ''}
                    </p>
                  ) : null}

                  {entry.language ? <p>{entry.language}</p> : null}

                  {entry.overallGrade ? (
                    <p>
                      {entry.overallGrade}
                      {entry.gradeSystemNote ? ` ${entry.gradeSystemNote}` : ''}
                    </p>
                  ) : null}

                  {!isBachelor && entry.details ? <p>{entry.details}</p> : null}
                  {!isBachelor && entry.degreeResult ? <p>{entry.degreeResult}</p> : null}
                  {entry.qualification ? <p>{entry.qualification}</p> : null}
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
