import type { CaseStudyContent } from "./types";

export const kilo3plContent: CaseStudyContent = {
  slug: "kilo-3pl-logistics",
  duration: "4 months (UX research 1mo · UI refinement 1mo · Development 2mo)",
  team: "1 PM, 1 Designer, 3 Engineers, 2 Ops",
  status: "Shipped — Aug 2021",
  context:
    "Kilo is a B2B marketplace for Vietnamese grocery retailers. Ho Chi Minh City's supply chain is complex and fragmented, and Kilo set out to build an in-house solution that makes supply chain management transparent, efficient, and error-free. I led the discovery and rollout of a 3rd-party logistics (3PL) service that gave sellers reliable nationwide delivery and unlocked a new revenue stream for Kilo.",
  sections: [
    { type: "heading", text: "Product overview" },
    {
      type: "text",
      text: "Ho Chi Minh City's supply chain industry is complex and requires specialized software to manage effectively. Our goal was to develop an in-house solution that makes supply chain management transparent, efficient, and error-free — for sellers, retailers, Kilo Ops, and our 3PL partners.",
    },

    { type: "heading", text: "Problem statement" },
    {
      type: "text",
      text: "The product was initiated after early conversations with Kilo's founder (Katrick N.), Rob Z., and Ryan W.B. (Head of Product). The discussions quickly went deep — we learned a lot about Vietnam's supply chain challenges, last-mile deliveries, and warehousing.",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "Couldn't scale up due to manual operations",
        "Existing Kilo management software features were not enough",
        "Human dependencies caused tons of errors (only 4 people across Q.C and C.S teams)",
        "Poor visibility for the Customer Support team",
        "Revenue loss due to malpractices",
        "Poor acceptance of software solutions",
      ],
    },

    { type: "heading", text: "Design process" },
    {
      type: "text",
      text: "I used Design Thinking — Discover, Define, Ideate, Build — to keep the work grounded in real seller and retailer behavior.",
    },

    { type: "heading", text: "1. Discover phase" },

    { type: "subheading", text: "Business case" },
    {
      type: "text",
      text: "Based on seller interviews, sellers wanted to expand their business reach but had no in-house capability for delivery — especially cross-city or long-distance.",
    },
    {
      type: "image",
      src: "/images/kilo-3pl/cancellation-stats.png",
      alt: "Cancellation rate statistics by delivery type",
      caption: "In March 2021, 29.64% of cross-city orders were canceled by sellers — vs. just 2.16% of same-city orders.",
    },
    {
      type: "text",
      text: "Sellers also struggled with manually booking delivery for each order. The process consumed time and resources, yet they couldn't manage or track delivery status, and they couldn't keep retailers updated.",
    },
    {
      type: "callout",
      text: "If we can provide quality delivery services, we expect growth in approved-order percentage, uplift in retailer & seller retention, and a new revenue stream. 3PL Provider: nationwide delivery. Monetization: 2.2% GMV including delivery cost and e-payment service fee.",
    },

    { type: "subheading", text: "5-why analysis to surface root motivation" },
    {
      type: "image",
      src: "/images/kilo-3pl/5-why.png",
      alt: "5-why analysis for 3PL service",
      caption: "5-why analysis to surface the root motivation behind seller cancellations.",
    },

    { type: "subheading", text: "Quantitative and qualitative research" },
    {
      type: "text",
      text: "I ran an online survey with 30+ sellers and retailers under the Kilo system, asking about pain points, the qualities they value most in delivery, and their expectations of a Kilo-provided service. I used the results to determine which features were essential, and to surface opportunities we hadn't considered.",
    },
    {
      type: "image",
      src: "/images/kilo-3pl/research.png",
      alt: "Quantitative and qualitative research findings",
      caption: "Survey responses mapped to feature priorities and gaps.",
    },

    { type: "subheading", text: "Competitive analysis" },
    {
      type: "text",
      text: "To understand how competitors were performing and to lay out a strong foundation, I ran a competitive analysis covering both direct and indirect players in Vietnam's logistics space.",
    },
    {
      type: "image",
      src: "/images/kilo-3pl/competitive.png",
      alt: "Competitive analysis of logistics players",
      caption: "Direct and indirect competitors mapped against service coverage.",
    },

    { type: "subheading", text: "Contextual inquiry — the fun ride" },
    {
      type: "text",
      text: "Despite limited info from our interviews with GSPs and Operations staff, I decided to shadow them for a whole week. The first day was awkward and uncomfortable, but as I began to appreciate their hard work in harsh conditions, things changed.",
    },
    {
      type: "text",
      text: "I assured them that the software we were building wouldn't replace their jobs — it would reduce their workload. I also insisted on having lunch and snacks with them, and we quickly bonded over food.",
    },
    {
      type: "text",
      text: "By the end of the week, we had tons of observations, candid photos of how they actually worked, and valuable insights. I also learned a deeper lesson about how communication between teams either makes or breaks an internal product.",
    },
    {
      type: "image",
      src: "/images/kilo-3pl/contextual-inquiry.jpg",
      alt: "Photo from shadowing the Operations team",
      caption: "Field shadowing with the Ops team — the best insights came over lunch.",
    },

    { type: "heading", text: "2. Define phase" },
    {
      type: "text",
      text: "I built job-to-be-done diagrams, personas, empathy maps, and customer journey maps to translate field observations into design inputs.",
    },

    { type: "subheading", text: "Job to be done" },
    {
      type: "image",
      src: "/images/kilo-3pl/jtbd.png",
      alt: "Job to be done analysis",
      caption: "JTBD framing — what sellers and retailers hire delivery to accomplish.",
    },

    { type: "subheading", text: "Persona" },
    {
      type: "image",
      src: "/images/kilo-3pl/persona.png",
      alt: "Seller persona for 3PL service",
      caption: "Primary persona: small sellers without in-house delivery capability.",
    },

    { type: "subheading", text: "Users' goals" },
    {
      type: "image",
      src: "/images/kilo-3pl/user-goals.png",
      alt: "Key user goals discovered through research",
      caption: "Synthesized user goals from interviews and survey responses.",
    },

    { type: "heading", text: "3. Ideation phase" },
    {
      type: "text",
      text: "I built an ecosystem map to understand the domain, task flows to align design decisions with user behavior, and an information architecture that became the basis for the app.",
    },
    {
      type: "image",
      src: "/images/kilo-3pl/overall-picture.jpg",
      alt: "Overall ecosystem picture",
      caption: "Ecosystem map — sellers, retailers, Ops, 3PL partners, and Kilo's platform.",
    },

    { type: "subheading", text: "Hypothesis" },
    {
      type: "quote",
      text: "3PL is a service sellers will adopt if Kilo can provide quality delivery at an affordable shipping fee. After running the 3PL Demand Survey, 100% of surveyed sellers said yes — and 82% agreed to COD reconciliation 3–5 days after pickup.",
    },

    { type: "subheading", text: "Problem to solve" },
    {
      type: "callout",
      text: "Give sellers the capability to ship goods to end customers via Kilo's 3PL service. Retailer places order → Seller accepts → Kilo requests 3PL → 3PL delivers from seller to retailer → 3PL reconciles money to Kilo → Kilo reconciles money to seller.",
    },

    { type: "subheading", text: "Target market" },
    {
      type: "list",
      ordered: true,
      items: [
        "Sellers with no in-house delivery team, or whose capability can't meet business demand",
        "Nationwide and multi-city sellers — launching in 5 cities first: Ha Noi, Hai Phong, Da Nang, Binh Duong, HCMC",
      ],
    },

    { type: "subheading", text: "MVP goals" },
    {
      type: "metrics",
      items: [
        { label: "Sellers using 3PL", value: "30%" },
        { label: "Orders via 3PL", value: "20%" },
        { label: "Successful delivery rate", value: "90%" },
        { label: "Cross-province order lift", value: "+15%" },
      ],
    },

    { type: "subheading", text: "Solution" },
    {
      type: "list",
      ordered: true,
      items: [
        "Cooperate with 3PL providers (An Tho Logistics, Ship60)",
        "Define a 3PL service policy and end-to-end operations process",
        "Build seller-side activation, retailer tracking, driver app, and admin tools",
        "Run targeted marketing to onboard sellers onto the new service",
      ],
    },

    { type: "subheading", text: "Value proposition" },
    {
      type: "list",
      ordered: true,
      items: [
        "Quality delivery service for sellers + analytics tools to track their delivery activity — digitalizing the end-to-end seller/retailer flow",
        "More sales and new nationwide retailers for sellers",
        "Real-time delivery visibility for retailers",
        "New revenue stream for Kilo, plugged into more touchpoints in the value chain",
      ],
    },

    { type: "heading", text: "3PL service details" },

    { type: "subheading", text: "Inbound order flow" },
    {
      type: "image",
      src: "/images/kilo-3pl/data-flow.png",
      alt: "Inbound order data flow",
      caption: "Data flow for inbound order processing — seller to 3PL to retailer.",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "Seller registers Kilo's 3PL service",
        "Retailer places an order through the Retailer app",
        "Seller confirms the order",
        "Once confirmed, seller automatically books delivery with Kilo (3PL policy enforces this)",
        "Kilo chooses the most suitable 3PL provider and forwards pickup, delivery, shipping mode, and package details",
        "3PL attempts pickup at the seller's location — if it fails, the order is canceled; if successful, status becomes \"In transit\"",
        "3PL attempts delivery at the retailer's location — retailer must accept the entire order or reject it (no partial returns)",
        "If retailer rejects, order is canceled and 3PL returns goods to the seller; if accepted, status becomes \"Delivered\"",
        "3PL reconciles delivery fees with Kilo; Kilo reconciles delivery fees + order amount with the seller on agreed window terms",
      ],
    },

    { type: "subheading", text: "Inbound API — field plan" },
    {
      type: "table",
      headers: ["Field", "Required", "Description", "Kilo logic"],
      rows: [
        ["estimateArrivalDate", "Yes", "Estimate Arrival Date (yyyy-MM-dd)", "+1 day from inbound creation unless weekend"],
        ["sellerID / sellerName", "Yes", "Seller identity", ""],
        ["3PLID / 3PLName", "Yes", "3PL identity", ""],
        ["driverID / driverName / driverPhone", "Yes", "Driver identity", ""],
        ["vehicleNumber", "No", "Vehicle plate", "Null"],
        ["containerNumber", "No", "Container carrying stock", "Null"],
        ["retailerID / retailerName", "Yes", "Retailer identity", ""],
        ["retailerEmail", "No", "Retailer email", "Null"],
        ["retailerPhoneNumber", "Yes", "Retailer phone", ""],
        ["orderID / orderStatus", "Yes", "Order identity & status", ""],
        ["promotionCode", "No", "Discount code", "Null"],
        ["Products[]", "Yes", "Product lines", ""],
        ["productsSKU / productsUnitCode", "Yes", "SKU and unit", "SKU = barcode scanned on stock"],
        ["products.quantity", "Yes", "Quantity > 0", "Quantity being shipped"],
        ["products.specificitems[]", "No", "Specification list", "Null"],
        ["products.specificitems.expirationdate", "Yes", "Expiry date (yyyy-MM-dd)", ""],
        ["paymentType / paymentAmount", "Yes", "Payment info", ""],
      ],
    },

    { type: "subheading", text: "Outbound order flow" },
    {
      type: "image",
      src: "/images/kilo-3pl/outbound-flow.png",
      alt: "Outbound order data flow",
      caption: "Data flow for outbound order processing.",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "Kilo shows a Delivery Banner on the Order details page to attract sellers; banner directs sellers to a Google form for delivery booking",
        "Seller reads the description, enters the Order ID, and submits the form — Ops receive an email notification",
        "Kilo Ops checks order details, then calls the seller to confirm shipping fee, expected pickup, and booking. If seller hasn't approved the order, Ops asks them to approve; if the seller cancels, Ops captures the reason in the tracking sheet",
        "Once confirmed, Kilo contacts the 3PL with pickup details, delivery details, package details, and COD amount",
        "3PL prints the invoice, goes to the seller, and attempts pickup — verifying that goods match the invoice before transit",
        "3PL goes to the retailer's location to deliver — retailer accepts entire order or rejects entire order (no partial)",
        "If accepted, 3PL informs Kilo \"Delivered\"; if rejected, 3PL informs Kilo to cancel and returns goods to seller",
        "3PL bank-transfers cash collection to Kilo; Kilo bank-transfers funds to seller on D+3 to D+5 (D-0 pickup, D+2 delivered, D+3/4 3PL → Kilo, D+4/5 Kilo → seller)",
      ],
    },

    { type: "subheading", text: "Outbound API — field plan" },
    {
      type: "table",
      headers: ["Field", "Required", "Description", "Kilo logic"],
      rows: [
        ["estimateArrivalDate", "Yes", "Estimate Arrival Date (yyyy-MM-dd)", "+1 day from inbound creation unless weekend"],
        ["sellerID / sellerName", "Yes", "Seller identity", ""],
        ["3PLID / 3PLName", "Yes", "3PL identity", ""],
        ["driverID / driverName / driverPhone", "Yes", "Driver identity", ""],
        ["vehicleNumber / containerNumber", "No", "Vehicle and container", "Null"],
        ["priorityType", "No", "Order priority", ""],
        ["retailerID / retailerName / retailerPhoneNumber", "Yes", "Retailer identity", ""],
        ["retailerEmail", "No", "Retailer email", "Null"],
        ["orderID / orderStatus", "Yes", "Order identity & status", ""],
        ["Products[]", "Yes", "Product lines", ""],
        ["productsSKU / productsUnitCode", "Yes", "SKU and unit", "SKU = barcode scanned on stock"],
        ["products.quantity", "Yes", "Quantity > 0", "Quantity being shipped"],
        ["products.specificitems[]", "No", "Specification list", "Null"],
        ["products.specificitems.expirationdate", "Yes", "Expiry date (yyyy-MM-dd)", ""],
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

    { type: "subheading", text: "User case diagrams" },
    {
      type: "image",
      src: "/images/kilo-3pl/user-case-seller.jpg",
      alt: "User case diagram between Seller, Kilo & Retailer",
      caption: "User cases — Seller × Kilo × Retailer.",
    },
    {
      type: "image",
      src: "/images/kilo-3pl/user-case-retailer.jpg",
      alt: "User case diagram between Kilo and Retailer",
      caption: "User cases — Kilo × Retailer.",
    },
    {
      type: "image",
      src: "/images/kilo-3pl/user-case-3pl.png",
      alt: "User case diagram between Kilo and 3PL vendors",
      caption: "User cases — Kilo × 3PL vendors.",
    },

    { type: "subheading", text: "State machine" },
    {
      type: "image",
      src: "/images/kilo-3pl/state-diagram.png",
      alt: "Kilo state machine diagram",
      caption: "State machine covering happy paths and failure paths.",
    },
    {
      type: "image",
      src: "/images/kilo-3pl/order-status.png",
      alt: "Order status details",
      caption: "Order status enum.",
    },
    {
      type: "image",
      src: "/images/kilo-3pl/delivery-status.png",
      alt: "Delivery status details",
      caption: "Delivery status enum.",
    },

    { type: "subheading", text: "3PL partners — comparison" },
    {
      type: "table",
      headers: ["", "An Tho Logistics", "Ship60"],
      rows: [
        ["COD limit", "Up to 100M VND", "Unlimited"],
        ["Pickup areas", "HCMC, Binh Duong", "HCMC; Binh Duong (Thuan An, Di An); Dong Nai (Bien Hoa)"],
        ["Receive areas", "HCMC, Binh Duong, Long An, Tien Giang, Ben Tre, Dong Thap, Vinh Long, Tra Vinh, Can Tho, An Giang, Hau Giang, Soc Trang, Kien Giang, Bac Lieu, Ca Mau", "HCMC, Binh Duong, Dong Nai"],
        ["Vehicle types", "Truck 0.5–15 ton; Truck 2 ton", "Truck 2 ton"],
        ["Delivery SLA", "1–2 days", "Same day if ordered before 10:30am; D+1 if after"],
        ["COD collection fee", "0.9% of COD value (free if <2M)", "0.1% of COD value (free if <30M)"],
        ["Returns processing", "50% of delivery cost", "75% of delivery cost"],
        ["Loading fee", "80,000 VND/ton", "120,000 VND/ton"],
        ["Insurance", "N/A", "0.15% of order value"],
        ["Cash settlement", "Bank transfer same day (before 4pm) or next day (after 4pm)", "Bank transfer every Mon, Wed, Fri"],
      ],
    },

    { type: "subheading", text: "Operation process (rollout)" },
    {
      type: "table",
      headers: ["Step", "Description", "Frequency", "Owner"],
      rows: [
        ["Create delivery booking form", "Set up Google Form for sellers + email notifications", "Once", "Minh"],
        ["Check delivery booking", "Verify order code, fetch pickup/receive/products from tracking sheet", "As needed", "Minh, Giang, Ngoc Anh"],
        ["Confirm booking with seller", "Call seller, confirm bank, shipping fee, pickup & delivery time; update column L of tracking sheet", "As needed", "Minh, Giang, Ngoc Anh"],
        ["Book 3PL service", "Share delivery info with 3PL in Zalo group", "As needed", "Minh, Giang, Ngoc Anh"],
        ["Monitor 3PL status", "Update tracking sheet from Zalo group; notify Sophie's team on successful delivery via Slack", "Daily", "Minh, Giang, Ngoc Anh"],
        ["Settle funds with sellers", "Bank-transfer relevant funds on agreed net terms", "As needed", "Minh, Giang, Ngoc Anh"],
      ],
    },

    { type: "heading", text: "4. Development phase" },
    {
      type: "text",
      text: "I worked with the design and engineering team through paper sketches → low-fi → mid-fi → final UI, broken into independently shippable stories for each user role.",
    },

    { type: "subheading", text: "Paper sketches" },
    {
      type: "image",
      src: "/images/kilo-3pl/wireframe-1.jpg",
      alt: "Paper wireframe sketch",
      caption: "Early paper sketches exploring activation and tracking flows.",
    },
    {
      type: "image",
      src: "/images/kilo-3pl/wireframe-3.jpg",
      alt: "Paper wireframe sketch",
    },

    { type: "subheading", text: "Mid-fidelity wireframes" },
    {
      type: "image",
      src: "/images/kilo-3pl/activate-3pl.png",
      alt: "Mid-fi: activate 3PL flow",
      caption: "Activate 3PL — seller-side flow.",
    },
    {
      type: "image",
      src: "/images/kilo-3pl/activate-vendors.png",
      alt: "Mid-fi: activate vendors",
      caption: "Activate vendors — admin-side flow.",
    },

    { type: "subheading", text: "Final UI — Logistic configuration" },
    {
      type: "image",
      src: "/images/kilo-3pl/logistic-config-1.png",
      alt: "Logistic configuration screen",
      caption: "Admin logistic configuration.",
    },

    { type: "subheading", text: "Final UI — 3PL vendor management" },
    {
      type: "image",
      src: "/images/kilo-3pl/create-vendor.png",
      alt: "Create 3PL vendor screen",
      caption: "Creating and managing 3PL vendors.",
    },

    { type: "subheading", text: "Final UI — Driver app" },
    {
      type: "image",
      src: "/images/kilo-3pl/driver-app.png",
      alt: "Driver app screen",
      caption: "Driver app — pickup and delivery workflow.",
    },

    { type: "subheading", text: "Final UI — Seller activation" },
    {
      type: "image",
      src: "/images/kilo-3pl/seller-ui.png",
      alt: "Seller activate delivery feature",
      caption: "Seller activates the delivery feature from the order detail page.",
    },

    { type: "subheading", text: "Final UI — Retailer app" },
    {
      type: "image",
      src: "/images/kilo-3pl/retailer-ui.png",
      alt: "Retailer app showing delivery tracking",
      caption: "Retailer-side: real-time delivery status replaces guesswork.",
    },

    { type: "subheading", text: "User story maps" },
    {
      type: "image",
      src: "/images/kilo-3pl/story-map.png",
      alt: "Admin user story map",
      caption: "Story map — Admin role.",
    },
    {
      type: "image",
      src: "/images/kilo-3pl/story-map-seller.png",
      alt: "Seller user story map",
      caption: "Story map — Seller role.",
    },
    {
      type: "image",
      src: "/images/kilo-3pl/story-map-retailer.png",
      alt: "Retailer user story map",
      caption: "Story map — Retailer role.",
    },
    {
      type: "image",
      src: "/images/kilo-3pl/story-map-driver.png",
      alt: "Driver user story map",
      caption: "Story map — Driver role.",
    },

    { type: "subheading", text: "Jira ticket breakdown" },
    {
      type: "image",
      src: "/images/kilo-3pl/jira-tickets.png",
      alt: "Jira ticket breakdown",
      caption: "Story breakdown for the dev team in Jira.",
    },

    { type: "heading", text: "Open questions resolved during scoping" },
    {
      type: "table",
      headers: ["Question", "Resolution"],
      rows: [
        ["Which cost rate do we charge the seller?", "Charge 50% of 3PL delivery cost. Free COD collection. Free returns. Free loading. (If <5 confirmed bookings after week 1, run test entirely free.)"],
        ["Charge seller a return fee if retailer refuses the order?", "Free."],
        ["Which sellers and delivery areas open up for the test?", "Any seller whose warehouse is in HCMC or Binh Duong, with retailers in the eligible Receive Areas of our 3PL partners."],
        ["Which 3PL partners?", "An Tho Logistics and Ship60."],
        ["How long from booking to pickup?", "12–24 hours."],
      ],
    },

    { type: "heading", text: "Reflections" },
    {
      type: "text",
      text: "As a project early in my Product Management career, this taught me how to scope. The instinct to build the \"perfect world\" version is strong, but disciplined trade-offs are what get a product shipped.",
    },
    {
      type: "text",
      text: "It also strengthened my UX intuition — working start-to-finish with a strong Product Designer pushed my own design thinking forward. I learned how to manage a remote engineering team when communication and progress visibility weren't a given, and I now understand the difference between Product Management and Project Management inside an agency.",
    },
    {
      type: "text",
      text: "Most of all, this is the project that taught me where the best research happens — outside the conference room. Eating lunch with the people who'll actually use what you build is worth more than a dozen formal interviews.",
    },
  ],
};
