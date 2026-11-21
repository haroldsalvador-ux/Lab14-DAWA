'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

// Activa la animación de los elementos con [data-reveal] cuando entran en pantalla
export default function Reveal() {
  const pathname = usePathname();
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('is-visible'); io.unobserve(e.target); }
      }),
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' }
    );
    // Espera un frame para que la página nueva ya esté en el DOM
    const t = requestAnimationFrame(() =>
      document.querySelectorAll<HTMLElement>('[data-reveal]:not(.is-visible)').forEach((el) => io.observe(el))
    );
    return () => { cancelAnimationFrame(t); io.disconnect(); };
  }, [pathname]);
  return null;
}
