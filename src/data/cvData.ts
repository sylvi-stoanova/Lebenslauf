import type { CvData } from '../types/cv'

export const cvData: CvData = {
  person: {
    fullName: 'Sylvi Stoanova',
    headline: 'Supply Chain Process & Digitalization',
    subline:
      'Operative Logistik · Prozessanalyse · Digitalisierung & Automatisierung · Business-IT-Schnittstelle',
    profileText:
      'Ich verbinde fundiertes operatives Logistikverständnis mit einer digitalen und prozessorientierten Perspektive. Ich analysiere Abläufe, erkenne Digitalisierungs- und Automatisierungspotenziale und strukturiere fachliche Anforderungen für digitale Lösungen.',
    location: 'München / Umgebung',
    emailLabel: '[E-Mail]',
    linkedInLabel: 'LinkedIn',
    photoPath: '/images/profile.jpg',
  },
  navigation: [
    { id: 'profil', label: 'Profil' },
    { id: 'kompetenzen', label: 'Kompetenzen' },
    { id: 'erfahrung', label: 'Erfahrung' },
    { id: 'ausbildung', label: 'Ausbildung' },
    { id: 'skills', label: 'Skills' },
    { id: 'kontakt', label: 'Kontakt' },
  ],
  competencies: [
    {
      title: 'Supply Chain & Transport',
      icon: 'truck',
      lines: [
        'End-to-End-Transportsteuerung',
        'Internationale Verkehre',
        'Projekt- & Sondertransporte',
        'Frachtraumbeschaffung',
        'Transportkalkulation',
        'Termin- & Risikosteuerung',
      ],
    },
    {
      title: 'Prozess & Business Analysis',
      icon: 'cog',
      lines: [
        'Prozessanalyse',
        'Prozessoptimierung',
        'Anforderungsanalyse',
        'Prozessdokumentation',
        'Digitalisierungs- & Automatisierungspotenziale',
      ],
    },
    {
      title: 'Business-IT & Daten',
      icon: 'laptop',
      lines: [
        'SQL - praktische Anwendung',
        'Fachlich-technische Abstimmung',
        'Strukturierte Anforderungsaufnahme',
        'Technische Dokumentation',
        'Stakeholder-Kommunikation',
      ],
    },
    {
      title: 'Digitalisierung & Automatisierung',
      icon: 'workflow',
      lines: [
        'n8n - Grundkenntnisse',
        'Docker - Grundkenntnisse',
        'Lokale LLM-Nutzung - Ollama / Mistral',
        'ERP - Komalog & Winkarat',
        'Microsoft Excel · Word · Outlook',
      ],
    },
  ],
  experiences: [
    {
      organization: 'Polizeipräsidium Mittelfranken',
      period: '11/2024 – 06/2026',
      role: 'Werkstudentin / studienbezogenes Vorabschlusspraktikum – Prozessdigitalisierung',
      company: 'Polizeipräsidium Mittelfranken',
      contextLine:
        'Zusammenhängendes Projekt: Beginn während der Werkstudententätigkeit, Abschluss im Rahmen des Vorabschlusspraktikums.',
      details: [
        'Analyse und Dokumentation eines bestehenden fachlichen Prozesses sowie Identifikation von Optimierungspotenzialen.',
        'Konzeption einer webbasierten digitalen Lösung in enger Abstimmung mit dem Auftraggeber.',
        'Anforderungsabstimmung, eigenständige Projektarbeit und technische Dokumentation.',
      ],
    },
    {
      organization: 'Elternzeit',
      period: '06/2022 – 09/2024',
      role: 'Elternzeit',
      contextLine: 'Parallel ab 10/2022: Bachelorstudium Businessinformatik im Fernstudium.',
      compact: true,
      details: [],
    },
    {
      organization: 'Baliu Trans',
      period: '02/2021 – 06/2022',
      role: 'Speditionskauffrau – administrative Logistik',
      company: 'Baliu Trans, Schwarzenbruck',
      details: [
        'Administrative Begleitung von Transport- und Logistikprozessen im Umfeld der Zusammenarbeit mit DHL; operative Disposition durch DHL.',
        'Erfassung, Prüfung und Aufbereitung von Mitarbeiterstunden sowie Pflege und Kontrolle operativer Transportdaten.',
        'Kaufmännische Berechnungen, Berichte und administrative Auswertungen mit Microsoft Excel, Word und Outlook.',
      ],
    },
    {
      organization: 'Gentner GmbH',
      period: '02/2019 – 12/2020',
      role: 'Vertriebsassistenz Innendienst – Automotive / B2B',
      company: 'Gentner GmbH, Kammerstein',
      details: [
        'Bearbeitung von Kunden- und Projektanfragen für langfristige Automotive-Serienprojekte mit erwarteten Stückzahlen über mehrere Jahre.',
        'Aufnahme technischer Anforderungen anhand von Zeichnungen und Spezifikationen sowie Koordination der Angebotsvorbereitung mit Einkauf, Technik, Produktion, Qualität, Lager/Logistik, Buchhaltung, Außendienst und Geschäftsleitung.',
        'Zusammenführung technischer und kaufmännischer Informationen für Kalkulation, Angebotserstellung und Auftragsbearbeitung.',
        'Auftragsanlage im ERP-System Winkarat sowie Abgleich bestehender und neuer Vertrags-/Auftragskonditionen zur Erkennung von Änderungen und Abstimmungsbedarf.',
        'Bearbeitung von Mengen-/Preisdifferenzen, Rechnungsprüfung und Gutschriftverfahren sowie quartalsweise Auftragsauswertungen und Präsentationen.',
      ],
    },
    {
      organization: 'Sotraprint Spedition und Lagerlogistik GmbH',
      period: '08/2015 – 02/2019',
      role: 'Kauffrau für Spedition und Logistikdienstleistung – Internationale Disposition',
      company: 'Sotraprint Spedition und Lagerlogistik GmbH, Wendelstein',
      contextLine:
        '10/2015–02/2018 Ausbildung; anschließend internationale Disposition. Vorpraktikum 08/2015–09/2015.',
      highlights: ['bis zu ~100 Transporte / 2–3 Wochen', '~20 Schweiz-Verkehre / Woche'],
      details: [
        'Eigenverantwortliche End-to-End-Steuerung nationaler und internationaler Transporte – von Frachtraumbeschaffung und Kalkulation über Beauftragung und Terminsteuerung bis zu Kundenkommunikation und Problemlösung.',
        'Planung und Überwachung von Projekt-, Sonder- und zeitkritischen Transporten nach Deutschland, in die Schweiz und nach Großbritannien.',
        'Steuerung größerer Transportprojekte mit bis zu ca. 100 Transporten innerhalb von 2–3 Wochen sowie Schweiz-Verkehren mit ca. 20 Transporten pro Woche.',
        'Einkauf von Frachtraum über Transportbörsen (u. a. TIMOCOM) und Auswahl geeigneter Frachtführer nach Preis, Kapazität, Laufzeit und Zuverlässigkeit.',
        'Wirtschaftliche Transportkalkulation unter Einbezug von Hin-/Rücklauf und möglichen Leerfahrten; proaktive Termin- und Risikoplanung.',
        'Operative Lösungssteuerung bei Störungen, z. B. Umladung, Fahrerwechsel oder Doppelbesatzung; Auftragsbearbeitung im Komalog ERP-System.',
      ],
    },
  ],
  processFlow: {
    title: 'Von der Prozessausführung zur digitalen Lösung',
    intro:
      'Mein Fokus liegt darauf, operative Abläufe zu verstehen, Verbesserungspotenziale zu erkennen und fachliche Anforderungen für digitale Lösungen zu strukturieren.',
    quote: 'Effiziente Prozesse entstehen, wenn Fachwissen, Daten und Technologie zusammenkommen.',
    steps: [
      { label: 'Prozesse verstehen', icon: 'truck' },
      { label: 'Schwachstellen erkennen', icon: 'search' },
      { label: 'Prozess analysieren', icon: 'git-branch' },
      { label: 'Anforderungen strukturieren', icon: 'clipboard-list' },
      { label: 'Digitale Lösung konzipieren', icon: 'laptop' },
      { label: 'Umsetzung mit IT begleiten', icon: 'users' },
    ],
  },
  education: [
    {
      period: '10/2022 – 06/2026',
      title: 'Bachelor Businessinformatik',
      institution: 'Wirtschaftsakademie „D. A. Tsenov“',
      location: 'Svishtov, Bulgarien',
      details: 'Fernstudium · 8 Semester · 230 Credits',
      language: 'Unterrichts- und Prüfungssprache: Bulgarisch',
      degreeResult: 'Staatsexamen: Sehr gut (5)',
      overallGrade: 'Gesamtnotendurchschnitt: 5,56',
      gradeSystemNote: '(bulgarisches Notensystem)',
      focusLine:
        'Fachliche Entwicklung mit Fokus auf die Verbindung von Geschäftsprozessen, Informationssystemen, Digitalisierung und Automatisierung.',
    },
    {
      period: '10/2015 – 02/2018',
      title: 'Kauffrau für Spedition und Logistikdienstleistung',
      institution: 'Sotraprint Spedition und Lagerlogistik GmbH / IHK Nürnberg',
      qualification: 'IHK-Berufsabschluss',
      compact: true,
    },
  ],
  skills: {
    title: 'IT & Systemkenntnisse',
    groups: [
      {
        title: 'Daten & SQL',
        icon: 'database',
        lines: [
          'SQL – praktisch eingesetzt',
          'Datenabfragen und -bearbeitung in Studium und Projektkontext',
        ],
      },
      {
        title: 'Automatisierung & KI',
        icon: 'workflow',
        lines: [
          'Grundkenntnisse:',
          'n8n',
          'Docker',
          'lokale LLM-Nutzung mit Ollama / Mistral',
        ],
      },
      {
        title: 'Programmiergrundlagen',
        icon: 'code2',
        lines: ['Java', 'Spring Boot', 'JavaScript'],
      },
      {
        title: 'Business-Systeme & Microsoft',
        icon: 'monitor-cog',
        lines: [
          'ERP:',
          'Komalog',
          'Winkarat',
          'Microsoft:',
          'Excel',
          'Word',
          'Outlook',
        ],
      },
    ],
    languagesTitle: 'Sprachen',
    languages: [
      { language: 'Bulgarisch', level: 'Muttersprache' },
      { language: 'Deutsch', level: 'B2/C1' },
      { language: 'Englisch', level: 'B1' },
      { language: 'Russisch', level: 'A2' },
    ],
  },
  contact: {
    title: 'Kontakt',
    intro: 'Interesse an einem Austausch? Ich freue mich über Ihre Kontaktaufnahme.',
    location: 'München / Umgebung',
    email: '[E-Mail eintragen]',
    phone: '[Telefonnummer eintragen]',
    linkedin: '[LinkedIn-Profil eintragen]',
  },
  footer: {
    name: 'Sylvi Stoanova',
    subtitle: 'Supply Chain Process & Digitalization',
    line: 'Prozesse verstehen · Potenziale erkennen · digitale Lösungen mitgestalten.',
  },
}
