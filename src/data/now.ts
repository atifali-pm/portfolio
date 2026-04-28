// "Currently building" data. Update this when focus changes (typically every few weeks).
// Drives the small section on the home page and the /now page if added later.

export interface NowItem {
  project: string;
  slug: string;
  status: string;
  description: string;
}

export const now = {
  asOf: "Late April 2026",
  items: [
    {
      project: "Skylane",
      slug: "skylane",
      status: "Phase 2",
      description:
        "Multi-provider flight search aggregator on Laravel 12 + Vue + Reverb. Real APIs from Amadeus, Duffel, and Travelpayouts with route-aware demo fallbacks. Closing the Sabre/Travelport gap.",
    },
    {
      project: "OdooForge",
      slug: "odooforge",
      status: "Phases 4-6",
      description:
        "Open-source Odoo deployment kit plus an AI support addon. Phases 1-3 shipped (local stack, AI scaffold, RAG support agent with audit log); phases 4-6 cover Oracle Cloud Always Free deploy, observability, and the public marketplace listing.",
    },
  ] as NowItem[],
};
