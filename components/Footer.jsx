import Link from "next/link";
import { SERVICES, BUSINESS } from "./ServicesData";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-brand-dark text-white/80">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-4">
        <div>
          <img src="/LOGO copy.jpeg" alt="Pothala Consultants" className="mb-4 h-20 w-20 rounded-full bg-white p-1" />
          <p className="text-sm leading-relaxed">Trusted document writing, registration and property services you can rely on.</p>
        </div>
        <div>
          <h4 className="mb-4 text-lg text-gold">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {[["/", "Home"], ["/about", "About"], ["/services", "Services"], ["/contact", "Contact"]].map(([h, l]) => (
              <li key={h}><Link href={h} className="transition hover:pl-2 hover:text-gold">{l}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-4 text-lg text-gold">Services</h4>
          <ul className="space-y-2 text-sm">
            {SERVICES.map((s) => (
              <li key={s.slug}><Link href={`/services/${s.slug}`} className="transition hover:pl-2 hover:text-gold">{s.title}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-4 text-lg text-gold">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li>{BUSINESS.owner}</li>
            <li>{BUSINESS.role}</li>
            <li>📞 <a href={`tel:+${BUSINESS.phoneLink}`} className="hover:text-gold">{BUSINESS.phone}</a></li>
            <li>✉️ {BUSINESS.email}</li>
            <li>📍 {BUSINESS.address}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-sm">© {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.</div>
    </footer>
  );
}
