import Reveal from './Reveal.jsx'
import site from '../content/site.json'

export default function Capabilities() {
  const { eyebrow, title, titleAccent, subtitle, cards } = site.capabilities

  return (
    <section className="capabilities section-pad" id="capabilities">
      <div className="container">
        <Reveal>
          <span className="section-eyebrow">{eyebrow}</span>
          <h2 className="section-title">
            {title} <span className="grad-text">{titleAccent}</span>
          </h2>
          <p className="section-sub">{subtitle}</p>
        </Reveal>

        <div className="bento">
          {cards.map((c, i) => (
            <Reveal
              key={c.title}
              delay={i * 0.07}
              className={`bento-card${c.wide ? ' wide' : ''}`}
            >
              <div className="bento-icon" aria-hidden>
                {c.icon}
              </div>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
              <div className="bento-tags">
                {c.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
