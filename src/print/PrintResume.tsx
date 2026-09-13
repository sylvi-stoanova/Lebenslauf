import { cvData } from '../data/cvData'
import { PrintHeader } from './PrintHeader'
import { PrintCompetencies } from './PrintCompetencies'
import { PrintExperience } from './PrintExperience'
import { PrintEducation } from './PrintEducation'
import { PrintSkills } from './PrintSkills'

export function PrintResume() {
  const pageOneExperience = cvData.experiences.slice(0, 4)
  const pageTwoExperience = cvData.experiences.slice(4)

  return (
    <div className="print-resume" aria-hidden="true">
      <PrintHeader />
      <PrintCompetencies />
      <PrintExperience title="BERUFSERFAHRUNG" entries={pageOneExperience} compact={false} />

      <div className="print-page-break">
        <PrintExperience title="BERUFSERFAHRUNG" entries={pageTwoExperience} compact={true} />
        <PrintEducation />
        <PrintSkills />
        <p className="print-resume-footer">Lebenslauf · {cvData.footer.name}</p>
      </div>
    </div>
  )
}
