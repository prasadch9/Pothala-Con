import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHeader, Reveal, Stagger, Item } from "@/components/Reveal";
import Faq from "@/components/Faq";
import { SERVICES, BUSINESS } from "@/components/ServicesData";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}
export function generateMetadata({ params }) {
  const s = SERVICES.find((x) => x.slug === params.slug);
  return { title: s ? `${s.title} | Pothala Consultants` : "Service" };
}

export default function ServiceDetail({ params }) {
  const s = SERVICES.find((x) => x.slug === params.slug);
  if (!s) return notFound();

  return (
    <>
      <PageHeader crumbs={`Home / Services / ${s.title}`} title={s.title} subtitle={s.short} />
      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-[1fr_320px]">
        <div className="space-y-14">
          <Reveal>
            <div className="flex items-start gap-5">
              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-brand text-4xl">{s.icon}</div>
              <p className="text-lg leading-relaxed">{s.intro}</p>
            </div>
          </Reveal>

          <div>
            <h2 className="mb-6 text-2xl font-bold md:text-3xl">What&apos;s Included</h2>
            <Stagger className="grid gap-4 sm:grid-cols-2">
              {s.includes.map((x) => (
                <Item key={x}><div className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow transition hover:-translate-y-1 hover:shadow-xl"><span className="flex h-8 w-8 items-center justify-center rounded-full bg-gold font-bold text-brand-dark">✓</span>{x}</div></Item>
              ))}
            </Stagger>
          </div>

          <div>
            <h2 className="mb-6 text-2xl font-bold md:text-3xl">Documents Required</h2>
            <Reveal><ul className="space-y-3 rounded-3xl bg-brand-soft p-7">
              {s.documents.map((d) => <li key={d} className="flex gap-3"><span className="text-brand">▸</span>{d}</li>)}
            </ul></Reveal>
          </div>

          <div>
            <h2 className="mb-6 text-2xl font-bold md:text-3xl">How It Works</h2>
            <Stagger className="grid gap-5 sm:grid-cols-2">
              {s.steps.map((st, i) => (
                <Item key={st}><div className="relative h-full rounded-3xl bg-white p-6 pt-9 shadow-lg">
                  <span className="absolute -top-4 left-6 flex h-10 w-10 items-center justify-center rounded-full bg-brand font-head font-bold text-white">{i + 1}</span>
                  <p className="font-head font-semibold text-brand-dark">{st}</p>
                </div></Item>
              ))}
            </Stagger>
          </div>

          <div>
            <h2 className="mb-6 text-2xl font-bold md:text-3xl">Frequently Asked Questions</h2>
            <Faq faqs={s.faqs} />
          </div>
        </div>

        <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
          <Reveal x={40}>
            <div className="rounded-3xl bg-white p-3 shadow-lg">
              <h3 className="px-4 py-3 text-lg font-bold">All Services</h3>
              {SERVICES.map((x) => (
                <Link key={x.slug} href={`/services/${x.slug}`} className={`flex items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-medium transition hover:pl-6 ${x.slug === s.slug ? "bg-brand text-white" : "text-brand-dark hover:bg-brand-soft"}`}>
                  <span>{x.icon}</span>{x.title}
                </Link>
              ))}
            </div>
          </Reveal>
          <Reveal x={40} delay={0.15}>
            <div className="rounded-3xl bg-gradient-to-br from-brand-dark to-brand p-7 text-center text-white">
              <h3 className="text-xl font-bold text-white">Need this service?</h3>
              <p className="mt-2 text-sm text-white/80">Call us for quick assistance.</p>
              <a href={`tel:+${BUSINESS.phoneLink}`} className="btn-gold mt-5 w-full">📞 {BUSINESS.phone}</a>
              <Link href="/contact" className="btn-ghost mt-3 w-full">Send Enquiry</Link>
            </div>
          </Reveal>
        </aside>
      </section>
    </>
  );
}
