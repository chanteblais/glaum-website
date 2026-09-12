# Architecture

## Stack

- **Next.js 16** App Router with Turbopack, **React 19**, TypeScript.
- **Tailwind v4** — CSS-first. Tokens are declared in `@theme inline` in
  `app/globals.css`; there is no `tailwind.config`. Utilities like
  `text-gold-deep` and `font-tokyo` come from those tokens.
- **Drizzle ORM** over either `postgres` (prod) or `@electric-sql/pglite`
  (dev). Both are listed in `serverExternalPackages` so they stay unbundled.
- Deploy target: **Vercel**. Not yet deployed.

## Routes

| Route | File | Rendering | Purpose |
|---|---|---|---|
| `/` | `app/page.tsx` | static | Home: hero, testimonials, Glåümises, essays + values, tenets, policies, registry CTA, newsletter |
| `/events` | `app/events/page.tsx` | static | Events page with a Luma embed |
| `/registry` | `app/registry/page.tsx` | `force-dynamic` | Public directory of non-hidden Glåümers, ordered by `reg_no` |
| `/registry/register` | `app/registry/register/page.tsx` | `force-dynamic` | Form 7-G |
| `/registry/[slug]` | `app/registry/[slug]/page.tsx` | `force-dynamic` | Certificate-style public record |
| `/registry/[slug]/amend` | `app/registry/[slug]/amend/page.tsx` | `force-dynamic` | Form 7-G(a), requires `?key=` |
| any other | `app/not-found.tsx` | static | 404 in the Department voice |

`app/layout.tsx` wraps everything in `Nav` + `main` + `Footer` and loads the
fonts. There are no API routes; all writes go through server actions.

Nav anchors on the home page: `#testimonials`, `#values` (the Glåümises
section, labelled "Benefits" in the nav), `#attunement` (the "Is this a
joke?" essay), `#tenets`, `#policies`. Each anchored element has
`scroll-mt-24` to clear the fixed nav.

## Data flow

Server components call `lib/glaumers.ts` directly. Client components are
few and self-contained (`Nav`, `EntryScreen`, `NewsletterSignup`,
`CopyKeyLink`); none of them fetch.

```
page (server component)
  └─ lib/glaumers.ts   listGlaumers / getGlaumerBySlug / createGlaumer / updateGlaumer
       └─ lib/db.ts    getDb() → Drizzle over postgres or PGlite
```

`getDb()` memoizes one connection promise on `globalThis` so hot reloads
don't open a new PGlite per module reload. A failed init is not cached.

### Database selection

- `DATABASE_URL` set → `drizzle-orm/postgres-js`, pool of 5, `prepare: false`
  (safe for pooled/serverless Postgres such as Supabase's pooler).
- Otherwise → PGlite persisted to `.data/glaum-registry/` (gitignored). On
  first use it runs `CREATE_TABLE_SQL` and inserts the three seed records.

Nothing else reads env vars. There is no `.env` file in the repo.

## Server actions (`app/registry/actions.ts`)

Both actions share `parseForm`, which validates against the fixed
vocabularies in `lib/registry-options.ts` and the length limits (name 1–60,
location ≤ 80, testimony ≤ 600). Validation failures redirect back to the
form with `?error=<code>`; `components/RegistryForm.tsx` maps codes to the
Department's error copy.

- `registerGlaumerAction` → `createGlaumer` → `revalidatePath('/registry')`
  → redirect to `/registry/<slug>?key=<token>&welcome=1`.
- `amendGlaumerAction` → `updateGlaumer(slug, key, data)`; a wrong key
  redirects with `?error=custody`. On success revalidates `/registry` and
  the record page, redirects with `&amended=1`.

Slugs are the ASCII-folded name (max 40 chars) plus a 6-char random suffix,
so collisions are not handled and effectively cannot happen.

## Auth model: the Amendment Key

There are no accounts. Each row has an `edit_token` (a UUID) generated at
registration. It is:

- shown once, embedded in the redirect URL after registering (the "welcome"
  notice tells the Glåümer to save the link; `CopyKeyLink` copies it);
- required as `?key=` on `/registry/[slug]/amend` and as a hidden field on
  the amendment form;
- compared with strict equality in `updateGlaumer`.

The record page also reads `?key=` to decide whether to show custodian
notices and the "Amend this record" button, but the public content is the
same with or without it. Consequences to keep in mind: the key lives in
browser history and any pasted link; there is no recovery path by design
(the Department "extends its sympathy, which is boundless, and its
assistance, which is not"). Never log the key or put it in any page other
than the custodian's own.

## Moderation

`glaumers.hidden` (boolean). Hidden rows are excluded from the list and 404
on both the record and amend pages. Flip it in the database; there is no
admin UI.

## Rendering and caching

- Registry pages export `dynamic = "force-dynamic"` so the list is never
  stale between deploys; writes additionally call `revalidatePath`.
- Home and events are static at build time. Copy changes need a redeploy.

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

- `serverExternalPackages: ["@electric-sql/pglite", "postgres"]` — PGlite
  loads WASM at runtime and must not be bundled.
- `images.qualities: [75, 100]`.
- `turbopack.root: __dirname` — a stray `package-lock.json` in the parent
  folder would otherwise confuse root detection.

## Deploy (not yet done)

1. Create a Postgres database (Supabase, Neon, or Vercel Postgres).
2. Run `db/schema.sql` against it once. It is `IF NOT EXISTS`, so re-running
   is safe. The seed records are dev-only; prod starts empty unless you
   insert them.
3. Deploy to Vercel with `DATABASE_URL`.
4. Point `glaum.ca` / `www.glaum.ca` at the project. Today both point at the
   old `glaum-website` Vercel project (a static export from
   `chanteblais/glaum-website`).

No CI exists yet. When a remote is added, a workflow running `npm run check`
on push and PR is the obvious first step (the camp repo's
`.github/workflows/ci.yml` is the template).
