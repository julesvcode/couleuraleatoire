# GenerateurDeCouleur.com — Expansion Roadmap

## Context

The homepage has already been improved with:
- stronger homepage copy
- HEX, RGB, HSL and CMYK values
- copy-to-clipboard functionality
- improved title and meta description

These changes appear to have coincided with a small uplift in Google Search Console impressions and clicks after 18 August 2026.

The next goal should be to grow `generateurdecouleur.com` from a one-page random colour generator into a small French-language colour tools site, while keeping the homepage tightly focused on the query cluster it already ranks for:

- générateur de couleur aléatoire
- générateur de couleur
- couleur aléatoire
- couleur au hasard

The homepage should remain the main landing page for these searches. Expansion should happen through dedicated, genuinely useful tools and colour reference pages.

---

# 1. Recommended Site Positioning

Current positioning:

> A random colour generator.

Recommended broader positioning:

> Des outils de couleur simples, rapides et gratuits.

The site should remain lightweight and utility-first rather than becoming a generic design blog.

Suggested top-level structure:

```text
/
├── palette-couleurs/
├── generateur-degrade/
├── convertisseur-couleur/
├── contraste-couleurs/
├── selecteur-couleur/
├── couleur-depuis-image/
├── choisir-une-couleur-au-hasard/
├── tirage-au-sort-couleur/
└── couleurs/
    ├── bleu/
    ├── rouge/
    ├── vert/
    ├── rose/
    ├── violet/
    ├── orange/
    ├── jaune/
    ├── beige/
    ├── gris/
    └── etc.
```

---

# 2. Homepage — Remaining Product Improvements

These are the homepage changes still worth adding beyond the copy and colour-format work already completed.

## 2.1 Recent colours

Add a section directly beneath the generator:

### Vos dernières couleurs

Display the last 5–10 colours generated during the current session.

Each swatch should:
- show the colour
- show its HEX code
- copy the HEX value on click
- optionally restore that colour as the active colour

Use `localStorage` if you want the history to persist between visits.

## 2.2 Keyboard shortcut

Allow users to generate a new colour with the space bar.

Example helper text:

> Appuyez sur Espace pour générer une nouvelle couleur.

Do not trigger while the user is focused on an input field.

## 2.3 More tools section

Once the first additional tools exist, add a compact internal-linking section below the generator.

### Plus d'outils de couleur

Suggested cards:

- **Créer une palette** — Générez une palette de couleurs harmonieuse.
- **Créer un dégradé** — Créez un dégradé CSS entre plusieurs couleurs.
- **Convertir une couleur** — Convertissez HEX, RGB, HSL et CMYK.
- **Vérifier le contraste** — Testez la lisibilité de deux couleurs.

This section becomes the main internal-linking hub from the strongest page on the domain.

## 2.4 Simple-colour randomiser

Add a small secondary tool lower on the homepage:

### Vous voulez simplement choisir une couleur au hasard ?

Instead of generating from millions of HEX colours, choose from common colour names:

- Rouge
- Bleu
- Vert
- Jaune
- Orange
- Violet
- Rose
- Noir
- Blanc
- Gris
- Marron

Example:

```text
Le hasard a choisi :

🔵 BLEU

[ Choisir une autre couleur ]
```

This directly supports searches already seen in GSC such as:

- choisis une couleur au hasard
- donne-moi une couleur au hasard
- dis-moi une couleur au hasard

The full version should ultimately live on its own dedicated page.

## 2.5 Homepage internal links

As new tools launch, add contextual links inside the existing content.

Examples:

- “Besoin de plusieurs couleurs ? → Générateur de palette”
- “Besoin de convertir ce code ? → Convertisseur de couleur”
- “Vous créez une interface ? → Vérifier le contraste”
- “Vous voulez seulement rouge, bleu, vert… ? → Choisir une couleur au hasard”

Avoid adding links before the corresponding pages exist.

---

# 3. Tool #1 — Choose a Simple Colour at Random

## URL

`/choisir-une-couleur-au-hasard/`

## Primary intent

People who are not looking for a precise HEX value but simply want the site to choose a named colour.

