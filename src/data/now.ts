// "Currently building" data. Update this when focus changes (typically every few weeks).
// Drives the small section on the home page and the /now page if added later.

export interface NowItem {
  project: string;
  slug: string;
  status: string;
  description: string;
}

export const now = {
  asOf: "April 2026",
  items: [
    {
      project: "Tracklane",
      slug: "tracklane",
      status: "Phase 1",
      description:
        "Rails 8 multi-tenant project management with Claude in the core workflow. Building organizations, kanban, and AI issue triage first.",
    },
    {
      project: "n8n Agent Studio",
      slug: "n8n-agent-studio",
      status: "Inbox Ops Agent",
      description:
        "Production-grade Gmail support agent with Claude tool-use, Postgres audit, and Linear ticket creation. Workflow #3 of the studio.",
    },
  ] as NowItem[],
};
