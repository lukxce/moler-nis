import Link from "next/link";

import { Container } from "@/components/Container";
import { Logo } from "@/components/Logo";
import { MobileMenu } from "@/components/MobileMenu";
import { getSiteSettings } from "@/lib/data";

const serviceLinks = [
  { href: "/usluge/krecenje", label: "Krečenje" },
  { href: "/usluge/gletovanje", label: "Gletovanje" },
  { href: "/usluge/fasadni-radovi", label: "Fasadni radovi" },
  {
    href: "/usluge/dekorativne-tehnike",
    label: "Dekorativne tehnike",
    children: [
      { href: "/usluge/marmorino-premaz", label: "Marmorino premaz" },
      { href: "/usluge/venecijanski-premaz", label: "Venecijanski premaz" },
      { href: "/usluge/sahara-premaz", label: "Sahara premaz" },
    ],
  },
  { href: "/usluge/tapete", label: "Tapete" },
  { href: "/usluge/vlaga", label: "Vlaga" },
];

const navLinks = [
  { href: "/cenovnik", label: "Cenovnik" },
  { href: "/blog", label: "Blog" },
  { href: "/kontakt", label: "Kontakt" },
];

export async function Header() {
  const settings = await getSiteSettings();

  return (
    <header className="sticky top-0 z-40 border-b border-black/5 bg-white/90 backdrop-blur">
      {/* Mobilni red: burger levo, logo centrirano, CTA desno */}
      <Container className="relative grid grid-cols-[auto_1fr_auto] items-center gap-2 py-4 md:hidden">
        <div className="flex justify-start">
          <MobileMenu serviceLinks={serviceLinks} navLinks={navLinks} />
        </div>
        <Link href="/" className="flex min-w-0 items-center justify-center text-base font-bold text-navy">
          <Logo title={settings.title} className="justify-center" />
        </Link>
        <div className="flex justify-end">
          <a
            href={`tel:${settings.phone.replace(/\s/g, "")}`}
            className="rounded-md bg-accent px-4 py-2 text-sm font-semibold text-white transition hover:bg-accent-dark"
          >
            Pozovi
          </a>
        </div>
      </Container>

      {/* Desktop red */}
      <Container className="hidden items-center justify-between py-4 md:flex">
        <Link href="/" className="flex items-center text-lg font-bold text-navy">
          <Logo title={settings.title} />
        </Link>
        <nav className="flex items-center gap-6 text-sm font-medium text-navy">
          <div className="group relative">
            <Link href="/usluge" className="flex items-center gap-1 hover:text-accent">
              Usluge
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5">
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.084l3.71-3.855a.75.75 0 111.08 1.04l-4.25 4.417a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z" clipRule="evenodd" />
              </svg>
            </Link>
            <div className="invisible absolute left-0 top-full w-64 rounded-lg border border-black/5 bg-white p-2 opacity-0 shadow-lg transition group-hover:visible group-hover:opacity-100">
              {serviceLinks.map((link) =>
                link.children ? (
                  <div key={link.href} className="group/sub relative">
                    <Link
                      href={link.href}
                      className="flex items-center justify-between rounded-xl px-4 py-2.5 text-sm text-navy hover:bg-surface hover:text-accent"
                    >
                      {link.label}
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5">
                        <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.084 10 7.23 6.29a.75.75 0 111.04-1.08l4.417 4.25a.75.75 0 010 1.08l-4.417 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                      </svg>
                    </Link>
                    <div className="invisible absolute left-full top-0 w-56 rounded-lg border border-black/5 bg-white p-2 opacity-0 shadow-lg transition group-hover/sub:visible group-hover/sub:opacity-100">
                      <Link
                        href={link.href}
                        className="block rounded-xl px-4 py-2.5 text-sm font-medium text-navy hover:bg-surface hover:text-accent"
                      >
                        Sve tehnike
                      </Link>
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block rounded-xl px-4 py-2.5 text-sm text-navy hover:bg-surface hover:text-accent"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block rounded-xl px-4 py-2.5 text-sm text-navy hover:bg-surface hover:text-accent"
                  >
                    {link.label}
                  </Link>
                )
              )}
            </div>
          </div>
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-accent">
              {link.label}
            </Link>
          ))}
        </nav>
        <a
          href={`tel:${settings.phone.replace(/\s/g, "")}`}
          className="rounded-md bg-accent px-5 py-2 text-sm font-semibold text-white transition hover:bg-accent-dark"
        >
          {settings.phone}
        </a>
      </Container>
    </header>
  );
}
