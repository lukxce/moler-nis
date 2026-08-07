import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { ClosingCta } from "@/components/ClosingCta";
import { JsonLd } from "@/components/JsonLd";
import { getSiteSettings } from "@/lib/data";
import { SITE_URL } from "@/lib/site-config";

const PATH = "/usluge/dekorativne-tehnike";

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings();
  const title = "Dekorativne tehnike za zidove u Nišu - marmorino, venecijanski, concrete";
  const description = `Dekorativni premazi u ${settings.city}u: marmorino, venecijanski premaz, stencil art, sahara, travertino i concrete efekat. Probni uzorak pre celog zida. ${settings.phone}.`;

  return {
    title,
    description,
    alternates: { canonical: PATH },
    openGraph: { title, description, type: "website", url: `${SITE_URL}${PATH}` },
  };
}

const techniques = [
  {
    title: "Marmorino premaz",
    description:
      "Italijanska tehnika sa efektom glačanog mermera. Nanosi se u više tankih slojeva špahtlom i polira do prirodnog sjaja. Idealan za dnevni boravak, hodnik ili poslovni prostor gde zid treba da bude akcenat sam po sebi.",
    href: "/usluge/marmorino-premaz",
    label: "Više o marmorinu",
  },
  {
    title: "Venecijanski premaz",
    description:
      "Srodna tehnika sa marmorinom, sa dubljim sjajem i izraženijim slojevima. Svetlo igra po površini i menja utisak tokom dana. Najsporija tehnika za izvođenje, ali i najupečatljiviji rezultat.",
    href: "/usluge/venecijanski-premaz",
    label: "Više o venecijanskom premazu",
  },
  {
    title: "Stencil art",
    description:
      "Šablonska tehnika gde se preko obrađenog zida nanosi geometrijski uzorak ili motiv u jednoj ili više boja. Popularan izbor za akcentni zid, dečju sobu ili prostor koji traži vizuelni fokus bez potpunog presvlačenja.",
    href: "/usluge/dekorativni-premazi",
    label: "Sve o dekorativnim premazima",
  },
  {
    title: "Sahara efekat",
    description:
      "Peskovita, zemljana tekstura u toplim, prigušenim tonovima. Daje zidu suptilnu dubinu bez agresivnog uzorka. Najbolje funkcioniše na velikim, neisprekidanim površinama.",
    href: "/usluge/sahara-premaz",
    label: "Više o sahara premazu",
  },
  {
    title: "Travertino efekat",
    description:
      "Imitacija prirodnog travertino kamena sa karakterističnim porama i slojevitom površinom. Zahteva precizan rad pri kreiranju pora da izgledaju prirodno, ne šablonski.",
    href: "/usluge/dekorativni-premazi",
    label: "Sve o dekorativnim premazima",
  },
  {
    title: "Concrete (betonski izgled)",
    description:
      "Mat, industrijska tekstura koja imitira sirov beton. Popularna u modernim enterijerima i poslovnim prostorima, kombinuje se sa toplijim materijalima poput drveta. Lakša za održavanje od pravog betona.",
    href: "/usluge/dekorativni-premazi",
    label: "Sve o dekorativnim premazima",
  },
];

