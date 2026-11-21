import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      data-reveal
      style={{ transitionDelay: `${index * 90}ms` }}
      className="group relative block overflow-hidden rounded-2xl border border-line bg-panel"
    >
      <div className="relative h-60 overflow-hidden">
        {/* Imágenes con lazy loading */}
        <Image
          src={project.image}
          alt={project.title}
          fill
          loading="lazy"
          className="object-cover opacity-80 transition duration-700 group-hover:scale-110 group-hover:opacity-100"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-panel via-panel/30 to-transparent" />
        <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/50 px-3 py-1 text-xs text-white/80 backdrop-blur">
          {project.year}
        </span>
      </div>
      <div className="relative p-6">
        <p className="text-xs uppercase tracking-[0.2em] text-gold/80">{project.context}</p>
        <h3 className="mt-2 font-display text-3xl text-white transition group-hover:text-gold">{project.title}</h3>
        <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-white/60">{project.description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.slice(0, 3).map((tech) => (
            <span key={tech} className="rounded-full border border-line px-3 py-1 text-xs text-white/70">{tech}</span>
          ))}
          {project.technologies.length > 3 && (
            <span className="rounded-full border border-line px-3 py-1 text-xs text-white/50">+{project.technologies.length - 3}</span>
          )}
        </div>
        <span className="absolute bottom-6 right-6 text-xl text-white/30 transition group-hover:translate-x-1 group-hover:text-gold">→</span>
      </div>
    </Link>
  );
}
