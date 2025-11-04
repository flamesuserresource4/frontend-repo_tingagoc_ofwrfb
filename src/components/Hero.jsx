import Spline from '@splinetool/react-spline';
import { ArrowRight, Play, Menu } from 'lucide-react';
import { useState } from 'react';

export default function Hero() {
  const [open, setOpen] = useState(false);

  return (
    <section id="home" className="relative w-full h-[92vh] overflow-hidden bg-black text-white">
      {/* Interactive Spline background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient and vignette overlays that don't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.08),transparent_60%)]" />

      {/* Top navigation */}
      <header className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3 group">
            <div className="h-9 w-9 rounded-md bg-red-600/90 ring-2 ring-white/20 grid place-items-center font-bold">F</div>
            <div className="leading-tight">
              <p className="font-semibold tracking-wide">Flames Corporation</p>
              <p className="text-xs text-white/60">Innovate at Scale</p>
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
            <a href="#about" className="hover:text-white transition">Tentang</a>
            <a href="#capabilities" className="hover:text-white transition">Layanan</a>
            <a href="#contact" className="hover:text-white transition">Kontak</a>
            <a href="#contact" className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white px-4 py-2 rounded-md transition">
              Konsultasi <ArrowRight size={16} />
            </a>
          </nav>
          <button className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md bg-white/10 hover:bg-white/15" aria-label="Toggle menu" onClick={() => setOpen(!open)}>
            <Menu />
          </button>
        </div>
        {open && (
          <div className="md:hidden mx-auto max-w-7xl px-6 pb-4">
            <div className="rounded-lg border border-white/10 bg-black/50 backdrop-blur p-4 flex flex-col gap-3">
              <a onClick={() => setOpen(false)} href="#about" className="py-2">Tentang</a>
              <a onClick={() => setOpen(false)} href="#capabilities" className="py-2">Layanan</a>
              <a onClick={() => setOpen(false)} href="#contact" className="py-2">Kontak</a>
              <a onClick={() => setOpen(false)} href="#contact" className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white px-4 py-2 rounded-md transition w-fit">
                Konsultasi <ArrowRight size={16} />
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero content */}
      <div className="relative z-10 h-full">
        <div className="mx-auto max-w-7xl px-6 h-full flex flex-col items-start justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/40 backdrop-blur px-3 py-1 text-xs text-white/70">
            <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
            Perusahaan Teknologi & Media Terkemuka
          </div>
          <h1 className="mt-5 text-4xl md:text-6xl font-semibold leading-[1.1] tracking-tight">
            Membangun Ekosistem Digital
            <span className="block text-red-500">yang Relevan & Berkelas Dunia</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base md:text-lg text-white/80">
            Kami menggabungkan strategi, kreativitas, dan teknologi untuk
            menghadirkan dampak nyata bagi brand dan masyarakat. Terinspirasi
            dari standar global, berakar kuat pada pasar Indonesia.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
            <a href="#contact" className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white px-6 py-3 rounded-md font-medium transition">
              Mulai Proyek <ArrowRight size={18} />
            </a>
            <a href="#capabilities" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 text-white px-6 py-3 rounded-md font-medium transition">
              <Play size={18} /> Lihat Kapabilitas
            </a>
          </div>

          {/* Logos */}
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 opacity-80">
            {['Telkom', 'Mandiri', 'Gojek', 'Tokopedia', 'Unilever'].map((brand) => (
              <div key={brand} className="text-xs md:text-sm uppercase tracking-wider text-white/70">{brand}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