## Suggested H1

# Choisir une couleur au hasard

## UX

Default state:

```text
Cliquez sur le bouton pour laisser le hasard choisir.

[ Choisir une couleur ]
```

Result:

```text
Le hasard a choisi :

BLEU

[ Choisir une autre couleur ]
```

Useful options could include:

- Couleurs classiques
- Couleurs personnalisées

For custom colours, users could enter:

```text
Rouge
Bleu
Jaune
Vert
```

and the tool randomly selects one.

## SEO opportunity

Directly based on GSC queries already generating impressions.

Target variations naturally in copy:

- choisir une couleur au hasard
- choisis une couleur au hasard
- donne-moi une couleur au hasard
- dis-moi une couleur au hasard
- couleur au hasard

---

# 4. Tool #2 — Colour Draw / Random Picker

## URL

`/tirage-au-sort-couleur/`

## Suggested H1

# Tirage au sort de couleur

## Purpose

A more functional random picker for:

- classrooms
- games
- workshops
- teams
- activities
- board games
- children

## UX

Textarea or repeatable inputs:

```text
Rouge
Bleu
Vert
Jaune
Rose
```

Then:

```text
[ Tirer une couleur ]

Résultat : VERT
```

Useful features:

- remove a colour after it is drawn
- allow duplicates / no duplicates
- reset
- save list locally
- shareable list later if worthwhile

## Relevant query cluster

Already observed in GSC:

- tirage au sort couleur
- tirage au sort de couleur
- tirage au sort couleur en ligne
- dé virtuel couleur

---

# 5. Tool #3 — Palette Generator

## URL

`/palette-couleurs/`

## Suggested H1

# Générateur de palette de couleurs

## Why this should be one of the first major tools

It naturally expands the site from a novelty/random utility into something designers and developers can repeatedly use.

## MVP

Generate 5 colours.

Each colour should have:

- visible swatch
- HEX value
- copy button
- lock/unlock button

Main actions:

- Générer une nouvelle palette
- Copier toutes les couleurs

## Phase 2 features

- lock individual colours
- reorder colours
- generate from one starting colour
- palette harmony modes:
  - complémentaire
  - analogue
  - triadique
  - monochrome
- copy as CSS variables
- download PNG
- download JSON
- shareable URL

Example output:

```text
#E63946
#F1FAEE
#A8DADC
#457B9D
#1D3557
```

## Internal links

Link from:
- homepage
- individual colour pages
- image colour extractor
- gradient generator

---

# 6. Tool #4 — Colour Converter

## URL

`/convertisseur-couleur/`

## Suggested H1

# Convertisseur de couleur HEX, RGB, HSL et CMYK

## MVP

One colour input updates all formats automatically.

Show:

```text
HEX
#FF5733

RGB
rgb(255, 87, 51)

HSL
hsl(11, 100%, 60%)

CMYK
0%, 66%, 80%, 0%
```

Every value should have a copy button.

## Important SEO approach

Start with one excellent converter rather than immediately creating multiple near-identical thin pages.

Do not initially create:

- `/hex-vers-rgb/`
- `/rgb-vers-hex/`
- `/hex-vers-hsl/`

unless GSC later shows meaningful demand that justifies unique pages.

## Possible future features

- colour preview
- opacity / alpha
- CSS-ready output
- validation for malformed input
- URL state so conversions can be shared

---

# 7. Tool #5 — Gradient Generator

## URL

`/generateur-degrade/`

## Suggested H1

# Générateur de dégradé de couleurs CSS

## MVP

Inputs:

- colour 1
- colour 2
- direction / angle

Live preview.

Output:

```css
background: linear-gradient(90deg, #FF5733, #457B9D);
```

Actions:

- copier le CSS
- inverser les couleurs
- ajouter une couleur

## Phase 2

- radial gradients
- multiple stops
- presets
- random gradient
- download image
- gradient based on a chosen colour

---

# 8. Tool #6 — Contrast Checker

## URL

`/contraste-couleurs/`

## Suggested H1

# Testeur de contraste de couleurs

## UX

Inputs:

