import Container from "@/components/Container";

export default function Home() {
  return (
    <Container>
      <section className="flex min-h-[calc(100vh-4rem)] flex-col justify-center py-24 sm:py-32">
        <p className="text-sm font-medium uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
          Product Manager
        </p>
        <h1 className="mt-4 max-w-4xl text-5xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-7xl">
          Hi, I&apos;m Minh.
        </h1>
        <p className="mt-8 max-w-2xl text-xl leading-9 text-zinc-600 dark:text-zinc-400 sm:text-2xl">
          I turn ambiguous problems into shipped solutions. Currently focused on
          fintech, supply chain, and workforce platforms.
        </p>
      </section>
    </Container>
  );
}
