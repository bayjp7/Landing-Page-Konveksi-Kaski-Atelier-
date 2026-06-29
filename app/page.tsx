import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">
      
      {/* 1. NAVBAR */}
      <nav className="border-b border-stone-200 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-xl font-serif font-bold tracking-widest text-stone-800">
            KASKI ATELIER
          </span>
          <div className="hidden md:flex space-x-8 text-sm font-medium text-stone-600">
            <a href="#tentang" className="hover:text-stone-900 transition">Tentang Kami</a>
            <a href="#keunggulan" className="hover:text-stone-900 transition">Keunggulan</a>
            <a href="#layanan" className="hover:text-stone-900 transition">Layanan</a>
          </div>
          <Link 
            href="https://wa.me/6281234567890?text=Halo%20Kaski%20Atelier,%20saya%20tertarik%20maklon%20gamis" 
            target="_blank"
            className="bg-stone-800 hover:bg-stone-700 text-white px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider transition"
          >
            KONSULTASI GRATIS
          </Link>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <header className="max-w-6xl mx-auto px-6 py-20 text-center md:py-32">
        <span className="text-xs font-bold tracking-widest text-amber-700 bg-amber-50 px-3 py-1 rounded-full uppercase">
          Premium Islamic Fashion Manufacturer
        </span>
        <h1 className="mt-6 text-4xl md:text-6xl font-serif font-light text-stone-950 leading-tight max-w-4xl mx-auto">
          Wujudkan Brand Gamis Impian Anda Bersama <span className="font-normal italic text-amber-800">Kaski Atelier</span>
        </h1>
        <p className="mt-6 text-base md:text-lg text-stone-600 max-w-2xl mx-auto font-light leading-relaxed">
          Konveksi & maklon spesialis gamis islami premium. Kami bantu pemilik brand fashion muslim memproduksi pakaian berkualitas butik dengan jahitan rapi, bahan premium, dan pola yang syar'i.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <Link 
            href="https://wa.me/6281234567890"
            target="_blank"
            className="bg-amber-800 hover:bg-amber-900 text-white font-medium px-8 py-3.5 rounded-md shadow-md transition"
          >
            Mulai Produksi Sekarang
          </Link>
          <a 
            href="#keunggulan" 
            className="bg-white border border-stone-300 text-stone-700 hover:bg-stone-50 font-medium px-8 py-3.5 rounded-md transition"
          >
            Lihat Keunggulan Kami
          </a>
        </div>
      </header>

      {/* 3. VALUE PROPOSITION / KEUNGGULAN */}
      <section id="keunggulan" className="bg-stone-100 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-serif text-stone-900">Mengapa Memilih Kaski Atelier?</h2>
            <p className="text-stone-500 mt-2 font-light">Kami mengutamakan kualitas demi menjaga reputasi brand fashion muslim Anda.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-stone-200/60">
              <div className="w-12 h-12 bg-amber-50 text-amber-800 rounded-lg flex items-center justify-center font-bold text-lg mb-6">🪡</div>
              <h3 className="text-lg font-medium text-stone-900 mb-2">Kualitas Jahitan Butik</h3>
              <p className="text-stone-600 text-sm font-light leading-relaxed">
                Setiap gamis dijahit oleh tim ahli dengan standar jahit halus (bukan jahit konveksi massal asal-asalan) sehingga kuat dan rapi.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-stone-200/60">
              <div className="w-12 h-12 bg-amber-50 text-amber-800 rounded-lg flex items-center justify-center font-bold text-lg mb-6">📏</div>
              <h3 className="text-lg font-medium text-stone-900 mb-2">Pola Syar'i & Anggun</h3>
              <p className="text-stone-600 text-sm font-light leading-relaxed">
                Kami memahami standar busana islami. Potongan gamis longgar, tidak menerawang, namun tetap jatuh anggun saat dikenakan.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-stone-200/60">
              <div className="w-12 h-12 bg-amber-50 text-amber-800 rounded-lg flex items-center justify-center font-bold text-lg mb-6">🤝</div>
              <h3 className="text-lg font-medium text-stone-900 mb-2">Konsultasi Desain & Bahan</h3>
              <p className="text-stone-600 text-sm font-light leading-relaxed">
                Belum punya bahan atau pola? Tim kami siap membantu mencarikan kain terbaik mulai dari Silk, Ceruti, hingga Katun Premium.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CALL TO ACTION */}
      <section className="bg-stone-900 text-white py-16 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-serif mb-4">Siap Meluncurkan Koleksi Gamis Terbaru Anda?</h2>
          <p className="text-stone-400 font-light mb-8 max-w-lg mx-auto text-sm md:text-base">
            Minimal kuantitas produksi (MOQ) rendah, sangat cocok untuk pemula yang baru memulai bisnis fashion muslim.
          </p>
          <Link 
            href="https://wa.me/6281234567890"
            target="_blank"
            className="bg-amber-600 hover:bg-amber-700 text-white font-medium px-8 py-3.5 rounded-md shadow-lg inline-block transition"
          >
            Hubungi Admin Via WhatsApp
          </Link>
        </div>
      </section>

      {/* 5. FOOTER */}
      <footer className="border-t border-stone-200 py-8 text-center text-xs text-stone-500">
        <p>&copy; 2026 Kaski Atelier. All rights reserved. Spesialis Konveksi Gamis Islami.</p>
      </footer>

    </div>
  );
}