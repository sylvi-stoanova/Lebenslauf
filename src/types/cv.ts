export type ExperienceEntry = {
  organization: string
  period: string
  role: string
  company?: string
  contextLine?: string
  highlights?: string[]
  compact?: boolean
  details: string[]
}

export type CompetencyIconKey = 'truck' | 'cog' | 'laptop' | 'workflow'

export type CompetencyCard = {
  title: string
  icon: CompetencyIconKey
  lines: string[]
}

export type ProcessIconKey = 'truck' | 'search' | 'git-branch' | 'clipboard-list' | 'laptop' | 'users'

export type ProcessStep = {
  label: string
  icon: ProcessIconKey
}

export type ProcessFlowData = {
  title: string
  intro: string
  quote: string
  steps: ProcessStep[]
}

export type EducationEntry = {
  period: string
  title: string
  institution: string
  location?: string
  details?: string
  language?: string
  degreeResult?: string
  overallGrade?: string
  gradeSystemNote?: string
  focusLine?: string
  qualification?: string
  compact?: boolean
}

export type SkillGroupIconKey = 'database' | 'workflow' | 'code2' | 'monitor-cog'

export type SkillGroup = {
  title: string
  icon: SkillGroupIconKey
  lines: string[]
}

export type AdditionalStationEntry = {
  period: string
  title: string
  institution: string
}

export type AdditionalStationsData = {
  title: string
  entries: AdditionalStationEntry[]
}

export type LanguageEntry = {
  language: string
  level: string
}

export type SkillsData = {
  title: string
  groups: SkillGroup[]
  languagesTitle: string
  languages: LanguageEntry[]
}

export type ContactData = {
  title: string
  intro: string
  location: string
  email: string
  phone: string
}

export type FooterData = {
  name: string
  subtitle: string
  line?: string
}

export type CvData = {
  person: {
    fullName: string
    headline: string
    subline: string
    profileText: string
    location: string
    emailLabel: string
    phoneLabel: string
    photoPath: string
  }
  navigation: Array<{
    id: string
    label: string
  }>
  competencies: CompetencyCard[]
  experiences: ExperienceEntry[]
  processFlow: ProcessFlowData
  education: EducationEntry[]
  additionalStations: AdditionalStationsData
  skills: SkillsData
  contact: ContactData
  footer: FooterData
}
