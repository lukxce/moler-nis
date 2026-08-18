import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { ClosingCta } from "@/components/ClosingCta";
import { JsonLd } from "@/components/JsonLd";
import { getSiteSettings } from "@/lib/data";
import { SITE_URL } from "@/lib/site-config";

const PATH = "/usluge/stencil-art";

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings();
  const title = "Stencil art zidovi Niš - šablon dizajn i geometrijski uzorci";
  const description = `Stencil art na zidovima u ${settings.city}u: geometrijski uzorci, motivi i akcentni zidovi rađeni šablonom. Probni uzorak pre celog zida. Pozovite ${settings.phone}.`;

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
    question: "Šta je tačno stencil art na zidu?",
    answer:
      "To je tehnika u kojoj se preko već okrečenog i suvog zida nanosi uzorak kroz šablon, najčešće od tanke plastike ili folije. Šablon se fiksira na zid, boja se nanosi valjkom ili sunđerom preko otvora, i posle skidanja šablona ostaje čist, oštar motiv. Za razliku od dekorativnih premaza poput marmorina ili travertina, stencil art ne menja teksturu zida nego dodaje crtež na ravnu, obojenu površinu.",
  },
  {
    question: "Koliko košta stencil art po kvadratu u Nišu?",
    answer:
      "Stencil art je među pristupačnijim dekorativnim tehnikama, jeftiniji od marmorina i venecijanskog premaza, jer se radi preko zida koji je već okrečen i ne zahteva više slojeva špahtlom. Cena po kvadratnom metru zavisi od gustine uzorka, broja boja i toga da li se ponavlja jednostavan geometrijski motiv ili se radi složena kompozicija. Tačnu cenu dajem posle besplatnog obilaska, jer se gustina uzorka najbolje proceni na licu mesta.",
  },
  {
    question: "Da li se stencil art radi preko postojeće boje ili treba prvo krečiti?",
    answer:
      "Zid mora biti ravan, čist i potpuno suv, sa bojom koja dobro drži. Ako je postojeći sloj u dobrom stanju i u tonu koji vam odgovara kao podloga, radi se direktno preko njega. Ako je zid oštećen, prljav ili u pogrešnom tonu, prvo ide krečenje, pa tek posle sušenja stencil. Skraćivanje tog koraka je najčešći razlog da uzorak kasnije popuca ili se oljušti zajedno sa starom bojom.",
  },
  {
    question: "Može li se stencil art uraditi u dečjoj sobi?",
    answer:
      "Da, i to je jedna od najčešćih primena. U dečjoj sobi koristim boje bez jakog mirisa i uzorke koji se lako kombinuju sa nameštajem koji se menja kako dete raste, na primer sitne geometrijske motive ili tačkasti raspored umesto velikih likova koji brzo dosade. Soba se može koristiti već sledećeg dana, pošto se stencil radi tankim slojem koji se suši brzo.",
  },
  {
    question: "Da li se uzorak može ukloniti ako mi dosadi?",
    answer:
      "Može, jednostavnije nego kod bilo koje druge dekorativne tehnike. Pošto stencil art ne menja teksturu zida, dovoljno je prekrečiti zid u dva sloja i motiv nestaje bez brušenja i skidanja slojeva. Kod marmorina, venecijanskog ili travertino premaza uklanjanje znači skidanje celog dekorativnog sloja, što je znatno veći posao.",
  },
  {
    question: "Koliko traje izrada stencil art zida?",
    answer:
      "Za jedan akcentni zid standardne veličine, uz uzorak srednje gustine i jednu boju, posao se najčešće završi u jednom radnom danu, pod uslovom da je podloga već spremna. Ako se prvo kreči, treba računati dan više za sušenje pre nego što uzorak može da se radi. Složeniji uzorci sa dve ili tri boje traže da se svaka boja osuši pre sledeće, pa se rok produžava za po pola dana po boji.",
  },
  {
    question: "Da li mogu da donesem svoj motiv ili šablon?",
    answer:
      "Da. Ako imate konkretnu ideju, fotografiju ili već kupljen šablon, radim po njemu. Za motive koji nisu standardni šablon se izrađuje po meri, što dodaje na ceni i na roku, ali otvara mogućnost da zid bude potpuno jedinstven. U svakom slučaju radim probni otisak pre nego što pređem na ceo zid.",
  },
];

