# glaum.ca — Docs

The session brief (stack, conventions, standing tasks) is `AGENTS.md` at the
repo root, loaded automatically every session. These docs are read on demand.

| Doc | What's in it |
|---|---|
| [Architecture](architecture.md) | Routing, data flow, server actions, the Amendment Key auth model, rendering, fonts/images, config, deploy |
| [Database](database.md) | The `glaumers` table, dev vs prod database, seed records, schema-change checklist, migrations ledger |
| [Features](features.md) | Every page and section — who it's for, what it does, key states |
| [Design System](design-system.md) | Tokens, fonts, CSS classes, component patterns, image recipe, and the house voice |
| [Branching](branching.md) | Branch/merge/ship rules and the parallel-session guard |
| [QA Log](qa-log.md) | Known-and-deliberate behaviours (don't re-report), open items, highest-value manual tests |

---

## Project direction

glaum.ca is the public face of Glåüm: the marketing site plus the Glåümer
Registry, a no-accounts public directory where anyone can file "Form 7-G"
and receive a secret Amendment Key link. It replaced a statically exported
site (`chanteblais/glaum-website`, still what the domain serves) so that
design lives in code instead of text baked into frame images, and so the
Registry can have a database.

Not yet deployed. When it is: Vercel + a hosted Postgres, `DATABASE_URL` set,
then the domain cut over. Steps in the root `README.md`.
