import type { CaseStudyContent } from "./types";
import { weployPayrollContent } from "./weploy-payroll-system";

const allContent: CaseStudyContent[] = [weployPayrollContent];

export function getCaseStudyContent(slug: string) {
  return allContent.find((c) => c.slug === slug);
}
