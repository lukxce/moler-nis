import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { MolerCalculator } from "@/components/MolerCalculator";
import { JsonLd } from "@/components/JsonLd";
import { getSiteSettings } from "@/lib/data";
import { SITE_URL } from "@/lib/site-config";

const PATH = "/kalkulator-boje";

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings();
  const title = `Kalkulator boje i gleta u ${settings.city}u | koliko materijala treba`;
  const description = `Izračunajte koliko litara boje i kilograma glet mase vam treba na osnovu dimenzija sobe, broja vrata i prozora.`;

  return {
    title,
    description,
    alternates: { canonical: PATH },
    openGraph: {
      images: [`${SITE_URL}/opengraph-image`],
      title,
      description,
      type: "website",
      url: `${SITE_URL}${PATH}`,
    },
  };
}

const faq = [
  {
    question: "Da li je ovo tačna količina materijala?",
    answer:
      "Ovo je orijentaciona računica bazirana na istim vrednostima koje koristimo u praksi (1 litar boje na 7 m² po sloju, 1.2 kg startnog i 0.4 kg finog gleta po m²). Stvarna potrošnja zavisi od stanja zida, koje se najpouzdanije procenjuje na licu mesta.",
  },
  {
    question: "Zašto je stanje zida važno za potrošnju gleta?",
    answer:
      "Stariji zid sa neravninama, pukotinama ili više prethodnih slojeva boje zahteva deblji startni sloj gleta, ponekad i duplo veći od zida u novogradnji. Zato kalkulator nudi tri nivoa stanja zida.",
  },
  {
    question: "Da li da računam vrata i prozore?",
    answer:
      "Da, oduzimamo prosečnu površinu vrata i prozora od ukupne zidne površine, jer se ta mesta ne farbaju. Za sobu sa neobično velikim staklenim površinama, stvarna potrošnja biće nešto niža od procene.",
  },
];

export default async function KalkulatorBojePage() {
  const settings = await getSiteSettings();

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Početna", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Kalkulator boje", item: `${SITE_URL}${PATH}` },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <>
      <JsonLd data={breadcrumbJsonLd} />
      <JsonLd data={faqJsonLd} />

      <PageHero
        eyebrow="Besplatan alat"
        title="Koliko boje i gleta mi treba?"
        subtitle="Unesite dimenzije sobe i dobićete okvirnu potrošnju boje i glet mase, po istoj računici koju koristimo na terenu."
        breadcrumb={
          <nav className="mb-3 text-sm text-muted">
            <Link href="/" className="hover:text-accent">Početna</Link>
            <span className="mx-2">/</span>
            <span className="text-navy">Kalkulator boje</span>
          </nav>
        }
      />

      <section className="py-14">
        <Container className="max-w-2xl">
          <MolerCalculator phone={settings.phone} />
        </Container>
      </section>

      <section className="wash-warm-alt border-y border-black/5 py-14">
        <Container className="max-w-3xl">
          <span className="font-mono text-sm font-semibold uppercase tracking-wide text-accent">
            Kako računamo
          </span>
          <h2 className="mt-2 text-2xl font-bold text-navy">Odakle dolaze ovi brojevi</h2>
          <p className="mt-4 text-muted">
            Zidna površina se računa kao obim prostorije puta visina plafona,
            umanjena za prosečnu površinu vrata i prozora. Tome dodajemo
            površinu plafona (dužina puta širina). Boja se računa po pravilu
            da jedan litar kvalitetne disperzivne boje pokrije šest do osam
            kvadrata po sloju na gletovanoj, impregnisanoj podlozi, sa
            rezervom od desetak posto da vam ne ponestane usred posla.
          </p>
          <p className="mt-4 text-muted">
            Glet masa se računa odvojeno za startni sloj (koji poravnava
            neravnine, obično 1 do 1.5 kg po kvadratu) i fini sloj (tanak
            završni sloj, 0.3 do 0.5 kg po kvadratu). Stanje zida najviše
            utiče na startni sloj, jer stariji ili oštećeniji zid jednostavno
            traži deblji premaz da bi se izravnao.
          </p>
        </Container>
      </section>

      <section className="py-14">
        <Container className="max-w-3xl">
          <span className="font-mono text-sm font-semibold uppercase tracking-wide text-accent">
            Pitanja
          </span>
          <h2 className="mt-2 text-2xl font-bold text-navy">Često postavljana pitanja</h2>
          <div className="mt-6 space-y-6">
            {faq.map((item) => (
              <div key={item.question}>
                <h3 className="font-semibold text-navy">{item.question}</h3>
                <p className="mt-1 text-sm text-muted">{item.answer}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
