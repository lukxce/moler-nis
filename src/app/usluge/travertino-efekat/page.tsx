import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { ClosingCta } from "@/components/ClosingCta";
import { JsonLd } from "@/components/JsonLd";
import { getSiteSettings } from "@/lib/data";
import { SITE_URL } from "@/lib/site-config";

const PATH = "/usluge/travertino-efekat";

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings();
  const title = "Travertino premaz Niš - dekorativna tehnika sa efektom kamena";
  const description = `Travertino premaz u ${settings.city}u: imitacija travertino kamena sa porama i slojevitom teksturom. Probni uzorak pre zida. Pozovite ${settings.phone}.`;

  return {
    title,
    description,
    alternates: { canonical: PATH },
    openGraph: { title, description, type: "website", url: `${SITE_URL}${PATH}` },
  };
}

const faq = [
  {
    question: "Da li travertino premaz stvarno izgleda kao pravi kamen?",
    answer:
      "Kad se radi ručno i pažljivo, da. Ključna razlika između uverljivog travertina i onog koji deluje veštački je u nepravilnosti pora, prava travertino stena nema jednake, ponovljene rupice u pravilnom razmaku, nego nasumičan raspored različitih veličina. Zato pore radim slobodnom rukom, alatom i sunđerom, nikad šablonom koji bi ponavljao isti motiv.",
  },
  {
    question: "Da li se pore travertino premaza mogu videti i opipati?",
    answer:
      "Vidljive su jasno, dubina zavisi od toga koliko duboko se radi tekstura. Na dodir su blago udubljene, ne oštre ili grube, jer se ivice svake pore blago zaglađuju u poslednjem prolazu da ne grebu i da se lakše čiste.",
  },
  {
    question: "Koje boje su dostupne za travertino premaz?",
    answer:
      "Klasičan travertino ide u toplim, kamenim tonovima, bež, peščana, slonovača, blaga karamela, jer ti tonovi najbolje nose slojevitu teksturu i senčenje. Radim i hladnije, sivkaste varijante po želji, ali toplije nijanse ostaju najbliže izgledu prirodnog kamena.",
  },
  {
    question: "Koliko slojeva ima travertino premaz?",
    answer:
      "Obično tri sloja: bazni sloj koji daje ton, sloj u kom se kreira tekstura sa porama, i završni sloj senčenja koji naglašava slojevitost kamena. Svaki sloj mora da se osuši pre sledećeg, pa je travertino po broju slojeva sličan sahara premazu, brži od marmorina i venecijanskog premaza.",
  },
  {
    question: "Da li je travertino premaz pogodan za poslovni prostor?",
    answer:
      "Da, ovo je jedna od najčešćih primena. Lobiji, recepcije i hodnici poslovnih prostora dobijaju utisak prirodnog kamena bez težine i cene prave kamene obloge, a uz zaštitni premaz podnose i pojačan saobraćaj ljudi tokom dana.",
  },
  {
    question: "Mogu li da vidim uzorak pre nego što se odlučim?",
    answer:
      "Da, kod travertino premaza je ovo posebno važan korak jer se uverljivost teksture najbolje proceni uživo, ne na fotografiji. Radim probni uzorak na ploči ili u neupadljivom delu prostorije, u dnevnom i večernjem osvetljenju, pre nego što pređem na ceo zid.",
  },
];

