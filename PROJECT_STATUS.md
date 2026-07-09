# Moler Pro Niš — status projekta

Handoff dokument za nastavak rada u novom razgovoru (ako se ovaj kompresuje/izgubi kontekst).
Poslednje ažurirano: 2026-07-09.

## Šta je ovo

Next.js sajt + Sanity CMS admin panel za fiktivnu firmu za molerske i fasadne
radove u Nišu, Srbija ("Moler Pro Niš"). Fokus: agresivna SEO optimizacija
(tehnička + sadržajna). Deo je planiranog niza sličnih "rank-and-rent" sajtova za
različite zanate — prvi je bio `klimaservisnis` (servis klima uređaja), ovo je drugi.

## Lokacija i osnovne odluke

- **Putanja:** `/Users/Digitl/Documents/GitHub/moler-nis`
- **GitHub:** `lukxce/moler-nis` (privatan repo)
- **Grad:** Niš (city-locked pristup, isto kao `klimaservisnis`)
- **CMS:** Sanity (besplatan tier, embedovan Studio na `/studio`). **Sanity projekat
  još NIJE kreiran** — sajt trenutno radi isključivo na placeholder podacima iz
  `src/lib/placeholder-data.ts` (nema `.env.local`, `NEXT_PUBLIC_SANITY_PROJECT_ID`
  je prazan pa `cmsConfigured` u `src/lib/data.ts` vraća `false`).
- **Arhitektura:** identična `klimaservisnis` sajtu — isti obrazac stranica,
  komponenti i data-layer funkcija, samo sa sadržajem prilagođenim molerskom zanatu.

## Tehnički stek

- Next.js 16.2.10 (App Router, TypeScript, Tailwind v4)
- React 19.2.4
- Sanity CMS: `sanity`, `next-sanity`, `@sanity/vision`, `@sanity/image-url`,
  `@portabletext/react`
- Node v24 (native TS import podržan, koristi se u `scripts/seed.mjs`)

## Struktura sadržaja (Sanity schema)

`src/sanity/schemaTypes/`: `siteSettings`, `service` (stavka cenovnika),
`servicePage` (kategorija usluge — 4 komada: unutrasnji-radovi, fasadni-radovi,
dekorativni-premazi, sanacija-renoviranje), `blogPost`, `contactSubmission`
(poruke sa kontakt forme).

## Stranice (sve rade)

- `/` — početna (hero, istaknute usluge, kako radimo, o nama, CTA kartice, blog preview)
- `/usluge` + `/usluge/[slug]` — 4 kategorije usluga sa detaljnim tekstom, checklist,
  CTA trakom, "zašto mi", FAQ i cenovnikom te kategorije
- `/cenovnik` — 21 stavka cenovnika grupisana po kategoriji, sa Service JSON-LD
- `/blog` + `/blog/[slug]` — 6 napisanih tekstova (ne lorem ipsum), sa BlogPosting JSON-LD
- `/kontakt` — kontakt info + forma (šalje u Sanity `contactSubmission` preko
  `/api/kontakt`)
- `/studio` — Sanity Studio (admin panel/CMS)
- `/sitemap.xml`, `/robots.txt`, `/opengraph-image`, `/icon.svg` — generisani
  automatski

## SEO infrastruktura

- Metadata (title/description/OG) po stranici, generisano dinamički (CMS override
  ili automatski fallback iz `siteSettings`)
- JSON-LD: `HomeAndConstructionBusiness` (globalno u layout-u), `Service`,
  `BlogPosting`, `FAQPage`, `BreadcrumbList` (na detail stranicama)
- `sitemap.ts` i `robots.ts` (Next.js file convention)
- `og:locale` = `sr_RS`, canonical URL-ovi svuda

## Sadržaj — sve je izmišljeno, treba zameniti pravim podacima

Telefon (065 781 4923), adresa (Bulevar Nemanjića 44, Niš), godina osnivanja
(2015), sve cene, svi molerski brendovi boja — **SVE TREBA ZAMENITI PRAVIM
PODACIMA** kroz `/studio` pre lansiranja (ili direktno u `placeholder-data.ts` dok
Sanity projekat ne postoji).

## Šta nedostaje / sledeći koraci

1. **Kreirati Sanity projekat** (`npx sanity init` ili preko sanity.io/manage),
   dodati `.env.local` sa `NEXT_PUBLIC_SANITY_PROJECT_ID`,
   `NEXT_PUBLIC_SANITY_DATASET`, `SANITY_API_WRITE_TOKEN`.
2. Pokrenuti `npm run seed` da se placeholder sadržaj učita u Sanity (skripta čita
   direktno iz `src/lib/placeholder-data.ts`, pa je uvek sinhronizovana sa sajtom).
3. Kupiti domen (`molernis.rs` ili slično), postaviti `NEXT_PUBLIC_SITE_URL` env var
   za produkciju (podrazumevano je `https://molernis.rs`, vidi `src/lib/site-config.ts`).
4. Zameniti sve izmišljene kontakt podatke i cene pravim, kroz `/studio`.
5. Dodati stvarne slike (hero, about, servicePage "zašto mi" slike) — trenutno
   svuda gde nema CMS slike prikazuje se `PlaceholderImage` komponenta.
6. Deploy na Vercel, povezati domen, proveriti da `/studio` radi u produkciji
   (CORS origins u Sanity manage-u moraju uključivati produkcioni domen).

## Build

`npx tsc --noEmit` i `npx next build` prolaze bez grešaka (proveriti ponovo posle
svake veće izmene).
