import {
  ClipboardList,
  GitBranch,
  Laptop,
  Search,
  Truck,
  Users,
} from 'lucide-react'
import { SectionTitle } from '../components/SectionTitle'
import { cvData } from '../data/cvData'
import type { ProcessIconKey } from '../types/cv'

const iconByKey: Record<ProcessIconKey, typeof Truck> = {
  truck: Truck,
  search: Search,
  'git-branch': GitBranch,
  'clipboard-list': ClipboardList,
  laptop: Laptop,
  users: Users,
}

export function ProcessFlow() {
  return (
    <section id="prozess" className="container section process-section" aria-labelledby="prozess-title">
      <SectionTitle id="prozess-title" title={cvData.processFlow.title} />
      <p className="process-intro">{cvData.processFlow.intro}</p>

      <ol className="process-flow" aria-label="Ablauf von der Prozessausführung zur digitalen Lösung">
        {cvData.processFlow.steps.map((step) => {
          const Icon = iconByKey[step.icon]
          return (
            <li key={step.label} className="process-step">
              <span className="process-step__icon-wrap" aria-hidden="true">
                <Icon size={20} className="process-step__icon" />
              </span>
              <span className="process-step__label">{step.label}</span>
            </li>
          )
        })}
      </ol>

      <p className="process-quote">{cvData.processFlow.quote}</p>
    </section>
  )
}
