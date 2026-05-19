// "Currently building" data. Update this when focus changes (typically every few weeks).
// Drives the small section on the home page and the /now page if added later.

export interface NowItem {
  project: string;
  slug: string;
  status: string;
  description: string;
}

export const now = {
  asOf: "Mid May 2026",
  items: [
    {
      project: "Quorum",
      slug: "quorum",
      status: "Phases 0-3",
      description:
        "AI-native corporate governance on Next.js + Postgres + pgvector. Multi-tenant entity graph with ownership viz, AI-drafted board resolutions, and a clause-aware document vault with RAG Q&A. Phase 4 next.",
    },
    {
      project: "Rampart",
      slug: "rampart",
      status: "Phases 1-4",
      description:
        "Enforcement-first operational OS for field service ops. FastAPI deterministic core (state machine, enforcement, event bus, audit) with a Gemini-powered AI agent layer on top. Phase 5 next.",
    },
    {
      project: "MCP Toolkit",
      slug: "mcp-toolkit",
      status: "Phases 0-6",
      description:
        "Public TypeScript monorepo of three MCP servers (GitHub, Linear, Gmail) with OAuth consent, structured tools, and audit logging. Backs the Custom MCP Server gig. npm publish next.",
    },
    {
      project: "n8n Agent Studio",
      slug: "n8n-agent-studio",
      status: "Phases 1-2, 4-5",
      description:
        "Three production-grade n8n workflows on a shared Postgres audit table, with a Next.js dashboard surfacing runs across all of them. Gemini 2.5 Flash for the LLM path. Phase 3 (Inbox Ops Agent orchestrator) is the flagship still pending.",
    },
  ] as NowItem[],
};