export default async function StencilArtPage() {
  const settings = await getSiteSettings();

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Početna", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Usluge", item: `${SITE_URL}/usluge` },
      { "@type": "ListItem", position: 3, name: "Dekorativne tehnike", item: `${SITE_URL}/usluge/dekorativne-tehnike` },
      { "@type": "ListItem", position: 4, name: "Stencil art", item: `${SITE_URL}${PATH}` },
    ],
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Stencil art, šablon dizajn na zidu",
    provider: { "@type": "HomeAndConstructionBusiness", name: settings.title, telephone: settings.phone },
    areaServed: settings.city,
    description: "Dekorativna tehnika u kojoj se preko okrečenog zida šablonom nanosi geometrijski uzorak ili motiv u jednoj ili više boja, najčešće na akcentnom zidu.",
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
        title="Stencil art: uzorak na zidu, bez presvlačenja cele sobe"
        subtitle="Šablonska tehnika kojom se preko okrečenog zida nanosi geometrijski uzorak ili motiv. Najbrža i najpristupačnija dekorativna tehnika, a jedina koja se kasnije uklanja običnim krečenjem, bez skidanja slojeva."
        primaryCta={{ label: `Pozovite ${settings.phone}`, href: `tel:${settings.phone.replace(/\s/g, "")}` }}
        secondaryCta={{ label: "Zatražite probni uzorak", href: "/kontakt" }}
        breadcrumb={
          <nav className="mb-3 text-sm text-muted">
            <Link href="/usluge" className="hover:text-accent">Usluge</Link>
            <span className="mx-2">/</span>
            <Link href="/usluge/dekorativne-tehnike" className="hover:text-accent">Dekorativne tehnike</Link>
            <span className="mx-2">/</span>
            <span className="text-navy">Stencil art</span>
          </nav>
        }
      />

      <section className="py-14">
        <Container className="max-w-3xl">
          <span className="font-mono text-sm font-semibold uppercase tracking-wide text-accent">
            Šta je stencil art
          </span>
          <h2 className="mt-2 text-2xl font-bold text-navy">
            Crtež na zidu, a ne nova tekstura zida
          </h2>
          <p className="mt-4 text-muted">
            Stencil art se od ostalih dekorativnih tehnika razlikuje po jednoj bitnoj stvari:
            ne menja površinu zida. Marmorino, venecijanski premaz, sahara i travertino grade
            novu teksturu u više slojeva špahtlom, i posle njih zid na dodir nije isti. Stencil
            art se radi preko već okrečenog, ravnog i suvog zida, tako što se šablon fiksira na
            površinu, boja nanese kroz otvore valjkom ili sunđerom, a šablon skine dok je boja
            još sveža.
          </p>
          <p className="mt-4 text-muted">
            Zbog toga je ovo najbrža dekorativna tehnika koju radim, i jedina koja se kasnije
            uklanja običnim krečenjem u dva sloja, bez brušenja i skidanja dekorativnog sloja.
            To je razlog zašto je često biraju ljudi koji žele izražajan zid, ali nisu sigurni
            da li će isti uzorak želeti i za pet godina, kao i oni koji uređuju iznajmljen
            prostor gde velika intervencija nema smisla.
          </p>
          <p className="mt-4 text-muted">
            Uzorci idu od sitnih, gusto raspoređenih geometrijskih motiva, preko krupnijih
            linijskih i apstraktnih kompozicija, do figurativnih motiva u dečjim sobama.
            Najčešće se radi u jednoj boji na kontrastnoj podlozi, jer takav rezultat najduže
            ostaje aktuelan, ali su moguće i dve ili tri boje kada se traži jači efekat.
          </p>
        </Container>
      </section>

      <section className="wash-warm-alt border-y border-black/5 py-14">
        <Container className="max-w-3xl">
          <span className="font-mono text-sm font-semibold uppercase tracking-wide text-accent">
            Postupak
          </span>
          <h2 className="mt-2 text-2xl font-bold text-navy">
            Kako se stencil art radi, korak po korak
          </h2>

          <div className="mt-8 space-y-8">
            <div>
              <h3 className="font-semibold text-navy">1. Provera i priprema podloge</h3>
              <p className="mt-1 text-sm text-muted">
                Zid mora biti ravan, čist, suv i sa bojom koja dobro drži. Kod stencila je
                ravnost podloge važnija nego kod teksturisanih tehnika, jer se svaka neravnina
                vidi kroz oštru ivicu uzorka. Ako je zid oštećen ili u pogrešnom tonu, prvo se
                kreči i ostavlja da se potpuno osuši.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-navy">2. Izbor uzorka i probni otisak</h3>
              <p className="mt-1 text-sm text-muted">
                Uzorak biramo zajedno, prema nameni prostorije i nameštaju koji ostaje. Pre
                nego što se dodirne zid, radim probni otisak na ploči ili u neupadljivom delu,
                da se vidi kako motiv izgleda u stvarnoj veličini i u osvetljenju te sobe. Na
                fotografiji uzorak gotovo uvek deluje sitnije nego što jeste.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-navy">3. Merenje i raspored</h3>
              <p className="mt-1 text-sm text-muted">
                Ovo je korak koji odvaja uredan stencil od aljkavog. Raspored se iscrtava
                merenjem i libelom, tako da uzorak bude pravilno centriran u odnosu na zid i da
                se ponavljanje lepo završi u uglovima, iznad vrata i ispod plafona. Kod
                geometrijskih motiva i najmanje odstupanje se vidi po celom zidu.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-navy">4. Fiksiranje šablona</h3>
              <p className="mt-1 text-sm text-muted">
                Šablon se fiksira krep trakom ili sprejom za privremeno lepljenje, tako da
                nigde ne odstoji od zida. Svaki milimetar razmaka između šablona i površine
                pusti boju ispod ivice i motiv izgubi oštrinu, pa se ovom koraku posvećuje
                više vremena nego što bi se očekivalo.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-navy">5. Nanošenje boje</h3>
              <p className="mt-1 text-sm text-muted">
                Boja se nanosi tanko, valjkom sa kratkim vlaknima ili sunđerom, u nekoliko
                laganih prolaza umesto jednog debelog. Debeo nanos je glavni uzrok razlivanja
                ispod ivice šablona. Šablon se skida dok je boja još sveža, pa se pomera na
                sledeću poziciju.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-navy">6. Dorada i završna kontrola</h3>
              <p className="mt-1 text-sm text-muted">
                Kad je ceo zid gotov, tankom četkicom se dorađuju sitna mesta gde je boja
                prošla ispod ivice ili gde je motiv ostao slabiji. Za drugu boju se čeka da
                se prva potpuno osuši. U prostorima sa čestim dodirom, poput hodnika, po
                želji ide i zaštitni bezbojni premaz.
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
            Gde stencil art najbolje funkcioniše
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-x-12 gap-y-6 sm:grid-cols-2">
            <div className="border-b border-black/10 pb-6">
              <h3 className="font-semibold text-navy">Akcentni zid u dnevnoj sobi</h3>
              <p className="mt-1 text-sm text-muted">
                Jedan zid dobija uzorak, ostali ostaju mirni. Najčešći zahtev koji dobijam,
                jer daje karakter prostoriji bez da je zatrpa.
              </p>
            </div>
            <div className="border-b border-black/10 pb-6">
              <h3 className="font-semibold text-navy">Dečja soba</h3>
              <p className="mt-1 text-sm text-muted">
                Uzorak se bira tako da preživi promenu nameštaja kako dete raste, a kasnije se
                uklanja običnim krečenjem, bez skidanja slojeva.
              </p>
            </div>
            <div className="border-b border-black/10 pb-6">
              <h3 className="font-semibold text-navy">Hodnik i predsoblje</h3>
              <p className="mt-1 text-sm text-muted">
                Uska prostorija bez prirodnog svetla dobija vizuelni fokus. Uz zaštitni
                premaz podnosi svakodnevni prolaz i dodir.
              </p>
            </div>
            <div className="border-b border-black/10 pb-6">
              <h3 className="font-semibold text-navy">Kafići i lokali</h3>
              <p className="mt-1 text-sm text-muted">
                Prepoznatljiv zid za enterijer i fotografije, uz mogućnost da se motiv promeni
                kad se menja koncept prostora.
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
            Koliko košta stencil art u Nišu
          </h2>
          <p className="mt-4 text-muted">
            Stencil art je najpristupačnija dekorativna tehnika iz moje ponude. Razlog je
            jednostavan: radi se preko zida koji je već okrečen, bez više slojeva nanošenih
            špahtlom i bez poliranja, pa je i utrošak materijala i utrošak vremena znatno manji
            nego kod marmorina, venecijanskog ili travertino premaza.
          </p>
          <p className="mt-4 text-muted">
            Cena po kvadratnom metru zavisi od tri stvari: gustine uzorka, jer gušći motiv
            znači više pomeranja šablona po istoj površini, broja boja, jer svaka dodatna boja
            traži da se prethodna osuši, i toga da li se koristi standardni šablon ili se
            izrađuje po meri prema vašem motivu. Ako zid prvo treba okrečiti, to je posebna
            stavka po važećem cenovniku krečenja.
          </p>
          <p className="mt-4 text-muted">
            Tačnu cenu dajem posle besplatnog obilaska, jer se gustina uzorka i stanje podloge
            najpouzdanije procene na licu mesta. U cenu su uključeni probni otisak, iscrtavanje
            rasporeda, materijal i završna dorada.
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
            Pitanja o stencil art tehnici
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
