import Link from 'next/link';
import { personalInfo } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="border-t border-line bg-black/40">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-display text-4xl text-white sm:text-5xl">¿Construimos algo juntos?</p>
            <Link href="/contact" className="mt-5 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-ink transition hover:bg-white">
              Escríbeme →
            </Link>
          </div>
          <div className="flex gap-6 text-sm">
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-white/60 transition hover:text-white" aria-label="GitHub">GitHub</a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-white/60 transition hover:text-white" aria-label="LinkedIn">LinkedIn</a>
            <a href={`mailto:${personalInfo.email}`} className="text-white/60 transition hover:text-white" aria-label="Email">Email</a>
          </div>
        </div>
        <p className="mt-12 border-t border-line pt-6 text-xs text-white/40">
          © {new Date().getFullYear()} {personalInfo.fullName}. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
