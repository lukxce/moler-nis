import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { ClosingCta } from "@/components/ClosingCta";
import { JsonLd } from "@/components/JsonLd";
import { getSiteSettings } from "@/lib/data";
import { SITE_URL } from "@/lib/site-config";

const PATH = "/usluge/marmorino-premaz";

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings();
  const title = "Marmorino premaz Niš - dekorativna tehnika za zidove";
  const description = `Marmorino premaz u ${settings.city}u: italijanska tehnika sa efektom glačanog mermera. Višeslojna obrada, probni uzorak pre celog zida. Pozovite ${settings.phone}.`;

  return {
    title,
    description,
    alternates: { canonical: PATH },
    openGraph: {
      images: [`${SITE_URL}/opengraph-image`], title, description, type: "website", url: `${SITE_URL}${PATH}` },
  };
}

const faq = [
  {
    question: "Koliko slojeva marmorina se nanosi?",
    answer:
      "Najčešće tri do četiri sloja, u zavisnosti od željene dubine teksture i stepena sjaja. Svaki sloj mora da se osuši pre nanošenja sledećeg, pa posao traje duže nego standardno farbanje.",
  },
  {
    question: "Da li je marmorino pogodan za kupatilo?",
    answer:
      "Marmorino je otporan na vlagu kada se zaštiti odgovarajućim voskom ili lakom, pa može da se koristi u kupatilu, ali ne za zone direktnog kontakta sa vodom poput zida iznad kade. Za te zone preporučujem keramiku, a marmorino za ostatak kupatila.",
  },
  {
    question: "Koliko košta marmorino premaz po kvadratnom metru?",
    answer:
      "Cena zavisi od broja slojeva, veličine površine i stanja podloge. Okvirno, marmorino spada u skuplje dekorativne premaze jer zahteva najviše vremena i veštine. Tačnu cenu dajem posle besplatnog obilaska, jer podloga značajno utiče na obim pripreme.",
  },
  {
    question: "Mogu li da dobijem probni uzorak pre odluke?",
    answer:
      "Da, za svaki dekorativni posao radim probni uzorak na komadu ploče ili u neupadljivom delu prostorije, u istom osvetljenju u kom će zid stvarno izgledati. Tek kad ste zadovoljni uzorkom, prelazimo na celu površinu.",
  },
  {
    question: "Da li se marmorino može kasnije prefarbati?",
    answer:
      "Da, ali zahteva temeljniju pripremu podloge nego ravan zid. Površinu treba blago obrusiti i naneti prajmer pre nove boje ili premaza, da bi se nova boja dobro primila na glatku marmorino površinu.",
  },
  {
    question: "Koliko dugo traje marmorino premaz?",
    answer:
      "Uz normalnu upotrebu, marmorino premaz traje deset i više godina bez potrebe za popravkom. U prostorima sa čestim dodirom, poput hodnika, preporučujem dodatni zaštitni vosak koji se obnavlja na nekoliko godina.",
  },
];

