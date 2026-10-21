export type Essay = {
  slug: string
  title: string
  /** One-sentence standfirst under the title. */
  dek: string
  date: string
  readTime: string
  /** Short label for the home-page list. */
  kind: "Thesis" | "Method" | "Teardown"
  sections: { heading?: string; paragraphs: string[] }[]
}

export const essays: Essay[] = [
  {
    slug: "storage-for-ai",
    title: "Storage for AI training is a throughput and failure-contract problem, not a capacity problem",
    dek: "What a storage product for GPU clusters actually promises — and why price per GiB-month is the wrong unit.",
    date: "October 2026",
    readTime: "6 min",
    kind: "Thesis",
    sections: [
      {
        paragraphs: [
          "Enterprise storage is sold by capacity, because capacity is what enterprises run out of. AI clusters almost never run out of capacity. They run out of time: GPUs sitting idle while a checkpoint drains, a dataloader stalls, or a shared filesystem drops a mount mid-epoch. A storage product for AI labs is therefore a promise about throughput under burst and behaviour under failure. The capacity number is a side effect.",
        ],
      },
      {
        heading: "Four workloads, four different shapes",
        paragraphs: [
          "Checkpoints are the write side. Thousands of ranks flush a multi-terabyte state at once, on a schedule, and every second of flush is every GPU waiting. The metric that matters is p99 time-to-checkpoint-complete, not gigabytes written.",
          "Datasets are the read side: random small reads from many workers, where the failure mode is a starved dataloader that looks, from the outside, like a slow model.",
          "Weights distribution is a broadcast — one artifact to every node at job start. This is where object storage earns its keep, and where \"does my existing pipeline run unmodified\" decides whether the store gets used at all.",
          "KV-cache offload is the new one: inference state spilling from GPU memory to a shared tier. The constraint is latency to first token, not bandwidth. One product has to serve all four, and the same number — say, 200 MBps per TiB — means something different to each of them.",
        ],
      },
      {
        heading: "Why capacity-priced throughput breaks",
        paragraphs: [
          "If file throughput is coupled to provisioned capacity, a customer who needs 1 GB/s of checkpoint write at 40 MBps per TiB has to buy about 25 TiB whether or not they have 25 TiB of data. They are paying for throughput in the only currency the price list offers. That shows up as overprovisioning, which looks like revenue until the customer does the arithmetic and a competitor sells throughput as its own SKU.",
          "The product decision is not whether to raise or lower the price. It is whether throughput and capacity are the same product. On a GPU cloud, they are not.",
        ],
      },
      {
        heading: "The failure contract is the product",
        paragraphs: [
          "A 99.5% availability SLA and \"training recovers seamlessly from hardware failure\" are the same sentence from two sides. What a lab actually buys from a storage tier is what happens at 2 a.m.: does a backend failover surface as a stale handle inside the training job, does the job notice, and how long before storage is the confirmed cause rather than the suspected one.",
          "That makes mount-health a metric the product ships, not an incident the customer reports. The first roadmap item for any file service aimed at AI is observability of failure — before any new feature.",
        ],
      },
      {
        heading: "What \"real S3\" means to a lab",
        paragraphs: [
          "Not the API surface. The table stakes: server-side encryption on by default, because weights are the crown jewels; lifecycle and tiering, because checkpoints age in hours; more than a couple of access keys per account, because every pipeline is its own tenant; and the existing boto, s3fs and Ray code running unmodified. An object store missing these is not \"90% there\" — it is unusable for the one workload that matters most.",
        ],
      },
      {
        heading: "What transfers from enterprise storage, and what doesn't",
        paragraphs: [
          "Lifecycle, tiering, versioning, key management and policy-driven provisioning transfer directly; they are the same primitives. What does not transfer is the shape of the customer. An enterprise object store serves thousands of tenants with cold data and durability-first requirements. An AI cloud serves a handful of tenants hammering one cluster with GPU-idle-time-first requirements. A metadata scan that takes weeks is acceptable in the first world and absurd in the second. The job is knowing which instincts to keep.",
        ],
      },
      {
        heading: "What I would ship first",
        paragraphs: [
          "Mount-health and failure telemetry exposed to the customer. Then a throughput-decoupled file SKU, priced per GB/s. Then encryption-by-default and key scoping on object, followed by lifecycle and tiering. KV-cache offload as a named tier once those are stable. Cross-region replication last: with free egress and GPU-local customers, it is the feature that sounds essential and isn't.",
          "What I am not claiming: I have shipped the storage products customers run and the primitives above; I have not carried the pager for a storage service with an SLA. That is the first thing I would learn, by sitting with one customer's checkpoint and dataloader traces in week one.",
        ],
      },
    ],
  },
  {
    slug: "how-i-decide",
    title: "How I decide",
    dek: "Four tools I actually reach for, each with the decision it came from — including the one I lost.",
    date: "October 2026",
    readTime: "5 min",
    kind: "Method",
    sections: [
      {
        paragraphs: [
          "Frameworks are cheap; the useful question is what a product manager does when two teams want the same engineers, or when a demo goes well and the organisation wants to ship before it is supportable. These are the four moves I keep coming back to, with the real case behind each.",
        ],
      },
      {
        heading: "1. Score it in the room, and be willing to lose",
        paragraphs: [
          "At Lacework, two product teams shared one engineering team. My Kubernetes work and the cloud compliance team's work needed the same people in the same quarter. Instead of arguing, I scored both against the same matrix — customer impact, revenue, effort, and contractual risk weighted double, because a feature whose absence voids a contract is a different kind of urgent. Their work protected thirty customers and three contracts. Mine was forty customers and new revenue. My project lost, correctly, in front of both leads.",
          "Then I negotiated two additional engineers so the loss cost a month rather than a quarter. The compliance team lost no customers; my feature still reached 70% of its target customers within two months and all of them by month four. One deal, around $650K, was lost to the delay. I would make the same call. The scoring is the point: when the numbers are visible, nobody has to win a fight.",
        ],
      },
      {
        heading: "2. Gate approvals on readiness, not on the demo",
        paragraphs: [
          "The StorageGRID lakehouse prototype demoed well in March. The second executive approval was gated on the things a demo cannot show: pricing accepted, support model agreed, legal done, engineers assigned. Supportable before sellable — a support exposure model sized the incremental caseload before launch so the support organisation knew what it was taking on. Both approvals came through and the beta shipped in June with nobody surprised by the ticket volume.",
          "The failure mode this prevents is the one every platform company knows: the feature that ships because the executive liked the demo, and then costs the support organisation for two years.",
        ],
      },
      {
        heading: "3. Re-run one-way doors when the world changes",
        paragraphs: [
          "The lakehouse decision was partner, not build. Shortly after executive approval, the partner was acquired. The temptation was to treat the approval as settled; the discipline was to treat the acquisition as new information and re-run the decision as a one-way door: what would we be unable to undo, and does the hedge still hold? The hedge was architectural — the Apache Iceberg catalog, not the engine, is what customers depend on — so the decision held. It held because the exit had been designed before it was needed.",
        ],
      },
      {
        heading: "4. Separate what shipped from what was evaluated from what I would add",
        paragraphs: [
          "Branch Buckets shipped in StorageGRID 12.0. Merge was on the roadmap and had not shipped when I left. A voice product I co-founded reached around 200 users and was paused on unit economics. A contract-review tool I built scored 100% on relevance and 80% on retrieval over a five-question suite — which is a small suite, and I say so.",
          "I keep those three categories apart in writing and in interviews, because a senior reader can tell when they have been blended, and because the discipline forces the honest question underneath: what did I actually decide, and what happened because of it?",
        ],
      },
      {
        heading: "What these have in common",
        paragraphs: [
          "Each one makes a decision legible to people who were not in the room — a matrix they can check, a gate they can audit, a hedge they can see in the architecture, a line between shipped and planned. That is the whole job at the senior level: not being right in private, but making the organisation able to see why, and able to disagree.",
        ],
      },
    ],
  },
]

export const getEssay = (slug?: string) => essays.find((e) => e.slug === slug)
