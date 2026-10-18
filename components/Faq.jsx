"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Faq({ faqs }) {
  const [open, setOpen] = useState(0);
  return (
    <div className="space-y-3">
      {faqs.map((f, i) => (
        <motion.div key={i} layout className="overflow-hidden rounded-2xl border border-brand/15 bg-white">
          <button onClick={() => setOpen(open === i ? -1 : i)} className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left font-head font-semibold text-brand-dark">
            {f.q}
            <motion.span animate={{ rotate: open === i ? 45 : 0 }} className="text-2xl text-gold-dark">+</motion.span>
          </button>
          <AnimatePresence initial={false}>
            {open === i && (
              <motion.p initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="px-6 pb-5 text-slate-600">
                {f.a}
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
}
