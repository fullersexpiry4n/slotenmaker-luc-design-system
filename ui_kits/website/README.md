# Website — UI kit

Marketing-site recreatie voor `slotenmakerluc.be` (fictief domein). Drie pagina's, getoond via tabs in `index.html`:

1. **Home** — hero, snelle hulp CTA, drie diensten, social proof, contactform, footer.
2. **Diensten** — vier servicekaarten met prijzen + uitleg.
3. **Tarieven** — transparante prijslijst met FAQ.

Componenten gebruikt:
- `SiteHeader` — logo wordmark + nav + telefoon-CTA
- `SiteFooter` — KVK, BTW, openingsuren, social
- `ServiceCard` — icoon + titel + uitleg + prijs
- `StatBlock` — cijfer + eenheid + context
- `TestimonialCard` — quote + naam + foto-placeholder
- `ContactForm` — naam, telefoon, vraag, adres
- `PriceRow` — dienst + prijs + voetnoot

Geen JS-state-management — `index.html` doet client-side tab-swap. Alle visuele tokens via `../../colors_and_type.css`.

## Niet gebouwd
- Echte foto's (placeholders met `Foto van Luc hier`).
- Privacyverklaring, cookies-banner — buiten scope.
