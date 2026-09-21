export const profile = {
  name: "Ankita Bhargava",
  role: "AI & Data Infrastructure Product",
  location: "San Francisco Bay Area",
  email: "ankita.bhargava301@gmail.com",
  linkedin: "https://www.linkedin.com/in/ankitabhargava",
  github: "https://github.com/Ankita301",

  /** The one-liner, from her own positioning work. */
  oneLiner:
    "I build secure, grounded, production-ready AI products over complex enterprise data.",

  /** The hero thesis — the actual through-line, in her own framing. */
  thesis: [
    { layer: "Stored", body: "Panzura taught me how data is stored and governed." },
    { layer: "Secured", body: "Lacework taught me how it is secured and monitored." },
    { layer: "Consumed", body: "Storytime taught me how AI systems consume it." },
    { layer: "Activated", body: "NetApp brought it together — activating enterprise data for AI at scale." },
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
      "A $500M product line — on-prem S3-compatible object storage at exabyte scale, powering data lakes, lakehouses and AI workloads. Named a Leader in The Forrester Wave™: Object Storage Solutions, Q2 2026, with above-average customer feedback.",
    scope:
      "Sole PM on the Data Lakehouse — a company top-10 priority, reporting through Senior Director and VP to CEO George Kurian.",
    points: [
      "Led 0→1 StorageGRID Data Lakehouse strategy, expanding object storage into in-place analytics for petabyte-scale enterprise data across a 3,000+ customer installed base.",
      "Drove the build-versus-partner decision and OEM selection in 90 days, compressing a multi-year build path to under one year.",
      "De-risked the bet before it was built: validated with an internal customer running 6 PB, and secured two Fortune 10 banks as beta partners who stayed engaged from MVP onward.",
      "Built and defended the business case — a $5M ARR opportunity on a $500M line — securing executive investment and alignment across 30+ stakeholders, 12+ functions and 4 engineering teams.",
      "Launched Branch Buckets in StorageGRID 12.0 — isolated AI/ML experimentation on 10+ PB datasets without duplicating the underlying object data. 15% customer adoption.",
      "It reaches customers as Open Lakehouse on NetApp — on the session catalogue at NetApp Insight, September 2026, with launch in November.",
    ],
    metric: { value: "90 days", label: "Build-vs-partner call that cut years off time-to-market" },
  },
  {
    layer: "Consume",
    company: "Storytime AI",
    title: "AI Product Lead / Cofounder",
    dates: "Apr 2024 – Aug 2025",
    context: "Voice-first GenAI storytelling for EdTech. Selected by Google's AI Startup Program.",
    scope: "Cofounder. Product, design and go-to-market, with one engineer.",
    points: [
      "Launched a GenAI storytelling MVP in under 60 days on LangChain, Gemini 2.0 Flash and GCP.",
      "Designed multi-modal AI orchestration with Universal-2 speech-to-text and OpenAI text-to-speech at sub-second latency.",
      "Delivered COPPA and GDPR-compliant personalized learning through user milestones, feedback loops and token-optimized prompts.",
    ],
    metric: { value: "100%", label: "Early-adopter retention" },
  },
  {
    layer: "Secure",
    company: "Lacework (Fortinet)",
    title: "Senior Technical Product Manager",
    dates: "Nov 2021 – Sep 2023",
    context: "Cloud-native AI/ML security for Kubernetes compliance and threat detection.",
    scope: "Sole PM for Kubernetes compliance, reporting to a Principal PM and then a Director.",
    points: [
      "Owned Kubernetes compliance as sole PM. It sold as one bundle with cloud compliance — $40M ARR across the pair, of which Kubernetes was my half.",
      "Launched Kubernetes Security Posture Management for Amazon EKS and Google GKE, securing 200+ enterprise environments to CIS Benchmark compliance.",
      "Turned CIS Benchmarks from prose into executable Rego/OPA policy, backed by three collector types — node-level DaemonSets, cluster-level via the Kubernetes API, and control-plane collectors — normalized through an agent that tagged KSPM data separately so it never disturbed existing CSPM customers.",
      "Integrated telemetry and audit logs into the Polygraph ML engine, enabling real-time behavioral drift detection and anomaly correlation.",
      "Launched CIS Policy Preview and Kubernetes Audit Logs — adopted by roughly 80% of Kubernetes customers.",
      "Received Lacework's Inventor Award for the Kubernetes compliance and detection work.",
    ],
    metric: { value: "$40M", label: "ARR, compliance + K8s bundle" },
  },
  {
    layer: "Govern",
    company: "Panzura",
    title: "Senior Technical Product Manager",
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
    scope: "Sole PM for Zephyr Enterprise.",
    points: [
      "Owned the Zephyr Enterprise product lifecycle end to end — test requirements, repository, planning, execution and defect tracking. $35M+ ARR growing 12% a year.",
      "Launched Zephyr Maestro v1, a SaaS DevOps pipeline tool, within 120 days of proof-of-concept — every user onboarded.",
      "Ran the beta with Staples before opening it to the full Zephyr customer base, using a single demanding enterprise to find the failure modes before they became support tickets.",
      "Drove roadmap and business strategy from customer surveys, competitive research and market analysis rather than inbound feature requests.",
    ],
    metric: { value: "100%", label: "User onboarding in 120 days" },
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
