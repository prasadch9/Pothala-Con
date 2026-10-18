"use client";
import { motion } from "framer-motion";

export const fadeUp = { hidden: { opacity: 0, y: 60 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } } };
export const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };

export function Reveal({ children, delay = 0, x = 0, y = 50, className = "", scale = 1 }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x, y, scale: scale === 1 ? 1 : 0.85 }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function Stagger({ children, className = "" }) {
  return (
    <motion.div className={className} variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}>
      {children}
    </motion.div>
  );
}

export function Item({ children, className = "" }) {
  return <motion.div variants={fadeUp} className={className}>{children}</motion.div>;
}

export function SplitWords({ text, className = "", delay = 0 }) {
  return (
    <span className={className} aria-label={text}>
      {text.split(" ").map((w, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom pr-[0.25em]">
          <motion.span
            className="inline-block"
            initial={{ y: "110%", rotate: 6 }}
            whileInView={{ y: 0, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: delay + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
          >
            {w}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

export function Floaters() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {[
        "left-[6%] top-[18%] h-24 w-24 border-gold/50",
        "right-[8%] top-[30%] h-16 w-16 border-white/30 rounded-full",
        "left-[40%] bottom-[10%] h-32 w-32 border-gold/30 rounded-[40%]",
        "right-[28%] top-[8%] h-10 w-10 bg-gold/30 rounded-full",
      ].map((c, i) => (
        <motion.div
          key={i}
          className={`absolute border-2 rounded-3xl ${c}`}
          animate={{ y: [0, -30, 0], rotate: [0, 90, 0] }}
          transition={{ duration: 7 + i * 2, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}

export function PageHeader({ title, subtitle, crumbs }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-dark via-brand to-brand-light pt-40 pb-24 text-white">
      <Floaters />
      <div className="relative mx-auto max-w-7xl px-5">
        <motion.p initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="mb-3 text-gold">{crumbs}</motion.p>
        <h1 className="text-4xl font-bold text-white md:text-6xl"><SplitWords text={title} delay={0.3} /></h1>
        <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.8 }} className="mt-5 max-w-2xl text-lg text-white/80">{subtitle}</motion.p>
        <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.9, duration: 1 }} style={{ originX: 0 }} className="mt-8 h-1 w-32 rounded bg-gold" />
      </div>
      <svg className="absolute bottom-0 left-0 w-full text-cream" viewBox="0 0 1440 60" preserveAspectRatio="none"><path fill="currentColor" d="M0 60V30C240 0 480 0 720 25s480 30 720 5v30z" /></svg>
    </section>
  );
}
