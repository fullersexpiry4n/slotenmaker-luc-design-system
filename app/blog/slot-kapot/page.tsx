import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

/* ── SEO checklist: Title 50–60 chars, keyword first ── */
const SITE_URL = 'https://slotenmakerluc.be'
const PAGE_URL = `${SITE_URL}/blog/slot-kapot`
const OG_IMAGE = 'https://images.pexels.com/photos/279810/pexels-photo-279810.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630&fit=crop'

/* ── Title: 53 chars ✓  Meta desc: 154 chars ✓ ── */
export const metadata: Metadata = {
  title: 'Slot Kapot? Oorzaken, Tips & Kosten · Slotenmaker Luc',
  description:
    'Slot kapot en deur dicht? Lees wat je moet doen, wat het kost en wanneer je een slotenmaker belt. Erkend slotenmaker Gent — vast tarief, geen voorrijkost.',
  keywords: [
    'slot kapot','slot kapot deur dicht','slot deur kapot','voordeur slot kapot',
    'cilinderslot kapot','cilinderslot kapot deur op slot','kapot slot openmaken',
    'slot binnendeur kapot','slot buitendeur kapot','meerpuntssluiting kapot',
    'slot reparatie','slot laten vervangen','slot vervangen','slotenmaker',
    'slot kapot huurhuis',
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: 'Slot Kapot? Oorzaken, Tips & Kosten',
    description:
      'Slot kapot en deur dicht? Lees wat je moet doen, wat het kost en wanneer je een slotenmaker belt. Erkend slotenmaker Gent — vast tarief, geen voorrijkost.',
    url: PAGE_URL,
    type: 'article',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Deurslot met sleutel' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Slot Kapot? Oorzaken, Tips & Kosten',
    description:
      'Slot kapot en deur dicht? Lees wat je moet doen, wat het kost en wanneer je een slotenmaker belt.',
    images: [OG_IMAGE],
  },
}

