import type { CaseStudyContent } from "./types";

export const kiloPaymentContent: CaseStudyContent = {
  slug: "kilo-payment-method",
  duration: "4 months",
  team: "1 PM, 1 Designer, 2 Engineers",
  status: "Shipped — Nov 2021",
  context:
    "Kilo's B2B marketplace ran almost entirely on Cash on Delivery (COD). Earlier in 2021, Kilo had attempted to offer e-payment via VNPay, but the 1% transaction fee wiped out margin and the program was shut down. I led discovery and shipping of a bank-transfer payment method designed to reduce COD theft risk, cut cancellations on large orders, and lay groundwork for a future Buy Now Pay Later (BNPL) program.",
  sections: [
    {
      type: "image",
      src: "/images/kilo-payment/context.png",
      alt: "Kilo marketplace context diagram",
      caption: "Kilo's marketplace ecosystem — retailers, sellers, and delivery.",
    },
    { type: "heading", text: "The business case" },
    {
      type: "text",
      text: "At Kilo's average order value of 9M VND, a single COD theft required selling another 796M VND of goods to recover the lost revenue. At 20M-per-order, recovery required 1.76B VND in sales. With 10% of November orders carrying COD above 20M, the incentive for theft was higher than a driver's monthly salary.",
    },
    {
      type: "text",
      text: "On top of that, cancellation rates on large orders (>20M) were nearly 2× the overall average — and most of those cancellations were initiated by Kilo itself, costing ~40M VND in in-flight delivery penalty fees in November alone.",
    },
    {
      type: "image",
      src: "/images/kilo-payment/cancellation-by-aov.png",
      alt: "Order cancellation rates by GMV bucket",
      caption: "Cancellation rates spiked on large-AOV orders — the case for deposits.",
    },
    { type: "heading", text: "Research" },
    {
      type: "text",
      text: "I interviewed retailers in person and by phone, observed how they actually placed and paid for orders, and ran a quantitative survey to size the opportunity.",
    },
    {
      type: "image",
      src: "/images/kilo-payment/research.png",
      alt: "Retailer research notes",
      caption: "Mixed quantitative and qualitative research with Kilo retailers.",
    },
    { type: "heading", text: "Key findings" },
    {
      type: "list",
      items: [
        "Cash is still the primary payment method — retailers prefer paying 3PL at delivery",
        "Over 80% know how to use bank transfer (they pay electric and school bills this way) and will use it for Kilo if there's a discount",
        "5 retailers said BNPL is \"nice to have\" — they'd use it only when cash-constrained, with zero penetration in the first 7–10 days of an order",
      ],
    },
    {
      type: "quote",
      text: "All interviewed retailers want to receive products first and pay cash to 3PL. To shift their behavior, the new method has to either save them money or save them time.",
    },
    { type: "heading", text: "Personas and user journey" },
    {
      type: "image",
      src: "/images/kilo-payment/persona.png",
      alt: "Retailer persona for payment method",
      caption: "Persona: retailers with cash-flow constraints between order cycles.",
    },
    {
      type: "image",
      src: "/images/kilo-payment/user-journey.png",
      alt: "Retailer user journey for payment",
      caption: "Journey map highlighting where bank transfer reduces friction.",
    },
    { type: "heading", text: "Hypothesis and goals" },
    {
      type: "quote",
      text: "Retailers will adopt online payment if Kilo provides a reliable bank-transfer flow with an affordable transaction fee. Nearly all surveyed retailers said yes, and 75% saw BNPL as a useful complement.",
    },
    {
      type: "metrics",
      items: [
        { label: "Sellers offering bank transfer", value: "50%" },
        { label: "Successful payment rate", value: "95%" },
        { label: "Retailers using BNPL (stretch)", value: "25%" },
      ],
    },
    { type: "heading", text: "Solution" },
    {
      type: "list",
      ordered: true,
      items: [
        "Partner with bank vendors for direct transfer integration",
        "Partner with a credit company to evaluate the BNPL facility for Kilo retailers",
        "Define the bank-transfer service policy and operations process",
        "Implement features in the Seller platform and Retailer app",
        "Run targeted marketing to onboard sellers and retailers onto the new method",
      ],
    },
    {
      type: "image",
      src: "/images/kilo-payment/cross-functional.png",
      alt: "Cross-functional diagram for payment flow",
      caption: "Cross-functional flow — from retailer payment to seller settlement.",
    },
    { type: "heading", text: "Reflections" },
    {
      type: "text",
      text: "The biggest lesson was that user research doesn't always say what you hope it will. Going in, I expected retailers to be enthusiastic about bank transfer. They weren't — they were comfortable with COD and only willing to switch if there was a tangible benefit (discount, saved time, or cash-flow help). That insight reshaped the rollout strategy: instead of marketing bank transfer as a feature, we positioned it as a money-saver tied to specific promotions, and let BNPL absorb the demand from undercapitalized retailers.",
    },
  ],
};
