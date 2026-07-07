import Reveal from './Reveal.jsx'
import site from '../content/site.json'

export default function Experience() {
  const { eyebrow, title, titleAccent, subtitle, jobs } = site.experience

  return (
    <section className="experience section-pad" id="experience">
      <div className="container">
        <Reveal>
          <span className="section-eyebrow">{eyebrow}</span>
          <h2 className="section-title">
            {title} <span className="grad-text">{titleAccent}</span>
          </h2>
          <p className="section-sub">{subtitle}</p>
        </Reveal>

        <div className="timeline">
          {jobs.map((j, i) => (
            <Reveal key={j.company + j.role} delay={i * 0.05} className="tl-item">
              <span className="tl-dot" aria-hidden />
              <div className="tl-header">
                <h3 className="tl-role">
                  {j.role} <span className="tl-company">· {j.company}</span>
                </h3>
                <span className="tl-dates">{j.dates}</span>
              </div>
              <div className="tl-loc">{j.loc}</div>
              {j.bullets.length > 0 && (
                <ul>
                  {j.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
