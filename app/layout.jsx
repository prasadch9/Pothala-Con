import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BUSINESS } from "@/components/ServicesData";

export const metadata = {
  title: "Pothala Consultants & Services | Document Writing, Registrations & More",
  description: "Document writing, registrations, e-stamping, land and plot purchases, Telugu typing, scanning, xerox, EC and market value services.",
  icons: {
    icon: "/LOGO copy.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Outfit:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
        <a href={`https://wa.me/${BUSINESS.phoneLink}`} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"
          className="fixed bottom-5 right-5 z-50 flex h-14 w-14 animate-bounce items-center justify-center rounded-full bg-[#25D366] text-2xl text-white shadow-xl">💬</a>
      </body>
    </html>
  );
}
