"use client";

import { useState, useEffect } from "react";

const WA_LINK =
  "https://wa.me/6281311308427?text=Halo%20Kaski%20Atelier,%20saya%20tertarik%20untuk%20konsultasi%20produksi%20busana.";
const IG_LINK =
  "https://www.instagram.com/kaski.atelier?igsh=MWFpMXQ4aWEwZGR5eg==";

const NAV_LINKS = [
  { label: "Tentang Kami", href: "#tentang" },
  { label: "Layanan", href: "#layanan" },
  { label: "Inovasi", href: "#inovasi" },
  { label: "Event", href: "#event" },
  { label: "Kontak", href: "#kontak" },
];

const SERVICES = [
  {
    icon: "✦",
    title: "Ready-to-Wear",
    desc: "Koleksi busana modest yang sudah dirancang dan siap pakai. Memadukan unsur wastra etnik lokal dengan gaya modern yang elegan dan berkarakter.",
    tags: ["Busana Kasual", "Outer Etnik", "Hijab & Pashmina", "Mukena"],
  },
  {
    icon: "◈",
    title: "Custom Order",
    desc: "Busana eksklusif yang dirancang sesuai kebutuhan pribadi Anda — mulai dari ukuran, warna, detail kain, hingga pilihan motif wastra yang Anda inginkan.",
    tags: ["Gaun", "Kebaya", "Seragam", "Ukuran Custom"],
  },
  {
    icon: "⬡",
    title: "Konveksi Profesional",
    desc: "Produksi skala besar dengan standar kualitas butik. Tepat waktu, jahitan presisi. Melayani korporat, organisasi, komunitas, dan instansi.",
    tags: ["Seragam Korporat", "Koleksi Organisasi", "Skala Besar", "Butik Quality"],
  },
];

const INNOVATIONS = [
  {
    label: "Kaf Semi Jacket",
    desc: "Menggabungkan gaya urban modern dengan motif tradisional Nusantara. Dibuat dari kain perca sisa produksi — sangat sustainable. Warna kontras biru navy, biru muda, putih, dan maroon dengan sentuhan batik & tenun.",
    tag: "Eksotika Urban Nusantara",
  },
  {
    label: "Kemeja Sashiko",
    desc: "Desain minimalis yang diperkaya detail Batik Depok dijahit tangan menggunakan teknik sashiko Jepang. Setiap helai bersifat handmade, unik, dan autentik.",
    tag: "Handmade · Batik Depok",
  },
];

const EVENTS = [
  { year: "2022", items: ["DEFF — Hotel Bumi Wiyata Depok", "Fashion Show KFD — Gedung Baleka 2", "Depok POP — Alun-alun Kota Depok", "Grand Final ADUJAK KOTA DEPOK", "BUNDA AWARD — Gedung Baleka 2"] },
  { year: "2023", items: ["Anjungan Jawa Barat — TMII Jakarta", "Lebaran Depok — Sawangan", "WE.ID Gebyar HUT RI — Transtudio Cibubur", "Salimah Expo — Depok Mall"] },
  { year: "2024", items: ["APEKSI 2024", "Ramadhan Fashion Show — Margo City Depok", "ADUJAK 2024", "IN2MF — 30 Oktober–3 November 2024"] },
  { year: "2025", items: ["Ramadhan Fashion Parade — Margocity Mall", "Fashion Show & Exhibition by Designer EOMF — DPR RI", "Fashion Show with Rhino Indonesia", "Exhibition Indonesia Fashion Week — JCC Cendrawasih Hall", "Exhibition Karya Kreatif Jabar — Trans Convention Center Bandung", "Bazaar Freedom & Style Without Waste", "Fashion Show IN2MF 2025", "Fashion Show IPEMI — Hotel Royal Kuningan", "Festival Tring 2025"] },
];

const BATIK_MOTIFS = ["Gong Sibolong", "Ikan Memphis", "Irisan Belimbing", "Tugu Depok"];

