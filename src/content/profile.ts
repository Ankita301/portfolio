export const profile = {
  name: "Ankita Bhargava",
  role: "AI & Data Infrastructure Product",
  location: "San Francisco Bay Area",
  email: "ankita.bhargava301@gmail.com",
  linkedin: "https://www.linkedin.com/in/abhargava-pm",
  github: "https://github.com/Ankita301",

  /** Status line under the one-liner. Plain, for the 40-second reader. */
  status: "Open to Staff / Principal roles in AI infrastructure and data platforms · SF Bay Area · available now",

  /** The one-liner, from her own positioning work. */
  oneLiner:
    "I build AI and data-infrastructure products for regulated industries — where someone eventually audits the answer.",

  /** Four facts, above the fold. Categorise, then believe. */
  proof: [
    "Exabyte-scale object storage — Forrester Wave Leader, Q2 2026",
    "Lakehouse: strategy to beta in 10 months",
    "Kubernetes security: $12M→$20M, 2 granted US patents",
    "Air-gapped federal storage, $25M+",
  ],

  /** The thesis that organises everything below. */
  thesisLine: "Every AI product is a data product first.",

  /** The stack — what was built at each layer, not what it taught me. */
  thesis: [
    { layer: "Govern", body: "Panzura. Petabyte-scale governance into air-gapped federal. $25M+." },
    { layer: "Secure", body: "Lacework. Kubernetes compliance from $12M to $20M ARR, two granted patents." },
    { layer: "Consume", body: "Lulu. A GenAI product shipped to production on iOS and web." },
    { layer: "Activate", body: "NetApp. Exabyte-scale object storage turned into a lakehouse." },
  ],

  summary:
    "Distributed file systems, exabyte-scale object and unstructured data, Kubernetes security, air-gapped federal infrastructure — built on Azure, AWS, GCP and hybrid environments, for regulated industries where someone eventually audits the answer.",
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
  /** The system, drawn. Same lanes as the project pages. */
  diagram?: {
    caption?: string
    lanes: { label?: string; steps: string[]; note?: string }[]
  }
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
    link: { label: "StorageGRID 12.0 release notes — Branch buckets, AssumeRole, S3 caching for AI/ML", href: "https://docs.netapp.com/us-en/storagegrid-120/release-notes/whats-new.html" },
    scope:
      "The Data Lakehouse, end to end — a company top-ten priority, reported up to the CEO's staff. Four engineering teams, 12+ functions, 30+ stakeholders.",
    points: [
      "Led 0→1 StorageGRID Data Lakehouse strategy: analytics built into the storage platform rather than deployed on top of it. The difference is the product — one install, one upgrade path, one support call, and the grid admin keeps full visibility instead of operating a second system alongside it. Addressable across an installed base of about 2,500 enterprise customers.",
      "Drove the build-versus-partner decision and OEM selection in one quarter, compressing a multi-year build path to under one year.",
      "De-risked the bet before it was built: validated on a multi-petabyte internal deployment, and secured two of the largest US banks as early-access partners who stayed engaged from MVP onward.",
      "Built and defended the business case on a $500M product line, securing executive investment and alignment across 30+ stakeholders, 12+ functions and 4 engineering teams.",
      "Briefed 60 engineers on the integration; 11 volunteered to build it.",
      "Owned licensing and packaging for the new tier, and built a support exposure model before launch so the organisation knew what the incremental caseload would cost it.",
      "Launched Branch Buckets in StorageGRID 12.0 — point-in-time branches of a bucket for isolated AI/ML experimentation and faster ransomware recovery, without duplicating the underlying object data.",
      "Selected the OEM partner — an Iceberg-native query engine — and took it through executive approval, engineering estimation and phase gating. Launched the beta in June 2026 — MVP to the internal AI team first, then early-access customers — with GA planned for November.",
      "It goes to market as Open Lakehouse on NetApp — a named breakout at NetApp INSIGHT 2026, September 29 to October 1.",
    ],
    metric: { value: "10 months", label: "Strategy to beta launch, after a one-quarter build-vs-partner decision" },
    diagram: {
      caption: "Two things shipped on the same grid: a query engine that inherits the platform's lifecycle, and branches that let AI/ML teams experiment on object data without copying it.",
      lanes: [
        {
          label: "Lakehouse",
          steps: ["S3 object data", "Iceberg catalog", "Embedded query engine", "Grid lifecycle, upgrades, telemetry", "Beta (Jun 2026)"],
          note: "The catalog is the compatibility contract; the engine is replaceable. The platform runs no Kubernetes, so placement and recovery live in the grid's own service model.",
        },
        {
          label: "Branch Buckets (12.0)",
          steps: ["Parent bucket", "Point-in-time branch", "Isolated AI/ML writes", "Policy on the parent", "Faster ransomware recovery"],
          note: "A branch is a version of the bucket, not a copy of its objects. AssumeRole issues short-term credentials for scoped access.",
        },
      ],
    },
  },
  {
    layer: "Consume",
    company: "Lulu",
    title: "AI Product Lead / Cofounder",
    dates: "Apr 2024 – Aug 2025",
    context: "Voice-first GenAI storytelling for EdTech, shipped to production and reaching ~200 users at peak from a 500-parent community. Selected by Google's AI Startup Program.",
    scope: "Cofounder. Product, architecture, design and go-to-market, across iOS, web and backend — with one engineer.",
    points: [
      "Launched a GenAI storytelling MVP in under 60 days, then scaled it into a production system: native SwiftUI iOS app, React web app, and a layered Python API on Google Cloud Run with dev and prod environments defined in Terraform.",
      "Designed the voice architecture twice. v1 orchestrated the loop itself — Universal-2 speech-to-text, Gemini, OpenAI text-to-speech over WebSockets. v2 replaced it with ElevenLabs conversational agents to cut turn latency, keeping v1 live because a shipped iOS app cannot be force-migrated.",
      "Personalization ran on user milestones and token-capped prompts, designed to COPPA and GDPR-K requirements.",
      "Authenticated CI/CD with Workload Identity Federation rather than service-account keys — no long-lived deploy credential anywhere in the pipeline.",
    ],
    metric: { value: "~200", label: "Users at peak, from a 500-parent community" },
  },
  {
    layer: "Secure",
    company: "Lacework (Fortinet)",
    title: "Senior Technical Product Manager",
    dates: "Nov 2021 – Sep 2023",
    context: "Cloud-native AI/ML security for Kubernetes compliance and threat detection. The work behind two granted US patents.",
    link: { label: "US 12,563,060 — cloud compliance monitoring for container-orchestrated environments (USPTO)", href: "https://image-ppubs.uspto.gov/dirsearch-public/print/downloadPdf/12563060" },
    scope: "Kubernetes compliance, across three engineering teams — agent, platform, detection. Reported to a Principal PM, then a Director.",
    points: [
      "Owned the Kubernetes Security Posture Management roadmap while the line grew from roughly $12M to $20M ARR across 200+ enterprise customers — CIS compliance, runtime visibility and node-level telemetry across EKS and GKE.",
      "Launched Kubernetes Security Posture Management for Amazon EKS and Google GKE, securing 200+ enterprise environments to CIS Benchmark compliance.",
      "Turned CIS Benchmarks from prose into executable Rego/OPA policy, backed by three collector types — node-level DaemonSets, cluster-level via the Kubernetes API, and control-plane collectors — normalized through an agent that tagged KSPM data separately so it never disturbed existing CSPM customers.",
      "Integrated telemetry and audit logs into the Polygraph ML engine, enabling real-time behavioral drift detection and anomaly correlation.",
      "Launched Kubernetes audit-log ingestion — visibility into API activity, privilege misuse and identity changes — contributing a 5% increase in customer acquisition.",
      "Named inventor on two granted US patents from this work — US 12,563,060, cloud compliance monitoring for container-orchestrated environments, and US 12,425,428, activity monitoring from container orchestration data. Both granted after I left, assigned to Fortinet. Lacework's Inventor Award followed the filings.",
    ],
    metric: { value: "$12M→$20M", label: "KSPM ARR growth" },
    diagram: {
      caption: "Compliance as executable policy, and audit telemetry as a signal for the ML engine — on the same agent, without disturbing existing CSPM customers.",
      lanes: [
        {
          label: "Posture",
          steps: ["Node DaemonSet · cluster API · control-plane collectors", "Normalizing agent (KSPM-tagged)", "CIS Benchmarks as OPA/Rego", "Findings across EKS + GKE"],
          note: "Three collector types feed one agent; KSPM data is tagged separately so CSPM customers never saw a change in their own results.",
        },
        {
          label: "Behaviour",
          steps: ["Kubernetes audit logs", "Identity context", "Polygraph ML", "Anomaly + drift detection"],
          note: "API activity, privilege misuse and identity changes become behavioural signal rather than a log to grep. Two granted US patents came from this design.",
        },
      ],
    },
  },
  {
    layer: "Govern",
    company: "Panzura",
    title: "Product Manager → Senior Product Manager",
    dates: "Jun 2019 – Nov 2021",
    context: "Hybrid cloud storage for unstructured data across AWS, Azure and GCP. Two products: Panzura Filer, then Panzura Data Services.",
    scope: "Panzura Filer, then Panzura Data Services after promotion. Mentored two PMs. Reported to the CPO throughout.",
    points: [
      "Repositioned Panzura Filer across Azure, AWS and GCP — distributed file storage with lifecycle governance, driving 40%+ ARR growth.",
      "Built the Central Management System (CMS) for Panzura Data Services, on AWS identity management — centralised configuration and access across a fleet, cutting onboarding from 40+ manual steps by 87%.",
      "Took the platform into GovCloud and air-gapped federal environments, validating file transfer where normal connectivity could not be assumed. Unlocked $25M+ in federal business.",
      "Re-architected the hybrid cloud control plane for secure governance of petabyte-scale unstructured data in regulated industries.",
      "Launched data health dashboards giving CISOs visibility into file lifecycle and decommissioning — 30+ Fortune 500 customers within six months.",
      "Mentored 2 PMs to own roadmap delivery against go-to-market objectives.",
    ],
    metric: { value: "$25M+", label: "Federal business unlocked" },
    diagram: {
      caption: "A global file namespace whose durable layer is blocks in object storage, governed from one control plane — and taken into environments with no connectivity at all.",
      lanes: [
        {
          label: "Data path",
          steps: ["Filers at each site (NFS/SMB)", "Global namespace", "Blocks in object storage (AWS · Azure · GCP)"],
          note: "Block storage underneath, file semantics on top. Internal to the product, never sold as a block service.",
        },
        {
          label: "Control plane (CMS)",
          steps: ["Config templates", "Inheritance-based RBAC", "Policy propagation across 80+ filers", "Health + lifecycle telemetry"],
          note: "Onboarding went from 40+ manual steps to a template: 87% fewer steps, 98% faster.",
        },
        {
          label: "Federal",
          steps: ["GovCloud / air-gapped", "STS temporary credentials (60-min rotation)", "KMS", "Validated without normal connectivity"],
          note: "The same product, with identity and key management designed for environments that assume the network is hostile or absent.",
        },
      ],
    },
  },
  {
    layer: "Ship",
    company: "Zephyr (SmartBear)",
    title: "Product Manager, Zephyr Enterprise",
    dates: "Oct 2017 – May 2019",
    context: "SaaS test management driving DevOps automation.",
    scope: "Zephyr Enterprise, a $35M product line. The first product role of my career.",
    points: [
      "Owned the Zephyr Enterprise product lifecycle — test requirements, repository, planning, execution and defect tracking. $35M+ ARR growing 12% a year.",
      "Launched Zephyr Maestro v1, a SaaS DevOps pipeline tool, within 120 days of proof-of-concept — every user onboarded.",
      "Ran the beta with Staples before opening it to the full Zephyr customer base, using a single demanding enterprise to find the failure modes before they became support tickets.",
    ],
    metric: { value: "100%", label: "User onboarding in 120 days" },
    diagram: {
      caption: "Test management turned into a DevOps signal: one view across requirements, builds, automation results and quality.",
      lanes: [
        {
          label: "Maestro",
          steps: ["Jira requirements", "Test plan + execution", "CI builds (Bamboo · Jenkins)", "Automation results (Selenium · UFT · Tricentis)", "Delivery dashboard"],
          note: "The first product role of my career; the first time I shipped a pipeline view rather than a feature.",
        },
      ],
    },
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
