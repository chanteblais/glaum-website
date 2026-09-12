# glaum.ca — v2

The public Glåüm website, rebuilt as a Next.js app (successor to the old
statically exported site). All copy ported from the original site; design
rebuilt in code (no more text baked over frame images).

The **Glåümer Registry** profile feature was built here and shelved on
2026-09-12 (branch `feat/registry`) so the site could ship without a
database. See `docs/database.md` for how to bring it back.

## Running locally

```bash
npm install
npm run dev
```

No database, no env vars.

## Deploying (Vercel)

1. Create a Vercel project from this repo (framework preset: Next.js, no
   overrides).
2. Check the `.vercel.app` preview.
3. Move the `glaum.ca` and `www.glaum.ca` domains from the old
   `glaum-website` Vercel project to the new one.

## Structure

- `app/` — pages (home only right now).
- `components/` — Nav, Footer, EntryScreen, NewsletterSignup (Brevo),
  DecreeCard, ValuesTriptych, SectionHeading/SectionDivider, Sigil,
  TenetIcon.

## Docs

`AGENTS.md` is the session brief for Claude (conventions, standing tasks).
`docs/` holds the detailed docs: architecture, database, features, design
system, branching, QA log. Index in `docs/README.md`.

`npm run check` runs the typecheck and lint.
