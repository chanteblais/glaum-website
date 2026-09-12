# Database

**There is no database on `main`.** The site is static. Everything below
describes the Glåümer Registry, shelved on 2026-09-12 to branch
`feat/registry`, which carries `db/schema.sql`, `lib/schema.ts`,
`lib/db.ts`, `lib/glaumers.ts`, and the Drizzle / PGlite / postgres
dependencies. Kept here so the design isn't lost.

## Shelved: `glaumers`

| Column | Type | Notes |
|---|---|---|
| `id` | `text` PK | `crypto.randomUUID()` |
| `reg_no` | `serial` | Public record number, shown as `GL-0001` via `formatRegNo`. Assigned by the DB; the list orders by it |
| `slug` | `text` unique | URL segment. ASCII-folded name (≤ 40 chars) + `-` + 6 random hex chars |
| `name` | `text` | 1–60 chars |
| `location` | `text` nullable | ≤ 80 chars. "Where your vessel currently resides" |
| `sigil` | `text` default `'eye'` | One of the `SIGILS` keys: `eye` `triangle` `hand` `shrimp` `teacup` `star` |
| `attunement` | `text` | One of the `ATTUNEMENT_LEVELS` keys (`newly-stirred` … `unknowable`) |
| `glaumise` | `text` nullable | One of the `GLAUMISES` labels, stored verbatim (labels, not keys) |
| `testimony` | `text` nullable | ≤ 600 chars |
| `edit_token` | `text` | The Amendment Key (UUID). Sole credential for amending. See `docs/architecture.md` → Auth |
| `hidden` | `boolean` default `false` | Moderation flag. Hidden rows are excluded from the list and 404 on their pages |
| `created_at` | `timestamptz` default `now()` | "Registered since" on the certificate |

Vocabularies live in `lib/registry-options.ts`. Sigil and attunement store
the **key**; glåümise stores the **label**. Renaming a label therefore
orphans existing glåümise rows but not sigil/attunement rows.

## Dev vs prod

| | Dev (no `DATABASE_URL`) | Prod (`DATABASE_URL` set) |
|---|---|---|
| Engine | PGlite, files in `.data/glaum-registry/` (gitignored) | Any Postgres |
| Schema | Applied automatically on first `getDb()` from `CREATE_TABLE_SQL` in `lib/db.ts` | Run `db/schema.sql` once by hand |
| Seed | Three founding records inserted if the table is empty (Vera, T.H., R.) | Nothing |

To reset dev: stop the server and delete `.data/glaum-registry/`.

## Schema-change checklist

The table definition is duplicated in three places and they must match:

1. `db/schema.sql` — canonical; what gets run against prod.
2. `lib/schema.ts` — the Drizzle table (`pgTable`) and the inferred
   `Glaumer` type.
3. `CREATE_TABLE_SQL` in `lib/db.ts` — the dev bootstrap. `IF NOT EXISTS`
   means an **existing** dev database will not pick up a new column; delete
   `.data/glaum-registry/` or add an `ALTER TABLE` alongside.

Then: update `parseForm` in `app/registry/actions.ts` and
`components/RegistryForm.tsx` if the column is user-editable; add the
migration below; print the prod SQL verbatim in the session summary (Chanté
applies it herself, never Claude).

Going forward, put incremental changes in `db/migrations/NNN_<slug>.sql`
(additive `ALTER TABLE … IF NOT EXISTS` style where possible) and fold the
end state into `db/schema.sql` so a fresh database still needs only the
one file.

## Migrations ledger

| # | File | Date | Destructive? | What |
|---|---|---|---|---|
| 000 | `db/schema.sql` | 2026-07-09 (initial rebuild) | no | Creates `glaumers` |

Applied to prod: **none** — there is no prod database, and none is needed
until the Registry returns.
