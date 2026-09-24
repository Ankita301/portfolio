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
  /** Required. Where it goes next, stated honestly — limits included. */
  whatsNext: string[]
  /** How it actually flows. Rendered as lanes of steps. */
  diagram?: {
    caption?: string
    lanes: { label?: string; steps: string[]; note?: string }[]
  }
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
      "An intent router classifies every message before retrieval runs. Contract questions go through query rewriting and the RAG agent; general questions get a direct answer and never touch the vector store.",
      "Retrieved chunks are cited inline, so an answer can be traced to the passages it came from.",
      "Chat answers are constrained to the uploaded document. Questions the contract does not cover get refused rather than guessed.",
    ],
    diagram: {
      caption:
        "Two paths off one document. Extraction is structured and attributable; chat is constrained to the same text and refuses when the contract does not answer.",
      lanes: [
        {
          label: "Extraction",
          steps: ["PDF upload", "Text + page offsets", "Typed schema (zod)", "Terms + page + confidence", "Review UI"],
          note: "Page offsets are preserved at parse time — attribution is a property of how you read the document, not a feature bolted on later.",
        },
        {
          label: "Chat",
          steps: ["Question", "Intent router", "Query rewrite", "Retrieve + cite chunks", "Grounded answer — or refusal"],
          note: "The router decides whether retrieval runs at all — general questions skip it entirely. The injection guard runs on the user's message, never on the contract. Contract text is untrusted data, and the chat has no tools to abuse.",
        },
      ],
    },
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
        title: "Retrieval is conditional, not automatic",
        body:
          "Every message used to be forced through query rewriting and vector search \u2014 including \u201chi\u201d. An intent router now classifies first: contract questions go through retrieval, everything else is answered directly at zero retrieval cost. Better retrieval is not useful when retrieval was not needed in the first place.",
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
        value: "76%",
        label: "First scored eval run, four dimensions",
        source:
          "Azure AI Foundry, msa-contract-agent-eval-v1, run 23 September 2026. Five evaluation questions against a real MSA, scored on individual turns so each question stands alone: relevance 100%, response completeness 100%, task completion 80%, retrieval 80% — 91 of 119 points. Small suite, honestly scored. Retrieval is the named gap for v2.",
      },
    ],
    whatsNext: [
      "Out-of-scope detection comes before any new contract type. Today an employment agreement extracts plausible output against the wrong schema, which is the exact failure this product exists to prevent.",
      "OCR is the next market expansion. Extraction currently needs real text, and scanned contracts are a large share of what small businesses actually receive.",
      "Closing the feedback loop is the defensibility story: corrections are already captured, they just do not yet feed prompt quality.",
      "Retrieval is now the measured gap, not a guess. The first scored run put relevance and completeness at 100% and retrieval at 80% — so the next work is what gets fetched, not how the answer is written.",
      "Re-running the same dataset with a different judge model is the next eval step. An LLM-as-a-Judge score is a measurement instrument, and an instrument you have not calibrated is a number you cannot lean on.",
    ],
    links: [
      {
        label: "Repo, PRD & security plan",
        href: null,
        note: "private — I work in security, after all",
      },
    ],
  },
  {
    slug: "lulu",
    name: "Lulu",
    tags: ["Voice GenAI", "iOS · Web · GCP"],
    year: "2024–25",
    status: "Shipped, then paused",
    icon: "story",
    blurb:
      "A new bedtime story every night, made up on the spot, told out loud, and the child decides what happens next. Shipped as a native iOS app, a web app and a backend on Cloud Run.",
    what:
      "A voice-first storytelling companion for young children. No screen. The child says what they want a story about, and the story is generated and narrated in real time, branching on what they say next, tuned to their age.",
    hard:
      "The experience had to feel effortless while the backend orchestrated speech-to-text, LLM prompting, token management, safety filtering, fallback logic, personalization and text-to-speech in near real time. And the users were children — so safety mattered more than novelty, and latency was not an engineering metric but a product requirement. In a voice-first experience, a slow response breaks the spell.",
    how: [
      "Three clients against one Python backend: a native SwiftUI iOS app, a React and TypeScript web app, and a shared API.",
      "Backend layered as presentation, business and data — versioned routers with typed request and response schemas, and services split by domain: auth, session, chat, parent, avatar, story theme and storytelling.",
      "v1 orchestrated the voice loop itself over a WebSocket — Universal-2 for speech-to-text, Gemini for generation, OpenAI for text-to-speech. v2 replaced that with ElevenLabs conversational agents: the backend issues a signed URL and receives HMAC-verified webhooks instead of brokering every turn.",
      "MongoDB Atlas for session and profile state, Google Identity Platform for auth.",
      "Story generation ran as a three-stage pipeline — start, continue, conclude — rather than one long generation, so a session could branch at each turn without regenerating what came before.",
      "Deployed on Google Cloud Run behind Artifact Registry, with separate dev and production environments defined in Terraform and shipped by GitHub Actions.",
      "Trust designed before intelligence — prompt constraints, content guardrails, token caps, retry logic and fallback paths.",
      "Compliance designed in from the start: COPPA, GDPR-K, IEEE 7000 and UNICEF AI guidance.",
    ],
    diagram: {
      caption: "The voice loop, built twice. v1 owned every hop; v2 traded per-turn control for a faster turn.",
      lanes: [
        {
          label: "v1 — self-orchestrated",
          steps: ["Child speaks", "WebSocket", "Universal-2 STT", "Gemini", "OpenAI TTS", "Child hears"],
          note: "Total control of prompt, pacing and guardrails — and latency equal to the sum of three hops plus three inference calls.",
        },
        {
          label: "v2 — conversational agent",
          steps: ["Child speaks", "ElevenLabs agent", "Child hears"],
          note: "The backend keeps what only it can do: auth, session state, story setup, and an HMAC-verified webhook recording what happened. v1 stayed live, because a shipped iOS app cannot be force-migrated.",
        },
        {
          label: "Platform",
          steps: ["iOS (SwiftUI)", "Web (React)", "Python API", "Cloud Run", "MongoDB Atlas"],
          note: "Dev and prod both defined in Terraform. CI/CD authenticates by Workload Identity Federation — no long-lived deploy credentials.",
        },
      ],
    },
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
        title: "v2 gave up control of the voice loop to buy latency",
        body:
          "v1 orchestrated everything — speech to text, generation, text to speech — over a WebSocket. That meant total control of the prompt, the pacing and the guardrails, and it also meant latency was the sum of three network hops plus three inference calls. In a voice product where a pause breaks the spell, that sum was the product. v2 handed the loop to a purpose-built conversational agent and kept the backend for what only it could do: auth, session state, story setup and the webhook that records what happened. Less control over each turn, a faster turn. For children who will not wait, that was the right trade — and v1 stayed running, because an App Store release cannot be force-migrated.",
      },
      {
        title: "CI/CD authenticated with Workload Identity Federation, not service-account keys",
        body:
          "GitHub Actions deploys to Google Cloud without a long-lived credential stored anywhere in the repo — the pipeline federates its identity and receives short-lived tokens instead. For a children\u2019s product holding profile data, a leaked deploy key is the kind of mistake you only get to make once. It cost an afternoon of setup and removed an entire class of breach.",
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
        value: "~300",
        label: "Users at peak",
        source: "Reached while the product ran in production.",
      },
    ],
    whatsNext: [
      "Production-grade and paused, not abandoned. It ran on Cloud Run across dev and prod with real users, but per-story inference outran what the product could recover — roughly $100/month at pilot scale against no revenue — and the team was small enough that continuity rested on very few people.",
      "That is the real lesson, and it is a product lesson rather than a technical one: shipping an MVP is not the same as building something maintainable, measurable and independently operable.",
      "A restart depends on unit economics, not engineering. The cost model exists; per-story inference has to clear its own bar before this goes live again.",
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
    diagram: {
      caption: "Raw sources are immutable. The wiki is build output — regenerated, never hand-edited.",
      lanes: [
        {
          label: "Ingest",
          steps: ["YouTube · LinkedIn · Zoom", "push-data-to-snowflake", "Snowflake"],
          note: "Captures land in raw/ and are never mutated. Superseded ones move to Archive/ so provenance survives.",
        },
        {
          label: "Compile",
          steps: ["build-wiki (read-only)", "Ontology pass", "Cross-link", "wiki/ + index"],
          note: "Strictly read-only against the warehouse. A bad run costs a rebuild, never the corpus.",
        },
      ],
    },
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
    whatsNext: [
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
    diagram: {
      caption: "Retrieval quality and latency tuned together — improving one at the other's expense produced a product nobody used.",
      lanes: [
        {
          label: "Retrieval",
          steps: ["Question", "Embed", "Pinecone", "Relevant context", "DeepSeek", "Answer"],
          note: "LangChain orchestrates, Postgres holds state, deployed on AWS.",
        },
      ],
    },
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
    whatsNext: [
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
