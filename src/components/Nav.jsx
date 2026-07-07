import site from '../content/site.json'

const LINKS = [
  ['What I do', '#capabilities'],
  ['AI Triage', '#triage'],
  ['Experience', '#experience'],
  ['Skills', '#skills'],
]

export default function Nav() {
  return (
    <nav className="nav">
      <a href="#top" className="nav-logo">
        {site.nav.title}
        <span className="nav-logo-sub"> · {site.nav.subtitle}</span>
      </a>
      <div className="nav-links">
        {LINKS.map(([label, href]) => (
          <a key={href} href={href}>
            {label}
          </a>
        ))}
        <a className="nav-cta" href="#contact">
          Contact <span aria-hidden>→</span>
        </a>
      </div>
    </nav>
  )
}
