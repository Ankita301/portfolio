# Portfolio Website — Design Spec

**Date:** 2026-09-20
**Author:** Ankita Bhargava (with Claude)
**Status:** Draft for review

---

## 1. Purpose

A single portfolio site that replaces `storytime.bhargava-ankita.com` as Ankita's
professional home. It presents the AI products she has built, plus her product
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

## 3. Content — the projects

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
- **Evaluation — lead with this.** Per the resume: human plus automated
  Helpful/Honest/Harmless evaluation using golden datasets, SME-scored rubrics,
  LLM-as-a-Judge, precision/recall and BLEU/ROUGE; alpha-to-GA thresholds
  defined for accuracy, safety, hallucination and task completion; logging and
  replay for regression testing. This is the most senior thing in the entire
  portfolio — most PMs cannot describe an eval harness they specified
  themselves, and it maps directly onto the "AI evaluation and observability"
  roles being targeted.
- **Currently:** inside the public fork `Ankita301/dev-os`, at `contactiq/`
  (the directory name is missing an `r`; fixed on extraction).

### Influencer Bot — EXCLUDED

**Decision, Ankita, 2026-09-20: not on the site.** One day of work, no
customers, and not enough lived experience to answer questions about it under
pressure. It comes back when there are one or two real customers.

The repo **stays private**. This is the diligence rule applied to herself, and
it is the right call — a card she cannot defend for ten minutes is worse than no
card.

One thing to preserve for later: the refusal gate in that README was *measured*,
not assumed. The weakest genuine question scored 0.467 and a deliberately absurd
control scored 0.454, so no similarity threshold separated them; the gate was
rebuilt to measure standard deviations above the corpus mean instead. When this
project returns, that is its lead.

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

- **Shipped and paused.** Apr 2024 – Aug 2025, as **AI Product Lead /
  Cofounder**. **200+ pilot participants.** Built with a single engineer. Paused
  when token costs reached roughly $100/month. **Google Cloud for Startups AI
  program participant.**
- **From the resume:** MVP launched in **under 60 days** using LangChain, Gemini
  2.0 Flash and GCP. Multi-modal orchestration with Universal-2 STT and OpenAI
  TTS at sub-second latency. **100% retention of early adopters.**
  COPPA/GDPR-compliant by design.
- **The technical layer, from the Q&A bank:** trust designed before
  intelligence — prompt constraints, content guardrails, token caps, retry logic
  and fallback paths. Latency treated as a product requirement rather than an
  engineering metric, because in a voice-first experience a slow response breaks
  the illusion. Tracked story completion, fallback success, prompt failures,
  off-track responses, and early-user retention.
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

**Source: Ankita's resume, 09.17.2026 v2** — supplied by her directly. This
supersedes every earlier figure in this spec. Corroborated by her 61-page
interview Q&A bank.

| Role | Dates | Proof |
|---|---|---|
| **NetApp** — Senior PM, StorageGRID | Aug 2025 – Jul 2026 | 0→1 Data Lakehouse strategy: object storage into in-place analytics at petabyte scale, concept → prototype → customer beta across a 3,000+ customer installed base. Build-vs-partner call and OEM selection **in 90 days**, compressing a multi-year build to under one year. 30+ stakeholders, 12+ functions, 4 engineering teams. Launched Branch Buckets in StorageGRID 12.0 — 15% adoption, isolated AI/ML experimentation on 10+ PB without duplicating object data. |
| **Storytime AI** — AI Product Lead / Cofounder | Apr 2024 – Aug 2025 | See §3 Storytime. |
| **Lacework** (acquired by Fortinet) — Senior PM | Nov 2021 – Sep 2023 | **$40M ARR** from launching KSPM for Amazon EKS and Google GKE; 200+ enterprise environments secured; CIS Benchmark compliance. Integrated telemetry and audit logs into the Polygraph ML engine for behavioral drift detection. CIS Policy Preview and Kubernetes Audit Logs adopted by ~80% of Kubernetes customers. **Inventor Award.** |
| **Panzura** — Senior PM | Jun 2019 – Nov 2021 | **40%+ ARR growth** launching Panzura Filer across Azure, AWS, GCP. Token-based access (IAM, STS) for GovCloud and air-gapped deployments — satellite file transfer for defense customers, **$25M+ ARR** in federal expansion. Onboarding time cut **87%**; 30+ Fortune 500 customers in six months. Mentored 2 PMs. |
| **SmartBear** — PM, Zephyr Enterprise | Oct 2017 – May 2019 | End-to-end lifecycle for Zephyr Enterprise, contributing to **$35M+ ARR** and 12% YoY growth. Launched Zephyr Maestro, a SaaS DevOps pipeline tool — 100% user adoption within 120 days of proof-of-concept. |
| **Loadstar Sensors** — PM Intern | Summers 2016 & 2017 | GTM and pricing for Punchforce Sensor; inbound leads +20%. |

