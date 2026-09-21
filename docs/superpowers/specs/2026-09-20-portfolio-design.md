# Portfolio Website — Design Spec

**Date:** 2026-09-20
**Author:** Ankita Bhargava (with Claude)
**Status:** Draft for review

---

## 1. Purpose

A single portfolio site that replaces `storytime.bhargava-ankita.com` as Ankita's
professional home. It presents four AI products she has built, plus her product
work history.

**Primary reader:** hiring managers for Principal/Staff AI PM roles. They want
product judgment, tradeoffs, and evidence she ships.

**Secondary reader:** engineering-literate interviewers who will open the repo
and read the code. Every project therefore carries a technical layer beneath
the product narrative.

**Success:** a reader who spends ninety seconds on the home page can name what
she built and why it was hard. A reader who clicks into one project can open
working code or a real document at the end of it.

**Reference:** `briankemler.com` — a product portfolio rather than a resume.
Grouped sections, cards with an icon, a tag pair, one plain sentence, and links
to the artifact. Its credibility comes from every card linking to something you
can open.

---

## 2. Constraints

These are firm and shape everything below.

1. **Draft mode.** The site is not published. The repo is private, GitHub Pages
   stays off, and no DNS record changes. Publishing is a separate decision made
   later, deliberately.
2. **No dead links.** A card ships only when the thing it links to exists. This
   is the whole reason repo work precedes site work.
3. **No unattributed claims.** Every number on the site traces to a source that
   Ankita can produce on request. See §6.
4. **No destructive repo operations.** Existing repos are left alone. Cleanup is
   deferred to a later, separate decision.
5. **Privacy.** Second Brain's compiled wiki names real people and contains
   notes from internal calls. It stays private and never appears on the site.

---

## 3. Content — the four projects

Source material verified on disk, not taken from prior descriptions.

### ContractIQ — public repo

Extract NDA and MSA key terms from an uploaded contract, show where each term
lives in the document and how confident the extraction is, then answer follow-up
questions grounded strictly in the document text.

- **Stack:** Next.js 14, Supabase (auth + storage), Upstash rate limiting,
  Anthropic and OpenAI SDKs, `pdf-parse`, `zod`, Tailwind, Vitest.
- **Technical layer:** page-level attribution, per-term confidence scoring, a
  grounding strategy that answers only from document text, and a test suite of
  eight files including `prompt-injection.test.ts`.
- **Documents:** a PRD covering grounding strategy, hallucination guardrails,
  evaluation strategy, and production-readiness criteria.
- **Currently:** inside the public fork `Ankita301/dev-os`, at `contactiq/`
  (the directory name is missing an `r`; fixed on extraction).

### Influencer Bot — public repo

A second brain for creators: attach someone's published content, and their
audience asks questions and gets answers grounded in what that person wrote,
with links back to the source.

- **Stack:** Next.js, `bge-small-en-v1.5` embeddings run locally via
  transformers.js, `node:sqlite`, brute-force cosine vector search.
- **Technical layer — the strongest single artifact on the site:** the refusal
  gate was measured, not assumed. On a real corpus the weakest genuine question
  scored 0.467 and a deliberately absurd control scored 0.454, so no similarity
  threshold separates them. What separates them is distribution shape: a covered
  question makes one chunk stand out sharply, an uncovered one leaves every
  chunk equally irrelevant. The gate measures standard deviations above the
  corpus mean.
- **Known gaps, already documented:** no grounding verifier, and the model was
  observed folding an ungrounded definition into a paragraph ending in a
  citation. RSS yields teasers rather than articles. Single-tenant in practice.
- **Currently:** private repo `Ankita301/influencer-bot`. Flips to public.

### Second Brain — private repo

A knowledge-compilation pipeline: ingest raw sources (YouTube, LinkedIn, Zoom)
into Snowflake, then compile them into a cross-linked Obsidian wiki using Claude
Code skills. Follows Karpathy's LLM-as-compiler pattern — raw sources are
immutable, the model restructures rather than summarizes.

- **Technical layer:** two skills (`build-wiki`, `push-data-to-snowflake`),
  read-only against the warehouse, regenerating 19 pages from 6 tables across an
  ontology of people, companies, products, topics, campaigns, courses, content.
- **Privacy:** the compiled wiki names real people and includes notes from
  internal calls. Repo private. The site describes the architecture and links to
  nothing.

### Storytime AI — private repo, blocked

A screen-free, voice-driven storytelling companion that generates a new
interactive audio story each time a child asks, tuned to their age.

- **Shipped and paused.** **200+ pilot participants.** Built with a single
  engineer. Paused when token costs reached roughly $100/month. Accepted into
  Google's AI startup program.
- **The story worth telling:** a product that worked and reached real users, but
  could not be sustained by one engineer at that unit cost. Shipping an MVP is
  not the same as building something maintainable, measurable, and independently
  operable. Ankita wrote a `COST_MODEL.md` for the prototype, which closes the
  economic half of that argument.
