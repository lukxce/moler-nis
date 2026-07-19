import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

import { Container } from "@/components/Container";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { BlogCard } from "@/components/BlogCard";
import { ClosingCta } from "@/components/ClosingCta";
import {
  getSiteSettings,
  getServicePages,
  getBlogPosts,
} from "@/lib/data";
import { formatServiceAreas } from "@/lib/format";
import { SITE_URL } from "@/lib/site-config";

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings();
  const title = `Gletovanje, krečenje i fasade u ${settings.city}u | ${settings.title}`;
  const description = `Gletovanje, krečenje, fasade i sanacija vlage u ${settings.city}u i okolini. Uredno, na vreme, sa garancijom na izvedene radove. Pozovite ${settings.phone}.`;

  return {
    title: { absolute: title },
    description,
    alternates: { canonical: "/" },
    openGraph: { title, description, type: "website", url: SITE_URL },
  };
}

export default async function HomePage() {
  const [settings, servicePages, posts] = await Promise.all([
    getSiteSettings(),
    getServicePages(),
    getBlogPosts(),
  ]);

  return (
    <>
      {/* Hero */}
      <section className="wash-warm relative overflow-hidden">
        <div className="pointer-events-none absolute -right-32 -top-24 h-[30rem] w-[30rem] rounded-full bg-accent/12 blur-3xl" />
        <div className="pointer-events-none absolute -left-40 bottom-0 h-[28rem] w-[28rem] rounded-full bg-blush/60 blur-3xl" />
        <Container className="relative grid grid-cols-1 items-center gap-12 py-16 md:grid-cols-2 md:py-24">
          <div>
            <h1 className="text-4xl font-bold leading-[1.1] text-navy sm:text-6xl">
              Molerski i <span className="text-accent">fasadni radovi</span> u {settings.city}u
            </h1>
            <p className="mt-5 max-w-md text-lg text-muted">
              Gletovanje, krečenje, fasade i sanacija vlage u {settings.city}u i okolini,
              uredno i na vreme.{" "}
              {settings.foundedYear
                ? `Preko ${new Date().getFullYear() - settings.foundedYear} godina iskustva na terenu.`
                : "Dugogodišnje iskustvo na terenu."}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`tel:${settings.phone.replace(/\s/g, "")}`}
                className="rounded-md bg-accent px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent/25 transition hover:bg-accent-dark"
              >
                Pozovite {settings.phone}
              </a>
              <a
                href="#usluge"
                className="rounded-md border border-navy/15 bg-white/70 px-7 py-3.5 text-sm font-semibold text-navy backdrop-blur transition hover:border-accent-dark hover:text-accent-dark"
              >
                Pogledajte usluge
              </a>
            </div>
            <ul className="mt-9 flex flex-wrap gap-x-6 gap-y-2 text-sm text-navy/80">
              <li className="flex items-center gap-2">
                <span className="text-accent">✓</span> Besplatan obilazak i procena
              </li>
              <li className="flex items-center gap-2">
                <span className="text-accent">✓</span> Garancija na izvedene radove
              </li>
              <li className="flex items-center gap-2">
                <span className="text-accent">✓</span> Fiksna cena, bez iznenađenja
              </li>
            </ul>
          </div>
          <div className="relative">
            {settings.heroImageUrl ? (
              <div className="relative h-72 w-full overflow-hidden rounded-lg shadow-xl shadow-navy/10 sm:h-[26rem]">
                <Image
                  src={settings.heroImageUrl}
                  alt={settings.title}
                  fill
                  loading="eager"
                  fetchPriority="high"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            ) : (
              <PlaceholderImage
                label="Hero slika: moler farba zid u svetloj prostoriji"
                className="h-72 w-full rounded-lg shadow-xl shadow-navy/10 sm:h-[26rem]"
              />
            )}
            {settings.foundedYear && (
              <div className="absolute -bottom-5 left-5 flex items-center gap-3 rounded-lg bg-white p-4 pr-6 text-navy shadow-xl ring-1 ring-black/5">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-xl">
                  🖌
                </span>
                <span>
                  <span className="block text-2xl font-bold leading-none">
                    {new Date().getFullYear() - settings.foundedYear}+
                  </span>
                  <span className="text-xs text-muted">godina iskustva</span>
                </span>
              </div>
            )}
            {settings.workingHours && (
              <div className="absolute -top-4 right-5 rounded-md bg-white/90 px-4 py-2 text-xs font-semibold text-navy shadow-md ring-1 ring-black/5 backdrop-blur">
                {settings.workingHours}
              </div>
            )}
          </div>
        </Container>
        <div className="relative border-t border-black/5 bg-white/60 backdrop-blur">
          <Container className="py-4">
            <div
              className="relative overflow-hidden"
              style={{
                maskImage:
                  "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
              }}
            >
              <div className="marquee-track flex w-max items-center gap-12">
                {[...settings.trustBadges, ...settings.trustBadges].map((badge, i) => (
                  <span
                    key={`${badge}-${i}`}
                    className="whitespace-nowrap text-sm font-semibold uppercase tracking-widest text-navy/40"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </Container>
        </div>
      </section>

      {/* Usluge */}
      <section id="usluge" className="scroll-mt-24 py-16">
        <Container>
          <div className="flex items-end justify-between">
            <div>
              <span className="inline-flex items-center gap-2 font-mono text-sm font-semibold uppercase tracking-wide text-accent">
                <span className="h-px w-6 bg-accent" />
                Usluge
              </span>
              <h2 className="mt-2 text-3xl font-bold text-navy sm:text-4xl">Naše usluge</h2>
            </div>
            <Link href="/cenovnik" className="hidden text-sm font-semibold text-accent hover:underline sm:block">
              Kompletan cenovnik →
            </Link>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {servicePages.map((page) => (
              <Link
                key={page.slug}
                href={`/usluge/${page.slug}`}
                className="group flex flex-col overflow-hidden rounded-lg border border-black/5 bg-white shadow-sm transition hover:-translate-y-1 hover:border-accent/20 hover:shadow-lg"
              >
                <div className="relative h-40 w-full overflow-hidden">
                  {page.imageUrl ? (
                    <Image
                      src={page.imageUrl}
                      alt={page.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <PlaceholderImage label={`Slika: ${page.title}`} className="h-40 w-full" />
                  )}
                </div>
                <div className="flex flex-1 flex-col gap-2 p-5">
                  <h3 className="font-semibold text-navy group-hover:text-accent">{page.title}</h3>
                  {page.heroSubtitle && <p className="text-sm text-muted">{page.heroSubtitle}</p>}
                  <span className="mt-auto pt-2 text-sm font-semibold text-accent">
                    Saznajte više →
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:hidden">
            <Link
              href="/cenovnik"
              className="rounded-md bg-accent px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-accent-dark"
            >
              Pogledajte cenovnik
            </Link>
            <Link
              href="/usluge"
              className="rounded-md border border-navy/15 px-6 py-3 text-center text-sm font-semibold text-navy transition hover:border-accent-dark hover:text-accent-dark"
            >
              Vidi sve usluge
            </Link>
          </div>
        </Container>
      </section>

      {/* How it works */}
      <section className="wash-warm border-y border-black/5 py-20">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 font-mono text-sm font-semibold uppercase tracking-wide text-accent">
              <span className="h-px w-6 bg-accent" />
              Kako radimo
              <span className="h-px w-6 bg-accent" />
            </span>
            <h2 className="mt-2 text-3xl font-bold text-navy sm:text-4xl">
              Od poziva do gotovog zida u tri koraka
            </h2>
          </div>
          <div className="relative mt-12 grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-6">
            <div className="pointer-events-none absolute left-[16.66%] right-[16.66%] top-7 hidden border-t-2 border-dashed border-accent/25 sm:block" />
            {[
              {
                step: "1",
                title: "Pozovite ili pošaljite upit",
                text: "Opišite prostor ili radove koji vam trebaju. Dogovaramo besplatan obilazak i procenu.",
              },
              {
                step: "2",
                title: "Obilazak i tačna ponuda",
                text: "Dolazimo na lice mesta, procenjujemo stanje podloge i dajemo fiksnu cenu pre početka rada.",
              },
              {
                step: "3",
                title: "Uredno izveden posao, sa garancijom",
                text: "Prekrivamo i štitimo prostor, radimo na vreme i dajemo garanciju na izvedene radove.",
              },
            ].map((item) => (
              <div key={item.step} className="relative text-center">
                <span className="relative z-10 mx-auto flex h-14 w-14 items-center justify-center rounded-lg bg-accent text-xl font-bold text-white shadow-lg shadow-accent/25">
                  {item.step}
                </span>
                <h3 className="mt-5 text-lg font-semibold text-navy">{item.title}</h3>
                <p className="mx-auto mt-2 max-w-xs text-sm text-muted">{item.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <a
              href={`tel:${settings.phone.replace(/\s/g, "")}`}
              className="inline-block rounded-md bg-accent px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-accent-dark"
            >
              Pozovite {settings.phone}
            </a>
          </div>
        </Container>
      </section>

      {/* About */}
      <section className="wash-warm-alt border-y border-black/5 py-20">
        <Container className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          {settings.aboutImageUrl ? (
            <div className="relative h-80 w-full overflow-hidden rounded-lg sm:h-[26rem]">
              <Image
                src={settings.aboutImageUrl}
                alt={settings.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          ) : (
            <PlaceholderImage
              label="Slika: moler na terenu tokom fasadnih radova"
              className="h-80 w-full rounded-lg sm:h-[26rem]"
            />
          )}
          <div>
            <span className="font-mono text-sm font-semibold uppercase tracking-wide text-accent">
              O nama
            </span>
            <h2 className="mt-2 text-3xl font-bold text-navy sm:text-4xl">
              Molerski radovi sa iskustvom na terenu
            </h2>
            <p className="mt-4 text-muted">
              {settings.title} izvodi unutrašnje molerske radove, fasade, dekorativne premaze
              i sanaciju {settings.foundedYear ? `od ${settings.foundedYear}. godine` : ""}.
              Pokrivamo: {formatServiceAreas(settings.city, settings.serviceAreas)}.
            </p>
            <p className="mt-3 text-muted">
              Radimo sa proverenim markama boja: {settings.paintBrands.join(", ")}.
            </p>
            <dl className="mt-8 grid grid-cols-3 gap-4 border-y border-black/10 py-6">
              {settings.foundedYear && (
                <div>
                  <dd className="font-mono text-3xl font-bold text-accent sm:text-4xl">
                    {new Date().getFullYear() - settings.foundedYear}+
                  </dd>
                  <dt className="mt-1 text-xs text-muted">godina iskustva na terenu</dt>
                </div>
              )}
              <div>
                <dd className="font-mono text-3xl font-bold text-accent sm:text-4xl">
                  {servicePages.length}
                </dd>
                <dt className="mt-1 text-xs text-muted">vrste molerskih usluga</dt>
              </div>
              <div>
                <dd className="font-mono text-3xl font-bold text-accent sm:text-4xl">
                  0
                </dd>
                <dt className="mt-1 text-xs text-muted">skrivenih troškova, fiksna cena</dt>
              </div>
            </dl>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`tel:${settings.phone.replace(/\s/g, "")}`}
                className="rounded-md bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:bg-accent-dark"
              >
                Pozovite {settings.phone}
              </a>
              <Link
                href="/kontakt"
                className="rounded-md border border-navy/15 px-6 py-3 text-sm font-semibold text-navy transition hover:border-accent hover:text-accent"
              >
                Kontakt
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA strip */}
      <section className="py-16">
        <Container className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {[
            {
              href: "/cenovnik",
              eyebrow: "Cenovnik",
              title: "Proverite cene radova",
              text: "Gletovanje, farbanje, fasada i sanacija prikazani pregledno.",
              icon: (
                <path d="M9 7h6m-6 4h6m-6 4h3M5 3h14a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" />
              ),
            },
            {
              href: "/usluge",
              eyebrow: "Usluge",
              title: "Pogledajte sve usluge",
              text: "Od jedne sobe do kompletnog renoviranja stana ili fasade.",
              icon: (
                <path d="M4 21V9l8-6 8 6v12h-5v-6H9v6H4Z" />
              ),
            },
            {
              href: "/kontakt",
              eyebrow: "Procena",
              title: "Zatražite besplatan obilazak",
              text: "Opišite prostor i dogovorimo termin za procenu.",
              icon: (
                <path d="m14.7 6.3 3 3L8 19H5v-3l9.7-9.7Zm2-2 1.6-1.6a1 1 0 0 1 1.4 0l1.6 1.6a1 1 0 0 1 0 1.4L19.7 7.3l-3-3Z" />
              ),
            },
          ].map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="group rounded-lg border border-black/5 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-accent/20 hover:shadow-lg"
            >
              <div className="flex items-start justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent transition group-hover:bg-accent group-hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    {card.icon}
                  </svg>
                </span>
                <span className="text-accent opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100">
                  →
                </span>
              </div>
              <span className="mt-4 block text-xs font-semibold uppercase tracking-wide text-accent">
                {card.eyebrow}
              </span>
              <h3 className="mt-1 text-lg font-semibold text-navy">{card.title}</h3>
              <p className="mt-1 text-sm text-muted">{card.text}</p>
            </Link>
          ))}
        </Container>
      </section>

      {/* Blog preview */}
      <section className="wash-warm border-y border-black/5 py-16">
        <Container>
          <div className="flex items-end justify-between">
            <div>
              <span className="inline-flex items-center gap-2 font-mono text-sm font-semibold uppercase tracking-wide text-accent">
                <span className="h-px w-6 bg-accent" />
                Blog
              </span>
              <h2 className="mt-2 text-3xl font-bold text-navy sm:text-4xl">Korisni tekstovi o molerskim radovima</h2>
            </div>
            <Link href="/blog" className="hidden text-sm font-semibold text-accent hover:underline sm:block">
              Ceo blog →
            </Link>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {posts.slice(0, 3).map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </Container>
      </section>

      <ClosingCta phone={settings.phone} />
    </>
  );
}
