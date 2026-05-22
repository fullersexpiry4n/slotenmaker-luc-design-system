'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <form
      className="contact-form"
      id="contactForm"
      noValidate
      onSubmit={(e) => {
        e.preventDefault()
        setSubmitted(true)
      }}
    >
      {!submitted ? (
        <div className="form-body">
          <div className="field">
            <label className="field-label" htmlFor="name">Naam</label>
            <input className="field-input" id="name" name="name" type="text" autoComplete="name" placeholder="Voornaam en familienaam" required />
          </div>
          <div className="field">
            <label className="field-label" htmlFor="phone">Telefoon</label>
            <input className="field-input" id="phone" name="phone" type="tel" autoComplete="tel" placeholder="0470 …" required />
          </div>
          <div className="field">
            <label className="field-label" htmlFor="question">Wat is er aan de hand?</label>
            <input className="field-input" id="question" name="question" type="text" autoComplete="off" placeholder="Buitengesloten / slot kapot / sleutel kopiëren" required />
          </div>
          <div className="field">
            <label className="field-label" htmlFor="address">Adres</label>
            <input className="field-input" id="address" name="address" type="text" autoComplete="street-address" placeholder="Straat, nr, gemeente" />
          </div>
          <button type="submit" className="btn btn--primary btn--full">
            Stuur bericht
          </button>
          <p className="form-hint">Ik bel terug binnen het uur.</p>
        </div>
      ) : (
        <div className="form-success" aria-live="polite">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#3D7A4E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="10" />
            <path d="m9 12 2 2 4-4" />
          </svg>
          <h3>Bedankt. Ik bel je terug.</h3>
          <p>
            Binnen het uur op je telefoon. Spoed? Bel direct:{' '}
            <a href="tel:+32470123456">0470 12 34 56</a>.
          </p>
        </div>
      )}
    </form>
  )
}
