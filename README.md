# Slotenmaker Luc — Design System

Een Belgische zelfstandige slotenmaker met echte naam en gezicht. Luc helpt particulieren en kleine bedrijven bij **buitensluitingen, sleutelkopieën, slotvervangingen en beveiligingsadvies**.

Dit design system is gebouwd voor één persoon — Luc — niet voor een corporate keten. Alles ademt: één naam, één gezicht, één telefoonnummer. Geen "team van experts", geen "innovatief platform", geen ACTIE-banners.

---

## Wie is Luc

- **Eén persoon**, geen team. Zelfstandige slotenmaker.
- Werkt in en rond zijn regio (België, Nederlandstalig).
- Klanten: particulieren die buiten staan, kleine handelszaken die hun slot willen upgraden, vastgoedmakelaars, syndici.
- Belofte: **persoonlijk contact, transparante prijs, snel ter plaatse**.

## Producten / oppervlakken

| Surface | Wat | Formaat |
|---|---|---|
| Website | Homepage, Diensten, Tarieven | Responsive desktop + mobile |
| Google Business Profile | Posts met aanbiedingen + tips | 1080×1080 |
| Instagram | Square posts + testimonial cards | 1080×1080 |
| Facebook | Posts met foto + tekst | 1200×630 / 1080×1080 |
| Visitekaartje | Voor + achterkant | 85×55 mm |
| Flyer A5 | Diensten + tarieven + contact | 148×210 mm |
| Bestelwagen-magneet | Logo + telefoon + diensten | Groot, leesbaar vanaf 10 m |

## Bronnen

Geen externe codebase, Figma of bestaande assets aangeleverd. Dit design system is volledig opgebouwd vanuit het tekstuele briefing:

> KLEUREN: Eén primaire kleur — #1C2B3A (diep marineblauw, "Inkt"). Eén accent — #C8953A (warm messing/goud, letterlijk de kleur van een koperen sleutel). Paginaachtergrond altijd #F7F4EF (warm gebroken wit), nooit koud wit.

