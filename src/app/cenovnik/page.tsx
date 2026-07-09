import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { ServiceRow } from "@/components/ServiceRow";
import { ClosingCta } from "@/components/ClosingCta";
import { JsonLd } from "@/components/JsonLd";
import { getServices, getSiteSettings } from "@/lib/data";
import { serviceCategoryLabel } from "@/lib/format";
import { SITE_URL } from "@/lib/site-config";

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings();
  const title =
    settings.seoCenovnik?.title ?? `Cenovnik molerskih i fasadnih radova u ${settings.city}u`;
  const description =
    settings.seoCenovnik?.description ??
    `Pregledne cene gletovanja, farbanja, fasadnih radova i sanacije u ${settings.city}u. Pozovite ${settings.phone} za tačnu ponudu.`;

  return {
    title,
    description,
    alternates: { canonical: "/cenovnik" },
    openGraph: { title, description, type: "website", url: `${SITE_URL}/cenovnik` },
  };
}

const categoryOrder = [
  "unutrasnji-radovi",
  "fasadni-radovi",
  "dekorativni-premazi",
  "sanacija-renoviranje",
];

export default async function CenovnikPage() {
  const [services, settings] = await Promise.all([getServices(), getSiteSettings()]);

  const grouped = categoryOrder
    .map((category) => ({
      category,
      items: services.filter((s) => s.category === category),
    }))
    .filter((group) => group.items.length > 0);

  const experienceYears = settings.foundedYear
    ? new Date().getFullYear() - settings.foundedYear
    : undefined;

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Početna", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Cenovnik usluga", item: `${SITE_URL}/cenovnik` },
    ],
  };

  const servicesJsonLd = services.map((service) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.title,
    provider: { "@type": "HomeAndConstructionBusiness", name: settings.title },
    areaServed: settings.city,
    offers: {
      "@type": "Offer",
      priceCurrency: "RSD",
      price: service.priceFrom,
      description: service.priceNote,
    },
  }));

  return (
    <>
      <JsonLd data={breadcrumbJsonLd} />
      {servicesJsonLd.map((data, i) => (
        <JsonLd key={i} data={data} />
      ))}

      <PageHero
        eyebrow="Cenovnik usluga"
        title="Cenovnik molerskih i fasadnih radova"
        subtitle={`Pregled aktuelnih cena usluga ${settings.title}. Sve cene su orijentacione i mogu zavisiti od stanja podloge i obima posla. Za tačnu ponudu pozovite ili nam pošaljite upit.`}
        primaryCta={{ label: `Pozovite ${settings.phone}`, href: `tel:${settings.phone.replace(/\s/g, "")}` }}
        secondaryCta={{ label: "Zatražite procenu", href: "/kontakt" }}
        stats={[
          ...(settings.workingHours
            ? [{ value: settings.workingHours, label: "dostupni za procenu" }]
            : []),
          { value: `${settings.city} i okolina`, label: "unutrašnji i fasadni radovi" },
          ...(experienceYears !== undefined
            ? [{ value: `${experienceYears}+ godina`, label: "iskustva na terenu" }]
            : []),
        ]}
      />

      {/* Price table */}
      <section className="py-14">
        <Container>
          <span className="text-sm font-semibold uppercase tracking-wide text-accent">Usluge</span>
          <h2 className="mt-2 text-3xl font-bold text-navy">Pregled cena</h2>
          <p className="mt-2 text-muted">
            Cene su prikazane u dinarima. Za preciznu procenu ili zakazivanje termina
            pozovite {settings.phone}.
          </p>

          {grouped.map((group) => (
            <div key={group.category} className="mt-10">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-navy">
                  {serviceCategoryLabel(group.category)}
                </h3>
                <Link
                  href={`/usluge/${group.category}`}
                  className="text-sm font-semibold text-accent hover:underline"
                >
                  Sve o ovoj usluzi →
                </Link>
              </div>
              <div className="mt-4 space-y-3">
                {group.items.map((service) => (
                  <ServiceRow
                    key={service.slug}
                    service={service}
                    href={`/usluge/${group.category}`}
                  />
                ))}
              </div>
            </div>
          ))}
        </Container>
      </section>

      <ClosingCta phone={settings.phone} />
    </>
  );
}
