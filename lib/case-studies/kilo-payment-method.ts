import type { CaseStudyContent } from "./types";

export const kiloPaymentContent: CaseStudyContent = {
  slug: "kilo-payment-method",
  duration: "4 months",
  team: "1 PM, 1 Designer, 2 Engineers",
  status: "Shipped — Nov 2021",
  context:
    "Kilo is a B2B marketplace that lets grocery retailers browse products from many distributors and wholesalers, find the best prices, and place orders for delivery. To support retailers who aren't tech-savvy, Kilo also has a Sales Team that helps them place orders inside the Retailer app. I led the discovery and shipping of a bank-transfer payment method to reduce COD risk, cut cancellations on large orders, and lay the groundwork for a future Buy Now Pay Later (BNPL) program.",
  sections: [
    {
      type: "image",
      src: "/images/kilo-payment/context.png",
      alt: "Kilo marketplace context diagram",
      caption: "Kilo's marketplace ecosystem — retailers, sellers, sales team, and delivery.",
    },

    { type: "heading", text: "Problem statement" },
    {
      type: "text",
      text: "Kilo did not offer any payment functionality to retailers and sellers. An earlier attempt — mobile bank transfers via VNPay — was shut down because the 1% transaction fee wiped out Kilo's revenue on e-payment orders. The team wanted a different model: offer bank transfers as a payment type to reduce COD risk, cut cancellations, and unlock a pilot lending program.",
    },

    { type: "heading", text: "Design process" },
    {
      type: "text",
      text: "I used a Design Thinking framework — Discover, Define, Ideate, then ship — to make sure the solution was grounded in real retailer behavior before any engineering work started.",
    },

    { type: "heading", text: "1. Discover phase" },
    { type: "subheading", text: "Business case" },
    {
      type: "callout",
      text: "If we can provide alternative payment methods for Kilo retailers, we expect a lift in approved orders, an uplift in retailer and seller retention, and a new revenue stream.",
    },

    { type: "subheading", text: "Reduce COD handling risk" },
    {
      type: "text",
      text: "At Kilo's typical order value, a single COD theft required selling roughly 90× the lost amount in additional goods to recover the revenue — and on high-value orders, the recovery multiple stretched even further. A meaningful share of November orders carried COD amounts large enough that the incentive for theft exceeded a driver's monthly salary.",
    },

    { type: "subheading", text: "Reduce shipping costs" },
    {
      type: "text",
      text: "Bank transfer could cut logistics costs in two ways. First, charging a deposit on large-AOV orders would cover shipping costs if the customer canceled after delivery began — offsetting in-flight cancellation penalties. The actual savings depend on the deposit threshold we ultimately set.",
    },

    { type: "subheading", text: "Reduce cancellations on large AOV orders" },
    {
      type: "text",
      text: "Cancellation rates on large orders were nearly 2× the overall average, and most of those cancellations were initiated by Kilo itself — costing the company tens of millions of VND in in-flight delivery penalty fees in November alone.",
    },
    {
      type: "image",
      src: "/images/kilo-payment/cancellation-by-aov.png",
      alt: "Order cancellation rates by GMV bucket",
      caption: "Cancellation rates spiked on large-AOV orders — the case for deposits.",
    },
    {
      type: "text",
      text: "Charging at least a deposit on large orders should cut these rates. But part of that drop is optical: some retailers who would have canceled post-order simply won't place the order in the first place — reducing cancellation rates without growing NMV.",
    },

    { type: "subheading", text: "Discover the value with the 5-why method" },
    {
      type: "image",
      src: "/images/kilo-payment/5-why.png",
      alt: "5-why analysis for payment method",
      caption: "5-why analysis to surface the root motivation behind COD preference.",
    },

    { type: "subheading", text: "Quantitative and qualitative research goals" },
    {
      type: "list",
      items: [
        "Identify obstacles retailers face today, so we can discover service improvements",
        "Observe how retailers order and pay — to inform Pay Collection ideas for bank transfer and a future BNPL feature",
      ],
    },
    {
      type: "image",
      src: "/images/kilo-payment/research.png",
      alt: "Retailer research notes",
      caption: "Mixed quantitative and qualitative research with Kilo retailers.",
    },
    {
      type: "image",
      src: "/images/kilo-payment/research-2.png",
      alt: "Additional research findings",
    },
    {
      type: "image",
      src: "/images/kilo-payment/research-summary.png",
      alt: "Research summary visualization",
    },

    { type: "subheading", text: "Quick summary of findings" },
    {
      type: "callout",
      text: "Cash is still the primary payment method. (1) All interviewed retailers want to receive products first and pay 3PL in cash. (2) Over 80% know how to use bank transfer — they already use it for electric bills and school fees — and are willing to use it for Kilo if there's a discount. (3) 5 retailers said BNPL is \"nice to have\" — they'd use it only when cash-constrained, with zero penetration expected in the first 7–10 days.",
    },

    { type: "subheading", text: "Competitive analysis" },
    {
      type: "text",
      text: "During interviews I also asked retailers about competitors. We built a competitive map covering both direct and indirect players to ground our payment design in market reality.",
    },
    {
      type: "image",
      src: "/images/kilo-payment/competitive.png",
      alt: "Competitive analysis of payment methods",
      caption: "Direct and indirect competitors mapped against feature gaps.",
    },

    { type: "heading", text: "2. Define phase" },
    {
      type: "text",
      text: "I built job-to-be-done diagrams, personas, and customer journey maps to make the problem space concrete before brainstorming solutions.",
    },

    { type: "subheading", text: "Job to be done" },
    {
      type: "image",
      src: "/images/kilo-payment/jtbd.jpg",
      alt: "Job-to-be-done analysis",
      caption: "JTBD framing — why retailers \"hire\" a payment method.",
    },

    { type: "subheading", text: "Persona" },
    {
      type: "image",
      src: "/images/kilo-payment/persona.png",
      alt: "Retailer persona for payment method",
      caption: "Persona: retailers with cash-flow constraints between order cycles.",
    },

    { type: "subheading", text: "User journey" },
    {
      type: "image",
      src: "/images/kilo-payment/user-journey.png",
      alt: "Retailer user journey for payment",
      caption: "Journey map highlighting where bank transfer reduces friction.",
    },

    { type: "heading", text: "3. Ideation phase" },

    { type: "subheading", text: "Hypothesis" },
    {
      type: "quote",
      text: "Online payment is a method retailers will adopt if Kilo provides a reliable, low-fee bank-transfer service. Nearly all surveyed retailers said yes, and 75% saw BNPL as a useful complement to help close transactions when cash is tight.",
    },

    { type: "subheading", text: "Problem to solve" },
    {
      type: "callout",
      text: "Retailer completes an order via bank transfer → Bank returns payment status → Seller receives order → Seller receives payment → Seller accepts order → Retailer receives order status → Kilo requests 3PL to deliver.",
    },

    { type: "subheading", text: "Target market" },
    {
      type: "list",
      ordered: true,
      items: [
        "Retailers who have no cash to pay when an order arrives (today's COD users)",
        "Retailers who are under-capitalized for placing their next order",
      ],
    },

    { type: "subheading", text: "MVP goals" },
    {
      type: "metrics",
      items: [
        { label: "Sellers offering bank transfer", value: "50%" },
        { label: "Successful payment rate", value: "95%" },
        { label: "Retailers using BNPL (stretch)", value: "25%" },
      ],
    },

    { type: "subheading", text: "Solution" },
    {
      type: "list",
      ordered: true,
      items: [
        "Partner with bank vendors for direct transfer integration",
        "Partner with a credit company to evaluate a BNPL facility for Kilo retailers",
        "Define the bank-transfer service policy and operations process",
        "Build the feature in the Seller platform and Retailer app",
        "Run targeted marketing to onboard sellers and retailers onto the new method",
      ],
    },

    { type: "subheading", text: "Value proposition" },
    {
      type: "list",
      ordered: true,
      items: [
        "Quality payment service for retailers + tooling to track and analyze delivery activity — digitalizing the end-to-end seller/retailer flow",
        "More sales and new nationwide retailers for sellers",
        "Real-time order status visibility for retailers",
        "New revenue stream for Kilo, plugged into more touchpoints in the value chain",
      ],
    },

    { type: "heading", text: "Payment service details" },
    { type: "subheading", text: "Cross-functional flow" },
    {
      type: "image",
      src: "/images/kilo-payment/cross-functional.png",
      alt: "Cross-functional diagram for payment flow",
      caption: "Cross-functional flow — from retailer payment to seller settlement.",
    },

    { type: "subheading", text: "End-to-end order processing" },
    {
      type: "list",
      ordered: true,
      items: [
        "Seller registers Kilo's 3PL service",
        "Retailer places an order through the Retailer app",
        "Seller confirms the order",
        "Once confirmed, seller books delivery with Kilo automatically (3PL policy enforces this)",
        "Kilo selects the most suitable 3PL provider and forwards pickup, delivery, shipping mode, and package details",
        "3PL goes to the seller's location to pick up the order — if pickup fails, the order is canceled; if successful, status becomes \"In transit\"",
        "3PL goes to the retailer's location to deliver — retailer either accepts the entire order or rejects it (no partial returns)",
        "If accepted, status becomes \"Delivered\"; if rejected, order is canceled and goods are returned to the seller",
        "3PL reconciles delivery fees with Kilo, then Kilo reconciles delivery fees and order amount to the seller on the agreed window terms",
      ],
    },

    { type: "subheading", text: "Inbound request API — field plan" },
    {
      type: "text",
      text: "I worked with engineering to define the inbound payload contract for new orders. The table below is an excerpt of the field-level requirements.",
    },
    {
      type: "table",
      headers: ["Field", "Required", "Description", "Kilo logic"],
      rows: [
        ["estimateArrivalDate", "Yes", "Estimate Arrival Date (yyyy-MM-dd)", "+1 day from inbound creation unless weekend"],
        ["sellerID", "Yes", "Seller ID", ""],
        ["sellerName", "Yes", "Seller name", ""],
        ["3PLID", "Yes", "3rd party logistic ID", ""],
        ["3PLName", "Yes", "3rd party logistic name", ""],
        ["driverID", "Yes", "Driver ID", ""],
        ["driverName", "Yes", "Driver name", ""],
        ["driverPhone", "Yes", "Driver phone", ""],
        ["vehicleNumber", "No", "Vehicle number", "Null"],
        ["containerNumber", "No", "Container carrying stock", "Null"],
        ["retailerID", "Yes", "Retailer ID", ""],
        ["retailerName", "Yes", "Retailer name", ""],
        ["retailerEmail", "No", "Retailer email", "Null"],
        ["retailerPhoneNumber", "Yes", "Retailer phone", ""],
        ["orderID", "Yes", "Order ID", ""],
        ["orderStatus", "Yes", "Order status", ""],
        ["promotionCode", "No", "Discount code on order amount", "Null"],
        ["Products[]", "Yes", "Product lines", ""],
        ["productsSKU", "Yes", "Product SKU", "Barcode to scan on stock"],
        ["productsUnitCode", "Yes", "Unit code of product", ""],
        ["products.quantity", "Yes", "Quantity > 0", "Quantity being shipped"],
        ["products.specificitems[]", "No", "Product specification list", "Null"],
        ["products.specificitems.quantity", "Conditional", "Quantity of this specification", ""],
        ["products.specificitems.manufacturedate", "No", "Manufacture date (yyyy-MM-dd)", "Null"],
        ["products.specificitems.expirationdate", "Yes", "Expiry date (yyyy-MM-dd)", ""],
        ["paymentType", "Yes", "Payment method", ""],
        ["paymentAmount", "Yes", "Payment amount", ""],
      ],
    },

    { type: "subheading", text: "API acceptance criteria" },
    {
      type: "list",
      items: [
        "System is designed and operated as described in the document",
        "System is calibrated after deployment and testing",
        "API information is added to the general technical documentation",
      ],
    },

    { type: "heading", text: "Reflections" },
    {
      type: "text",
      text: "The biggest lesson was that user research doesn't always tell you what you hope it will. I expected retailers to be enthusiastic about bank transfer — they weren't. They were comfortable with COD and only willing to switch when there was a tangible benefit (discount, time savings, or cash-flow help). That insight reshaped the rollout: instead of marketing bank transfer as a feature, we positioned it as a money-saver tied to specific promotions, and let BNPL absorb demand from undercapitalized retailers.",
    },
    {
      type: "text",
      text: "Working on this project also strengthened how I think about scope. Building a complete \"perfect world\" payment experience is tempting; defining what the MVP truly needs — and what can wait — is the harder, more useful skill. I came away with a clearer mental model of how to balance ambition with shipping reality.",
    },
  ],
};
