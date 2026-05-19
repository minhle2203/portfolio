import Container from "./Container";

const LINKEDIN_URL = "https://www.linkedin.com/in/minhlhproduct/";
const EMAIL = "minhlh.product@gmail.com";

export default function Footer() {
  return (
    <footer className="mt-32 border-t border-zinc-200 py-12 dark:border-zinc-800">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <p className="text-sm font-medium text-zinc-900 dark:text-zinc-50">
              Minh Le
            </p>
            <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
              Product Manager · Available for new opportunities
            </p>
          </div>
          <div className="flex items-center gap-6">
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
            >
              Email
            </a>
          </div>
        </div>
        <p className="mt-8 text-xs text-zinc-500 dark:text-zinc-500">
          © {new Date().getFullYear()} Minh Le. Built with Next.js, deployed on
          Vercel.
        </p>
      </Container>
    </footer>
  );
}
