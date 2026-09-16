import { Header } from './sections/Header'
import { Hero } from './sections/Hero'
import { Competencies } from './sections/Competencies'
import { CareerJourney } from './sections/CareerJourney'
import { Experience } from './sections/Experience'
import { Education } from './sections/Education'
import { Skills } from './sections/Skills'
import { Contact } from './sections/Contact'
import { PrintResume } from './print/PrintResume'

function App() {
  return (
    <>
      <div className="app-shell screen-resume">
        <Header />
        <main id="main-content" className="main-content" aria-label="Lebenslauf Inhalte">
          <Hero />
          <Competencies />
          <CareerJourney />
          <Experience />
          <Education />
          <Skills />
        </main>
        <Contact />
      </div>
      <PrintResume />
    </>
  )
}

export default App
