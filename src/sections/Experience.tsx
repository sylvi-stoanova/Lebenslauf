import { ExperienceItem } from '../components/ExperienceItem'
import { SectionTitle } from '../components/SectionTitle'
import { cvData } from '../data/cvData'

export function Experience() {
  return (
    <section id="erfahrung" className="container section experience-section" aria-labelledby="erfahrung-title">
      <SectionTitle id="erfahrung-title" title="Berufserfahrung" />
      <div className="experience-list">
        {cvData.experiences.map((item) => (
          <ExperienceItem key={`${item.organization}-${item.period}`} item={item} />
        ))}
      </div>
    </section>
  )
}
