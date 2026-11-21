# Lab 14 · Optimización y SEO con Next.js

Desarrollo de Aplicaciones Web Avanzado · Tecsup · Harold Salvador

| Carpeta | Contenido |
|---|---|
| `Laboratorio/my-portfolio` | Guía: meta tags dinámicos, `next/image` con lazy loading, `sitemap.ts` y `robots.ts` |
| `Tarea/my-portfolio` | Portafolio personal con página de contacto, sitemap y robots actualizados, desplegado con dominio propio |

## Resultados de Lighthouse (laboratorio)

| Modo | Performance | Accessibility | Best Practices | SEO |
|---|---|---|---|---|
| Desktop | 100 | 100 | 100 | 100 |
| Mobile | 96 | 100 | 100 | 100 |

## Tarea: qué incluye

- Página **/contact** con formulario validado y su propia metadata.
- **sitemap.xml** con la página de contacto, prioridades e imágenes de cada proyecto.
- **robots.txt** con reglas para Googlebot, bloqueo de rastreadores de IA y `host`.
- Datos estructurados **JSON-LD** (`Person`) y URLs canónicas.
- La URL del sitio sale de `NEXT_PUBLIC_SITE_URL`, así el sitemap y los meta tags usan el dominio real.

## Ejecutar

```bash
cd Tarea/my-portfolio          # o Laboratorio/my-portfolio
npm install
npm run dev
```