Als de echte Luc bestaande visuals heeft (foto's, vorige logo, etc), kunnen die later vervangen worden in `assets/`.

---

## Index

| Bestand | Doel |
|---|---|
| `README.md` | Dit document — hoofdgids |
| `SKILL.md` | Skill-manifest, leesbaar door Claude Code |
| `colors_and_type.css` | CSS-tokens voor kleur + typografie |
| `fonts/` | Inter webfonts (Google Fonts CDN-link) |
| `assets/` | Logo SVG, placeholders, key-icoon |
| `preview/` | Design System tab cards |
| `ui_kits/website/` | Website UI kit (homepage, diensten, tarieven) |
| `ui_kits/social/` | Social media posts (Instagram, Facebook, GBP) |
| `ui_kits/print/` | Visitekaartje, flyer A5, bestelwagen-magneet |

---

## Content fundamentals

### Tone of voice
**Direct. Warm. Concreet. Persoonlijk.** Luc praat zoals een buurman die toevallig slotenmaker is — niet zoals een marketingafdeling.

- **Altijd "jij / je / jouw"**, nooit "u". Luc tutoyeert iedereen. Dit is het hardste regel — één "u" en de stem klopt niet meer.
- **Sentence case voor alle koppen.** "Slot vervangen na inbraak" — niet "Slot Vervangen Na Inbraak".
- **Overlines mogen CAPS**, maar max 3 woorden. "SNELLE HULP", "VAST TARIEF".
- **Elke belofte bevat een getal.** "Binnen 30 minuten ter plaatse", "5 jaar garantie", "klaar in 5 minuten", "€85 vast tarief — geen verrassingen".

### Verboden woorden
Deze woorden komen **nooit** voor in copy voor Luc:
`revolutionair`, `naadloos`, `robuust`, `synergie`, `AI-gedreven`, `transformeren`, `innovatief`, `cutting-edge`, `oplossing` (als buzzword), `experts`, `team van professionals`, `wereldklasse`, `next-level`.

### Wat dit merk NIET is
- Geen discountwinkel. Geen "ACTIE!"-banners. Geen rode prijzen-doorstreept-met-geel.
- Geen 2005-webshop-energie (clip-art, beveiligingscertificaat-badges, "WIJ ZIJN BETROUWBAAR" met groene vinkjes).
- Geen corporate jargon ("aanbieden van diensten op maat").
- Geen "team" — Luc is alleen. "Ik kom langs", niet "wij komen langs".

### Copywriting voorbeelden

✅ **Goed**
- "Buitengesloten? Bel Luc. Binnen 30 minuten sta ik voor je deur."
- "Sleutel kopiëren — klaar in 5 minuten, €4 per stuk."
- "Slot vervangen na inbraak — vast tarief €145, inclusief cilinder."
- "Vraag me iets. Ik bel terug binnen het uur."

❌ **Fout**
- "Wij bieden professionele slotenmaker-oplossingen op maat."
- "Innovatieve beveiligingstotaaloplossing voor uw woning."
- "ACTIE! Sleutel kopiëren — NU €3,99!!!"
- "Ons team van experts staat 24/7 voor u klaar."

### Emoji
**Geen emoji.** Niet in headers, niet in body, niet in social posts. Eén uitzondering: telefoon-icoon (☎ unicode of SVG) naast telefoonnummer mag, maar liever een echt SVG-key/phone icoon uit Lucide.

### Numbers
Cijfers worden altijd gekoppeld aan **eenheid + context**. Niet "30+" — wél "30 min — gemiddelde aanrijtijd". Statistieken zonder context zijn data slop.

---

## Visual foundations

### Kleur

Het hele systeem draait op **drie kleuren**:

| Token | Hex | Rol |
|---|---|---|
| `--ink` | `#1C2B3A` | Primair — diep marineblauw. Tekst, headers, donkere vlakken, primaire knoppen. |
| `--brass` | `#C8953A` | Accent — warm messing/goud. Kleur van een koperen sleutel. CTA-knoppen, accent-onderlijning, key-icoon. |
| `--canvas` | `#F7F4EF` | Pagina-achtergrond — warm gebroken wit. **Nooit** koud wit. |
| `--card` | `#FFFFFF` | Witte kaarten die zweven op de canvas. |
| `--photo-bg` | `#EBF0F4` | Placeholder-vlak waar een foto van Luc hoort. |

**Geen gradients. Geen glassmorphism. Geen neumorphism.** Vlakke kleur, één laag schaduw, klaar.

Ondersteunende neutralen (afgeleid van Inkt):
- `--ink-80` `#3D4856` — subkop, secundaire tekst
- `--ink-60` `#6B7480` — captions, meta
- `--ink-20` `#D4D8DD` — fijne lijnen, dividers
- `--success` `#3D7A4E` (donkergroen — bevestiging, "klaar")
- `--alert` `#A8442E` (warm rood-bruin — buitensluiting CTA, urgentie)

### Typografie

**Inter, en alleen Inter.** Geen serif, geen mono, geen tweede font.

| Rol | Weight | Casing |
|---|---|---|
| Display / H1 | ExtraBold 800 | Sentence case |
| H2 / H3 | ExtraBold 800 | Sentence case |
| Body | Regular 400 | Normaal |
| Labels / nav | Medium 500 | Sentence case |
| Overlines | Medium 500 | CAPS, max 3 woorden, letter-spacing 0.12em |
| Logo wordmark — "Luc" | ExtraBold 800 | Sentence case |
| Logo wordmark — "SLOTENMAKER" | Medium 500 | CAPS, letter-spacing 0.22em |

Type scale (1.250 — major third):
- 12 / 14 / 16 / 20 / 24 / 32 / 40 / 56 / 72 px

Line-height:
- Display 1.05
- Headings 1.15
- Body 1.55

### Spacing

8px-basis. Tokens: `4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96`.

### Backgrounds
- Pagina-achtergrond: **`#F7F4EF`** (canvas). Altijd.
- Donkere secties: vol `#1C2B3A`. Voor section breaks of CTA-blokken.
- **Geen** patterns, **geen** repeating textures, **geen** subtle noise, **geen** illustraties op de achtergrond.
- Foto's zijn full-bleed binnen hun container, met warm natuurlijk licht. Geen filter, geen duotone.

### Animation
Minimaal en functioneel:
- Hover-fades: `120ms ease-out`.
- Page transitions: geen (statische sites).
- Buttons: kleur-shift bij hover, géén shrink / wiggle / lift.
- Easing-curve: `cubic-bezier(0.2, 0, 0, 1)` voor alle micro-interacties.

### Hover & press states
- **Knop primair** hover: `--ink` → `#0F1925` (10% donkerder). Geen schaduw-verandering.
- **Knop accent** hover: `--brass` → `#B07F2A`. Geen schaduw-verandering.
- **Link** hover: `text-decoration: underline` met `text-underline-offset: 4px`. Onderlijning kleur `--brass`.
- **Press state**: `transform: translateY(1px)`, geen scale.
- **Focus ring**: 3px `--brass` outline-offset 2px.

### Borders
- Standaard border: `1px solid rgba(28, 43, 58, 0.12)` (Inkt op 12%).
- Geen colored left-accent borders. Geen rainbow-borders. Geen dashed (behalve voor drag-drop-zones).

### Shadows
**Eén shadow, één regel:**
```
--shadow-md: 0 2px 12px rgba(28, 43, 58, 0.08);
```
Toegepast op kaarten. Verder géén shadows — geen inner-shadows, geen text-shadows, geen elevation-levels 1-5. Eén niveau van zweven, anders ligt het plat op het canvas.

### Corner radii
- Kaarten: **12px**
- Knoppen: **8px**
- Form inputs: **8px**
- Pillen / chips: **999px** (volledig rond)
- Foto's / placeholders: **8px**
- Het logo: nooit een radius toepassen — wordmark is pure type.

### Cards
```
background: #FFFFFF;
border-radius: 12px;
box-shadow: 0 2px 12px rgba(28,43,58,0.08);
padding: 24px (compact) / 32px (default) / 48px (hero).
```
Geen border bovenop schaduw. Geen colored border. Wit, gerond, zwevend.

### Transparency & blur
Niet gebruiken. Geen frosted-glass headers, geen blur op modal overlays — gebruik vol Inkt op 70% opacity voor overlays, niets meer.

### Layout
- Maximale leeswidth body: **680px**.
- Grid-breedte website: **1200px** max-width, 24px gutters.
- Vaste header op desktop, niet op mobiel (mobiel = statisch om scroll-jank te vermijden).
- Mobile breakpoint: `@media (max-width: 720px)`.

### Imagery
Foto's zijn de ziel van dit merk:
- **Echte foto's van Luc aan het werk** — handen op een slot, gebogen over een deurpost, in zijn bestelwagen.
- **Klanten op de drempel** — geknipt moment, niet gestylde portretten.
- Warm naturalistisch licht. Geen studio-flits, geen gefilterd Instagram-orange.
- **Geen stockfoto's** van "divers team in pak". Geen AI-gegenereerde gezichten. Geen close-ups van anonieme handen die een hangslot vasthouden.
- Placeholder als foto ontbreekt: blok `#EBF0F4`, tekst `Foto van Luc hier` in Inkt-60, Inter Medium 14px.

### Iconografie

Zie sectie hieronder.

---

## Iconography

**Brand-icon**: één enkele **koperen sleutel** in SVG, kleur `--brass`. Dit is het enige illustratieve element in het merk en wordt **spaarzaam** gebruikt — niet op elke kaart, niet als bullet. Alleen:
- In het favicon
- Naast het telefoonnummer in de header (optioneel)
- Op de achterkant van het visitekaartje (groot, single key)
- Op de bestelwagen-magneet (groot, single key)

**System-icons**: [Lucide](https://lucide.dev) (via CDN of `assets/lucide/`). Stroke-weight 1.75, kleur erft van currentColor.
- Toegestane icons: `phone`, `mail`, `map-pin`, `key`, `key-round`, `clock`, `shield-check`, `check`, `arrow-right`, `chevron-down`.
- Strikt **geen** decoratieve icons (sparkles, lightning, fire, rocket). Slotenmaker, geen startup.

**Substitutie-flag**: ik gebruik Lucide als systeemicoon-set omdat geen icon font is meegeleverd. De stroke-stijl past bij de rustige, ambachtelijke vibe — als Luc een ander setje wil (bv. Phosphor regular, of een eigen hand-getekende sleutel) is dat een prima aanpassing.

**Emoji**: niet gebruikt, ergens dan ook.
**Unicode-tekens als icoon**: ook niet. Geen ✓ in tekst — gebruik het Lucide `check` SVG.

---

## Component-regels (snel)

- **Knoppen**: radius 8px. Primair = `--ink` bg + wit tekst. Accent = `--brass` bg + wit tekst. Tertiair = tekstknop met `--brass` onderlijning bij hover.
- **Kaarten**: wit, radius 12px, shadow-md. Padding 24/32/48.
- **Statistieken**: altijd met eenheid + context op één regel of in twee regels. `30 min — gemiddelde aanrijtijd`, niet `30+`.
- **Forms**: input radius 8px, 1px border `--ink-20`, focus 2px `--brass`. Label boven input, Medium 14px.
- **Badges/pills**: radius 999px, padding 4/12, Medium 12px.

---

## Aanvulling

Zie verder:
- `colors_and_type.css` voor exacte tokens
- `preview/*.html` voor visuele cards
- `ui_kits/*` voor concrete recreatieve UI
