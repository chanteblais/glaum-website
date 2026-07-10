"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { createGlaumer, updateGlaumer } from "@/lib/glaumers";
import {
  ATTUNEMENT_LEVELS,
  GLAUMISES,
  SIGILS,
} from "@/lib/registry-options";

type Parsed = {
  name: string;
  location: string | null;
  sigil: string;
  attunement: string;
  glaumise: string | null;
  testimony: string | null;
};

function parseForm(formData: FormData): { ok: true; data: Parsed } | { ok: false; error: string } {
  const name = String(formData.get("name") ?? "").trim();
  const location = String(formData.get("location") ?? "").trim();
  const sigil = String(formData.get("sigil") ?? "");
  const attunement = String(formData.get("attunement") ?? "");
  const glaumise = String(formData.get("glaumise") ?? "");
  const testimony = String(formData.get("testimony") ?? "").trim();

  if (name.length < 1 || name.length > 60) {
    return { ok: false, error: "name" };
  }
  if (location.length > 80 || testimony.length > 600) {
    return { ok: false, error: "length" };
  }
  if (!SIGILS.some((s) => s.key === sigil)) {
    return { ok: false, error: "sigil" };
  }
  if (!ATTUNEMENT_LEVELS.some((a) => a.key === attunement)) {
    return { ok: false, error: "attunement" };
  }
  if (glaumise && !GLAUMISES.includes(glaumise as (typeof GLAUMISES)[number])) {
    return { ok: false, error: "glaumise" };
  }

  return {
    ok: true,
    data: {
      name,
      location: location || null,
      sigil,
      attunement,
      glaumise: glaumise || null,
      testimony: testimony || null,
    },
  };
}

export async function registerGlaumerAction(formData: FormData) {
  const parsed = parseForm(formData);
  if (!parsed.ok) {
    redirect(`/registry/register?error=${parsed.error}`);
  }

  const { slug, editToken } = await createGlaumer(parsed.data);
  revalidatePath("/registry");
  redirect(`/registry/${slug}?key=${editToken}&welcome=1`);
}

export async function amendGlaumerAction(formData: FormData) {
  const slug = String(formData.get("slug") ?? "");
  const key = String(formData.get("key") ?? "");

  const parsed = parseForm(formData);
  if (!parsed.ok) {
    redirect(`/registry/${slug}/amend?key=${key}&error=${parsed.error}`);
  }

  const updated = await updateGlaumer(slug, key, parsed.data);
  if (!updated) {
    redirect(`/registry/${slug}/amend?key=${key}&error=custody`);
  }

  revalidatePath("/registry");
  revalidatePath(`/registry/${slug}`);
  redirect(`/registry/${slug}?key=${key}&amended=1`);
}