/* ── JSON-LD schemas ── */
const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Slot Kapot? Oorzaken, Oplossingen & Kosten in België',
  description:
    'Slot kapot en deur dicht? Lees wat je moet doen, wat het kost en wanneer je een slotenmaker belt.',
  image: OG_IMAGE,
  author: {
    '@type': 'Person',
    name: 'Luc',
    jobTitle: 'Erkend slotenmaker',
    description: '14 jaar ervaring als erkend slotenmaker in de regio Gent. SKG-gecertificeerd, verzekerd via AXA.',
  },
  publisher: {
    '@type': 'LocalBusiness',
    name: 'Slotenmaker Luc',
    '@id': SITE_URL,
    telephone: '+32470123456',
    address: { '@type': 'PostalAddress', addressLocality: 'Gent', addressCountry: 'BE' },
  },
  datePublished: '2026-01-15',
  dateModified: '2026-05-01',
  mainEntityOfPage: { '@type': 'WebPage', '@id': PAGE_URL },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Wat doe ik als mijn slot kapot is en de deur dicht zit?',
      acceptedAnswer: { '@type': 'Answer', text: 'Druk tegen de deur terwijl je de sleutel draait — een klemzittende deur door uitzetting is vaak geen kapot slot. Forceer daarna niets. Controleer andere toegangen en bel een erkende slotenmaker. Die opent schadevrij en beoordeelt ter plaatse wat nodig is.' },
    },
    {
      '@type': 'Question',
      name: 'Kan ik een kapot slot zelf repareren of vervangen?',
      acceptedAnswer: { '@type': 'Answer', text: 'Kleine problemen zoals een stijve cilinder los je soms op met grafietpoeder. Een beschadigde cilinder, afgebroken sleutel of kapot mechanisme laat je beter door een vakman vervangen. Verkeerd geplaatste sloten zijn onveilig en kunnen je woning onverzekerbaar maken.' },
    },
    {
      '@type': 'Question',
      name: 'Wat kost het om een slot te laten vervangen in België?',
      acceptedAnswer: { '@type': 'Answer', text: 'Tussen €85 (buitensluiting openen) en €175 (slot upgraden met anti-kerntrekcilinder) bij een eerlijke erkende slotenmaker. Pas op voor bedrijven die \'s nachts buitensporige tarieven vragen zonder transparante prijsopgave vooraf.' },
    },
    {
      '@type': 'Question',
      name: 'Hoe snel komt een slotenmaker bij een noodsituatie?',
      acceptedAnswer: { '@type': 'Answer', text: 'Een goede slotenmaker in de regio Gent is gemiddeld binnen 30 minuten ter plaatse. Vraag bij het bellen altijd een concrete aankomsttijd én de prijs voor hij vertrekt.' },
    },
    {
      '@type': 'Question',
      name: 'Wat als mijn sleutel is afgebroken in het slot?',
      acceptedAnswer: { '@type': 'Answer', text: 'Probeer het stukje sleutel niet zelf eruit te trekken met een schroevendraaier — dat drijft het stuk dieper in de cilinder. Een slotenmaker heeft speciaal gereedschap om de sleutel te verwijderen zonder de cilinder te beschadigen.' },
    },
    {
      '@type': 'Question',
      name: 'Slot kapot in een huurhuis: wie betaalt de slotenmaker?',
      acceptedAnswer: { '@type': 'Answer', text: 'In het algemeen: de huurder bij normale slijtage of eigen schuld, de verhuurder bij een verborgen gebrek of inbraakschade waarbij de huurder niets te verwijten valt. Laat altijd een schriftelijk rapport opstellen door de slotenmaker als bewijs.' },
    },
    {
      '@type': 'Question',
      name: 'Wanneer moet ik mijn slot vervangen, ook als het nog werkt?',
      acceptedAnswer: { '@type': 'Answer', text: 'Na een inbraakpoging, als je sleutels bent kwijtgeraakt, als het slot ouder is dan 15 jaar, of als het geen SKG**-certificering heeft.' },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blog` },
    { '@type': 'ListItem', position: 3, name: 'Slot Kapot', item: PAGE_URL },
  ],
}

/* ── Icons ── */
const PhoneIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.33 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
  </svg>
)
const CheckIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M20 6 9 17l-5-5" />
  </svg>
)
const XIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
)
const AlertIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
    <path d="M12 9v4M12 17h.01" />
  </svg>
)
const WrenchIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
  </svg>
)
const ArrowUpIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="m18 15-6-6-6 6" />
  </svg>
)

export default function SlotKapotPage() {
  return (
    <>
      {/* JSON-LD schemas */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Skip link */}
      <a href="#main-content" className="skip-link">Ga naar inhoud</a>

      {/* HEADER */}
      <header className="site-header">
        <div className="container header-inner">
          <Link href="/" className="logo" aria-label="Slotenmaker Luc — naar homepagina">
            <span className="logo__name">Luc</span>
            <span className="logo__mark">Slotenmaker</span>
          </Link>
          <nav className="nav" aria-label="Hoofdnavigatie">
            <Link href="/#diensten" className="nav-link">Diensten</Link>
            <Link href="/#tarieven" className="nav-link">Tarieven</Link>
            <Link href="/#contact" className="nav-link">Contact</Link>
          </nav>
          <a href="tel:+32470123456" className="btn btn--accent header-cta" aria-label="Bel Luc op 0470 12 34 56">
            <PhoneIcon />
            <span className="cta-text">0470 12 34 56</span>
          </a>
        </div>
      </header>

      <main id="main-content">

        {/* HERO */}
        <section className="blog-hero">
          <div className="blog-hero__img">
            <Image
              src="https://images.pexels.com/photos/279810/pexels-photo-279810.jpeg?auto=compress&cs=tinysrgb&w=1400"
              alt="Deurslot met sleutel in voordeur — wat doen bij slot kapot?"
              fill
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              priority
              sizes="100vw"
            />
            <div className="blog-hero__overlay" />
          </div>
          <div className="container blog-hero__content">
            {/* Breadcrumb — visual */}
            <nav className="blog-breadcrumb" aria-label="Broodkruimelpad">
              <Link href="/">Home</Link>
              <span aria-hidden="true">›</span>
              <Link href="/blog">Blog</Link>
              <span aria-hidden="true">›</span>
              <span aria-current="page">Slot Kapot</span>
            </nav>
            <h1 className="blog-hero__title">
              Slot Kapot?<br />
              <span className="blog-hero__title--accent">Oorzaken, Oplossingen & Kosten</span>
            </h1>
            <p className="blog-hero__lead">
              Je slot werkt niet meer. Misschien staat je deur dicht, misschien sluit hij niet. Hoe dan ook: dit wil je zo snel mogelijk opgelost. Hier lees je alles — van oorzaak tot factuur.
            </p>
            <div className="blog-hero__byline">
              <div className="blog-hero__avatar" aria-hidden="true">L</div>
              <div>
                <span className="blog-hero__author">Door Luc · Erkend slotenmaker</span>
                <span className="blog-hero__dates">15 jan 2026 · Bijgewerkt 1 mei 2026 · 8 min</span>
              </div>
            </div>
          </div>
          <p className="blog-photo-credit">Foto: Pixabay via Pexels</p>
        </section>

        {/* FEATURED SNIPPET — direct answer for Google */}
        <div className="container">
          <div className="blog-snippet">
            <div className="blog-snippet__label">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/></svg>
              Kort antwoord
            </div>
            <p>
              <strong>Slot kapot?</strong> Druk eerst tegen de deur terwijl je de sleutel draait — hout zet soms uit en klemt de deur dicht. Helpt dat niet, <strong>forceer dan nooit</strong>: bel een erkende slotenmaker. Die opent schadevrij en beoordeelt ter plaatse of het slot hersteld of vervangen moet worden. Kosten in België: <strong>€85–€175</strong> afhankelijk van de situatie.
            </p>
          </div>
        </div>

        {/* URGENCY BANNER */}
        <div className="container">
          <div className="blog-urgency">
            <div className="blog-urgency__icon"><AlertIcon /></div>
            <div className="blog-urgency__text">
              <strong>Staat je deur dicht met een kapot slot?</strong> Luc is zo snel ter plaatse dat je de bel nog hoort nadat je hebt opgehangen.
            </div>
            <a href="tel:+32470123456" className="btn btn--accent btn--shiny blog-urgency__btn">
              <PhoneIcon />
              0470 12 34 56
            </a>
          </div>
        </div>

        {/* TABLE OF CONTENTS */}
        <div className="container">
          <nav className="blog-toc" aria-label="Inhoudsopgave">
            <span className="blog-toc__label">In dit artikel</span>
            <ol className="blog-toc__list">
              <li><a href="#symptomen">Hoe herken je een kapot slot?</a></li>
              <li><a href="#oorzaken">De 5 meest voorkomende oorzaken</a></li>
              <li><a href="#wat-doen">Slot kapot deur dicht: doe dit nu</a></li>
              <li><a href="#soorten">Welk type slot is kapot?</a></li>
              <li><a href="#repareren-of-vervangen">Repareren of vervangen?</a></li>
              <li><a href="#huurhuis">Slot kapot in huurhuis: wie betaalt?</a></li>
              <li><a href="#preventie">Voorkom dat het opnieuw gebeurt</a></li>
              <li><a href="#kosten">Wat kost het?</a></li>
              <li><a href="#faq">Veelgestelde vragen</a></li>
            </ol>
          </nav>
        </div>

        {/* ARTICLE */}
        <article className="container blog-article" itemScope itemType="https://schema.org/Article">
          <meta itemProp="headline" content="Slot Kapot? Oorzaken, Oplossingen & Kosten in België" />
          <meta itemProp="datePublished" content="2026-01-15" />
          <meta itemProp="dateModified" content="2026-05-01" />

          {/* Author byline — E-E-A-T */}
          <div className="blog-author" itemScope itemType="https://schema.org/Person">
            <div className="blog-author__avatar" aria-hidden="true">L</div>
            <div className="blog-author__info">
              <span className="blog-author__name" itemProp="name">Luc</span>
              <span className="blog-author__role" itemProp="jobTitle">Erkend slotenmaker · 14 jaar ervaring · SKG-gecertificeerd · Verzekerd via AXA</span>
              <span className="blog-author__dates">
                Gepubliceerd: <time dateTime="2026-01-15">15 januari 2026</time>
                {' · '}Bijgewerkt: <time dateTime="2026-05-01">1 mei 2026</time>
              </span>
            </div>
          </div>

          <p className="blog-intro">
            Een <strong>slot kapot</strong> heeft altijd de beste timing: vlak voor je naar het werk moet, midden in de nacht, of op zondag. En toch: in de meeste gevallen is het snel opgelost — als je weet wat je doet. Lees hieronder wat er mis kan zijn, wat je zelf kunt doen en wanneer je beter <Link href="/#contact" className="blog-link">direct een professionele slotenmaker belt</Link>.
          </p>

          {/* ─── 1. SYMPTOMEN ─── */}
          <section id="symptomen" aria-labelledby="symptomen-h2">
            <h2 className="blog-h2" id="symptomen-h2">Hoe herken je een kapot slot?</h2>
            <p>
              Niet elk slotprobleem is meteen duidelijk. Soms merk je het pas als de deur al dicht is. Dit zijn de signalen:
            </p>
            <ul className="blog-list">
              <li><span className="blog-list__icon blog-list__icon--check"><CheckIcon /></span><span>De sleutel draait met veel weerstand of helemaal niet meer</span></li>
              <li><span className="blog-list__icon blog-list__icon--check"><CheckIcon /></span><span>De sleutel gaat er niet meer in, of blijft vasthangen</span></li>
              <li><span className="blog-list__icon blog-list__icon--check"><CheckIcon /></span><span>De deur sluit niet goed — de grendel springt niet in de sluitplaat</span></li>
              <li><span className="blog-list__icon blog-list__icon--check"><CheckIcon /></span><span>De cilinder wiebelt zichtbaar of kan eruit getrokken worden</span></li>
              <li><span className="blog-list__icon blog-list__icon--check"><CheckIcon /></span><span>Je sleutel is afgebroken in het slot</span></li>
              <li><span className="blog-list__icon blog-list__icon--check"><CheckIcon /></span><span>Het slot werkt alleen bij bepaald weer (uitzetting door hitte of vochtschade)</span></li>
            </ul>
          </section>

          {/* ─── 2. OORZAKEN ─── */}
          <figure className="blog-figure" aria-hidden="true">
            <div className="blog-figure__img">
              <Image
                src="https://images.pexels.com/photos/277574/pexels-photo-277574.jpeg?auto=compress&cs=tinysrgb&w=1000"
                alt="Verroest hangslot aan een verweerde houten deur — slijtage als oorzaak kapot slot"
                fill
                loading="lazy"
                sizes="(max-width: 760px) 100vw, 760px"
                style={{ objectFit: 'cover' }}
              />
            </div>
            <figcaption>Roest en slijtage: de stille moordenaars van elk deurslot. Foto: Pixabay via Pexels</figcaption>
          </figure>

          <section id="oorzaken" aria-labelledby="oorzaken-h2">
            <h2 className="blog-h2" id="oorzaken-h2">De 5 meest voorkomende oorzaken van een kapot slot</h2>
            <p>
              Weten <em>waarom</em> je slot kapot is bepaalt wat er moet gebeuren. Hier zijn de vijf oorzaken die een slotenmaker het vaakst tegenkomt in Belgische woningen:
            </p>
            <div className="blog-numbered-list">
              <div className="blog-numbered-item">
                <div className="blog-numbered-item__num">1</div>
                <div>
                  <strong>Slijtage door dagelijks gebruik</strong>
                  <p>Een cilinderslot gaat gemiddeld 10 tot 15 jaar mee. Na die tijd slijten de pennetjes en veren, waardoor de sleutel steeds stroever draait. Herkenbaar: het slot &apos;werkt na wat prutsen&apos; — tot op een dag niet meer.</p>
                </div>
              </div>
              <div className="blog-numbered-item">
                <div className="blog-numbered-item__num">2</div>
                <div>
                  <strong>Vuil en stof in het mechanisme</strong>
                  <p>Fijn stof, zand en grafiet van oude sleutels stapelen zich op in de cilinder. Het slot werkt nog, maar elke maand net iets stroever — tot het blokkeren.</p>
                </div>
              </div>
              <div className="blog-numbered-item">
                <div className="blog-numbered-item__num">3</div>
                <div>
                  <strong>Slecht gekopieerde sleutel</strong>
                  <p>Een goedkope kopie met verkeerde toleranties beschadigt de cilinder bij elk gebruik. Je merkt het als de kopie slechter werkt dan het origineel — of omgekeerd. Laat kopieën altijd maken bij een <Link href="/#diensten" className="blog-link">erkende slotenmaker met professioneel snijmateriaal</Link>.</p>
                </div>
              </div>
              <div className="blog-numbered-item">
                <div className="blog-numbered-item__num">4</div>
                <div>
                  <strong>Inbraakpoging of -schade</strong>
                  <p>Een geforceerd slot na een inbraakpoging is niet alleen kapot — het is ook onveilig. Kerntrekken, boren of bumpen laten de cilinder in een staat die geen enkel slot meer mag hebben.</p>
                </div>
              </div>
              <div className="blog-numbered-item">
                <div className="blog-numbered-item__num">5</div>
                <div>
                  <strong>Verzakte deur of verkeerde uitlijning</strong>
                  <p>Soms is het slot zelf prima, maar sluit de deur niet meer goed door verzakking van het kozijn. De grendel raakt de sluitplaat niet meer. Dit <em>lijkt</em> op een kapot slot — maar is eigenlijk een deurprobleem dat goedkoper op te lossen is.</p>
                </div>
              </div>
            </div>
          </section>

          {/* ─── 3. WAT DOEN ─── */}
          <figure className="blog-figure" aria-hidden="true">
            <div className="blog-figure__img">
              <Image
                src="https://images.pexels.com/photos/35578808/pexels-photo-35578808.jpeg?auto=compress&cs=tinysrgb&w=1000"
                alt="Ervaren slotenmaker werkt aan een slot in zijn werkplaats — professionele hulp bij kapot slot"
                fill
                loading="lazy"
                sizes="(max-width: 760px) 100vw, 760px"
                style={{ objectFit: 'cover', objectPosition: 'center top' }}
              />
            </div>
            <figcaption>De juiste persoon voor de klus: een erkende slotenmaker weet meteen waar hij kijkt. Foto: muhammed diler via Pexels</figcaption>
          </figure>

          <section id="wat-doen" aria-labelledby="wat-doen-h2">
            <h2 className="blog-h2" id="wat-doen-h2">Slot kapot deur dicht: doe dit nu</h2>
            <p>
              Buitenstaan met een kapotte deur is de meest stresserende variant. Volg deze stappen in volgorde — en sla geen stap over:
            </p>
            <div className="blog-steps">
              <div className="blog-step">
                <div className="blog-step__num">1</div>
                <div>
                  <strong>Druk tegen de deur terwijl je de sleutel draait.</strong>
                  <span> Hout zet uit in warm weer en klem zo de deur dicht. Als de deur meegaat: geen kapot slot, maar een dikke deur. Dit kost je nul euro.</span>
                </div>
              </div>
              <div className="blog-step">
                <div className="blog-step__num">2</div>
                <div>
                  <strong>Check andere ingangen.</strong>
                  <span> Achterdeur, raam op een kier, balkon? Controleer ook of een familielid een reservesleutel heeft. Altijd even doen voor je een slotenmaker belt.</span>
                </div>
              </div>
              <div className="blog-step">
                <div className="blog-step__num">3</div>
                <div>
                  <strong>Forceer de deur niet.</strong>
                  <span> Zelf boren of inbreken lijkt goedkoper. De schade aan deur en kozijn loopt echter snel op tot het dubbele van een slotenmaker — en daarna is het slot nog altijd kapot.</span>
                </div>
              </div>
              <div className="blog-step">
                <div className="blog-step__num">4</div>
                <div>
                  <strong>Bel een erkende slotenmaker.</strong>
                  <span> Een vakman opent je deur schadevrij — in 9 van de 10 gevallen zonder de cilinder te boren. Daarna beoordeelt hij ter plaatse wat nodig is. <Link href="/#contact" className="blog-link">Neem direct contact op met Luc</Link>.</span>
                </div>
              </div>
            </div>
            <div className="blog-tip">
              <strong>Tip:</strong> Sla het nummer van een erkende slotenmaker op in je telefoon <em>voordat</em> je het nodig hebt. Als je &apos;s nachts op Google zoekt naar &quot;slotenmaker dringend&quot;, kom je snel bij cowboybedrijven terecht die tot €400 vragen voor een simpele buitensluiting — en die je niet kunt natrekken op kwaliteit.
            </div>
          </section>

          {/* ─── 4. SOORTEN ─── */}
          <figure className="blog-figure" aria-hidden="true">
            <div className="blog-figure__img">
              <Image
                src="https://images.pexels.com/photos/28119421/pexels-photo-28119421.jpeg?auto=compress&cs=tinysrgb&w=1000"
                alt="Macrofoto van een cilinderslot en sleutel — de onderdelen van een deurslot zichtbaar"
                fill
                loading="lazy"
                sizes="(max-width: 760px) 100vw, 760px"
                style={{ objectFit: 'cover' }}
              />
            </div>
            <figcaption>Een cilinderslot van binnenuit: meer onderdelen dan je denkt. Foto: Nic Wood via Pexels</figcaption>
          </figure>

          <section id="soorten" aria-labelledby="soorten-h2">
            <h2 className="blog-h2" id="soorten-h2">Welk type slot is kapot? Dit maakt het verschil</h2>
            <p>
              Luc is de neurochirurg van het slot: hij kijkt eerst welk orgaan er precies faalt voor hij een ingreep doet. Het type slot bepaalt de aanpak én de kostprijs. Een overzicht van wat je het vaakst tegenkomt in Belgische woningen:
            </p>
            <div className="blog-type-grid">
              <div className="blog-type-card">
                <div className="blog-type-card__title">Cilinderslot kapot</div>
                <p>Het meest voorkomende type. De cilinder is de kern die de sleutel herkent. Slijtage, afgebroken sleutel of inbraakschade = cilinder vervangen. Relatief snel en betaalbaar. Kies altijd een <a href="https://www.skgwas.nl/certificering/" target="_blank" rel="noopener noreferrer" className="blog-link">SKG**-gecertificeerde cilinder</a> voor maximale inbraakweerstand.</p>
              </div>
              <div className="blog-type-card">
                <div className="blog-type-card__title">Meerpuntssluiting kapot</div>
                <p>Grendelt de deur op 3 of meer punten tegelijk. Als één component faalt, blokkeert de hele deur. Herkenbaar: sleutel draait maar deur opent niet. Vereist een slotenmaker met specifieke kennis van meerpuntssystemen.</p>
              </div>
              <div className="blog-type-card">
                <div className="blog-type-card__title">Slot binnendeur kapot</div>
                <p>Minder urgent maar even vervelend — zeker bij een badkamer of slaapkamer. Binnendeursloten werken met een andere techniek. Vaak goedkoper en sneller te vervangen dan buitensloten.</p>
              </div>
              <div className="blog-type-card">
                <div className="blog-type-card__title">Oplegslot voordeur kapot</div>
                <p>Oudere Belgische woningen hebben soms nog een oplegslot. Minder inbraakwerend. Een kapot oplegslot is het ideale moment om <Link href="/#diensten" className="blog-link">te upgraden naar een modern cilinderslot</Link> met SKG-keurmerk.</p>
              </div>
            </div>
          </section>

          {/* ─── 5. REPAREREN OF VERVANGEN ─── */}
          <figure className="blog-figure" aria-hidden="true">
            <div className="blog-figure__img">
              <Image
                src="https://images.pexels.com/photos/13963754/pexels-photo-13963754.jpeg?auto=compress&cs=tinysrgb&w=1000"
                alt="Stalen sleutelgat in een voordeur — repareren of vervangen bij slot kapot?"
                fill
                loading="lazy"
                sizes="(max-width: 760px) 100vw, 760px"
                style={{ objectFit: 'cover' }}
              />
            </div>
            <figcaption>Eén sleutelgat, twee vragen: repareren of meteen vervangen? Foto: Vladimir Srajber via Pexels</figcaption>
          </figure>

          <section id="repareren-of-vervangen" aria-labelledby="rorv-h2">
            <h2 className="blog-h2" id="rorv-h2">Slot repareren of vervangen?</h2>
            <p>
              De eerlijke vuistregel: als het slot jonger is dan 10 jaar en de schade beperkt is, kan een reparatie volstaan. In alle andere gevallen is vervangen slimmer — voor veiligheid én voor je portefeuille op lange termijn.
            </p>
            <div className="blog-compare">
              <div className="blog-compare__col">
                <div className="blog-compare__head blog-compare__head--yes">Reparatie kan volstaan</div>
                <ul className="blog-list blog-list--sm">
                  <li><span className="blog-list__icon blog-list__icon--check"><CheckIcon /></span><span>Stijf slot door vuil — smeren met grafietpoeder lost het op</span></li>
                  <li><span className="blog-list__icon blog-list__icon--check"><CheckIcon /></span><span>Grendel past niet door verzakte deur (bijschaven kozijn)</span></li>
                  <li><span className="blog-list__icon blog-list__icon--check"><CheckIcon /></span><span>Sluitplaat losgeraakt of verkeerd uitgelijnd</span></li>
                </ul>
              </div>
              <div className="blog-compare__col">
                <div className="blog-compare__head blog-compare__head--no">Vervangen is noodzakelijk</div>
                <ul className="blog-list blog-list--sm">
                  <li><span className="blog-list__icon blog-list__icon--x"><XIcon /></span><span>Cilinder beschadigd na inbraakpoging</span></li>
                  <li><span className="blog-list__icon blog-list__icon--x"><XIcon /></span><span>Sleutel afgebroken in het slot</span></li>
                  <li><span className="blog-list__icon blog-list__icon--x"><XIcon /></span><span>Slot ouder dan 10–15 jaar</span></li>
                  <li><span className="blog-list__icon blog-list__icon--x"><XIcon /></span><span>Sleutel kwijt — veiligheidsrisico</span></li>
                  <li><span className="blog-list__icon blog-list__icon--x"><XIcon /></span><span>Geen SKG-certificering (inbraakrisico)</span></li>
                </ul>
              </div>
            </div>
            <div className="blog-tip">
              <strong>Wat je zelf kunt doen:</strong> smeren met grafietpoeder, de deur controleren op verzakking en… eerlijk toegeven dat je er verder niets van snapt. Gebruik nooit olie of WD-40 in een cilinderslot — olie trekt stof aan en verstopt het mechanisme op termijn.
            </div>
          </section>

          {/* ─── 6. HUURHUIS ─── */}
          <section id="huurhuis" aria-labelledby="huurhuis-h2">
            <h2 className="blog-h2" id="huurhuis-h2">Slot kapot in een huurhuis: wie betaalt?</h2>
            <p>
              Een veelgestelde vraag in België — en een waarbij meer verwarring bestaat dan nodig. De algemene regel op basis van het Belgisch huurrecht:
            </p>
            <div className="blog-rule-grid">
              <div className="blog-rule-card blog-rule-card--tenant">
                <div className="blog-rule-card__head">Huurder betaalt</div>
                <ul className="blog-list blog-list--sm">
                  <li><span className="blog-list__icon blog-list__icon--check"><CheckIcon /></span><span>Slijtage door normaal dagelijks gebruik</span></li>
                  <li><span className="blog-list__icon blog-list__icon--check"><CheckIcon /></span><span>Slot kapot door eigen schuld of nalatigheid</span></li>
                  <li><span className="blog-list__icon blog-list__icon--check"><CheckIcon /></span><span>Sleutel verloren of afgebroken door eigen gebruik</span></li>
                </ul>
              </div>
              <div className="blog-rule-card blog-rule-card--owner">
                <div className="blog-rule-card__head">Verhuurder betaalt</div>
                <ul className="blog-list blog-list--sm">
                  <li><span className="blog-list__icon blog-list__icon--check"><CheckIcon /></span><span>Slot was al defect bij aanvang van de huur</span></li>
                  <li><span className="blog-list__icon blog-list__icon--check"><CheckIcon /></span><span>Ernstig verborgen gebrek aan het slotmechanisme</span></li>
                  <li><span className="blog-list__icon blog-list__icon--check"><CheckIcon /></span><span>Inbraakschade waarbij huurder niets te verwijten valt</span></li>
                </ul>
              </div>
            </div>
            <p>
              Twijfel je? Laat de slotenmaker een schriftelijk rapport opstellen met de oorzaak van de schade. Dat document is goud waard bij een discussie met je verhuurder of verzekeraar. Meer info over je rechten als huurder vind je bij{' '}
              <a href="https://www.huurpunt.be" target="_blank" rel="noopener noreferrer" className="blog-link">Huurpunt vzw</a>, de Vlaamse huurdersbond.
            </p>
          </section>

          {/* ─── 7. PREVENTIE ─── */}
          <figure className="blog-figure" aria-hidden="true">
            <div className="blog-figure__img">
              <Image
                src="https://images.pexels.com/photos/2564866/pexels-photo-2564866.jpeg?auto=compress&cs=tinysrgb&w=1000"
                alt="Moderne blauwe voordeur met metalen handvatten — goed onderhouden slot voorkomt problemen"
                fill
                loading="lazy"
                sizes="(max-width: 760px) 100vw, 760px"
                style={{ objectFit: 'cover' }}
              />
            </div>
            <figcaption>Een goed onderhouden deur is een deur die gehoorzaamt. Foto: Luis Quintero via Pexels</figcaption>
          </figure>

          <section id="preventie" aria-labelledby="preventie-h2">
            <h2 className="blog-h2" id="preventie-h2">Voorkom dat het opnieuw gebeurt: onderhoud in 3 stappen</h2>
            <p>
              Een kapot slot is bijna altijd te vermijden. Twee keer per jaar vijf minuten onderhoud scheelt honderden euro herstelkosten. Ook de{' '}
              <a href="https://www.politie.be/5415/nl/veiligheidsthemas/inbraakpreventie" target="_blank" rel="noopener noreferrer" className="blog-link">politie raadt regelmatig slotonderhoud aan</a>{' '}
              als onderdeel van een goede inbraakpreventie:
            </p>
            <div className="blog-steps">
              <div className="blog-step">
                <div className="blog-step__num"><WrenchIcon /></div>
                <div>
                  <strong>Smeer de cilinder met grafietpoeder.</strong>
                  <span> Blaas het poeder in het sleutelgat en draai de sleutel een paar keer. Doe dit twee keer per jaar. Gebruik <em>nooit</em> olie of WD-40.</span>
                </div>
              </div>
              <div className="blog-step">
                <div className="blog-step__num"><WrenchIcon /></div>
                <div>
                  <strong>Controleer of de deur goed sluit.</strong>
                  <span> Als de grendel schuurde langs de sluitplaat, beschadigt dat het mechanisme traag maar zeker. Pas de sluitplaat of deur bij voor het slot het begeeft.</span>
                </div>
              </div>
              <div className="blog-step">
                <div className="blog-step__num"><WrenchIcon /></div>
                <div>
                  <strong>Gebruik altijd originele sleutels.</strong>
                  <span> Laat kopieën maken bij een erkend vakman. Een goedkope kopie met verkeerde toleranties beschadigt je cilinder bij elke draai. <Link href="/#diensten" className="blog-link">Luc snijdt sleutels af €4 per stuk</Link>, klaar in 5 minuten.</span>
                </div>
              </div>
            </div>
          </section>

          {/* ─── 8. KOSTEN ─── */}
          <section id="kosten" aria-labelledby="kosten-h2">
            <h2 className="blog-h2" id="kosten-h2">Wat kost een kapot slot laten oplossen in België?</h2>
            <p>
              Tarieven voor slotenmakers variëren in België enorm. Cowboybedrijven vragen &apos;s nachts tot €400 voor een simpele buitensluiting. Onderstaande prijzen zijn wat een eerlijke erkende slotenmaker rekent — transparant, vooraf bevestigd, nooit veranderd achteraf. Bekijk <Link href="/#tarieven" className="blog-link">alle tarieven op onze prijzenpagina</Link>.
            </p>
            <div className="blog-price-table">
              <div className="blog-price-row blog-price-row--header">
                <span>Situatie</span>
                <span>Prijs incl. BTW</span>
              </div>
              <div className="blog-price-row">
                <span>Kapot slot openmaken / buitensluiting</span>
                <span className="blog-price-amount">€85</span>
              </div>
              <div className="blog-price-row">
                <span>Cilinderslot vervangen (SKG** incl. plaatsing)</span>
                <span className="blog-price-amount">€145</span>
              </div>
              <div className="blog-price-row">
                <span>Slot upgraden — anti-kerntrek + beslag</span>
                <span className="blog-price-amount">€175</span>
              </div>
              <div className="blog-price-row">
                <span>Meerpuntssluiting repareren of vervangen</span>
                <span className="blog-price-amount">Op maat</span>
              </div>
              <div className="blog-price-row">
                <span>Beveiligingscheck aan huis (verrekend bij bestelling)</span>
                <span className="blog-price-amount">€50</span>
              </div>
            </div>
            <p className="blog-price-note">
              Geen voorrijkost binnen 20 km van Gent · Dag en nacht hetzelfde tarief · Prijs vooraf bevestigd — nooit verrassingen achteraf
            </p>
          </section>

          {/* ─── FAQ ─── */}
          <section id="faq" aria-labelledby="faq-h2">
            <h2 className="blog-h2" id="faq-h2">Veelgestelde vragen over een kapot slot</h2>
            <div className="blog-cluster-summary" style={{ marginTop: 0 }}>
              <details className="blog-faq" open>
                <summary>Wat doe ik als mijn slot kapot is en de deur dicht zit?</summary>
                <p>Druk tegen de deur terwijl je de sleutel draait — een klemzittende deur door uitzetting is vaak geen kapot slot. Forceer daarna niets. Controleer andere toegangen en bel een erkende slotenmaker. Die opent schadevrij en beoordeelt ter plaatse wat nodig is.</p>
              </details>
              <details className="blog-faq">
                <summary>Kan ik een kapot slot zelf repareren of vervangen?</summary>
                <p>Kleine problemen zoals een stijve cilinder los je soms op met grafietpoeder. Een beschadigde cilinder, afgebroken sleutel of kapot mechanisme laat je beter door een vakman vervangen. Verkeerd geplaatste sloten zijn onveilig en kunnen je woning onverzekerbaar maken.</p>
              </details>
              <details className="blog-faq">
                <summary>Wat kost het om een slot te laten vervangen in België?</summary>
                <p>Tussen €85 (buitensluiting openen) en €175 (slot upgraden met anti-kerntrekcilinder) bij een eerlijke erkende slotenmaker. Pas op voor bedrijven die &apos;s nachts buitensporige tarieven vragen zonder transparante prijsopgave vooraf.</p>
              </details>
              <details className="blog-faq">
                <summary>Hoe snel komt een slotenmaker bij een noodsituatie?</summary>
                <p>Een goede slotenmaker in de regio Gent is gemiddeld binnen 30 minuten ter plaatse. Vraag bij het bellen altijd een concrete aankomsttijd én de prijs voor hij vertrekt — zodat je niet voor verrassingen staat.</p>
              </details>
              <details className="blog-faq">
                <summary>Wat als mijn sleutel is afgebroken in het slot?</summary>
                <p>Probeer het stukje sleutel <em>niet</em> zelf eruit te trekken met een schroevendraaier of tang — dat drijft het stuk dieper in de cilinder. Een slotenmaker heeft speciaal gereedschap om de sleutel te verwijderen zonder de cilinder te beschadigen.</p>
              </details>
              <details className="blog-faq">
                <summary>Slot kapot in een huurhuis: wie betaalt de slotenmaker?</summary>
                <p>Algemene regel: de huurder bij normale slijtage of eigen schuld, de verhuurder bij een verborgen gebrek of inbraakschade. Laat altijd een schriftelijk rapport opstellen door de slotenmaker — dat is je bewijs bij een discussie met de verhuurder of verzekeraar.</p>
              </details>
              <details className="blog-faq">
                <summary>Wanneer moet ik mijn slot vervangen, ook als het nog werkt?</summary>
                <p>Na een inbraakpoging, als je sleutels bent kwijtgeraakt, als het slot ouder is dan 15 jaar, of als het geen SKG**-certificering heeft. Een onveilig slot dat technisch nog &apos;werkt&apos; is als een veiligheidsgordel die je buikholte niet meer vastzet: aanwezig, maar zinloos.</p>
              </details>
            </div>
          </section>

        </article>

        {/* CTA */}
        <section className="blog-cta" aria-labelledby="cta-title">
          <div className="container blog-cta__inner">
            <div className="blog-cta__copy">
              <span className="overline overline--brass">Slot kapot in Gent of omgeving?</span>
              <h2 className="blog-cta__title" id="cta-title">Bel Luc. Binnen 30 minuten ter plaatse.</h2>
              <p>Erkend vakman · Vast tarief · Geen voorrijkost · 24/7 bereikbaar</p>
              <p className="blog-cta__sub">Luc heeft al meer dan 500 sloten vervangen. Waarvan er drie van hemzelf waren. Hij leerde snel.</p>
            </div>
            <div className="blog-cta__actions">
              <a href="tel:+32470123456" className="btn btn--accent btn--lg btn--shiny">
                <PhoneIcon />
                0470 12 34 56
              </a>
              <Link href="/#contact" className="btn btn--ghost">Stuur een bericht</Link>
            </div>
          </div>
        </section>

        {/* BACK TO TOP */}
        <div className="container blog-backtop-wrap">
          <a href="#main-content" className="blog-backtop" aria-label="Terug naar boven">
            <ArrowUpIcon />
            Terug naar boven
          </a>
        </div>

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
    </>
  )
}