export default async function TravertinoEfekatPage() {
  const settings = await getSiteSettings();

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Početna", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Usluge", item: `${SITE_URL}/usluge` },
      { "@type": "ListItem", position: 3, name: "Dekorativne tehnike", item: `${SITE_URL}/usluge/dekorativne-tehnike` },
      { "@type": "ListItem", position: 4, name: "Travertino efekat", item: `${SITE_URL}${PATH}` },
    ],
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Travertino dekorativni premaz",
    provider: { "@type": "HomeAndConstructionBusiness", name: settings.title, telephone: settings.phone },
    areaServed: settings.city,
    description: "Dekorativna tehnika koja imitira prirodni travertino kamen, sa karakterističnim porama i slojevitom teksturom, nanosi se špahtlom i alatom za oblikovanje pora u nekoliko slojeva.",
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
        title="Travertino efekat: prirodni kamen na zidu, bez težine kamena"
        subtitle="Dekorativna tehnika koja imitira travertino, kamen prepoznatljiv po sitnim porama i slojevitoj, taloženoj teksturi. Pore i senčenje rade se ručno, alatom i sunđerom, da rezultat izgleda kao prava stena, ne kao ponovljen šablon."
        primaryCta={{ label: `Pozovite ${settings.phone}`, href: `tel:${settings.phone.replace(/\s/g, "")}` }}
        secondaryCta={{ label: "Zatražite probni uzorak", href: "/kontakt" }}
        breadcrumb={
          <nav className="mb-3 text-sm text-muted">
            <Link href="/usluge" className="hover:text-accent">Usluge</Link>
            <span className="mx-2">/</span>
            <Link href="/usluge/dekorativne-tehnike" className="hover:text-accent">Dekorativne tehnike</Link>
            <span className="mx-2">/</span>
            <span className="text-navy">Travertino efekat</span>
          </nav>
        }
      />

      <section className="py-14">
        <Container className="max-w-3xl">
          <span className="font-mono text-sm font-semibold uppercase tracking-wide text-accent">
            Šta je travertino efekat
          </span>
          <h2 className="mt-2 text-2xl font-bold text-navy">
            Tehnika koja imitira kamen nastao slojevitim taloženjem
          </h2>
          <p className="mt-4 text-muted">
            Travertino je vrsta krečnjačkog kamena koji u prirodi nastaje taloženjem oko
            izvora mineralne vode, zbog čega ima dve prepoznatljive osobine: sitne,
            nepravilno raspoređene pore i blago slojevitu, taloženu strukturu. Travertino
            premaz na zidu oponaša baš te dve osobine, bez potrebe za pravim kamenom, pločama
            ili fugama.
          </p>
          <p className="mt-4 text-muted">
            Rezultat zavisi mnogo više od ruke izvođača nego kod većine drugih dekorativnih
            tehnika. Pore se ne prave šablonom, jer bi se tada videla ponavljajuća šara i
            efekat bi delovao veštački, plastično. Umesto toga, pore i senčenje rade se
            slobodnom rukom, alatom i sunđerom, sloj po sloj, dok se ne dobije nepravilnost
            kakvu ima prava stena.
          </p>
        </Container>
      </section>

      <section className="wash-warm-alt border-y border-black/5 py-14">
        <Container className="max-w-3xl">
          <span className="font-mono text-sm font-semibold uppercase tracking-wide text-accent">
            Postupak
          </span>
          <h2 className="mt-2 text-2xl font-bold text-navy">
            Kako se travertino premaz nanosi, korak po korak
          </h2>

          <div className="mt-8 space-y-8">
            <div>
              <h3 className="font-semibold text-navy">1. Priprema podloge</h3>
              <p className="mt-1 text-sm text-muted">
                Zid treba da bude čist, suv i ravan, standardnim gletovanjem ako je potrebno.
                Travertino je tolerantniji na sitne nepravilnosti podloge od sjajnih tehnika
                poput venecijanskog premaza, jer mat, teksturisana površina manje reflektuje
                svetlost pod uglom i sitne mane zida se ne ističu.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-navy">2. Probni uzorak</h3>
              <p className="mt-1 text-sm text-muted">
                Radim uzorak na komadu ploče ili u neupadljivom delu prostorije, u dnevnom i
                večernjem osvetljenju. Kod travertina je uzorak posebno bitan jer klijent tu
                prvi put vidi da li tekstura izgleda uverljivo, pre nego što se pređe na ceo
                zid.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-navy">3. Bazni sloj</h3>
              <p className="mt-1 text-sm text-muted">
                Prvi sloj se nanosi špahtlom ravnomerno, u toplom, kamenom tonu koji čini
                osnovu. Ovaj sloj određuje bazni ton na koji se dalje gradi tekstura i
                senčenje, pa mora biti ujednačen bez praznina.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-navy">4. Kreiranje pora</h3>
              <p className="mt-1 text-sm text-muted">
                Dok je sloj još svež, alatom i nagužvanim sunđerom ili folijom pravim
                udubljenja različite veličine i dubine, nasumično raspoređena, baš kako se
                pore pojavljuju u prirodnom kamenu. Ovo je korak koji najviše zavisi od
                iskustva, jer previše pravilan raspored odmah oda da je u pitanju premaz, a
                ne prava stena.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-navy">5. Senčenje i slojevitost</h3>
              <p className="mt-1 text-sm text-muted">
                Poslednji sloj se nanosi tanko i mestimično, tehnikom suvog premazivanja i
                blagog brisanja, čime se naglašavaju vodoravne linije slojevitosti i dubina
                pora. Ovaj korak daje utisak da je zid nastao taloženjem kroz vreme, ne da je
                obojen u jednom potezu.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-navy">6. Zaštita</h3>
              <p className="mt-1 text-sm text-muted">
                Nanosim zaštitni premaz koji zaglađuje ivice pora da ne grebu i olakšava
                čišćenje, posebno bitno u prostorima sa čestim dodirom poput hodnika i
                recepcija.
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
            Gde travertino efekat najbolje funkcioniše
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-x-12 gap-y-6 sm:grid-cols-2">
            <div className="border-b border-black/10 pb-6">
              <h3 className="font-semibold text-navy">Lobi i recepcija poslovnog prostora</h3>
              <p className="mt-1 text-sm text-muted">
                Prvi utisak koji dobija posetilac. Travertino ovde daje ozbiljnost i
                trajnost prirodnog kamena, bez cene i težine kamene obloge.
              </p>
            </div>
            <div className="border-b border-black/10 pb-6">
              <h3 className="font-semibold text-navy">Dnevni boravak</h3>
              <p className="mt-1 text-sm text-muted">
                Akcentni zid ili cela prostorija. Topli, zemljani tonovi travertina se dobro
                uklapaju uz drvo, kamen i prirodne materijale u enterijeru.
              </p>
            </div>
            <div className="border-b border-black/10 pb-6">
              <h3 className="font-semibold text-navy">Komercijalni prostori</h3>
              <p className="mt-1 text-sm text-muted">
                Kafići, saloni i izlozi gde se traži utisak prirodnog materijala bez
                troška prave kamene fasade ili obloge.
              </p>
            </div>
            <div className="border-b border-black/10 pb-6">
              <h3 className="font-semibold text-navy">Hodnik i predsoblje</h3>
              <p className="mt-1 text-sm text-muted">
                Uska prostorija dobija teksturu i dubinu. Uz zaštitni premaz, travertino
                podnosi svakodnevni prolaz i dodir.
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
            Koliko košta travertino premaz u Nišu
          </h2>
          <p className="mt-4 text-muted">
            Travertino je po ceni bliži sahara efektu nego marmorinu ili venecijanskom
            premazu, jer ima tri sloja umesto četiri i više. Cena po kvadratnom metru zavisi
            od stanja podloge, veličine površine i dubine teksture koju klijent bira prema
            uzorku.
          </p>
          <p className="mt-4 text-muted">
            Tačnu cenu dajem posle besplatnog obilaska, jer priprema starijeg zida sa
            neravninama ili prethodnim slojevima boje traži više vremena od svežeg,
            gletovanog zida. U cenu je uključena priprema podloge, materijal, probni uzorak
            i zaštitni završni sloj.
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
            Pitanja o travertino premazu
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
