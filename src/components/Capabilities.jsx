import { useRef } from 'react';
import { Rocket, Users, Globe, Building2 } from 'lucide-react';

const items = [
  {
    icon: Rocket,
    title: 'Transformasi Digital',
    desc: 'Merancang dan membangun produk digital yang memecahkan masalah bisnis dengan pengalaman pengguna yang unggul.'
  },
  {
    icon: Users,
    title: 'Brand & Konten',
    desc: 'Strategi merek, produksi konten, dan program kreatif yang menyentuh audiens luas dan relevan secara budaya.'
  },
  {
    icon: Globe,
    title: 'Media & Distribusi',
    desc: 'Perencanaan media lintas kanal, optimasi performa, dan distribusi terukur yang mendorong outcome.'
  },
  {
    icon: Building2,
    title: 'Kemitraan & Aktivasi',
    desc: 'Kolaborasi dengan brand, komunitas, dan ekosistem untuk menciptakan pengalaman yang berdampak.'
  },
];

function CapabilityCard({ icon: Icon, title, desc }) {
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    el.style.setProperty('--x', `${x}px`);
    el.style.setProperty('--y', `${y}px`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/[0.07] transition overflow-hidden will-change-transform hover:-translate-y-1"
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition pointer-events-none bg-[radial-gradient(600px_circle_at_var(--x,50%)_var(--y,50%),rgba(239,68,68,0.2),transparent_40%)]" />
      <div className="flex items-center gap-3">
        <div className="h-11 w-11 rounded-lg bg-red-600/20 text-red-400 grid place-items-center">
          <Icon />
        </div>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <p className="mt-4 text-sm text-white/75">{desc}</p>
      <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <button className="mt-4 text-sm font-medium text-red-400 hover:text-red-300">Pelajari lebih lanjut →</button>
    </div>
  );
}

export default function Capabilities() {
  return (
    <section id="capabilities" className="relative py-24 bg-black text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70">
              <span className="h-2 w-2 rounded-full bg-red-500" />
              What we do
            </div>
            <h2 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight">Kapabilitas Inti</h2>
            <p className="mt-4 max-w-2xl text-white/70">
              Kami memadukan strategi, kreativitas, dan teknologi modern untuk menghadirkan solusi terintegrasi.
            </p>
          </div>
          <a href="#contact" className="hidden md:inline-flex items-center gap-2 bg-white text-black hover:bg-white/90 px-5 py-3 rounded-md font-medium transition">
            Hubungi Kami
          </a>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {items.map((item) => (
            <CapabilityCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
