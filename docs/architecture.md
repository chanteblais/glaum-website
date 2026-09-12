# Architecture

## Stack

- **Next.js 16** App Router with Turbopack, **React 19**, TypeScript.
- **Tailwind v4** — CSS-first. Tokens are declared in `@theme inline` in
  `app/globals.css`; there is no `tailwind.config`. Utilities like
  `text-gold-deep` and `font-tokyo` come from those tokens.
- **No database, no env vars, no server actions.** The Registry (which
  had all three) is shelved on `feat/registry`; the sections below marked
  *shelved* describe it so the design survives.
- Deploy target: **Vercel**. Not yet deployed.

## Routes

| Route | File | Rendering | Purpose |
|---|---|---|---|
| `/` | `app/page.tsx` | static | Home: hero, testimonials, Glåümises, essays + values, tenets, policies, newsletter |
| `/events` | `app/events/page.tsx` | static | Events page with a Luma embed |
| any other | `app/not-found.tsx` | static | 404 in the Department voice |

`app/layout.tsx` wraps everything in `Nav` + `main` + `Footer` and loads the
fonts. There are no API routes and no server actions.

*Shelved (`feat/registry`):* `/registry` (directory), `/registry/register`
(Form 7-G), `/registry/[slug]` (certificate), `/registry/[slug]/amend`
(Form 7-G(a)), all `force-dynamic`, plus `app/registry/actions.ts`.

Nav anchors on the home page: `#testimonials`, `#values` (the Glåümises
section, labelled "Benefits" in the nav), `#attunement` (the "Is this a
joke?" essay), `#tenets`, `#policies`. Each anchored element has
`scroll-mt-24` to clear the fixed nav.

## Data flow

Every page is a server component with no data dependencies. The client
components (`Nav`, `EntryScreen`, `NewsletterSignup`) are self-contained
and never fetch.

## Shelved: the Registry's data flow, server actions, auth, moderation

Kept for when `feat/registry` comes back. On that branch:

- `lib/db.ts` picks Drizzle over `postgres` when `DATABASE_URL` is set,
  otherwise PGlite persisted to `.data/glaum-registry/` with the schema
  and three seed records applied on first use. One connection promise is
  memoized on `globalThis`.
- `lib/glaumers.ts` has `listGlaumers` / `getGlaumerBySlug` /
  `createGlaumer` / `updateGlaumer`.
- `app/registry/actions.ts` has two server actions sharing `parseForm`
  (validates against the vocabularies in `lib/registry-options.ts` and the
  length limits: name 1–60, location ≤ 80, testimony ≤ 600). Failures
  redirect back with `?error=<code>`; `RegistryForm.tsx` maps codes to the
  Department's error copy. Slugs are the folded name + a 6-char suffix.
- **Auth is the Amendment Key:** a UUID `edit_token` per row, shown once
  in the post-registration URL, required as `?key=` to amend, compared with
  strict equality. No accounts, no recovery, never logged.
- **Moderation** is the `hidden` flag, flipped in the database; hidden rows
  vanish from the list and 404 everywhere.
- Registry pages export `dynamic = "force-dynamic"` and writes call
  `revalidatePath`.
- `next.config.ts` on that branch adds
  `serverExternalPackages: ["@electric-sql/pglite", "postgres"]` because
  PGlite loads WASM at runtime.

## Rendering and caching

- Every route is static at build time. Copy changes need a redeploy.

## Fonts and images

- Fonts via `next/font`: Libre Baskerville from Google (400/700, italic);
  Tokyo Dreams and Tokyo Dreams Plain from `public/fonts/*.otf` as local
  fonts. Each exposes a CSS variable that `globals.css` maps to
  `--font-tokyo`, `--font-tokyo-plain`, `--font-baskerville`.
- Images through `next/image`. `images.qualities: [75, 100]` in
  `next.config.ts` permits `quality={100}` on the Glåümises scan and the
  value panels. Source assets live in `public/images/`; see
  `docs/design-system.md` → Images for the optimization recipe.

## Third-party embeds

- **Brevo** newsletter: `NewsletterSignup` posts the form to a Brevo
  `sibforms` endpoint with `target="brevo-frame"` (a hidden iframe) so the
  page never navigates, then swaps to a thank-you after 800 ms. There is no
  real success signal.
- **Luma** events: `app/events/page.tsx` hardcodes `LUMA_EVENT_SLUG` and
  `LUMA_EVENT_ID` at the top of the file and renders the simple embed in an
  iframe with a fallback link.
- **Instagram** link in the footer.

## Config (`next.config.ts`)

- `images.qualities: [75, 100]`.
- `turbopack.root: __dirname` — a stray `package-lock.json` in the parent
  folder would otherwise confuse root detection.

## Deploy (not yet done)

The site needs nothing but a build. Create a Vercel project from
`chanteblais/glaum-website` (Next.js preset, no overrides), check the
`.vercel.app` URL, then move the `glaum.ca` and `www.glaum.ca` domains
from the old `glaum-website` Vercel project (the static v1 site) to the
new one. When the Registry returns it will additionally need a hosted
Postgres, `db/schema.sql` run once, and `DATABASE_URL` set.

The GitHub remote exists (`chanteblais/glaum-website`, since 2026-09-12)
but no CI does. A workflow running `npm run check` on push and PR is the
obvious first step (the camp repo's `.github/workflows/ci.yml` is the
template).
