export interface Service {
  slug: string;
  name: string;
  category: string;
  description: string;
  projectSlug?: string;
  projectName?: string;
}

export const services: Service[] = [
  {
    slug: "multi-tenant-billing",
    name: "Multi-tenant SaaS billing",
    category: "Payments",
    description:
      "Three-tier Stripe Cashier integration with seat-based limits, upgrade and downgrade flows, and proration. Designed for clean tenant boundaries so a paying account never sees another tenant's invoices.",
    projectSlug: "caseflow",
    projectName: "CaseFlow",
  },
  {
    slug: "hmac-signed-webhooks",
    name: "HMAC-signed outgoing webhooks",
    category: "Integration",
    description:
      "Stripe-style webhook delivery with HMAC-SHA256 signatures, retry on failure, signed timestamps to prevent replay attacks, and per-endpoint configuration. The pattern generalizes across every SaaS that needs outbound notifications.",
    projectSlug: "caseflow",
    projectName: "CaseFlow",
  },
  {
    slug: "multi-tenancy-global-scope",
    name: "Multi-tenancy via global scope",
    category: "Architecture",
    description:
      "Tenant isolation via a global scope on a provider_id column instead of subdomain isolation or a tenancy package. Lighter, easier to reason about, and survives audit because it lives in one place.",
    projectSlug: "caseflow",
    projectName: "CaseFlow",
  },
  {
    slug: "kyc-document-capture",
    name: "KYC document capture",
    category: "Fintech",
    description:
      "Multi-step document capture with retry logic for fumbled photos, server-side validation, and an operator review queue. Fields and required documents are data-driven, not hardcoded.",
    projectSlug: "zarpay",
    projectName: "Zarpay",
  },
  {
    slug: "aml-rule-engine",
    name: "AML rule engine",
    category: "Fintech",
    description:
      "Data-driven anti-money-laundering rules that flag transfers based on amount, frequency, corridor, and recipient pattern. Operators review hits in a dedicated queue with audit log entries.",
    projectSlug: "zarpay",
    projectName: "Zarpay",
  },
  {
    slug: "provider-agnostic-fintech-interfaces",
    name: "Provider-agnostic fintech interfaces",
    category: "Fintech",
    description:
      "Pluggable interfaces for payment-in, payout, FX, and OTP vendors. Going live behind a licensed counterparty becomes a provider swap, not a rewrite.",
    projectSlug: "zarpay",
    projectName: "Zarpay",
  },
  {
    slug: "rag-pipeline-pgvector",
    name: "RAG pipeline over pgvector",
    category: "AI",
    description:
      "Document upload, chunking, embedding, and hybrid retrieval (full-text + vector) over pgvector with tenant scoping. Hybrid search meaningfully outperforms pure vector at this scale.",
    projectSlug: "axon",
    projectName: "Axon",
  },
  {
    slug: "mcp-server-integrations",
    name: "MCP server integrations",
    category: "AI",
    description:
      "Model Context Protocol servers (postgres + custom template) bridged into a LangGraph agent. Gives agents structured access to databases and internal APIs without leaking credentials.",
    projectSlug: "axon",
    projectName: "Axon",
  },
  {
    slug: "langgraph-agent-orchestration",
    name: "LangGraph agent orchestration",
    category: "AI",
    description:
      "Streaming chat with explicit tool schemas, retry handling on tool failures, and run logs that survive a server restart. More reliable than prompt-chained pipelines.",
    projectSlug: "axon",
    projectName: "Axon",
  },
  {
    slug: "queue-first-architecture",
    name: "BullMQ queue-first architecture",
    category: "Infra",
    description:
      "Long-running agent work runs in BullMQ workers, not in the request path. Includes a Bull Board admin UI for queue visibility and dead-letter handling.",
    projectSlug: "axon",
    projectName: "Axon",
  },
  {
    slug: "runtime-postgres-rls",
    name: "Runtime Postgres RLS",
    category: "Architecture",
    description:
      "Tenant isolation enforced at the database role level via a dedicated app role and a withOrg pattern. Survives a leaky query because the database itself refuses to return cross-tenant data.",
    projectSlug: "axon",
    projectName: "Axon",
  },
  {
    slug: "observability-stack",
    name: "Observability stack",
    category: "Infra",
    description:
      "Prometheus metrics, Grafana dashboards, Loki log aggregation, and Langfuse for LLM-specific telemetry. Pays for itself the first time an agent burns tokens on the wrong path.",
    projectSlug: "axon",
    projectName: "Axon",
  },
  {
    slug: "adaptive-hls-streaming",
    name: "Adaptive HLS streaming",
    category: "Streaming",
    description:
      "Multi-resolution HLS playback (480p, 720p, 1080p) with resume, variable speed, and graceful bitrate switching on connection changes.",
    projectSlug: "reelm",
    projectName: "Reelm",
  },
  {
    slug: "real-time-ffmpeg-transcoding",
    name: "Real-time FFmpeg transcoding",
    category: "Streaming",
    description:
      "Worker pipeline that transcodes single-source uploads into the full HLS variant ladder, with live progress reporting back to the admin console.",
    projectSlug: "reelm",
    projectName: "Reelm",
  },
  {
    slug: "ai-issue-triage",
    name: "AI issue triage",
    category: "AI",
    description:
      "Inline AI suggestions for priority, labels, and assignee on new issues, based on what the project has resolved before. The user confirms or overrides; the AI never auto-closes.",
    projectSlug: "tracklane",
    projectName: "Tracklane",
  },
  {
    slug: "ask-your-project-chat",
    name: "Ask-your-project chat",
    category: "AI",
    description:
      "Natural language questions answered across every issue, comment, and wiki page in a project. Each answer cites the source thread so users can verify.",
    projectSlug: "tracklane",
    projectName: "Tracklane",
  },
  {
    slug: "n8n-workflows-postgres-audit",
    name: "n8n workflows with Postgres audit",
    category: "Automation",
    description:
      "Production-grade workflows with structured Claude tool-use, shared workflow_runs table for unified observability, and a single dashboard across multiple workflows.",
    projectSlug: "n8n-agent-studio",
    projectName: "n8n Agent Studio",
  },
  {
    slug: "reverse-auction-bid-logic",
    name: "Reverse-auction bid logic",
    category: "Mobile",
    description:
      "Two-sided bid lifecycle: rider posts a max budget, drivers submit bids, accept-the-best with rating context. Typed API client shared across both React Native apps.",
    projectSlug: "drivebid",
    projectName: "DriveBid",
  },
  {
    slug: "smart-search-ai-reranking",
    name: "Smart search with AI reranking",
    category: "Search",
    description:
      "Sub-second product search at scale across millions of items with LLM-based reranking. Elasticsearch handles the recall, the AI layer handles relevance.",
  },
  {
    slug: "scraping-proxy",
    name: "Scraping proxy with 15+ extraction methods",
    category: "Search",
    description:
      "Resilient retailer scraping with fallback extraction strategies, deduplication, and adaptive throttling. Handles the long tail of retailer-specific page structures.",
  },
  {
    slug: "notification-engine",
    name: "Multi-channel notification engine",
    category: "Comms",
    description:
      "Email, SMS, and push delivery from a single fan-out service with per-channel rate limiting, retry, and delivery audit.",
  },
  {
    slug: "keyword-optimization",
    name: "Keyword optimization microservice",
    category: "AI",
    description:
      "Claude-driven keyword optimization loop that beats hand-rolled rules once the catalog scales past a few hundred thousand items.",
  },
  {
    slug: "url-validation-pipeline",
    name: "URL validation pipeline",
    category: "Quality",
    description:
      "High-volume URL validation with 427+ tests covering retailer-specific edge cases, redirect chains, and partner affiliate parameters.",
  },
  {
    slug: "kong-redis-cache",
    name: "Kong Redis caching plugin",
    category: "Infra",
    description:
      "Open-source Lua plugin for Kong that adds Redis-backed response caching with configurable TTL and shared cache across gateway nodes.",
    projectSlug: "kong-redis-plugin",
    projectName: "Kong Redis Plugin",
  },
];

export const serviceCategories = Array.from(new Set(services.map((s) => s.category)));
