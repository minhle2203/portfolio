import type { CaseStudyContent } from "./types";
import { weployPayrollContent } from "./weploy-payroll-system";
import { kilo3plContent } from "./kilo-3pl-logistics";
import { kiloPaymentContent } from "./kilo-payment-method";

const allContent: CaseStudyContent[] = [
  weployPayrollContent,
  kilo3plContent,
  kiloPaymentContent,
];

export function getCaseStudyContent(slug: string) {
  return allContent.find((c) => c.slug === slug);
}
