import { useEffect, useState } from 'react'
import site from '../content/site.json'

const LINKS = [
  ['What I do', '#capabilities'],
  ['AI Triage', '#triage'],
  ['Experience', '#experience'],
  ['Skills', '#skills'],
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
      <a href="#top" className="nav-logo">
        {site.nav.title}
      </a>
      <div className="nav-links">
        {LINKS.map(([label, href]) => (
          <a key={href} href={href}>
            {label}
          </a>
        ))}
        {site.nav.pdfEditorUrl && (
          <a className="nav-cta nav-cta-alt" href={site.nav.pdfEditorUrl}>
            PDF Editor
          </a>
        )}
        <a className="nav-cta" href="#contact">
          Contact <span aria-hidden>→</span>
        </a>
      </div>
    </nav>
  )
}
