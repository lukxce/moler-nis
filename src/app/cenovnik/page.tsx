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
    openGraph: {
      images: [`${SITE_URL}/opengraph-image`], title, description, type: "website", url: `${SITE_URL}/cenovnik` },
  };
}

const categoryOrder = [
  "krecenje",
  "gletovanje",
  "fasadni-radovi",
  "dekorativni-premazi",
  "tapete",
  "vlaga",
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

  const priceFaq = [
    {
      question: `Koliko košta moler u ${settings.city}u?`,
      answer: `Zavisi od vrste posla. Krečenje bez prethodne pripreme podloge je najjeftinija stavka, dok gletovanje dvoslojno sa bandažiranjem spojeva ide od 380 do 480 dinara po kvadratu, u zavisnosti od stanja postojećeg zida. Za tačnu cenu za vaš stan ili kuću u ${settings.city}u, najbolje je zakazati besplatan obilazak, jer stanje podloge menja cenu i do 30 procenata.`,
    },
    {
      question: "Kolika je cena gletovanja po kvadratu?",
      answer: "Dvoslojno gletovanje zidova sa bandažiranjem spojeva i finim brušenjem košta od 380 do 480 dinara po m2, zavisno od stanja postojeće podloge. Gletovanje plafona je nešto skuplje, 420 do 520 dinara po m2, jer je rad nad glavom sporiji i zahteva više pažnje oko sanacije manjih pukotina pre nanošenja mase.",
    },
    {
      question: "Koliko košta sanacija kapilarne vlage?",
      answer: "Sanacija kapilarne vlage u prizemlju, sa sanacionim malterom i odgovarajućim premazima, kreće se od 550 do 750 dinara po m2. Ovo je orijentaciona cena, tačan iznos zavisi od obilaska i procene uzroka vlage, jer kapilarna vlaga iz temelja često zahteva drugačiji pristup od obične vlažne mrlje na zidu.",
    },
    {
      question: "Da li su cene molerskih radova iste za ceo grad ili zavise od lokacije?",
      answer: `Cena rada je ista na teritoriji cele opštine ${settings.city}, izlazak na teren se ne naplaćuje posebno. Ono što stvarno menja cenu je stanje zida, visina plafona i pristupačnost prostora, ne konkretan deo grada.`,
    },
  ];

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: priceFaq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  const servicesJsonLd = services.map((service) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.title,
    provider: { "@type": "HomeAndConstructionBusiness", name: settings.title, address: settings.address ? { "@type": "PostalAddress", streetAddress: settings.address, addressLocality: settings.city, addressCountry: "RS" } : undefined, },
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
      <JsonLd data={faqJsonLd} />
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

      {/* Intro: what actually drives moler pricing in Niš */}
      <section className="py-14">
        <Container className="max-w-3xl">
          <span className="font-mono text-sm font-semibold uppercase tracking-wide text-accent">Koliko košta moler</span>
          <h2 className="mt-2 text-3xl font-bold text-navy">Od čega zavisi cena molerskih radova</h2>
          <p className="mt-4 text-muted">
            Cena molera u {settings.city}u najviše zavisi od stanja postojeće podloge, ne od
            same kvadrature. Zid koji je već ravan i bez pukotina zahteva samo krečenje, dok
            stariji zid sa oštećenjima traži puno gletovanje, bandažiranje spojeva i brušenje
            pre nego što uopšte dođe do farbanja, a razlika u ceni između ta dva slučaja može
            biti i preko 30 procenata.
          </p>
          <p className="mt-4 text-muted">
            Zato radimo besplatan obilazak pre davanja konačne ponude, umesto da cenu
            računamo samo po kvadraturi bez uvida u stanje zida. Ispod je pregled cena po
            usluzi, sa rasponom koji pokriva uobičajene slučajeve na terenu u {settings.city}u
            i okolini.
          </p>
        </Container>
      </section>

      {/* Price table */}
      <section className="py-4">
        <Container>
          <span className="font-mono text-sm font-semibold uppercase tracking-wide text-accent">Usluge</span>
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

      {/* FAQ: direct answers to the most common price questions */}
      <section className="bg-surface py-14">
        <Container className="max-w-3xl">
          <span className="font-mono text-sm font-semibold uppercase tracking-wide text-accent">Pitanja o ceni</span>
          <h2 className="mt-2 text-3xl font-bold text-navy">Najčešća pitanja o cenama</h2>
          <div className="mt-8 space-y-6">
            {priceFaq.map((item) => (
              <div key={item.question}>
                <h3 className="font-semibold text-navy">{item.question}</h3>
                <p className="mt-1 text-muted">{item.answer}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <ClosingCta phone={settings.phone} />
    </>
  );
}
