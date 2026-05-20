# Design System — Atelier Solari

## Product Context
- **What this is:** Portfolio site for Atelier Solari, a wedding photography studio based in Florence and Positano, shooting medium format film and digital in Tuscany and the Amalfi Coast.
- **Who it's for:** Couples planning destination weddings in Italy. Bilingual audience: Italian couples and international clients (primarily US, UK, DE).
- **Space/industry:** Luxury / fine-art wedding photography. Direct peers: Erich McVey, Jose Villa, Joanne Dunn, Koman Studio, Light and Dreams, Tobiah Tayo.
- **Project type:** Marketing/portfolio site. Brand-forward, conversion is "Richiedi preventivo" inquiry.

## Memorable Thing
> The warm light of a Tuscan afternoon, held on film.

Every design decision serves this. If it doesn't carry warmth or stillness, it doesn't belong.

## Aesthetic Direction
- **Direction:** Editorial-Minimal with Warm Tonal Layer
- **Decoration level:** minimal-with-grain (3% film grain SVG body overlay, sub-threshold but perceived)
- **Mood:** Quiet, intentional, warm. The structural discipline of design-engineering minimalism (Emil Kowalski, Pelle Bakaus) plus a deliberate warm chromatic commit that no peer studio uses.
- **Reference sites researched:** erichmcvey.com (Layer 1 baseline), komanphotography.com (cream-italianate convergence trap), jules-photographer.com (Lora+Raleway, cards-heavy, what NOT to be).
- **Deliberate departure from category norms:**
  1. Two-voice typography inside titles — Fraunces italic serif sits inside DM Sans display. No peer does this.
  2. Accent committed to terracotta-amber chroma 0.16 (peers use neutral gold or muted blush).
  3. Hero scrim with warm gold cast (soft-light blend), not the standard neutral dark gradient.

## Typography
- **Display/Hero:** DM Sans, weight 500, letter-spacing -0.03em.
- **Body:** DM Sans, weight 400, 15px base.
- **Italic emphasis (titles + closing quote):** Fraunces, 400 italic. Loaded only as italic weights — never used as roman/upright. This creates the two-voice moment: sans precision + serif handcraft inside the same line. Triggered via CSS on `.display em, h1 em, h2 em, h3 em, .closing-quote blockquote em`.
- **UI/Labels:** system mono stack `ui-monospace, 'SF Mono', 'JetBrains Mono', Menlo, Consolas, monospace` — eyebrows, field labels, small captions, footer copyright.
- **Loading:** `@fontsource/dm-sans` (400, 500, 600), `@fontsource/fraunces` (400-italic, 500-italic). All self-hosted, no FOIT/FOUT from CDN.

### Scale (≥1.25× between steps, Impeccable rule)
| Role | Mobile → Desktop |
|---|---|
| `.display` | clamp(48px, 6.5vw, 76px) |
| `h1` | clamp(38px, 4.5vw, 60px) |
| `h2` | clamp(30px, 3.2vw, 38px) |
| `h3` | clamp(20px, 1.7vw, 22px) |
| body `p` | 15px |
| `.footer-col-title`, `.eyebrow` | 12px mono |
| `.field label`, `.privacy-note` | 11px mono |

### Body line-length
`max-width: 70ch` applied globally to `p`. Impeccable: cap 65-75ch.

## Color
- **Approach:** Restrained + one committed accent ≤10% surface.
- **Color space:** OKLCH everywhere. Never `#000` or `#fff`. Tint every neutral toward hue 50 (warm) with chroma 0.005–0.012.
- **Hue:** 50 for neutrals (warm cream sub-tone), 50 for accent, 65 for the hero gold-cast scrim.

| Token | OKLCH | Role |
|---|---|---|
| `--bg` | `oklch(0.992 0.005 50)` | Page background (near-white, warm-tinted) |
| `--bg-2` | `oklch(0.975 0.008 50)` | Section soft surface (testimonials) |
| `--bg-3` | `oklch(0.955 0.010 50)` | Photo placeholder, ic bg, form-success check |
| `--text` | `oklch(0.16 0.010 50)` | Primary text |
| `--text-2` | `oklch(0.42 0.010 50)` | Secondary text (body) |
| `--text-3` | `oklch(0.64 0.012 50)` | Tertiary text (labels, captions) |
| `--border` | `oklch(0.92 0.010 50)` | Default border (cards, dividers) |
| `--border-2` | `oklch(0.83 0.012 50)` | Hover/focused border |
| `--accent` | `oklch(0.62 0.16 50)` | Italic emphasis in titles, focus rings |
| `--accent-soft` | `oklch(0.62 0.16 50 / 0.10)` | Future soft accent surfaces |
| `--accent-warm` | `oklch(0.68 0.14 65)` | Hero scrim warm cast |
| `--surface-dark` | `oklch(0.13 0.012 50)` | Hero bg, lightbox bg (warm-tinted near-black) |
| `--surface-dark-2` | `oklch(0.20 0.014 50)` | Lightbox img frame |
| `--surface-dark-3` | `oklch(0.24 0.014 50)` | btn-primary hover |
| `--on-dark` | `oklch(0.985 0.005 50)` | Text on dark surfaces (warm-tinted near-white) |
| `--on-dark-2` | `oklch(0.92 0.008 50)` | Secondary text on dark |
| `--danger` | `oklch(0.58 0.18 25)` | Form error |

- **Dark mode:** Not implemented. The product is brand-forward and warm-toned — dark mode would dilute the memorable-thing. Out of scope unless explicit request.

