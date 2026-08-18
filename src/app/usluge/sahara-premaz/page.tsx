import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { ClosingCta } from "@/components/ClosingCta";
import { JsonLd } from "@/components/JsonLd";
import { getSiteSettings } from "@/lib/data";
import { SITE_URL } from "@/lib/site-config";

const PATH = "/usluge/sahara-premaz";

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings();
  const title = "Sahara premaz Niš - peskovita tekstura za zidove";
  const description = `Sahara premaz u ${settings.city}u: topla, peskovita tekstura sa efektom pustinjskog peska. Nanosi se špahtlom u tankom sloju. Pozovite ${settings.phone}.`;

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
    question: "Da li sahara premaz izgleda kao pesak na dodir?",
    answer:
      "Vizuelno da, ima suptilan, zrnat izgled sličan peščanoj dini, ali na dodir je gladak, ne grub kao pravi pesak. Zrnatost dolazi od minerala u samom premazu, ne od dodatog peska koji bi grebao ruku.",
  },
  {
    question: "Koje boje su dostupne za sahara premaz?",
    answer:
      "Klasičan izbor su topli, zemljani tonovi, bež, pesak, svetla cigla, blaga karamela, jer ti tonovi najbolje nose karakterističnu peskovitu teksturu. Radim i po posebnoj želji u drugim tonovima, ali napominjem da se tekstura najbolje vidi baš u toplim, prigušenim nijansama.",
  },
  {
    question: "Da li se sahara premaz lako održava?",
    answer:
      "Održavanje je jednostavno, brisanje suvom ili blago vlažnom krpom je dovoljno za redovno čišćenje. Za zone sa čestim dodirom preporučujem zaštitni premaz koji dodatno olakšava brisanje mrlja.",
  },
  {
    question: "Koliko slojeva ima sahara premaz?",
    answer:
      "Obično dva do tri sloja, manje nego kod marmorina ili venecijanskog premaza, jer tekstura zavisi od pokreta alata u jednom ili dva ključna prolaza, a ne od dubine slojeva. Zato je sahara i nešto brža i pristupačnija tehnika od dve prethodne.",
  },
  {
    question: "Da li sahara premaz radi dobro u manjim prostorijama?",
    answer:
      "Radi, ali najbolji utisak daje na većim, neisprekidanim površinama gde tekstura ima prostora da se razvije. U manjoj sobi radim je najčešće na jednom akcentnom zidu, ne na sve četiri strane, da prostor ne deluje pretrpano teksturom.",
  },
  {
    question: "Mogu li da vidim uzorak pre nego što se odlučim?",
    answer:
      "Da, i kod sahara premaza radim probni uzorak na ploči ili u neupadljivom delu prostorije, u dnevnom i večernjem svetlu, jer se tekstura drugačije vidi u zavisnosti od osvetljenja.",
  },
];

