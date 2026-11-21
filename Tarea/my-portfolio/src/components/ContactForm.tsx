'use client';

import { useState } from 'react';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactForm({ to }: { to: string }) {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const next: Record<string, string> = {};
    if (form.name.trim().length < 2) next.name = 'Escribe tu nombre';
    if (!EMAIL_REGEX.test(form.email.trim())) next.email = 'Email inválido';
    if (!form.subject) next.subject = 'Elige un motivo';
    if (form.message.trim().length < 10) next.message = 'El mensaje debe tener al menos 10 caracteres';
    setErrors(next);
    if (Object.keys(next).length) return;

    // Abre el cliente de correo del visitante con el mensaje ya redactado
    const body = `${form.message}\n\n— ${form.name} (${form.email})`;
    window.location.href = `mailto:${to}?subject=${encodeURIComponent(`[Portafolio] ${form.subject}`)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  const field =
    'w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-white placeholder:text-white/30 outline-none transition focus:border-gold/60 focus:bg-white/[0.06]';
  const err = (k: string) => errors[k] && <span className="mt-1.5 block text-xs text-red-300">{errors[k]}</span>;

  return (
    <form onSubmit={submit} noValidate className="space-y-5" aria-label="Formulario de contacto">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-xs uppercase tracking-[0.2em] text-white/50">Nombre</span>
          <input className={field} value={form.name} onChange={set('name')} placeholder="Tu nombre" autoComplete="name" />
          {err('name')}
        </label>
        <label className="block">
          <span className="mb-2 block text-xs uppercase tracking-[0.2em] text-white/50">Email</span>
          <input className={field} type="email" value={form.email} onChange={set('email')} placeholder="tu@correo.com" autoComplete="email" />
          {err('email')}
        </label>
      </div>
      <label className="block">
        <span className="mb-2 block text-xs uppercase tracking-[0.2em] text-white/50">Motivo</span>
        <select className={field} value={form.subject} onChange={set('subject')}>
          <option value="" className="bg-panel">Selecciona un motivo…</option>
          <option className="bg-panel">Prácticas preprofesionales</option>
          <option className="bg-panel">Oferta laboral</option>
          <option className="bg-panel">Proyecto freelance</option>
          <option className="bg-panel">Otro</option>
        </select>
        {err('subject')}
      </label>
      <label className="block">
        <span className="mb-2 block text-xs uppercase tracking-[0.2em] text-white/50">Mensaje</span>
        <textarea className={`${field} min-h-40 resize-y`} value={form.message} onChange={set('message')} placeholder="Cuéntame sobre tu proyecto o propuesta…" />
        {err('message')}
      </label>
      <button type="submit" className="w-full rounded-full bg-gold py-4 text-sm font-semibold text-ink transition hover:bg-white sm:w-auto sm:px-10">
        Enviar mensaje
      </button>
      {sent && (
        <p role="status" className="rounded-xl border border-gold/30 bg-gold/10 px-4 py-3 text-sm text-gold">
          ¡Listo! Se abrió tu aplicación de correo con el mensaje preparado. Solo presiona enviar.
        </p>
      )}
    </form>
  );
}
