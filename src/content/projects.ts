export type Link = { label: string; href: string | null; note?: string }

export type Project = {
  slug: string
  name: string
  tags: string[]
  year: string
  status: "Live" | "Paused" | "Shipped, then paused" | "Active build" | "Prototype"
  /** One plain sentence for the card. No jargon. */
  blurb: string
  icon: "contract" | "story" | "brain" | "search"
  /** What it does, for a reader who knows nothing. */
  what: string
  /** The actual problem. */
  hard: string
  /** Architecture and how it works. */
  how: string[]
  /** Tradeoffs, each with its reasoning. */
  decisions: { title: string; body: string }[]
  /** Required. The number, how it was obtained, what it means. */
  measured: { value: string; label: string; source: string }[]
  /** Required. What does not work, and why that is the interesting part. */
  knownGaps: string[]
  /** A working demo, where one exists. Vertical for phone-shot video. */
  demo?: { youtubeId: string; caption: string; vertical?: boolean }
  links: Link[]
}

export const projects: Project[] = [
  {
    slug: "contractiq",
    name: "ContractIQ",
    tags: ["Contract review", "Next.js"],
    year: "2026",
    status: "Prototype",
    icon: "contract",
    blurb:
      "Reads an NDA or MSA and tells you what you are agreeing to — which clause, on which page, and how sure it is.",
    what:
      "Upload a contract. ContractIQ extracts the terms that matter, shows where each one lives in the document, scores how confident it is, and answers follow-up questions using only the contract's own text.",
    hard:
      "Business owners sign NDAs and MSAs they have not fully read, because reading one properly takes an hour or two of legal attention they do not have. Generic AI will happily summarize a contract — and just as happily invent a clause that is not in it. For a document you are about to sign, a confident wrong answer is worse than no answer.",
    how: [
      "Next.js 14 app with Supabase for auth and document storage, and Upstash for rate limiting.",
      "PDF text extraction with page offsets preserved, so every extracted term can point back to where it came from.",
      "Structured extraction against a term schema built specifically for NDA and MSA structures, validated with zod.",
      "Chat answers are constrained to the uploaded document. Questions the contract does not cover get refused rather than guessed.",
    ],
    decisions: [
      {
        title: "Confidence scores are shown to the user, not hidden",
        body:
          "A score per extracted term teaches the reader what to scrutinise. Hiding it would make the product feel more polished and less trustworthy — the black box problem is exactly why people still pay a lawyer to re-read the output.",
      },
      {
        title: "Purpose-built for two contract types instead of all of them",
        body:
          "A generic extractor pulls out something from any document. A schema built for NDA and MSA structures pulls out the twenty to thirty terms that actually decide whether you should sign. Narrow beats broad when the output has consequences.",
      },
      {
        title: "Answers are grounded in the document, never in the model",
        body:
          "The chat refuses questions the contract does not answer. This costs coverage and buys the only thing that matters here: a user who can trust what they are told.",
      },
    ],
    measured: [
      {
        value: "8",
        label: "Vitest suites, including prompt injection",
        source:
          "Extraction, confidence scoring, PDF text handling, chat logic, validation, constants, utils, and a dedicated prompt-injection suite. In the repo, runnable.",
      },
      {
        value: "12",
        label: "Implementation specs written before code",
        source:
          "Architecture, auth, extraction, chat, RLS and API contracts specified up front, plus the Supabase schema.",
      },
      {
        value: "HHH",
        label: "Evaluation harness — specified, in build",
        source:
          "Golden datasets, SME-scored rubrics, LLM-as-a-Judge, precision/recall, BLEU/ROUGE, and alpha-to-GA thresholds are designed in the PRD. The harness itself is being built in September 2026 and is not in the repo yet.",
      },
    ],
    knownGaps: [
      "Scoped to NDAs and MSAs. Other contract types will extract something, but not the right things.",
      "Extraction quality depends on the PDF being text, not a scan. No OCR path yet.",
      "The feedback loop that turns user corrections into better prompts is specified but not yet closing on its own.",
      "The evaluation harness is designed in the PRD but not yet built — which matters, because a product that refuses to guess needs a way to prove it refuses correctly. That is the current piece of work.",
    ],
    links: [
      { label: "Repo", href: "https://github.com/Ankita301/contractiq" },
      {
        label: "PRD",
        href: "https://github.com/Ankita301/contractiq/blob/main/docs/ContractIQ_PRD.md",
      },
      {
        label: "Security plan",
        href: "https://github.com/Ankita301/contractiq/blob/main/docs/security/security-plan.md",
      },
    ],
  },
  {
    slug: "storytime",
    name: "Storytime AI",
    tags: ["Voice GenAI", "EdTech"],
    year: "2024–25",
    status: "Shipped, then paused",
    icon: "story",
    blurb:
      "A new bedtime story every night, made up on the spot, told out loud — and the child decides what happens next.",
    what:
      "A voice-first storytelling companion for young children. No screen. The child says what they want a story about, and the story is generated and narrated in real time, branching on what they say next, tuned to their age.",
    hard:
      "The experience had to feel effortless while the backend orchestrated speech-to-text, LLM prompting, token management, safety filtering, fallback logic, personalization and text-to-speech in near real time. And the users were children — so safety mattered more than novelty, and latency was not an engineering metric but a product requirement. In a voice-first experience, a slow response breaks the spell.",
    how: [
      "Three clients against one Python backend: a native SwiftUI iOS app, a React and TypeScript web app, and a shared API.",
      "Backend layered as presentation, business and data — versioned routers with typed request and response schemas, and services split by domain: auth, session, chat, parent, avatar, story theme and storytelling.",
      "Gemini for generation, Universal-2 for speech-to-text, OpenAI for text-to-speech, MongoDB Atlas for session and profile state, Google Identity Platform for auth.",
      "Story generation ran as a three-stage pipeline — start, continue, conclude — rather than one long generation, so a session could branch at each turn without regenerating what came before.",
      "Deployed on Google Cloud Run behind Artifact Registry, with separate dev and production environments defined in Terraform and shipped by GitHub Actions.",
      "Trust designed before intelligence — prompt constraints, content guardrails, token caps, retry logic and fallback paths.",
      "Compliance designed in from the start: COPPA, GDPR-K, IEEE 7000 and UNICEF AI guidance.",
    ],
    decisions: [
      {
        title: "Trust before intelligence",
        body:
          "With children as users, a more capable model that occasionally goes off-track is worse than a narrower one that never does. Guardrails, token caps and fallback paths came before any work on making the stories cleverer.",
      },
      {
        title: "Latency treated as a product requirement",
        body:
          "Interaction flow was simplified and unnecessary turns removed, specifically to protect response time. Users preferred a fast reliable story over richer branching — tested, not assumed.",
      },
      {
        title: "Every constant in the system traces to child development research",
        body:
          "The numbers that govern a session are not round numbers somebody liked. A story uses 80% of a child's attention span rather than 100%, because learning degrades when cognitive load is maxed out and the remaining 20% absorbs distraction and thinking time. Interactions cap at 8, from Miller's 7±2 working-memory limit. Question complexity bands at 0.4 and 0.7 map to Piaget's stages — preoperational at 3–4 gets \"what colour is the bear?\", early concrete operational at 5–6 gets \"what do you think happens next?\", and 7–9 gets \"how would you help them solve this?\". Ten percent of every story is reserved for transitions and dramatic pauses, from conversation-flow research. Writing the reasoning down next to each constant is what let the system be tuned later against real usage instead of re-argued from scratch.",
      },
      {
        title: "CI/CD authenticated with Workload Identity Federation, not service-account keys",
        body:
          "GitHub Actions deploys to Google Cloud without a long-lived credential stored anywhere in the repo — the pipeline federates its identity and receives short-lived tokens instead. For a children\u2019s product holding profile data, a leaked deploy key is the kind of mistake you only get to make once. It cost an afternoon of setup and removed an entire class of breach.",
      },
      {
        title: "The API was versioned before it needed to be",
        body:
          "Storytelling shipped as v1 and later v2 with the breaking changes documented, while v1 stayed up. With a native iOS app in the App Store you cannot force everyone onto a new contract on your schedule \u2014 users update when they update. Versioning from the start is what lets the backend move without stranding a phone.",
      },
      {
        title: "A story's token budget is split 15 / 70 / 15",
        body:
          "Intro gets 15% of the budget, the middle 70%, the conclusion 15%. Without a split, a model given a token cap spends it early and then rushes or truncates the ending — and for a bedtime story the ending is the entire point. Budgeting the arc up front makes pacing a product decision rather than a side effect of where the cap happens to land. It also makes cost per story predictable, which is what a consumer AI product lives or dies on.",
      },
      {
        title: "The AI stays invisible",
        body:
          "Parents cared about safety and ease; children cared about voice and delight. Neither wanted to configure a model. Personalization happens through prompt constraints and pacing in the background, never through settings.",
      },
    ],
    measured: [
      {
        value: "100%",
        label: "Retention of early adopters",
        source: "Product-led growth, no paid acquisition.",
      },
      {
        value: "<60 days",
        label: "Concept to launched MVP",
        source: "Built with a single engineer.",
      },
      {
        value: "3",
        label: "Clients on one API — iOS, web, backend",
        source:
          "Plus a fourth repository holding the Terraform that defines both environments. Infrastructure was code, not console clicks.",
      },
      {
        value: "200+",
        label: "Pilot participants",
        source: "Reached during the live period.",
      },
    ],
    knownGaps: [
      "Paused, not shipped-and-forgotten. It ran in production on Cloud Run with dev and prod environments, but per-story inference cost outran what the product could recover — around $100/month at pilot scale with no revenue — and the team was small enough that continuity depended on very few people.",
      "That is the real lesson, and it is a product lesson rather than a technical one: shipping an MVP is not the same as building something maintainable, measurable and independently operable.",
      "A cost model exists for the rebuild. The economics have to work at the unit level before it goes live again.",
      "The PRD set an evaluation framework — relevance, age-fit, interactivity, toxicity, quarterly bias audits, fallback logging — with targets of NPS above 40 and hallucination under 5%. Those were the bar, not a measured result. Designing the framework is not the same as running it.",
    ],
    demo: {
      youtubeId: "5OZjUtUdbbI",
      caption:
        "The product is voice — so watching it is the only honest way to judge it. A child asks, the story is generated and narrated, and the fork waits for an answer.",
      vertical: true,
    },
    links: [
      { label: "Repos", href: null, note: "private — backend, iOS, web and infrastructure" },
    ],
  },
  {
    slug: "second-brain",
    name: "Agentic Second Brain",
    tags: ["Knowledge graph", "Snowflake"],
    year: "2026",
    status: "Active build",
    icon: "brain",
    blurb:
      "Pulls scattered sources into a warehouse, then compiles them into a wiki that rewrites itself as the data changes.",
    what:
      "A knowledge system built as Claude skills. It ingests raw sources into Snowflake, then compiles them into a cross-linked wiki of people, companies, products and topics — and regenerates the whole thing whenever the underlying data moves.",
    hard:
      "Summarizing loses detail. The goal was compilation instead: restructure raw sources into a consistent cross-linked format that preserves specifics, resolves contradictions between sources, and gets denser with every run rather than drifting.",
    how: [
      "Two Claude skills: one pushes source data to Snowflake, one compiles the wiki from it.",
      "Raw sources are immutable. The wiki is a build artifact, never hand-edited — so it can always be regenerated from the warehouse.",
      "The compile step is strictly read-only against Snowflake. Every write goes to the local wiki.",
      "Follows Karpathy's LLM-as-compiler pattern: the model is the compiler, the wiki is the output, the sources are the input.",
    ],
    decisions: [
      {
        title: "Compilation, not summarization",
        body:
          "A summary is lossy and terminal. A compiled page can be regenerated, cross-linked and made denser on the next run. Treating the wiki as build output rather than a document is what makes it maintainable.",
      },
      {
        title: "Read-only against the warehouse",
        body:
          "The compiler can never corrupt its own source. If the wiki is wrong, you rerun it; you never have to repair the data underneath.",
      },
      {
        title: "Private, deliberately",
        body:
          "The compiled corpus contains named real people and notes from internal calls. The architecture is worth showing. The contents are not mine to publish.",
      },
    ],
    measured: [
      {
        value: "3",
        label: "Data sources unified",
        source: "Previously aggregated by hand, now compiled automatically.",
      },
      {
        value: "19",
        label: "Wiki pages from 6 tables",
        source: "Regenerated on every run, not hand-maintained.",
      },
      {
        value: "Weekly",
        label: "Automated insight generation",
        source: "Replaces a manual aggregation pass.",
      },
    ],
    knownGaps: [
      "The corpus is small — the pattern is proven, the scale is not.",
      "Contradiction resolution across sources works in practice but has no test suite holding it honest.",
      "Repo stays private because of what the wiki contains, so the engineering here has to be described rather than shown.",
    ],
    links: [{ label: "Repo", href: null, note: "private — the corpus names real people" }],
  },
  {
    slug: "discord-rag",
    name: "Discord RAG Assistant",
    tags: ["RAG", "Live"],
    year: "2025",
    status: "Live",
    icon: "search",
    blurb:
      "A study-planning assistant inside Discord that answers from the community's own material instead of guessing.",
    what:
      "A personalized study-planning assistant running in a live Discord community. It retrieves from the community's own corpus and answers in context, taking routine load off human mentors.",
    hard:
      "Retrieval quality and latency are the whole product. A study assistant that is slow gets ignored, and one that is confidently wrong costs a mentor more time than it saves.",
    how: [
      "LangChain for orchestration, Pinecone for vector search, DeepSeek for generation, Postgres for state, deployed on AWS.",
      "Tuned on retrieval quality and latency together, since improving one at the expense of the other produced a product nobody used.",
    ],
    decisions: [
      {
        title: "Optimised for mentor workload, not answer volume",
        body:
          "The success metric was how much routine load came off human mentors — not how many questions the bot answered. Those are different products, and only one of them is useful.",
      },
    ],
    measured: [
      { value: "37%", label: "Accuracy improvement", source: "Measured against the pre-existing baseline." },
      { value: "58%", label: "Latency reduction", source: "End-to-end response time." },
      { value: "60%", label: "Lower mentor workload", source: "The metric the product was actually built for." },
    ],
    knownGaps: [
      "Scoped to one community's corpus. Retrieval tuning does not transfer as-is to a different domain.",
      "Built under NDA for a private cohort, so the running system cannot be demonstrated. The numbers here are mine; the product is not mine to show.",
    ],
    links: [
      {
        label: "Private",
        href: null,
        note: "built under NDA for a partner program — running, not publicly viewable",
      },
    ],
  },
]

export const getProject = (slug?: string) => projects.find((p) => p.slug === slug)