```text
Couleur du texte
#111111

Couleur du fond
#FFFFFF
```

Result:

```text
Contraste : 18.88 : 1

✓ WCAG AA
✓ WCAG AAA
```

Include:

- normal text result
- large text result
- pass / fail
- live preview of text over the chosen background

## Useful internal-link opportunity

On every colour page:

> Cette couleur est-elle lisible avec du blanc ou du noir ? → Tester le contraste

---

# 9. Tool #7 — Colour Picker

## URL

`/selecteur-couleur/`

## Suggested H1

# Sélecteur de couleur en ligne

## Features

- native colour picker
- HEX
- RGB
- HSL
- CMYK
- copy values
- preview
- recent colours

This overlaps slightly with the homepage, so it is a lower priority than palette / converter / gradient.

---

# 10. Tool #8 — Extract Colours From an Image

## URL

`/couleur-depuis-image/`

## Suggested H1

# Extraire les couleurs d'une image

## UX

User uploads an image locally.

The browser analyses the image and returns:

- dominant colour
- 5-colour palette
- HEX codes
- copy buttons

Potential actions:

- copier la palette
- open palette in palette generator
- download palette

## Important implementation preference

If possible, process the image completely client-side.

Benefits:

- no uploads to server
- no storage
- no API costs
- privacy friendly

---

# 11. Colour Reference Pages

This is the biggest longer-term SEO expansion opportunity.

Start only after the core tools are live.

## Main directory

`/couleurs/`

Suggested H1:

# Couleurs : codes, nuances et palettes

This page can list major colour families.

## Initial colour pages

Start with high-level colours:

```text
/couleurs/bleu/
/couleurs/rouge/
/couleurs/vert/
/couleurs/rose/
/couleurs/violet/
/couleurs/orange/
/couleurs/jaune/
/couleurs/beige/
/couleurs/gris/
/couleurs/marron/
/couleurs/noir/
/couleurs/blanc/
```

## Example page

URL:

`/couleurs/bleu/`

H1:

# Couleur bleue : codes HEX, nuances et palettes

The page should be interactive and useful rather than just SEO copy.

Suggested sections:

### Nuances de bleu

Example swatches:

- Bleu ciel — `#87CEEB`
- Bleu roi — `#4169E1`
- Bleu marine — `#000080`
- Bleu pastel — `#A7C7E7`
- Bleu électrique
- Bleu turquoise
- Bleu nuit
- Bleu pétrole
- etc.

Each swatch:

- displays colour
- shows name
- shows HEX
- copies on click

### Palette avec du bleu

Generate a useful 5-colour palette using blue.

### Couleur complémentaire du bleu

Show complementary colours and link to the palette generator.

### Dégradés bleus

Show several gradients and link to the gradient tool.

### Codes du bleu

Show key values in:

- HEX
- RGB
- HSL
- CMYK

### Tester le contraste

Link into the contrast checker with the blue value prefilled.

---

# 12. Long-Tail Colour Pages

Only expand into these after checking GSC and keyword data.

Possible examples:

```text
/couleurs/bleu-ciel/
/couleurs/bleu-marine/
/couleurs/bleu-roi/
/couleurs/bleu-nuit/
/couleurs/vert-sauge/
/couleurs/vert-olive/
/couleurs/rose-poudre/
/couleurs/rose-pastel/
/couleurs/beige-sable/
/couleurs/jaune-moutarde/
```

## Important rule

Do not mass-produce hundreds of thin colour pages.

Each indexed page should contain genuinely useful data and interactivity:

- visual swatches
- codes
- variants
- palettes
- gradients
- complementary colours
- contrast information
- tool links

Use search demand to decide what gets its own page.

---

# 13. Suggested Navigation

Once there are enough pages, introduce a lightweight header navigation.

Example:

```text
Générateur de Couleur

Outils
Couleurs
```

Under Outils:

- Couleur aléatoire
- Palette
- Dégradé
- Convertisseur
- Contraste
- Couleurs d'une image

Keep navigation simple. The homepage generator should remain visually dominant.

---

# 14. Suggested Footer

