import LightboxImage from "./LightboxImage";
import type { Section } from "@/lib/case-studies/types";

export default function CaseStudySection({ section }: { section: Section }) {
  switch (section.type) {
    case "heading":
      return (
        <h2 className="mt-20 text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-3xl">
          {section.text}
        </h2>
      );

    case "subheading":
      return (
        <h3 className="mt-12 text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
          {section.text}
        </h3>
      );

    case "text":
      return (
        <p className="mt-6 text-lg leading-9 text-zinc-700 dark:text-zinc-300">
          {section.text}
        </p>
      );

    case "list": {
      const Tag = section.ordered ? "ol" : "ul";
      return (
        <Tag
          className={`mt-6 space-y-3 text-lg leading-8 text-zinc-700 dark:text-zinc-300 ${
            section.ordered ? "list-decimal" : "list-disc"
          } pl-6`}
        >
          {section.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </Tag>
      );
    }

    case "image":
      return (
        <figure className="mt-12">
          <LightboxImage src={section.src} alt={section.alt} />
          {section.caption && (
            <figcaption className="mt-3 text-sm text-zinc-500 dark:text-zinc-400">
              {section.caption}
            </figcaption>
          )}
        </figure>
      );

    case "metrics":
      return (
        <dl className="mt-8 grid grid-cols-2 gap-6 border-y border-zinc-200 py-8 sm:grid-cols-4 dark:border-zinc-800">
          {section.items.map((m, i) => (
            <div key={i}>
              <dt className="text-xs font-medium uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
                {m.label}
              </dt>
              <dd className="mt-2 text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
                {m.value}
              </dd>
            </div>
          ))}
        </dl>
      );

    case "quote":
      return (
        <blockquote className="mt-12 border-l-2 border-zinc-900 pl-6 text-xl italic leading-9 text-zinc-700 dark:border-zinc-50 dark:text-zinc-300">
          {section.text}
        </blockquote>
      );

    case "callout":
      return (
        <div className="mt-8 rounded-xl border border-emerald-200 bg-emerald-50 p-6 text-base leading-8 text-emerald-900 dark:border-emerald-900/50 dark:bg-emerald-950/40 dark:text-emerald-100">
          {section.text}
        </div>
      );

    case "table":
      return (
        <div className="mt-8 -mx-4 overflow-x-auto sm:mx-0">
          <table className="min-w-full divide-y divide-zinc-200 text-sm dark:divide-zinc-800">
            <thead>
              <tr>
                {section.headers.map((h, i) => (
                  <th
                    key={i}
                    className="px-4 py-3 text-left text-xs font-medium uppercase tracking-widest text-zinc-500 dark:text-zinc-400"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
              {section.rows.map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => (
                    <td
                      key={j}
                      className="px-4 py-3 align-top text-zinc-700 dark:text-zinc-300"
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
  }
}
