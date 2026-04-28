export type ProjectStatus = "Live" | "Demo-ready" | "In development" | "Open source";

export interface GalleryImage {
  src: string;
  caption: string;
}

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
  pinned?: boolean;
  banner: string;
  gallery: GalleryImage[];
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
    slug: "zarpay",
    name: "Zarpay",
    tagline: "Cross-border UK to Pakistan money transfer with disclosed spreads and real KYC.",
    summary:
      "Full-stack remittance platform on a single corridor. Next.js 15 monolith, Expo React Native sender app, operations panel, AML rule engine, KYC document capture, and provider-agnostic payment-in, payout, FX, and OTP interfaces.",
    status: "Live",
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
    banner: "/projects/zarpay-banner.jpg",
    gallery: [
      { src: "/projects/zarpay/01-hero-sender.jpg", caption: "Sender app dashboard with balance and recent transfers" },
      { src: "/projects/zarpay/02-send-flow.jpg", caption: "Send flow: amount, quote review, and transfer status" },
      { src: "/projects/zarpay/03-recipients.jpg", caption: "Recipient management with saved bank details" },
      { src: "/projects/zarpay/04-kyc.jpg", caption: "KYC document capture with retry flow" },
      { src: "/projects/zarpay/05-main-hero.jpg", caption: "Cross-border fintech on mobile, end to end" },
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
    status: "Live",
    year: "2025",
    category: "AI platform",
    featured: true,
    pinned: true,
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
    banner: "/projects/axon-banner.jpg",
    gallery: [],
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
    status: "Live",
    year: "2018",
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
    banner: "/projects/reelm-banner.jpg",
    gallery: [
      { src: "/projects/reelm/01-home.jpg", caption: "Browse home with mood-based rails" },
      { src: "/projects/reelm/02-title-detail.jpg", caption: "Title detail with resume and variable speed" },
      { src: "/projects/reelm/05-profiles.jpg", caption: "Multi-profile accounts" },
      { src: "/projects/reelm/11-rooms.jpg", caption: "Watch rooms with invite codes" },
      { src: "/projects/reelm/12-wrapped.jpg", caption: "Spotify-style Wrapped recap" },
      { src: "/projects/reelm/09-admin.jpg", caption: "Admin console with live transcoding progress" },
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
    status: "Live",
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
    banner: "/projects/drivebid-banner.jpg",
    gallery: [
      { src: "/projects/drivebid/01-hero-rider.jpg", caption: "Rider app: post a trip with a max budget" },
      { src: "/projects/drivebid/02-hero-driver.jpg", caption: "Driver app: view trip alerts and submit bids" },
      { src: "/projects/drivebid/03-rider-flow.jpg", caption: "Rider sees live driver bids in priority order" },
      { src: "/projects/drivebid/04-driver-flow.jpg", caption: "Driver bid submission with rating context" },
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
    year: "2024",
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
    banner: "/projects/learnloop-banner.jpg",
    gallery: [
      { src: "/projects/learnloop/03-learner-home.jpg", caption: "Learner home with today's lesson and streak" },
      { src: "/projects/learnloop/06-learner-leaderboard.jpg", caption: "Cohort leaderboard with XP and badges" },
      { src: "/projects/learnloop/11-admin-course-edit.jpg", caption: "Course authoring with lessons and quizzes" },
      { src: "/projects/learnloop/09-admin-overview.jpg", caption: "Admin overview with cohort health" },
      { src: "/projects/learnloop/14-admin-analytics.jpg", caption: "Completion and engagement analytics" },
      { src: "/projects/learnloop/18-instructor-dashboard.jpg", caption: "Instructor dashboard per cohort" },
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
    slug: "caseflow",
    name: "CaseFlow",
    tagline: "Multi-tenant case management SaaS for legal practices, consultants, and coaches.",
    summary:
      "Flagship Laravel SaaS built end to end across 10 tagged phases. Multi-tenant isolation via global scope, Stripe Cashier billing, client portal on Livewire, and HMAC-signed outgoing webhooks.",
    status: "Live",
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
    banner: "/projects/caseflow-banner.jpg",
    gallery: [
      { src: "/projects/caseflow/01-admin-dashboard.jpg", caption: "Admin dashboard with cases, clients, and quick actions" },
      { src: "/projects/caseflow/02-kanban-board.jpg", caption: "Kanban board for case workflow states" },
      { src: "/projects/caseflow/05-client-portal.jpg", caption: "Livewire client portal with documents and messaging" },
      { src: "/projects/caseflow/07-case-detail.jpg", caption: "Case detail view with tabs for tasks, time, and invoices" },
      { src: "/projects/caseflow/03-invoice-pdf.jpg", caption: "PDF invoice generation via DomPDF" },
      { src: "/projects/caseflow/04-reports-dashboard.jpg", caption: "Reports dashboard with charts and CSV export" },
      { src: "/projects/caseflow/09-api-tokens.jpg", caption: "Per-user Sanctum API token management" },
      { src: "/projects/caseflow/10-webhooks.jpg", caption: "HMAC-SHA256 signed outgoing webhooks" },
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
    slug: "storebridge",
    name: "StoreBridge",
    tagline: "Multi-tenant Shopify SaaS built to pass a cross-tenant security audit.",
    summary:
      "Shopify embedded app with OAuth install flow, HMAC-verified webhooks, BullMQ-driven inventory sync, and Postgres RLS for real data isolation. 53 tests passing including 16 tenant-isolation cases against a live Postgres. Designed around the problem that most Shopify tutorials do multi-tenancy wrong.",
    status: "Live",
    year: "2026",
    category: "Shopify",
    featured: true,
    stack: [
      "Next.js 15",
      "TypeScript",
      "Drizzle ORM",
      "PostgreSQL + RLS",
      "Redis + BullMQ",
      "Shopify OAuth",
      "Better Auth",
      "Railway",
    ],
    links: [
      { label: "Live app", url: "https://storebridge-production.up.railway.app/" },
      { label: "GitHub", url: "https://github.com/atifali-pm/storebridge" },
    ],
    banner: "/projects/storebridge-banner.jpg",
    gallery: [
      { src: "/projects/storebridge/01-shopify-install-consent.png", caption: "Shopify OAuth scope-grant consent during merchant install." },
      { src: "/projects/storebridge/02-embedded-admin-empty.png", caption: "Embedded Polaris-native admin shell after install, before any synced data." },
      { src: "/projects/storebridge/03-merchant-merge-flow.png", caption: "Multi-store merge token flow that attaches a second shop to the same tenant." },
      { src: "/projects/storebridge/04-store-pairing-active.png", caption: "Active store pairing view showing both shops bound to one StoreBridge tenant." },
      { src: "/projects/storebridge/00-partner-app-config.png", caption: "Shopify Partner dashboard config for the live app (OAuth, redirects, scopes)." },
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
    banner: "/projects/chatpdf-banner.jpg",
    gallery: [],
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
    year: "2016",
    category: "Infrastructure",
    featured: false,
    stack: ["Lua", "Redis", "Kong Plugin Framework"],
    links: [],
    banner: "/projects/kong-redis-plugin-banner.jpg",
    gallery: [],
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
  {
    slug: "tracklane",
    name: "Tracklane",
    tagline: "Modern AI-first Rails 8 project management for teams who want their own.",
    summary:
      "Self-hostable multi-tenant project management SaaS built on Rails 8 and Hotwire. Kanban, timeline, wiki, workload, time tracking, and an optional Claude-powered triage layer. 11 of 12 planned phases shipped with strict Postgres Row-Level Security and a 79-test isolation suite proving cross-tenant reads and writes are rejected.",
    status: "Shipped",
    year: "2026",
    category: "PM platform",
    featured: true,
    stack: [
      "Rails 8",
      "PostgreSQL 16",
      "pgvector",
      "Claude",
      "Hotwire",
      "Turbo Streams",
      "Stimulus",
      "Solid Queue",
      "Solid Cable",
      "Tailwind CSS v4",
      "Kamal 2",
    ],
    links: [
      { label: "GitHub", url: "https://github.com/atifali-pm/tracklane" },
    ],
    banner: "/projects/tracklane-banner.jpg",
    gallery: [
      "/projects/tracklane/01-home-dark.png",
      "/projects/tracklane/04-kanban.png",
      "/projects/tracklane/09-timeline.png",
      "/projects/tracklane/07-workload.png",
      "/projects/tracklane/08-calendar.png",
      "/projects/tracklane/05-issue.png",
      "/projects/tracklane/06-activity.png",
      "/projects/tracklane/10-ask-ai.png",
      "/projects/tracklane/13-wiki-empty.png",
      "/projects/tracklane/11-invitations.png",
      "/projects/tracklane/12-new-project.png",
      "/projects/tracklane/02-projects.png",
    ],
    hero: {
      problem:
        "Most open project management tools show their age in UI, real-time collaboration, and deploy story. Closed SaaS alternatives solve the UX problem but lock teams into vendor silos, usage limits, and weak self-host paths. Teams that need privacy, data sovereignty, or on-prem deploy end up choosing between a modern experience and owning their data. AI features in PM tools usually sit as bolt-ons that do not change how the team actually works.",
      goals: [
        "Every surface a 2026 PM user expects: kanban, timeline, calendar, wiki, workload",
        "Self-hostable on a single VPS with one Kamal deploy command",
        "AI in the core workflow via triage and ask-your-project chat, off by default and bring-your-own-key",
        "Strict multi-tenancy enforced at the database, not just in the app layer",
      ],
      solution: [
        "Organizations and projects with role-gated access (admin, manager, member, viewer)",
        "Issues with status, priority, assignee, start date, due date, comments, and @mentions",
        "Kanban board with Stimulus drag-and-drop and Turbo Stream live updates across every connected user",
        "Timeline (Gantt) and calendar views per project, plus a workload view grouping issues by assignee across the organization",
        "Markdown wiki per project and time tracking per issue with per-user and per-week totals",
        "Invitation flow with signed tokens and email notifications for assignments, mentions, and pending invites",
        "Claude-powered issue triage on create: suggested priority, labels, and assignee with confirm or override",
        "Ask-your-project chat: pgvector retrieval over issues and comments with cited sources inline",
      ],
      role: [
        "Solo developer on architecture, data model, UX, and every phase",
        "Rails 8 with Hotwire, Turbo Streams, and Solid Cable for real-time collaboration without a React front-end",
        "Claude integration for triage; pgvector + embeddings pipeline for ask-your-project chat",
        "Postgres 16 with Row-Level Security on every tenant-scoped table, enforced through a NOSUPERUSER app role",
        "79 integration tests (200 assertions) that prove cross-tenant SELECT / INSERT / UPDATE / DELETE are rejected",
      ],
      ui: "Monday-style three-column shell: persistent left sidebar with projects, top bar with async theme toggle, main area with right rail widgets where they fit. Dark mode as a first-class target, not an afterthought. AI suggestions render inline on the issue page with confirm or dismiss buttons, never a separate modal.",
      flows: [
        {
          title: "Issue triage flow",
          steps: [
            "Member creates a new issue with title and description",
            "Background job asks Claude for a priority, assignee, labels, and rationale",
            "Turbo Stream drops the suggestion card onto the issue page without a refresh",
            "Member reviews and confirms or dismisses; the PM state persists either way",
          ],
        },
        {
          title: "Ask your project",
          steps: [
            "Member opens the project's ask page",
            "Types a natural language question",
            "Server embeds it, runs a cosine search over this project's indexed issues and comments, asks Claude with those chunks",
            "Response renders with inline citations linking back to the source issue, plus a source list below",
          ],
        },
        {
          title: "Cross-tenant safety",
          steps: [
            "Every request opens a transaction and SETs app.current_user_id and app.current_organization_id",
            "Every tenant-scoped table has a USING + WITH CHECK RLS policy on organization_id",
            "Rails connects as a NOSUPERUSER role so the policies actually apply even to the owner path",
            "Integration suite simulates the app role with SET LOCAL ROLE and asserts the guarantees",
          ],
        },
      ],
      learnings: [
        "Postgres RLS done right is the cleanest way to get bulletproof multi-tenancy in Rails, and the test suite is what makes it real",
        "after_commit callbacks fire after the outer transaction closes, so any RLS-dependent work needs to re-establish its own GUC scope",
        "Hotwire with Turbo Streams and Solid Cable covers real-time PM features without pulling in a JavaScript framework",
        "Bring-your-own-key for AI keeps the app fully usable and demoable even when no provider is configured",
        "Monday-style shell with a persistent sidebar and quiet right rail scales from tiny demo data up to a real org without redesign",
      ],
    },
  },
  {
    slug: "n8n-agent-studio",
    name: "n8n Agent Studio",
    tagline: "Three production-grade n8n workflows with real Claude tool-use, one audit database.",
    summary:
      "Senior-tier automation portfolio built around Postgres audit, structured Claude tool use, and proper error paths. Three workflows sharing one dashboard: GitHub activity digest, content distribution drafts, and Gmail inbox ops.",
    status: "In development",
    year: "2026",
    category: "Automation",
    featured: true,
    stack: [
      "n8n",
      "Claude",
      "PostgreSQL 16",
      "Docker Compose",
      "Gmail API",
      "Linear API",
      "Slack API",
    ],
    links: [
      { label: "GitHub", url: "https://github.com/atifali-pm/n8n-agent-studio" },
    ],
    banner: "/projects/n8n-agent-studio-banner.jpg",
    gallery: [],
    hero: {
      problem:
        "The Fiverr n8n market is full of demos that use Google Sheets as a database and have no error handling. Serious clients see those and move on. What is missing is an automation portfolio that looks like production: real audit trails, structured tool use, and a single dashboard across workflows.",
      goals: [
        "Three workflows of increasing complexity that share one audit backend",
        "Claude as a proper agent with tool-use, not as a single-shot prompt",
        "Postgres-backed run log with structured error paths",
        "Single Docker Compose stack that deploys to any VPS",
      ],
      solution: [
        "Workflow 1 (simple): GitHub Activity Digest every morning across configured repos, posted to Slack",
        "Workflow 2 (moderate): Content Distribution Agent drafts Twitter thread, LinkedIn post, and newsletter blurb from each new blog post, queued for review",
        "Workflow 3 (advanced): Gmail Inbox Ops Agent routes incoming support mail through Claude with four bound tools (customer lookup, KB search, draft reply, file bug in Linear)",
        "Shared workflow_runs table so a single dashboard covers all three",
        "n8n on port 5678, Postgres on 5451 (host) with pgcrypto enabled",
      ],
      role: [
        "Workflow design and audit schema",
        "Claude tool-use wiring for the inbox agent",
        "Docker Compose stack with port allocation that avoids conflicts with other local stacks",
        "Dashboard over workflow_runs for unified observability",
      ],
      ui: "n8n's native editor for workflow design, Postgres for state. Dashboard is deliberately minimal: runs in, status, timings, errors. No dashboard frills.",
      flows: [
        {
          title: "Inbox ops agent flow",
          steps: [
            "Incoming support email arrives in Gmail",
            "n8n routes it through the Claude agent",
            "Agent calls tools: customer lookup, KB search, draft reply, file bug",
            "Draft reply lands in Gmail, bug ticket in Linear, run row in Postgres",
            "Human reviewer approves or edits before anything leaves",
          ],
        },
      ],
      learnings: [
        "Postgres audit beats opaque platform logs once you debug a real production flow once",
        "Claude agents with explicit tool schemas are more reliable than prompt-chained pipelines",
        "A single shared audit table across workflows is the single best design decision for an agent studio",
        "Production n8n is a different craft from the tutorial-grade workflows that dominate Fiverr listings",
      ],
    },
  },
  {
    slug: "odooforge",
    name: "OdooForge",
    tagline: "Open-source Odoo deployment kit with a Claude-powered support agent, portable across AWS, Azure, DigitalOcean, and local Docker.",
    summary:
      "One repo that stands up a production-grade Odoo 18 instance on the cloud of your choice and ships with a native AI customer support module. Postgres 16 with pgvector for retrieval, a Groq or Claude provider abstraction, tool use inside the agent, and a filterable audit log on every AI action. Phases 1 to 3 (local Docker stack + AI module + audit log) shipped. Phases 4 to 6 (Terraform for AWS, Azure, DigitalOcean, and Oracle Cloud Always Free demo) pending. MIT licensed.",
    status: "Live",
    year: "2026",
    category: "DevOps",
    featured: false,
    stack: [
      "Odoo 18 Community",
      "PostgreSQL 16",
      "pgvector",
      "OCA helpdesk_mgmt",
      "Python",
      "Groq",
      "Anthropic Claude",
      "Docker Compose",
      "Terraform",
      "nginx",
    ],
    links: [
      { label: "GitHub", url: "https://github.com/atifali-pm/odooforge" },
    ],
    banner: "/projects/odooforge-banner.jpg",
    gallery: [
      { src: "/projects/odooforge/01-odoo-local-up.png", caption: "Bare Odoo 18 stack up on Docker before any AI module is installed" },
      { src: "/projects/odooforge/02-helpdesk-installed.png", caption: "OCA helpdesk_mgmt installed and ready for tickets" },
      { src: "/projects/odooforge/03-odooforge-ai-installed.png", caption: "OdooForge AI addon installed from the Apps menu" },
      { src: "/projects/odooforge/04-draft-reply-button.png", caption: "Draft AI reply button on a Helpdesk ticket" },
      { src: "/projects/odooforge/05-agent-tool-call.png", caption: "Agent calling tools (lookup_customer, search_kb) inside the ticket flow" },
      { src: "/projects/odooforge/06-audit-log.png", caption: "Filterable audit log of every AI action stored as an Odoo model" },
      { src: "/projects/odooforge/07-helpdesk-dashboard.png", caption: "Helpdesk dashboard with seeded demo tickets" },
      { src: "/projects/odooforge/08-helpdesk-tickets-list.png", caption: "Ticket list view from the operator side" },
      { src: "/projects/odooforge/09-knowledge-base.png", caption: "Knowledge base articles indexed into pgvector for retrieval" },
    ],
    hero: {
      problem:
        "Small and mid-size businesses pick Odoo Community because the licence is free and the feature set rivals SaaS ERPs that charge per seat. The friction is everything around it. Getting it onto a cloud you actually trust, keeping backups, plugging it into modern AI without paying for a second SaaS layer, and not getting locked into one vendor. Most public Odoo repos solve one of these in isolation. None ship the whole stack with AI baked in.",
      goals: [
        "One CLI command stands up the same Odoo stack on AWS, Azure, DigitalOcean, or local Docker",
        "Native Odoo addon adds AI customer support that operators can install from the Apps menu",
        "Pluggable LLM provider so Groq, Claude, or Ollama is a settings toggle, not a code change",
        "Audit log on every AI action, filterable inside Odoo",
        "Zero-cost demo target via Oracle Cloud Always Free + Groq free tier",
      ],
      solution: [
        "docker-compose foundation with Odoo 18 Community, Postgres 16 with pgvector, and OCA helpdesk_mgmt 18.0 ready to go",
        "Custom Odoo addon adds a Draft AI reply button on every Helpdesk ticket",
        "Agent retrieves top-k knowledge base articles via pgvector and calls four bound tools (lookup_customer, search_kb, check_order_status, escalate_to_human)",
        "Provider abstraction lets the same agent run on Groq (default, free), Claude (when a key is present), or Ollama (fully self-hosted)",
        "Every tool call and draft is written to a custom Odoo audit model with a backend filter view",
        "Sensible SME defaults: multi-currency, multi-language (English, Urdu, Arabic), Pakistan timezone, Let's Encrypt-ready nginx config, daily pg_dump and filestore backup scripts",
      ],
      role: [
        "Solo architect and engineer, requirements to deploy",
        "docker-compose stack design and port allocation that avoids conflicts with other local stacks",
        "Custom Odoo 18 module with manifest, models, views, and Helpdesk extension",
        "Agent loop with Anthropic-style tool use, pgvector retrieval, and audit persistence",
        "LLM provider adapter so Groq, Claude, and Ollama share one interface",
      ],
      ui: "Native Odoo backend the whole way through. The AI flow is one button on the existing ticket form, one chatter thread for the draft, and one new menu for the audit log. Operators do not learn a new app, they get a new button.",
      flows: [
        {
          title: "Draft AI reply on a ticket",
          steps: [
            "Operator opens a Helpdesk ticket",
            "Clicks Draft AI reply",
            "Agent retrieves relevant knowledge base articles via pgvector",
            "Agent calls bound tools as needed (customer lookup, KB search, order status, escalate)",
            "Draft reply lands in the ticket chatter for the operator to review and send",
            "Every step is written to the audit log with timestamps and tool inputs",
          ],
        },
        {
          title: "Provider swap",
          steps: [
            "Operator opens OdooForge AI settings inside Odoo",
            "Picks Groq, Claude, or Ollama from a dropdown",
            "Saves; the next ticket action uses the selected provider with no restart",
          ],
        },
      ],
      learnings: [
        "Odoo's ORM does not natively know pgvector, so vector search has to be raw SQL inside the addon. Documenting that pattern is half the value of the repo.",
        "A provider adapter that treats Groq, Claude, and Ollama as one interface keeps the demo fully free while still proving Claude works for paying clients",
        "Audit logging as a first-class Odoo model (not just file logs) means operators can filter AI actions the same way they filter any other Odoo record",
        "Phase 1 to 3 ship the AI flow on local Docker first; cloud portability is a separate phase, which keeps the build honest and the screenshots truthful",
      ],
    },
  },
];

export const featuredProjects = projects
  .filter((p) => p.featured)
  .sort((a, b) => Number(Boolean(b.pinned)) - Number(Boolean(a.pinned)));
