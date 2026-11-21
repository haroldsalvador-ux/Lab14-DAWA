import { Metadata } from 'next';
import { projects } from '@/lib/data';
import ProjectCard from '@/components/ProjectCard';

export const metadata: Metadata = {
  title: 'Proyectos',
  description: 'Proyectos de Harold Salvador: apps Android, plataformas web con Next.js y React, APIs con FastAPI e infraestructura en AWS.',
  alternates: { canonical: '/projects' },
  openGraph: {
    title: 'Proyectos - Portafolio de Harold Salvador',
    description: 'Apps móviles, plataformas web y nube.',
    images: ['/og-projects.jpg'],
  },
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-7xl px-5 pb-24 pt-36 sm:px-8">
      <p className="fade-up text-xs uppercase tracking-[0.35em] text-gold [animation-delay:1.2s]">Filmografía</p>
      <h1 className="mt-4 font-display text-6xl text-white sm:text-7xl">
        <span className="reveal-line"><span style={{ animationDelay: '1.3s' }}>Mis Proyectos</span></span>
      </h1>
      <p className="fade-up mt-6 max-w-2xl text-lg text-white/60 [animation-delay:1.6s]">
        Una colección de proyectos en los que he trabajado: del celular a la nube.
      </p>
      <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </div>
    </div>
  );
}
