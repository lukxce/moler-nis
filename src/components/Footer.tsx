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
    <footer className="mt-10 border-t border-black/10 bg-background">
      <Container className="grid grid-cols-1 gap-10 py-16 sm:grid-cols-2 md:grid-cols-4">
        <div>
          <h3 className="text-lg font-bold text-navy">{settings.title}</h3>
          <p className="mt-2 text-sm text-muted">{settings.tagline}</p>
          {settings.foundedYear && (
            <p className="mt-4 text-sm text-muted/80">
              Radimo od {settings.foundedYear}. godine
            </p>
          )}
          <p className="mt-2 text-sm text-muted">
            {formatServiceAreas(settings.city, settings.serviceAreas)}
          </p>
        </div>

        <div>
          <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-accent">
            Brzi linkovi
          </h4>
          <ul className="mt-4 space-y-2.5 text-sm text-muted">
            <li><Link href="/usluge" className="transition hover:text-accent">Usluge</Link></li>
            <li><Link href="/cenovnik" className="transition hover:text-accent">Cenovnik</Link></li>
            <li><Link href="/blog" className="transition hover:text-accent">Blog</Link></li>
            <li><Link href="/kontakt" className="transition hover:text-accent">Kontakt</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-accent">
            Usluge
          </h4>
          <ul className="mt-4 space-y-2.5 text-sm text-muted">
            {serviceLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition hover:text-accent">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-accent">
            Kontakt
          </h4>
          <ul className="mt-4 space-y-2.5 text-sm text-muted">
            <li>
              <a href={`tel:${settings.phone.replace(/\s/g, "")}`} className="font-semibold text-navy transition hover:text-accent">
                {settings.phone}
              </a>
            </li>
            {settings.email && (
              <li>
                <a href={`mailto:${settings.email}`} className="transition hover:text-accent">
                  {settings.email}
                </a>
              </li>
            )}
            {settings.address && <li>{settings.address}</li>}
            {settings.workingHours && <li>{settings.workingHours}</li>}
          </ul>
        </div>
      </Container>

      <div className="border-t border-black/10">
        <Container className="flex flex-col items-center justify-between gap-2 py-6 text-xs text-muted sm:flex-row">
          <span>© {year} {settings.title}. Sva prava zadržana.</span>
          <span>{settings.trustBadges[0]}</span>
        </Container>
      </div>
    </footer>
  );
}
