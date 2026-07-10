-- Glåümer Registry schema.
-- Applied automatically in local dev (embedded PGlite).
-- For production: run this once against your Postgres database
-- (Supabase SQL editor, `psql $DATABASE_URL -f db/schema.sql`, etc.).
-- Non-destructive: uses IF NOT EXISTS.

CREATE TABLE IF NOT EXISTS glaumers (
  id text PRIMARY KEY,
  reg_no serial,
  slug text NOT NULL UNIQUE,
  name text NOT NULL,
  location text,
  sigil text NOT NULL DEFAULT 'eye',
  attunement text NOT NULL,
  glaumise text,
  testimony text,
  edit_token text NOT NULL,
  hidden boolean NOT NULL DEFAULT false,
  created_at timestamptz NOT NULL DEFAULT now()
);
