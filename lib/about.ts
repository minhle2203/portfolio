export type Experience = {
  company: string;
  role: string;
  location: string;
  start: string;
  end: string;
  bullets: string[];
};

export type Education = {
  school: string;
  degree: string;
  period: string;
};

export const aboutContent = {
  name: "Minh Le Hong Anh",
  headline: "Product Owner @ Weploy",
  location: "Ho Chi Minh City, Vietnam",
  bio: [
    "I've spent the last 8 years building software products — first as a designer, then as a business analyst, and for the past 4+ years as a Product Owner. That path means I think about products in three layers at once: how they look, what they're supposed to do for the business, and how to actually get them shipped.",
    "Today I lead product work at Weploy, a workforce platform connecting companies with on-demand talents. I've launched the Weploy Talent and Client mobile applications, shipped features like rating, payslips, surveys, app tutorials, and GPS-based check-in/out for fraud prevention, and helped revamp the HR management system to boost company revenue within my first year.",
    "Before Weploy I was at Kilo (B2B grocery marketplace) where I drove discovery and shipping of 3PL logistics and payment features. Before that, I spent ~4 years in Tokyo at SunnyPoints — first as a UI/UX designer, then as a Business Analyst — working with Japanese clients on loyalty marketing software.",
    "I enjoy working at the intersection of business strategy and execution: turning ambiguous market signals into product bets, and turning bets into things that ship.",
  ],
  experience: [
    {
      company: "Weploy",
      role: "Product Owner",
      location: "Ho Chi Minh City, Vietnam",
      start: "March 2022",
      end: "Present",
      bullets: [
        "Launched the new Weploy Talent app (May 2023) and Client app (June 2023)",
        "Shipped Rating Talents, Talent Payslips, Survey, App Tutorial, and GPS-based Check-in/out (fraud prevention)",
        "Participated in revamping the Weploy HR management system — proposed a new design that matched user needs and boosted revenue within the first year",
        "Oversaw product development end-to-end across stakeholders, dev, and QA",
        "Demoed releases to investors and ran training sessions for related departments",
        "Owned monthly release planning, PRDs, and the Product Release Roadmap",
        "Worked with engineering on a database serving 1,000+ daily active talents and clients",
        "Coordinated matching of talents to client requirements — 88% successful match rate",
        "Wrote and prioritized stories in Jira (Scrum); measured feature performance to iterate on key metrics",
      ],
    },
    {
      company: "Kilo",
      role: "Product Owner",
      location: "Ho Chi Minh City, Vietnam",
      start: "March 2020",
      end: "March 2022",
      bullets: [
        "Facilitated communication between 5 stakeholder groups (Board, CS, Sellers, Retailers, Marketing), 17 Agile team members, and 10 developers",
        "Analyzed and defined feature specs with Dev and QA; translated business rules into flowcharts and diagrams",
        "Assisted Senior Product Owner on launching the Kilo Seller Dashboard and Retailer mobile application",
        "Partnered with ~10 developers on a roadmap that increased new-user registrations on the Seller Dashboard",
        "Interviewed sellers and retailers, then designed technological improvements to onboarding and ordering",
        "Ran user research, rapid wireframing, prototyping, and high-fidelity mockups for A/B tests",
        "Contributed to building the Kilo Design System from scratch — shipped screens for Android, iOS, and mobile web",
      ],
    },
    {
      company: "SunnyPoints, Inc.",
      role: "Business Analyst",
      location: "Tokyo, Japan",
      start: "July 2018",
      end: "February 2020",
      bullets: [
        "Interviewed Japanese customers to understand insights and analyze stakeholder business requirements",
        "Recommended digital solutions tailored to client demands",
        "Created business process diagrams, user flows, and wireframes",
        "Worked with product designers on the dashboard, website, tablet, and mobile app for Active Media Vietnam",
      ],
    },
    {
      company: "SunnyPoints, Inc.",
      role: "UI/UX Designer",
      location: "Tokyo, Japan",
      start: "June 2016",
      end: "June 2018",
      bullets: [
        "Active Media is a Japanese loyalty marketing group supporting 2,200+ stores through point-system services",
        "Designed dashboard, website, tablet, and mobile app for the SunnyPoint Appointment system",
        "Gathered and clarified requirements from PMs and Product Owners",
        "Collaborated closely with engineering throughout development",
      ],
    },
    {
      company: "HDapps",
      role: "UI/UX Designer",
      location: "Ho Chi Minh City, Vietnam",
      start: "July 2015",
      end: "May 2016",
      bullets: [],
    },
    {
      company: "Alpha Leapers Digital",
      role: "Design Intern",
      location: "Ho Chi Minh City, Vietnam",
      start: "March 2015",
      end: "June 2015",
      bullets: [],
    },
    {
      company: "RMIT University Vietnam",
      role: "Graphic Designer",
      location: "Ho Chi Minh City, Vietnam",
      start: "September 2014",
      end: "January 2015",
      bullets: [],
    },
  ] as Experience[],
  education: [
    {
      school: "RMIT University",
      degree: "Master of Communication Design — Design / Software / Product",
      period: "2019 — 2021",
    },
    {
      school: "RMIT University Vietnam",
      degree: "Bachelor's Degree, Multimedia Design",
      period: "2011 — 2015",
    },
    {
      school: "True Skill Center",
      degree: "ITBA & Product Owner Agile certification",
      period: "Apr — Jun 2023",
    },
    {
      school: "Wizeline Academy",
      degree: "Wizeline UX Academy",
      period: "2017",
    },
  ] as Education[],
  skills: {
    "Product practice": [
      "Discovery & user research",
      "Product roadmapping",
      "Product lifecycle management",
      "Spec writing (PRD, BRD)",
      "Stakeholder management",
      "A/B testing",
      "Story mapping & INVEST",
      "Agile / Scrum",
      "JTBD framework",
    ],
    "Tools & technical": [
      "Figma",
      "Jira",
      "Microsoft Excel",
      "SQL",
      "REST API design",
      "Notion",
      "Miro",
    ],
    "Domains shipped": [
      "Workforce platforms",
      "B2B marketplace",
      "Logistics & supply chain",
      "Payments & lending",
      "HR systems",
      "Loyalty marketing (Japan)",
    ],
  },
  certifications: [
    "Technical Business Analyst",
    "Technical Product Management",
    "Creating API Documentation",
    "Learning SQL Programming",
    "Learning REST APIs",
  ],
};
