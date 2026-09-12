# Design System

The look is a folk-art shrine crossed with mid-century civic paperwork:
lilac ground, parchment cards, gold rules and frames, a dreamy display face.
Everything lives in `app/globals.css` (tokens in `@theme inline`, house
classes below it) and Tailwind v4 utilities derived from those tokens.

## Colour tokens

| Token | Hex | Utility | Usage |
|---|---|---|---|
| `ink` | `#2a1836` | `text-ink` | Body text. Most copy is `text-ink/85`, muted copy `/60`–`/50`, footnotes `/45`–`/40` |
| `plum` | `#3b204a` | `bg-plum` | Secondary buttons, event card header, ribbon |
| `plum-deep` | `#241430` | `bg-plum-deep` | Nav, footer, entry overlay, newsletter band |
| `lilac` | `#ebdcf4` | | Reserved light purple |
| `lilac-soft` | `#f4ebf9` | | Reserved lighter purple |
| `parchment` | `#fdf8e7` | `bg-parchment` | Card faces (`ornate-frame`, `decree-frame`, notices) |
| `cream` | `#fffacd` | `text-cream` | Text on plum; the hero glow |
| `gold` | `#c8a848` | `border-gold`, `decoration-gold` | Rules, frames, outlines, underline decoration |
| `gold-deep` | `#634d0b` | `text-gold-deep` | Headings, sigils, links on parchment |
| `magenta` | `#d239f8` | `bg-magenta` | Primary CTA. Hover is the literal `#b820d4` |

**Page ground:** `body` carries a fixed lilac gradient (`#d9a8f2 → #c78ae9 →
#b06ddd`) with a cream radial glow at the top. Dark bands (nav, footer,
newsletter) sit on `plum-deep`; the sincere essays sit on `.essay-band`, a
translucent ink wash that fades in and out.

## Typography

| Font | Source | Variable → utility | Use |
|---|---|---|---|
| Tokyo Dreams | `public/fonts/TokyoDreams.otf` (local) | `--font-tokyo` → `font-tokyo` | Wordmark, headings, kickers, buttons, labels |
| Tokyo Dreams Plain | `public/fonts/TokyoDreamsPlain.otf` (local) | `--font-tokyo-plain` → `font-tokyo-plain` | Long titles where the ornate face gets busy (`DecreeCard plainTitle`) |
| Libre Baskerville | Google via `next/font` (400/700, italic) | `--font-baskerville` → body default | All running copy |

Scale in practice: page `h1` `text-4xl sm:text-5xl lg:text-6xl`; section
`h2` the same via `SectionHeading`; card `h3` `text-2xl sm:text-3xl`;
kickers `text-xs`/`text-[0.65rem]` with `tracking-[0.3em]` and often
uppercase; body `text-lg lg:text-xl leading-[1.7]` on the home page,
`text-base sm:text-lg leading-relaxed` inside cards. Use `text-balance` on
headings.

## House CSS classes (`globals.css`)

| Class | What it is |
|---|---|
| `.gold-rule` | 2 px gold rule fading at both ends. Sized with a width utility (`w-48` under section headings, `w-32`/`w-28` in cards) |
| `.ornate-frame` | Parchment card: gold border, offset gold outline, soft shadow, `◆` centred on the top and bottom edges. Registry cards, forms, certificates |
| `.decree-frame` + `.decree-corner-{tl,tr,bl,br}` + `.decree-body` | The charter page: 5 px double gold rule, corner ticks, drop cap on the first paragraph. Used only by `DecreeCard` |
| `.value-ribbon` | Plum ribbon with notched ends, under the values triptych |
| `.essay-band` | Translucent ink wash behind the sincere essays |
| `.hero-radiance` | Conic sunburst behind the hero image, masked so it fades above the text |
| `.hero-frame` | 3 px gold border + offset outline + cream glow for the hero image |
| `.shimmer` | Slow diagonal light sweep, ported from the old site |

## Components

- **`SectionHeading`** — centred `h2` + `gold-rule w-48`. Takes `id` for nav
  anchors (adds `scroll-mt-24`).
- **`SectionDivider`** — `°•• <Sigil> ••°` in `gold-deep/70`. `glyph` picks
  the sigil. Used between home sections; vary the glyph.
