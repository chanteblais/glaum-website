# glaum.ca — v2

The public Glåüm website, rebuilt as a dynamic Next.js app (successor to
`../glaum-website`, which was statically exported to GitHub Pages). All copy
ported from the original site; design rebuilt in code (no more text baked over
frame images); new **Glåümer Registry** profile feature.

## Running locally

```bash
npm install
npm run dev
```

No database setup needed for development: the Registry uses an embedded
Postgres (PGlite) persisted to `.data/glaum-registry/` (gitignored). It is
created and seeded with the founding records on first use.

## Deploying (Vercel + Postgres)

1. Create a Postgres database (Supabase / Neon / Vercel Postgres).
2. Run `db/schema.sql` against it once (non-destructive).
3. Deploy this folder to Vercel with env var `DATABASE_URL` set.
4. Point the `glaum.ca` domain at the Vercel project when ready to cut over.

When `DATABASE_URL` is present the app uses that database; otherwise it falls
back to the embedded dev database.

## The Registry

- `/registry` — public directory of registered Glåümers.
- `/registry/register` — Form 7-G. No accounts, no passwords: on submission the
  Glåümer receives an **Amendment Key** (a secret link) that is the sole means
  of editing their record.
- `/registry/[slug]` — certificate-style public profile.
- `/registry/[slug]/amend?key=…` — amendment form (requires the key).

Moderation: each row has a `hidden` boolean — flip it in the database to
remove a record from public view without deleting it.

## Structure

- `app/` — pages (home, events, registry).
- `components/` — Nav, Footer, EntryScreen, NewsletterSignup (Brevo),
  OrnateFrame/SectionHeading (the design system), Sigil (SVG sigils),
  RegistryForm.
- `lib/` — db access (`db.ts`, `schema.ts`, `glaumers.ts`) and the Form 7-G
  vocabularies (`registry-options.ts`).
- `db/schema.sql` — canonical schema for production.
