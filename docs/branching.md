# Branching strategy

Deliberately chill, and scaled down from the camp app's rules. The goal is
that `main` always deploys cleanly and every non-trivial change is one
visible, revertable unit.

## Current state

`origin` is **github.com/chanteblais/glaum-website** (public, created
2026-09-12; `main` first pushed the same day). Vercel is **not** linked to
it yet, so a push does not deploy — the live glaum.ca still comes from the
old static site's Vercel project. The rules below are written for the
intended end state (Vercel deploying on push to `main`); until the link
exists, "ship" means "merge to `main` and push".

## The rules

1. **`main` is the deployable truth.** Once Vercel is wired up, pushing
   `main` deploys production. Never leave `main` with something half-done.
2. **Branch for anything non-trivial.** Short-lived, named `type/slug`:
   `feat/` new feature · `fix/` bug fix · `ux/` design rounds · `docs/`
   documentation · `chore/` everything else. Use `session/YYYY-MM-DD-<topic>`
   when scope isn't clear yet.
3. **Verify before merging:** `npm run check` passes (tsc + eslint) and you
   have clicked through the affected pages on a local dev server. There is
   no test suite.
4. **Merge with `--no-ff`, then delete the branch.** `git log --first-parent
   main` then reads as a changelog.
5. **Tiny tweaks may go straight to `main`.** Copy edits, doc updates,
   one-line fixes. If it could break a page, branch.
6. **Schema changes ride the branch that needs them.** Print the SQL
   verbatim in the summary; Chanté applies it to prod herself. See
   `docs/database.md`.
7. **Docs ride along.** Every commit that changes schema, routes, or UX
   updates the relevant `docs/` file in the same commit.

## Claude sessions

- Branch before the first edit when the change is non-trivial.
- Merge only after Chanté has seen the change ("looks good", "merge it").
  Her approval to merge also covers the push (and, once Vercel is linked,
  the deploy).
- Never `git add -A` or `git stash` in the shared checkout. Stage explicit
  paths. The tree may hold Chanté's in-flight files (the triptych PNGs sat
  untracked for days before they were committed).
- If another session may be active here (`git branch --show-current` shows
  a branch you didn't create), take a `git worktree` (or the EnterWorktree
  tool) rather than branching in place. A dev server serves the working
  tree of the checkout it was started in.
- **Crossed-repo guard:** confirm `git rev-parse --show-toplevel` ends in
  `/glaum-ca`. A session that is really about the camp app must switch to
  `../glaum-camp-website`, whose pre-commit hook blocks the reverse mistake.

## Day-to-day cheat sheet

```bash
git checkout -b fix/thing        # start
# …work, npm run check, click through…
git add <paths> && git commit -m "Fix thing"
git checkout main
git merge --no-ff fix/thing -m "Fix thing (fix/thing)"
git branch -d fix/thing
# on approval:
git push
```
