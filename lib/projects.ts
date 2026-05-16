export type Project = {
  slug: string;
  title: string;
  company: string;
  role: string;
  year: string;
  summary: string;
  accent: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "weploy-payroll-system",
    title: "Weploy Payroll System",
    company: "Weploy",
    role: "Product Owner",
    year: "2023",
    summary:
      "Digitized bi-weekly payroll for 200+ talents — eliminating third-party e-contract costs and cutting Ops workload across the J.P. and Finance teams.",
    accent: "from-indigo-500 to-violet-600",
    featured: true,
  },
  {
    slug: "kilo-3pl-logistics",
    title: "Kilo 3rd-party Logistics",
    company: "Kilo",
    role: "Product Owner",
    year: "2021",
    summary:
      "In-house 3PL solution for Vietnam's supply chain — making delivery transparent for sellers and retailers, targeting 30% adoption and 90% successful delivery rate.",
    accent: "from-emerald-500 to-teal-600",
    featured: true,
  },
  {
    slug: "kilo-payment-method",
    title: "Kilo Payment Method",
    company: "Kilo",
    role: "Product Owner · User Research",
    year: "2021",
    summary:
      "Bank-transfer payment for retailers and sellers — reducing COD risk, cancellations, and unlocking the pilot lending program.",
    accent: "from-amber-500 to-orange-600",
    featured: true,
  },
];

export function getFeaturedProjects() {
  return projects.filter((p) => p.featured);
}

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}