export default async function DekorativneTehnike() {
  const settings = await getSiteSettings();

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Početna", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Usluge", item: `${SITE_URL}/usluge` },
      { "@type": "ListItem", position: 3, name: "Dekorativne tehnike", item: `${SITE_URL}${PATH}` },
    ],
  };

  return (
    <>
      <JsonLd data={breadcrumbJsonLd} />

      <PageHero
        eyebrow="Dekorativne tehnike"
        title="Dekorativni premazi i tehnike za zidove"
        subtitle="Marmorino, venecijanski premaz, stencil art, sahara, travertino i concrete efekat. Svaka tehnika se izvodi ručno, sa probnim uzorkom pre nego što se obavežete na ceo zid."
        primaryCta={{ label: `Pozovite ${settings.phone}`, href: `tel:${settings.phone.replace(/\s/g, "")}` }}
        secondaryCta={{ label: "Zatražite procenu", href: "/kontakt" }}
        breadcrumb={
          <nav className="mb-3 text-sm text-muted">
            <Link href="/usluge" className="hover:text-accent">Usluge</Link>
            <span className="mx-2">/</span>
            <span className="text-navy">Dekorativne tehnike</span>
          </nav>
        }
      />

      <section className="py-14">
        <Container>
          <span className="font-mono text-sm font-semibold uppercase tracking-wide text-accent">
            Tehnike
          </span>
          <h2 className="mt-2 text-2xl font-bold text-navy">Izaberite tehniku</h2>
          <p className="mt-3 max-w-2xl text-muted">
            Svaki zid i svaka prostorija traži drugačiji pristup. Ispod je pregled
            tehnika koje najčešće radim u Nišu, sa kratkim opisom i linkom ka
            detaljnijem tekstu.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {techniques.map((t) => (
              <Link
                key={t.title}
                href={t.href}
                className="group rounded-lg border border-black/5 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <h3 className="text-lg font-bold text-navy group-hover:text-accent">
                  {t.title}
                </h3>
                <p className="mt-2 text-sm text-muted">{t.description}</p>
                <span className="mt-4 inline-block text-sm font-semibold text-accent">
                  {t.label} →
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="wash-warm-alt border-y border-black/5 py-14">
        <Container className="max-w-3xl">
          <span className="font-mono text-sm font-semibold uppercase tracking-wide text-accent">
            Probni uzorak
          </span>
          <h2 className="mt-2 text-2xl font-bold text-navy">
            Zašto uvek radim probni uzorak pre celog zida
          </h2>
          <p className="mt-4 text-muted">
            Za razliku od standardnog farbanja, gde je rezultat predvidljiv na osnovu
            kartice boje, dekorativne tehnike zavise od ugla nanošenja, pritiska alata
            i osvetljenja u samoj prostoriji. Isti premaz izgleda potpuno drugačije
            pod dnevnim svetlom i pod veštačkom rasvetom uveče.
          </p>
          <p className="mt-4 text-muted">
            Zato pre svakog većeg dekorativnog posla radim probni uzorak na komadu
            ploče ili u neupadljivom delu prostorije, u istom osvetljenju u kom će
            prostorija stvarno izgledati. Tek kad je klijent zadovoljan uzorkom,
            prelazimo na celu površinu. Nema iznenađenja i nema posla koji bi trebalo
            raditi ponovo.
          </p>
        </Container>
      </section>

      <section className="py-14">
        <Container className="max-w-3xl">
          <span className="font-mono text-sm font-semibold uppercase tracking-wide text-accent">
            Cene
          </span>
          <h2 className="mt-2 text-2xl font-bold text-navy">
            Okvirne cene dekorativnih premaza
          </h2>
          <p className="mt-4 text-muted">
            Cena dekorativnog premaza zavisi od izabrane tehnike, broja slojeva,
            veličine površine i stanja podloge. Marmorino i venecijanski premaz su
            najskuplji jer zahtevaju najviše vremena i slojeva, dok stencil art i
            concrete efekat mogu biti pristupačniji, posebno na manjim površinama
            poput akcentnog zida.
          </p>
          <p className="mt-4 text-muted">
            Tačnu cenu dajem posle besplatnog obilaska i razgovora o izabranoj
            tehnici. U cenu je uvek uključena priprema podloge, materijal i
            probni uzorak.
          </p>
          <Link
            href="/cenovnik"
            className="mt-6 inline-block rounded-md bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:bg-accent-dark"
          >
            Pogledajte ceo cenovnik
          </Link>
        </Container>
      </section>

      <ClosingCta phone={settings.phone} />
    </>
  );
}
