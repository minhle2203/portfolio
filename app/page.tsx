import Link from "next/link";
import Container from "@/components/Container";
import ProjectCard from "@/components/ProjectCard";
import FadeIn from "@/components/FadeIn";
import { getFeaturedProjects } from "@/lib/projects";

export default function Home() {
  const featured = getFeaturedProjects();

  return (
    <>
      <Container>
        <FadeIn>
          <section className="flex min-h-[calc(80vh-4rem)] flex-col justify-center py-24 sm:py-32">
            <p className="text-sm font-medium uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
              Product Manager
            </p>
            <h1 className="mt-4 max-w-4xl text-5xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-7xl">
              Hi, I&apos;m Minh.
            </h1>
            <p className="mt-8 max-w-2xl text-xl leading-9 text-zinc-600 dark:text-zinc-400 sm:text-2xl">
              I turn ambiguous problems into shipped solutions. Currently
              focused on fintech, supply chain, and workforce platforms.
            </p>
          </section>
        </FadeIn>
      </Container>

      <Container>
        <section className="py-16 sm:py-24">
          <FadeIn>
            <div className="flex items-end justify-between">
              <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
                Featured work
              </h2>
              <Link
                href="/work"
                className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
              >
                All work →
              </Link>
            </div>
          </FadeIn>
          <div className="mt-12 grid gap-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-16">
            {featured.map((project, i) => (
              <FadeIn key={project.slug} delay={i * 0.1}>
                <ProjectCard project={project} />
              </FadeIn>
            ))}
          </div>
        </section>
      </Container>

      <Container>
        <FadeIn>
          <section className="py-16 sm:py-24">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
                About
              </h2>
              <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                I&apos;m a Product Owner with 8 years of experience across
                workforce platforms, B2B marketplaces, and loyalty marketing —
                in Vietnam and Japan. I work closely with engineering, design,
                and stakeholders to clarify requirements, ship MVPs, and iterate
                on data.
              </p>
              <Link
                href="/about"
                className="mt-6 inline-block text-sm font-medium text-zinc-900 transition-colors hover:text-zinc-600 dark:text-zinc-50 dark:hover:text-zinc-300"
              >
                More about me →
              </Link>
            </div>
          </section>
        </FadeIn>
      </Container>
    </>
  );
}
