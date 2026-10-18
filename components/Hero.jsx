"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Floaters } from "./Reveal";

// Replace these 7 images in /public/hero/ (keep names) or change paths here.
const SLIDES = [
  { src: "/hero/hero-1.jpg", title: "Documents Written With Care", text: "Sale deeds, agreements and affidavits drafted accurately and on time." },
  { src: "/hero/hero-2.jpg", title: "Hassle-Free Registrations", text: "We guide you from checklist to Sub-Registrar office." },
  { src: "/hero/hero-3.jpg", title: "Land Area Calculation", text: "Verified paperwork and complete transaction support." },
  { src: "/hero/hero-4.jpg", title: "Instant E-Stamping", text: "Genuine electronic stamp paper generated in minutes." },
  { src: "/hero/hero-5.jpg", title: "Telugu Typing Experts", text: "Fast, error-free typing for legal and personal documents." },
  { src: "/hero/hero-6.jpg", title: "Scanning, Xerox & Copies", text: "Crisp scans, sharp photocopies and certified document copies." },
  { src: "/hero/hero-7.jpg", title: "EC & Market Value Certificates", text: "Applied and tracked for you, start to finish." },
];
const DELAY = 5500;

export default function Hero() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => setI((p) => (p + 1) % SLIDES.length), DELAY);
    return () => clearTimeout(t);
  }, [i, paused]);

  const go = (n) => setI((n + SLIDES.length) % SLIDES.length);
  const s = SLIDES[i];

  return (
    <section className="relative h-[100svh] min-h-[620px] w-full overflow-hidden bg-brand-dark" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <AnimatePresence mode="sync">
        <motion.div key={i} className="absolute inset-0" initial={{ opacity: 0, scale: 1.25 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ opacity: { duration: 1.2 }, scale: { duration: 7, ease: "linear" } }}>
          <img src={s.src} alt={s.title} className="h-full w-full object-cover" />
        </motion.div>
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/90 via-brand-dark/60 to-brand/20" />
      <div className="absolute inset-0 dots opacity-30" />
      <Floaters />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-5 pt-20">
        <AnimatePresence mode="wait">
          <motion.div key={i} className="max-w-3xl" initial="hidden" animate="show" exit={{ opacity: 0, y: -30 }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.15 } } }}>
            <motion.span variants={{ hidden: { opacity: 0, x: -40 }, show: { opacity: 1, x: 0 } }} className="mb-5 inline-block rounded-full border border-gold/60 bg-white/10 px-5 py-1.5 text-sm text-gold backdrop-blur">
              Pothala Consultants & Services
            </motion.span>
            <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-7xl">
              {s.title.split(" ").map((w, k) => (
                <span key={k} className="mr-3 inline-block overflow-hidden align-bottom">
                  <motion.span className="inline-block" variants={{ hidden: { y: "110%", rotate: 8 }, show: { y: 0, rotate: 0, transition: { duration: 0.7 } } }}>{w}</motion.span>
                </span>
              ))}
            </h1>
            <motion.p variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } }} className="mt-6 max-w-xl text-lg text-white/85 md:text-xl">{s.text}</motion.p>
            <motion.div variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } }} className="mt-9 flex flex-wrap gap-4">
              <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}><Link href="/services" className="btn-gold">Our Services</Link></motion.div>
              <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}><Link href="/contact" className="btn-ghost">Contact Us</Link></motion.div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      <button aria-label="Previous slide" onClick={() => go(i - 1)} className="absolute left-3 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-2xl text-white backdrop-blur transition hover:bg-gold hover:text-brand-dark md:flex">‹</button>
      <button aria-label="Next slide" onClick={() => go(i + 1)} className="absolute right-3 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-2xl text-white backdrop-blur transition hover:bg-gold hover:text-brand-dark md:flex">›</button>

      <div className="absolute bottom-10 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {SLIDES.map((_, k) => (
          <button key={k} aria-label={`Go to slide ${k + 1}`} onClick={() => setI(k)} className="relative h-2.5 overflow-hidden rounded-full bg-white/40 transition-all" style={{ width: k === i ? 48 : 10 }}>
            {k === i && !paused && <motion.span key={`p${i}`} className="absolute inset-0 origin-left bg-gold" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: DELAY / 1000, ease: "linear" }} />}
            {k === i && paused && <span className="absolute inset-0 bg-gold" />}
          </button>
        ))}
      </div>
      <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 1.6 }} className="absolute bottom-3 left-1/2 z-20 -translate-x-1/2 text-white/70">⌄</motion.div>
    </section>
  );
}
