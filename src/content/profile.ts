export const profile = {
  name: "Ankita Bhargava",
  role: "AI & Data Infrastructure Product",
  location: "San Francisco Bay Area",
  email: "ankita.bhargava301@gmail.com",
  linkedin: "https://www.linkedin.com/in/abhargava-pm",
  github: "https://github.com/Ankita301",

  /** The one-liner, from her own positioning work. */
  oneLiner:
    "I build secure, grounded, production-ready AI products over complex enterprise data.",

  /** Four facts, above the fold. Categorise, then believe. */
  proof: [
    "5+ 0→1 products launched",
    "$100M+ ARR delivered",
    "2 granted US patents",
    "Exabyte scale",
    "GenAI shipped to production",
  ],

  /** The thesis that organises everything below. */
  thesisLine: "Every AI product is a data product wearing a different hat.",

  /** The stack — what was built at each layer, not what it taught me. */
  thesis: [
    { layer: "Govern", body: "Panzura. Petabyte-scale data, governed, air-gapped, federal." },
    { layer: "Secure", body: "Lacework. Kubernetes compliance at $40M ARR." },
    { layer: "Consume", body: "Storytime. A GenAI product shipped to production." },
    { layer: "Activate", body: "NetApp. Exabyte-scale object storage made AI-ready." },
  ],

  summary:
    "Ten years of product leadership across AI and data infrastructure, enterprise storage, cloud platforms and security. Built and scaled resilient platforms on Azure, AWS, GCP and hybrid environments — distributed file systems, unstructured data, secure cloud-native systems, and mission-critical infrastructure for regulated industries.",
}

export type Role = {
  /** Stack layer label — what this role taught, not what it was called. */
  layer: string
  company: string
  title: string
  dates: string
  context: string
  /** Ownership and reporting line. The altitude signal. */
  scope?: string
  /** Public artefact a reader can open. */
  link?: { label: string; href: string }
  points: string[]
  metric?: { value: string; label: string }
}

