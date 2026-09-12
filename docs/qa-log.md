# QA Log

Running record of QA sweeps: what was tested, what was fixed, what is
*known and deliberate* so it doesn't get re-reported, and where the
remaining risk lives. Newest first.

## Baseline 2026-09-11 — first docs pass, no sweep yet

Verified during the docs pass: `npm run check` (tsc + eslint) clean; `/`
and `/registry` return 200 on a fresh dev server with the seeded PGlite
database. No click-through beyond that; no form submissions were tested
in this pass.

### Known and deliberate — don't re-report

- **Nav "Benefits" links to `#values`, which is the Glåümises heading.**
  The section id predates the label. Harmless; rename both together if it
  ever matters.
- **Nav "Attunement" links to the "... Is this a joke?" essay.** Intended:
  that is the section that explains attunement.
- **The newsletter form declares success after 800 ms** without reading
  Brevo's response. Brevo's endpoint answers inside the hidden iframe and
  the page cannot read it cross-origin. A failed signup looks like success.
- **The Amendment Key is a URL query parameter.** It lands in browser
  history and anywhere the link is pasted. This is the product: no
  accounts, no recovery. See `docs/architecture.md` → Auth.
- **Hidden records 404** on both the record and amend pages rather than
  showing a "removed" notice. Deliberate: hidden means gone from the public.
- **The events page has one hardcoded event.** Editing the page is the
  CMS.
- **`.data/` and the seed records are dev-only.** Prod starts empty.

### Open items

- **No abuse controls on Form 7-G.** Anyone can insert unlimited rows; no
  rate limiting, honeypot, or moderation queue. The `hidden` flag is the
  only lever, and it is database-only. Worth a honeypot field and a per-IP
  limit before the domain is cut over.
- **The list is unpaginated.** Fine at tens of records; revisit at hundreds.
- **`revalidatePath` is largely redundant on `force-dynamic` pages.** It is
  kept as belt-and-braces; if those pages ever move to ISR, the calls become
  load-bearing.
- **Schema is defined in three places** (`db/schema.sql`, `lib/schema.ts`,
  `lib/db.ts`). Drift is possible; the checklist in `docs/database.md` is
  the guard.
- **Home page copy is baked into `app/page.tsx`.** Every copy edit is a
  deploy. Acceptable for now.
- **No CI, no remote.** See `docs/branching.md`.

### Highest-value manual tests

1. Register a new Glåümer with every optional field blank; confirm the
   welcome notice, the copied link works in a private window, and the
   record appears last in `/registry`.
2. Amend with the right key (fields prefilled, change the sigil, confirm
   `amended=1`) and with a wrong key (Custody Not Established, no form).
3. Submit a 61-character name and a 601-character testimony; confirm the
   `name` and `length` error copy.
4. Set `hidden = true` on a row; confirm list, record, and amend all drop it.
5. Clear the `glaum_initiated` cookie; confirm the entry overlay appears on
   `/` only and stays dismissed after "I am ready."
6. At ~380 px wide: nav hamburger, the triptych stacking to one column,
   decree cards not overflowing, the ribbon's notched ends.
7. Events page: the Luma iframe loads and the fallback link opens the event.
