import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import { aboutContent } from "@/lib/about";

export const metadata = {
  title: "About — Minh Le",
};

export default function AboutPage() {
  const { name, headline, location, bio, experience, education, skills, certifications } =
    aboutContent;

  return (
    <Container>
      <FadeIn priority>
      <section className="py-24 sm:py-32">
        <p className="text-sm font-medium uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
          About
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-6xl">
          {name}
        </h1>
        <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
          {headline} · {location}
        </p>

        <div className="mt-12 max-w-3xl space-y-6 text-lg leading-9 text-zinc-700 dark:text-zinc-300">
          {bio.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </section>
      </FadeIn>

      <FadeIn>
      <section className="border-t border-zinc-200 py-16 sm:py-24 dark:border-zinc-800">
        <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
          Experience
        </h2>
        <div className="mt-12 space-y-12">
          {experience.map((job, i) => (
            <article key={i} className="grid grid-cols-1 gap-4 sm:grid-cols-[180px_1fr] sm:gap-8">
              <div>
                <p className="text-sm font-medium text-zinc-900 dark:text-zinc-50">
                  {job.start} — {job.end}
                </p>
                <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                  {job.location}
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
                  {job.role}
                </h3>
                <p className="mt-1 text-base text-zinc-600 dark:text-zinc-400">
                  {job.company}
                </p>
                {job.bullets.length > 0 && (
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-base leading-7 text-zinc-700 dark:text-zinc-300">
                    {job.bullets.map((b, j) => (
                      <li key={j}>{b}</li>
                    ))}
                  </ul>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
      </FadeIn>

      <FadeIn>
      <section className="border-t border-zinc-200 py-16 sm:py-24 dark:border-zinc-800">
        <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
          Skills & methods
        </h2>
        <div className="mt-12 grid gap-12 sm:grid-cols-3">
          {Object.entries(skills).map(([group, items]) => (
            <div key={group}>
              <h3 className="text-sm font-medium uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
                {group}
              </h3>
              <ul className="mt-4 space-y-2 text-base leading-7 text-zinc-700 dark:text-zinc-300">
                {items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
      </FadeIn>

      <FadeIn>
      <section className="border-t border-zinc-200 py-16 sm:py-24 dark:border-zinc-800">
        <div className="grid gap-16 sm:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
              Education
            </h2>
            <div className="mt-12 space-y-8">
              {education.map((edu, i) => (
                <div key={i}>
                  <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                    {edu.period}
                  </p>
                  <p className="mt-1 text-base font-medium text-zinc-900 dark:text-zinc-50">
                    {edu.school}
                  </p>
                  <p className="mt-1 text-base text-zinc-600 dark:text-zinc-400">
                    {edu.degree}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
              Certifications
            </h2>
            <ul className="mt-12 space-y-3 text-base leading-7 text-zinc-700 dark:text-zinc-300">
              {certifications.map((cert) => (
                <li key={cert}>{cert}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      </FadeIn>
    </Container>
  );
}
