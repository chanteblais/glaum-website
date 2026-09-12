# glaum.ca — Session Brief

Loaded automatically at the start of every Claude session in this repo (via
`CLAUDE.md` → `@AGENTS.md`). Deliberately short; the detailed docs in `docs/`
are read on demand. Same pattern as the camp app and All Hands repos.

## This repo, not that one

This is the public **glaum.ca** site (marketing pages + the Glåümer Registry).
It is **not** the Glåüm camp member app — that is `../glaum-camp-website`
(deployed at camp.glaum.ca), with its own database, docs, and conventions.
Nothing here talks to the camp app or its Supabase database, and the camp
dev board (`~/Documents/Glaum/TASKS.md`) does not track this project.

Before your first commit: `git rev-parse --show-toplevel` must end in
`/glaum-ca`. A session about members, shifts, groups, admin, schedule, or
messaging belongs in the camp repo — stop and switch rather than commit here.
(The camp repo has a pre-commit tripwire for the reverse mistake.)

## This is NOT the Next.js you know

Next.js 16 has breaking changes — APIs, conventions, and file structure may
differ from training data. Read the relevant guide in
`node_modules/next/dist/docs/` before writing any Next code. Heed deprecation
notices.

**Stack:** Next.js 16 (App Router, Turbopack) · React 19 · TypeScript ·
Tailwind v4 (CSS-first `@theme`, no `tailwind.config`) · Drizzle ORM ·
embedded PGlite in dev / any Postgres via `DATABASE_URL` in prod · Vercel
(target; not yet deployed — the live glaum.ca is still the old static site).

## Detailed docs — read only when relevant, don't preload
- `docs/architecture.md` — routing, data flow, server actions, the Amendment
  Key auth model, rendering, fonts/images, config, deploy
- `docs/database.md` — the `glaumers` table, dev vs prod DB, seed records,
  schema-change checklist, migrations ledger
- `docs/features.md` — every page and section, who it's for, key states
- `docs/design-system.md` — tokens, fonts, CSS classes, component patterns,
  and the house voice
- `docs/branching.md` — branch/merge/ship rules, parallel-session guard
- `docs/qa-log.md` — what's known-and-deliberate (don't re-report), open
  items, highest-value manual tests

## Conventions & gotchas
- **Branching:** `main` = deployable. Branch for anything non-trivial
  (`type/slug`: `feat/` `fix/` `ux/` `docs/` `chore/`), verify, merge
  `--no-ff`, delete the branch. Tiny tweaks may go straight to `main`.
  There is **no git remote yet** — nothing is pushed anywhere; say so when
  it matters. Full rules: `docs/branching.md`.
- **Verify:** `npm run check` (tsc + eslint) plus a click-through of the
  affected pages on a local dev server. No test suite exists.
- **Review server (standing task):** once a change is implemented, start
  the dev server and leave it running so Chanté can look
  (`npm run dev -- -p 3001`, background). Port **3000 is Chanté's** — don't
  start or stop anything there unless she asks. Give a review checklist:
  each page to visit and what to look for. Never kill a server you didn't
  start; check `lsof -nP -iTCP:<port> -sTCP:LISTEN` first.
- **Docs before commit (standing task):** fold the change into
  `docs/database.md` (schema + ledger), `docs/features.md`,
  `docs/architecture.md`, `docs/design-system.md` as relevant, so docs land
  in the **same commit** as the code. A commit that changes schema, routes,
  or UX with untouched docs is incomplete.
- **Schema changes live in three places** and must stay identical:
  `db/schema.sql` (canonical, run once in prod), `lib/schema.ts` (Drizzle),
  and `CREATE_TABLE_SQL` in `lib/db.ts` (dev bootstrap). Checklist in
  `docs/database.md`. Print any prod SQL verbatim in the final summary —
  Chanté applies it herself.
- **Images:** optimize before committing. Photos/scans → `.webp`;
  illustrations with alpha → palette-quantized PNG (sharp is in
  `node_modules` via Next; `docs/design-system.md` → Images has the recipe).
  Nothing over ~1 MB in `public/images/` without a reason.
- **Registry auth is the URL.** A record's `edit_token` (the "Amendment
  Key") travels as `?key=` and is the sole credential. Never log it, never
  render it anywhere but the custodian's own links. Moderation is the
  `hidden` flag, flipped in the database — there is no admin UI.
- **Registry pages are `force-dynamic`** and writes call `revalidatePath`.
  Marketing pages are static.
- **Copy has two registers** (see `docs/design-system.md` → Voice): the
  bureaucratic-satire voice ("Department of Records & Resonance") for the
  Registry and most of the site, and a plain sincere voice for the essays
  and the tenet/policy cards. Don't let the joke leak into the sincere
  sections.
- **Entry overlay** (`EntryScreen`) is gated by the `glaum_initiated` cookie
  (1 year). Clear it to see the overlay again.
- `next.config.ts`: `serverExternalPackages` keeps PGlite/postgres unbundled
  (PGlite loads WASM at runtime); `images.qualities` allows `quality={100}`
  for scans; `turbopack.root` is pinned because a stray `package-lock.json`
  sits in the parent folder.

## Key files
- `app/page.tsx` — home (hero, testimonials, Glåümises, the sincere essays
  with the values triptych, tenets, policies, registry CTA, newsletter)
- `app/events/page.tsx` — events page with the Luma embed (IDs hardcoded
  at the top of the file)
- `app/registry/page.tsx` · `register/page.tsx` · `[slug]/page.tsx` ·
  `[slug]/amend/page.tsx` · `actions.ts` (server actions: register, amend)
- `lib/db.ts` (DB bootstrap + seed) · `lib/schema.ts` · `lib/glaumers.ts`
  (queries) · `lib/registry-options.ts` (Form 7-G vocabularies)
- `components/` — `Nav`, `Footer`, `EntryScreen`, `NewsletterSignup`
  (Brevo), `RegistryForm`, `CopyKeyLink`, `DecreeCard`, `ValuesTriptych`,
  `SectionHeading`, `SectionDivider`, `Sigil`, `TenetIcon`
- `app/globals.css` — all design tokens and the house CSS classes
- `db/schema.sql` — canonical production schema

## Design (brief; full in `docs/design-system.md`)
Lilac gradient page ground · Ink `#2a1836` body text · Gold `#c8a848` rules and
frames, Gold-deep `#634d0b` headings · Plum `#3b204a` / Plum-deep `#241430`
for nav, footer, dark bands · Parchment `#fdf8e7` cards · Magenta `#d239f8`
primary CTA. Display font Tokyo Dreams (`.font-tokyo`; `.font-tokyo-plain`
for long titles), body Libre Baskerville.
