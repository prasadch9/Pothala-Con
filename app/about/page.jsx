"use client";
import { motion } from "framer-motion";
import { PageHeader, Reveal, Stagger, Item, SplitWords } from "@/components/Reveal";
import { BUSINESS } from "@/components/ServicesData";

const VALUES = [
  { i: "🔍", t: "Accuracy", d: "Names, numbers and survey details are verified before anything is printed." },
  { i: "🔒", t: "Confidentiality", d: "Your personal and property information stays private." },
  { i: "💬", t: "Clarity", d: "We explain every step in simple language." },
  { i: "⏱️", t: "Punctuality", d: "We respect your time and deliver when we promise." },
];
const TIMELINE = [
  { y: "Beginning", t: "Started as a small document writing desk serving local families." },
  { y: "Growth", t: "Added registrations, e-stamping and property transaction support." },
  { y: "Today", t: "A complete one-stop centre for documents, typing, scanning and copies." },
];

export default function About() {
  return (
    <>
      <PageHeader crumbs="Home / About" title="About Us" subtitle="Experienced document professionals who make legal paperwork simple." />
      <section className="section grid items-center gap-14 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold md:text-4xl"><SplitWords text="Who We Are" /></h2>
          <Reveal delay={0.2}><p className="mt-5 text-lg leading-relaxed">{BUSINESS.name} is a document writing and consultancy centre led by {BUSINESS.owner}. We help individuals, families and businesses prepare, stamp, register and manage important documents with confidence.</p></Reveal>
          <Reveal delay={0.35}><p className="mt-4 leading-relaxed">From a simple affidavit to a full property purchase, our approach is the same: understand your need, prepare error-free paperwork and guide you until the work is done.</p></Reveal>
        </div>
        <Reveal x={80}>
          <motion.div whileHover={{ rotate: -2, scale: 1.03 }} className="relative rounded-[2rem] bg-gradient-to-br from-brand to-brand-dark p-10 text-white shadow-2xl">
            <div className="absolute -right-4 -top-4 h-20 w-20 animate-float rounded-full bg-gold" />
            <p className="font-head text-2xl font-semibold">“Every document tells a story. We make sure yours is written right.”</p>
            <p className="mt-6 text-gold">{BUSINESS.owner}</p>
            <p className="text-sm text-white/70">{BUSINESS.role}</p>
          </motion.div>
        </Reveal>
      </section>

      <section className="bg-brand-soft">
        <div className="section">
          <div className="grid gap-8 md:grid-cols-2">
            {[["🎯", "Our Mission", "To deliver accurate, affordable and timely document services that protect our clients' rights and save their time."], ["🔭", "Our Vision", "To be the most trusted document and consultancy centre in our community."]].map(([i, t, d], k) => (
              <Reveal key={t} x={k ? 60 : -60}>
                <motion.div whileHover={{ y: -10 }} className="h-full rounded-3xl bg-white p-9 shadow-lg">
                  <div className="text-5xl">{i}</div><h3 className="mt-4 text-2xl font-bold">{t}</h3><p className="mt-3">{d}</p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="mb-12 text-center text-3xl font-bold md:text-5xl"><SplitWords text="Our Values" /></h2>
        <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((v) => (
            <Item key={v.t}><motion.div whileHover={{ scale: 1.07, rotate: 1 }} className="h-full rounded-3xl border-t-4 border-gold bg-white p-7 text-center shadow-lg">
              <div className="text-5xl">{v.i}</div><h3 className="mt-3 text-xl font-bold">{v.t}</h3><p className="mt-2 text-sm">{v.d}</p>
            </motion.div></Item>
          ))}
        </Stagger>
      </section>

      <section className="mx-auto max-w-3xl px-5 pb-24">
        <h2 className="mb-12 text-center text-3xl font-bold md:text-5xl"><SplitWords text="Our Journey" /></h2>
        <div className="relative border-l-4 border-gold pl-8">
          {TIMELINE.map((t, i) => (
            <Reveal key={t.y} x={50} delay={i * 0.1}>
              <div className="relative mb-10">
                <motion.span initial={{ scale: 0 }} whileInView={{ scale: 1 }} className="absolute -left-[3.05rem] top-1 h-6 w-6 rounded-full border-4 border-cream bg-brand" />
                <h3 className="text-xl font-bold text-brand">{t.y}</h3><p>{t.t}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
