import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/lib/data';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return { title: 'Proyecto no encontrado' };
  }

  return {
    title: project.title,
    description: project.description,
    keywords: project.technologies,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title: project.title,
      description: project.description,
      images: [project.image],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: project.title,
      description: project.description,
      images: [project.image],
    },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const index = projects.indexOf(project);
  const next = projects[(index + 1) % projects.length];

  return (
    <article>
      <section className="relative h-[78vh] min-h-[520px] overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          priority
          className="kenburns object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/20" />
        <div className="vignette absolute inset-0" />
        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-7xl px-5 pb-14 sm:px-8">
          <Link href="/projects" className="fade-up mb-8 inline-block text-sm text-white/70 transition hover:text-gold [animation-delay:1.2s]">
            ← Volver a Proyectos
          </Link>
          <p className="fade-up text-xs uppercase tracking-[0.35em] text-gold [animation-delay:1.3s]">
            {project.context} · {project.year}
          </p>
          <h1 className="mt-4 font-display text-6xl text-white sm:text-8xl">
            <span className="reveal-line"><span style={{ animationDelay: '1.4s' }}>{project.title}</span></span>
          </h1>
        </div>
      </section>

      <div className="mx-auto grid max-w-7xl gap-14 px-5 py-20 sm:px-8 lg:grid-cols-[1.6fr_1fr]">
        <div data-reveal>
          <p className="font-display text-3xl leading-snug text-white">{project.description}</p>
          <ul className="mt-10 space-y-5">
            {project.highlights.map((h) => (
              <li key={h} className="flex gap-4 leading-relaxed text-white/70">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-gold" />
                {h}
              </li>
            ))}
          </ul>
        </div>

        <aside data-reveal className="space-y-8 rounded-2xl border border-line bg-panel p-8">
          <div>
            <h2 className="text-xs uppercase tracking-[0.3em] text-white/50">Tecnologías Utilizadas</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-sm text-gold">{tech}</span>
              ))}
            </div>
          </div>
          {(project.demoUrl || project.githubUrl) && (
            <div className="flex flex-wrap gap-3">
              {project.demoUrl && (
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="rounded-full bg-gold px-6 py-3 text-sm font-semibold text-ink transition hover:bg-white">
                  Ver Demo
                </a>
              )}
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/5">
                  Ver Código
                </a>
              )}
            </div>
          )}
        </aside>
      </div>

      <Link href={`/projects/${next.slug}`} data-reveal className="group block border-t border-line">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-14 sm:px-8">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/40">Siguiente proyecto</p>
            <p className="mt-2 font-display text-5xl text-white transition group-hover:text-gold">{next.title}</p>
          </div>
          <span className="text-4xl text-white/30 transition group-hover:translate-x-2 group-hover:text-gold">→</span>
        </div>
      </Link>
    </article>
  );
}
