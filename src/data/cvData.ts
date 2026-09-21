import type { CvData } from '../types/cv'

const profileImagePath = `${import.meta.env.BASE_URL}images/profile.jpg`
export const cvData: CvData = {
  person: {
    fullName: 'Sylvi Stoanova',
    headline: 'Supply Chain Process & Digitalization',
    subline:
      'Operative Logistik · Prozessanalyse · Digitalisierung & Automatisierung · Business-IT-Schnittstelle',
    profileText:
      'Ich verbinde fundiertes operatives Logistikverständnis mit einer digitalen und prozessorientierten Perspektive. Ich analysiere Abläufe, erkenne Digitalisierungs- und Automatisierungspotenziale und strukturiere fachliche Anforderungen für digitale Lösungen.',
    location: 'Galgengartenstr. 18, 91126 Schwabach',
    emailLabel: 'sylvi.stoanova@gmail.com',
    phoneLabel: '+49 157 33161038',
    photoPath: profileImagePath,
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
      title: 'Digitalisierung & Prozessentwicklung',
      icon: 'workflow',
      lines: [
        'Digitalisierungspotenziale erkennen',
        'Fachliche Anforderungen strukturieren',
        'Digitale Lösungskonzepte',
      ],
    },
  ],
  careerJourney: [
    {
      id: 'operative-logistik',
      number: '01',
      title: 'Operative Logistik',
      details: [
        'Internationale Disposition',
        'End-to-End-Transportsteuerung',
        'Transportkalkulation & Frachtraumbeschaffung',
      ],
      reference: 'Sotraprint',
      icon: 'truck',
    },
    {
      id: 'business-kundenprozesse',
      number: '02',
      title: 'Business & Kundenprozesse',
      details: ['Automotive / B2B', 'Internationale Kundenbetreuung', 'Angebots- & Prozesskoordination'],
      reference: 'Gentner · Aptiv',
      icon: 'users',
    },
    {
      id: 'businessinformatik',
      number: '03',
      title: 'Businessinformatik',
      details: ['Wirtschaft & IT', 'Informationssysteme', 'Digitale Geschäftsprozesse'],
      reference: 'Bachelor Businessinformatik',
      icon: 'graduation-cap',
    },
    {
      id: 'prozessdigitalisierung',
      number: '04',
      title: 'Prozessdigitalisierung',
      details: ['Prozessanalyse', 'Fachliche Anforderungen', 'Digitale Lösungskonzeption'],
      reference: 'Polizeipräsidium Mittelfranken',
      icon: 'workflow',
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
      period: '11/2021 – 06/2022',
      role: 'Speditionskauffrau – administrative Logistik',
      company: 'Baliu Trans, Schwarzenbruck',
      details: [
        'Administrative Begleitung von Transport- und Logistikprozessen im Umfeld der Zusammenarbeit mit DHL; operative Disposition durch DHL.',
        'Erfassung, Prüfung und Aufbereitung von Mitarbeiterstunden sowie Pflege und Kontrolle operativer Transportdaten.',
        'Kaufmännische Berechnungen, Berichte und administrative Auswertungen mit Microsoft Excel, Word und Outlook.',
      ],
    },
    {
      organization: 'Aptiv',
      period: '02/2021 – 10/2021',
      role: 'Sachbearbeiterin Customer Service',
      company: 'Aptiv, Nürnberg',
      contextLine: 'Einsatz über I. K. Hofmann Personal.',
      details: [
        'Betreuung internationaler Kunden im Customer Service.',
        'Erstellung von Angeboten für Serviceanfragen und Ersatzteile.',
        'Erstellung und Sicherstellung der Vollständigkeit von Serviceangebotskalkulationen.',
        'Abstimmung von Terminen für Servicetätigkeiten mit Kunden.',
        'Überwachung und Einhaltung vereinbarter Kundentermine.',
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
        'Auftragsanlage im ERP-System Wincarat sowie Abgleich bestehender und neuer Vertrags-/Auftragskonditionen zur Erkennung von Änderungen und Abstimmungsbedarf.',
        'Bearbeitung von Mengen-/Preisdifferenzen, Rechnungsprüfung und Gutschriftverfahren sowie quartalsweise Auftragsauswertungen und Präsentationen.',
      ],
    },
    {
      organization: 'Sotraprint Spedition und Lagerlogistik GmbH',
      period: '10/2015 – 02/2019',
      role: 'Kauffrau für Spedition und Logistikdienstleistung – Internationale Disposition',
      company: 'Sotraprint Spedition und Lagerlogistik GmbH, Wendelstein',
      contextLine: '10/2015–02/2018 Ausbildung; anschließend internationale Disposition.',
      highlights: ['bis zu ~100 Transporte / 2–3 Wochen', '~20 Schweiz-Verkehre / Woche'],
      details: [
        'Eigenverantwortliche End-to-End-Steuerung nationaler und internationaler Transporte – von Frachtraumbeschaffung und Kalkulation über Beauftragung und Terminsteuerung bis zu Kundenkommunikation und Problemlösung.',
        'Planung und Überwachung von Projekt-, Sonder- und zeitkritischen Transporten nach Deutschland, in die Schweiz und nach Großbritannien.',
        'Steuerung größerer Transportprojekte mit bis zu ca. 100 Transporten innerhalb von 2–3 Wochen sowie Schweiz-Verkehren mit ca. 20 Transporten pro Woche.',
        'Einkauf von Frachtraum über Transportbörsen (u. a. TIMOCOM) und Auswahl geeigneter Frachtführer nach Preis, Kapazität, Laufzeit und Zuverlässigkeit.',
        'Wirtschaftliche Transportkalkulation unter Einbezug von Hin-/Rücklauf und möglichen Leerfahrten; proaktive Termin- und Risikoplanung.',
        'Operative Lösungssteuerung bei Störungen, z. B. Umladung, Fahrerwechsel oder Doppelbesatzung; Auftragsbearbeitung im Komalog Transport Management System (TMS).',
      ],
    },
    {
      organization: 'Sotraprint Spedition und Lagerlogistik GmbH',
      period: '08/2015 – 10/2015',
      role: 'Praktikum als Speditionskauffrau',
      company: 'Sotraprint Spedition und Lagerlogistik GmbH, Wendelstein',
      compact: true,
      details: [],
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
      title: 'Bachelor – Businessinformatik (Wirtschaft & IT)',
      institution: 'Wirtschaftsakademie „D. A. Tsenov“, Svishtov, Bulgarien',
      details: 'Fernstudium · 8 Semester · 230 Credits · Staatsexamen: Sehr gut (5)',
      language: 'Unterrichts- und Prüfungssprache: Bulgarisch',
      overallGrade: 'Gesamtnotendurchschnitt: 5,56',
      gradeSystemNote: '(bulgarisches Notensystem)',
      focusLine: 'Schwerpunkte: Analyse betrieblicher Informationsbedarfe · Informationssysteme · digitale Lösungen für Geschäftsprozesse',
    },
    {
      period: '10/2015 – 02/2018',
      title: 'Kauffrau für Spedition und Logistikdienstleistung',
      institution: 'Sotraprint Spedition und Lagerlogistik GmbH / IHK Nürnberg',
      qualification: 'IHK-Berufsabschluss',
      compact: true,
    },
  ],
  additionalStations: {
    title: 'Weitere Stationen',
    entries: [
      {
        period: '01/2015 – 07/2015',
        title: 'Promoterin (Minijob)',
        institution: 'Bellissima, Nürnberg',
      },
      {
        period: '10/2014 – 01/2015',
        title: 'Sprachkurs',
        institution: 'Friedrich-Alexander-Universität Erlangen-Nürnberg',
      },
      {
        period: '09/2013 – 05/2014',
        title: 'Sprachkurs',
        institution: 'AFI-Akademie, Schwabach',
      },
      {
        period: '09/2009 – 06/2013',
        title: 'Fremdsprachengymnasium „Yoan Eksarh“',
        institution: 'Bulgarien',
      },
    ],
  },
  skills: {
    title: 'IT & Systemkenntnisse',
    groups: [
      {
        title: 'Datenbanken & praktische Anwendung',
        icon: 'database',
        lines: [
          'PostgreSQL',
          'SQL – praktische Anwendung in einem mit Spring Boot umgesetzten Projekt',
          'Microsoft Access – Anwendung in Hochschulprojekten',
        ],
      },
      {
        title: 'Programmierung & Web – Grundkenntnisse',
        icon: 'code2',
        lines: ['Spring Boot', 'Java', 'JavaScript', 'HTML', 'CSS'],
      },
      {
        title: 'AI Agents & Workflow Automation',
        icon: 'workflow',
        lines: ['n8n', 'LangChain Agents & Tools', 'Human-in-the-Loop'],
      },
      {
        title: 'Logistiksysteme & Microsoft',
        icon: 'monitor-cog',
        lines: [
          'Komalog – Transport Management System (TMS)',
          'Wincarat – ERP-System',
          'Microsoft Excel',
          'Microsoft Word',
          'Microsoft Outlook',
        ],
      },
    ],
    languagesTitle: 'Sprachen',
    languages: [
      { language: 'Deutsch', level: 'C1' },
      { language: 'Bulgarisch', level: 'Muttersprache' },
      { language: 'Englisch', level: 'B2' },
      { language: 'Russisch', level: 'B1' },
    ],
  },
  contact: {
    title: 'Kontakt',
    intro: 'Interesse an einem Austausch? Ich freue mich über Ihre Kontaktaufnahme.',
    location: 'Galgengartenstr. 18, 91126 Schwabach',
    email: 'sylvi.stoanova@gmail.com',
    phone: '+49 157 33 161038',
  },
  footer: {
    name: 'Sylvi Stoanova',
    subtitle: 'Supply Chain Process & Digitalization',
    line: 'Prozesse verstehen · Potenziale erkennen · digitale Lösungen mitgestalten.',
  },
}
