"use client";

import { useState } from "react";

const WA_LINK =
  "https://wa.me/6281311308427?text=Halo%20Kaski%20Atelier,%20saya%20tertarik%20untuk%20konsultasi%20produksi%20busana.";
const IG_LINK = "https://www.instagram.com/kaski.atelier?igsh=MWFpMXQ4aWEwZGR5eg==";

const NAV_LINKS = [
  { label: "Tentang Kami", href: "#tentang" },
  { label: "Layanan", href: "#layanan" },
  { label: "Inovasi Produk", href: "#produk" },
  { label: "Tim Kami", href: "#tim" },
  { label: "Rekam Jejak", href: "#rekam-jejak" },
  { label: "Kontak", href: "#kontak" },
];

const SERVICES = [
  {
    title: "Ready-to-Wear",
    desc:
      "Koleksi busana modest siap pakai dengan desain khas Kaski yang memadukan unsur wastra etnik dan gaya modern classic casual — siap dibeli dan langsung digunakan tanpa penyesuaian.",
  },
  {
    title: "Custom Order",
    desc:
      "Layanan pembuatan busana personal seperti gaun, kebaya, dan seragam, beserta pelengkap seperti hijab, pashmina, dan mukena — disesuaikan ukuran, warna, detail kain, hingga jenis wastra sesuai kebutuhan Anda.",
  },
  {
    title: "Konveksi Profesional",
    desc:
      "Layanan produksi skala besar dan komunitas — seragam korporat, koleksi organisasi, hingga kebutuhan instansi. Setiap helai diproses dengan standar kualitas butik, presisi jahitan, dan ketepatan waktu produksi.",
  },
];

const PRODUCTS = [
  {
    title: "Kaf Semi Jacket",
    desc:
      "Konsep urban modern berpadu motif tradisional Nusantara. Dibuat dari kain perca sisa produksi Kaski yang sustainable, dengan potongan simpel, warna kontras (navy, biru muda, putih, maroon), dan sentuhan motif batik & tenun.",
  },
  {
    title: "Kemeja Sashiko",
    desc:
      "Desain minimalis dengan detail Batik Depok yang dijahit tangan menggunakan teknik sashiko. Sentuhan handmade menjadikan setiap kemeja unik dan autentik.",
  },
];

const TEAM = [
  { name: "Latifah", role: "Owner Kaski Atelier" },
  { name: "Kinanti", role: "Manajer" },
  { name: "Gunawan", role: "Pembimbing" },
  { name: "Neetha", role: "Keuangan" },
  { name: "Kafka", role: "Marketing" },
  { name: "Aep Saipudin", role: "Tim Produksi" },
];

const GALLERY_CAPTIONS = [
  "Koleksi Wastra Etnik — Modest Wear",
  "Indonesia Fashion Week 2025",
  "Kemeja Sashiko Handmade",
  "Kaf Semi Jacket — Eksotika Urban Nusantara",
  "Fashion Show IN2MF 2025",
  "Layanan Konveksi Skala Besar",
];

