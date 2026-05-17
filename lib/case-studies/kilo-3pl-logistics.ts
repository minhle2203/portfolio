import type { CaseStudyContent } from "./types";

export const kilo3plContent: CaseStudyContent = {
  slug: "kilo-3pl-logistics",
  duration: "4 months",
  team: "1 PM, 1 Designer, 3 Engineers, 2 Ops",
  status: "Shipped — Aug 2021",
  context:
    "Kilo is a B2B marketplace connecting Vietnamese grocery retailers with distributors. In early 2021, 29.64% of cross-city orders were canceled by sellers (versus just 2.16% for same-city orders) because sellers had no scalable way to deliver outside their city. I led the discovery and rollout of a 3rd-party logistics (3PL) service that gave sellers reliable nationwide delivery — and unlocked a new revenue stream for Kilo.",
  sections: [
    {
      type: "image",
      src: "/images/kilo-3pl/cancellation-stats.png",
      alt: "Current statistics showing 29.64% cross-city cancellations",
      caption: "Cross-city orders were canceled 13× more often than same-city orders.",
    },
    { type: "heading", text: "Problem" },
    {
      type: "list",
      items: [
        "Sellers couldn't fulfill cross-city orders, so they canceled them",
        "Manual delivery booking ate into sellers' time and limited business expansion",
        "Retailers had no visibility into delivery status after placing an order",
        "Kilo was losing GMV every month it didn't have a delivery story",
      ],
    },
    { type: "heading", text: "Discovery" },
    {
      type: "text",
      text: "I interviewed sellers and retailers, ran an online survey with 30+ participants, and shadowed our Operations and GSP staff for a full week to understand how delivery was actually being coordinated.",
    },
    {
      type: "text",
      text: "The most valuable insight didn't come from interviews — it came from sitting with Ops at lunch. They told me their biggest fear was being replaced by software. Once I framed the project as reducing their workload (not their headcount), they became the best partners I had during rollout.",
    },
    { type: "heading", text: "Personas and user goals" },
    {
      type: "image",
      src: "/images/kilo-3pl/persona.png",
      alt: "Seller persona for 3PL service",
      caption: "Primary persona: small sellers without an in-house delivery team.",
    },
    {
      type: "image",
      src: "/images/kilo-3pl/user-goals.png",
      alt: "Key user goals discovered through research",
      caption: "Synthesized user goals from interviews and survey responses.",
    },
    { type: "heading", text: "Hypothesis" },
    {
      type: "quote",
      text: "Sellers will adopt a 3PL service if Kilo can guarantee quality delivery at an affordable shipping fee. 100% of surveyed sellers said yes, and 82% agreed to COD reconciliation within 3–5 days of pickup.",
    },
    { type: "heading", text: "MVP goals" },
    {
      type: "metrics",
      items: [
        { label: "Sellers using 3PL", value: "30%" },
        { label: "Orders via 3PL", value: "20%" },
        { label: "Successful delivery rate", value: "90%" },
        { label: "Cross-province order lift", value: "+15%" },
      ],
    },
    { type: "heading", text: "Solution" },
    {
      type: "list",
      ordered: true,
      items: [
        "Partner with 3PL providers (An Tho Logistics, Ship60) for nationwide coverage",
        "Define a 3PL service policy and end-to-end operations process",
        "Build seller-side activation, retailer-side tracking, and a driver app",
        "Market the service to existing sellers in the 5 launch cities",
      ],
    },
    {
      type: "image",
      src: "/images/kilo-3pl/data-flow.png",
      alt: "Inbound order data flow diagram",
      caption: "Inbound order flow — from seller activation to retailer delivery.",
    },
    { type: "heading", text: "Cross-stakeholder coordination" },
    {
      type: "text",
      text: "The flow touched 4 actors — seller, Kilo, 3PL partner, retailer — and required clear handoffs at every step. I documented the full state machine, including failure paths: what happens when a 3PL can't pick up, what happens when a retailer refuses delivery, how COD reconciliation works on D+3 to D+5.",
    },
    { type: "heading", text: "Design and shipping" },
    {
      type: "image",
      src: "/images/kilo-3pl/seller-ui.png",
      alt: "Seller-side UI for activating delivery feature",
      caption: "Seller activates the delivery feature directly from the order detail page.",
    },
    {
      type: "image",
      src: "/images/kilo-3pl/retailer-ui.png",
      alt: "Retailer app showing delivery tracking",
      caption: "Retailer-side: real-time delivery status replaces guesswork.",
    },
    { type: "heading", text: "Story mapping for development" },
    {
      type: "image",
      src: "/images/kilo-3pl/story-map.png",
      alt: "Admin user story map",
      caption: "Story map for the admin role — sequencing what to build and when.",
    },
    { type: "heading", text: "Reflections" },
    {
      type: "text",
      text: "This was the project early in my PM career that taught me how to scope an MVP. The instinct to build the \"perfect world\" version is strong, but disciplined trade-offs are what get a product shipped. I also learned that the best UX research happens outside the conference room — eating lunch with the people who'll actually use what you build.",
    },
  ],
};