- **Also on disk:** a local prototype (`project-1`) — PRD, `ARCHITECTURE.md`,
  `COST_MODEL.md`, a runnable single-file MVP, three visual directions — plus
  substantial PM artifacts (PRDs, architecture diagrams, VOC research, decks).
- **Blocked:** production code is in Google Drive folder `0AI3CHZ9BGI77Uk9PVA`,
  which the Drive connector cannot reach (bound to a different account).
  Unblocks when the folder is shared or downloaded locally.

### Product Work

A non-repo section for professional roles and shipped outcomes, in the manner of
Kemler's "Built at Google".

Confirmed by Ankita 2026-09-20 as her own work history.

| Role | Proof | Dates |
|---|---|---|
| **NetApp** — Senior PM, StorageGRID | 0→1 AI Data Lakehouse: OEM evaluation across Dremio, Starburst, Trino/Presto, Iceberg. Concept to prototype in ~6 months, 12+ orgs, 30+ stakeholders. | *needed* |
| **Lacework** | ML and Kubernetes security. KSPM revenue $12M → $20M. Inventor Award. | *needed* |
| **Panzura** | IAM, regulated and air-gapped deployments. $20M+ first-year revenue; $25M federal opportunity. | *needed* |
| **SmartBear** | *Details needed — role, scope, outcome.* | *needed* |
| **Discord RAG assistant** | 37% accuracy improvement, 58% latency reduction, across 10K+ embeddings. | *needed* |

Cumulative: **$100M+ ARR touched.**

Dates are required before this section can be built — a work-history section
without them reads as evasive, and a reader checks them against LinkedIn anyway.

**Positioning line**, taken verbatim from the strategy doc so the site, resume,
and LinkedIn agree: *"I build secure, grounded, and production-ready AI products
over complex enterprise data."*

---

## 4. Site structure

```
/                          Hero → positioning → grouped cards
/projects/contractiq       ─┐
/projects/influencer-bot    ├─ technical layer
/projects/second-brain      │
/projects/storytime        ─┘
/about                     Story, work history, skills
```

**Home groups**

1. **AI Products I've Built** — the four above
2. **Product Work** — professional history
3. **Contact**

**Card anatomy** (Kemler's grammar): icon, eyebrow tag pair
(`CONTRACT REVIEW · NEXT.JS`), project name, one plain-English sentence, and the
real links — Repo, PRD, Demo.

Every card links to its own project page; that link always exists. External
links (repo, demo) appear only when the target is real and reachable by the
reader. A private-repo project such as Second Brain shows no repo link and says
plainly why the code is not public — which is itself a defensible product
decision, not an absence. What never ships is a link that 404s.

**Project page structure** — identical across all four, so the reader learns it
once:

1. What it does — one paragraph, no jargon
2. Why it was hard — the actual problem
3. How it works — architecture, with a diagram where one earns its place
4. Decisions worth knowing — tradeoffs, each with its reasoning
5. **What I measured** — the number, how it was obtained, what it means
6. **Known gaps** — what does not work, and why that is the interesting part
7. Links — repo, PRD, demo

Sections 5 and 6 are **structural, not optional**. They are the site's
differentiator: they demonstrate that experiments were run and results read
honestly, which is what separates this from a portfolio of feature lists. A
project with nothing to put in section 5 states that plainly rather than
inventing something.

---

## 5. Technical design

| Layer | Choice | Reasoning |
|---|---|---|
| Build | React 18 + Vite 5 | Requested. |
| Routing | React Router, browser router + `404.html` SPA fallback | Real shareable URLs. |
| Styling | Tailwind CSS v4 | Design tokens in one place, which the theme toggle needs. |
| Animation | CSS transitions + `IntersectionObserver` | Scroll reveals and page transitions without an animation dependency. Framer Motion only if layout animation proves necessary. |
| Content | Typed TS modules, `src/content/projects/*.ts`, against a `Project` interface | One file per project. Adding a project is one file and one import. No CMS. |
| Icons | Inline SVG, one per project, hand-picked | Kemler's cards scan because each has a mark. No icon-font dependency. |
| Theme | CSS custom properties; `prefers-color-scheme` default; toggle persisted to `localStorage`, wrapped in try/catch | |
| Deploy | GitHub Actions → GitHub Pages, `workflow_dispatch` only | Never fires on push while in draft mode. |

**Content model.** A single `Project` interface enforces the page structure —
`measured` and `knownGaps` are required fields, so the shape of the argument is
guaranteed by the type system rather than by discipline.

**Responsive.** Phone, tablet, desktop. 16px side gutter minimum, no horizontal
page scroll at any width.

**Visual direction.** Dark editorial, in Kemler's register but not a copy of it.
Run through the `frontend-design` skill so the result does not read as a
Tailwind template.

**Accessibility.** Semantic landmarks, visible focus states, WCAG AA contrast in
both themes, keyboard-navigable throughout.

---

## 6. Claims and evidence

The site carries no number it cannot source. Current status:

**Governing rule:** every claim survives diligence. The site states nothing
Ankita could not defend in a reference check.

| Claim | Status |
|---|---|
| 200+ pilot participants | **Use.** Chosen by Ankita 2026-09-20 as the figure of record. Phrase as participants or users reached, never "paying customers". |
| Token costs reached ~$100/month | **Use.** Stated directly; verifiable from billing records. |
| Built with one engineer | **Use.** Stated directly by Ankita. |
| Google AI startup program | **Use.** Confirmed by Ankita. Confirm the program's exact name before publishing — it is trivially checkable. |
| Refusal gate: 0.467 vs 0.454 | **Use.** Measured, recorded in the Influencer Bot README. |
| 92% story completion | **Hold** pending a source. Recoverable from LangSmith or analytics if either still has data. |
| COPPA / GDPR-K | **Decided 2026-09-20.** The site says *"designed for COPPA and GDPR-K compliance."* Never "certified", never "100%" — certification implies a third-party audit that would have to be produced on request. The reworded phrasing keeps full credit for the engineering (no data stored, privacy-first design) while claiming nothing that requires a document. |

**Where sources conflict, Ankita decides.** Three different figures for
Storytime's reach surfaced during this design — 200+ pilot participants (the
retired Gamma site), ~100 testers with ~30 regular users (recollection), and
~300 families (a document of disputed provenance). Ankita selected 200+ on
2026-09-20. Only one figure appears on the site; the others are not footnoted,
hedged, or combined.

