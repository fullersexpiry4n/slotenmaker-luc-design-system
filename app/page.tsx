import Image from 'next/image'
import ContactForm from '@/components/ContactForm'
import SiteScripts from '@/components/SiteScripts'

const PhoneIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.33 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
  </svg>
)

const Star = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="#C8953A" aria-hidden="true">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
)

const Stars = () => (
  <div className="testimonial__stars" aria-label="5 sterren">
    {[0,1,2,3,4].map(i => <Star key={i} />)}
  </div>
)

export default function Home() {
  return (
    <>
      <a href="#main-content" className="skip-link">Ga naar inhoud</a>

      {/* MOBILE STICKY CALL BAR */}
      <div className="sticky-bar" id="stickyBar">
        <a href="tel:+32470123456" className="sticky-call">
          <PhoneIcon size={20} />
          Bel Luc · 0470 12 34 56
        </a>
      </div>

      {/* HEADER */}
      <header className="site-header" id="siteHeader">
        <div className="container header-inner">
          <a href="#home" className="logo" aria-label="Slotenmaker Luc — naar homepagina">
            <span className="logo__name">Luc</span>
            <span className="logo__mark">Slotenmaker</span>
          </a>
          <nav className="nav" aria-label="Hoofdnavigatie">
            <a href="#diensten" className="nav-link">Diensten</a>
            <a href="#tarieven" className="nav-link">Tarieven</a>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>
          <a href="tel:+32470123456" className="btn btn--accent header-cta" aria-label="Bel Luc op 0470 12 34 56">
            <PhoneIcon size={16} />
            <span className="cta-text">0470 12 34 56</span>
          </a>
          <button className="hamburger" id="hamburger" aria-label="Menu openen" aria-expanded="false" aria-controls="mobileMenu">
            <span /><span /><span />
          </button>
        </div>
      </header>

      {/* MOBILE MENU */}
      <div className="mobile-menu" id="mobileMenu" aria-hidden="true">
        <nav aria-label="Mobiele navigatie">
          <a href="#diensten" className="mobile-link">Diensten</a>
          <a href="#tarieven" className="mobile-link">Tarieven</a>
          <a href="#contact" className="mobile-link">Contact</a>
        </nav>
        <a href="tel:+32470123456" className="btn btn--accent mobile-call">
          <PhoneIcon size={20} />
          Bel Luc · 0470 12 34 56
        </a>
      </div>

      <main id="main-content">

        {/* HERO */}
        <section className="hero" id="home">
          <div className="container hero-grid">
            <div className="hero-copy reveal">
              <span className="overline">Slotenmaker · Regio Gent · 24/7</span>
              <h1 className="hero-title">
                <span className="line-wrap"><span className="line">Buitengesloten?</span></span>
                <span className="line-wrap"><span className="line">Bel Luc.</span></span>
              </h1>
              <p className="hero-lead">Binnen 30 minuten sta ik voor je deur. Vast tarief, geen voorrijkost, geen verrassingen.</p>
              <div className="hero-cta">
                <a href="tel:+32470123456" className="btn btn--accent btn--lg btn--shiny">
                  <PhoneIcon size={20} />
                  Bel nu · 0470 12 34 56
                </a>
                <a href="#diensten" className="btn btn--ghost">
                  Bekijk diensten
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
              <div className="hero-stats">
                <div className="stat">
                  <div className="stat-num" data-target="30">0</div>
                  <div className="stat-unit">min</div>
                  <div className="stat-label">Gemiddelde aanrijtijd</div>
                </div>
                <div className="stat-divider" />
                <div className="stat">
                  <div className="stat-num" data-target="5">0</div>
                  <div className="stat-unit">jaar</div>
                  <div className="stat-label">Garantie op cilinders</div>
                </div>
                <div className="stat-divider" />
                <div className="stat">
                  <div className="stat-prefix">€</div>
                  <div className="stat-num" data-target="85">0</div>
                  <div className="stat-label">Vast tarief · geen voorrijkost</div>
                </div>
              </div>
            </div>
            <div className="hero-visual reveal reveal--right">
              <div className="hero-photo">
                <Image
                  src="/assets/luc.png"
                  alt="Luc — slotenmaker aan het werk in Gent"
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'center top' }}
                  priority
                />
                <div className="hero-badge">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                  </svg>
                  <div>
                    <div className="badge-title">Erkend vakman</div>
                    <div className="badge-sub">Verzekerd via AXA · Sinds 2012</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* URGENCY BAND */}
        <div className="band">
          <div className="container band-inner">
            <div className="band-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
              <span>24/7 bereikbaar</span>
            </div>
            <div className="band-dot" aria-hidden="true" />
            <div className="band-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
              <span>Binnen 30 min ter plaatse</span>
            </div>
            <div className="band-dot" aria-hidden="true" />
            <div className="band-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
              <span>Vast tarief — geen verrassingen</span>
            </div>
            <div className="band-dot" aria-hidden="true" />
            <a href="tel:+32470123456" className="band-cta">0470 12 34 56</a>
          </div>
        </div>

        {/* DIENSTEN */}
        <section className="section" id="diensten">
          <div className="container">
            <div className="section-header reveal">
              <span className="overline overline--brass">Wat ik doe</span>
              <h2 className="section-title">Vier diensten,<br />één persoon.</h2>
              <p className="section-lead">Geen callcenter. Ik neem zelf op, ik kom zelf langs.</p>
            </div>
            <div className="services-grid">

              <article className="service-card reveal">
                <div className="service-card__icon service-card__icon--alert">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                </div>
                <div className="service-card__meta">
                  <span className="overline">Spoedhulp · 24/7</span>
                  <h3>Buitensluiting openen</h3>
                  <p>Sleutel binnen, deur dichtgevallen, slot kapot. Ik open zonder boren of breken — in 9 van de 10 gevallen blijft je slot bruikbaar.</p>
                  <ul className="check-list" aria-label="Inbegrepen">
                    <li>Binnen 30 min ter plaatse</li>
                    <li>Erkend bij verzekeringen</li>
                    <li>Ook &apos;s nachts en in het weekend</li>
                  </ul>
                </div>
                <div className="service-card__price">
                  <span className="price-amount">€85</span>
                  <span className="price-note">vast tarief, dag en nacht</span>
                </div>
              </article>

              <article className="service-card reveal reveal--delay1">
                <div className="service-card__icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="7.5" cy="15.5" r="5.5" /><path d="m21 2-9.6 9.6" /><path d="m15.5 7.5 3 3L22 7l-3-3" /></svg>
                </div>
                <div className="service-card__meta">
                  <span className="overline">In de werkplaats</span>
                  <h3>Sleutel kopiëren</h3>
                  <p>Standaard cilindersleutels en de meeste veiligheidssleutels. Klaar in 5 minuten, geen afspraak nodig.</p>
                  <ul className="check-list" aria-label="Inbegrepen">
                    <li>Klaar in 5 minuten</li>
                    <li>Standaard, dimple, veiligheid, SKG</li>
                    <li>Geen afspraak nodig</li>
                  </ul>
                </div>
                <div className="service-card__price">
                  <span className="price-amount">€4</span>
                  <span className="price-note">per stuk, vanaf</span>
                </div>
              </article>

              <article className="service-card reveal reveal--delay2">
                <div className="service-card__icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" /></svg>
                </div>
                <div className="service-card__meta">
                  <span className="overline">Na een inbraak</span>
                  <h3>Slot vervangen</h3>
                  <p>Nieuwe SKG-cilinder, ingebouwd en getest. 5 jaar garantie. Ik leg je uit waarom je vorige slot kwetsbaar was.</p>
                  <ul className="check-list" aria-label="Inbegrepen">
                    <li>SKG** anti-pick, anti-kerntrek</li>
                    <li>Klaar in 45 minuten</li>
                    <li>5 jaar garantie</li>
                  </ul>
                </div>
                <div className="service-card__price">
                  <span className="price-amount">€145</span>
                  <span className="price-note">incl. cilinder + plaatsing</span>
                </div>
              </article>

              <article className="service-card reveal reveal--delay3">
                <div className="service-card__icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg>
                </div>
                <div className="service-card__meta">
                  <span className="overline">Advies aan huis</span>
                  <h3>Beveiligingscheck</h3>
                  <p>Ik kom langs, kijk je deuren en ramen na, en schrijf op wat eerst aandacht verdient. Geen verkooppraatje, gewoon eerlijk.</p>
                  <ul className="check-list" aria-label="Inbegrepen">
                    <li>45 minuten ter plaatse</li>
                    <li>Schriftelijk verslag binnen 2 dagen</li>
                    <li>Verrekend bij bestelling</li>
                  </ul>
                </div>
                <div className="service-card__price">
                  <span className="price-amount">€50</span>
                  <span className="price-note">verrekend als je een slot bestelt</span>
                </div>
              </article>

            </div>
          </div>
        </section>

        {/* HOE HET WERKT */}
        <section className="section section--steps" aria-labelledby="steps-title">
          <div className="container">
            <div className="section-header reveal" style={{ maxWidth: 500, marginInline: 'auto', textAlign: 'center' }}>
              <span className="overline overline--brass">Hoe het werkt</span>
              <h2 className="section-title" id="steps-title">Klaar in drie stappen.</h2>
            </div>
            <div className="steps-grid">
              <div className="step reveal">
                <div className="step__num" aria-hidden="true">1</div>
                <h3 className="step__title">Bel Luc</h3>
                <p className="step__body">Eén telefoontje. Ik neem zelf op, geef je een eerlijke aankomsttijd en de prijs — voor we vertrekken.</p>
              </div>
              <div className="step-arrow" aria-hidden="true">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </div>
              <div className="step reveal reveal--delay1">
                <div className="step__num" aria-hidden="true">2</div>
                <h3 className="step__title">Ik kom langs</h3>
                <p className="step__body">Binnen 30 minuten sta ik voor je deur — met het juiste materiaal. Geen tweede rit nodig.</p>
              </div>
              <div className="step-arrow" aria-hidden="true">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </div>
              <div className="step reveal reveal--delay2">
                <div className="step__num" aria-hidden="true">3</div>
                <h3 className="step__title">Probleem opgelost</h3>
                <p className="step__body">Je betaalt de prijs die ik vooraf noemde. Factuur op de spot. Klaar.</p>
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="section section--ink" aria-labelledby="testimonials-title">
          <div className="container">
            <div className="section-header reveal">
              <span className="overline overline--brass">Wat klanten zeggen</span>
              <h2 className="section-title section-title--light" id="testimonials-title">Echte mensen, echte verhalen.</h2>
            </div>
            <div className="testimonials-grid">

              <blockquote className="testimonial reveal">
                <Stars />
                <p>&ldquo;Luc heeft een hart voor zijn klanten in alle opzichten. Rijkt een gamma uitgebalanceerde oplossingen aan waaruit de klant kan kiezen. En is steeds goedgezind en beschikbaar.&rdquo;</p>
                <footer className="testimonial__author">
                  <div className="testimonial__avatar" aria-hidden="true">W</div>
                  <div>
                    <cite className="testimonial__name">Willy</cite>
                    <span className="testimonial__loc">Kampenhout · januari 2026</span>
                  </div>
                </footer>
              </blockquote>

              <blockquote className="testimonial reveal reveal--delay1">
                <Stars />
                <p>&ldquo;Zeer vriendelijke handelaar! Zeer klantvriendelijk en behulpzaam. We hadden een probleempje met een slot maar hij heeft dit netjes en correct opgelost. Een aanrader!&rdquo;</p>
                <footer className="testimonial__author">
                  <div className="testimonial__avatar" aria-hidden="true">I</div>
                  <div>
                    <cite className="testimonial__name">Isabelle</cite>
                    <span className="testimonial__loc">Kampenhout · april 2026</span>
                  </div>
                </footer>
              </blockquote>

              <blockquote className="testimonial reveal reveal--delay2">
                <Stars />
                <p>&ldquo;Zeer vriendelijk en klantgericht. Luisterd naar wat je nodig hebt en geeft je het juiste advies en uitleg!&rdquo;</p>
                <footer className="testimonial__author">
                  <div className="testimonial__avatar" aria-hidden="true">E</div>
                  <div>
                    <cite className="testimonial__name">Emmanuel</cite>
                    <span className="testimonial__loc">Kampenhout · maart 2026</span>
                  </div>
                </footer>
              </blockquote>

            </div>
          </div>
        </section>

        {/* TARIEVEN */}
        <section className="section" id="tarieven" aria-labelledby="tarieven-title">
          <div className="container">
            <div className="section-header reveal">
              <span className="overline overline--brass">Tarieven</span>
              <h2 className="section-title" id="tarieven-title">Eén prijs. Vooraf. Altijd.</h2>
              <p className="section-lead">Geen voorrijkost. Geen weekend-toeslag. Je krijgt de prijs voor we starten.</p>
            </div>

            <div className="pricing-card reveal">
              <table className="price-table" aria-label="Prijsoverzicht">
                <thead>
                  <tr>
                    <th scope="col">Dienst</th>
                    <th scope="col">Prijs incl. BTW</th>
                    <th scope="col" className="hide-sm">Detail</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="price-row--featured">
                    <td>
                      <div className="price-label">Buitensluiting openen</div>
                      <div className="price-tag price-tag--alert">Spoed 24/7</div>
                    </td>
                    <td className="price-cell">€85</td>
                    <td className="hide-sm price-detail">Dag en nacht, ook zondag</td>
                  </tr>
                  <tr>
                    <td>Sleutel kopiëren — standaard</td>
                    <td className="price-cell">€4</td>
                    <td className="hide-sm price-detail">Per stuk · klaar in 5 min</td>
                  </tr>
                  <tr>
                    <td>Sleutel kopiëren — veiligheid</td>
                    <td className="price-cell">€18</td>
                    <td className="hide-sm price-detail">Met kaart, dimple of SKG</td>
                  </tr>
                  <tr>
                    <td>Slot vervangen na inbraak</td>
                    <td className="price-cell">€145</td>
                    <td className="hide-sm price-detail">Inclusief SKG**-cilinder + plaatsing</td>
                  </tr>
                  <tr>
                    <td>Slot upgraden (anti-kerntrek)</td>
                    <td className="price-cell">€175</td>
                    <td className="hide-sm price-detail">Inclusief cilinder + beslag</td>
                  </tr>
                  <tr>
                    <td>Beveiligingscheck aan huis</td>
                    <td className="price-cell">€50</td>
                    <td className="hide-sm price-detail">45 min · verrekend bij bestelling</td>
                  </tr>
                </tbody>
              </table>
              <p className="price-footnote">Prijzen incl. BTW. Geen voorrijkost binnen 20 km van Gent. Daarbuiten €0,40/km.</p>
            </div>

            <div className="faq reveal" aria-label="Veelgestelde vragen">
              <h3 className="faq-title">Vragen die ik vaak krijg</h3>
              <details className="faq-item" open>
                <summary>Waarom geen voorrijkost?</summary>
                <p>Omdat ik vind dat je niet moet betalen voor het feit dat ik in mijn bestelwagen zit. De prijs op de site is de prijs — niets meer.</p>
              </details>
              <details className="faq-item">
                <summary>Krijg ik een factuur voor de verzekering?</summary>
                <p>Altijd. Met BTW-nummer, omschrijving en datum. Veel verzekeraars betalen buitensluitingshulp terug — vraag het na bij jouw makelaar.</p>
              </details>
              <details className="faq-item">
                <summary>Hoe snel ben je er echt?</summary>
                <p>Binnen de stad Gent: gemiddeld 22 minuten. Randgemeenten: 25–35 minuten. Ik geef bij het opnemen altijd een eerlijke schatting.</p>
              </details>
              <details className="faq-item">
                <summary>Werk je ook voor handelszaken en syndici?</summary>
                <p>Ja. Voor sleutelsystemen met meer dan 10 cilinders of huurpand-rotaties krijg je een offerte op maat. Bel me en we maken een afspraak.</p>
              </details>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="section section--contact" id="contact" aria-labelledby="contact-title">
          <div className="container contact-grid">
            <div className="contact-info reveal">
              <span className="overline overline--brass">Direct contact</span>
              <h2 className="section-title" id="contact-title">Vraag me iets.</h2>
              <p className="contact-lead">Bel me direct, of stuur een bericht. Ik bel terug binnen het uur.</p>
              <ul className="contact-list" aria-label="Contactgegevens">
                <li>
                  <span className="contact-icon" aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.33 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" /></svg>
                  </span>
                  <div>
                    <span className="contact-label">Telefoon</span>
                    <a href="tel:+32470123456" className="contact-value">0470 12 34 56</a>
                  </div>
                </li>
                <li>
                  <span className="contact-icon" aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 5L2 7" /></svg>
                  </span>
                  <div>
                    <span className="contact-label">E-mail</span>
                    <a href="mailto:luc@slotenmakerluc.be" className="contact-value">luc@slotenmakerluc.be</a>
                  </div>
                </li>
                <li>
                  <span className="contact-icon" aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                  </span>
                  <div>
                    <span className="contact-label">Bereikbaar</span>
                    <span className="contact-value">Ma–za, 7u–22u · spoed ook &apos;s nachts</span>
                  </div>
                </li>
                <li>
                  <span className="contact-icon" aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                  </span>
                  <div>
                    <span className="contact-label">Werkgebied</span>
                    <span className="contact-value">Gent en regio · 20 km gratis</span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="contact-form-wrap reveal reveal--right">
              <ContactForm />
            </div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="site-footer" aria-label="Voettekst">
        <div className="container footer-inner">
          <div className="footer-brand">
            <div className="logo logo--light">
              <span className="logo__name">Luc</span>
              <span className="logo__mark">Slotenmaker</span>
            </div>
            <p className="footer-tagline">Eén persoon, één telefoonnummer.<br />Sinds 2012 in en rond Gent.</p>
          </div>
          <div className="footer-col">
            <h3 className="footer-heading">Contact</h3>
            <a href="tel:+32470123456">0470 12 34 56</a>
            <a href="mailto:luc@slotenmakerluc.be">luc@slotenmakerluc.be</a>
          </div>
          <div className="footer-col">
            <h3 className="footer-heading">Bereikbaar</h3>
            <span>Ma–za · 7u–22u</span>
            <span>Spoed · 24/7</span>
          </div>
          <div className="footer-col">
            <h3 className="footer-heading">Administratief</h3>
            <span>BTW BE 0712.345.678</span>
            <span>Verzekerd via AXA</span>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© 2026 Luc — Slotenmaker · Gent</span>
          <div className="footer-links">
            <a href="#">Privacy</a>
            <a href="#">Algemene voorwaarden</a>
          </div>
        </div>
      </footer>

      <SiteScripts />
    </>
  )
}