## Spacing
- **Base unit:** 8px (Tailwind v4 default).
- **Density:** comfortable — generous vertical rhythm, tight inside cards.
- **Section padding (anchors vs transitions, varied for rhythm — Impeccable):**
  - `#filosofia.section` — 96px top, 80px bottom
  - `#portfolio.section` — 112px / 96px (anchor)
  - `#servizi.section` — 80px
  - `.bg-card-soft.section` (testimonials) — 72px (transition piece)
  - `#diario.section` — 88px / 96px
  - `#contatti.section` — 112px / 96px (anchor)
  - Mobile collapses all to 64px
- **Container widths:** `.wrap` max 1080px, `.wrap-narrow` max 680px, gutter 24px desktop / 20px mobile.
- **Card padding:** 28px 24px (servizio-card, testimonial). Form-card 32px / 22px mobile.

## Layout
- **Approach:** hybrid — grid-disciplined for portfolio masonry and pricing, editorial-asymmetric for hero/filosofia/closing.
- **Grid:** Portfolio masonry 3 columns desktop / 2 tablet / 1 mobile. Servizi+Testimonianze 3-col grid (acknowledged Impeccable identical-grid risk, mitigated by featured center card in Servizi). Diario 1.4fr+1fr+1fr asymmetric (1 wide + 2 small).
- **Border radius:** hierarchical scale. `--radius-sm: 6px` (buttons), `--radius-md: 8px` (inputs, photos), `--radius-lg: 12px` (cards, lightbox). Never uniform bubbly.
- **Stats strip:** asymmetric anchor (1 big metric + 3 inline secondaries). Breaks the SaaS hero-metric template per Impeccable.

## Motion
- **Approach:** intentional, slow, photographic.
- **Easing tokens (Impeccable: ease-out exponential, no bounce, no elastic):**
  - `--ease: cubic-bezier(0.16, 1, 0.3, 1)` (ease-out-expo, hover/transition default)
  - `--ease-gentle: cubic-bezier(0.25, 1, 0.5, 1)` (ease-out-quart, buttons)
- **Duration:**
  - Color/border hover: 150ms
  - Card lift / fade: 200-350ms
  - Image hover scale (photo + diario): **1200ms** — deliberately slow, photographic
  - scrollPulse: 1800ms infinite (hero scroll indicator)
- **Reduced motion:** `@media (prefers-reduced-motion: reduce)` zeros animation/transition durations and removes all `transform` hovers.
- **Reveal observer:** `.reveal / .reveal.in` CSS exists but no IntersectionObserver yet. Deferred — adds value only if applied to section heads with care to avoid FOUC.

## Texture (Risk 3 — film grain)
- 3% opacity SVG fractal noise as `body::before`, fixed-position, full-viewport, mix-blend-mode multiply.
- z-index 9999 so it sits above everything, but at 3% imperceptible on photo content.
- Reference: old `5%` version was visible/cliché; `3%` is sub-threshold but felt.

## Forbidden patterns (absolute bans, Impeccable + slop list)
- ❌ `#000` or `#fff` anywhere — verified 0 occurrences via DOM scan after FINDING-001 fix
- ❌ Em-dashes `—` in copy — verified 0 occurrences via grep
- ❌ Gradient text via `background-clip: text`
- ❌ Side-stripe borders >1px as accent
- ❌ Glassmorphism as decoration
- ❌ Purple/violet/indigo gradients
- ❌ 3-column feature grid with icons in colored circles
- ❌ Centered everything
- ❌ Uniform bubbly border-radius across all elements
- ❌ Decorative blobs, floating circles, wavy SVG dividers
- ❌ Inter / Roboto / Poppins / Space Grotesk / system-ui as primary display/body
- ❌ "Welcome to" / "Unlock the power of" hero copy

## Decisions Log
| Date | Decision | Rationale |
|---|---|---|
| 2026-05-20 | Adopt Emil Kowalski minimal as structural baseline | First refactor: drop vintage-luxury ornaments (Playfair, gold, dropcap, ✦ dividers, sepia) for design-engineering discipline |
| 2026-05-20 | Apply pbakaus/impeccable rules on top | OKLCH neutrals, ease-out-expo, 1.25 type scale, varied rhythm, anchor stats, no em-dashes |
| 2026-05-20 | 6 findings from /design-review fixed | Pure colors removed, footer hierarchy fixed, touch targets bumped, gallery filter wired, prefers-reduced-motion respected |
| 2026-05-20 | Risk 1 — two-voice typography (Fraunces italic em in DM Sans titles) | Differentiator vs peer landscape (Erich McVey monochrome / Koman cream-blush); ties to memorable-thing via handcrafted feel |
| 2026-05-20 | Risk 2 — accent chroma bumped 0.14 → 0.16, hue 45 → 50, hero scrim warm gold cast | Sito identificabile da uno screenshot singolo; communicates "luce toscana" without saying it |
| 2026-05-20 | Risk 3 — film grain 3% body overlay restored | Analog texture DM Sans alone can't carry; below perceptual threshold on photos |
| 2026-05-20 | Stats strip torna a 4 celle uniformi con divisori verticali | Override utente del pattern Impeccable anchor-asimmetrico. Preferenza dichiarata: ritmo regolare, peso visivo identico. Editorial almanac > hero-metric SaaS rotto |

## Open items / not yet done
- IntersectionObserver for `.reveal` classes (currently dead CSS — needs careful FOUC handling).
- `:focus-visible` rings on `.pill`, `.opt`, `.lang-switch button` (flagged in design-review).
- Servizi + Testimonianze are identical card grids — Impeccable flags this. Mitigation in Servizi is the featured center card; Testimonianze still uniform. Consider one wide + 2 narrow variant if convergence becomes a real problem.
- `aria-label` on sections without an id (hero, stats, testimonianze, closing-quote).
