import { MotionConfig } from 'framer-motion'
import Intro from './components/Intro.jsx'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import LogoMarquee from './components/LogoMarquee.jsx'
import Stats from './components/Stats.jsx'
import Capabilities from './components/Capabilities.jsx'
import TriageBot from './components/TriageBot.jsx'
import Experience from './components/Experience.jsx'
import Skills from './components/Skills.jsx'
import Certifications from './components/Certifications.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Intro />
      <div className="wallpaper" aria-hidden>
        <span className="w1" />
        <span className="w2" />
        <span className="w3" />
        <span className="w4" />
      </div>
      <div className="canvas">
        <Nav />
        <main>
          <Hero />
          <LogoMarquee />
          <Stats />
          <Capabilities />
          <TriageBot />
          <Experience />
          <Skills />
          <Certifications />
          <Contact />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  )
}