Example:

```text
Générateur de Couleur
Des outils gratuits pour générer, choisir et utiliser des couleurs.

Outils
- Couleur aléatoire
- Palette
- Dégradé
- Convertisseur
- Contraste

Couleurs
- Bleu
- Rouge
- Vert
- Rose
- Toutes les couleurs

À propos
Confidentialité
```

The footer should become another strong internal-linking area.

---

# 15. Internal Linking Strategy

Every tool should link naturally to related tools.

Examples:

## Homepage

Links to:
- palette
- converter
- gradient
- contrast
- simple random colour

## Palette generator

Links to:
- gradient
- contrast
- individual colour pages

## Colour pages

Links to:
- palette generator
- gradient generator
- converter
- contrast checker

## Image extractor

Links to:
- palette generator
- individual colour pages

## Converter

Links to:
- contrast
- palette

The goal is to create a connected colour-tool ecosystem rather than isolated landing pages.

---

# 16. Content Strategy

Avoid turning the project into a generic design blog.

Do **not** make blogging the main expansion strategy.

Avoid generic content such as:

- 10 tendances couleurs de 2026
- les meilleures couleurs pour votre logo
- comment choisir une couleur pour votre marque

unless GSC eventually shows a very strong opportunity.

Prioritise:

1. tools
2. utility pages
3. colour reference pages
4. only then supporting editorial content

---

# 17. SEO Principles

## Keep homepage intent stable

Do not broaden the homepage so much that it loses relevance for:

- générateur de couleur aléatoire
- couleur aléatoire
- couleur au hasard

The homepage is already ranking and should stay focused.

## One intent per page

Examples:

- `/` → random precise colour
- `/choisir-une-couleur-au-hasard/` → simple named random colour
- `/tirage-au-sort-couleur/` → random picker from a list
- `/palette-couleurs/` → palette generation
- `/convertisseur-couleur/` → colour conversion

Avoid cannibalising the homepage with multiple pages targeting the exact same phrase.

## Let GSC guide expansion

After every batch of new pages:

- wait for indexing
- watch impressions
- identify unexpected query clusters
- improve pages Google is already testing
- create a dedicated page only when the intent is meaningfully different

---

# 18. Monetisation Strategy

## Stage 1 — Affiliate

This is the easiest monetisation to test before traffic is large.

Use contextual placements rather than random footer links.

Examples:

After palette generation:

> Vous créez un site web ? Utilisez cette palette pour créer votre site avec Framer.

Potential categories:

- website builders
- design software
- creator tools

Keep this subtle and relevant.

## Stage 2 — Display Ads

Display ads become more interesting once the site has meaningful traffic across many tools and colour pages.

Avoid ads that interfere with the core tool.

Good placements could include:

- below the main tool
- between informational sections
- sidebar on desktop later
- lower on colour reference pages

Do not optimise aggressively for ads while traffic is still low.

## Stage 3 — Email Capture

Makes more sense once the site attracts palette/design users rather than only random-colour users.

Possible lead magnet:

> 100 palettes de couleurs prêtes à utiliser

Could be:

- PDF
- PNG pack
- Figma resource
- downloadable JSON/CSS palette pack

This could then support relevant affiliate promotions later.

## Stage 4 — Optional Paid Asset

Not a priority.

Possible future products:

- large curated palette library
- UI colour system
- brand palette pack
- CSS variable palette pack
- Figma colour library

The main website itself should remain free.

---

# 19. Suggested Build Order

## Phase 1 — Strengthen the existing asset

Already completed or partially completed:

- [x] improve homepage copy
- [x] improve metadata
- [x] show HEX
- [x] show RGB
- [x] show HSL
- [x] show CMYK
- [x] copy values

Still worth adding:

- [ ] recent colours
- [ ] space-bar shortcut
- [ ] internal “more tools” section once tools exist
- [ ] simple-colour mini randomiser
- [ ] stronger footer/navigation when the site expands

## Phase 2 — GSC-led long-tail tools

Build first because existing GSC already validates the intent:

1. [x] `/choisir-une-couleur-au-hasard/`
2. [ ] `/tirage-au-sort-couleur/`

