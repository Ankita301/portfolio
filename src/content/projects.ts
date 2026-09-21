export type Link = { label: string; href: string | null; note?: string }

export type Project = {
  slug: string
  name: string
  tags: string[]
  year: string
  status: "Live" | "Paused" | "Active build" | "Prototype"
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
        value: "HHH",
        label: "Evaluation harness",
        source:
          "Human and automated Helpful / Honest / Harmless evaluation using golden datasets, SME-scored rubrics, LLM-as-a-Judge, precision/recall and BLEU/ROUGE.",
      },
      {
        value: "α → GA",
        label: "Release thresholds",
        source:
          "Explicit thresholds defined for accuracy, safety, hallucination and task completion, with logging and replay so regressions are caught rather than discovered.",
      },
      {
        value: "8",
        label: "Test files, including prompt injection",
        source:
          "Extraction, confidence scoring, PDF text handling, chat logic, validation and a dedicated prompt-injection suite.",
      },
    ],
    knownGaps: [
      "Scoped to NDAs and MSAs. Other contract types will extract something, but not the right things.",
      "Extraction quality depends on the PDF being text, not a scan. No OCR path yet.",
      "The feedback loop that turns user corrections into better prompts is specified but not yet closing on its own.",
    ],
    links: [
      { label: "Repo", href: null, note: "extraction in progress" },
      { label: "PRD", href: null, note: "extraction in progress" },
    ],
  },
  {
    slug: "storytime",
    name: "Storytime AI",
    tags: ["Voice GenAI", "EdTech"],
    year: "2024–25",
    status: "Paused",
    icon: "story",
    blurb:
      "A new bedtime story every night, made up on the spot, told out loud — and the child decides what happens next.",
    what:
      "A voice-first storytelling companion for young children. No screen. The child says what they want a story about, and the story is generated and narrated in real time, branching on what they say next, tuned to their age.",
    hard:
      "The experience had to feel effortless while the backend orchestrated speech-to-text, LLM prompting, token management, safety filtering, fallback logic, personalization and text-to-speech in near real time. And the users were children — so safety mattered more than novelty, and latency was not an engineering metric but a product requirement. In a voice-first experience, a slow response breaks the spell.",
    how: [
      "MVP launched in under 60 days on LangChain, Gemini 2.0 Flash and GCP.",
      "Multi-modal orchestration: Universal-2 for speech-to-text, OpenAI for text-to-speech, tuned for sub-second response.",
      "Trust designed before intelligence — prompt constraints, content guardrails, token caps, retry logic and fallback paths.",
      "COPPA and GDPR-K compliance designed in from the start: no stored conversation data, parent-gated controls.",
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
        value: "200+",
        label: "Pilot participants",
        source: "Reached during the live period.",
      },
    ],
    knownGaps: [
      "Paused, not shipped-and-forgotten. Running it depended on one engineer, and per-story inference cost outran what the product could recover — around $100/month at pilot scale with no revenue.",
      "That is the real lesson, and it is a product lesson rather than a technical one: shipping an MVP is not the same as building something maintainable, measurable and independently operable.",
      "A cost model exists for the rebuild. The economics have to work at the unit level before it goes live again.",
    ],
    links: [
      { label: "Repo", href: null, note: "private — code recovery in progress" },
      { label: "Cost model", href: null, note: "in prototype repo" },
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
    links: [{ label: "Repo", href: null, note: "private — contains named individuals" }],
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
    ],
    links: [{ label: "Live", href: null, note: "link to be added" }],
  },
]

export const getProject = (slug?: string) => projects.find((p) => p.slug === slug)
