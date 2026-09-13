import { Cog, Laptop, Truck, Workflow } from 'lucide-react'
import { SectionTitle } from '../components/SectionTitle'
import { cvData } from '../data/cvData'
import type { CompetencyIconKey } from '../types/cv'

const iconByKey: Record<CompetencyIconKey, typeof Truck> = {
  truck: Truck,
  cog: Cog,
  laptop: Laptop,
  workflow: Workflow,
}

export function Competencies() {
  return (
    <section id="kompetenzen" className="container surface section" aria-labelledby="kompetenzen-title">
      <SectionTitle id="kompetenzen-title" title="Kernkompetenzen" />
      <div className="competencies-grid" aria-label="Kernkompetenzen Übersicht">
        {cvData.competencies.map((item) => {
          const Icon = iconByKey[item.icon]

          return (
          <article key={item.title} className="competency-card">
            <Icon size={20} aria-hidden="true" className="competency-card__icon" />
            <h3>{item.title}</h3>
            <ul>
              {item.lines.map((line) => (
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
