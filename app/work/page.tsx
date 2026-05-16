import Container from "@/components/Container";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

export const metadata = {
  title: "Work — Minh Le",
};

export default function WorkPage() {
  return (
    <Container>
      <section className="py-24 sm:py-32">
        <h1 className="text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
          Selected work
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          Product decisions, research, and impact from my work as a Product
          Manager — across fintech, logistics, and workforce platforms.
        </p>
        <div className="mt-16 grid gap-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-16">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </Container>
  );
}
