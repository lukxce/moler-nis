import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { ClosingCta } from "@/components/ClosingCta";
import { JsonLd } from "@/components/JsonLd";
import { getSiteSettings } from "@/lib/data";
import { SITE_URL } from "@/lib/site-config";

const PATH = "/usluge/venecijanski-premaz";

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings();
  const title = "Venecijanski premaz Niš - dekorativna tehnika sa dubokim sjajem";
  const description = `Venecijanski premaz u ${settings.city}u: najsjajnija i najdublja dekorativna tehnika za zidove. Više tankih slojeva, probni uzorak pre celog zida. Pozovite ${settings.phone}.`;

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
    question: "Koja je razlika između venecijanskog premaza i marmorina?",
    answer:
      "Obe tehnike koriste sličnu mešavinu gašenog kreča i mermernog praha i nanose se špahtlom u više slojeva. Venecijanski premaz ide u više, tanjih slojeva i završava se dužim, intenzivnijim poliranjem, pa je sjaj dublji, a površina staklastija. Marmorino ostaje malo mekši i mat-topliji na dodir i na oko. Venecijanski je zato i sporiji za izvođenje.",
  },
  {
    question: "Koliko slojeva ima venecijanski premaz?",
    answer:
      "Najčešće četiri do šest, u zavisnosti od željene dubine i intenziteta sjaja. Svaki sloj mora potpuno da se osuši pre sledećeg, a poslednja dva do tri sloja se nanose posebno tanko, jer upravo oni prave karakterističan staklast efekat.",
  },
  {
    question: "Da li venecijanski premaz podnosi vlagu u kupatilu?",
    answer:
      "Uz odgovarajući zaštitni vosak, podnosi povišenu vlažnost kupatila, ali ne i direktan kontakt sa vodom, na primer zid unutar tuš kabine. Za te zone ostajem kod keramike, a venecijanski radim na ostalim zidovima kupatila gde efekat najviše dolazi do izražaja.",
  },
  {
    question: "Zašto je venecijanski premaz skuplji od marmorina?",
    answer:
      "Zbog broja slojeva i vremena. Kad se svaki sloj mora sušiti nekoliko sati, a poslednji slojevi se poliraju ručno i sporo da bi se postigao staklast sjaj, ukupno vreme rada je duže nego kod marmorina, a cena prati utrošene sate.",
  },
  {
    question: "Mogu li da vidim uzorak pre nego što se odlučim?",
    answer:
      "Da, i kod venecijanskog premaza je ovo obavezan korak, možda i više nego kod drugih tehnika, jer se konačan sjaj vidi tek posle poliranja poslednjeg sloja. Radim uzorak na ploči, u istom osvetljenju u kom će zid stvarno stajati.",
  },
  {
    question: "Da li se venecijanski premaz može oštetiti i popraviti lokalno?",
    answer:
      "Sitne ogrebotine se mogu ublažiti dodatnim slojem voska, ali veće oštećenje se teško popravlja tačkasto bez vidljive razlike, jer sjaj zavisi od ugla poliranja na tom mestu. Kod ozbiljnijeg oštećenja realnije je preraditi celu površinu ili logičnu celinu, na primer jedan zid.",
  },
];