- **`DecreeCard`** — kicker, medallion (`TenetIcon` in a double gold ring),
  title, `gold-rule w-28`, drop-capped body, mini seal + footer line. Props:
  `kicker`, `title`, `icon`, `footer`, `plainTitle?`.
- **`ValuesTriptych`** — three `next/image` panels (`/images/{compassion,
  community,playfulness}.png`, 1187 px wide, alpha, arch and title baked
  in) in a 3-up grid with a drop shadow, plus the ribbon.
- **`Sigil`** — inline SVG by key: `eye` `triangle` `hand` `shrimp` `teacup`
  `star`. Inherits `currentColor`; size with `className`.
- **`TenetIcon`** — inline SVG by key: `regard` `ascension` `inclusivity`
  `satire` `feelings` `amplification`.
- **`RegistryFormFields`** — the six Form 7-G fields; shared by register and
  amend. Field styles are the `fieldLabel` / `fieldInput` / `fieldNote`
  constants at the top of the file.

## Buttons

All are pill-shaped, `font-tokyo tracking-widest text-sm`, uppercase copy.

| Variant | Classes | Use |
|---|---|---|
| Primary | `bg-magenta text-cream hover:bg-[#b820d4]` | Register, submit, "Attune me" |
| Secondary | `bg-plum text-cream hover:bg-plum-deep` | Browse, amend, return home |
| Ghost on dark | `border border-cream/40 text-cream hover:bg-cream/10` | Entry screen |
| Text link | `underline decoration-gold underline-offset-4 hover:text-gold-deep` | "Return to the Registry" |

Notices (welcome/amended): `rounded-md border border-gold bg-parchment`.
Errors: `border-magenta/50 bg-magenta/10`.

## Layout

Content columns: `max-w-5xl` for sections, `max-w-2xl`/`max-w-3xl` for
prose and forms, `max-w-6xl` for nav/footer. Pages start with `pt-28`
(`pt-24` on events) to clear the fixed nav. Sections are `py-16`; the
registry CTA `py-20`; newsletter `py-24`. Sections that could overflow
horizontally (sunburst, triptych) use `overflow-x-clip`.

## Images

Source assets in `public/images/`. Photos and scans are `.webp` in
`-desktop`/`-mobile` pairs (`ResponsiveImage` in `app/page.tsx` swaps at
`md`). Illustrations with transparency are PNG.

Optimize before committing. No image tools are installed globally, but
sharp ships inside `node_modules` through Next. Recipe for an alpha PNG,
run from the repo root (keeps dimensions, palette-quantizes, ~65 % smaller,
no visible loss on flat-colour art):

```js
import sharp from "/Users/chante/Projects/glaum-ca/node_modules/sharp/lib/index.js";
await sharp("public/images/x.png")
  .png({ palette: true, quality: 90, effort: 10, compressionLevel: 9, dither: 1 })
  .toFile("out/x.png");
```

Check a side-by-side crop before swapping the file in. Photos should go
to WebP (`.webp({ quality: 82 })`) instead.

## Voice

Two registers, and the seam between them is the design.

**The Department** — bureaucratic satire for the Registry, the nav labels,
the 404, buttons, footnotes. Deadpan officialdom that is secretly warm:
"Registration takes one to four minutes, depending on your knees."
"Guard it as you would a small hand." "Errors are part of the record."
Numbered forms, revision dates, record numbers, capitalized Nouns
(Glåümer, Glåümise, the ManyHands, Attunement). Jokes land in the
footnote, not the headline.

**The sincere register** — the essays ("Is this a joke?", "A note on
cults") and the body of the tenet and policy cards. Plain, first-person
plural, no winking. The cards keep their ceremonial frame (kicker,
medallion, seal) but the words mean exactly what they say. The commit
history has already corrected the joke leaking into these twice; keep it
out.

Spelling: **Glåüm**, **Glåümer**, **Glåümise(s)**, **Glåümule(s)**,
**ManyHands** (one word in headings; "Many Hands" appears in event copy),
**Chanté**. Use real typographic quotes and the `&rsquo;` entity in JSX.
