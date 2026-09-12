# Features

Every page and section, who it's for, and the states worth knowing about.
The audience is the public: prospective and existing Glåümers, and the
curious. Nothing requires an account. The Glåümer Registry is shelved (see
the end of this doc).

## Entry screen (`components/EntryScreen.tsx`)

Full-screen plum overlay on first visit: logo, "Trust is the first step
toward attunement.", an "I am ready." button. Clicking sets the
`glaum_initiated` cookie for one year and dismisses it. The server snapshot
assumes initiated, so returning visitors never see a flash. Rendered only
on the home page. To test it again, clear the cookie.

## Nav and footer

Fixed translucent plum nav with the wordmark and links: Home, Testimonials,
Attunement, Benefits, Tenets, Policies. Below `md` it
collapses to a hamburger menu that closes on link click. Footer: Instagram
link and "Glåüm.ca © 2022 – Sponsored by Shrimp™".

## Home (`app/page.tsx`)

Top to bottom, separated by `SectionDivider` glyphs (`°•• ▲ ••°` style):

1. **Hero** — family photo in a double gold frame with a sunburst behind it
   (`.hero-radiance`, `.hero-frame`), then the introductory paragraphs. No
   headline and no button; the image is the headline.
2. **Testimonials** (`#testimonials`) — the scanned testimonials image,
   "Real accounts from real Glåümers."
3. **Glåümises** (`#values`; nav label "Benefits") — the "benefits" scan at
   full quality.
4. **The sincere passage** (`.essay-band`, a deeper ground):
   - **"... Is this a joke?"** (`#attunement`) — introduces the three core
     values with the `ValuesTriptych` (three illustrated arch panels:
     Compassion, Community, Playfulness, with a ribbon "Accept Glåüm into
     your heart."), then the sincere essay on why compassion is
     foundational.
   - **"A note on cults"** — the sincere essay on what Glåüm is and isn't.
5. **Tenets of Glåüm** (`#tenets`) — four `DecreeCard`s, Articles I–IV:
   Unconditional Positive Regard, Individual Glåüm Ascension, Inclusivity of
   Members, Satire with Intention. Each has a kicker, a medallion icon
   (`TenetIcon`), a title, body with a drop cap, and a ratification seal.
6. **Policies of the ManyHands** (`#policies`) — two `DecreeCard`s,
   Provisions I–II: "All feelings are Welcome. All Behaviours are Not" and
   "The Use of AI: Amplification, not Replacement". Long titles use
   `plainTitle` (Tokyo Dreams Plain).
7. **Stay Attuned** (`NewsletterSignup`) — Brevo signup on a plum band.
   First name, last name, email. Posts into a hidden iframe and swaps to
   "Attunement initiated." after 800 ms regardless of Brevo's response.

## Shelved: Events (`app/events/page.tsx`, removed 2026-09-12)

Was: a banner image (`public/images/glaum-events.png`, also removed), intro
copy, then one event card (the ManyHands Appreciation Gathering,
"Sponsored by Shrimp™") with a Luma ticket embed and a fallback "Open on
Luma" link. Event slug and ID were constants at the top of the file; one
event, hardcoded. Removed because there is no upcoming event to show.
`git log -- app/events` finds it.

## Shelved: the Glåümer Registry (`feat/registry`)

Built, then shelved on 2026-09-12 so the marketing site could ship without
a database. Chanté likes the idea but it "isn't quite right yet". The
branch has the full implementation; this section is what it did, so the
next attempt starts from the design rather than from zero. On `main` the
home page no longer has the Registry CTA section or the testimonials link,
and the nav has no Registry item.

The Registry is run by the fictional **Department of Records & Resonance**.
Copy is bureaucratic satire; see `docs/design-system.md` → Voice.

### `/registry` — the directory

Grid of `ornate-frame` cards for every non-hidden record, ordered by record
number: sigil, `RECORD No. GL-0001`, name, location, attunement label, and
the testimony clamped to four lines. Each card links to the record. CTA to
register. Always dynamic.

### `/registry/register` — Form 7-G

Six numbered fields (`RegistryFormFields`):

1. Full name (required, ≤ 60)
2. Where your vessel currently resides (optional, ≤ 80)
3. Sigil (radio grid of six, first selected by default)
4. Self-assessed attunement level (select, required)
5. The Glåümise you await most eagerly (select, optional)
6. Testimony (textarea, optional, ≤ 600)

Server-side validation redirects back with `?error=<code>`; codes and their
Department-voice messages are in `RegistryForm.tsx` (`name`, `length`,
`sigil`, `attunement`, `glaumise`, `custody`). On success the Glåümer lands
on their record with `?key=<token>&welcome=1`.

### `/registry/[slug]` — the record

A certificate: record number, large sigil and "Registered under The Eye",
name, location, gold rules, then Attunement Level, Awaiting Glåümise, and
Testimony as a definition list, then "Registered since <date>" and the
Department sign-off.

States:
- **Public** — the certificate and a "Return to the Registry" link.
- **Custodian** (`?key=` matches) — additionally the "Amend this record"
  button, and one of two notices:
  - `welcome=1`: "Your record has been entered", explains the Amendment
    Key, with `CopyKeyLink` (copies the current URL to the clipboard,
    button text flips to "KEY COPIED. WELL GUARDED." for 2.5 s).
  - `amended=1`: "Your record has been amended."
- **Hidden or unknown slug** — 404.

### `/registry/[slug]/amend` — Form 7-G(a)

Requires `?key=`. Without a matching key it renders the "Custody Not
Established" page (no form). With it, the same six fields prefilled, plus
hidden `slug` and `key` inputs. Success returns to the record with
`&amended=1`; a stale key at submit time returns `?error=custody`.

### Moderation

Set `hidden = true` on the row. No UI. Hidden records vanish from the list
and 404 everywhere, but the row and its key survive.

## 404 (`app/not-found.tsx`)

"This page is not yet attuned." in the Department voice, with a button back
to the home page.
