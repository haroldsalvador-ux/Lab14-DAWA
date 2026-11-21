import { Metadata } from 'next';
import Image from 'next/image';
import { personalInfo, skills, experience, certifications } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Sobre Mí',
  description: `Conoce más sobre ${personalInfo.fullName}, ${personalInfo.title}: habilidades, trayectoria y certificaciones.`,
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-5 pb-24 pt-36 sm:px-8">
      <div className="grid items-start gap-14 lg:grid-cols-[1fr_1.4fr]">
        <div className="fade-up relative mx-auto w-full max-w-[400px] [animation-delay:1.3s]">
          <div className="relative aspect-square overflow-hidden rounded-[2rem] border border-white/10">
            <Image
              src={personalInfo.avatar}
              alt={personalInfo.fullName}
              fill
              className="object-cover"
              loading="lazy"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
          <div className="absolute -bottom-5 left-6 rounded-full border border-gold/40 bg-ink px-5 py-2 text-sm text-gold">
            Disponibilidad inmediata
          </div>
        </div>

        <div>
          <p className="fade-up text-xs uppercase tracking-[0.35em] text-gold [animation-delay:1.2s]">Sobre Mí</p>
          <h1 className="mt-4 font-display text-5xl leading-tight text-white sm:text-6xl">
            <span className="reveal-line"><span style={{ animationDelay: '1.3s' }}>¡Hola! Soy</span></span>
            <span className="reveal-line"><span style={{ animationDelay: '1.45s' }} className="gold-text italic">{personalInfo.fullName}</span></span>
          </h1>
          <div className="fade-up mt-8 space-y-5 text-lg leading-relaxed text-white/70 [animation-delay:1.8s]">
            <p>
              Estudio el quinto ciclo de <strong className="text-white">Diseño y Desarrollo de Software en Tecsup</strong>, enfocado en
              desarrollo móvil y web. Me motiva convertir problemas reales en productos que la gente use de verdad.
            </p>
            <p>
              Así nació <strong className="text-white">IMPULSA</strong>: muchos vendedores de abarrotes llevan sus ventas en un cuaderno o
              de memoria, y desarrollé una app y una web para que controlen su negocio desde el celular.
            </p>
            <p>
              Mi experiencia en atención al cliente me enseñó a escuchar primero a quien va a usar lo que construyo. Busco prácticas
              preprofesionales donde aportar desde el primer día.
            </p>
          </div>
        </div>
      </div>

      {/* Habilidades */}
      <section className="mt-28">
        <h2 data-reveal className="font-display text-5xl text-white">Habilidades Técnicas</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {skills.map((s, i) => (
            <div key={s.group} data-reveal style={{ transitionDelay: `${i * 100}ms` }} className="rounded-2xl border border-line bg-panel p-6">
              <h3 className="text-xs uppercase tracking-[0.25em] text-gold">{s.group}</h3>
              <ul className="mt-4 space-y-2 text-white/75">
                {s.items.map((it) => <li key={it}>{it}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Trayectoria */}
      <section className="mt-28 grid gap-14 lg:grid-cols-2">
        <div>
          <h2 data-reveal className="font-display text-5xl text-white">Trayectoria</h2>
          <ol className="mt-10 border-l border-line">
            {experience.map((e, i) => (
              <li key={e.role} data-reveal style={{ transitionDelay: `${i * 100}ms` }} className="relative pb-10 pl-8 last:pb-0">
                <span className="absolute -left-[5px] top-2 size-2.5 rounded-full bg-gold" />
                <p className="text-xs uppercase tracking-[0.2em] text-white/40">{e.period}</p>
                <h3 className="mt-1 font-display text-2xl text-white">{e.role}</h3>
                <p className="text-sm text-gold/80">{e.place}</p>
                <p className="mt-2 text-white/60">{e.text}</p>
              </li>
            ))}
          </ol>
        </div>
        <div>
          <h2 data-reveal className="font-display text-5xl text-white">Certificaciones</h2>
          <ul className="mt-10 space-y-4">
            {certifications.map((c, i) => (
              <li key={c.name} data-reveal style={{ transitionDelay: `${i * 100}ms` }} className="rounded-2xl border border-line bg-panel p-6">
                <p className="font-medium text-white">{c.name}</p>
                <p className="mt-1 text-sm text-white/50">{c.by} · {c.year}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
