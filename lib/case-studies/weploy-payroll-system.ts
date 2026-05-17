import type { CaseStudyContent } from "./types";

export const weployPayrollContent: CaseStudyContent = {
  slug: "weploy-payroll-system",
  duration: "6 months",
  team: "1 PM, 4 engineers, 1 designer",
  status: "Shipped — Jan 2024",
  context:
    "Weploy is a workforce platform that connects companies with on-demand talents (TAs). The Job Processing (J.P) team manually compiled timesheets and processed payroll for 200+ talents bi-weekly. The flow depended on a costly third-party e-contract service (Mobi E-contract).",
  sections: [
    {
      type: "image",
      src: "/images/weploy-payroll/issues.png",
      alt: "Existing payroll flow showing multiple manual steps",
      caption: "Existing flow: web admin → Excel → Mobi E-contract → manual signing",
    },
    { type: "heading", text: "Problem" },
    {
      type: "text",
      text: "The J.P team was spending excessive effort compiling bi-weekly statistics (1–16 and 17–31). Errors were frequent: overlapping time, insufficient OT hours, and illegible handwriting led to inaccurate payroll, delays, and dissatisfaction from both talents and admins.",
    },
    {
      type: "text",
      text: "The Mobi E-contract integration alone cost ~8,000 VND per talent every month, with 200+ talents. SMS notifications labeled \"Mobiphone…\" were often dismissed as spam, slowing down signing.",
    },
    { type: "heading", text: "Goals" },
    {
      type: "list",
      items: [
        "Reduce Ops workload by removing the Excel → Mobi → CEO signing chain",
        "Cut Mobi E-contract costs entirely starting 1/2024",
        "Resolve TA payment issues within Weploy admin — no third party",
        "Digitize payroll for 200+ talents in a single bi-weekly batch",
      ],
    },
    { type: "heading", text: "MVP solution" },
    {
      type: "text",
      text: "Calculate payment bi-weekly directly on web admin. Talents view and approve their payslip inside the existing TA app via in-app messages — eliminating SMS and external e-contracts.",
    },
    { type: "heading", text: "Admin flow" },
    {
      type: "list",
      ordered: true,
      items: [
        "Ops selects start_date and end_date, clicks Generate",
        "System produces a list of talents with jobs in the period (Order, Talent ID, Name, Phone, Status, Total amount, Fees, PIT, Net pay)",
        "Ops clicks \"Send all\" to forward payslips to high-level approvers",
        "High-level reviewer approves and dispatches to talents",
      ],
    },
    {
      type: "image",
      src: "/images/weploy-payroll/ops-flow.png",
      alt: "Operations team flow diagram for creating payroll",
      caption: "Ops flow when creating a payroll every 2 weeks",
    },
    { type: "heading", text: "Talent flow" },
    {
      type: "list",
      ordered: true,
      items: [
        "Talent receives an in-app notification",
        "Opens the in-app message, views the payslip PDF",
        "Confirms Approve → status \"Agree\" → Finance downloads PDF, cross-checks, pays",
        "Or rejects → status \"Disagree\" with reason → Onboarding team intervenes",
      ],
    },
    {
      type: "image",
      src: "/images/weploy-payroll/finance-flow.png",
      alt: "Finance team flow diagram for verifying and paying out payroll",
      caption: "Finance flow after Ops creates a payroll",
    },
    { type: "heading", text: "Constraints I had to navigate" },
    {
      type: "list",
      items: [
        "RBAC: who operates the flow, who is accountable on errors, which teams have visibility",
        "Legal: does in-app approval carry the same weight as signed e-contracts?",
        "Performance: generating PDFs for 200+ TAs without blocking admin or TA app",
        "Future-proofing: if Ops changes from bi-weekly to monthly, how does the system adapt without rework?",
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
      caption: "Brainstorming with the Weploy dev team on Jira",
    },
    {
      type: "image",
      src: "/images/weploy-payroll/story-breakdown.png",
      alt: "Story breakdown using INVEST method",
      caption: "Story breakdown following INVEST",
    },
    { type: "heading", text: "Outcome" },
    {
      type: "metrics",
      items: [
        { label: "Talents processed per cycle", value: "200+" },
        { label: "Mobi E-contract cost saved", value: "100%" },
        { label: "Payroll cycle", value: "bi-weekly" },
        { label: "Third-party dependencies", value: "0" },
      ],
    },
    { type: "heading", text: "Reflections" },
    {
      type: "text",
      text: "The hardest part wasn't the feature itself — it was aligning Ops, Finance, and Legal on a single source of truth. Once everyone agreed that the in-app Approve action carried legal weight, the rest of the system fell into place. If I did it again, I'd run the legal alignment in week one, not week six.",
    },
  ],
};
