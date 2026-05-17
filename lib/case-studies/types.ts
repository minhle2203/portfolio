export type Section =
  | { type: "heading"; text: string }
  | { type: "subheading"; text: string }
  | { type: "text"; text: string }
  | { type: "list"; items: string[]; ordered?: boolean }
  | { type: "image"; src: string; alt: string; caption?: string }
  | { type: "metrics"; items: { label: string; value: string }[] }
  | { type: "quote"; text: string }
  | { type: "callout"; text: string }
  | { type: "table"; headers: string[]; rows: string[][] };

export type CaseStudyContent = {
  slug: string;
  duration?: string;
  team?: string;
  status?: string;
  context: string;
  sections: Section[];
};