## Phase 3 — Core colour utilities

3. [ ] `/palette-couleurs/`
4. [ ] `/convertisseur-couleur/`
5. [ ] `/generateur-degrade/`
6. [ ] `/contraste-couleurs/`

## Phase 4 — Additional utilities

7. [ ] `/couleur-depuis-image/`
8. [ ] `/selecteur-couleur/`

## Phase 5 — Colour directory

9. [ ] `/couleurs/`
10. [ ] blue
11. [ ] red
12. [ ] green
13. [ ] pink
14. [ ] purple
15. [ ] orange
16. [ ] yellow
17. [ ] beige
18. [ ] grey
19. [ ] brown
20. [ ] black
21. [ ] white

## Phase 6 — Data-led expansion

Use GSC to decide whether to create pages for:

- bleu ciel
- bleu marine
- bleu roi
- bleu nuit
- vert sauge
- vert olive
- rose poudré
- rose pastel
- beige sable
- jaune moutarde
- etc.

Do not create them simply to increase page count.

---

# 20. Recommended Technical Approach

This project is especially well suited to a static-first stack.

Recommended setup:

- Astro
- Tailwind CSS
- vanilla JavaScript / small Astro islands for interactivity
- static pages for SEO content
- client-side colour calculations
- no database for the initial phases
- no authentication
- no external APIs where possible

Potential utilities:

- colour conversion functions in a shared `/utils/color.ts`
- shared colour swatch component
- shared copy button
- shared colour input
- shared palette component
- shared SEO component / metadata helper

Example structure:

```text
src/
├── components/
│   ├── ColorSwatch.astro
│   ├── ColorValue.astro
│   ├── CopyButton.astro
│   ├── ToolCard.astro
│   └── ColorToolLayout.astro
│
├── layouts/
│   └── BaseLayout.astro
│
├── pages/
│   ├── index.astro
│   ├── palette-couleurs.astro
│   ├── generateur-degrade.astro
│   ├── convertisseur-couleur.astro
│   ├── contraste-couleurs.astro
│   ├── choisir-une-couleur-au-hasard.astro
│   ├── tirage-au-sort-couleur.astro
│   └── couleurs/
│       ├── index.astro
│       └── [slug].astro
│
├── data/
│   └── colors.ts
│
└── utils/
    └── color.ts
```

For colour pages, store structured data rather than hardcoding every page.

Example:

```ts
{
  slug: "bleu",
  name: "Bleu",
  hex: "#0000FF",
  shades: [
    {
      name: "Bleu ciel",
      hex: "#87CEEB"
    },
    {
      name: "Bleu marine",
      hex: "#000080"
    }
  ]
}
```

Astro can generate the pages statically from that data.

---

# 21. What Not to Build Yet

Avoid adding unnecessary complexity.

Do not prioritise:

- user accounts
- saved cloud palettes
- subscriptions
- AI colour generation
- a database
- community features
- public profiles
- hundreds of auto-generated pages
- a large blog

The site's advantage should be:

> extremely simple tools that load instantly and answer very specific colour-related searches.

---

# 22. Success Metrics

Track progress primarily through Google Search Console.

For every new page monitor:

- impressions
- clicks
- CTR
- average position
- query growth
- number of ranking queries

Also track:

- organic landing pages
- tool usage
- copy button clicks
- repeat visitors
- internal clicks to another tool

Useful event examples:

```text
generate_color
copy_hex
copy_rgb
copy_hsl
copy_cmyk
generate_palette
copy_palette
generate_gradient
copy_gradient_css
check_contrast
internal_tool_click
```

---

# 23. Core Principle

Do not try to turn the site into a huge project immediately.

The strongest path is:

```text
1 useful page
↓
a few validated utility pages
↓
a connected collection of colour tools
↓
high-quality colour reference pages
↓
GSC reveals additional long-tail opportunities
↓
expand only where search demand exists
```

The aim is to build a small, low-maintenance French colour utility site that can compound organic traffic over time without requiring APIs, accounts, a backend or significant ongoing maintenance.
