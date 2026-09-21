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
  points: string[]
  metric?: { value: string; label: string }
}

/** Ordered top-down for reading; rendered bottom-up as a stack. */
export const roles: Role[] = [
  {
    layer: "Activate",
    company: "NetApp",
    title: "Senior Product Manager, StorageGRID",
    dates: "Aug 2025 – Jul 2026",
    context: "On-prem object storage for AI, analytics, backup and recovery.",
    points: [
      "Led 0→1 StorageGRID Data Lakehouse strategy, expanding object storage into in-place analytics for petabyte-scale data — concept through prototype and customer beta across a 3,000+ customer installed base.",
      "Drove the build-versus-partner decision and OEM selection in 90 days, compressing a multi-year build path to under one year.",
      "Secured executive investment and alignment across 30+ stakeholders, 12+ functions and 4 engineering teams.",
      "Launched Branch Buckets in StorageGRID 12.0 — isolated AI/ML experimentation on 10+ PB datasets without duplicating the underlying object data.",
    ],
    metric: { value: "15%", label: "Branch Buckets adoption" },
  },
  {
    layer: "Consume",
    company: "Storytime AI",
    title: "AI Product Lead / Cofounder",
    dates: "Apr 2024 – Aug 2025",
    context: "Voice-first GenAI storytelling for EdTech. Selected by Google's AI Startup Program.",
    points: [
      "Launched a GenAI storytelling MVP in under 60 days on LangChain, Gemini 2.0 Flash and GCP.",
      "Designed multi-modal AI orchestration with Universal-2 speech-to-text and OpenAI text-to-speech at sub-second latency.",
      "Delivered COPPA and GDPR-compliant personalized learning through user milestones, feedback loops and token-optimized prompts.",
    ],
    metric: { value: "100%", label: "Early-adopter retention" },
  },
  {
    layer: "Secure",
    company: "Lacework",
    title: "Senior Product Manager",
    dates: "Nov 2021 – Sep 2023",
    context: "Cloud-native AI/ML security for Kubernetes compliance and threat detection. Acquired by Fortinet.",
    points: [
      "Launched Kubernetes Security Posture Management for Amazon EKS and Google GKE, securing 200+ enterprise environments to CIS Benchmark compliance.",
      "Integrated telemetry and audit logs into the Polygraph ML engine, enabling real-time behavioral drift detection and anomaly correlation.",
      "Launched CIS Policy Preview and Kubernetes Audit Logs — adopted by roughly 80% of Kubernetes customers.",
      "Awarded Inventor recognition for AI-driven innovation in cloud security and compliance.",
    ],
    metric: { value: "$40M", label: "ARR from KSPM" },
  },
  {
    layer: "Govern",
    company: "Panzura",
    title: "Senior Product Manager",
    dates: "Jun 2019 – Nov 2021",
    context: "Hybrid cloud storage for unstructured data across AWS, Azure and GCP.",
    points: [
      "Launched Panzura Filer across Azure, AWS and GCP, enabling distributed file storage with lifecycle governance.",
      "Led secure token-based access (IAM, STS) for GovCloud and air-gapped deployments — satellite-based file transfer for defense customers, unlocking $25M+ ARR in federal expansion.",
      "Re-architected the hybrid cloud control plane for secure governance of petabyte-scale unstructured data in regulated industries.",
      "Launched data health dashboards, cut onboarding time by 87%, and secured 30+ Fortune 500 customers within six months.",
    ],
    metric: { value: "40%+", label: "ARR growth" },
  },
  {
    layer: "Ship",
    company: "SmartBear",
    title: "Product Manager, Zephyr Enterprise",
    dates: "Oct 2017 – May 2019",
    context: "SaaS test management driving DevOps automation.",
    points: [
      "Owned the end-to-end product lifecycle for Zephyr Enterprise, contributing to $35M+ ARR and 12% year-over-year growth.",
      "Launched Zephyr Maestro, a SaaS DevOps pipeline tool — 100% user adoption within 120 days of proof-of-concept.",
    ],
    metric: { value: "$35M+", label: "ARR contributed" },
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
