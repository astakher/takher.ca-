import { useState } from 'react'
import Reveal from './Reveal.jsx'
import site from '../content/site.json'

export default function Contact() {
  const [status, setStatus] = useState('idle') // idle | sending | ok | err
  const { titlePrefix, titleAccent, subtitle, formId, linkedin, location } =
    site.contact

  async function onSubmit(e) {
    e.preventDefault()
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form))
    if (data._honey) return // bot
    setStatus('sending')
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${formId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          message: data.message,
          _subject: `takher.ca: new message from ${data.name}`,
          _template: 'table',
          _captcha: 'false',
        }),
      })
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      setStatus('ok')
      form.reset()
    } catch {
      setStatus('err')
    }
  }

  return (
    <section className="contact section-pad" id="contact">
      <div className="container">
        <Reveal>
          <h2 className="contact-title">
            {titlePrefix} <span className="grad-text">{titleAccent}</span>
          </h2>
          <p className="section-sub">{subtitle}</p>
        </Reveal>

        <Reveal delay={0.15}>
          <form className="contact-form" onSubmit={onSubmit}>
            <div className="row">
              <input
                name="name"
                type="text"
                placeholder="Your name"
                required
                maxLength="120"
                autoComplete="name"
              />
              <input
                name="email"
                type="email"
                placeholder="Your email"
                required
                maxLength="200"
                autoComplete="email"
              />
            </div>
            <textarea
              name="message"
              rows="5"
              placeholder="What would you like to talk about?"
              required
              maxLength="4000"
            />
            <input
              type="text"
              name="_honey"
              tabIndex="-1"
              autoComplete="off"
              style={{ display: 'none' }}
              aria-hidden="true"
            />
            <button
              className="btn-primary solid"
              type="submit"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? 'Sending…' : 'Send message'}
            </button>
            <div
              className={`form-status ${status === 'ok' ? 'ok' : status === 'err' ? 'err' : ''}`}
              role="status"
            >
              {status === 'ok' &&
                'Thanks, your message is on its way. I will get back to you soon.'}
              {status === 'err' &&
                'Something went wrong sending your message. Please try again, or reach me on LinkedIn.'}
            </div>
          </form>

          <div className="contact-links">
            <a href={linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href="/Aman-Takher-Resume.pdf" download>
              Download resume
            </a>
            <span>{location}</span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
