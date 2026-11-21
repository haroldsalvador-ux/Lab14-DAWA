import { Metadata } from 'next';
import { Mail, MapPin, Clock } from 'lucide-react';
import { personalInfo } from '@/lib/data';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contacto',
  description: `Contacta a ${personalInfo.fullName} para prácticas preprofesionales, ofertas laborales o proyectos de desarrollo de software.`,
  alternates: { canonical: '/contact' },
  openGraph: {
    title: `Contacto - ${personalInfo.name}`,
    description: 'Disponible para prácticas preprofesionales y proyectos.',
    images: ['/og-image.jpg'],
  },
};

const cards = [
  { icon: Mail, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
  { icon: MapPin, label: 'Ubicación', value: personalInfo.location },
  { icon: Clock, label: 'Disponibilidad', value: 'Inmediata · prácticas preprofesionales' },
];

export default function ContactPage() {
  return (
    <div className="relative overflow-hidden">
      <div className="spotlight -right-40 top-10 size-[480px] bg-gold/15" />
      <div className="relative mx-auto max-w-7xl px-5 pb-24 pt-36 sm:px-8">
      <p className="fade-up text-xs uppercase tracking-[0.35em] text-gold [animation-delay:1.2s]">Contacto</p>
      <h1 className="mt-4 font-display text-6xl leading-none text-white sm:text-8xl">
        <span className="reveal-line"><span style={{ animationDelay: '1.3s' }}>Hablemos de</span></span>
        <span className="reveal-line"><span style={{ animationDelay: '1.45s' }} className="gold-text italic">tu próximo proyecto</span></span>
      </h1>

      <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_1.4fr]">
        <div className="fade-up space-y-4 [animation-delay:1.8s]">
          {cards.map(({ icon: Icon, label, value, href }) => {
            const content = (
              <>
                <span className="grid size-12 shrink-0 place-items-center rounded-full border border-gold/30 text-gold">
                  <Icon className="size-5" aria-hidden />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-[0.2em] text-white/40">{label}</span>
                  <span className="mt-1 block break-all text-white">{value}</span>
                </span>
              </>
            );
            return href ? (
              <a key={label} href={href} className="flex items-center gap-5 rounded-2xl border border-line bg-panel p-6 transition hover:border-gold/40">{content}</a>
            ) : (
              <div key={label} className="flex items-center gap-5 rounded-2xl border border-line bg-panel p-6">{content}</div>
            );
          })}
          <div className="flex gap-3 pt-2">
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/15 px-5 py-2.5 text-sm text-white/75 transition hover:border-gold hover:text-gold">GitHub</a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/15 px-5 py-2.5 text-sm text-white/75 transition hover:border-gold hover:text-gold">LinkedIn</a>
          </div>
        </div>

        <div className="fade-up rounded-3xl border border-line bg-panel/80 p-8 backdrop-blur [animation-delay:2s] sm:p-10">
          <ContactForm to={personalInfo.email} />
        </div>
      </div>
      </div>
    </div>
  );
}