/** Ordered top-down for reading; rendered bottom-up as a stack. */
export const roles: Role[] = [
  {
    layer: "Activate",
    company: "NetApp",
    title: "Senior Technical Product Manager, StorageGRID",
    dates: "Aug 2025 – Jul 2026",
    context:
      "Named a Leader in The Forrester Wave™: Object Storage Solutions, Q2 2026, with above-average customer feedback. On-prem S3-compatible object storage at exabyte scale — a $500M product line powering data lakes, lakehouses and AI workloads.",
    scope:
      "Sole PM on the Data Lakehouse — a company top-10 priority, reporting through Senior Director and VP to CEO George Kurian.",
    points: [
      "Led 0→1 StorageGRID Data Lakehouse strategy: analytics built into the storage platform rather than deployed on top of it. The difference is the product — one install, one upgrade path, one support call, and the grid admin keeps full visibility instead of operating a second system alongside it. Addressable across a 3,000+ customer installed base.",
      "Drove the build-versus-partner decision and OEM selection in 90 days, compressing a multi-year build path to under one year.",
      "De-risked the bet before it was built: validated with an internal customer running 6 PB, and secured two Fortune 10 banks as beta partners who stayed engaged from MVP onward.",
      "Built and defended the business case — a $5M ARR opportunity on a $500M line — securing executive investment and alignment across 30+ stakeholders, 12+ functions and 4 engineering teams.",
      "Pitched the integration to 60 engineers and came away with 11 committed to building it — a coalition recruited rather than assigned.",
      "Owned licensing and packaging for the new tier, and built a support exposure model before launch so the organisation knew what the incremental caseload would cost it.",
      "Launched Branch Buckets in StorageGRID 12.0 — isolated AI/ML experimentation on 10+ PB datasets without duplicating the underlying object data. 15% customer adoption.",
      "Selected Dremio as the OEM partner and took it through executive approval, engineering estimation and phase gating.",
      "It goes to market as Open Lakehouse on NetApp — a named breakout at NetApp INSIGHT 2026, September 29 to October 1.",
    ],
    metric: { value: "90 days", label: "Build-vs-partner call that cut years off time-to-market" },
  },
  {
    layer: "Consume",
    company: "Storytime AI",
    title: "AI Product Lead / Cofounder",
    dates: "Apr 2024 – Aug 2025",
    context: "Voice-first GenAI storytelling for EdTech, shipped to production and reaching ~300 users at peak. Selected by Google's AI Startup Program.",
    scope: "Cofounder. Product, design and go-to-market, with one engineer.",
    points: [
      "Launched a GenAI storytelling MVP in under 60 days, then scaled it into a production system: native SwiftUI iOS app, React web app, and a layered Python API on Google Cloud Run with dev and prod environments defined in Terraform.",
      "Designed the voice architecture twice. v1 orchestrated the loop itself — Universal-2 speech-to-text, Gemini, OpenAI text-to-speech over WebSockets. v2 replaced it with ElevenLabs conversational agents to cut turn latency, keeping v1 live because a shipped iOS app cannot be force-migrated.",
      "Delivered COPPA and GDPR-compliant personalized learning through user milestones, feedback loops and token-optimized prompts.",
      "Authenticated CI/CD with Workload Identity Federation rather than service-account keys — no long-lived deploy credential anywhere in the pipeline.",
    ],
    metric: { value: "~300", label: "Users at peak, 100% early-adopter retention" },
  },
  {
    layer: "Secure",
    company: "Lacework (Fortinet)",
    title: "Senior Technical Product Manager",
    dates: "Nov 2021 – Sep 2023",
    context: "Cloud-native AI/ML security for Kubernetes compliance and threat detection. The work behind two granted US patents.",
    scope: "Sole PM for Kubernetes compliance, reporting to a Principal PM and then a Director.",
    points: [
      "Delivered $40M ARR as sole PM on Kubernetes compliance. Seven new enterprise contracts at $2–6M each were contingent on it, and existing customers required it to stay — demand pulled from both directions at once.",
      "Launched Kubernetes Security Posture Management for Amazon EKS and Google GKE, securing 200+ enterprise environments to CIS Benchmark compliance.",
      "Turned CIS Benchmarks from prose into executable Rego/OPA policy, backed by three collector types — node-level DaemonSets, cluster-level via the Kubernetes API, and control-plane collectors — normalized through an agent that tagged KSPM data separately so it never disturbed existing CSPM customers.",
      "Integrated telemetry and audit logs into the Polygraph ML engine, enabling real-time behavioral drift detection and anomaly correlation.",
      "Launched CIS Policy Preview and Kubernetes Audit Logs — adopted by roughly 80% of Kubernetes customers.",
      "Named inventor on two granted US patents from this work — US 12,563,060, cloud compliance monitoring for container-orchestrated environments, and US 12,425,428, activity monitoring from container orchestration data. Both granted after I left, assigned to Fortinet. Lacework's Inventor Award followed the filings.",
    ],
    metric: { value: "$40M", label: "ARR from KSPM" },
  },
  {
    layer: "Govern",
    company: "Panzura",
    title: "Senior Product Manager",
    dates: "Jun 2019 – Nov 2021",
    context: "Hybrid cloud storage for unstructured data across AWS, Azure and GCP. Two bets: repositioning the Filer, and building identity-linked access.",
    scope: "Sole PM on Panzura Filer, then promoted to Panzura Data Services with 2 PMs reporting to me. Reported to the CPO throughout.",
    points: [
      "Repositioned Panzura Filer across Azure, AWS and GCP — distributed file storage with lifecycle governance, driving 40%+ ARR growth.",
      "Built the identity and access system (IAM, STS), cutting onboarding from 40+ manual steps to a fraction — an 87% reduction.",
      "Extended that access model to GovCloud and air-gapped deployments, enabling satellite-based file transfer for defense customers. $20M+ in the first year, then a further $15M in year two from a second US intelligence agency — $35M across the two.",
      "Re-architected the hybrid cloud control plane for secure governance of petabyte-scale unstructured data in regulated industries.",
      "Launched data health dashboards giving CISOs visibility into file lifecycle and decommissioning — 30+ Fortune 500 customers within six months.",
      "Mentored 2 PMs to own roadmap delivery against go-to-market objectives.",
    ],
    metric: { value: "$35M", label: "Federal ARR over two years" },
  },
  {
    layer: "Ship",
    company: "Zephyr (SmartBear)",
    title: "Product Manager, Zephyr Enterprise",
    dates: "Oct 2017 – May 2019",
    context: "SaaS test management driving DevOps automation.",
    scope: "The only PM on Zephyr Enterprise, and the first PM role of my career.",
    points: [
      "Owned the Zephyr Enterprise product lifecycle end to end — test requirements, repository, planning, execution and defect tracking. $35M+ ARR growing 12% a year.",
      "Launched Zephyr Maestro v1, a SaaS DevOps pipeline tool, within 120 days of proof-of-concept — every user onboarded.",
      "Ran the beta with Staples before opening it to the full Zephyr customer base, using a single demanding enterprise to find the failure modes before they became support tickets.",
    ],
    metric: { value: "100%", label: "User onboarding in 120 days" },
  },
]

