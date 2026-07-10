// The fixed vocabularies of Form 7-G.
// Keys are stored in the database; labels are shown to the public.

export const ATTUNEMENT_LEVELS = [
  { key: "newly-stirred", label: "Newly Stirred" },
  { key: "faintly-humming", label: "Faintly Humming" },
  { key: "pleasantly-aligned", label: "Pleasantly Aligned" },
  { key: "suspiciously-radiant", label: "Suspiciously Radiant" },
  { key: "fully-glauminated", label: "Fully Glåüminated" },
  { key: "unknowable", label: "Unknowable at This Time" },
] as const;

export const GLAUMISES = [
  "Eternal Love",
  "Sense of Community",
  "Meaning and Direction",
  "Tenure",
  "Better Hair",
  "Completion",
  "Self-Actualization",
  "To be genuinely known by at least one person",
  "Internal Abundance",
  "Six Figures",
  "Glåümite Crystals",
  "Televisionkinesis (the ability to move a TV)",
  "Helicopter time share",
  "Someone to catch you mid-fall, no explanation required",
  "The never-before-seen colour Glaumsnurple",
  "Permission to be ridiculous in the presence of others",
] as const;

export const SIGILS = [
  { key: "eye", label: "The Eye" },
  { key: "triangle", label: "The Radiant Triangle" },
  { key: "hand", label: "The Hand" },
  { key: "shrimp", label: "The Shrimp" },
  { key: "teacup", label: "The Teacup" },
  { key: "star", label: "The Star" },
] as const;

export type SigilKey = (typeof SIGILS)[number]["key"];

export function attunementLabel(key: string): string {
  return ATTUNEMENT_LEVELS.find((a) => a.key === key)?.label ?? key;
}

export function sigilLabel(key: string): string {
  return SIGILS.find((s) => s.key === key)?.label ?? key;
}

export function formatRegNo(n: number): string {
  return `GL-${String(n).padStart(4, "0")}`;
}
