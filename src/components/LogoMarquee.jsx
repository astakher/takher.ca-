import site from '../content/site.json'

export default function LogoMarquee() {
  const { label, items } = site.marquee

  const row = (key) => (
    <div key={key} style={{ display: 'contents' }}>
      {items.map((label, i) => (
        <span key={`${key}-${i}`} className="wordmark">
          {label}
        </span>
      ))}
    </div>
  )

  return (
    <section className="marquee-section" aria-label={label}>
      <div className="marquee-label">{label}</div>
      <div className="marquee">
        <div className="marquee-track">
          {row('a')}
          {row('b')}
          {row('c')}
          {row('d')}
        </div>
      </div>
    </section>
  )
}
