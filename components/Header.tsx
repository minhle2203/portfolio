import Link from "next/link";
import Container from "./Container";

const navItems = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/50 bg-zinc-50/80 backdrop-blur dark:border-zinc-800/50 dark:bg-zinc-950/80">
      <Container>
        <nav className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="text-base font-semibold tracking-tight text-zinc-900 transition-opacity hover:opacity-70 dark:text-zinc-50"
          >
            Minh Le
          </Link>
          <ul className="flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
}
