export default function About() {
  return (
    <section id="about" className="relative py-20 bg-white text-black">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight leading-tight">
              Tentang Kami
            </h2>
            <p className="mt-6 text-lg text-gray-700 max-w-2xl">
              Kami adalah perusahaan teknologi dan media yang mendorong pertumbuhan bisnis
              melalui solusi end-to-end: strategi merek, produk digital, produksi konten,
              media, hingga pengukuran kinerja. Kami percaya pada eksekusi yang elegan,
              sederhana, dan berdampak.
            </p>
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { k: '15+', v: 'Tahun' },
                { k: '50M+', v: 'Audiens' },
                { k: '120+', v: 'Klien' },
                { k: '12', v: 'Kota' },
              ].map((s) => (
                <div key={s.v} className="rounded-lg border border-black/10 p-4">
                  <div className="text-2xl font-semibold text-red-600">{s.k}</div>
                  <div className="text-sm text-gray-600">{s.v}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-tr from-red-600/20 via-red-500/10 to-transparent rounded-2xl" />
              <div className="relative rounded-2xl border border-black/10 bg-white p-6 shadow-xl">
                <div className="grid grid-cols-2 gap-4">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
