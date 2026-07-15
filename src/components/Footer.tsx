import Link from "next/link";

import { Container } from "@/components/Container";
import { getSiteSettings } from "@/lib/data";
import { formatServiceAreas } from "@/lib/format";

const serviceLinks = [
  { href: "/usluge/krecenje", label: "Krečenje" },
  { href: "/usluge/gletovanje", label: "Gletovanje" },
  { href: "/usluge/fasadni-radovi", label: "Fasadni radovi" },
  { href: "/usluge/dekorativni-premazi", label: "Dekorativni premazi" },
  { href: "/usluge/tapete", label: "Tapete" },
  { href: "/usluge/vlaga", label: "Vlaga" },
];

export async function Footer() {
  const settings = await getSiteSettings();
  const year = new Date().getFullYear();

  return (
    <footer className="mt-10 bg-burgundy text-white">
      <div className="h-1 bg-white/20" />
      <Container className="grid grid-cols-1 gap-10 py-16 sm:grid-cols-2 md:grid-cols-4">
        <div>
          <h3 className="text-lg font-bold">{settings.title}</h3>
          <p className="mt-2 text-sm text-white/70">{settings.tagline}</p>
          {settings.foundedYear && (
            <p className="mt-4 text-sm text-white/50">
              Radimo od {settings.foundedYear}. godine
            </p>
          )}
          <p className="mt-2 text-sm text-white/70">
            {formatServiceAreas(settings.city, settings.serviceAreas)}
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-white/50">
            Brzi linkovi
          </h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/usluge" className="hover:text-white">Usluge</Link></li>
            <li><Link href="/cenovnik" className="hover:text-white">Cenovnik</Link></li>
            <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
            <li><Link href="/kontakt" className="hover:text-white">Kontakt</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-white/50">
            Usluge
          </h4>
          <ul className="mt-4 space-y-2 text-sm">
            {serviceLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-white/50">
            Kontakt
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li>
              <a href={`tel:${settings.phone.replace(/\s/g, "")}`} className="hover:text-white">
                {settings.phone}
              </a>
            </li>
            {settings.email && (
              <li>
                <a href={`mailto:${settings.email}`} className="hover:text-white">
                  {settings.email}
                </a>
              </li>
            )}
            {settings.address && <li>{settings.address}</li>}
            {settings.workingHours && <li>{settings.workingHours}</li>}
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-2 py-6 text-xs text-white/50 sm:flex-row">
          <span>© {year} {settings.title}. Sva prava zadržana.</span>
          <span>{settings.trustBadges[0]}</span>
        </Container>
      </div>
    </footer>
  );
}
