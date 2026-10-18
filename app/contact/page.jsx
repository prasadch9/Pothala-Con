"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PageHeader, Reveal, Stagger, Item } from "@/components/Reveal";
import { SERVICES, BUSINESS } from "@/components/ServicesData";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const submit = (e) => { e.preventDefault(); setSent(true); }; // frontend only - connect your backend later

  const field = "w-full rounded-xl border-2 border-brand/15 bg-white px-4 py-3 outline-none transition focus:border-gold";
  const INFO = [
    ["📞", "Phone", BUSINESS.phone, `tel:+${BUSINESS.phoneLink}`],
    ["💬", "WhatsApp", "Chat with us", `https://wa.me/${BUSINESS.phoneLink}`],
    ["✉️", "Email", BUSINESS.email, `mailto:${BUSINESS.email}`],
    ["📍", "Address", BUSINESS.address],
    ["🕘", "Working Hours", BUSINESS.hours],
  ];

  return (
    <>
      <PageHeader crumbs="Home / Contact" title="Contact Us" subtitle="Visit, call or message us. We are happy to help." />
      <section className="section grid gap-12 lg:grid-cols-5">
        <Stagger className="space-y-5 lg:col-span-2">
          {INFO.map(([i, t, v, h]) => (
            <Item key={t}>
              <motion.div whileHover={{ x: 12 }} className="flex items-center gap-5 rounded-2xl bg-white p-5 shadow-lg">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-brand text-2xl">{i}</span>
                <div><p className="font-head font-bold text-brand-dark">{t}</p>{h ? <a href={h} className="text-sm hover:text-brand">{v}</a> : <p className="text-sm">{v}</p>}</div>
              </motion.div>
            </Item>
          ))}
          
<Item>
  <a
    href="https://maps.app.goo.gl/yrao1pKo7cQR9rYC6?g_st=iw"
    target="_blank"
    rel="noopener noreferrer"
    className="block overflow-hidden rounded-2xl border border-brand/20 shadow-lg"
  >
    <iframe
      src="https://maps.google.com/maps?q=https%3A%2F%2Fmaps.app.goo.gl%2Fyrao1pKo7cQR9rYC6%3Fg_st%3Diw&output=embed"
      width="100%"
      height="220"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Sri Suryadeva Nursery Google Maps"
    />
  </a>
</Item>

        </Stagger>

        <Reveal x={60} className="lg:col-span-3">
          <div className="rounded-[2rem] bg-white p-8 shadow-2xl md:p-10">
            <h2 className="text-2xl font-bold md:text-3xl">Send an Enquiry</h2>
            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div key="ok" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="py-16 text-center">
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1, rotate: 360 }} transition={{ type: "spring" }} className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-brand text-4xl text-white">✓</motion.div>
                  <h3 className="mt-5 text-2xl font-bold">Thank you!</h3>
                  <p className="mt-2">We have received your enquiry and will contact you shortly.</p>
                  <button onClick={() => setSent(false)} className="btn-green mt-6">Send Another</button>
                </motion.div>
              ) : (
                <motion.form key="form" onSubmit={submit} exit={{ opacity: 0 }} className="mt-6 grid gap-5 md:grid-cols-2">
                  <input required placeholder="Your name" className={field} />
                  <input required type="tel" placeholder="Phone number" className={field} />
                  <input type="email" placeholder="Email (optional)" className={`${field} md:col-span-2`} />
                  <select required defaultValue="" className={`${field} md:col-span-2`}>
                    <option value="" disabled>Select a service</option>
                    {SERVICES.map((s) => <option key={s.slug}>{s.title}</option>)}
                  </select>
                  <textarea required rows={5} placeholder="How can we help you?" className={`${field} md:col-span-2`} />
                  <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }} className="btn-green md:col-span-2">Send Message</motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </Reveal>
      </section>
    </>
  );
}
