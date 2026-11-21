import Image from 'next/image';
import Link from 'next/link';
import { projects, personalInfo, skills, strengths } from '@/lib/data';
import ProjectCard from '@/components/ProjectCard';

const stats = [
  { value: '5.º', label: 'ciclo en Tecsup' },
  { value: '4', label: 'versiones de IMPULSA' },
  { value: '4', label: 'certificaciones' },
  { value: '2027', label: 'egreso' },
];

export default function Home() {
  const featuredProjects = projects.filter((p) => p.featured);
  const allSkills = skills.flatMap((s) => s.items);

  return (
    <>
      {/* Hero cinemático */}
      <section className="relative isolate flex min-h-screen items-center overflow-hidden pt-24">
        <div className="spotlight -left-40 top-20 size-[520px] bg-glow/25" />
        <div className="spotlight -right-20 bottom-0 size-[460px] bg-gold/20 [animation-delay:-6s]" />
        <div className="vignette absolute inset-0 -z-10" />

        <div className="mx-auto grid w-full max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.25fr_1fr]">
          <div>
            <p className="fade-up text-xs uppercase tracking-[0.35em] text-gold [animation-delay:1.2s]">
              Portafolio · {personalInfo.location}
            </p>
            <h1 className="mt-6 font-display text-6xl leading-[0.95] text-white sm:text-7xl lg:text-8xl">
              <span className="reveal-line"><span style={{ animationDelay: '1.35s' }}>Harold</span></span>
              <span className="reveal-line"><span style={{ animationDelay: '1.5s' }} className="gold-text italic">Salvador</span></span>
            </h1>
            <p className="fade-up mt-8 max-w-xl text-lg leading-relaxed text-white/70 [animation-delay:1.9s]">
              {personalInfo.description}
            </p>
            <div className="fade-up mt-10 flex flex-wrap gap-4 [animation-delay:2.1s]">
              <Link href="/projects" className="rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-ink transition hover:bg-white">
                Ver Proyectos
              </Link>
              <Link href="/about" className="rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition hover:border-white hover:bg-white/5">
                Sobre Mí
              </Link>
            </div>
          </div>

          <div className="fade-up relative mx-auto w-full max-w-[360px] [animation-delay:1.6s]">
            <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-gold/30 via-transparent to-glow/30 blur-2xl" />
            <div className="relative aspect-square overflow-hidden rounded-[2rem] border border-white/10">
              <Image
                src={personalInfo.avatar}
                alt={personalInfo.fullName}
                fill
                priority
                sizes="(max-width: 1024px) 80vw, 360px"
                className="kenburns-soft object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="font-display text-2xl text-white">{personalInfo.fullName}</p>
                <p className="text-sm text-gold">{personalInfo.title}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="fade-up absolute bottom-8 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.3em] text-white/40 [animation-delay:2.6s]">
          Desliza ↓
        </div>
      </section>

      {/* Cinta de tecnologías */}
      <div className="overflow-hidden border-y border-line bg-panel/60 py-5" aria-label="Tecnologías">
        <div className="marquee flex w-max gap-12 whitespace-nowrap font-display text-3xl text-white/35">
          {[...allSkills, ...allSkills].map((s, i) => (
            <span key={i}>{s} <span className="text-gold/60">✦</span></span>
          ))}
        </div>
      </div>

      {/* Cifras */}
      <section className="mx-auto grid max-w-7xl grid-cols-2 gap-px overflow-hidden px-5 py-20 sm:px-8 lg:grid-cols-4">
        {stats.map((s, i) => (
          <div key={s.label} data-reveal style={{ transitionDelay: `${i * 100}ms` }} className="border-l border-line px-6 py-4">
            <p className="font-display text-6xl text-white">{s.value}</p>
            <p className="mt-2 text-sm uppercase tracking-[0.2em] text-white/50">{s.label}</p>
          </div>
        ))}
      </section>

      {/* Proyectos destacados */}
      <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8">
        <div data-reveal className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-gold">Selección</p>
            <h2 className="mt-3 font-display text-5xl text-white sm:text-6xl">Proyectos Destacados</h2>
          </div>
          <Link href="/projects" className="text-sm text-white/60 transition hover:text-gold">Ver todos →</Link>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </section>

      {/* Fortalezas */}
      <section className="border-t border-line bg-panel/40">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-24 sm:px-8 lg:grid-cols-3">
          {strengths.map((s, i) => (
            <div key={s.title} data-reveal style={{ transitionDelay: `${i * 120}ms` }}>
              <p className="font-display text-5xl text-gold/40">0{i + 1}</p>
              <h3 className="mt-4 font-display text-3xl text-white">{s.title}</h3>
              <p className="mt-3 leading-relaxed text-white/60">{s.text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
