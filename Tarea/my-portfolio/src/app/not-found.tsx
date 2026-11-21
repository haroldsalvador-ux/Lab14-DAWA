import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center justify-center px-5 pt-24 text-center">
      <p className="font-display text-8xl text-gold">404</p>
      <h1 className="mt-4 font-display text-4xl text-white">Esta escena no existe</h1>
      <Link href="/" className="mt-8 rounded-full bg-gold px-7 py-3 text-sm font-semibold text-ink">Volver al inicio</Link>
    </div>
  );
}
