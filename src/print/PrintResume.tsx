import { cvData } from '../data/cvData'
import { PrintHeader } from './PrintHeader'
import { PrintCompetencies } from './PrintCompetencies'
import { PrintExperience } from './PrintExperience'
import { PrintEducation } from './PrintEducation'
import { PrintSkills } from './PrintSkills'

export function PrintResume() {
  return (
    <div className="print-resume" aria-hidden="true">
      <PrintHeader />
      <PrintCompetencies />
      <PrintExperience title="BERUFSERFAHRUNG" entries={cvData.experiences} compact={false} />
      <PrintEducation />
      <PrintSkills />
      <p className="print-resume-footer">Lebenslauf · {cvData.footer.name}</p>
    </div>
  )
}