**Where to recover usage data**, in order of durability: LLM provider billing
dashboards (Gemini/Google AI Studio, OpenAI); billing receipts in email;
ElevenLabs usage history; LangSmith traces; MongoDB Atlas collections; GA4
(14-month default retention); hosting logs.

---

## 7. Repository plan

Additive only. Nothing is deleted or archived.

**Create**

| Repo | Visibility | Method |
|---|---|---|
| `contractiq` | Public | `git filter-repo` over the `dev-os` clone, keeping `contactiq/` and the ContractIQ docs. Preserves Ankita's commits, drops upstream course history. Rename to `contractiq`. |
| `second-brain` | Private | Fresh init from the Desktop folder. |
| `storytime-ai` | Private | Blocked on Drive access. |
| `Ankita301/Ankita301` | Public | Profile README. First thing any reader sees; does not currently exist. |
| `portfolio` | **Private** | This site. |

**Change in place**

- `influencer-bot`: private → public. Add description, topics, LICENSE.

**Verified before any push:** ContractIQ's `.env.local` is gitignored and was
never committed. Only placeholder values appear in git history. No secrets to
scrub.

**Deferred:** disposition of `dev-os`, `MLAI-community-labs`,
`superpowers-marketplace`, `bridgecrew`, `terraformsnyk`, `brokenglass`, and the
three URL-named repos. Deleting requires `gh auth refresh -h github.com -s
delete_repo`, which Ankita runs herself.

---

## 8. Rollout

1. Extract and create repos (§7).
2. Build the site. Verify on a local dev server across phone, tablet, desktop
   widths and both themes.
3. Ankita reviews the running site.
4. **Stop.** Publishing is a separate decision.

If and when published: enable Pages → verify at `Ankita301.github.io/portfolio`
→ add `CNAME` → repoint IONOS apex from Gamma (`sites.gamma.app`) to GitHub
Pages → `www` CNAME → leave `storytime.bhargava-ankita.com` on Gamma until the
new site is proven, then redirect to `/projects/storytime`.

---

## 9. Open questions

1. **Storytime code** — still blocked. A Drive search on 2026-09-20 found no
   Storytime files on the connected account; shared folders are unrelated
   material from 2013–2022. Unblocks when the folder is downloaded locally or
   shared with the connected account. Everything else proceeds.
2. **Product Work** — roles confirmed as Ankita's own (NetApp, Lacework,
   Panzura, SmartBear, Discord). Still needed: **employment dates for all five**,
   and **SmartBear's role, scope and outcome**, which no source on hand covers.
3. **Recruiter research** — Ankita asked that the site reflect what recruiters
   currently look for. The strategy doc already carries dated July 2026 market
   findings (Axial Search: 12,397 US AI product postings since Jan 2026;
   employers rank judgment above execution — use-case selection, AI literacy,
   and value framing above hands-on execution). That finding directly supports
   §4: lead each project with judgment and tradeoffs, not feature lists. A
   further research pass is optional rather than blocking.
4. **92% completion** stays out pending a source.
5. **Second Brain public split** — a sanitized skills-only public repo was
   offered and deferred. Revisit after the private repo exists.
6. **Dates** — the Product Work table has no employment dates. Needed for the
   About page.
