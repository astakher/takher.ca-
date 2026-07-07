import Reveal from './Reveal.jsx'
import site from '../content/site.json'

export default function Skills() {
  const { eyebrow, title, titleAccent, groups } = site.skills

  return (
    <section className="skills section-pad" id="skills">
      <div className="container">
        <Reveal>
          <span className="section-eyebrow">{eyebrow}</span>
          <h2 className="section-title">
            {title} <span className="grad-text">{titleAccent}</span>
          </h2>
        </Reveal>

        <div className="skills-groups">
          {groups.map((g, i) => (
            <Reveal key={g.name} delay={i * 0.05} className="skill-group">
              <h3>{g.name}</h3>
              <div className="skill-chips">
                {g.items.map((s) => (
                  <span key={s}>{s}</span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
