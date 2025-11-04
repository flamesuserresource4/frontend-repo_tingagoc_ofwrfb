export default function Footer() {
  return (
    <footer id="contact" className="bg-white text-black">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-md bg-red-600 text-white grid place-items-center font-bold">F</div>
              <div>
                <p className="font-semibold">Flames Corporation</p>
                <p className="text-sm text-black/60">Menciptakan dampak yang berarti</p>
              </div>
            </div>
            <p className="mt-6 text-sm text-black/70 max-w-md">
              Kami bermitra dengan perusahaan besar untuk menghadirkan inovasi, pertumbuhan,
              dan relevansi budaya di era digital.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              {['Jakarta', 'Bandung', 'Surabaya', 'Singapore'].map((c) => (
                <span key={c} className="text-xs bg-black/5 rounded px-2 py-1">{c}</span>
              ))}
            </div>
          </div>

          <div>
            <p className="font-semibold">Layanan</p>
            <ul className="mt-4 space-y-2 text-sm text-black/70">
              <li><a className="hover:text-black hover:underline underline-offset-4" href="#capabilities">Strategi & Konsultasi</a></li>
              <li><a className="hover:text-black hover:underline underline-offset-4" href="#capabilities">Produk Digital</a></li>
              <li><a className="hover:text-black hover:underline underline-offset-4" href="#capabilities">Produksi Konten</a></li>
              <li><a className="hover:text-black hover:underline underline-offset-4" href="#capabilities">Performa & Media</a></li>
            </ul>
          </div>

          <div>
            <p className="font-semibold">Kontak</p>
            <ul className="mt-4 space-y-2 text-sm text-black/70">
              <li>hello@flames.co</li>
              <li>+62 21 555 0123</li>
              <li>Jl. Sudirman No. 88, Jakarta</li>
            </ul>
            <a href="#home" className="mt-6 inline-block bg-red-600 hover:bg-red-500 text-white px-4 py-2 rounded-md text-sm transition">Konsultasi Proyek</a>
          </div>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between border-t border-black/10 pt-6 text-xs text-black/60">
          <p>© {new Date().getFullYear()} Flames Corporation. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-black">Privacy</a>
            <a href="#" className="hover:text-black">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
