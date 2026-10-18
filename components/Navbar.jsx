"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { SERVICES, BUSINESS } from "./ServicesData";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services", sub: true },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const path = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState(false);
  const [dd, setDd] = useState(false);
  const [mSub, setMSub] = useState(false);
  const { scrollYProgress } = useScroll();
  const bar = useSpring(scrollYProgress, { stiffness: 120, damping: 25 });

  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 40);
    f();
    window.addEventListener("scroll", f);
    return () => window.removeEventListener("scroll", f);
  }, []);
  useEffect(() => { setMenu(false); setDd(false); }, [path]);

  const active = (h) => (h === "/" ? path === "/" : path.startsWith(h));

  return (
    <>
      <motion.div style={{ scaleX: bar, originX: 0 }} className="fixed left-0 top-0 z-[60] h-1 w-full bg-gold" />
      <motion.header
        initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed left-0 top-1 z-50 w-full transition-all duration-300 ${scrolled ? "bg-white/90 shadow-lg backdrop-blur-md" : "bg-transparent"}`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-2">
          <Link href="/" className="flex items-center gap-2">
            <motion.img whileHover={{ rotate: [0, -8, 8, 0] }} src="/logo copy.jpeg" alt="Pothala Consultants logo" className="h-14 w-14 rounded-full bg-white object-cover p-1 shadow" />
            <span className={`hidden font-head text-lg font-bold leading-tight sm:block ${scrolled ? "text-brand-dark" : "text-white"}`}>
              Pothala<br /><span className="text-gold">Consultants</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {LINKS.map((l) => (
              <div key={l.href} className="relative" onMouseEnter={() => l.sub && setDd(true)} onMouseLeave={() => l.sub && setDd(false)}>
                <Link href={l.href} className={`relative block px-4 py-2 font-head font-medium transition ${scrolled ? "text-brand-dark" : "text-white"} hover:text-gold`}>
                  {l.label}{l.sub && <span className="ml-1 text-xs">▾</span>}
                  {active(l.href) && <motion.span layoutId="nav-underline" className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded bg-gold" />}
                </Link>
                <AnimatePresence>
                  {l.sub && dd && (
                    <motion.div initial={{ opacity: 0, y: 15, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 10 }} className="absolute left-0 top-full w-80 pt-2">
                      <div className="overflow-hidden rounded-2xl border border-brand/10 bg-white p-2 shadow-2xl">
                        {SERVICES.map((s, i) => (
                          <motion.div key={s.slug} initial={{ opacity: 0, x: -15 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.04 }}>
                            <Link href={`/services/${s.slug}`} className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-brand-dark transition hover:bg-brand-soft hover:pl-5">
                              <span className="text-lg">{s.icon}</span>{s.title}
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
            <a href={`tel:+${BUSINESS.phoneLink}`} className="btn-gold ml-3 !px-5 !py-2.5 text-sm">📞 {BUSINESS.phone}</a>
          </nav>

          <button aria-label="Toggle menu" onClick={() => setMenu(!menu)} className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-full bg-gold lg:hidden">
            <motion.span animate={{ rotate: menu ? 45 : 0, y: menu ? 8 : 0 }} className="h-0.5 w-5 bg-brand-dark" />
            <motion.span animate={{ opacity: menu ? 0 : 1 }} className="h-0.5 w-5 bg-brand-dark" />
            <motion.span animate={{ rotate: menu ? -45 : 0, y: menu ? -8 : 0 }} className="h-0.5 w-5 bg-brand-dark" />
          </button>
        </div>

        <AnimatePresence>
          {menu && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="max-h-[80vh] overflow-y-auto bg-white lg:hidden">
              <div className="space-y-1 p-4">
                {LINKS.map((l) => (
                  <div key={l.href}>
                    <div className="flex items-center justify-between">
                      <Link href={l.href} className={`block flex-1 rounded-xl px-4 py-3 font-head font-semibold ${active(l.href) ? "bg-brand-soft text-brand" : "text-brand-dark"}`}>{l.label}</Link>
                      {l.sub && <button onClick={() => setMSub(!mSub)} className="px-4 py-3 text-brand-dark">{mSub ? "▲" : "▼"}</button>}
                    </div>
                    {l.sub && mSub && (
                      <div className="ml-4 border-l-2 border-gold pl-3">
                        {SERVICES.map((s) => (
                          <Link key={s.slug} href={`/services/${s.slug}`} className="block rounded-lg px-3 py-2 text-sm text-slate-600 hover:bg-brand-soft">{s.icon} {s.title}</Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <a href={`tel:+${BUSINESS.phoneLink}`} className="btn-green mt-3 w-full">📞 Call {BUSINESS.phone}</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
