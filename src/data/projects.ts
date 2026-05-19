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
    slug: "meridian",
    name: "Meridian",
    tagline: "Production-grade multi-agent research and execution pipeline with hybrid RAG, conflict resolution, and an LLM-as-judge rubric.",
    summary:
      "Hand Meridian an ambiguous business goal and it returns a structured answer with provenance. A LangGraph orchestrator plans a dependency-aware task DAG, delegates to specialist sub-agents (hybrid retrieval, web/API, synthesis), retries and replans on failure, resolves source conflicts, and scores every run with an LLM judge. Self-hosted Langfuse captures the full trace.",
    status: "Live",
    year: "2026",
    category: "AI platform",
    featured: true,
    stack: [
      "Python",
      "FastAPI",
      "LangGraph",
      "PostgreSQL",
      "pgvector",
      "tsvector",
      "Redis",
      "Langfuse",
      "Anthropic Claude",
      "Docker Compose",
    ],
    links: [
      { label: "GitHub", url: "https://github.com/atifali-pm/meridian" },
    ],
    banner: "/projects/meridian-banner.jpg",
    gallery: [
      { src: "/projects/meridian/01-run-report.png", caption: "Run report with the task DAG, KPI cards for duration, tokens, cost, and judge score, plus a synthesis excerpt." },
      { src: "/projects/meridian/02-langfuse-trace.png", caption: "Langfuse-style trace timeline with nested agent spans (orchestrator, planner, executor, retrieval, web, synthesis, judge) and five score cards at the bottom." },
      { src: "/projects/meridian/03-judge-rubric.png", caption: "Judge rubric panel scoring goal completion, accuracy, coverage, confidence, and hallucination risk with a PASS verdict." },
    ],
    hero: {
      problem:
        "Most multi-agent demos collapse the moment an API breaks, a goal is ambiguous, or two sources contradict. They lack typed contracts between agents, retries at the tool layer, conflict resolution as a first-class step, and observability wired in from day one. Without those, you cannot defend an agent's answer to a real stakeholder.",
      goals: [
        "Accept a high-level business goal and return a structured, cited answer",
        "Plan a dependency-aware task DAG with per-task acceptance criteria",
        "Delegate to specialist sub-agents with typed input and output contracts",
        "Resolve conflicts between sources instead of averaging them away",
        "Score every run against a rubric so quality is measurable, not vibes",
      ],
      solution: [
        "LangGraph orchestrator with planner, executor, and replanner nodes that walk the task DAG",
        "Retrieval agent combining pgvector and tsvector via Reciprocal Rank Fusion",
        "Web/API agent built on Tavily plus a generic HTTP tool, with retry and circuit breaking",
        "Synthesis agent that aggregates, detects conflicts, and reconciles by weight and confidence",
        "Redis session store for per-run state, Postgres for run logs and evaluation history",
        "Self-hosted Langfuse trace for every agent call, token, and tool invocation",
        "LLM-as-judge rubric scoring goal completion, accuracy, coverage, confidence, and hallucination risk",
      ],
      role: [
        "Solo architect and engineer, system design to deploy",
        "Four-layer architecture (orchestrator, agents, memory, observability) and the LangGraph wiring",
        "Hybrid RAG pipeline with pgvector + tsvector RRF and per-agent context budgeting",
        "Langfuse self-hosted stack, LLM-judge rubric, and run report generator",
        "Docker Compose stack for Postgres, Redis, and Langfuse",
      ],
      ui: "Operator-first run report and trace viewer, not an end-user surface. The product is the structured answer plus the trace and rubric backing it.",
      flows: [
        {
          title: "Goal-to-answer flow",
          steps: [
            "Operator submits a business goal to the FastAPI endpoint",
            "Planner decomposes the goal into a task DAG with declared dependencies and acceptance criteria",
            "Executor walks the DAG, dispatching tasks to retrieval, web/API, and synthesis agents",
            "Replanner re-enters the loop with failure context when a specialist returns low confidence or errors",
            "Synthesis agent reconciles conflicting sources and emits a cited answer",
            "LLM judge scores the run, full trace and rubric persist to Langfuse and Postgres",
          ],
        },
      ],
      learnings: [
        "Typed Pydantic contracts between agents catch a class of integration bugs before they reach the executor",
        "Conflict resolution as a first-class step beats hoping the synthesizer averages contradictions correctly",
        "An LLM judge rubric turns agent quality from a vibe into a number you can regress against",
        "Observability wired in from layer one is the difference between a demo and an answer you can defend",
      ],
    },
  },
  {
    slug: "rampart",
    name: "Rampart",
    tagline: "Enforcement-first operational OS for field service ops. Deterministic workflow engine plus AI-augmented incident command.",
    summary:
      "Rampart runs the operational side of any field service business. It dispatches jobs to technicians, enforces SLA windows, opens an incident command bridge when a site escalates, and keeps an immutable audit trail of every state change and every override. The deterministic core (FSM, enforcement engine, event bus, audit log) never lets a job be falsely closed. A separate AI layer, provider-abstracted across Groq and a deterministic Echo fake, triages incidents, ranks dispatch options, drafts closeout reports, and answers natural-language questions over the audit log. The LLM can suggest, never decide.",
    status: "Live",
    year: "2026",
    category: "Ops platform",
    featured: true,
    stack: [
      "Python",
      "FastAPI",
      "Pydantic v2",
      "PostgreSQL",
      "Redis Streams",
      "APScheduler",
      "React",
      "Vite",
      "Groq",
      "Docker Compose",
    ],
    links: [
      { label: "GitHub", url: "https://github.com/atifali-pm/rampart" },
    ],
    banner: "/projects/rampart-banner.jpg",
    gallery: [
      { src: "/projects/rampart/01-phase1-tests-green.png", caption: "Phase 1 test suite: FSM edge map, R001 closeout-evidence rule (happy plus four denial paths), and end-to-end paths against a real Postgres." },
      { src: "/projects/rampart/02-phase1-audit-trail.png", caption: "False closeout, forensically recorded. The denied transition lands in the audit log with a per-rule row listing exactly which evidence was missing. Nothing happened, and the system can prove who tried." },
      { src: "/projects/rampart/03-phase2-dashboard.png", caption: "Command-centre dashboard with four seeded jobs in four SLA states. Left column reads GET /board and colour-codes by deadline distance; right column tails the Redis Streams event bus." },
      { src: "/projects/rampart/04-phase2-after-override.png", caption: "Manager override unblocks a denied closeout. Event stream shows transition.applied R003_OVERRIDE_APPROVED right above the original transition.denied R001_INCOMPLETE_CLOSEOUT_EVIDENCE. The override authorises one bypass, never relaxes the rule." },
      { src: "/projects/rampart/05-phase3-incident-room.png", caption: "Incident room with the command bridge. SLA breach auto-opened a HIGH incident, the on-call dispatcher was seated as level 1, an escalation pulled the supervisor in at level 2, and every responder, message, and state change is persisted." },
      { src: "/projects/rampart/06-phase4-ai.png", caption: "Phase 4 AI surface: a triage agent card inside the command bridge (severity, action, confidence, rationale) and an audit chat panel that turns natural-language questions over the audit log into a cited timeline. Every output lands in ai_recommendations." },
    ],
    hero: {
      problem:
        "Field service operations sit on top of a workflow that has to survive incomplete closeouts, SLA games, manager overrides made for the wrong reason, and a 3am incident where nobody is sure who acknowledged what. Most teams reach for a CRM with a status dropdown and hope the audit story works itself out. It does not. The control system has to refuse a bad transition before it lands, capture every override with justification and approval, escalate on its own when an SLA breaks, and prove all of it after the fact.",
      goals: [
        "Make the workflow a real state machine with guards, side effects, and atomic transitions",
        "Centralize every authorization through one enforcement engine that returns allow, deny, allow_with_override, or escalate, with reason codes",
        "Capture every override with actor, role, justification, supervisor approval, and expiry",
        "Watch SLAs in the background and raise warning then breach events, escalating up the on-call ladder if nobody acknowledges",
        "Open an incident room automatically on breach so the bridge has the job, events, responders, timeline, and chat in one place",
        "Add an AI layer for triage, dispatch ranking, closeout drafting, and audit Q&A without letting it touch the deterministic core",
      ],
      solution: [
        "Declarative FSM in Python: states, transitions, guards run pre-transition, side effects run post-transition, transitions and audit rows committed in the same Postgres transaction",
        "Enforcement engine with a versioned rule catalog (R001 closeout evidence, R003 override capture, more to come), returning structured decisions with reason codes",
        "Redis Streams event bus that every subscriber (dashboard, SLA watcher, AI layer) reads from, decoupling the operational primitives",
        "SLA watcher as a background worker that emits sla.warning then sla.breach and auto-opens an incident in the same transaction",
        "Incident command engine with severity-based escalation ladder, on-call rotation lookup, responder tracking, and a system timeline",
        "Provider abstraction for the AI layer: a deterministic Echo provider for tests and offline demos, a Groq provider (llama-3.3-70b-versatile) for real LLM use, swappable through a single env var",
        "Four agents (triage, dispatch, closeout, audit chat) each writing to an ai_recommendations table the deterministic core never reads, so an LLM can suggest but never decide",
        "React command-centre dashboard polling the API, surfacing live job board, event stream, incident bridge, triage card, and audit chat panel",
      ],
      role: [
        "Solo architect and engineer, system design through deploy",
        "Five-layer architecture (engine, ops, AI, API, dashboard) and the JD-aligned module layout",
        "FSM, enforcement engine, audit model, and override flow",
        "SLA watcher, escalation ladder, and incident command bridge",
        "Provider abstraction plus the four AI agents and their schemas",
        "Phase plan, test strategy (51 passing tests against real Postgres), and screenshot-driven case study",
      ],
      ui: "Operator-first command-centre dashboard. Left column is a colour-coded live job board, right column is the Redis Streams event tail. Click into a job and the incident room opens with timeline, responders, chat, triage card, and the action ladder. A floating audit chat panel sits bottom-right for natural-language questions over the audit log.",
      flows: [
        {
          title: "False closeout, denied and audited",
          steps: [
            "Technician POSTs a closeout transition with missing photo, missing checklist, or out-of-radius geo",
            "FSM consults the enforcement engine; R001 returns deny with the exact reason codes for each missing piece of evidence",
            "Denied transition still writes to the audit log alongside a per-rule row listing what was missing",
            "Job stays at closeout_pending; the audit story is complete (who tried, when, why blocked) even though state did not advance",
            "Dashboard event stream shows transition.denied with the rule that fired",
          ],
        },
        {
          title: "SLA breach to incident bridge",
          steps: [
            "SLA watcher (background worker) sees an open job approaching its deadline and emits sla.warning to the Redis stream",
            "Deadline passes with no closeout; watcher emits sla.breach and the incident bridge opens a HIGH incident in the same transaction",
            "On-call dispatcher is seated as the level-1 responder, a system message lands in the incident chat",
            "Escalation to level 2 pulls the on-call supervisor in; every responder change goes through the ladder, every message persists",
            "Supervisor approves a manual override (R003): justification recorded, expiry set, the override row links the denied transition to the new allow_with_override transition",
          ],
        },
        {
          title: "AI triage and audit chat, deterministic core untouched",
          steps: [
            "Incident opens; the API endpoint POSTs to /ai/triage/incidents/{id} which builds a structured context (job, recent events, severity, responders) in a single transaction",
            "Provider.generate_json runs the triage schema; output (severity tier, recommended action, confidence, rationale) lands in ai_recommendations",
            "Dashboard triage card polls /ai/recommendations/by-target and surfaces the recommendation with a re-run button",
            "Operator asks an audit question in the audit chat panel; the agent hands a fixed-window slice (last 50 transitions, last 10 incidents, last 30 stream events) plus the question to the provider",
            "Answer plus citations write back; deterministic core never imports the AI module, no SQL access for the LLM, every output is auditable",
          ],
        },
      ],
      learnings: [
        "Atomic transition plus audit-row commit is the single design decision that buys the whole audit story; trying to log after the fact loses the ordering guarantee",
        "Returning a structured decision (allow, deny, allow_with_override, escalate) with reason codes turns the enforcement engine into the one place to reason about authorization, which is worth more than the rules themselves",
        "An Echo provider that produces plausible structured outputs is not a stub. It is the proof that swapping providers is a one-line factory change, and it keeps the test suite hermetic",
        "Keeping the deterministic core blind to ai_recommendations is what lets the AI layer ship without changing the safety story: an LLM can suggest, a human commits, and the existing rules run on the commit",
        "Phases as commits (Phase 1, 2, 3, 4 each a single commit on main) make the progression legible to a reviewer who scrolls git log before reading any code",
      ],
    },
  },
  {
    slug: "cue",
    name: "Cue",
    tagline: "Production-grade WhatsApp Business AI agent with structured tool use and a full audit trail.",
    summary:
      "WhatsApp Business agent that takes the cue from an incoming message, runs a four-tool agent loop with a knowledge base lookup, sends the reply via the Meta Cloud API, and persists every model run, tool call, and escalation to Postgres. Pluggable LLM provider, explicit escalation rules, and an admin dashboard that answers what the bot said to which customer at 3am.",
    status: "Live",
    year: "2026",
    category: "AI SaaS",
    featured: true,
    stack: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Meta Cloud API",
      "Anthropic Claude",
      "Groq",
      "Vercel",
    ],
    links: [
      { label: "GitHub", url: "https://github.com/atifali-pm/cue" },
    ],
    banner: "/projects/cue-banner.jpg",
    gallery: [
      { src: "/projects/cue/01-webhook-dashboard.png", caption: "Conversation list in the admin dashboard with status, last message preview, and escalation flags." },
      { src: "/projects/cue/02-conversation-detail.png", caption: "Conversation timeline showing inbound and outbound messages alongside AI run metadata and tool calls." },
    ],
    hero: {
      problem:
        "Most WhatsApp bot tools stop at hard-coded keyword flows or shallow GPT wrappers with no audit. Regulated workflows (support, billing, customer onboarding) cannot ship without an answer to what the bot said to a customer at 3am, with token counts, latency, tool calls, and errors logged per run. Existing tools do not provide that level of observability.",
      goals: [
        "Receive and send on the Meta Cloud API webhook end to end",
        "Ground every reply against a real knowledge base with a bound search tool",
        "Treat every AI reply as a first-class run with full telemetry persisted",
        "Make escalation rules explicit, not buried inside prompt soup",
        "Keep the model provider pluggable so Groq, Claude, or BYO key all work",
      ],
      solution: [
        "Webhook endpoint on Vercel receives WhatsApp messages and persists them with conversation context",
        "Structured tool loop with four bound tools (lookup customer, search KB, draft reply, escalate to human)",
        "Lexical KB lookup today with the pgvector schema in place for the Phase 3 embedding pipeline",
        "Outgoing messages flagged ai_drafted and ai_sent so human-vs-AI authorship stays traceable",
        "Escalation tool flips conversation status and writes an escalation row, surfaced in the admin dashboard",
        "Admin dashboard surfaces conversations, escalations, and AI run details including tokens and latency",
      ],
      role: [
        "Solo architect and engineer, requirements to deploy",
        "Meta Cloud API webhook integration on Vercel",
        "Agent loop design with structured tool use against Groq and Claude",
        "KB schema and the four bound tools wired into the agent loop",
        "Admin dashboard for conversations, escalations, and run inspection",
      ],
      ui: "Operator-first admin built for monitoring conversations and AI runs, not for end users. End users only see WhatsApp on their phone, which is the point.",
      flows: [
        {
          title: "Inbound message flow",
          steps: [
            "Customer sends a WhatsApp message to the business number",
            "Meta Cloud API webhook hits the Cue endpoint, message persists with conversation context",
            "Agent loop runs: lookup customer, search KB, draft reply, decide on escalation",
            "Reply sends back over the Meta Cloud API, flagged ai_sent",
            "Every model run, tool call, and token count writes to the Postgres audit trail",
          ],
        },
        {
          title: "Escalation flow",
          steps: [
            "Agent calls escalate_to_human based on explicit rules",
            "Conversation status flips to escalated and an escalation row writes in the same transaction",
            "Operator picks up the conversation from the admin dashboard",
            "Subsequent operator replies persist alongside the AI run history",
          ],
        },
      ],
      learnings: [
        "Treating every AI reply as a logged run with tokens, latency, and tool calls is the difference between a demo bot and a regulated-workflow bot",
        "Explicit escalation rules in code beat trying to coax escalation behavior out of a prompt",
        "A pluggable provider interface (Groq default, Claude via BYO key) lets the demo stay free while paying clients still get Claude",
        "Persisting AI run metadata at the message level (not at the conversation level) keeps the audit trail useful when an agent loop spans multiple tool calls",
        "Phase 3 next: swap the lexical KB lookup for pgvector embeddings; Phase 4 next: Slack notification on escalate plus an escalation queue UI",
      ],
    },
  },
  {
    slug: "mcp-toolkit",
    name: "MCP Toolkit",
    tagline: "Three production-grade Model Context Protocol servers (GitHub, Linear, Gmail) with auth, audit logging, and rate-limit handling.",
    summary:
      "Public TypeScript monorepo with three MCP servers buyers can drop into Claude Desktop or Cursor. Tokens scoped per tool, no shared secrets, errors that surface rate-limit details, and a SQLite audit log of every tool call. Backs the Custom MCP Server gig on Fiverr and Upwork.",
    status: "Live",
    year: "2026",
    category: "AI platform",
    featured: true,
    stack: [
      "TypeScript",
      "Node.js",
      "Model Context Protocol",
      "pnpm workspace",
      "SQLite",
      "PostgreSQL",
      "GitHub API",
      "Linear API",
      "Gmail API",
    ],
    links: [
      { label: "GitHub", url: "https://github.com/atifali-pm/mcp-toolkit" },
    ],
    banner: "/projects/mcp-toolkit-banner.jpg",
    gallery: [
      { src: "/projects/mcp-toolkit/00-hero.png", caption: "Hero composite: GitHub MCP, Linear MCP, and the atif-mcp-replay audit log shown together." },
      { src: "/projects/mcp-toolkit/01-github-mcp-inspector.png", caption: "GitHub MCP server inspected via @modelcontextprotocol/inspector, repo.search round-trip with rate-limit info and audit log row." },
      { src: "/projects/mcp-toolkit/02-linear-mcp-inspector.png", caption: "Linear MCP server inspected via @modelcontextprotocol/inspector, team.query round-trip showing the auth-error contract." },
      { src: "/projects/mcp-toolkit/04-audit-log.png", caption: "atif-mcp-replay CLI printing recent tool calls from the SQLite audit log, success and error rows colored differently." },
    ],
    hero: {
      problem:
        "MCP turns Claude and Cursor into agents that touch real systems, but the reference servers from Anthropic stop short of production. Public examples are toy demos. Buyers who want to hand an MCP server to a teammate need auth that is not a shared secret, errors that surface rate-limit detail, tightly scoped tool definitions, and an audit log they can replay after the fact.",
      goals: [
        "Ship three MCP servers buyers can run today: GitHub, Linear, Gmail",
        "Make every tool call audit-logged so giving the agent write access stays defensible",
        "Scope tokens per tool, no shared secrets across servers",
        "Surface rate-limit and auth errors as structured responses, not silent failures",
        "Keep the install path simple: clone or npx, drop env tokens, register in the client config",
      ],
      solution: [
        "GitHub MCP server with issue CRUD, PR review, and repo search; authenticates via personal access token",
        "Linear MCP server with issue CRUD plus project and team queries; authenticates via Linear API key",
        "Gmail MCP server for read, send, and label flows with documented Google Cloud OAuth setup",
        "Shared packages/core with auth helpers, SQLite audit log (Postgres optional), and structured logging",
        "atif-mcp-replay CLI that prints the most recent tool calls from the audit log for after-the-fact review",
        "Zero-hosting deploy model: servers run inside the AI client process over stdio",
      ],
      role: [
        "Solo architect and engineer, monorepo scaffold to release",
        "pnpm workspace design with a shared core package",
        "MCP server implementation for GitHub, Linear, and Gmail",
        "Audit logging layer with SQLite default and Postgres opt-in",
        "Replay CLI and inspector-driven testing workflow",
      ],
      ui: "Config-driven, no UI. The replay CLI and the @modelcontextprotocol/inspector are the operator surfaces. Every tool call writes a structured audit row buyers can grep, replay, or join against their own tables.",
      flows: [
        {
          title: "Install flow",
          steps: [
            "Buyer clones the repo or runs the published npx package",
            "Adds the server entry to claude_desktop_config.json or their Cursor MCP config",
            "Drops API tokens into env, no hosting required",
            "Server runs inside the AI client process over stdio on next launch",
          ],
        },
        {
          title: "Tool call audit flow",
          steps: [
            "AI client invokes a tool on one of the MCP servers",
            "Auth helper validates the per-tool token",
            "Tool call executes against the upstream API (GitHub, Linear, Gmail)",
            "Response, timing, and arguments persist to the SQLite audit log",
            "Operator inspects recent calls via atif-mcp-replay or queries the audit table directly",
          ],
        },
      ],
      learnings: [
        "Scoping tokens per tool, not per server, removes a class of blast-radius problems before they happen",
        "Surfacing rate-limit detail as a structured error response is more useful than retrying silently",
        "A shared core package with auth, audit, and logging removes per-server boilerplate and keeps behavior consistent across GitHub, Linear, and Gmail",
        "The audit log is the actual product once an AI client has write access; without it, MCP is hard to defend in a regulated workflow",
      ],
    },
  },
  {
    slug: "portfolio-bot",
    name: "Portfolio Bot",
    tagline: "Embeddable RAG chatbot grounded on atifali.pages.dev, with inline citations, streaming responses, and prompt-injection protection.",
    summary:
      "A chat widget that mounts to every page on the portfolio site. Visitors ask questions about projects and services and get answers grounded in the actual case studies, with citation pills linking back to the source. Built on Cloudflare Workers AI and Vectorize, no framework runtime on the host page, conversation memory in localStorage.",
    status: "Live",
    year: "2026",
    category: "AI SaaS",
    featured: false,
    stack: [
      "TypeScript",
      "Cloudflare Workers",
      "Cloudflare Workers AI",
      "Cloudflare Vectorize",
      "Astro",
      "Vanilla JS",
      "Markdown ingestion",
    ],
    links: [
      { label: "GitHub", url: "https://github.com/atifali-pm/portfolio-bot" },
      { label: "Live", url: "https://atifali.pages.dev" },
    ],
    banner: "/projects/portfolio-bot-banner.jpg",
    gallery: [
      { src: "/projects/portfolio-bot/01-widget-closed.png", caption: "Portfolio homepage with the chat bubble and Ask about my projects tooltip pinned to the bottom-right." },
      { src: "/projects/portfolio-bot/02-widget-open.png", caption: "Chat widget expanded with the empty state and four suggested starter questions." },
      { src: "/projects/portfolio-bot/03-answer-with-citations.png", caption: "Q&A view: What is Axon? returns a grounded answer with three citation pills linking to the Axon case study and services page." },
      { src: "/projects/portfolio-bot/04-streaming.png", caption: "Streaming response mid-flight with the blinking cursor and a green streaming indicator." },
    ],
    hero: {
      problem:
        "Most low-cost chatbot offerings are bare LLM wrappers with no retrieval, no citations, no abuse protection, and no embed story. A buyer searching for a chatbot for their own website wants to see a chatbot embedded in a real website, talking about that website's actual content, and they want to verify it themselves before paying.",
      goals: [
        "Ship a chatbot embedded on atifali.pages.dev that talks about the portfolio itself",
        "Ground every answer in the project READMEs and case studies behind the site",
        "Surface inline citations that link back to the source case study",
        "Keep the embed footprint small: no framework runtime on the host page",
        "Add abuse protection (rate limiting, prompt-injection guard) before any production embed",
      ],
      solution: [
        "Cloudflare Worker exposes ingestion, query, and chat endpoints",
        "Markdown ingestion pipeline chunks and embeds the case studies, upserts into Vectorize",
        "Retrieval pulls top matches from Vectorize, generation runs on Workers AI with Claude as an option",
        "Vanilla JS widget mounts via a single script tag from Layout.astro, no React or framework runtime on the host",
        "Streaming responses for fast first-token feedback, conversation history persists in localStorage",
        "Inline citation pills attach to each answer, linking back to the relevant /projects/ page",
        "Per-IP rate limiting and a prompt-injection guard sit in front of the generation endpoint",
      ],
      role: [
        "Solo architect and engineer, ingestion pipeline to embed",
        "Cloudflare Worker design, Vectorize binding, and ingestion pipeline",
        "Vanilla JS chat widget with streaming and citation rendering",
        "Layout.astro embed wiring on atifali.pages.dev",
        "Rate limiting and prompt-injection guard layer",
      ],
      ui: "Floating chat bubble pinned bottom-right on every page. Expands to a focused chat surface with suggested starters. Citation pills are clickable and link straight to the source case study.",
      flows: [
        {
          title: "Visitor ask flow",
          steps: [
            "Visitor opens the chat bubble on any page of atifali.pages.dev",
            "Question goes to the Worker query endpoint, which retrieves the top chunks from Vectorize",
            "Worker streams a grounded answer back over Server-Sent Events",
            "Citation pills render alongside the answer, linking to the /projects/ pages that supplied the context",
            "Conversation history persists in localStorage so the visitor picks up where they left off on the next page",
          ],
        },
      ],
      learnings: [
        "Grounding a chatbot in the host site's own content is a faster trust signal than any landing-page copy",
        "Citation pills that link back to the source case study turn skeptical visitors into clickers on the rest of the portfolio",
        "Cloudflare Workers AI + Vectorize on the free tier is a viable production path for a small embed when latency and cost both matter",
        "Vanilla JS for the widget keeps the embed compatible with any host framework and avoids dragging a runtime into someone else's page",
      ],
    },
  },
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
    gallery: [
      { src: "/projects/axon/05-landing.jpg", caption: "Axon landing page positioning the agentic SaaS for buyers." },
      { src: "/projects/axon/01-dashboard.jpg", caption: "Tenant dashboard with usage, agents, jobs, and observability summary." },
      { src: "/projects/axon/02-streaming-chat.jpg", caption: "Streaming agentic chat with tool calls and citation rendering." },
      { src: "/projects/axon/03-agents-marketplace.jpg", caption: "Agents marketplace where tenants pick or compose role-specific agents." },
      { src: "/projects/axon/04-queue-jobs.jpg", caption: "BullMQ queue dashboard with retry, dead-letter, and per-tenant job filters." },
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
    status: "Live",
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
      { label: "Live app", url: "https://learnloop-ruby.vercel.app/" },
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
      { src: "/projects/storebridge/00-architecture.png", caption: "End-to-end architecture: OAuth install path provisions a tenant row, runtime webhooks are HMAC-verified, queued through Redis/BullMQ, and writes happen under Postgres RLS." },
      { src: "/projects/storebridge/01-shopify-install-consent.png", caption: "Shopify OAuth scope-grant consent during merchant install." },
      { src: "/projects/storebridge/03-merchant-merge-flow.png", caption: "Multi-store merge token flow that attaches a second shop to the same tenant." },
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
    slug: "skylane",
    name: "Skylane",
    tagline: "Multi-provider flight search aggregator with WebSocket streaming and circuit breakers.",
    summary:
      "Laravel 12 + Vue 3 + Reverb aggregator that fans a flight search out to three real airline data providers (Amadeus, Duffel, Travelpayouts) in parallel, normalizes their responses to a canonical schema, dedupes at the result-store boundary, and streams offers to the client over a WebSocket as each provider responds. Per-provider circuit breakers, exponential-backoff retries, and a Filament admin with live error rate, p95 latency, and recent-requests log. Phase 1 and 2 shipped with 23 Pest tests covering each adapter, normalizer, the dedupe key generator, and the circuit breaker state machine.",
    status: "In development",
    year: "2026",
    category: "Travel",
    featured: false,
    stack: [
      "Laravel 12",
      "Vue 3",
      "TypeScript",
      "Tailwind CSS v4",
      "Reverb",
      "Horizon",
      "PostgreSQL 16",
      "Redis",
      "Filament 3",
      "Pest",
    ],
    links: [
      { label: "GitHub", url: "https://github.com/atifali-pm/skylane" },
    ],
    banner: "/projects/skylane-banner.jpg",
    gallery: [
      { src: "/projects/skylane/01-search-form.png", caption: "Search form with origin and destination autocomplete backed by an IATA airports table." },
      { src: "/projects/skylane/02-live-streaming-results.png", caption: "Live results streaming in over Reverb as each provider responds, deduped by carrier + flight number + segments hash." },
      { src: "/projects/skylane/03-filament-dashboard.png", caption: "Filament admin showing per-provider request count, error rate, p95 latency, and a recent-requests log." },
      { src: "/projects/skylane/04-filament-provider-configs.png", caption: "Per-provider configuration panel: credentials, timeouts, retry policy, and circuit breaker thresholds." },
    ],
    hero: {
      problem:
        "Real flight search aggregators talk to a mix of GDS systems, airline-direct APIs, and price-index data sources. Each one returns a different schema, has different rate limits, fails in different ways, and ships full vs partial data. Typical aggregator tutorials fan out to mock APIs that all return clean data on the same clock. That hides the entire problem.",
      goals: [
        "Three real providers (Amadeus GDS, Duffel NDC-style, Travelpayouts price-index) talking to live APIs",
        "Canonical schema that gracefully handles full and partial provider data",
        "Live result streaming so the user sees offers as each provider responds, not after the slowest one finishes",
        "Per-provider isolation so one provider failing does not poison the others",
      ],
      solution: [
        "Queue-backed parallel dispatch via Horizon-managed jobs, one job per provider per search",
        "Per-provider adapter + normalizer pair that maps response to a canonical FlightOffer DTO",
        "Result store at the Redis boundary with a dedupe key (carrier + flight number + date + segments hash) so duplicate offers never broadcast to the UI",
        "Circuit breaker per provider that opens after N failures in a rolling window and recovers automatically after cooldown",
        "Reverb WebSocket channel scoped to the search ID so the UI subscribes once and gets streamed inserts",
      ],
      role: [
        "Architecture and provider abstraction design",
        "Each adapter built as a thin Laravel Http client (Guzzle under the hood) plus normalizer",
        "Reverb + Echo wiring for live streaming",
        "Filament admin with custom widgets",
        "Pest test suite covering adapters, normalizers, dedupe, and circuit breaker state machine",
      ],
      ui: "Vue 3 + Tailwind v4 search page subscribing to Reverb over Echo. Filament 3 admin for operator visibility into provider health.",
      flows: [
        {
          title: "Live search",
          steps: [
            "User submits origin, destination, dates, passengers",
            "Backend creates a search row and dispatches one Horizon job per active provider in parallel",
            "Each job calls its provider adapter, normalizes the response, dedupes against the search's result store, and broadcasts new offers on the search's Reverb channel",
            "Vue UI subscribes to the channel and renders offers as they arrive, partial-data offers labeled accordingly",
            "Slow providers continue streaming until the search timeout; the user sees results from fast providers immediately",
          ],
        },
      ],
      learnings: [
        "No PHP SDK exists for Amadeus, Duffel, or Travelpayouts; thin Http clients plus per-provider normalizers turn out to be the right shape, not a heavyweight SDK abstraction",
        "Dedupe at the result-store boundary, not in the UI; the UI cannot un-render an offer that already broadcast",
        "Circuit breakers are non-optional once you have three real providers; one provider going slow can cascade into queue starvation otherwise",
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
      "Neon Postgres",
      "Drizzle ORM",
    ],
    links: [],
    banner: "/projects/chatpdf-banner.jpg",
    gallery: [
      { src: "/projects/chatpdf/01-architecture.png", caption: "End-to-end flow: PDF upload, S3 storage, Pinecone embedding index, OpenAI augmented retrieval, streaming citation-grade answers, history in Neon Postgres." },
    ],
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
    links: [
      { label: "GitHub", url: "https://github.com/atifali-pm/kong-proxy-cache-redis-plugin" },
    ],
    banner: "/projects/kong-redis-plugin-banner.jpg",
    gallery: [
      { src: "/projects/kong-redis-plugin/01-architecture.png", caption: "Request lifecycle: client to Kong, plugin checks Redis, hit returns cached, miss forwards upstream and caches the response." },
    ],
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
    status: "Open source",
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
      { src: "/projects/tracklane/01-home-dark.png", caption: "Dashboard home in dark mode with active projects, recent activity, and AI triage suggestions." },
      { src: "/projects/tracklane/04-kanban.png", caption: "Kanban board with drag-and-drop issue cards grouped by status." },
      { src: "/projects/tracklane/09-timeline.png", caption: "Gantt-style timeline view across project milestones." },
      { src: "/projects/tracklane/07-workload.png", caption: "Workload view showing per-assignee capacity and currently assigned issues." },
      { src: "/projects/tracklane/08-calendar.png", caption: "Calendar view aggregating due dates across the workspace." },
      { src: "/projects/tracklane/05-issue.png", caption: "Issue detail page with threaded comments, activity log, and AI summary." },
      { src: "/projects/tracklane/06-activity.png", caption: "Activity feed of recent changes across all projects." },
      { src: "/projects/tracklane/10-ask-ai.png", caption: "Ask-AI chat panel powered by Claude with project-scoped context." },
      { src: "/projects/tracklane/13-wiki-empty.png", caption: "Wiki empty state with a quick-create entry point." },
      { src: "/projects/tracklane/11-invitations.png", caption: "Member invitation flow with role assignment." },
      { src: "/projects/tracklane/12-new-project.png", caption: "New project creation modal with template picker." },
      { src: "/projects/tracklane/02-projects.png", caption: "Projects list view with status filters." },
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
    gallery: [
      { src: "/projects/n8n-agent-studio/01-github-digest.png", caption: "Workflow 1: GitHub activity digest. Schedule + manual webhook triggers, Postgres audit logging, Gemini summarization, conditional Slack delivery." },
      { src: "/projects/n8n-agent-studio/02-content-distribution.png", caption: "Workflow 2: blog post repurpose. Webhook intake, Gemini variant generation across channels, Postgres audit on every run." },
    ],
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
    status: "Open source",
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
  {
    slug: "quorum",
    name: "Quorum",
    tagline: "AI-native corporate governance: entity graph, AI-drafted resolutions, RAG over corporate documents, agentic filing prep, realtime collaborative editing.",
    summary:
      "Quorum treats corporate governance as structured data and treats resolutions, minutes, and filings as documents the system can read, draft, and reason about. Subsidiary ownership lives in a graph the team can actually see. The AI sees every prior resolution in the vault and drafts new ones with citations. An agent compiles filing packets and pauses for human approval before anything goes out.",
    status: "Live",
    year: "2026",
    category: "AI / LegalTech SaaS",
    featured: true,
    stack: [
      "Next.js 14",
      "TypeScript",
      "Drizzle ORM",
      "PostgreSQL",
      "pgvector",
      "NextAuth",
      "Anthropic SDK",
      "OpenAI",
      "Langfuse",
      "React Flow (xyflow)",
      "Dagre",
      "Tailwind",
    ],
    links: [
      { label: "GitHub", url: "https://github.com/atifali-pm/quorum" },
    ],
    banner: "/projects/quorum-banner.jpg",
    gallery: [
      { src: "/projects/quorum/00-shell.png", caption: "Phase 0 app shell with tenant model and base UI" },
      { src: "/projects/quorum/01-entity-graph.png", caption: "Entity graph: parent and subsidiary tree with ownership chains" },
      { src: "/projects/quorum/02-resolution-drafting.png", caption: "AI resolution drafting with template library and clause retrieval" },
      { src: "/projects/quorum/03-vault-qa.png", caption: "Document vault RAG Q&A with citations to source paragraphs" },
    ],
    hero: {
      problem:
        "In-house counsel and entity administrators still run corporate governance out of shared drives, Word templates, and a calendar reminder for each annual filing. Resolutions get drafted from a folder of past resolutions that someone has to remember the name of. Subsidiary ownership lives in a spreadsheet nobody trusts, and filing prep is a manual checklist exercise.",
      goals: [
        "Render parent and subsidiary ownership as a live graph rather than a spreadsheet",
        "Draft board and shareholder resolutions from a natural-language prompt with clause-level retrieval over past resolutions",
        "Search and ask questions across charters, bylaws, stockholder agreements, and minutes with citations",
        "Run a filing-prep agent that assembles packets and pauses at a human-in-the-loop approval gate",
        "Enforce tenant isolation at the database row level with admin, officer, counsel, and viewer roles",
      ],
      solution: [
        "Next.js 14 app with NextAuth, multi-tenant Postgres rows, and Drizzle ORM for the entity, document, and resolution models",
        "Entity graph CRUD with React Flow plus Dagre auto-layout for the ownership and officer tree",
        "AI resolution drafting backed by Anthropic and OpenAI with a template library and clause-level RAG over past resolutions",
        "Document vault with pgvector embeddings, hybrid retrieval, and answer citations linking back to the source paragraph",
        "Realtime collaborative editor with multi-cursor presence and inline comments so counsel can redline live",
        "Filing-prep agent that reads entity state, gathers uploads, assembles a packet, and pauses for approval before completion",
        "Audit log on every state change and Langfuse traces on every model run",
      ],
      role: [
        "Solo architect and engineer, requirements to deploy",
        "Data model for entities, officers, share ledger, resolutions, documents, and the audit log in Drizzle + Postgres",
        "Entity graph visualization wired to React Flow with Dagre layout and per-node detail panels",
        "AI drafting pipeline: clause-level retrieval over past resolutions, template library, model selection between Anthropic and OpenAI",
        "RAG vault: pgvector embeddings, chunking strategy, hybrid retrieval, citation rendering",
        "Filing-prep agent with explicit human-in-the-loop checkpoint",
      ],
      ui: "A counsel-facing app that looks like a modern SaaS rather than a legal tool. Tailwind, calm dark and light themes, the entity graph as the centerpiece, and a chat-style draft surface for resolutions that always shows where each clause came from.",
      flows: [
        {
          title: "Draft a board resolution",
          steps: [
            "Counsel opens the entity, clicks New Resolution",
            "Types a natural-language prompt (e.g. approve a subsidiary capital injection)",
            "System retrieves clause-level matches from past resolutions in the vault",
            "Anthropic or OpenAI drafts the resolution with the matched clauses inline as citations",
            "Counsel edits in the realtime editor, redlines with co-counsel, and saves a final version into the vault",
          ],
        },
        {
          title: "Ask the vault",
          steps: [
            "User opens the document Q&A panel",
            "Types a question like what does the stockholder agreement say about pre-emption rights",
            "pgvector retrieval pulls the top passages across charters, bylaws, agreements, and minutes",
            "The answer renders with paragraph-level citations linking back to the source document",
          ],
        },
        {
          title: "Filing-prep agent",
          steps: [
            "Compliance calendar surfaces an upcoming filing deadline",
            "Agent reads the entity state and gathers the required documents",
            "Assembles a filing packet with a checklist of what is included and what is missing",
            "Pauses at a human-in-the-loop approval gate before anything is marked complete",
          ],
        },
      ],
      learnings: [
        "Treating resolutions as data with structured clauses, not as opaque docx blobs, is what makes clause-level retrieval feel surgical instead of vague",
        "React Flow plus Dagre handles ownership trees up to a few hundred entities cleanly; beyond that, layered virtualisation is a Phase 6 problem",
        "An audit log table that records who, what, and when on every state change is cheaper to build on day one than to retrofit later",
        "Langfuse traces over every AI call (drafting, RAG, agent steps) made debugging the filing-prep agent tractable instead of mystical",
        "The filing-prep agent feels native because of one design choice: it pauses for human approval rather than auto-submitting anything to a regulator",
      ],
    },
  },
  {
    slug: "slate",
    name: "Slate",
    tagline: "Multi-tenant appointment booking admin SaaS for any chair, seat, or slot business.",
    summary:
      "Slate is the admin surface for an appointment-booking SaaS. Operators log in, see today's bookings, filter by date or staff or status, edit inline, and never double-book a chair. The same instance hosts many independent businesses with row-level isolation. Salons, barbers, clinics, tutors, and consultancies all run off the same product by swapping the seed file.",
    status: "Live",
    year: "2026",
    category: "SaaS / Booking & Scheduling",
    featured: true,
    stack: [
      "Next.js 14",
      "TypeScript",
      "Drizzle ORM",
      "PostgreSQL",
      "NextAuth",
      "Tailwind",
      "Recharts",
    ],
    links: [
      { label: "GitHub", url: "https://github.com/atifali-pm/slate" },
    ],
    banner: "/projects/slate-banner.jpg",
    gallery: [
      { src: "/projects/slate/01-home.png", caption: "Landing page" },
      { src: "/projects/slate/02-sign-in.png", caption: "Sign-in screen via NextAuth" },
      { src: "/projects/slate/03-dashboard.png", caption: "Bookings list with filters, pagination, and inline status actions" },
      { src: "/projects/slate/04-org-switcher.png", caption: "Organization switcher for multi-tenant access" },
      { src: "/projects/slate/05-dashboard-pinecrest.png", caption: "Same dashboard switched to Pinecrest Clinic tenant" },
      { src: "/projects/slate/06-bookings-mobile.png", caption: "Mobile-responsive bookings view at 390px wide" },
      { src: "/projects/slate/07-edit-dialog.png", caption: "Edit booking dialog with reschedule, notes, and delete" },
      { src: "/projects/slate/08-calendar-week.png", caption: "Calendar week view with status-colored blocks" },
      { src: "/projects/slate/09-calendar-day.png", caption: "Calendar day view with staff columns and drag-to-reschedule" },
      { src: "/projects/slate/10-analytics-home.png", caption: "Analytics home: KPIs, top services, staff utilization" },
    ],
    hero: {
      problem:
        "Most appointment-booking tools are either rigid vertical apps (salons only, clinics only) or sprawling calendar suites that nobody on a small operations team enjoys driving. The operator's daily reality is mundane: see today, filter, edit, confirm, cancel, and stay out of double-booked situations. Slate focuses on that admin loop first and treats the customer-facing booking page as a downstream concern.",
      goals: [
        "Host many independent businesses on one instance with strict per-tenant isolation",
        "Give the operator a bookings list with server-side filters and inline status actions",
        "Render a calendar week and day view with drag to reschedule",
        "Block double-booking the same staff at the same time at the data layer",
        "Surface analytics that an owner can read in under ten seconds",
      ],
      solution: [
        "Next.js 14 app router with Drizzle ORM and Postgres, row-level isolation keyed by organization id",
        "NextAuth session with org membership encoded so every query scopes to the active tenant",
        "Bookings CRUD with server-side filters by date, status, staff, and customer search, plus optimistic inline edit",
        "Calendar week and day views (staff columns) with drag-to-reschedule writing through to the same conflict rules",
        "Conflict detection at the service layer so the API rejects overlaps regardless of which client created them",
        "Analytics cards built on Recharts: daily count, 7-day outlook, top services, no-show rate, staff utilization",
        "Mobile-responsive layout where the bookings table collapses to a card list under 640px",
      ],
      role: [
        "Solo architect and engineer, requirements to deploy",
        "Multi-tenant data model and the org-scoping pattern across every query",
        "Bookings CRUD, per-staff availability rules, and the conflict-detection service",
        "Calendar week and day views with the drag-to-reschedule write path",
        "Analytics card pipeline and the mobile-responsive collapse pattern",
      ],
      ui: "An operator-first admin surface in calm Tailwind with a single bookings list as the load-bearing screen, a calendar that earns its space, and analytics cards that read fast.",
      flows: [
        {
          title: "Operator runs the day",
          steps: [
            "Operator signs in via NextAuth and lands on the analytics home",
            "Clicks Bookings to see today's list, filtered by date and staff",
            "Inline-confirms walk-ins, cancels a no-show, and edits a booking via the dialog",
            "Switches to calendar week view to spot gaps and drags a booking to reschedule it",
            "Conflict detection rejects an overlap before the write lands",
          ],
        },
        {
          title: "Multi-tenant switch",
          steps: [
            "Owner with access to multiple organizations opens the org switcher in the header",
            "Picks a different tenant (e.g. Bella's Salon to Pinecrest Clinic)",
            "The active session re-scopes; every list, calendar, and analytics card reloads against the new tenant",
            "No data crosses tenants because every query is keyed on organization id",
          ],
        },
      ],
      learnings: [
        "Row-level tenant isolation enforced in the data layer (not just the UI) is the difference between a real multi-tenant SaaS and a single-tenant app with a dropdown",
        "Conflict detection belongs in the service layer, not the UI, so the calendar drag handler and the bookings form both go through the same guard",
        "An operator-first admin built before the customer booking page keeps the build honest; the screen the team lives in gets the design hours",
        "Drag-to-reschedule feels native only when the optimistic UI commits, the server rejects on conflict, and the client snaps back cleanly with the reason inline",
        "Seed data named for a real business (Bella's Salon, Pinecrest Clinic) makes the demo land harder than a generic Lorem schedule",
      ],
    },
  },
  ];

export const featuredProjects = projects
  .filter((p) => p.featured)
  .sort((a, b) => Number(Boolean(b.pinned)) - Number(Boolean(a.pinned)));
