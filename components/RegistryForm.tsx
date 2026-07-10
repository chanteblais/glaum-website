import { Sigil } from "@/components/Sigil";
import {
  ATTUNEMENT_LEVELS,
  GLAUMISES,
  SIGILS,
} from "@/lib/registry-options";

const fieldLabel = "block font-tokyo text-lg text-gold-deep mb-2";
const fieldInput =
  "w-full px-5 py-3 rounded-md bg-white/60 border border-gold/50 text-ink placeholder:text-ink/40 focus:outline-none focus:border-gold focus:bg-white/80 transition-colors";
const fieldNote = "text-xs text-ink/50 italic mt-2";

const ERROR_MESSAGES: Record<string, string> = {
  name: "The Department requires a name of between 1 and 60 characters. This is one of our few requirements.",
  length:
    "One of your entries exceeds the space allotted on the form. Brevity, too, is an attunement.",
  sigil: "The sigil you selected is not among the recognized sigils.",
  attunement: "Please assess your attunement using the provided scale.",
  glaumise: "The Glåümise you await must be one that has been Glåümised.",
  custody:
    "The Department cannot verify your custody of this record. Please follow your original Amendment Key link.",
};

export function errorMessage(code?: string): string | null {
  if (!code) return null;
  return ERROR_MESSAGES[code] ?? "The form has resisted. Please try again.";
}

export function RegistryFormFields({
  defaults,
}: {
  defaults?: {
    name?: string;
    location?: string | null;
    sigil?: string;
    attunement?: string;
    glaumise?: string | null;
    testimony?: string | null;
  };
}) {
  const d = defaults ?? {};

  return (
    <div className="space-y-8 text-left">
      {/* Name */}
      <div>
        <label htmlFor="name" className={fieldLabel}>
          1. Full name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          maxLength={60}
          defaultValue={d.name ?? ""}
          placeholder="Or the name Glåüm knows you by"
          className={fieldInput}
        />
      </div>

      {/* Location */}
      <div>
        <label htmlFor="location" className={fieldLabel}>
          2. Where your vessel currently resides{" "}
          <span className="text-sm text-ink/50">(optional)</span>
        </label>
        <input
          id="location"
          name="location"
          type="text"
          maxLength={80}
          defaultValue={d.location ?? ""}
          placeholder="A city, a region, a general vicinity"
          className={fieldInput}
        />
      </div>

      {/* Sigil */}
      <div>
        <span className={fieldLabel}>3. Choose your sigil</span>
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
          {SIGILS.map((s, i) => (
            <label
              key={s.key}
              className="cursor-pointer rounded-md border border-gold/50 bg-white/50 px-2 py-4 flex flex-col items-center gap-2 text-gold-deep transition-colors hover:bg-white/80 has-checked:bg-parchment has-checked:border-gold has-checked:shadow-md"
            >
              <input
                type="radio"
                name="sigil"
                value={s.key}
                defaultChecked={d.sigil ? d.sigil === s.key : i === 0}
                className="sr-only"
              />
              <Sigil sigil={s.key} className="w-9 h-9" />
              <span className="text-[0.65rem] text-center leading-tight text-ink/70">
                {s.label}
              </span>
            </label>
          ))}
        </div>
        <p className={fieldNote}>The sigil chooses you. This menu is a formality.</p>
      </div>

      {/* Attunement */}
      <div>
        <label htmlFor="attunement" className={fieldLabel}>
          4. Self-assessed attunement level
        </label>
        <select
          id="attunement"
          name="attunement"
          required
          defaultValue={d.attunement ?? ""}
          className={fieldInput}
        >
          <option value="" disabled>
            Assess yourself…
          </option>
          {ATTUNEMENT_LEVELS.map((a) => (
            <option key={a.key} value={a.key}>
              {a.label}
            </option>
          ))}
        </select>
        <p className={fieldNote}>
          There are no wrong answers. There are only levels.
        </p>
      </div>

      {/* Glåümise */}
      <div>
        <label htmlFor="glaumise" className={fieldLabel}>
          5. The Glåümise you await most eagerly{" "}
          <span className="text-sm text-ink/50">(optional)</span>
        </label>
        <select
          id="glaumise"
          name="glaumise"
          defaultValue={d.glaumise ?? ""}
          className={fieldInput}
        >
          <option value="">Undecided / awaiting all equally</option>
          {GLAUMISES.map((g) => (
            <option key={g} value={g}>
              {g}
            </option>
          ))}
        </select>
      </div>

      {/* Testimony */}
      <div>
        <label htmlFor="testimony" className={fieldLabel}>
          6. Your testimony{" "}
          <span className="text-sm text-ink/50">(optional)</span>
        </label>
        <textarea
          id="testimony"
          name="testimony"
          rows={5}
          maxLength={600}
          defaultValue={d.testimony ?? ""}
          placeholder="In your own words: has Glåüm changed your life? (It has.)"
          className={fieldInput}
        />
        <p className={fieldNote}>
          Testimonies may appear in the public Registry, where they will move
          strangers.
        </p>
      </div>
    </div>
  );
}
