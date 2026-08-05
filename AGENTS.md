# glaum.ca — the public website (its own project)

This repo is the public **glaum.ca** site (marketing pages + Glåümer
Registry). It is **not** the Glåüm camp member app — that is a separate
repo at `../glaum-camp-website` (deployed at camp.glaum.ca), with its own
branching rules, database, docs, and dev board conventions. Nothing in
this repo talks to the camp app or its Supabase database.

Before your first commit here, confirm you're in the right repo:
`git rev-parse --show-toplevel` must end in `/glaum-ca`. A session that
means to work on members, shifts, groups, admin, schedule, messaging, or
anything "camp" belongs in `../glaum-camp-website` — stop and switch
rather than committing here. (The camp repo has a pre-commit tripwire
for the reverse mistake; this note is the guard on this side.)

Shared dev board: `~/Documents/Glaum/TASKS.md` covers both projects —
tasks for this repo are labelled glaum.ca; unlabelled tasks default to
the camp app.

<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->