export default async function VenecijanskiPremazPage() {
  const settings = await getSiteSettings();

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Početna", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Usluge", item: `${SITE_URL}/usluge` },
      { "@type": "ListItem", position: 3, name: "Dekorativne tehnike", item: `${SITE_URL}/usluge/dekorativne-tehnike` },
      { "@type": "ListItem", position: 4, name: "Venecijanski premaz", item: `${SITE_URL}${PATH}` },
    ],
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Venecijanski dekorativni premaz",
    provider: { "@type": "HomeAndConstructionBusiness", name: settings.title, telephone: settings.phone },
    areaServed: settings.city,
    description: "Italijanska dekorativna tehnika sa dubokim, staklastim sjajem, nanosi se u više tankih slojeva špahtlom i dugo polira do karakterističnog efekta.",
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
        title="Venecijanski premaz: najdublji sjaj među dekorativnim tehnikama"
        subtitle="Srodna tehnika marmorinu, ali sa više slojeva i dužim poliranjem, što daje staklast, gotovo ogledalski sjaj. Svetlo se lomi po površini i menja utisak tokom dana, od mekog jutarnjeg do izraženog večernjeg sjaja."
        primaryCta={{ label: `Pozovite ${settings.phone}`, href: `tel:${settings.phone.replace(/\s/g, "")}` }}
        secondaryCta={{ label: "Zatražite probni uzorak", href: "/kontakt" }}
        breadcrumb={
          <nav className="mb-3 text-sm text-muted">
            <Link href="/usluge" className="hover:text-accent">Usluge</Link>
            <span className="mx-2">/</span>
            <Link href="/usluge/dekorativne-tehnike" className="hover:text-accent">Dekorativne tehnike</Link>
            <span className="mx-2">/</span>
            <span className="text-navy">Venecijanski premaz</span>
          </nav>
        }
      />

      <section className="py-14">
        <Container className="max-w-3xl">
          <span className="font-mono text-sm font-semibold uppercase tracking-wide text-accent">
            Šta je venecijanski premaz
          </span>
          <h2 className="mt-2 text-2xl font-bold text-navy">
            Tehnika koja ide korak dalje od marmorina
          </h2>
          <p className="mt-4 text-muted">
            Venecijanski premaz je, kao i marmorino, italijanska dekorativna tehnika zasnovana
            na mešavini gašenog kreča i finog mermernog praha. Razlika je u pristupu: gde
            marmorino staje na tri do četiri sloja i umeren sjaj, venecijanski premaz ide dalje,
            sa više, tanjih slojeva i dužim, intenzivnijim poliranjem poslednjih slojeva.
            Rezultat je dublji, gotovo staklast sjaj koji menja izgled u zavisnosti od ugla
            gledanja i izvora svetlosti.
          </p>
          <p className="mt-4 text-muted">
            Ovo je tehnika za klijente koji žele najizraženiji mogući efekat, a spremni su da
            plate razliku u vremenu izvođenja. Nije za svaki prostor niti za svaki budžet, ali
            tamo gde se koristi, obično postaje centralna tačka cele prostorije.
          </p>
        </Container>
      </section>

      <section className="wash-warm-alt border-y border-black/5 py-14">
        <Container className="max-w-3xl">
          <span className="font-mono text-sm font-semibold uppercase tracking-wide text-accent">
            Postupak
          </span>
          <h2 className="mt-2 text-2xl font-bold text-navy">
            Kako se venecijanski premaz nanosi, korak po korak
          </h2>

          <div className="mt-8 space-y-8">
            <div>
              <h3 className="font-semibold text-navy">1. Priprema podloge</h3>
              <p className="mt-1 text-sm text-muted">
                Zid mora biti savršeno ravan, jer venecijanski premaz naglašava svaku neravninu
                više nego bilo koja druga tehnika, upravo zbog visokog sjaja koji reflektuje
                svetlost pod uglom. Radim standardno gletovanje i fino brušenje, a kod starijih
                zidova prvo saniram oštećenja i nanosim odgovarajući prajmer.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-navy">2. Probni uzorak</h3>
              <p className="mt-1 text-sm text-muted">
                Ovde je uzorak obavezan korak, jer se konačan sjaj vidi tek posle poliranja
                poslednjeg sloja, ne tokom nanošenja. Radim uzorak na ploči u istom osvetljenju
                prostorije, i klijent bira intenzitet tona i stepen sjaja pre nego što se krene
                na ceo zid.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-navy">3. Nanošenje slojeva</h3>
              <p className="mt-1 text-sm text-muted">
                Prvi slojevi grade osnovu i teksturu, širokim, ukrštenim pokretima špahtlom.
                Poslednja dva do tri sloja se nanose posebno tanko i pažljivo, jer oni određuju
                finalni sjaj. Između svakog sloja je potrebno vreme sušenja, obično četiri do
                osam sati, pa se venecijanski premaz izvodi kroz tri do pet radnih dana za
                veću površinu, duže nego marmorino.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-navy">4. Dugo poliranje i zaštita</h3>
              <p className="mt-1 text-sm text-muted">
                Poliranje je najsporiji i najvažniji korak. Radi se čeličnom glet špahtlom pod
                pritiskom, u više prolaza, dok se površina doslovno ne zagreje od trenja i
                postane staklasta na dodir. Na kraju se nanosi zaštitni vosak koji dodatno
                pojačava sjaj i olakšava održavanje.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-14">
        <Container className="max-w-3xl">
          <span className="font-mono text-sm font-semibold uppercase tracking-wide text-accent">
            Marmorino ili venecijanski
          </span>
          <h2 className="mt-2 text-2xl font-bold text-navy">
            Kako da izaberete između dve srodne tehnike
          </h2>
          <p className="mt-4 text-muted">
            Ako želite topliji, mekši utisak sa umerenim sjajem i nešto kraćim rokom izvođenja,
            marmorino je bolji izbor. Ako želite maksimalan, staklast sjaj koji dominira
            prostorijom i imate vremena i budžeta za duži proces, venecijanski premaz daje
            upečatljiviji rezultat. Oba se rade istim materijalom u osnovi, razlika je u broju
            slojeva, vremenu poliranja i, na kraju, u ceni.
          </p>
          <div className="mt-6">
            <Link
              href="/usluge/marmorino-premaz"
              className="rounded-md border border-navy/20 px-5 py-2.5 text-sm font-semibold text-navy transition hover:bg-navy hover:text-white"
            >
              Pogledajte i marmorino premaz
            </Link>
          </div>
        </Container>
      </section>

      <section className="wash-warm-alt border-y border-black/5 py-14">
        <Container className="max-w-3xl">
          <span className="font-mono text-sm font-semibold uppercase tracking-wide text-accent">
            Pogodnost
          </span>
          <h2 className="mt-2 text-2xl font-bold text-navy">
            Gde venecijanski premaz najbolje funkcioniše
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-x-12 gap-y-6 sm:grid-cols-2">
            <div className="border-b border-black/10 pb-6">
              <h3 className="font-semibold text-navy">Akcentni zid u dnevnom boravku</h3>
              <p className="mt-1 text-sm text-muted">
                Najčešća primena. Jedan zid dobija sav sjaj, dok ostali ostaju u mirnijoj
                obradi, pa efekat ne zamara oko.
              </p>
            </div>
            <div className="border-b border-black/10 pb-6">
              <h3 className="font-semibold text-navy">Kupatilo (delimično)</h3>
              <p className="mt-1 text-sm text-muted">
                Zidovi van zone direktnog kontakta sa vodom. Sjaj premaza posebno dobro
                izgleda uz kupatilske svetiljke i ogledala.
              </p>
            </div>
            <div className="border-b border-black/10 pb-6">
              <h3 className="font-semibold text-navy">Ulaz i recepcija poslovnog prostora</h3>
              <p className="mt-1 text-sm text-muted">
                Prvi utisak koji dobija posetilac. Venecijanski premaz ovde radi posao koji bi
                inače nosila skupa obloga ili umetničko delo.
              </p>
            </div>
            <div className="border-b border-black/10 pb-6">
              <h3 className="font-semibold text-navy">Spavaća soba, uz umereno osvetljenje</h3>
              <p className="mt-1 text-sm text-muted">
                Uz prigušeno, toplo osvetljenje sjaj deluje mekše nego pod jakim dnevnim
                svetlom, pa je ovo iznenađujuće dobar izbor za intimniji prostor.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-14">
        <Container className="max-w-3xl">
          <span className="font-mono text-sm font-semibold uppercase tracking-wide text-accent">
            Cene
          </span>
          <h2 className="mt-2 text-2xl font-bold text-navy">
            Koliko košta venecijanski premaz u Nišu
          </h2>
          <p className="mt-4 text-muted">
            Venecijanski premaz je najskuplja dekorativna tehnika u ponudi, iznad marmorina,
            zbog broja slojeva i vremena poliranja. Cena po kvadratnom metru zavisi od stanja
            podloge, broja slojeva koje klijent bira prema uzorku, i veličine površine, gde veća
            površina po pravilu ima bolju cenu po metru.
          </p>
          <p className="mt-4 text-muted">
            Tačnu cenu dajem posle besplatnog obilaska, jer je razlika u pripremi između svežeg
            gletovanog zida i starijeg zida koji zahteva doradu podloge značajna kod ove tehnike
            više nego kod bilo koje druge. U cenu je uključena priprema podloge, materijal,
            probni uzorak i zaštitni vosak na kraju.
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
            Pitanja o venecijanskom premazu
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
