"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { PageHeader, Stagger, Item } from "@/components/Reveal";
import { SERVICES } from "@/components/ServicesData";

export default function ServicesPage() {
  return (
    <>
      <PageHeader crumbs="Home / Services" title="Our Services" subtitle="Everything you need for documents, property and paperwork in one place." />
      <section className="section">
        <Stagger className="grid gap-8 md:grid-cols-2">
          {SERVICES.map((s) => (
            <Item key={s.slug}>
              <motion.div whileHover={{ y: -10, scale: 1.02 }}>
                <Link href={`/services/${s.slug}`} className="group flex gap-6 rounded-3xl bg-white p-7 shadow-lg transition hover:shadow-2xl">
                  <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.7 }} className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-brand text-4xl">{s.icon}</motion.div>
                  <div>
                    <h3 className="text-xl font-bold">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed">{s.short}</p>
                    <span className="mt-3 inline-block font-head font-semibold text-brand">View details <span className="inline-block transition group-hover:translate-x-2">→</span></span>
                  </div>
                </Link>
              </motion.div>
            </Item>
          ))}
        </Stagger>
      </section>
    </>
  );
}
