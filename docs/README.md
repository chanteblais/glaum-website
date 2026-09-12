# glaum.ca — Docs

The session brief (stack, conventions, standing tasks) is `AGENTS.md` at the
repo root, loaded automatically every session. These docs are read on demand.

| Doc | What's in it |
|---|---|
| [Architecture](architecture.md) | Routing, rendering, fonts/images, embeds, config, deploy |
| [Database](database.md) | None right now. What the shelved Registry needs and where its schema lives |
| [Features](features.md) | Every page and section — who it's for, what it does, key states |
| [Design System](design-system.md) | Tokens, fonts, CSS classes, component patterns, image recipe, and the house voice |
| [Branching](branching.md) | Branch/merge/ship rules and the parallel-session guard |
| [QA Log](qa-log.md) | Known-and-deliberate behaviours (don't re-report), open items, highest-value manual tests |

---

## Project direction

glaum.ca is the public face of Glåüm: the marketing site. It replaced a
statically exported site (the old `glaum-website` Vercel project, still
what the domain serves) so that design lives in code instead of text baked
into frame images.

The **Glåümer Registry** — a no-accounts public directory where anyone
files "Form 7-G" and receives a secret Amendment Key link — was built here
and then **shelved on 2026-09-12** (branch `feat/registry`) so the improved
marketing site could ship first without a database. Chanté likes the idea
but it isn't right yet. Its docs remain here, marked shelved.

Not yet deployed. The site is now plain Next.js with no env vars, so
deploying is: Vercel project from the repo, then move the domain. Steps in
the root `README.md`.
