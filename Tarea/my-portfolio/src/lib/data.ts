import { Project } from '@/types';

export const projects: Project[] = [
  {
    slug: 'impulsa',
    title: 'IMPULSA',
    description:
      'App Android y plataforma web para que los vendedores de abarrotes controlen ventas, gastos e inventario desde el celular, incluso sin internet.',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1400&auto=format&fit=crop',
    technologies: ['Kotlin', 'Jetpack Compose', 'FastAPI', 'PostgreSQL', 'Redis', 'React', 'Docker', 'Gemini'],
    featured: true,
    year: '2026',
    context: 'Proyecto de Fin de Carrera · Tecsup',
    highlights: [
      'App Android nativa con MVVM y Room: registra ventas en segundos y funciona sin conexión.',
      'API REST propia con FastAPI, PostgreSQL 17 y Redis, tokens de acceso y sincronización sin duplicados.',
      'Web en React 19 + TypeScript con la misma cuenta y datos que la app.',
      'Bodeguerito: asistente con IA (Google Gemini) que responde preguntas sobre las ventas.',
    ],
  },
  {
    slug: 'secureauth',
    title: 'SecureAuth',
    description:
      'Sistema de autenticación con NextAuth.js: Google, GitHub y credenciales con bcrypt y bloqueo tras intentos fallidos.',
    image: '/img/secureauth.jpg',
    technologies: ['Next.js', 'NextAuth.js', 'Prisma', 'PostgreSQL', 'bcrypt', 'Tailwind'],
    demoUrl: 'https://lab13-secureauth.vercel.app',
    githubUrl: 'https://github.com/haroldsalvador-ux/Lab13-DAWA',
    featured: true,
    year: '2026',
    context: 'Desarrollo Web Avanzado · Tecsup',
    highlights: [
      'OAuth 2.0 con Google y GitHub, y registro propio con credenciales.',
      'Contraseñas cifradas con bcrypt; la cuenta se bloquea 15 minutos tras 5 intentos fallidos.',
      'Rutas protegidas con el proxy de Next.js 16 y desplegado en Vercel.',
    ],
  },
  {
    slug: 'biblioteca',
    title: 'Biblioteca API',
    description:
      'Sistema de biblioteca con API Routes de Next.js, Prisma y PostgreSQL en Supabase: búsqueda, filtros, paginación y estadísticas.',
    image: '/img/biblioteca.jpg',
    technologies: ['Next.js', 'Prisma', 'Supabase', 'PostgreSQL', 'TypeScript'],
    demoUrl: 'https://lab12-dawa-seven.vercel.app',
    githubUrl: 'https://github.com/haroldsalvador-ux/Lab12-DAWA',
    featured: true,
    year: '2026',
    context: 'Desarrollo Web Avanzado · Tecsup',
    highlights: [
      'Endpoint de búsqueda con filtros por título, género y autor, ordenamiento y paginación.',
      'Estadísticas por autor: primer y último libro, promedio de páginas y géneros.',
      'Dashboard con CRUD completo de autores y libros.',
    ],
  },
  {
    slug: 'infraestructura-aws',
    title: 'Infraestructura en AWS',
    description:
      'Despliegue de aplicaciones en la nube con redes privadas, balanceo de carga, almacenamiento y contenedores.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1400&auto=format&fit=crop',
    technologies: ['AWS EC2', 'VPC', 'Load Balancer', 'S3', 'Docker', 'Linux'],
    featured: false,
    year: '2026',
    context: 'Seguridad en la Nube · Tecsup',
    highlights: [
      'Aplicaciones desplegadas en EC2 dentro de una VPC diseñada por subredes.',
      'Balanceo de carga entre instancias y buckets S3 con reglas de ciclo de vida.',
      'Virtualización y contenedores Docker.',
    ],
  },
  {
    slug: 'apps-multiplataforma',
    title: 'Apps móviles multiplataforma',
    description:
      'App en Flutter con interfaz inspirada en Prime Video y prototipos de alta fidelidad diseñados en Figma y Balsamiq.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1400&auto=format&fit=crop',
    technologies: ['Flutter', 'Dart', 'Swift', 'Figma', 'Balsamiq'],
    featured: false,
    year: '2025 – 2026',
    context: 'Aplicaciones Móviles · Tecsup',
    highlights: [
      'Interfaz tipo streaming en Flutter con navegación y catálogos.',
      'Apps iOS con Swift y SwiftUI en el curso de Móviles Avanzado.',
      'Prototipos y flujos de usuario en Figma y Balsamiq.',
    ],
  },
];

export const personalInfo = {
  name: 'Harold Salvador',
  fullName: 'Harold David Salvador Zarate',
  title: 'Desarrollador de Software · Móvil y Full Stack',
  description:
    'Estudiante de Diseño y Desarrollo de Software en Tecsup. Convierto problemas reales en apps móviles y web que la gente usa de verdad.',
  email: 'zsalvadorharold@gmail.com',
  location: 'Lima, Perú',
  github: 'https://github.com/haroldsalvador-ux',
  linkedin: 'https://linkedin.com/in/harold-david-salvador-zarate-4408b03a8',
  // Dominio gratuito de DuckDNS asociado al proyecto en Vercel
  siteUrl: (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://harold-salvador.duckdns.org').replace(/\/$/, ''),
  avatar: '/img/harold.jpg',
};

export const skills = [
  { group: 'Móvil', items: ['Kotlin', 'Jetpack Compose', 'Room', 'Firebase', 'Swift (iOS)', 'Flutter'] },
  { group: 'Web y backend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'FastAPI', 'Node.js'] },
  { group: 'Datos y nube', items: ['PostgreSQL', 'Redis', 'SQL', 'AWS', 'Docker', 'Git', 'Linux'] },
  { group: 'Diseño y procesos', items: ['Figma', 'Balsamiq', 'Bizagi (BPMN 2.0)'] },
];

export const strengths = [
  { title: 'De principio a fin', text: 'Interfaz, app, API y base de datos: entiendo todo el recorrido.' },
  { title: 'Aprendizaje rápido', text: 'Kotlin, Swift, React y AWS, aprendidos construyendo proyectos.' },
  { title: 'Orientado al usuario', text: 'Mi experiencia atendiendo clientes me enseñó a escuchar primero.' },
];

export const experience = [
  { role: 'Estudiante · Diseño y Desarrollo de Software', place: 'Tecsup', period: '2024 – 2027', text: 'Quinto ciclo de seis. Egreso a mediados de 2027.' },
  { role: 'Asistente Comercial', place: 'Botica Hada · Lima', period: 'Experiencia', text: 'Atención y asesoría a clientes, apoyo en ventas y pedidos, y control del inventario.' },
  { role: 'Atención al Cliente', place: 'Restaurante · Lima', period: 'Experiencia', text: 'Toma y coordinación de pedidos y apoyo en caja en horas de alta demanda.' },
  { role: 'Inglés', place: 'ICPNA', period: 'Graduado', text: 'Nivel básico.' },
];

export const certifications = [
  { name: 'Ciberseguridad y Delitos Informáticos en la Administración Pública', by: 'Universidad ESAN', year: '2026' },
  { name: 'Introducción a la Ciberseguridad', by: 'Cisco Networking Academy', year: '2025' },
  { name: 'Linux Unhatched', by: 'Cisco Networking Academy', year: '2025' },
  { name: 'Conciencia Digital', by: 'Cisco Networking Academy', year: '2025' },
];
