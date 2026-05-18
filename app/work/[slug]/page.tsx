import { notFound } from "next/navigation";
import Link from "next/link";
import Container from "@/components/Container";
import CaseStudySection from "@/components/CaseStudySection";
import FadeIn from "@/components/FadeIn";
import { getProjectBySlug, projects } from "@/lib/projects";
import { getCaseStudyContent } from "@/lib/case-studies";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) {
    return { title: "Case study — Minh Le" };
  }
  const title = `${project.title} — Minh Le`;
  const description = project.summary;
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();
  const content = getCaseStudyContent(slug);

  return (
    <Container>
      <article className="py-24 sm:py-32">
        <Link
          href="/work"
          className="text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
        >
          ← All work
        </Link>
        <FadeIn>
        <header className="mt-8">
          <p className="text-sm font-medium uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
            {project.company} · {project.year}
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-6xl">
            {project.title}
          </h1>
          <p className="mt-6 max-w-3xl text-xl leading-9 text-zinc-600 dark:text-zinc-400">
            {project.summary}
          </p>
          <dl className="mt-10 grid grid-cols-2 gap-6 border-t border-zinc-200 pt-8 sm:grid-cols-4 dark:border-zinc-800">
            <div>
              <dt className="text-xs font-medium uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
                Role
              </dt>
              <dd className="mt-1 text-sm text-zinc-900 dark:text-zinc-50">
                {project.role}
              </dd>
            </div>
            {content?.duration && (
              <div>
                <dt className="text-xs font-medium uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
                  Duration
                </dt>
                <dd className="mt-1 text-sm text-zinc-900 dark:text-zinc-50">
                  {content.duration}
                </dd>
              </div>
            )}
            {content?.team && (
              <div>
                <dt className="text-xs font-medium uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
                  Team
                </dt>
                <dd className="mt-1 text-sm text-zinc-900 dark:text-zinc-50">
                  {content.team}
                </dd>
              </div>
            )}
            {content?.status && (
              <div>
                <dt className="text-xs font-medium uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
                  Status
                </dt>
                <dd className="mt-1 text-sm text-zinc-900 dark:text-zinc-50">
                  {content.status}
                </dd>
              </div>
            )}
          </dl>
        </header>
        </FadeIn>

        {content ? (
          <div className="mt-20 max-w-3xl">
            <FadeIn>
              <p className="text-lg leading-9 text-zinc-700 dark:text-zinc-300">
                {content.context}
              </p>
            </FadeIn>
            {content.sections.map((section, i) => (
              <FadeIn key={i}>
                <CaseStudySection section={section} />
              </FadeIn>
            ))}
          </div>
        ) : (
          <section className="mt-20 max-w-3xl">
            <p className="text-base leading-8 text-zinc-600 dark:text-zinc-400">
              Full case study coming soon — content is being imported from
              internal documentation. Sections will include:
            </p>
            <ul className="mt-6 space-y-2 text-base leading-8 text-zinc-600 dark:text-zinc-400">
              <li>· Context and problem</li>
              <li>· Research and discovery</li>
              <li>· Solution and key decisions</li>
              <li>· Impact and metrics</li>
              <li>· Reflections</li>
            </ul>
          </section>
        )}
      </article>
    </Container>
  );
}
