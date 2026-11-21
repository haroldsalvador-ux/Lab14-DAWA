import Link from 'next/link';
import { personalInfo } from '@/lib/data';

const links = [
  { href: '/', label: 'Inicio' },
  { href: '/projects', label: 'Proyectos' },
  { href: '/about', label: 'Sobre Mí' },
  { href: '/contact', label: 'Contacto' },
];

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-ink/70 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8" aria-label="Principal">
        <Link href="/" className="group flex items-center gap-3">
          <span className="grid size-9 place-items-center rounded-full border border-gold/50 font-display text-lg text-gold transition group-hover:bg-gold group-hover:text-ink">H</span>
          <span className="hidden font-display text-xl tracking-wide text-white sm:inline">{personalInfo.name}</span>
        </Link>
        <ul className="flex items-center gap-1 text-sm sm:gap-2">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="rounded-full px-3 py-2 text-white/65 transition hover:bg-white/5 hover:text-white">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
