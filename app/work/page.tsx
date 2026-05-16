import Container from "@/components/Container";

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
          Case studies coming soon — product decisions, research, and impact
          from my work as a Product Manager.
        </p>
      </section>
    </Container>
  );
}
