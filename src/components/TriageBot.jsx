import { motion } from 'framer-motion'
import Reveal from './Reveal.jsx'
import site from '../content/site.json'

const msgAnim = (delay) => ({
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function TriageBot() {
  const { eyebrow, titleTop, titleAccent, subtitle, features } = site.triage

  return (
    <section className="triage-outer" id="triage">
      <div className="triage">
        <div className="container">
          <Reveal>
            <span className="section-eyebrow">{eyebrow}</span>
            <h2 className="section-title">
              {titleTop}
              <br />
              <span className="grad-text">{titleAccent}</span>
            </h2>
            <p className="section-sub">{subtitle}</p>
          </Reveal>

          <div className="triage-grid">
            <div className="triage-features">
              {features.map((f, i) => (
                <Reveal key={f.title} delay={0.1 + i * 0.1} className="triage-feature">
                  <h4>
                    <span className="dot" aria-hidden />
                    {f.title}
                  </h4>
                  <p>{f.text}</p>
                </Reveal>
              ))}
            </div>

            <div className="slack-wrap">
              <div className="slack-glow" aria-hidden />
              <div
                className="slack"
                role="img"
                aria-label="Mock Slack conversation showing the triage bot classifying a support ticket"
              >
                <div className="slack-header">
                  <span className="hash">#</span> support-triage
                </div>
                <div className="slack-body">
                  <motion.div className="slack-msg" {...msgAnim(0.15)}>
                    <div className="slack-avatar user" aria-hidden>
                      SR
                    </div>
                    <div>
                      <div className="slack-msg-name">Support Intake</div>
                      <div className="slack-msg-text">
                        New ticket <strong>SR-31245</strong>: “Profiling job fails
                        after upgrade. Pods restarting with <code>OOMKilled</code>{' '}
                        in the DPE namespace.”
                      </div>
                    </div>
                  </motion.div>

                  <motion.div className="slack-msg" {...msgAnim(0.45)}>
                    <div className="slack-avatar bot" aria-hidden>
                      AI
                    </div>
                    <div>
                      <div className="slack-msg-name">
                        Triage Bot <span className="badge">APP</span>
                      </div>
                      <div className="slack-msg-text">
                        Classified and routed. Here’s what I found:
                      </div>
                      <div className="slack-fields">
                        <div className="slack-field">
                          <span className="k">Category</span>
                          <span className="v">DPE · Kubernetes · Memory</span>
                        </div>
                        <div className="slack-field">
                          <span className="k">Severity</span>
                          <span className="v sev-high">High</span>
                        </div>
                        <div className="slack-field">
                          <span className="k">Similar issues</span>
                          <span className="v">
                            <span className="link">SR-28911</span>,{' '}
                            <span className="link">SR-27543</span>
                          </span>
                        </div>
                        <div className="slack-field">
                          <span className="k">Likely cause</span>
                          <span className="v">
                            Executor memory limit below the new default heap.
                            Raise limits in Helm values.
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
