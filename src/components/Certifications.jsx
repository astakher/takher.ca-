import Reveal from './Reveal.jsx'
import site from '../content/site.json'

function MicrosoftLogo() {
  return (
    <svg width="40" height="40" viewBox="0 0 44 44" aria-hidden>
      <rect x="0" y="0" width="20" height="20" fill="#f25022" />
      <rect x="24" y="0" width="20" height="20" fill="#7fba00" />
      <rect x="0" y="24" width="20" height="20" fill="#00a4ef" />
      <rect x="24" y="24" width="20" height="20" fill="#ffb900" />
    </svg>
  )
}

function TerraformLogo() {
  return (
    <svg width="40" height="44" viewBox="0 0 40 44" aria-hidden>
      <g fill="#7b42bc">
        <path d="M14 3.5 25 9.8v12.6L14 16.1V3.5Z" />
        <path d="M27 11l11-6.3v12.6L27 23.6V11Z" opacity="0.85" />
        <path d="M14 19.3 25 25.6v12.6L14 31.9V19.3Z" opacity="0.7" />
      </g>
      <path d="M1 -3.9 12 2.4V15L1 8.7V-3.9Z" transform="translate(0 9)" fill="#5c33a3" />
    </svg>
  )
}

function ComptiaLogo() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" aria-hidden>
      <circle cx="22" cy="22" r="20" fill="#c8202f" />
      <text
        x="22"
        y="28.5"
        textAnchor="middle"
        fontFamily="Inter, sans-serif"
        fontWeight="800"
        fontSize="17"
        fill="#fff"
      >
        A+
      </text>
    </svg>
  )
}

const LOGOS = {
  microsoft: <MicrosoftLogo />,
  terraform: <TerraformLogo />,
  comptia: <ComptiaLogo />,
}

export default function Certifications() {
  const { eyebrow, title, titleAccent, items, education } = site.certs

  return (
    <section className="certs section-pad" id="certs">
      <div className="container">
        <Reveal>
          <span className="section-eyebrow">{eyebrow}</span>
          <h2 className="section-title">
            {title} <span className="grad-text">{titleAccent}</span>
          </h2>
        </Reveal>

        <div className="certs-grid">
          {items.map((c, i) => (
            <Reveal key={c.name} delay={i * 0.07} className="cert-card">
              <div className="cert-logo">{LOGOS[c.logo] ?? null}</div>
              <h3>{c.name}</h3>
              <p>{c.date}</p>
            </Reveal>
          ))}
        </div>

        <div className="edu-list">
          {education.map((e, i) => (
            <Reveal key={e.school} delay={i * 0.07} className="edu-item">
              <h3>{e.program}</h3>
              <p>
                {e.school} · {e.dates}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
