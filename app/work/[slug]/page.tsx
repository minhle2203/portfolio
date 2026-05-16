import { notFound } from "next/navigation";
import Link from "next/link";
import Container from "@/components/Container";
import { getProjectBySlug, projects } from "@/lib/projects";

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
  return {
    title: project ? `${project.title} — Minh Le` : "Case study — Minh Le",
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

  return (
    <Container>
      <article className="py-24 sm:py-32">
        <Link
          href="/work"
          className="text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
        >
          ← All work
        </Link>
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
            <div>
              <dt className="text-xs font-medium uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
                Company
              </dt>
              <dd className="mt-1 text-sm text-zinc-900 dark:text-zinc-50">
                {project.company}
              </dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
                Year
              </dt>
              <dd className="mt-1 text-sm text-zinc-900 dark:text-zinc-50">
                {project.year}
              </dd>
            </div>
          </dl>
        </header>

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
      </article>
    </Container>
  );
}