export default async function MarmorinoPremazPage() {
  const settings = await getSiteSettings();

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Početna", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Usluge", item: `${SITE_URL}/usluge` },
      { "@type": "ListItem", position: 3, name: "Dekorativne tehnike", item: `${SITE_URL}/usluge/dekorativne-tehnike` },
      { "@type": "ListItem", position: 4, name: "Marmorino premaz", item: `${SITE_URL}${PATH}` },
    ],
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Marmorino dekorativni premaz",
    provider: { "@type": "HomeAndConstructionBusiness", name: settings.title, telephone: settings.phone, address: settings.address ? { "@type": "PostalAddress", streetAddress: settings.address, addressLocality: settings.city, addressCountry: "RS" } : undefined, },
    areaServed: settings.city,
    description: "Italijanska dekorativna tehnika sa efektom glačanog mermera, nanosi se u više tankih slojeva špahtlom i polira do karakterističnog sjaja.",
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
      <JsonLd data={serviceJsonLd} />
      <JsonLd data={faqJsonLd} />

      <PageHero
        eyebrow="Dekorativne tehnike"
        title="Marmorino premaz: efekat glačanog mermera na vašem zidu"
        subtitle="Italijanska tehnika koja se nanosi u više tankih slojeva špahtlom i polira do prirodnog sjaja. Svaki zid je jedinstven jer rezultat zavisi od pokreta ruke, ugla alata i osvetljenja prostorije."
        primaryCta={{ label: `Pozovite ${settings.phone}`, href: `tel:${settings.phone.replace(/\s/g, "")}` }}
        secondaryCta={{ label: "Zatražite probni uzorak", href: "/kontakt" }}
        breadcrumb={
          <nav className="mb-3 text-sm text-muted">
            <Link href="/usluge" className="hover:text-accent">Usluge</Link>
            <span className="mx-2">/</span>
            <Link href="/usluge/dekorativne-tehnike" className="hover:text-accent">Dekorativne tehnike</Link>
            <span className="mx-2">/</span>
            <span className="text-navy">Marmorino premaz</span>
          </nav>
        }
      />

      <section className="py-14">
        <Container className="max-w-3xl">
          <span className="font-mono text-sm font-semibold uppercase tracking-wide text-accent">
            Šta je marmorino
          </span>
          <h2 className="mt-2 text-2xl font-bold text-navy">
            Tehnika koja imitira mermer bez cene mermera
          </h2>
          <p className="mt-4 text-muted">
            Marmorino je dekorativna tehnika italijanskog porekla koja koristi mešavinu
            gašenog kreča i finog mermernog praha da bi se na zidu postigao efekat
            glačanog prirodnog kamena. Za razliku od prave mermerne obloge, marmorino
            premaz se nanosi direktno na pripremljen zid, nema potrebe za pločama,
            lepkom ni fugama, a rezultat ima toplinu i dubinu koju obično daje samo
            prirodni kamen.
          </p>
          <p className="mt-4 text-muted">
            Tehnika se nanosi u tri do četiri tanka sloja špahtlom, gde svaki sloj
            dodaje dubinu i tonsku razliku. Završni korak je poliranje specijalnom
            špahtlom ili glacanje voskom, čime se postiže karakterističan polu-sjaj
            koji se menja u zavisnosti od ugla svetlosti. Upravo ta igra svetla i
            senke čini marmorino drugačijim od bilo kog drugog zidnog premaza.
          </p>
        </Container>
      </section>

      <section className="wash-warm-alt border-y border-black/5 py-14">
        <Container className="max-w-3xl">
          <span className="font-mono text-sm font-semibold uppercase tracking-wide text-accent">
            Postupak
          </span>
          <h2 className="mt-2 text-2xl font-bold text-navy">
            Kako se marmorino nanosi, korak po korak
          </h2>

          <div className="mt-8 space-y-8">
            <div>
              <h3 className="font-semibold text-navy">1. Priprema podloge</h3>
              <p className="mt-1 text-sm text-muted">
                Zid mora biti savršeno ravan i suv. Svaka neravnina, pukotina ili
                mrlja od vlage se vidi kroz marmorino jasnije nego kroz običnu boju,
                jer tehnika naglašava teksturu umesto da je skriva. Ako je zid nov,
                radim standardno gletovanje i brušenje. Ako je star, prvo saniram
                oštećenja i nanosim prajmer.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-navy">2. Probni uzorak</h3>
              <p className="mt-1 text-sm text-muted">
                Pre nego što počnem na celu površinu, radim uzorak na komadu ploče
                ili u neupadljivom delu prostorije. Klijent vidi stvaran rezultat u
                stvarnom osvetljenju i bira intenzitet tona i stepen sjaja. Ovaj
                korak nikada ne preskačem, jer se marmorino ne može popravljati
                lokalno posle sušenja bez vidljive razlike.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-navy">3. Nanošenje slojeva</h3>
              <p className="mt-1 text-sm text-muted">
                Svaki sloj se nanosi tanko, širokim pokretima špahtlom, sa varijacijom
                pravca da bi se postigao prirodan, neponovljiv uzorak. Između slojeva
                je potrebno vreme sušenja, obično četiri do osam sati u zavisnosti od
                temperature i vlažnosti prostorije. Zato se marmorino ne radi u jedan
                dan po zidu, nego u dva do tri radna dana za jednu veću površinu.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-navy">4. Poliranje i zaštita</h3>
              <p className="mt-1 text-sm text-muted">
                Poslednji sloj se polira dok je još blago vlažan, čime se postiže
                sjaj i zatvara površina. Za prostore sa čestim dodirom, poput hodnika
                ili predsoblja, nanosim i zaštitni vosak koji olakšava čišćenje i
                štiti od otisaka prstiju.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-14">
        <Container className="max-w-3xl">
          <span className="font-mono text-sm font-semibold uppercase tracking-wide text-accent">
            Pogodnost
          </span>
          <h2 className="mt-2 text-2xl font-bold text-navy">
            Gde marmorino najbolje funkcioniše
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-x-12 gap-y-6 sm:grid-cols-2">
            <div className="border-b border-black/10 pb-6">
              <h3 className="font-semibold text-navy">Dnevni boravak</h3>
              <p className="mt-1 text-sm text-muted">
                Akcentni zid ili cela prostorija. Marmorino najbolje izgleda na
                velikim, neisprekidanim površinama gde svetlo može da se igra po
                teksturi tokom celog dana.
              </p>
            </div>
            <div className="border-b border-black/10 pb-6">
              <h3 className="font-semibold text-navy">Hodnik i predsoblje</h3>
              <p className="mt-1 text-sm text-muted">
                Uska prostorija dobija dubinu i toplinu. Uz zaštitni vosak,
                marmorino podnosi svakodnevni dodir bez oštećenja.
              </p>
            </div>
            <div className="border-b border-black/10 pb-6">
              <h3 className="font-semibold text-navy">Poslovni prostor</h3>
              <p className="mt-1 text-sm text-muted">
                Recepcija, kancelarija ili lobi gde zid treba da ostavi utisak
                bez slika i dekoracije. Marmorino radi taj posao sam.
              </p>
            </div>
            <div className="border-b border-black/10 pb-6">
              <h3 className="font-semibold text-navy">Kupatilo (delimično)</h3>
              <p className="mt-1 text-sm text-muted">
                Zidovi van zone direktnog kontakta sa vodom. Sa odgovarajućom
                zaštitom, marmorino podnosi povećanu vlažnost kupatila.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="wash-warm-alt border-y border-black/5 py-14">
        <Container className="max-w-3xl">
          <span className="font-mono text-sm font-semibold uppercase tracking-wide text-accent">
            Cene
          </span>
          <h2 className="mt-2 text-2xl font-bold text-navy">
            Koliko košta marmorino premaz u Nišu
          </h2>
          <p className="mt-4 text-muted">
            Marmorino spada u skuplje dekorativne premaze jer zahteva najviše slojeva,
            najduže sušenje i najsporiji ručni rad. Cena po kvadratnom metru zavisi od
            tri stvari: stanja podloge (koliko pripreme treba pre prvog sloja),
            izabrane varijante (svetliji tonovi sa manje pigmenta su nešto jeftiniji),
            i veličine površine (veća površina znači bolju cenu po metru).
          </p>
          <p className="mt-4 text-muted">
            Tačnu cenu dajem posle besplatnog obilaska, jer razlika između ravnog,
            svežeg gletovanog zida i starog zida koji zahteva kompletnu pripremu može
            biti i trećina ukupne cene posla. U cenu je uvek uključena priprema
            podloge, materijal, probni uzorak i zaštitni završni sloj.
          </p>
          <Link
            href="/cenovnik"
            className="mt-6 inline-block rounded-md bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:bg-accent-dark"
          >
            Pogledajte ceo cenovnik
          </Link>
        </Container>
      </section>

      <section className="py-14">
        <Container className="max-w-3xl">
          <span className="font-mono text-sm font-semibold uppercase tracking-wide text-accent">
            Najčešća pitanja
          </span>
          <h2 className="mt-2 text-2xl font-bold text-navy">
            Pitanja o marmorino premazu
          </h2>
          <div className="mt-8 space-y-3">
            {faq.map((item, i) => (
              <details
                key={i}
                className="group rounded-lg border border-black/5 bg-white p-6 shadow-sm"
              >
                <summary className="cursor-pointer list-none font-semibold text-navy marker:content-none">
                  <span className="flex items-center justify-between">
                    {item.question}
                    <span className="ml-4 text-accent transition group-open:rotate-45">+</span>
                  </span>
                </summary>
                <p className="mt-3 text-sm text-muted">{item.answer}</p>
              </details>
            ))}
          </div>
        </Container>
      </section>

      <ClosingCta phone={settings.phone} />
    </>
  );
}