export default async function SaharaPremazPage() {
  const settings = await getSiteSettings();

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Početna", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Usluge", item: `${SITE_URL}/usluge` },
      { "@type": "ListItem", position: 3, name: "Dekorativne tehnike", item: `${SITE_URL}/usluge/dekorativne-tehnike` },
      { "@type": "ListItem", position: 4, name: "Sahara premaz", item: `${SITE_URL}${PATH}` },
    ],
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Sahara dekorativni premaz",
    provider: { "@type": "HomeAndConstructionBusiness", name: settings.title, telephone: settings.phone, address: settings.address ? { "@type": "PostalAddress", streetAddress: settings.address, addressLocality: settings.city, addressCountry: "RS" } : undefined, },
    areaServed: settings.city,
    description: "Dekorativna tehnika sa peskovitom, zemljanom teksturom u toplim tonovima, nanosi se špahtlom u tankom sloju sa karakterističnim zrnatim efektom.",
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
        title="Sahara premaz: topla, peskovita tekstura za zid"
        subtitle="Zemljana tekstura u prigušenim, toplim tonovima, sa suptilnom zrnatošću koja podseća na peščanu dinu. Bez agresivnog uzorka, sahara premaz zidu daje dubinu, a ne nameće se prostoru."
        primaryCta={{ label: `Pozovite ${settings.phone}`, href: `tel:${settings.phone.replace(/\s/g, "")}` }}
        secondaryCta={{ label: "Zatražite probni uzorak", href: "/kontakt" }}
        breadcrumb={
          <nav className="mb-3 text-sm text-muted">
            <Link href="/usluge" className="hover:text-accent">Usluge</Link>
            <span className="mx-2">/</span>
            <Link href="/usluge/dekorativne-tehnike" className="hover:text-accent">Dekorativne tehnike</Link>
            <span className="mx-2">/</span>
            <span className="text-navy">Sahara premaz</span>
          </nav>
        }
      />

      <section className="py-14">
        <Container className="max-w-3xl">
          <span className="font-mono text-sm font-semibold uppercase tracking-wide text-accent">
            Šta je sahara premaz
          </span>
          <h2 className="mt-2 text-2xl font-bold text-navy">
            Efekat pustinjskog peska bez zrna koje grebe
          </h2>
          <p className="mt-4 text-muted">
            Sahara premaz je dekorativna tehnika koja imitira izgled peščane dine, sa suptilnom,
            zrnatom teksturom u toplim, zemljanim tonovima. Efekat zrnatosti dolazi od finih
            mineralnih čestica u samom premazu, ne od dodatog peska, pa je površina na dodir
            glatka, bez grubosti koju bi čovek očekivao od naziva tehnike.
          </p>
          <p className="mt-4 text-muted">
            Za razliku od marmorina i venecijanskog premaza, koji teže sjaju i dubini kroz više
            slojeva, sahara ide u drugom pravcu: mat, prigušena površina koja hvata svetlost
            difuzno, bez odsjaja. Rezultat je zid koji deluje toplo i organski, kao da je oduvek
            bio deo prostora, ne kao dodata dekoracija.
          </p>
        </Container>
      </section>

      <section className="wash-warm-alt border-y border-black/5 py-14">
        <Container className="max-w-3xl">
          <span className="font-mono text-sm font-semibold uppercase tracking-wide text-accent">
            Postupak
          </span>
          <h2 className="mt-2 text-2xl font-bold text-navy">
            Kako se sahara premaz nanosi, korak po korak
          </h2>

          <div className="mt-8 space-y-8">
            <div>
              <h3 className="font-semibold text-navy">1. Priprema podloge</h3>
              <p className="mt-1 text-sm text-muted">
                Zid treba da bude čist, suv i ravan, standardnim gletovanjem ako je potrebno.
                Sahara premaz je nešto tolerantniji na sitne nepravilnosti podloge od sjajnih
                tehnika, jer mat, zrnata površina manje reflektuje svetlost pod uglom.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-navy">2. Probni uzorak</h3>
              <p className="mt-1 text-sm text-muted">
                Radim uzorak na komadu ploče ili u neupadljivom delu prostorije, u dnevnom i
                večernjem osvetljenju, jer se tekstura i ton drugačije doživljavaju zavisno od
                svetla. Klijent bira ton i intenzitet zrnatosti pre nego što se pređe na ceo zid.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-navy">3. Nanošenje osnovnog sloja</h3>
              <p className="mt-1 text-sm text-muted">
                Prvi sloj se nanosi špahtlom u tankom, ravnomernom sloju koji čini osnovu boje i
                pripremu za teksturu. Ovaj korak određuje bazni ton na koji se dalje gradi
                zrnatost.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-navy">4. Kreiranje teksture</h3>
              <p className="mt-1 text-sm text-muted">
                Karakteristična zrnata tekstura se postiže specifičnim pokretom alata dok je
                premaz još sveži, sličnim onom kojim vetar oblikuje peščanu dinu. Ovaj korak
                zahteva iskustvo, jer se pokret ne može ispraviti kad premaz počne da se suši.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-navy">5. Zaštita (opciono)</h3>
              <p className="mt-1 text-sm text-muted">
                Za prostorije sa čestim dodirom, hodnik ili predsoblje, nanosim zaštitni premaz
                koji olakšava brisanje mrlja bez promene mat izgleda površine.
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
            Gde sahara premaz najbolje funkcioniše
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-x-12 gap-y-6 sm:grid-cols-2">
            <div className="border-b border-black/10 pb-6">
              <h3 className="font-semibold text-navy">Veći, neisprekidani zidovi</h3>
              <p className="mt-1 text-sm text-muted">
                Tekstura najbolje dolazi do izražaja na velikoj, ravnoj površini bez previše
                prekida, vrata, ormana ili polica.
              </p>
            </div>
            <div className="border-b border-black/10 pb-6">
              <h3 className="font-semibold text-navy">Dnevni boravak u toplijem enterijeru</h3>
              <p className="mt-1 text-sm text-muted">
                Uz drvo, lan i prirodne materijale, sahara premaz se uklapa prirodno, bez
                utiska nametljive dekoracije.
              </p>
            </div>
            <div className="border-b border-black/10 pb-6">
              <h3 className="font-semibold text-navy">Spavaća soba</h3>
              <p className="mt-1 text-sm text-muted">
                Prigušen, mat ton bez sjaja daje smirujuću atmosferu, pogodnu baš za prostor u
                kom se odmara.
              </p>
            </div>
            <div className="border-b border-black/10 pb-6">
              <h3 className="font-semibold text-navy">Poslovni prostor sa opuštenijim konceptom</h3>
              <p className="mt-1 text-sm text-muted">
                Kafići, studiji i kancelarije koje žele organski, prirodan utisak umesto
                sjajne, formalne završne obrade.
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
            Koliko košta sahara premaz u Nišu
          </h2>
          <p className="mt-4 text-muted">
            Sahara premaz je pristupačnija dekorativna tehnika od marmorina i venecijanskog
            premaza, jer zahteva manje slojeva i kraće vreme izvođenja. Cena po kvadratnom
            metru i dalje zavisi od stanja podloge, veličine površine i eventualne dodatne
            zaštite protiv mrlja.
          </p>
          <p className="mt-4 text-muted">
            Tačnu cenu dajem posle besplatnog obilaska, jer priprema starijeg zida sa
            neravninama ili prethodnim slojevima boje traži više vremena od svežeg, gletovanog
            zida. U cenu je uključena priprema podloge, materijal i probni uzorak.
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
            Pitanja o sahara premazu
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
