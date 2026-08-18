import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/Container";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { getServicePages, getSiteSettings } from "@/lib/data";
import { SITE_URL } from "@/lib/site-config";

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings();
  const title =
    settings.seoUsluge?.title ?? `Usluge molerskih i fasadnih radova u ${settings.city}u`;
  const description =
    settings.seoUsluge?.description ??
    `Sve o unutrašnjim molerskim radovima, fasadi, dekorativnim premazima i sanaciji koje nudi ${settings.title} u ${settings.city}u.`;

  return {
    title,
    description,
    alternates: { canonical: "/usluge" },
    openGraph: {
      images: [`${SITE_URL}/opengraph-image`], title, description, type: "website", url: `${SITE_URL}/usluge` },
  };
}

export default async function UslugePage() {
  const [pages, settings] = await Promise.all([getServicePages(), getSiteSettings()]);

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Početna", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Usluge", item: `${SITE_URL}/usluge` },
    ],
  };

  return (
    <>
      <JsonLd data={breadcrumbJsonLd} />

      <PageHero
        eyebrow="Usluge"
        title={`Sve usluge ${settings.title}`}
        subtitle="Od jedne prostorije do kompletne fasade, pogledajte šta svaka usluga uključuje, a cene pogledajte na dnu svake stranice."
        primaryCta={{ label: `Pozovite ${settings.phone}`, href: `tel:${settings.phone.replace(/\s/g, "")}` }}
        secondaryCta={{ label: "Pogledajte cenovnik", href: "/cenovnik" }}
      />

      <section className="py-14">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {pages.map((page) => (
              <Link
                key={page.slug}
                href={`/usluge/${page.slug}`}
                className="group rounded-lg border border-black/5 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <h2 className="text-xl font-bold text-navy group-hover:text-accent">
                  {page.title}
                </h2>
                {page.heroSubtitle && (
                  <p className="mt-2 text-muted">{page.heroSubtitle}</p>
                )}
                <span className="mt-4 inline-block text-sm font-semibold text-accent">
                  Saznajte više →
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
