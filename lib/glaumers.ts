import { asc, eq } from "drizzle-orm";
import { getDb } from "./db";
import { glaumers, type Glaumer } from "./schema";

export type { Glaumer };

export async function listGlaumers(): Promise<Glaumer[]> {
  const db = await getDb();
  return db
    .select()
    .from(glaumers)
    .where(eq(glaumers.hidden, false))
    .orderBy(asc(glaumers.regNo));
}

export async function getGlaumerBySlug(slug: string): Promise<Glaumer | null> {
  const db = await getDb();
  const rows = await db
    .select()
    .from(glaumers)
    .where(eq(glaumers.slug, slug))
    .limit(1);
  return rows[0] ?? null;
}

export async function createGlaumer(input: {
  name: string;
  location: string | null;
  sigil: string;
  attunement: string;
  glaumise: string | null;
  testimony: string | null;
}): Promise<{ slug: string; editToken: string }> {
  const db = await getDb();

  const baseSlug =
    input.name
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "")
      .slice(0, 40) || "glaumer";
  const slug = `${baseSlug}-${crypto.randomUUID().slice(0, 6)}`;
  const editToken = crypto.randomUUID();

  await db.insert(glaumers).values({
    id: crypto.randomUUID(),
    slug,
    name: input.name,
    location: input.location,
    sigil: input.sigil,
    attunement: input.attunement,
    glaumise: input.glaumise,
    testimony: input.testimony,
    editToken,
  });

  return { slug, editToken };
}

export async function updateGlaumer(
  slug: string,
  editToken: string,
  input: {
    name: string;
    location: string | null;
    sigil: string;
    attunement: string;
    glaumise: string | null;
    testimony: string | null;
  }
): Promise<boolean> {
  const existing = await getGlaumerBySlug(slug);
  if (!existing || existing.editToken !== editToken) return false;

  const db = await getDb();
  await db
    .update(glaumers)
    .set({
      name: input.name,
      location: input.location,
      sigil: input.sigil,
      attunement: input.attunement,
      glaumise: input.glaumise,
      testimony: input.testimony,
    })
    .where(eq(glaumers.slug, slug));
  return true;
}
