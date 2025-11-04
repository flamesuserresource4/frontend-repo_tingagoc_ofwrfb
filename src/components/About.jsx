export default function About() {
  return (
    <section id="about" className="relative py-24 bg-white text-black">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/5 px-3 py-1 text-xs text-black/70">
              <span className="h-2 w-2 rounded-full bg-red-600" />
              Who we are
            </div>
            <h2 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight leading-tight">
              Tentang Kami
            </h2>
            <p className="mt-6 text-lg text-gray-700 max-w-2xl">
              Kami adalah perusahaan teknologi dan media yang mendorong pertumbuhan bisnis
              melalui solusi end-to-end: strategi merek, produk digital, produksi konten,
              media, hingga pengukuran kinerja. Kami percaya pada eksekusi yang elegan,
              sederhana, dan berdampak.
            </p>
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { k: '15+', v: 'Tahun' },
                { k: '50M+', v: 'Audiens' },
                { k: '120+', v: 'Klien' },
                { k: '12', v: 'Kota' },
              ].map((s) => (
                <div key={s.v} className="rounded-xl border border-black/10 bg-white p-5 shadow-sm">
                  <div className="text-2xl font-semibold text-red-600">{s.k}</div>
                  <div className="text-sm text-gray-600">{s.v}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-tr from-red-600/15 via-red-500/10 to-transparent rounded-2xl" />
              <div className="relative rounded-2xl border border-black/10 bg-white p-6 shadow-xl">
                <div className="grid grid-cols-2 gap-3">
                  {['Strategi', 'Produk', 'Konten', 'Media', 'Data', 'Event'].map((cap) => (
                    <div key={cap} className="rounded-md bg-black/5 px-3 py-2 text-sm font-medium text-black/80">
                      {cap}
                    </div>
                  ))}
                </div>
                <p className="mt-6 text-sm text-gray-600">
                  Tim multidisiplin kami berkolaborasi lintas fungsi untuk memastikan setiap
                  inisiatif berjalan konsisten dari ide hingga implementasi.
                </p>
                <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-black/15 to-transparent" />
                <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-700">
                  <li>• Discovery & Insight</li>
                  <li>• Brand Architecture</li>
                  <li>• UX/UI & Engineering</li>
                  <li>• Content & Production</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