const EVENTS = [
  "Indonesia Fashion Week, Cendrawasih Hall JCC (2025)",
  "IN2MF — Indonesia International Modest Fashion (2024 & 2025)",
  "Ramadhan Fashion Parade, Margo City Depok (2024 & 2025)",
  "Fashion Show & Exhibition by Designer EOMF, DPR RI (2025)",
  "Exhibition Karya Kreatif Jawa Barat, Trans Convention Center Bandung (2025)",
  "APEKSI 2024",
  "Fashion Show Anjungan Jawa Barat, TMII Jakarta (2023)",
  "DEFF – Depok Fashion Show Festival (2022)",
];

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.39 1.26 4.81L2 22l5.41-1.36a9.86 9.86 0 0 0 4.63 1.18h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.13-2.9-7C17.18 3.03 14.69 2 12.04 2zm0 18.06h-.01a8.18 8.18 0 0 1-4.17-1.14l-.3-.18-3.1.78.83-3.02-.2-.31a8.15 8.15 0 0 1-1.25-4.3c0-4.51 3.68-8.18 8.2-8.18 2.19 0 4.25.85 5.8 2.4a8.13 8.13 0 0 1 2.4 5.79c0 4.52-3.68 8.16-8.2 8.16zm4.49-6.13c-.25-.12-1.46-.72-1.68-.8-.23-.08-.39-.12-.56.12-.16.25-.64.8-.78.96-.14.16-.29.18-.54.06-.25-.12-1.04-.38-1.99-1.22-.74-.65-1.23-1.46-1.38-1.71-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.16-.25.24-.41.08-.16.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.42-.14-.01-.31-.01-.48-.01-.16 0-.43.06-.66.31-.23.25-.86.84-.86 2.04 0 1.2.88 2.37 1 2.53.12.16 1.73 2.65 4.2 3.71.59.25 1.05.4 1.41.52.59.19 1.13.16 1.55.1.47-.07 1.46-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.28z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.71 3.71 0 0 1-1.38-.9 3.71 3.71 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41 1.27-.06 1.65-.07 4.85-.07M12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.79.31-1.46.72-2.13 1.39A5.86 5.86 0 0 0 .63 4.14C.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.31.79.72 1.46 1.39 2.13.67.67 1.34 1.08 2.13 1.39.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56.79-.31 1.46-.72 2.13-1.39.67-.67 1.08-1.34 1.39-2.13.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.86 5.86 0 0 0-1.39-2.13A5.86 5.86 0 0 0 19.86.63c-.76-.3-1.64-.5-2.91-.56C15.67.01 15.26 0 12 0zm0 5.84A6.16 6.16 0 1 0 12 18.16 6.16 6.16 0 0 0 12 5.84zm0 10.16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.41-10.4a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z" />
    </svg>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-stone-50 text-stone-800 font-sans">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 bg-stone-50/90 backdrop-blur border-b border-amber-900/10">
        <nav className="max-w-7xl mx-auto px-5 sm:px-8 py-4 flex items-center justify-between">
          <a href="#" className="flex flex-col leading-none">
            <span className="text-2xl font-serif italic text-emerald-800">
              Kaski
            </span>
            <span className="text-xs tracking-[0.3em] uppercase text-amber-700 -mt-1">
              Atelier
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-stone-600 hover:text-amber-800 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a
              href={IG_LINK}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Kaski Atelier"
              className="text-stone-500 hover:text-amber-800 transition-colors"
            >
              <InstagramIcon className="w-5 h-5" />
            </a>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-amber-800 hover:bg-amber-900 text-amber-50 text-sm font-semibold px-5 py-2.5 rounded-full transition-colors shadow-sm"
            >
              <WhatsAppIcon className="w-4 h-4" />
              Konsultasi Gratis
            </a>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-stone-700"
            aria-label="Buka menu"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-7 h-7">
              {menuOpen ? (
                <path strokeWidth="2" strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path strokeWidth="2" strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </nav>

        {menuOpen && (
          <div className="md:hidden border-t border-amber-900/10 bg-stone-50 px-5 py-4 flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-stone-700 font-medium"
              >
                {link.label}
              </a>
            ))}
            <div className="flex items-center gap-4 pt-2">
              <a
                href={IG_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-500"
                aria-label="Instagram Kaski Atelier"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-amber-800 hover:bg-amber-900 text-amber-50 text-sm font-semibold px-5 py-2.5 rounded-full"
              >
                <WhatsAppIcon className="w-4 h-4" />
                Konsultasi Gratis
              </a>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-stone-100 via-stone-50 to-stone-50">
        <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle_at_20%_20%,#92400e_0,transparent_45%),radial-gradient(circle_at_80%_60%,#065f46_0,transparent_45%)]" />
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block text-xs tracking-[0.2em] uppercase text-amber-700 font-semibold bg-amber-100 px-4 py-1.5 rounded-full mb-6">
              Sejak 1997 · Berdiri Resmi 2018, Depok
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl leading-tight text-stone-900">
              Warna Etnik,
              <br />
              <span className="text-amber-800 italic">Gaya Otentik</span>
            </h1>
            <p className="mt-6 text-stone-600 text-lg leading-relaxed max-w-xl">
              Kaski Atelier menghadirkan modest fashion bergaya{" "}
              <span className="font-semibold text-stone-800">
                Classic Casual
              </span>{" "}
              dengan sentuhan wastra etnik lokal — memadukan budaya dan
              modernitas dalam setiap busana yang elegan, nyaman, dan
              berkarakter.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-amber-800 hover:bg-amber-900 text-amber-50 font-semibold px-7 py-3.5 rounded-full transition-colors shadow-md shadow-amber-900/20"
              >
                <WhatsAppIcon className="w-5 h-5" />
                Konsultasi Gratis via WhatsApp
              </a>
              <a
                href="#layanan"
                className="inline-flex items-center justify-center gap-2 border border-stone-300 hover:border-amber-700 text-stone-700 hover:text-amber-800 font-semibold px-7 py-3.5 rounded-full transition-colors"
              >
                Lihat Layanan Kami
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-emerald-900 via-emerald-800 to-amber-900 shadow-2xl flex items-center justify-center overflow-hidden">
              <div className="text-center px-10">
                <p className="font-serif italic text-amber-100 text-3xl mb-2">
                  Kaski
                </p>
                <p className="tracking-[0.4em] uppercase text-emerald-200 text-sm">
                  Atelier
                </p>
                <div className="mt-8 h-px w-16 bg-amber-300/50 mx-auto" />
                <p className="mt-8 text-stone-100/80 text-sm leading-relaxed">
                  Batik Depok · Motif Gong Sibolong
                  <br />
                  Ikan Memphis · Irisan Belimbing · Tugu
                </p>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl px-6 py-4 hidden sm:block">
              <p className="text-2xl font-bold text-amber-800">25+</p>
              <p className="text-xs text-stone-500 mt-0.5 max-w-[140px]">
                Event &amp; fashion show sejak 2022
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TENTANG KAMI */}
      <section id="tentang" className="max-w-7xl mx-auto px-5 sm:px-8 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-14 items-start">
          <div>
            <span className="text-xs tracking-[0.2em] uppercase text-amber-700 font-semibold">
              Tentang Kami
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mt-3 mb-6">
              Warisan Budaya dalam Setiap Jahitan
            </h2>
            <p className="text-stone-600 leading-relaxed mb-4">
              Kaski Atelier merupakan brand modest fashion yang berlokasi di
              Depok, Jawa Barat, didirikan secara resmi pada tahun 2018 oleh{" "}
              <span className="font-semibold text-stone-800">
                Ibu Latifah (Efa)
              </span>
              . Meski resmi berdiri pada 2018, pengalaman beliau di dunia
              fashion telah dimulai sejak tahun 1997.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              Nama &ldquo;Kaski&rdquo; berasal dari penggabungan nama ketiga
              anak pendiri — simbol harapan untuk melanjutkan usaha sambil
              menjaga nilai-nilai keluarga dan budaya. Kaski Atelier mengusung
              konsep{" "}
              <span className="font-semibold text-stone-800">
                Classic Casual
              </span>{" "}
              dengan sentuhan wastra etnik lokal, seperti Batik Depok motif
              Gong Sibolong, Ikan Memphis, irisan belimbing, hingga tugu.
            </p>
            <p className="text-stone-600 leading-relaxed">
              Perpaduan budaya dan modernitas inilah yang menghadirkan busana
              modest yang elegan, nyaman, dan berkarakter.
            </p>
          </div>

          <div className="bg-stone-100 rounded-3xl p-8 md:p-10 border border-amber-900/10">
            <h3 className="font-serif text-2xl text-stone-900 mb-6">
              Visi &amp; Misi
            </h3>
            <div className="mb-6">
              <p className="text-xs uppercase tracking-wider text-amber-700 font-semibold mb-2">
                Visi
              </p>
              <p className="text-stone-600 leading-relaxed">
                Mengedukasi serta memproduksi fashion yang mengikuti zaman,
                dengan kombinasi wastra dan desain yang unik, beda, dan
                simple — agar disukai generasi milenial.
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-amber-700 font-semibold mb-2">
                Misi
              </p>
              <ul className="space-y-2 text-stone-600">
                <li className="flex gap-2">
                  <span className="text-amber-700 mt-1">●</span>
                  Menjaga budaya bangsa Indonesia dengan melestarikan
                  berbagai desain wastra dalam pakaian.
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-700 mt-1">●</span>
                  Mempopulerkan budaya Indonesia dengan menyesuaikan pada
                  kemajuan zaman.
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-700 mt-1">●</span>
                  Selalu menyediakan pakaian yang berkualitas dan
                  fashionable.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* LAYANAN */}
      <section id="layanan" className="bg-stone-900 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs tracking-[0.2em] uppercase text-amber-400 font-semibold">
              Layanan Kami
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-stone-50 mt-3">
              Dari Koleksi Siap Pakai hingga Produksi Skala Besar
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {SERVICES.map((s) => (
              <div
                key={s.title}
                className="bg-stone-800/60 border border-amber-500/10 rounded-2xl p-8 hover:border-amber-500/40 transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-amber-500/15 flex items-center justify-center mb-5">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                </div>
                <h3 className="font-serif text-xl text-amber-100 mb-3">
                  {s.title}
                </h3>
                <p className="text-stone-400 text-sm leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-700 text-stone-950 font-semibold px-7 py-3.5 rounded-full transition-colors"
            >
              <WhatsAppIcon className="w-5 h-5" />
              Mulai Produksi Bersama Kami
            </a>
          </div>
        </div>
      </section>

      {/* INOVASI PRODUK */}
      <section id="produk" className="max-w-7xl mx-auto px-5 sm:px-8 py-20 md:py-28">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs tracking-[0.2em] uppercase text-amber-700 font-semibold">
            Inovasi Produk
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mt-3">
            Eksplorasi Wastra dalam Karya Berkelanjutan
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {PRODUCTS.map((p) => (
            <div
              key={p.title}
              className="rounded-3xl overflow-hidden border border-amber-900/10 bg-white shadow-sm"
            >
              <div className="h-44 bg-gradient-to-br from-amber-100 via-stone-100 to-emerald-100 flex items-center justify-center">
                <span className="font-serif italic text-2xl text-amber-800/70">
                  {p.title}
                </span>
              </div>
              <div className="p-8">
                <h3 className="font-serif text-xl text-stone-900 mb-3">
                  {p.title}
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* OUR TEAM */}
      <section id="tim" className="bg-stone-100 py-20 md:py-28 border-y border-amber-900/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs tracking-[0.2em] uppercase text-amber-700 font-semibold">
              Tim Kami
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mt-3">
              Orang-Orang di Balik Kaski Atelier
            </h2>
            <p className="text-stone-600 mt-4">
              Dijalankan oleh tim kecil dengan dedikasi besar — memadukan
              pengalaman bertahun-tahun dengan semangat melestarikan budaya
              lewat fashion.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {TEAM.map((member) => (
              <div key={member.name} className="text-center">
                <div className="aspect-square rounded-full bg-gradient-to-br from-amber-200 via-stone-200 to-emerald-200 flex items-center justify-center mb-4 shadow-sm ring-4 ring-white">
                  <span className="font-serif text-2xl text-amber-800">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .slice(0, 2)
                      .join("")}
                  </span>
                </div>
                <p className="font-semibold text-stone-900 text-sm">
                  {member.name}
                </p>
                <p className="text-xs text-stone-500 mt-0.5">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REKAM JEJAK / KREDIBILITAS */}
      <section id="rekam-jejak" className="bg-amber-50 py-20 md:py-28 border-y border-amber-900/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs tracking-[0.2em] uppercase text-amber-700 font-semibold">
              Rekam Jejak
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mt-3">
              Dipercaya di Panggung Fashion Nasional
            </h2>
            <p className="text-stone-600 mt-4">
              Sejak 2022, Kaski Atelier telah tampil di puluhan pameran dan
              fashion show — bukti konsistensi kualitas yang dipercaya
              individu maupun mitra korporat.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {EVENTS.map((ev) => (
              <div
                key={ev}
                className="bg-white rounded-xl p-5 border border-amber-900/10 text-sm text-stone-700 leading-relaxed"
              >
                {ev}
              </div>
            ))}
          </div>

          <div className="mt-10 bg-stone-900 rounded-2xl p-8 md:p-10 text-center">
            <p className="text-amber-100 leading-relaxed max-w-2xl mx-auto">
              Dengan pengalaman mendalam sejak 1997, layanan konveksi Kaski
              Atelier siap memenuhi kebutuhan produksi skala besar maupun
              komunitas — seragam korporat, koleksi organisasi, hingga
              kebutuhan instansi, dengan standar kualitas butik.
            </p>
          </div>
        </div>
      </section>

      {/* GALERI */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-20 md:py-28">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs tracking-[0.2em] uppercase text-amber-700 font-semibold">
            Galeri
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mt-3">
            Sekilas Karya &amp; Momen Kaski Atelier
          </h2>
          <p className="text-stone-600 mt-4">
            Ganti placeholder berikut dengan foto produk &amp; dokumentasi
            event asli Anda menggunakan{" "}
            <code className="text-amber-700">next/image</code>.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {GALLERY_CAPTIONS.map((caption, i) => (
            <div
              key={caption}
              className={`relative rounded-2xl overflow-hidden border border-amber-900/10 ${
                i === 0 ? "col-span-2 row-span-2" : ""
              }`}
            >
              <div
                className={`w-full ${
                  i === 0 ? "aspect-square md:aspect-[4/3]" : "aspect-square"
                } bg-gradient-to-br from-stone-200 via-amber-100 to-emerald-100 flex items-end p-4`}
              >
                <p className="text-stone-700/80 text-xs sm:text-sm font-medium leading-snug">
                  {caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* KONTAK / CTA */}
      <section id="kontak" className="max-w-7xl mx-auto px-5 sm:px-8 py-20 md:py-28">
        <div className="bg-gradient-to-br from-emerald-900 via-emerald-800 to-amber-900 rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_30%,white,transparent_50%)]" />
          <div className="relative">
            <h2 className="font-serif text-3xl md:text-4xl text-amber-50 mb-4">
              Wujudkan Busana Impian Anda
            </h2>
            <p className="text-emerald-50/80 max-w-xl mx-auto mb-8 leading-relaxed">
              Baik untuk koleksi pribadi, gaun custom, kebaya, seragam
              instansi, maupun kebutuhan konveksi skala besar — tim Kaski
              Atelier siap membantu dari konsultasi hingga produksi.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-stone-950 font-semibold px-8 py-3.5 rounded-full transition-colors shadow-lg"
              >
                <WhatsAppIcon className="w-5 h-5" />
                Konsultasi Gratis Sekarang
              </a>
              <a
                href={IG_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-amber-200/40 hover:border-amber-200 text-amber-50 font-semibold px-8 py-3.5 rounded-full transition-colors"
              >
                <InstagramIcon className="w-5 h-5" />
                @kaski.atelier
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-stone-950 text-stone-400 py-12">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="font-serif italic text-xl text-amber-100">
              Kaski Atelier
            </p>
            <p className="text-xs text-stone-500 mt-1">
              Warna Etnik, Gaya Otentik — Depok, Jawa Barat
            </p>
          </div>

          <div className="flex items-center gap-5">
            <a
              href={IG_LINK}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Kaski Atelier"
              className="hover:text-amber-300 transition-colors"
            >
              <InstagramIcon className="w-5 h-5" />
            </a>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp Kaski Atelier"
              className="hover:text-amber-300 transition-colors"
            >
              <WhatsAppIcon className="w-5 h-5" />
            </a>
          </div>

          <p className="text-xs text-stone-600">
            © {new Date().getFullYear()} Kaski Atelier. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}