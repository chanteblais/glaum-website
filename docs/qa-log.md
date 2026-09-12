# QA Log

Running record of QA sweeps: what was tested, what was fixed, what is
*known and deliberate* so it doesn't get re-reported, and where the
remaining risk lives. Newest first.

## 2026-09-12 — Events page shelved (`chore/shelve-events`)

Removed `app/events/page.tsx`, its banner `public/images/glaum-events.png`
(2.6 MB), and the nav item. No upcoming event to show. Verified:
`npm run check` clean; production build static; `/` 200; `/events` 404.

## 2026-09-12 — Registry shelved (`chore/shelve-registry`)

Removed from `main`: `app/registry/*`, `RegistryForm`, `CopyKeyLink`,
`lib/*` (db, schema, glaumers, registry-options), `db/schema.sql`, the
Drizzle / PGlite / postgres deps, `serverExternalPackages`, the nav item,
the home CTA section and the testimonials link. Preserved on
`feat/registry`. The Registry-specific open items and manual tests below
travel with it; what remains applies to the static site.

Verified: `npm run check` clean; `/`, `/events` 200; `/registry` 404.

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

### Open items

- **(Registry, shelved)** Before it returns: abuse controls on Form 7-G
  (honeypot + per-IP limit; the `hidden` flag is the only lever today),
  pagination past tens of records, and the schema being defined in three
  files (`docs/database.md` has the checklist).
- **Home page copy is baked into `app/page.tsx`.** Every copy edit is a
  deploy. Acceptable for now.
- **No CI.** The remote exists (since 2026-09-12); nothing runs
  `npm run check` on push yet. See `docs/branching.md`.

### Highest-value manual tests

1. Clear the `glaum_initiated` cookie; confirm the entry overlay appears on
   `/` only and stays dismissed after "I am ready."
2. At ~380 px wide: nav hamburger, the triptych stacking to one column,
   decree cards not overflowing, the ribbon's notched ends.
3. Every nav anchor lands on its heading with the fixed nav clear of it.
4. `/registry`, `/registry/register`, and `/events` return the 404 page.

Registry tests (run on `feat/registry` when it returns): register with all
optional fields blank and confirm the welcome notice + copied link; amend
with a right and a wrong key; 61-char name and 601-char testimony error
copy; `hidden = true` drops a row from list, record, and amend.
