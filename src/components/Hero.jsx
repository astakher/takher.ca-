import { motion, useScroll, useTransform } from 'framer-motion'
import site from '../content/site.json'

const rise = (delay) => ({
  initial: { opacity: 0, y: 26 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function Hero() {
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 520], [1, 0])
  const scale = useTransform(scrollY, [0, 520], [1, 0.95])
  const y = useTransform(scrollY, [0, 520], [0, 60])
  const { hero } = site

  return (
    <section className="hero" id="top">
      <motion.div className="hero-content" style={{ opacity, scale, y }}>
        <motion.img
          className="hero-portrait"
          src="/me.jpg"
          alt={site.intro.name}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 2.15, ease: [0.22, 1, 0.36, 1] }}
        />

        <motion.span className="hero-eyebrow" {...rise(2.25)}>
          {hero.eyebrow}
        </motion.span>

        <motion.h1 {...rise(2.35)}>
          {hero.titleTop}
          <br />
          {hero.titleMiddle} <span className="grad-text">{hero.titleAccent}</span>
        </motion.h1>

        <motion.p className="hero-sub" {...rise(2.45)}>
          {hero.subtitle}
        </motion.p>

        <motion.div className="hero-ctas" {...rise(2.55)}>
          <a className="btn-primary solid" href="#contact">
            {hero.ctaPrimary}
          </a>
          <a className="btn-ghost dark" href="/Aman-Takher-Resume.pdf" download>
            {hero.ctaSecondary} <span aria-hidden>→</span>
          </a>
        </motion.div>

        <motion.div
          className="hero-meta"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.75 }}
        >
          {hero.meta.map((m, i) => (
            <span key={m}>
              {i > 0 && <span aria-hidden>· </span>}
              {m}
            </span>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        className="hero-scroll"
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.1, duration: 1 }}
        style={{ opacity }}
      >
        ↓
      </motion.div>
    </section>
  )
}