**Education:** MBA, Product Management & ML — Santa Clara University, Leavey
School of Business (Aug 2015 – Dec 2017). BE Computer Science — University of
Mumbai (2007 – 2010).

Cumulative: **$100M+ ARR delivered.**

**Positioning line**, from the resume summary: *Product Leader with 10+ years
across AI/data infrastructure, enterprise storage, cloud platforms and
security.* The sharper interview version, from the Q&A bank: *I like building at
the intersection of data, infrastructure, security, and AI.*

**The through-line worth putting on the About page**, stated in her own Q&A
bank: Panzura taught her how data is stored and governed, Lacework how it is
secured and monitored, Storytime how AI systems consume and interact with data,
and NetApp brought it together around activating enterprise data for AI at
scale. That is a coherent ten-year arc, not a list of jobs — and it is the
strongest argument the site can make.

**Positioning line**, taken verbatim from the strategy doc so the site, resume,
and LinkedIn agree: *"I build secure, grounded, and production-ready AI products
over complex enterprise data."*

---

## 4. Site structure

```
/                          Hero → positioning → grouped cards
/projects/contractiq       ─┐
/projects/storytime         ├─ technical layer
/projects/second-brain      │
/projects/discord-rag      ─┘  (pending decision)
/about                     Story, work history, skills
```

**Home groups**

1. **AI Products I've Built** — ContractIQ, Storytime, Second Brain, and
   Discord RAG if adopted
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

**Source of record: the resume (09.17.2026 v2)**, corroborated by the 61-page
interview Q&A bank. Both are Ankita's own, current, and written to be defended
under questioning. Where anything conflicts with them, they win.

| Claim | Status |
|---|---|
| All Product Work figures (§3) | **Use.** Resume, 09.17.2026 v2. |
| Storytime: 100% retention of early adopters | **Use.** Resume. |
| Storytime: MVP in under 60 days | **Use.** Resume. |
| Google Cloud for Startups AI program **participant** | **Use.** Resume wording. "Participant", not "selected" or "accepted" — the resume is the more careful phrasing and it is the checkable one. |
| 200+ pilot participants | **Use.** Ankita's decision, 2026-09-20. See the note below. |
| Token costs reached ~$100/month | **Use.** Stated directly; verifiable from billing records. |
| Built with one engineer | **Use.** Stated directly by Ankita. |
| 92% story completion | **Hold** pending a source. Recoverable from LangSmith or analytics if either still has data. |

**Note on the Storytime user count.** Neither the resume nor the 61-page Q&A
bank states one. The Q&A bank — the document written specifically to survive
hostile questioning — deliberately uses qualitative framing: *strong early
engagement, retained early adopters, selected by Google for Startups.* The
resume's only quantitative claim is 100% retention of early adopters.

That is worth noticing. In the two artifacts Ankita prepared for the most
scrutiny, she chose not to put a user number on Storytime. The site may
reasonably follow the same instinct. "200+ pilot participants" stands because
she chose it, but pairing it with "100% retention of early adopters" invites the
obvious question — 100% of how many? Either use the retention claim alone, or be
ready with both denominators.
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

- `influencer-bot`: **stays private.** Excluded from the site; revisit when it
  has real customers.

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
2. ~~Product Work~~ — **resolved** from the resume (09.17.2026 v2). Roles,
   dates, figures and education all captured in §3.

2a. **Two projects to decide on.**
   - **Discord RAG Assistant** is on the resume as **Live, launched 2025** —
     LangChain, Pinecone, DeepSeek, Postgres, AWS; 37% accuracy improvement, 58%
     latency reduction, 60% lower mentor workload. A live product with three
     hard numbers is strong card material and it is not currently in the site
     plan. Recommend adding it.
   - ~~Influencer Bot~~ — **decided: excluded.** See §3.
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