export default function KaskiAtelier() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeYear, setActiveYear] = useState("2025");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap');

        :root {
          --ink: #1a1410;
          --gold: #8B6914;
          --gold-light: #C49A2C;
          --cream: #F5EFE3;
          --stone: #E8DECE;
          --mist: #F9F5EE;
          --forest: #2C3B2D;
          --clay: #7A5C3E;
          --warm-white: #FDFAF5;
        }

        * { box-sizing: border-box; margin: 0; padding: 0; }

        html { scroll-behavior: smooth; }

        body {
          background: var(--warm-white);
          color: var(--ink);
          font-family: 'DM Sans', sans-serif;
          font-weight: 300;
          line-height: 1.65;
        }

        .display { font-family: 'Cormorant Garamond', serif; }

        /* NAVBAR */
        .nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          transition: all 0.4s ease;
          padding: 1.25rem 2rem;
        }
        .nav.scrolled {
          background: rgba(253, 250, 245, 0.96);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(139,105,20,0.15);
          padding: 0.85rem 2rem;
          box-shadow: 0 2px 24px rgba(26,20,16,0.07);
        }
        .nav-inner {
          max-width: 1200px; margin: 0 auto;
          display: flex; align-items: center; justify-content: space-between;
        }
        .nav-logo {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--forest);
          letter-spacing: 0.02em;
          text-decoration: none;
          display: flex; flex-direction: column; line-height: 1;
        }
        .nav-logo span {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.6rem;
          font-weight: 400;
          letter-spacing: 0.25em;
          color: var(--gold);
          text-transform: uppercase;
          margin-top: 2px;
        }
        .nav-links {
          display: flex; gap: 2rem; list-style: none;
        }
        .nav-links a {
          color: var(--ink); text-decoration: none;
          font-size: 0.82rem; letter-spacing: 0.12em;
          text-transform: uppercase; font-weight: 400;
          transition: color 0.2s;
        }
        .nav-links a:hover { color: var(--gold); }
        .nav-ig {
          display: flex; align-items: center; gap: 0.5rem;
          color: var(--forest); text-decoration: none;
          font-size: 0.8rem; letter-spacing: 0.08em;
          border: 1px solid rgba(44,59,45,0.3);
          padding: 0.4rem 0.9rem; border-radius: 100px;
          transition: all 0.2s;
        }
        .nav-ig:hover { background: var(--forest); color: var(--warm-white); }
        .hamburger {
          display: none; cursor: pointer;
          background: none; border: none;
          font-size: 1.4rem; color: var(--forest);
        }
        .mobile-menu {
          display: none; position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background: var(--warm-white);
          z-index: 99; flex-direction: column;
          align-items: center; justify-content: center; gap: 2rem;
        }
        .mobile-menu.open { display: flex; }
        .mobile-menu a {
          font-family: 'Cormorant Garamond', serif;
          font-size: 2rem; color: var(--ink); text-decoration: none;
          font-style: italic;
        }
        .mobile-close {
          position: absolute; top: 1.5rem; right: 2rem;
          background: none; border: none; font-size: 1.8rem;
          cursor: pointer; color: var(--forest);
        }

        /* HERO */
        .hero {
          min-height: 100vh;
          background: var(--forest);
          display: flex; flex-direction: column;
          justify-content: flex-end;
          position: relative; overflow: hidden;
          padding: 6rem 2rem 4rem;
        }
        .hero-texture {
          position: absolute; inset: 0;
          background-image:
            radial-gradient(circle at 20% 80%, rgba(196,154,44,0.12) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(122,92,62,0.15) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(139,105,20,0.05) 0%, transparent 70%);
          pointer-events: none;
        }
        .hero-motif {
          position: absolute; top: 0; right: 0;
          width: 45%; height: 100%;
          background: linear-gradient(135deg, rgba(196,154,44,0.08) 0%, rgba(44,59,45,0.4) 100%);
          clip-path: polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%);
        }
        .hero-motif::before {
          content: '';
          position: absolute; inset: 0;
          background-image: repeating-linear-gradient(
            45deg,
            rgba(196,154,44,0.06) 0px, rgba(196,154,44,0.06) 1px,
            transparent 1px, transparent 20px
          );
        }
        .hero-content {
          position: relative; z-index: 2;
          max-width: 1200px; margin: 0 auto; width: 100%;
        }
        .hero-eyebrow {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.72rem; letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--gold-light); margin-bottom: 1.5rem;
          display: flex; align-items: center; gap: 0.75rem;
        }
        .hero-eyebrow::before {
          content: '';
          display: block; width: 2rem; height: 1px;
          background: var(--gold-light);
        }
        .hero-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(3.5rem, 9vw, 7.5rem);
          font-weight: 300; line-height: 1;
          color: var(--cream); letter-spacing: -0.01em;
          margin-bottom: 0.25rem;
        }
        .hero-title em {
          font-style: italic;
          color: var(--gold-light);
        }
        .hero-subtitle {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(1rem, 2.5vw, 1.4rem);
          font-style: italic; color: rgba(245,239,227,0.6);
          margin-bottom: 2.5rem; font-weight: 300;
        }
        .hero-desc {
          font-size: 0.9rem; color: rgba(245,239,227,0.65);
          max-width: 480px; line-height: 1.8; margin-bottom: 3rem;
        }
        .hero-ctas {
          display: flex; gap: 1rem; flex-wrap: wrap;
        }
        .btn-primary {
          background: var(--gold);
          color: var(--warm-white); text-decoration: none;
          padding: 0.85rem 2rem; border-radius: 2px;
          font-size: 0.82rem; letter-spacing: 0.12em;
          text-transform: uppercase; font-weight: 500;
          transition: all 0.25s;
          display: inline-flex; align-items: center; gap: 0.5rem;
        }
        .btn-primary:hover { background: var(--gold-light); transform: translateY(-1px); }
        .btn-secondary {
          color: var(--cream); text-decoration: none;
          padding: 0.85rem 2rem; border-radius: 2px;
          font-size: 0.82rem; letter-spacing: 0.12em;
          text-transform: uppercase; font-weight: 400;
          border: 1px solid rgba(245,239,227,0.3);
          transition: all 0.25s;
          display: inline-flex; align-items: center; gap: 0.5rem;
        }
        .btn-secondary:hover { border-color: var(--gold-light); color: var(--gold-light); }
        .hero-stats {
          position: absolute; right: 2rem; bottom: 4rem;
          z-index: 2;
          display: flex; flex-direction: column; gap: 1.5rem;
          text-align: right;
        }
        .hero-stat-num {
          font-family: 'Cormorant Garamond', serif;
          font-size: 2.2rem; font-weight: 300;
          color: var(--gold-light); line-height: 1;
        }
        .hero-stat-label {
          font-size: 0.68rem; letter-spacing: 0.2em;
          text-transform: uppercase; color: rgba(245,239,227,0.45);
        }
        .hero-scroll {
          position: absolute; left: 50%; bottom: 2rem;
          transform: translateX(-50%); z-index: 2;
          display: flex; flex-direction: column;
          align-items: center; gap: 0.5rem;
          color: rgba(245,239,227,0.35);
          font-size: 0.65rem; letter-spacing: 0.2em; text-transform: uppercase;
          animation: scrollBounce 2s ease-in-out infinite;
        }
        @keyframes scrollBounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(4px); }
        }
        .hero-scroll::before {
          content: '';
          width: 1px; height: 3rem;
          background: linear-gradient(to bottom, transparent, rgba(196,154,44,0.5));
        }

        /* SECTION BASE */
        .section { padding: 6rem 2rem; }
        .container { max-width: 1200px; margin: 0 auto; }
        .section-eyebrow {
          font-size: 0.7rem; letter-spacing: 0.3em;
          text-transform: uppercase; color: var(--gold);
          margin-bottom: 0.75rem;
          display: flex; align-items: center; gap: 0.75rem;
        }
        .section-eyebrow::before {
          content: ''; display: block;
          width: 1.5rem; height: 1px; background: var(--gold);
        }
        .section-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 300; line-height: 1.15;
          color: var(--forest);
        }
        .section-title em { font-style: italic; color: var(--clay); }

        /* TENTANG */
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 5rem; align-items: center;
        }
        .about-left .section-title { margin-bottom: 1.5rem; }
        .about-body {
          font-size: 0.92rem; color: rgba(26,20,16,0.7);
          line-height: 1.9; margin-bottom: 1.25rem;
        }
        .about-right {
          position: relative;
        }
        .about-card {
          background: var(--forest);
          padding: 2.5rem;
          position: relative;
        }
        .about-card::before {
          content: '';
          position: absolute; top: -0.75rem; left: -0.75rem; right: 0.75rem; bottom: 0.75rem;
          border: 1px solid rgba(196,154,44,0.3);
          pointer-events: none;
        }
        .about-card-label {
          font-size: 0.68rem; letter-spacing: 0.25em;
          text-transform: uppercase; color: var(--gold-light);
          margin-bottom: 1.25rem;
        }
        .about-card-name {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.75rem; font-weight: 400;
          color: var(--cream); margin-bottom: 0.25rem;
          font-style: italic;
        }
        .about-card-role {
          font-size: 0.78rem; color: rgba(245,239,227,0.5);
          letter-spacing: 0.1em; margin-bottom: 1.5rem;
        }
        .about-card-roles {
          display: flex; flex-direction: column; gap: 0.5rem;
        }
        .about-card-role-item {
          font-size: 0.8rem; color: rgba(245,239,227,0.7);
          display: flex; align-items: flex-start; gap: 0.5rem;
          line-height: 1.5;
        }
        .about-card-role-item::before {
          content: '—'; color: var(--gold); font-size: 0.7rem;
          margin-top: 0.15rem; flex-shrink: 0;
        }
        .motif-tags {
          display: flex; flex-wrap: wrap; gap: 0.5rem; margin-top: 1.5rem;
        }
        .motif-tag {
          font-size: 0.72rem; letter-spacing: 0.08em;
          padding: 0.3rem 0.75rem;
          border: 1px solid rgba(139,105,20,0.3);
          color: var(--clay); border-radius: 100px;
          background: rgba(139,105,20,0.05);
        }

        /* LAYANAN */
        .services-bg { background: var(--mist); }
        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5px; margin-top: 3.5rem;
          background: rgba(139,105,20,0.15);
          border: 1px solid rgba(139,105,20,0.15);
        }
        .service-card {
          background: var(--warm-white);
          padding: 2.5rem 2rem;
          transition: background 0.3s;
        }
        .service-card:hover { background: var(--cream); }
        .service-icon {
          font-size: 1.5rem; color: var(--gold);
          margin-bottom: 1.25rem; display: block;
        }
        .service-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.5rem; font-weight: 400;
          color: var(--forest); margin-bottom: 0.75rem;
        }
        .service-desc {
          font-size: 0.85rem; color: rgba(26,20,16,0.65);
          line-height: 1.85; margin-bottom: 1.5rem;
        }
        .service-tags {
          display: flex; flex-wrap: wrap; gap: 0.4rem;
        }
        .service-tag {
          font-size: 0.68rem; letter-spacing: 0.06em;
          padding: 0.2rem 0.6rem;
          background: rgba(44,59,45,0.07);
          color: var(--forest); border-radius: 2px;
        }
        .services-cta {
          margin-top: 3rem; text-align: center;
        }

        /* INOVASI */
        .innovation-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem; margin-top: 3.5rem;
        }
        .innovation-card {
          border: 1px solid rgba(139,105,20,0.2);
          padding: 2.5rem;
          position: relative;
          transition: border-color 0.3s;
        }
        .innovation-card:hover { border-color: var(--gold); }
        .innovation-tag {
          position: absolute; top: 1.5rem; right: 1.5rem;
          font-size: 0.65rem; letter-spacing: 0.15em;
          text-transform: uppercase; color: var(--gold);
          background: rgba(139,105,20,0.08);
          padding: 0.25rem 0.6rem; border-radius: 100px;
        }
        .innovation-label {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.6rem; font-style: italic;
          font-weight: 400; color: var(--forest);
          margin-bottom: 1rem;
        }
        .innovation-desc {
          font-size: 0.85rem; color: rgba(26,20,16,0.65);
          line-height: 1.85;
        }
        .innovation-accent {
          margin-top: 1.5rem;
          width: 2rem; height: 2px; background: var(--gold);
        }

        /* EVENT */
        .events-bg { background: var(--forest); }
        .events-bg .section-title { color: var(--cream); }
        .events-bg .section-title em { color: var(--gold-light); }
        .events-bg .section-eyebrow { color: var(--gold-light); }
        .events-bg .section-eyebrow::before { background: var(--gold-light); }
        .events-tabs {
          display: flex; gap: 0; margin-top: 3rem;
          border-bottom: 1px solid rgba(245,239,227,0.15);
        }
        .events-tab {
          background: none; border: none; cursor: pointer;
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.4rem; font-weight: 300;
          color: rgba(245,239,227,0.35);
          padding: 0.75rem 1.75rem;
          border-bottom: 2px solid transparent;
          margin-bottom: -1px; transition: all 0.25s;
        }
        .events-tab.active {
          color: var(--gold-light);
          border-bottom-color: var(--gold-light);
        }
        .events-tab:hover:not(.active) { color: rgba(245,239,227,0.65); }
        .events-list {
          margin-top: 2.5rem;
          display: grid; grid-template-columns: repeat(2, 1fr);
          gap: 0.75rem;
        }
        .event-item {
          display: flex; align-items: flex-start; gap: 0.75rem;
          font-size: 0.85rem; color: rgba(245,239,227,0.7);
          line-height: 1.6; padding: 0.75rem 0;
          border-bottom: 1px solid rgba(245,239,227,0.07);
        }
        .event-dot {
          width: 4px; height: 4px; border-radius: 50%;
          background: var(--gold-light); margin-top: 0.55rem;
          flex-shrink: 0;
        }

        /* KREDIBILITAS */
        .cred-strip {
          background: var(--stone);
          padding: 3rem 2rem;
          overflow: hidden;
        }
        .cred-inner {
          max-width: 1200px; margin: 0 auto;
          display: flex; align-items: center;
          justify-content: space-between; gap: 2rem;
          flex-wrap: wrap;
        }
        .cred-stat {
          text-align: center; flex: 1; min-width: 120px;
        }
        .cred-num {
          font-family: 'Cormorant Garamond', serif;
          font-size: 2.5rem; font-weight: 300;
          color: var(--forest); line-height: 1;
        }
        .cred-label {
          font-size: 0.7rem; letter-spacing: 0.15em;
          text-transform: uppercase;
          color: rgba(26,20,16,0.5); margin-top: 0.35rem;
        }
        .cred-divider {
          width: 1px; height: 3rem;
          background: rgba(26,20,16,0.15);
        }

        /* KONTAK */
        .contact-grid {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 5rem; align-items: start;
        }
        .contact-left .section-title { margin-bottom: 1rem; }
        .contact-left p {
          font-size: 0.9rem; color: rgba(26,20,16,0.65);
          line-height: 1.85; margin-bottom: 2rem;
        }
        .contact-ctas {
          display: flex; flex-direction: column; gap: 0.75rem;
        }
        .contact-btn {
          display: flex; align-items: center; gap: 1rem;
          text-decoration: none; padding: 1.1rem 1.5rem;
          border: 1px solid rgba(139,105,20,0.25);
          color: var(--ink); font-size: 0.85rem;
          transition: all 0.25s;
          background: var(--warm-white);
        }
        .contact-btn:hover { background: var(--forest); color: var(--cream); border-color: var(--forest); }
        .contact-btn-icon { font-size: 1.1rem; flex-shrink: 0; }
        .contact-btn-text { font-size: 0.78rem; letter-spacing: 0.05em; }
        .contact-right {
          background: var(--cream);
          padding: 2.5rem;
          border-top: 3px solid var(--gold);
        }
        .contact-info-label {
          font-size: 0.68rem; letter-spacing: 0.2em;
          text-transform: uppercase; color: var(--gold);
          margin-bottom: 1.25rem;
        }
        .contact-info-item {
          margin-bottom: 1.25rem;
        }
        .contact-info-key {
          font-size: 0.72rem; letter-spacing: 0.1em;
          text-transform: uppercase; color: rgba(26,20,16,0.45);
          margin-bottom: 0.2rem;
        }
        .contact-info-val {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.1rem; color: var(--forest);
        }
        .contact-mission {
          margin-top: 2rem; padding-top: 1.5rem;
          border-top: 1px solid rgba(139,105,20,0.2);
          font-family: 'Cormorant Garamond', serif;
          font-size: 1rem; font-style: italic;
          color: var(--clay); line-height: 1.7;
        }

        /* FOOTER */
        .footer {
          background: var(--ink);
          padding: 3rem 2rem;
          color: rgba(245,239,227,0.45);
          font-size: 0.78rem;
        }
        .footer-inner {
          max-width: 1200px; margin: 0 auto;
          display: flex; justify-content: space-between;
          align-items: flex-end; gap: 2rem;
          flex-wrap: wrap;
        }
        .footer-logo {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.4rem; color: var(--cream);
          font-style: italic; margin-bottom: 0.25rem;
        }
        .footer-tagline {
          font-size: 0.68rem; letter-spacing: 0.2em;
          text-transform: uppercase; color: var(--gold);
        }
        .footer-links { display: flex; gap: 1.5rem; flex-wrap: wrap; }
        .footer-links a {
          color: rgba(245,239,227,0.4); text-decoration: none;
          font-size: 0.75rem; letter-spacing: 0.08em;
          transition: color 0.2s;
        }
        .footer-links a:hover { color: var(--gold-light); }

        /* RESPONSIVE */
        @media (max-width: 900px) {
          .nav-links, .nav-ig { display: none; }
          .hamburger { display: block; }
          .hero-stats { display: none; }
          .about-grid, .contact-grid { grid-template-columns: 1fr; gap: 2.5rem; }
          .services-grid { grid-template-columns: 1fr; }
          .innovation-grid { grid-template-columns: 1fr; }
          .events-list { grid-template-columns: 1fr; }
          .cred-divider { display: none; }
          .footer-inner { flex-direction: column; align-items: flex-start; }
        }
        @media (max-width: 640px) {
          .section { padding: 4rem 1.25rem; }
          .hero { padding: 5rem 1.25rem 3rem; }
          .events-tabs { overflow-x: auto; }
          .events-tab { padding: 0.75rem 1.25rem; font-size: 1.2rem; }
        }

        @media (prefers-reduced-motion: reduce) {
          * { animation: none !important; transition: none !important; }
        }
      `}</style>

      {/* NAV */}
      <nav className={`nav${scrolled ? " scrolled" : ""}`}>
        <div className="nav-inner">
          <a className="nav-logo" href="/">
            Kaski Atelier
            <span>Warna Etnik · Gaya Otentik</span>
          </a>
          <ul className="nav-links">
            {NAV_LINKS.map((l) => (
              <li key={l.label}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
          <a className="nav-ig" href={IG_LINK} target="_blank" rel="noopener noreferrer">
            ◎ Instagram
          </a>
          <button className="hamburger" onClick={() => setMenuOpen(true)} aria-label="Buka menu">
            ☰
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div className={`mobile-menu${menuOpen ? " open" : ""}`}>
        <button className="mobile-close" onClick={() => setMenuOpen(false)} aria-label="Tutup menu">✕</button>
        {NAV_LINKS.map((l) => (
          <a key={l.label} href={l.href} onClick={() => setMenuOpen(false)}>{l.label}</a>
        ))}
        <a href={IG_LINK} target="_blank" rel="noopener noreferrer" style={{ fontSize: "1rem", fontFamily: "DM Sans", letterSpacing: "0.15em", color: "var(--gold)" }}>
          @kaski.atelier
        </a>
      </div>

      {/* HERO */}
      <section className="hero">
        <div className="hero-texture" />
        <div className="hero-motif" />

        <div className="hero-content">
          <div className="hero-eyebrow">Modest Fashion · Depok, Jawa Barat</div>
          <h1 className="hero-title display">
            Kaski<br /><em>Atelier</em>
          </h1>
          <p className="hero-subtitle">Warna Etnik, Gaya Otentik</p>
          <p className="hero-desc">
            Brand modest fashion berbasis wastra etnik lokal. Menggabungkan keindahan
            Batik Depok dengan desain classic casual yang elegan, nyaman, dan berkarakter
            — untuk perempuan modern yang bangga dengan identitasnya.
          </p>
          <div className="hero-ctas">
            <a className="btn-primary" href={WA_LINK} target="_blank" rel="noopener noreferrer">
              Konsultasi Gratis →
            </a>
            <a className="btn-secondary" href="#layanan">
              Lihat Layanan
            </a>
          </div>
        </div>

        <div className="hero-stats">
          <div>
            <div className="hero-stat-num">1997</div>
            <div className="hero-stat-label">Pengalaman sejak</div>
          </div>
          <div>
            <div className="hero-stat-num">20+</div>
            <div className="hero-stat-label">Event nasional</div>
          </div>
          <div>
            <div className="hero-stat-num">3</div>
            <div className="hero-stat-label">Lini layanan</div>
          </div>
        </div>

        <div className="hero-scroll">Scroll</div>
      </section>

      {/* STRIP KREDIBILITAS */}
      <div className="cred-strip">
        <div className="cred-inner">
          <div className="cred-stat">
            <div className="cred-num">27+</div>
            <div className="cred-label">Tahun Pengalaman</div>
          </div>
          <div className="cred-divider" />
          <div className="cred-stat">
            <div className="cred-num">2018</div>
            <div className="cred-label">Kaski Atelier Berdiri</div>
          </div>
          <div className="cred-divider" />
          <div className="cred-stat">
            <div className="cred-num">IFW</div>
            <div className="cred-label">Indonesia Fashion Week</div>
          </div>
          <div className="cred-divider" />
          <div className="cred-stat">
            <div className="cred-num">IN2MF</div>
            <div className="cred-label">Internasional Event</div>
          </div>
          <div className="cred-divider" />
          <div className="cred-stat">
            <div className="cred-num">DPR RI</div>
            <div className="cred-label">Fashion Show & Exhibition</div>
          </div>
        </div>
      </div>

      {/* TENTANG */}
      <section className="section" id="tentang">
        <div className="container">
          <div className="about-grid">
            <div className="about-left">
              <div className="section-eyebrow">Tentang Kami</div>
              <h2 className="section-title display">
                Modest fashion<br />yang <em>bercerita</em>
              </h2>
              <p className="about-body">
                Kaski Atelier berdiri pada tahun 2018 di Depok, Jawa Barat, dengan pengalaman di dunia
                fashion yang telah dimulai sejak 1997. Nama "Kaski" lahir dari penggabungan nama ketiga
                anak sang pendiri — simbol harapan untuk meneruskan warisan nilai keluarga dan budaya.
              </p>
              <p className="about-body">
                Kami mengusung konsep <strong>Classic Casual</strong> dengan sentuhan <strong>Wastra Etnik Lokal</strong>.
                Desain kami mengedepankan perpaduan budaya dan modernitas: busana modest yang elegan,
                nyaman, dan penuh karakter — karena setiap helai kain harus punya jiwa.
              </p>
              <p className="about-body">
                Visi kami: mengedukasi, memproduksi, dan mempopulerkan fashion berbasis kekayaan
                wastra Indonesia kepada generasi muda, agar budaya lokal tetap hidup dan relevan.
              </p>
              <div>
                <div className="section-eyebrow" style={{ marginTop: "1.5rem", marginBottom: "0.5rem" }}>Motif Batik Depok kami</div>
                <div className="motif-tags">
                  {BATIK_MOTIFS.map((m) => (
                    <span key={m} className="motif-tag">{m}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="about-right">
              <div className="about-card">
                <div className="about-card-label">Founder & Owner</div>
                <div className="about-card-name">Latifah (Efa)</div>
                <div className="about-card-role">Kaski Atelier · Est. 2018</div>
                <div className="about-card-roles">
                  <div className="about-card-role-item">Ketua Komunitas Fesyen Depok (KFD) 2021–2024</div>
                  <div className="about-card-role-item">Ketua Fashion Story Community (FSC)</div>
                  <div className="about-card-role-item">Sekretaris UMKM Ratu Jaya</div>
                  <div className="about-card-role-item">Pengurus Ikatan Komunitas Perias Depok (IKAPEDE)</div>
                  <div className="about-card-role-item">Bendahara d'Katalia Depok</div>
                  <div className="about-card-role-item">Pengurus Korwil Pusat PPUMI</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LAYANAN */}
      <section className="section services-bg" id="layanan">
        <div className="container">
          <div className="section-eyebrow">Layanan Kami</div>
          <h2 className="section-title display">
            Tiga cara kami<br /><em>melayani Anda</em>
          </h2>

          <div className="services-grid">
            {SERVICES.map((s) => (
              <div key={s.title} className="service-card">
                <span className="service-icon">{s.icon}</span>
                <h3 className="service-title display">{s.title}</h3>
                <p className="service-desc">{s.desc}</p>
                <div className="service-tags">
                  {s.tags.map((t) => (
                    <span key={t} className="service-tag">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="services-cta">
            <a className="btn-primary" href={WA_LINK} target="_blank" rel="noopener noreferrer">
              Diskusikan Kebutuhan Anda →
            </a>
          </div>
        </div>
      </section>

      {/* INOVASI */}
      <section className="section" id="inovasi">
        <div className="container">
          <div className="section-eyebrow">Inovasi Produk</div>
          <h2 className="section-title display">
            Koleksi yang<br /><em>lahir dari budaya</em>
          </h2>
          <p style={{ marginTop: "1rem", maxWidth: 520, fontSize: "0.9rem", color: "rgba(26,20,16,0.6)", lineHeight: 1.8 }}>
            Dua koleksi unggulan yang menggabungkan teknik global dengan jiwa Nusantara — 
            dan komitmen nyata terhadap keberlanjutan.
          </p>

          <div className="innovation-grid">
            {INNOVATIONS.map((item) => (
              <div key={item.label} className="innovation-card">
                <span className="innovation-tag">{item.tag}</span>
                <h3 className="innovation-label display">{item.label}</h3>
                <p className="innovation-desc">{item.desc}</p>
                <div className="innovation-accent" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EVENT */}
      <section className="section events-bg" id="event">
        <div className="container">
          <div className="section-eyebrow">Rekam Jejak</div>
          <h2 className="section-title display">
            Hadir di panggung<br /><em>fashion terbaik</em>
          </h2>

          <div className="events-tabs">
            {EVENTS.map((e) => (
              <button
                key={e.year}
                className={`events-tab${activeYear === e.year ? " active" : ""}`}
                onClick={() => setActiveYear(e.year)}
              >
                {e.year}
              </button>
            ))}
          </div>

          {EVENTS.filter((e) => e.year === activeYear).map((e) => (
            <div key={e.year} className="events-list">
              {e.items.map((item) => (
                <div key={item} className="event-item">
                  <div className="event-dot" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* KONTAK */}
      <section className="section" id="kontak">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-left">
              <div className="section-eyebrow">Hubungi Kami</div>
              <h2 className="section-title display">
                Mulai dengan<br /><em>konsultasi gratis</em>
              </h2>
              <p>
                Apakah Anda butuh busana custom eksklusif, koleksi ready-to-wear, atau
                layanan konveksi skala besar? Tim Kaski Atelier siap membantu Anda
                mewujudkan visi fashion yang autentik dan berkarakter.
              </p>
              <div className="contact-ctas">
                <a className="contact-btn" href={WA_LINK} target="_blank" rel="noopener noreferrer">
                  <span className="contact-btn-icon">💬</span>
                  <div>
                    <div style={{ fontWeight: 500, marginBottom: 2 }}>Chat WhatsApp</div>
                    <div className="contact-btn-text">Respons cepat · Konsultasi gratis</div>
                  </div>
                </a>
                <a className="contact-btn" href={IG_LINK} target="_blank" rel="noopener noreferrer">
                  <span className="contact-btn-icon">◎</span>
                  <div>
                    <div style={{ fontWeight: 500, marginBottom: 2 }}>@kaski.atelier</div>
                    <div className="contact-btn-text">Lihat koleksi terbaru di Instagram</div>
                  </div>
                </a>
                <a className="contact-btn" href="https://www.tokopedia.com/search?q=kaski+atelier" target="_blank" rel="noopener noreferrer">
                  <span className="contact-btn-icon">🛍</span>
                  <div>
                    <div style={{ fontWeight: 500, marginBottom: 2 }}>Tokopedia</div>
                    <div className="contact-btn-text">Belanja produk ready-to-wear</div>
                  </div>
                </a>
              </div>
            </div>

            <div className="contact-right">
              <div className="contact-info-label">Informasi Brand</div>
              <div className="contact-info-item">
                <div className="contact-info-key">Brand</div>
                <div className="contact-info-val">Kaski Atelier</div>
              </div>
              <div className="contact-info-item">
                <div className="contact-info-key">Lokasi</div>
                <div className="contact-info-val">Depok, Jawa Barat</div>
              </div>
              <div className="contact-info-item">
                <div className="contact-info-key">Pengalaman Fashion</div>
                <div className="contact-info-val">Sejak 1997</div>
              </div>
              <div className="contact-info-item">
                <div className="contact-info-key">Spesialisasi</div>
                <div className="contact-info-val">Modest Fashion · Wastra Etnik · Konveksi</div>
              </div>
              <div className="contact-info-item">
                <div className="contact-info-key">Layanan Tersedia</div>
                <div className="contact-info-val">Ready-to-Wear · Custom Order · Konveksi Profesional</div>
              </div>
              <div className="contact-mission">
                "Menjaga budaya bangsa Indonesia dengan melestarikan berbagai desain wastra
                dalam pakaian, dan mempopulerkan budaya Indonesia di era modern."
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-inner">
          <div>
            <div className="footer-logo">Kaski Atelier</div>
            <div className="footer-tagline">Warna Etnik · Gaya Otentik · Depok, 2018</div>
          </div>
          <div className="footer-links">
            <a href={IG_LINK} target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer">WhatsApp</a>
            <a href="#tentang">Tentang</a>
            <a href="#layanan">Layanan</a>
            <a href="#event">Event</a>
          </div>
          <div style={{ fontSize: "0.7rem", opacity: 0.45 }}>
            © 2025 Kaski Atelier by Latifah. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}