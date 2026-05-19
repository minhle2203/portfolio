import Link from "next/link";
import type { Project } from "@/lib/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group block"
    >
      <div
        className={`relative aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br ${project.accent} transition-transform duration-500 group-hover:scale-[1.02]`}
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-zinc-900/40 via-zinc-900/10 to-transparent"
        />
        <div className="absolute bottom-0 left-0 p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-white">
            {project.company} · {project.year}
          </p>
          <h3 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">
            {project.title}
          </h3>
        </div>
      </div>
      <div className="mt-5">
        <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
          {project.role}
        </p>
        <p className="mt-2 text-base leading-7 text-zinc-700 dark:text-zinc-300">
          {project.summary}
        </p>
        <p className="mt-4 text-sm font-medium text-zinc-900 transition-colors group-hover:text-zinc-600 dark:text-zinc-50 dark:group-hover:text-zinc-300">
          Read case study →
        </p>
      </div>
    </Link>
  );
}
