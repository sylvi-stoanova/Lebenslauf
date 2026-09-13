import { Cog, Database, Laptop, Workflow } from 'lucide-react'
import { cvData } from '../data/cvData'
import type { CompetencyIconKey } from '../types/cv'

const iconByKey: Record<CompetencyIconKey, typeof Database> = {
  truck: Workflow,
  cog: Cog,
  laptop: Laptop,
  workflow: Workflow,
}

export function PrintCompetencies() {
  return (
    <section className="print-section print-competencies" aria-label="Kernkompetenzen">
      <h2>KERNKOMPETENZEN</h2>
      <div className="print-competencies__grid">
        {cvData.competencies.map((group) => {
          const Icon = iconByKey[group.icon]

          return (
            <article key={group.title} className="print-competency-card">
              <div className="print-competency-card__head">
                <Icon size={11} aria-hidden="true" />
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
    </section>
  )
}
