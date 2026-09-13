import { cvData } from '../data/cvData'

export function PrintSkills() {
  const languageRows: string[][] = []

  for (let index = 0; index < cvData.skills.languages.length; index += 2) {
    languageRows.push(cvData.skills.languages.slice(index, index + 2).map((entry) => `${entry.language} - ${entry.level}`))
  }

  return (
    <section className="print-section print-skills" aria-label="IT und Systemkenntnisse">
      <h2>IT & SYSTEMKENNTNISSE</h2>

      <div className="print-skills-grid">
        {cvData.skills.groups.map((group) => (
          <article key={group.title} className="print-skill-group">
            <h3>{group.title}</h3>
            <p>{group.lines.join(' · ')}</p>
          </article>
        ))}
      </div>

      <section className="print-languages" aria-label="Sprachen">
        <h2>SPRACHEN</h2>
        <div className="print-languages-grid">
          {languageRows.map((row) => (
            <div key={row.join('|')} className="print-languages-row">
              {row.map((label) => (
                <p key={label}>{label}</p>
              ))}
            </div>
          ))}
        </div>
      </section>
    </section>
  )
}
