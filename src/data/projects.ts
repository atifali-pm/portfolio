export type ProjectStatus = "Live" | "Demo-ready" | "In development" | "Open source";

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  status: ProjectStatus;
  year: string;
  stack: string[];
  category: string;
  links: { label: string; url: string }[];
  featured: boolean;
  hero: {
    problem: string;
    goals: string[];
    solution: string[];
    role: string[];
    ui: string;
    flows: { title: string; steps: string[] }[];
    learnings: string[];
  };
}

export const projects: Project[] = [
  {
    slug: "caseflow",
    name: "CaseFlow",
    tagline: "Multi-tenant case management SaaS for legal practices, consultants, and coaches.",
    summary:
      "Flagship Laravel SaaS built end to end across 10 tagged phases. Multi-tenant isolation via global scope, Stripe Cashier billing, client portal on Livewire, and HMAC-signed outgoing webhooks.",
    status: "Demo-ready",
    year: "2026",
    category: "SaaS",
    featured: true,
    stack: [
      "Laravel 12",
      "PHP 8.2",
      "Filament 3",
      "Livewire 3",
      "Stripe Cashier",
      "Sanctum",
      "PostgreSQL 16",
      "Docker",
      "DomPDF",
    ],
    links: [
      { label: "GitHub", url: "https://github.com/atifali-pm/caseflow" },
    ],
    hero: {
      problem:
        "Law firms, consultants, and coaches cobble together spreadsheets, Dropbox, and email for case management. Legal-specific SaaS like Clio or MyCase costs $80 to $120 per user per month and locks you into a vendor silo. Small practices need real multi-tenant isolation, a client portal that is not a second admin panel, and transparent billing without the enterprise price tag.",
      goals: [
        "Real multi-tenant isolation with no chance of cross-tenant data leakage",
        "A client portal that feels like a product, not a downgraded admin UI",
        "Stripe billing with three tiers and clean upgrade and downgrade flows",
        "PDF invoicing that renders cleanly on both screen and print",
        "REST API with per-user token management and HMAC-signed outgoing webhooks",
      ],
      solution: [
        "Admin console for providers built on Filament 3 with kanban and calendar views",
        "Separate Livewire 3 client portal for end users with document upload and chat",
        "Stripe Cashier integration with three pricing tiers and seat-based limits",
        "PDF invoice generation with DomPDF and CSV export for reports",
        "Sanctum REST API with per-user tokens and HMAC-SHA256 signed outgoing webhooks",
        "Custom lightweight activity log trait, no heavy package dependencies",
      ],
      role: [
        "Architecture and multi-tenancy design (global scope on provider_id, no tenancy package)",
        "Laravel 12 backend with Filament 3 admin console",
        "Livewire 3 client portal with real-time updates",
        "Stripe Cashier billing integration",
        "HMAC webhook signing and verification patterns",
        "Docker deployment and CI with GitHub Actions",
      ],
      ui: "Laravel-native Tailwind and Livewire with no second framework layered on. Provider admin aesthetic intentionally separated from client portal aesthetic so the two surfaces read as distinct products.",
      flows: [
        {
          title: "Provider workflow",
          steps: [
            "Sign in to provider admin console",
            "Create a new case with milestones and documents",
            "Invite a client to the portal via email",
            "Log time entries and expenses against the case",
            "Generate a PDF invoice and send via Stripe for payment",
          ],
        },
        {
          title: "Client portal workflow",
          steps: [
            "Client signs in through a separate portal domain",
            "Views case timeline, milestones, and documents",
            "Uploads signed documents and sends messages",
            "Pays invoices via Stripe-hosted checkout",
          ],
        },
      ],
      learnings: [
        "Global scopes for tenancy beat packaged tenancy solutions for anything short of subdomain isolation",
        "A dedicated Livewire client portal converts better than trying to reskin the admin for end users",
        "HMAC webhook patterns generalize cleanly across every SaaS product that needs outbound notifications",
        "A custom 50-line activity log trait is lighter and easier to reason about than a Spatie dependency for most cases",
      ],
    },
  },
  {
    slug: "zarpay",
    name: "Zarpay",
    tagline: "Cross-border UK to Pakistan money transfer with disclosed spreads and real KYC.",
    summary:
      "Full-stack remittance platform on a single corridor. Next.js 15 monolith, Expo React Native sender app, operations panel, AML rule engine, KYC document capture, and provider-agnostic payment-in, payout, FX, and OTP interfaces.",
    status: "Demo-ready",
    year: "2026",
    category: "Fintech",
    featured: true,
    stack: [
      "Next.js 15",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "NextAuth.js",
      "Tailwind",
      "shadcn/ui",
      "Stripe",
      "Expo React Native",
    ],
    links: [
      { label: "GitHub", url: "https://github.com/atifali-pm/zarpay" },
      { label: "Android APK", url: "https://github.com/atifali-pm/zarpay/releases" },
    ],
    hero: {
      problem:
        "UK to Pakistan corridor remittances are opaque. Hidden FX spreads and unclear fees make it hard to trust the number on the screen. Existing apps like Wise and Remitly do not cover all Pakistan receive methods well. Receivers expect bank transfer, mobile wallet (Easypaisa, JazzCash, NayaPay), or cash pickup, and senders deserve to see the mid-market rate next to what they are actually paying.",
      goals: [
        "Disclosed spread and fee on every quote",
        "Mid-market rate visibility from Frankfurter so users can verify",
        "Support for bank, mobile wallet, and cash pickup receive methods",
        "Operator-side monitoring dashboard for AML review",
        "Provider-agnostic interfaces so a licensed counterparty is a swap, not a rewrite",
      ],
      solution: [
        "Live rate calculator with transparent fee disclosure and 60-minute quote lock",
        "Sender mobile app built with Expo React Native, Android APK available",
        "Operations panel with AML rules, audit log, and flagged-transfer review",
        "KYC document capture flow with retry handling",
        "Full provider interfaces for payment-in, payout, FX, and OTP vendors",
        "Next.js 15 monolith with route groups, server actions for mutations, RSC for reads",
      ],
      role: [
        "Solo developer across mobile, web, and operations",
        "Next.js 15 backend with Prisma schema for financial transactions",
        "Alembic-style migrations with Prisma migrate",
        "KYC document flow and AML rule engine",
        "Expo React Native sender app with Android CI builds",
      ],
      ui: "Fintech-grade form validation with disclosure-first UX. Mobile-first for senders, desktop-first for operators. Every number shown to a sender is either mid-market, disclosed spread, or disclosed fee, never a blended headline rate.",
      flows: [
        {
          title: "Sender flow",
          steps: [
            "Sign in via OTP, pass KYC if first transfer",
            "Enter amount, see mid-market rate and disclosed spread",
            "Review quote with 60-minute lock",
            "Confirm payment-in via Stripe sandbox",
            "Track status through the transfer timeline",
          ],
        },
        {
          title: "Operator flow",
          steps: [
            "Log in to operations panel",
            "Review monitoring dashboard",
            "Inspect AML-flagged transfers",
            "Approve or reject with audit log entry",
          ],
        },
      ],
      learnings: [
        "Disclosed spread UX wins trust faster than marketing copy does",
        "KYC document capture needs robust retry flows because users will always fumble the first photo",
        "AML rule engines should be data-driven, not hardcoded in application logic",
        "Going live behind a licensed counterparty is a provider swap, not a rewrite, if you plan the interfaces up front",
      ],
    },
  },
  {
    slug: "axon",
    name: "Axon",
    tagline: "Multi-tenant AI agentic SaaS with LangGraph, RAG, MCP, and production observability.",
    summary:
      "End-to-end AI platform with agentic chat, hybrid retrieval, multi-LLM routing, and a full observability stack. Eight phases complete across foundation, data layer, agents, RAG, MCP, observability, billing, and deploy.",
    status: "Demo-ready",
    year: "2026",
    category: "AI platform",
    featured: true,
    stack: [
      "Next.js 15",
      "Fastify 5",
      "Python",
      "LangGraph",
      "FastAPI",
      "PostgreSQL 16",
      "pgvector",
      "Redis",
      "BullMQ",
      "Drizzle ORM",
      "Better Auth",
      "Langfuse",
      "Prometheus",
      "Grafana",
      "Loki",
    ],
    links: [
      { label: "GitHub", url: "https://github.com/atifali-pm/axon" },
    ],
    hero: {
      problem:
        "AI agents in production need audit trails, cost control, and tenant isolation that tutorials skip. Most open-source agent frameworks assume a single user and a single wallet. Real multi-tenant AI platforms have to account for per-tenant spend caps, per-tenant data isolation, and full observability on tokens, latency, and errors.",
      goals: [
        "Queue-first architecture so long-running agent work never blocks a request",
        "Runtime row-level security so tenant isolation survives a leaky query",
        "Full observability stack covering traces, metrics, logs, and LLM-specific telemetry",
        "MCP tool integration so agents can reach into databases and internal APIs cleanly",
        "Billing that tracks real token usage, not estimated seat counts",
      ],
      solution: [
        "LangGraph agents with streaming chat end-to-end",
        "RAG pipeline with upload, chunk, embed, and hybrid search over pgvector",
        "MCP servers (postgres and a custom template) with an agent bridge",
        "Runtime RLS via the axon_app role and a withOrg pattern on every query",
        "BullMQ workers with a Bull Board admin UI for queue visibility",
        "Prometheus, Grafana, Loki, and Langfuse wired end-to-end for observability",
        "Stripe billing plus CI/CD and production deploy scaffolding",
      ],
      role: [
        "Architecture across Next.js 15, Fastify, and Python FastAPI services",
        "Drizzle schema design with runtime RLS enforcement",
        "LangGraph agent graphs and streaming chat pipeline",
        "RAG ingestion pipeline and hybrid search",
        "Observability stack integration and dashboards",
        "Deployment on Oracle Cloud with Caddy and Cloudflare Tunnel",
      ],
      ui: "Admin-first aesthetic with a focus on queue and telemetry visibility over chrome. Streaming chat UI built for long-running agent loops, not for casual chat.",
      flows: [
        {
          title: "Agentic chat flow",
          steps: [
            "User sends a message in a streaming chat session",
            "Request enters the queue with tenant scoping applied",
            "Worker runs the LangGraph agent with tools bound via MCP",
            "Retrieval hits pgvector and full-text search in parallel",
            "Response streams back with token usage logged to Langfuse",
          ],
        },
        {
          title: "Document ingestion",
          steps: [
            "User uploads a document through the app",
            "File is chunked and embedded in a worker",
            "Chunks land in pgvector with tenant scoping",
            "Hybrid retrieval becomes available to the agent",
          ],
        },
      ],
      learnings: [
        "Runtime RLS via a dedicated Postgres role is the most defensible tenant isolation pattern for AI workloads",
        "Queue-first design is not optional once you run agent loops with tool calls",
        "Langfuse pays for itself in one debugging session when an agent burns tokens on the wrong path",
        "MCP is the right abstraction for giving agents access to databases and internal APIs without leaking credentials",
      ],
    },
  },
  {
    slug: "reelm",
    name: "Reelm",
    tagline: "Self-hosted Netflix-style streaming platform with adaptive HLS and real-time transcoding.",
    summary:
      "Production-grade streaming alternative that deploys with a single command. Adaptive HLS playback, live FFmpeg transcoding, watch rooms, mood-based discovery, and a full admin console with drag-and-drop uploads.",
    status: "Demo-ready",
    year: "2026",
    category: "Streaming",
    featured: true,
    stack: [
      "React",
      "TypeScript",
      "FastAPI",
      "Python",
      "PostgreSQL",
      "Redis",
      "MinIO",
      "FFmpeg",
      "Nginx",
      "Docker",
    ],
    links: [
      { label: "GitHub", url: "https://github.com/atifali-pm/reelm" },
    ],
    hero: {
      problem:
        "Paid streaming services are expensive, region-locked, and built around licensing windows that move content in and out. People with their own media libraries have no easy path to a clean product-grade player with features like adaptive streaming, resume, multi-profile, watch rooms, and admin tooling.",
      goals: [
        "Production-grade HLS streaming with adaptive bitrate and resume",
        "Real-time FFmpeg transcoding from a single source upload",
        "Watch rooms that let remote users watch in sync",
        "Admin console with drag-and-drop uploads and live transcoding progress",
        "Single-command Docker deploy",
      ],
      solution: [
        "Adaptive HLS playback at 480p, 720p, and 1080p with resume and variable speed",
        "Real-time FFmpeg transcoding pipeline from upload",
        "Multi-profile accounts with per-profile watch state",
        "Watch rooms with invite codes for synced viewing",
        "Mood-based discovery and Spotify-style Wrapped recap",
        "Clip and share moments via public URL, QR handoff across devices",
        "Full admin console with upload progress, library management, and user admin",
        "20+ features, 15 API routers, 7 Docker services",
      ],
      role: [
        "Full-stack architecture across React frontend and FastAPI backend",
        "HLS pipeline and FFmpeg transcoding worker",
        "PostgreSQL schema for library, profiles, and watch state",
        "MinIO object storage and Nginx media delivery",
        "Docker Compose orchestration across 7 services",
      ],
      ui: "Dark, content-forward UI with poster-focused browsing. Admin console intentionally minimal so library management does not feel like operating a CMS.",
      flows: [
        {
          title: "Viewer flow",
          steps: [
            "Sign in and select a profile",
            "Browse by mood or library section",
            "Play with adaptive bitrate and resume",
            "Invite friends into a watch room for synced playback",
          ],
        },
        {
          title: "Admin flow",
          steps: [
            "Drag and drop a new video file into the admin console",
            "Watch live transcoding progress across resolutions",
            "Library entry becomes available once the master playlist is written",
          ],
        },
      ],
      learnings: [
        "HLS plus FFmpeg plus MinIO plus Nginx is a stable reference stack for self-hosted streaming",
        "Separating the transcoding worker from the API service keeps the API responsive under upload bursts",
        "Watch rooms are easy to ship badly, and you need a dedicated sync protocol if you want them to feel right",
      ],
    },
  },
  {
    slug: "drivebid",
    name: "DriveBid",
    tagline: "Reverse-auction ride-hailing. Riders set the budget, drivers bid.",
    summary:
      "Two-sided mobile product that flips the ride-hailing pricing model for emerging markets. Shared typed API across both apps, free OSM map tiles, and CI-built APK releases.",
    status: "Demo-ready",
    year: "2026",
    category: "Mobile",
    featured: true,
    stack: [
      "FastAPI",
      "React",
      "TypeScript",
      "SQLite",
      "Leaflet",
      "OpenStreetMap",
      "Expo",
      "React Native",
    ],
    links: [
      { label: "GitHub", url: "https://github.com/atifali-pm/drivebid" },
      { label: "APK releases", url: "https://github.com/atifali-pm/drivebid/releases" },
    ],
    hero: {
      problem:
        "Traditional ride-hailing platforms like Uber and Careem use fixed pricing that does not match emerging-market fuel-cost volatility. Drivers lose margin when fuel spikes and riders overpay when fuel drops. In markets where fuel is a meaningful share of the ride cost, fixed pricing is structurally wrong.",
      goals: [
        "Flip the pricing model so riders post budgets and drivers bid",
        "Ship both rider and driver apps with shared typed API contracts",
        "Real OTP auth and KYC without paid third-party dependencies where possible",
        "Free map tiles via OpenStreetMap to avoid paid vendor lock-in",
        "CI-built APK releases so manual Expo builds are not the deployment story",
      ],
      solution: [
        "Rider app to post a trip with a max budget and see live bids",
        "Driver app to view trip alerts, submit bids, and accept winning rides",
        "Real-time bid list with accept-the-best flow",
        "Typed API client shared across both React Native apps",
        "OSM tile rendering with Leaflet for live trip tracking",
        "GitHub Actions workflows building APKs on tag",
      ],
      role: [
        "Solo developer across rider app, driver app, and backend",
        "FastAPI backend with SQLite for demo simplicity",
        "Shared TypeScript API client across both Expo apps",
        "OpenStreetMap and Leaflet integration for tile rendering",
        "CI pipelines for APK builds",
      ],
      ui: "Mobile-first for both apps with shared design tokens and dark mode. Minimal chrome so the bid list and map take the whole screen when they need to.",
      flows: [
        {
          title: "Rider flow",
          steps: [
            "Sign in and set pickup and destination",
            "Post the trip with a max budget",
            "Receive bids, view driver rating next to each bid",
            "Pick a driver and track live position",
          ],
        },
        {
          title: "Driver flow",
          steps: [
            "Sign in and go online",
            "Receive trip alert with distance and max budget",
            "Submit a bid at or below the rider budget",
            "Start trip on acceptance and deliver",
          ],
        },
      ],
      learnings: [
        "A typed API client shared across two mobile apps removes a huge class of drift bugs",
        "OSM tiles perform well enough for a two-sided product without paid map providers",
        "CI-built APKs via GitHub Actions beat manual Expo builds for iteration speed",
      ],
    },
  },
  {
    slug: "learnloop",
    name: "LearnLoop",
    tagline: "Multi-tenant gamified LMS with RBAC, webhooks, and analytics.",
    summary:
      "Small-org LMS without the Moodle complexity. Next.js 15 SaaS with Prisma, Postgres, Stripe billing, and an Android APK build for mobile learners.",
    status: "In development",
    year: "2026",
    category: "LMS",
    featured: true,
    stack: [
      "Next.js 15",
      "Prisma",
      "PostgreSQL",
      "Auth.js",
      "Tailwind",
      "Stripe",
      "Vercel",
    ],
    links: [
      { label: "GitHub", url: "https://github.com/atifali-pm/learnloop" },
    ],
    hero: {
      problem:
        "Corporate training LMS tools are either bloated enterprise products or vendor-locked SaaS. Small organizations need multi-role RBAC, content authoring, and progress tracking without Moodle-level complexity or Cornerstone-level pricing.",
      goals: [
        "Multi-role RBAC covering learner, instructor, and admin",
        "Gamification engine that actually motivates without dark patterns",
        "Webhook integrations so external systems get events in real time",
        "Live deployment with preview environments for every branch",
      ],
      solution: [
        "Course authoring with lessons, quizzes, and media",
        "XP, badges, streaks, and a leaderboard",
        "Webhook integrations signed with HMAC",
        "Admin analytics for learning outcomes",
        "Bulk user import and role assignment",
      ],
      role: [
        "Architecture across Next.js 15 App Router and Prisma",
        "Server-component-first data fetching",
        "Postgres schema with tenant scoping",
        "Vercel deploy with preview environments",
        "CI with GitHub Actions",
      ],
      ui: "Minimal, dark-mode first, content-over-decoration. Server-component-first architecture so most pages ship with near-zero client JS.",
      flows: [
        {
          title: "Learner flow",
          steps: [
            "Sign in and land on a personalized dashboard",
            "Take today's lesson",
            "Complete the quiz",
            "Earn XP and unlock badges on streaks",
          ],
        },
        {
          title: "Admin flow",
          steps: [
            "Author a new course with lessons and quizzes",
            "Bulk import users from a CSV",
            "Assign roles and cohort membership",
            "Review analytics on completion and engagement",
          ],
        },
      ],
      learnings: [
        "Postgres RLS is cleaner than application-layer tenant scoping once the query count grows",
        "Webhook HMAC patterns generalize across SaaS products",
        "Gamification without dark patterns is a design discipline, not a feature flag",
        "Next.js 15 server actions replace most REST boilerplate in a tenant-scoped admin app",
      ],
    },
  },
  {
    slug: "storebridge",
    name: "StoreBridge",
    tagline: "Multi-tenant Shopify SaaS built to pass a cross-tenant security audit.",
    summary:
      "Shopify app with OAuth install flow, HMAC-verified webhooks, and Postgres RLS for real data isolation. Designed around the problem that most Shopify tutorials do multi-tenancy wrong.",
    status: "In development",
    year: "2026",
    category: "Shopify",
    featured: false,
    stack: [
      "Next.js",
      "Prisma",
      "PostgreSQL",
      "Shopify OAuth",
      "Railway",
    ],
    links: [
      { label: "GitHub", url: "https://github.com/atifali-pm/storebridge" },
    ],
    hero: {
      problem:
        "Shopify app multi-tenancy is hard to get right. Many apps on the marketplace have known cross-tenant leakage paths because tutorials do not cover runtime isolation and HMAC webhook verification in depth.",
      goals: [
        "Real tenant isolation via Postgres RLS",
        "HMAC-verified webhooks for every Shopify event",
        "Clean OAuth install and scope upgrade flows",
        "Railway deploy with CI",
      ],
      solution: [
        "OAuth install flow with scope tracking",
        "HMAC-verified webhooks on every endpoint",
        "Inventory sync worker",
        "Postgres RLS enforced at the database role level",
      ],
      role: [
        "Architecture and Shopify OAuth integration",
        "HMAC webhook signing and verification",
        "Postgres RLS setup and migration design",
        "Railway deploy pipelines",
      ],
      ui: "Shopify Polaris-native UI so the app feels embedded, not bolted on.",
      flows: [
        {
          title: "Install flow",
          steps: [
            "Merchant clicks install on the Shopify app listing",
            "OAuth redirect with requested scopes",
            "App records grant and provisions tenant row",
            "Webhooks register with signed endpoints",
          ],
        },
      ],
      learnings: [
        "Postgres RLS is the right default for Shopify apps, not application-layer scoping",
        "HMAC webhook verification should be a framework-level concern, not per-route",
        "Scope upgrade flows are where most real-world Shopify apps get stuck",
      ],
    },
  },
  {
    slug: "monotote",
    name: "Monotote",
    tagline: "Multi-microservice SaaS platform for e-commerce product intelligence and affiliate marketing.",
    summary:
      "12+ services in production handling product tracking, price-drop notifications, intelligent scraping, AI reranking, and publisher dashboards. Owned as Senior Software Architect.",
    status: "Live",
    year: "2020 to present",
    category: "Platform",
    featured: true,
    stack: [
      "Laravel 12",
      "PHP 8.2",
      "Node.js",
      "TypeScript",
      "Python",
      "PostgreSQL",
      "MySQL",
      "Elasticsearch",
      "Redis",
      "RabbitMQ",
      "AWS",
      "Docker",
      "GitHub Actions",
    ],
    links: [],
    hero: {
      problem:
        "Consumer-facing e-commerce price tracking and affiliate marketing platforms need to ingest, deduplicate, and rerank data from many retailers in real time. Most implementations collapse under scraping volatility and the combinatorial explosion of retailer-specific extraction logic.",
      goals: [
        "Horizontal scalability across retailer sources",
        "Resilient scraping with 15+ extraction methods",
        "Sub-second smart search with AI reranking",
        "Notification engine that handles email, SMS, and push cleanly",
      ],
      solution: [
        "Smart search service on Laravel and Elasticsearch with AI reranking",
        "Scraping proxy with 15+ extraction methods and retailer-specific fallbacks",
        "Notification engine fanning out to email, SMS, and push",
        "Keyword optimization microservice with Claude AI",
        "URL validation pipeline with 427+ tests",
        "Publisher dashboards on Laravel Nova",
      ],
      role: [
        "Senior Software Architect across 12+ services",
        "Architecture decisions on tech selection and service boundaries",
        "Code review, mentoring, and technical leadership",
        "AWS deployments and GitHub Actions CI",
      ],
      ui: "Operator-focused Laravel Nova dashboards for publishers and internal ops. Consumer surfaces handled separately.",
      flows: [
        {
          title: "Ingestion pipeline",
          steps: [
            "Scraping proxy pulls and parses retailer pages",
            "Products normalize and deduplicate into PostgreSQL",
            "Smart search indexes updated in Elasticsearch",
            "Notification engine fires on price drops and keyword matches",
          ],
        },
      ],
      learnings: [
        "12+ microservices only pay off if the service boundaries match team and deploy boundaries",
        "Claude in a keyword optimization loop beats hand-rolled rules once the product catalog scales past a few hundred thousand items",
        "Elasticsearch with AI reranking is the pragmatic middle path between classic search and pure vector search for product discovery",
      ],
    },
  },
  {
    slug: "chatpdf",
    name: "ChatPDF",
    tagline: "AI document Q&A SaaS. Upload a PDF, ask questions, get grounded answers.",
    summary:
      "LangChain-based document intelligence product with OpenAI embeddings, Pinecone retrieval, and Clerk auth. Clean Next.js frontend with streaming responses.",
    status: "Live",
    year: "2024",
    category: "AI SaaS",
    featured: false,
    stack: [
      "Next.js",
      "LangChain",
      "OpenAI",
      "Pinecone",
      "AWS S3",
      "Clerk",
    ],
    links: [],
    hero: {
      problem:
        "Users want to ask questions against a PDF and get answers grounded in the source, not hallucinated summaries. Generic chat UIs over PDFs often skip the retrieval step or do it badly.",
      goals: [
        "Grounded Q&A with source citations",
        "Streaming responses for a product-feel UX",
        "Clean auth and billing integration",
        "Vector storage that does not melt at moderate scale",
      ],
      solution: [
        "Upload pipeline with S3 and chunking",
        "OpenAI embeddings into Pinecone",
        "LangChain retrieval chain with citations",
        "Clerk auth with session management",
        "Next.js streaming UI",
      ],
      role: [
        "Full-stack build across ingest, retrieval, and UI",
        "LangChain chain design",
        "Pinecone index setup and retrieval tuning",
      ],
      ui: "Minimal chat UI over a PDF viewer with per-answer source highlights.",
      flows: [
        {
          title: "Q&A flow",
          steps: [
            "Upload a PDF",
            "Document chunks into Pinecone",
            "User asks a question",
            "Retrieval chain returns grounded answer with citations",
          ],
        },
      ],
      learnings: [
        "Retrieval quality matters more than model choice on most real document Q&A workloads",
        "Streaming responses are a UX expectation now, not a stretch goal",
      ],
    },
  },
  {
    slug: "kong-redis-plugin",
    name: "Kong Redis Plugin",
    tagline: "Open-source Kong API Gateway plugin for response caching via Redis.",
    summary:
      "Lua plugin for the Kong framework that adds Redis-backed response caching with configurable TTL and cache keys. Open source.",
    status: "Open source",
    year: "2023",
    category: "Infrastructure",
    featured: false,
    stack: ["Lua", "Redis", "Kong Plugin Framework"],
    links: [],
    hero: {
      problem:
        "Kong's built-in proxy-cache plugin is memory-only. Distributed deployments need a shared cache across gateway nodes, which means Redis.",
      goals: [
        "Drop-in replacement for proxy-cache with Redis backing",
        "Configurable TTL and cache keys",
        "Predictable cache invalidation semantics",
      ],
      solution: [
        "Lua plugin using the Kong plugin framework",
        "Redis as the shared cache backend",
        "Configurable TTL, cache keys, and bypass rules",
      ],
      role: [
        "Plugin design and implementation in Lua",
        "Testing across Kong versions",
        "Open-source release and maintenance",
      ],
      ui: "Config-driven, no UI.",
      flows: [
        {
          title: "Request flow",
          steps: [
            "Request hits Kong with plugin enabled",
            "Plugin checks Redis for a cached response",
            "Hit returns cached body, miss forwards upstream and caches response",
          ],
        },
      ],
      learnings: [
        "Kong plugins are a clean distribution boundary for cross-cutting gateway features",
        "Redis as a shared cache is still the most pragmatic choice for multi-node gateways",
      ],
    },
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