/** Pre-PM career. Shown on About only — it closes the timeline without
 *  competing with the four-layer stack the site actually argues. */
export const earlier = [
  {
    company: "Loadstar Sensors",
    title: "Product Management Intern",
    dates: "Summers 2016 & 2017",
    body:
      "Smart load-cell sensors. Built GTM and pricing for Punchforce, a new IoT product, and lifted inbound leads 20%. The bridge into product.",
  },
  {
    company: "Aadtech",
    title: "Management Consultant",
    dates: "Sep 2012 – Aug 2015",
    body:
      "Energy efficiency for air handling units, sold on a guaranteed 30% carbon reduction. Set pricing strategy directly with the CEO — operating profit up 30% a year, sales up 15% quarter on quarter.",
  },
  {
    company: "Godrej & Boyce",
    title: "Supply Chain Manager",
    dates: "Jun 2010 – Sep 2012",
    body:
      "A $4B manufacturer. Owned sourcing, planning and inventory for IT hardware, software and network serving 25,000+ users, and cut delivery time 30% by fixing the process gaps rather than adding headcount.",
  },
]

export const education = [
  {
    school: "Santa Clara University, Leavey School of Business",
    detail: "MBA, Product Management & Machine Learning",
    dates: "2015 – 2017",
  },
  {
    school: "University of Mumbai",
    detail: "BE, Computer Science",
    dates: "2007 – 2010",
  },
]

export const skills = [
  {
    group: "AI & Evaluation",
    items: [
      "Generative AI", "Agentic AI", "RAG", "LLM Evaluation", "Golden Datasets",
      "LLM-as-a-Judge", "Human-in-the-Loop", "Vector Databases", "Structured Extraction",
      "Context Engineering", "AI Observability", "LangChain", "Claude", "Gemini",
    ],
  },
  {
    group: "Data & Storage Infrastructure",
    items: [
      "Object Storage", "S3", "Enterprise File Storage", "Distributed Systems",
      "Data Lakehouse", "Unstructured Data", "NAS", "NFS", "SMB/CIFS",
      "High Availability", "Replication & Recovery",
    ],
  },
  {
    group: "Cloud & Security",
    items: [
      "AWS", "GCP", "Azure", "Kubernetes", "Docker", "Terraform", "Hybrid Cloud",
      "GovCloud", "IAM", "STS", "RBAC", "OIDC/OAuth2", "CIS Benchmarks", "NIST", "SOC 2", "CIEM",
    ],
  },
  {
    group: "Product Leadership",
    items: [
      "0→1 Product Strategy", "Platform Roadmaps", "Build-vs-Buy", "OEM Partnerships",
      "Pricing & Packaging", "GTM", "Customer Discovery", "Executive Alignment",
    ],
  },
]
