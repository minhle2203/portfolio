import type { CaseStudyContent } from "./types";

export const weployPayrollContent: CaseStudyContent = {
  slug: "weploy-payroll-system",
  duration: "6 months",
  team: "1 PM, 4 engineers, 1 designer",
  status: "Shipped — Jan 2024",
  context:
    "Weploy is a workforce platform that connects companies with on-demand talents (TAs). The Job Processing (J.P) team manually compiled timesheets and processed payroll for 200+ talents bi-weekly. The flow depended on a costly third-party e-contract service (Mobi E-contract), and handwriting on physical timesheets routinely caused payroll errors. I led discovery and shipping of a fully in-app payslip flow that removed the third-party dependency and digitized payroll end-to-end.",
  sections: [
    { type: "heading", text: "Issues" },
    {
      type: "text",
      text: "The Job Processing team (Hiếu, Đại, and Thảo) were spending excessive effort compiling statistics for the working groups twice a month — the 1st–16th and the 17th–31st. Three concrete pain points kept surfacing in retros:",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "Bi-weekly statistics consumed days of manual work pulling from \"Final Official Job Processing\" and \"Ops Payout for Normal Job\" sheets",
        "The Mobi E-contract flow had too many steps and was costly per talent: download template → fill in TA info → upload → Mobi generates e-contracts → send to TAs → wait for signatures → J.P confirms and submits to high-level for confirmation → J.P transfers valid e-contracts to FIN for payment. Per-talent monthly fees added up to a meaningful chunk of operating cost",
        "SMS notifications to talents arrived labeled \"Mobiphone…\" — easily mistaken for spam, leading talents to overlook them and delaying signing",
      ],
    },
    {
      type: "image",
      src: "/images/weploy-payroll/issues.png",
      alt: "Existing payroll flow showing multiple manual steps",
      caption: "Existing flow: web admin → Excel → Mobi E-contract → manual signing → CEO approval.",
    },

    { type: "heading", text: "Goals & KPIs" },
    { type: "subheading", text: "Reduce Ops workload" },
    {
      type: "text",
      text: "Instead of continuous updates from web admin → Excel → Mobi E-contract → wait for TA to sign → wait for CEO to sign, the new flow shortens dramatically:",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "On the deadline date (16th or 30/31st), check Payment Settlement of each TA",
        "Send Payment Settlement through Weploy web admin",
        "TA receives Payment Settlement → clicks \"Confirm\" through the TA app → sends back to web admin",
        "Admin reviews after 1 day → proceeds with the next steps to send payments to the TA",
      ],
    },

    { type: "subheading", text: "Other goals" },
    {
      type: "list",
      items: [
        "Reduce dependence on Mobi E-contract, cutting per-talent monthly costs",
        "Resolve TA payment issues directly on web admin — saving time, removing third parties",
      ],
    },

    { type: "subheading", text: "KPIs" },
    {
      type: "list",
      items: [
        "Digitize the entire payroll statement of Weploy talents (200+ TAs at once)",
        "Stop using Mobi E-contract from 1/2024 (preserving user data)",
      ],
    },

    { type: "heading", text: "MVP solution" },
    {
      type: "list",
      ordered: true,
      items: [
        "Calculate payment bi-weekly on web admin — once for the 1st–15th and once for the 16th–30/31st",
        "Talents view their remuneration for the period based on completed tasks, directly inside the TA app",
      ],
    },

    { type: "heading", text: "Basic flow" },
    {
      type: "text",
      text: "The bi-weekly cycle begins on the admin side: Ops generates the list of eligible talents, the system computes each talent's payslip, and the payslip moves through high-level approval before being dispatched. Talents then accept or dispute inside the TA app.",
    },

    { type: "heading", text: "Detail flow — Admin side" },
    {
      type: "list",
      ordered: true,
      items: [
        "Ops selects start_date and end_date, clicks Generate",
        "The system produces a list of talents who had jobs during the period (Order, Talent ID, Talent Full Name, Phone, Status, Total Amount, Fees, PIT, Net Pay, and quick actions: view PDF, download PDF, send to high-level)",
        "Ops clicks \"Send all\" → all payslips are sent to high-level",
        "High-level reviewer accesses the list and clicks \"Send all\" to dispatch payslips to talents",
      ],
    },
    {
      type: "image",
      src: "/images/weploy-payroll/ops-flow.png",
      alt: "Operations team flow diagram for creating payroll",
      caption: "Ops flow when creating a payroll every 2 weeks.",
    },

    { type: "heading", text: "Detail flow — Talent application" },
    {
      type: "list",
      ordered: true,
      items: [
        "Talent receives an in-app message via notification",
        "Talent opens the in-app message, views the PDF via the given link",
        "If amount is correct → Talent clicks Approve → system records status \"Agree\" → FIN downloads the PDF, cross-checks, and initiates payment",
        "If amount is incorrect → Talent clicks Disapprove with a reason → system records \"Disagree\" → Onboarding team intervenes",
      ],
    },
    {
      type: "image",
      src: "/images/weploy-payroll/finance-flow.png",
      alt: "Finance team flow diagram for verifying and paying out payroll",
      caption: "Finance flow after Ops creates a payroll.",
    },

    { type: "heading", text: "Constraints" },
    { type: "subheading", text: "Operations considerations" },
    {
      type: "list",
      items: [
        "Who operates the flow on each cycle? (RBAC — Role-Based Access Control)",
        "Who is primarily responsible if errors occur during execution?",
        "Which teams are involved in the flow?",
        "Does the new flow have legal implications?",
      ],
    },

    { type: "subheading", text: "Feasibility considerations" },
    {
      type: "list",
      items: [
        "Feasibility of implementing this flow in the MVP version",
        "How much time is needed to ship the MVP",
        "How to generate the PDF file when all data is already in the database",
        "Does adding this flow impact existing or new TA data?",
        "Will it impact performance of the web admin or TA app?",
        "What are the expected and unexpected edge cases?",
        "If Ops changes payroll frequency (bi-weekly → monthly), how does the dev team adapt? How do we design the system to absorb such changes universally?",
      ],
    },

    { type: "subheading", text: "Demand considerations" },
    {
      type: "list",
      items: [
        "Is this feature truly necessary at this phase?",
        "Does it genuinely benefit all parties — Ops, FIN, TA?",
        "How does the process unfold before and after dispatching payslips?",
      ],
    },

    { type: "heading", text: "Assumptions" },
    {
      type: "list",
      ordered: true,
      items: [
        "Talents will handle their entire payslip (Payment Settlement) through in-app messages. Agreements and complaints are resolved within the TA application",
        "Job Processing team members minimize manual effort, reducing errors from incorrect salary amounts, fees, or pay periods",
        "The workflow stays smooth and entirely within Weploy — no dependence on third parties",
      ],
    },

    { type: "heading", text: "Dependencies" },
    {
      type: "list",
      ordered: true,
      items: [
        "Personal information of talents",
        "Job details, hours worked, and remuneration per hour for each talent",
        "Accuracy in calculating all figures (PIT, fees, net pay)",
        "Feasibility and dev team capability for implementation",
        "Legal implications, especially for any e-signature/agreement aspects",
      ],
    },

    { type: "heading", text: "Execution" },
    {
      type: "text",
      text: "I broke the feature into independently shippable stories using the INVEST method, then brainstormed scope and edge cases with the dev team on Jira before each sprint.",
    },
    {
      type: "image",
      src: "/images/weploy-payroll/jira-brainstorm.png",
      alt: "Jira board showing brainstorm with dev team",
      caption: "Brainstorming the payslip feature with the Weploy dev team on Jira.",
    },
    {
      type: "image",
      src: "/images/weploy-payroll/story-breakdown.png",
      alt: "Story breakdown using INVEST method",
      caption: "Story breakdown following the INVEST method.",
    },

    { type: "heading", text: "Outcome" },
    {
      type: "metrics",
      items: [
        { label: "Talents processed per cycle", value: "200+" },
        { label: "Third-party contract cost", value: "Removed" },
        { label: "Payroll cycle", value: "bi-weekly" },
        { label: "Third-party dependencies", value: "0" },
      ],
    },

    { type: "heading", text: "Reflections" },
    {
      type: "text",
      text: "The hardest part wasn't the feature itself — it was aligning Ops, Finance, and Legal on a single source of truth. Once everyone agreed that the in-app Approve action carried legal weight, the rest of the system fell into place. If I did it again, I'd run the legal alignment in week one, not week six.",
    },
    {
      type: "text",
      text: "This project also reinforced for me how much PM work is invisible to the engineers and stakeholders. The clarity that makes a sprint feel \"easy\" comes from the dozens of hours spent upstream on assumptions, dependencies, and edge-case mapping. The visible work is the iceberg's tip.",
    },
  ],
};
