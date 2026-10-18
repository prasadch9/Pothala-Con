"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import Counter from "@/components/Counter";
import { Reveal, Stagger, Item, SplitWords } from "@/components/Reveal";
import { SERVICES, BUSINESS } from "@/components/ServicesData";

const STATS = [
  { n: 15, s: "+", l: "Years of Experience" },
  { n: 10000, s: "+", l: "Documents Written" },
  { n: 9000, s: "+", l: "Happy Clients" },
  { n: 8, s: "", l: "Core Services" },
];
const WHY = [
  { i: "🎯", t: "Accurate Drafting", d: "Every detail is checked so your documents stand strong." },
  { i: "⚡", t: "Fast Turnaround", d: "Most work is completed on the same day." },
  { i: "🤝", t: "Honest Guidance", d: "Clear advice and transparent charges, always." },
  { i: "🏢", t: "One-Stop Shop", d: "Writing, stamping, typing, scanning and copies under one roof." },
];

export default function Home() {
  return (
    <>
      <Hero />

      {/* Marquee */}
      <div className="overflow-hidden bg-gold py-4">
        <div className="flex w-max animate-marquee gap-10 whitespace-nowrap font-head text-lg font-semibold text-brand-dark">
          {[...SERVICES, ...SERVICES].map((s, i) => <span key={i}>{s.icon} {s.title} <span className="mx-4 opacity-40">✦</span></span>)}
        </div>
      </div>

      {/* Intro */}
      <section className="section grid items-center gap-14 md:grid-cols-2">
        <Reveal x={-80}>
          <div className="relative mx-auto max-w-md">
            <motion.div animate={{ rotate: [0, 360] }} transition={{ repeat: Infinity, duration: 40, ease: "linear" }} className="absolute -inset-6 rounded-full border-2 border-dashed border-gold" />
            <motion.img whileHover={{ scale: 1.05, rotate: 3 }} src="/LOGO copy.jpeg" alt="Pothala Consultants" className="relative rounded-full bg-white p-6 shadow-2xl" />
          </div>
        </Reveal>
        <div>
          <h2 className="text-3xl font-bold md:text-5xl"><SplitWords text="Your Trusted Partner for Every Document" /></h2>
          <Reveal delay={0.2}><p className="mt-6 text-lg leading-relaxed">At {BUSINESS.name}, we turn complicated paperwork into simple, stress-free work. Led by {BUSINESS.owner}, our team helps families and businesses write, register and manage their documents with accuracy and care.</p></Reveal>
          <Reveal delay={0.35}><Link href="/about" className="btn-green mt-8">Know More About Us</Link></Reveal>
        </div>
      </section>

      {/* Services */}
      <section className="relative bg-brand-soft">
        <div className="absolute inset-0 dots" />
        <div className="section relative">
          <div className="mb-14 text-center">
            <h2 className="text-3xl font-bold md:text-5xl"><SplitWords text="What We Offer" /></h2>
            <Reveal delay={0.2}><p className="mx-auto mt-4 max-w-2xl">Click any service to see what is included, documents required and how it works.</p></Reveal>
          </div>
          <Stagger className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((s) => (
              <Item key={s.slug}>
                <motion.div whileHover={{ y: -14, rotateX: 6, rotateY: -6 }} style={{ transformPerspective: 800 }} className="group h-full">
                  <Link href={`/services/${s.slug}`} className="relative block h-full overflow-hidden rounded-3xl bg-white p-7 shadow-lg transition hover:shadow-2xl">
                    <span className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gold/20 transition-all duration-500 group-hover:scale-[3]" />
                    <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.7 }} className="relative mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-brand text-3xl">{s.icon}</motion.div>
                    <h3 className="relative text-xl font-bold">{s.title}</h3>
                    <p className="relative mt-3 text-sm leading-relaxed">{s.short}</p>
                    <span className="relative mt-5 inline-block font-head font-semibold text-brand">Learn more <span className="inline-block transition group-hover:translate-x-2">→</span></span>
                  </Link>
                </motion.div>
              </Item>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Stats */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-dark to-brand py-20 text-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-10 px-5 text-center md:grid-cols-4">
          {STATS.map((s) => (
            <Reveal key={s.l} scale={0.85}>
              <div className="font-head text-5xl font-extrabold gold-text animate-shimmer md:text-6xl"><Counter to={s.n} suffix={s.s} /></div>
              <p className="mt-2 text-white/80">{s.l}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Why */}
      <section className="section">
        <div className="mb-14 text-center"><h2 className="text-3xl font-bold md:text-5xl"><SplitWords text="Why Choose Us" /></h2></div>
        <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {WHY.map((w) => (
            <Item key={w.t}>
              <motion.div whileHover={{ scale: 1.06 }} className="h-full rounded-3xl border-b-4 border-gold bg-white p-7 text-center shadow-lg">
                <motion.div animate={{ y: [0, -8, 0] }} transition={{ repeat: Infinity, duration: 3 }} className="text-5xl">{w.i}</motion.div>
                <h3 className="mt-4 text-xl font-bold">{w.t}</h3>
                <p className="mt-2 text-sm">{w.d}</p>
              </motion.div>
            </Item>
          ))}
        </Stagger>
      </section>

      {/* CTA */}
      <section className="px-5 pb-24">
        <Reveal scale={0.9}>
          <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] bg-gradient-to-r from-brand-dark to-brand p-10 text-center text-white md:p-16">
            <motion.div animate={{ scale: [1, 1.4, 1] }} transition={{ repeat: Infinity, duration: 6 }} className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-gold/25" />
            <h2 className="relative text-3xl font-bold text-white md:text-5xl">Need a document written today?</h2>
            <p className="relative mx-auto mt-4 max-w-xl text-white/80">Call or visit us. We will guide you step by step.</p>
            <div className="relative mt-8 flex flex-wrap justify-center gap-4">
              <motion.a whileHover={{ scale: 1.08 }} href={`tel:+${BUSINESS.phoneLink}`} className="btn-gold">📞 {BUSINESS.phone}</motion.a>
              <motion.div whileHover={{ scale: 1.08 }}><Link href="/contact" className="btn-ghost">Send an Enquiry</Link></motion.div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
