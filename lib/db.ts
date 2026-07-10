/**
 * Database access.
 *
 * - Production (Vercel + Supabase/Neon/any Postgres): set DATABASE_URL.
 * - Local development: no configuration needed — an embedded Postgres
 *   (PGlite) is used, persisted to .data/glaum-registry/.
 *
 * The schema lives in db/schema.sql (applied automatically here in dev;
 * run it once against the production database when deploying).
 */
import { sql } from "drizzle-orm";
import { glaumers } from "./schema";

type Db = Awaited<ReturnType<typeof createDb>>;

const globalStore = globalThis as unknown as {
  __glaumDbPromise?: Promise<Db>;
};

const CREATE_TABLE_SQL = `
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
`;

// Founding records, drawn from the canonical testimonials.
const SEED_GLAUMERS = [
  {
    id: crypto.randomUUID(),
    slug: "vera",
    name: "Vera",
    location: "Undisclosed, by choice",
    sigil: "star",
    attunement: "fully-glauminated",
    glaumise: "Better Hair",
    testimony:
      "Since joining Glåüm, I've lost 10 lbs, my skin glows, my dog is better behaved, I no longer lose my keys, and I drink half as much caffeine with 2x the energy!",
    editToken: crypto.randomUUID(),
  },
  {
    id: crypto.randomUUID(),
    slug: "t-h",
    name: "T.H.",
    location: "Formerly: skepticism",
    sigil: "eye",
    attunement: "pleasantly-aligned",
    glaumise: "Meaning and Direction",
    testimony: "I wasn't sure at first. Now I am.",
    editToken: crypto.randomUUID(),
  },
  {
    id: crypto.randomUUID(),
    slug: "r",
    name: "R.",
    location: "Near the fire",
    sigil: "hand",
    attunement: "newly-stirred",
    glaumise: "To be genuinely known by at least one person",
    testimony:
      "There was a moment, near the end of the ceremony, where I looked around and everyone was laughing and it was — I don't know how to explain it. I felt like I was exactly where I was supposed to be.",
    editToken: crypto.randomUUID(),
  },
];

async function createDb() {
  const url = process.env.DATABASE_URL;

  if (url) {
    const { drizzle } = await import("drizzle-orm/postgres-js");
    const { default: postgres } = await import("postgres");
    const client = postgres(url, { max: 5, prepare: false });
    return drizzle(client);
  }

  const { mkdirSync } = await import("node:fs");
  mkdirSync(".data/glaum-registry", { recursive: true });

  const { drizzle } = await import("drizzle-orm/pglite");
  const db = drizzle(".data/glaum-registry");
  await db.execute(sql.raw(CREATE_TABLE_SQL));

  const existing = await db.select({ id: glaumers.id }).from(glaumers).limit(1);
  if (existing.length === 0) {
    await db.insert(glaumers).values(SEED_GLAUMERS);
  }

  return db;
}

export function getDb(): Promise<Db> {
  if (!globalStore.__glaumDbPromise) {
    globalStore.__glaumDbPromise = createDb().catch((err) => {
      // Don't cache a failed initialization.
      globalStore.__glaumDbPromise = undefined;
      throw err;
    });
  }
  return globalStore.__glaumDbPromise;
}
