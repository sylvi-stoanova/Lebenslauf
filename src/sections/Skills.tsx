import { Code2, Database, MonitorCog, Workflow } from 'lucide-react'
import { SectionTitle } from '../components/SectionTitle'
import { cvData } from '../data/cvData'
import type { SkillGroupIconKey } from '../types/cv'

const iconByKey: Record<SkillGroupIconKey, typeof Database> = {
  database: Database,
  workflow: Workflow,
  code2: Code2,
  'monitor-cog': MonitorCog,
}

export function Skills() {
  return (
    <section id="skills" className="container section it-skills-section" aria-labelledby="skills-title">
      <SectionTitle id="skills-title" title={cvData.skills.title} />

      <div className="it-skills-grid" aria-label="IT und Systemkenntnisse">
        {cvData.skills.groups.map((group) => {
          const Icon = iconByKey[group.icon]

          return (
            <article key={group.title} className="it-skill-card">
              <div className="it-skill-card__header">
                <Icon size={18} aria-hidden="true" className="it-skill-card__icon" />
                <h3>{group.title}</h3>
              </div>
              <ul>
                {group.lines.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </article>
          )
        })}
      </div>

      <section className="languages-block" aria-labelledby="languages-title">
        <h3 id="languages-title">{cvData.skills.languagesTitle}</h3>
        <div className="languages-grid">
          {cvData.skills.languages.map((entry) => (
            <p key={entry.language} className="language-item">
              <span className="language-item__name">{entry.language}</span>
              <span className="language-item__sep"> – </span>
              <span className="language-item__level">{entry.level}</span>
            </p>
          ))}
        </div>
      </section>
    </section>
  )
}
