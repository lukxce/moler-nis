#!/usr/bin/env node
/**
 * One-shot script: patches heroTitle + SEO fields on all 6 servicePage
 * documents in the Sanity dataset.
 *
 * Usage:
 *   1. Get a write-capable API token from https://www.sanity.io/manage
 *      → project i2ploj4y → API → Tokens → Add token (Editor role)
 *   2. Run:  SANITY_WRITE_TOKEN=<token> node scripts/patch-hero-titles.mjs
 */

import { createClient } from "@sanity/client";

const token = process.env.SANITY_WRITE_TOKEN;
if (!token) {
  console.error(
    "Missing SANITY_WRITE_TOKEN. Create one at:\n" +
      "  https://www.sanity.io/manage/project/i2ploj4y/api#tokens\n" +
      "Then run:  SANITY_WRITE_TOKEN=<token> node scripts/patch-hero-titles.mjs"
  );
  process.exit(1);
}

const client = createClient({
  projectId: "i2ploj4y",
  dataset: "production",
  apiVersion: "2025-01-01",
  token,
  useCdn: false,
});

const patches = [
  {
    id: "servicePage-krecenje",
    heroTitle: "Krečenje stanova i kuća u Nišu",
    seo: {
      title: "Krečenje stanova i kuća u Nišu | majstor za krečenje, cene",
      description:
        "Profesionalno krečenje stanova, kuća i poslovnih prostora u Nišu i okolini. Brza izrada, čiste linije, fer cene po m². Pozovite 062 133 83 83.",
    },
  },
  {
    id: "servicePage-gletovanje",
    heroTitle: "Gletovanje zidova i plafona u Nišu",
    seo: {
      title: "Gletovanje zidova i plafona u Nišu | cene po m²",
      description:
        "Stručno gletovanje zidova i plafona u Nišu. Fino i grubo gletovanje, priprema za farbanje. Cene po m², besplatna procena. Pozovite 062 133 83 83.",
    },
  },
  {
    id: "servicePage-fasadni-radovi",
    heroTitle: "Farbanje i priprema fasade u Nišu",
    seo: {
      title: "Farbanje fasade u Nišu | fasadni radovi, cene po m²",
      description:
        "Fasadni radovi u Nišu: farbanje, čišćenje i priprema fasade. Kvalitetni materijali otporni na nišku klimu. Pozovite 062 133 83 83 za procenu.",
    },
  },
  {
    id: "servicePage-dekorativni-premazi",
    heroTitle: "Dekorativni premazi i tehnike u Nišu",
    seo: {
      title: "Dekorativni premazi u Nišu | marmorino, venecijanski, concrete",
      description:
        "Dekorativni premazi u Nišu: venecijanski malter, marmorino, beton efekat i rustik tehnike. Konsultacije i izrada. Pozovite 062 133 83 83.",
    },
  },
  {
    id: "servicePage-tapete",
    heroTitle: "Postavljanje i lepljenje tapeta u Nišu",
    seo: {
      title: "Postavljanje tapeta u Nišu | lepljenje tapeta, cene",
      description:
        "Profesionalno postavljanje i lepljenje tapeta u Nišu. Vinilne, flis i foto tapete. Precizna montaža, čist rad. Pozovite 062 133 83 83.",
    },
  },
  {
    id: "servicePage-vlaga",
    heroTitle: "Sanacija vlage na zidovima u Nišu",
    seo: {
      title: "Sanacija vlage u Nišu | tretman buđi, kapilarna vlaga",
      description:
        "Sanacija vlage i buđi na zidovima u Nišu. Dijagnostika uzroka, hidroizolacija, trajno rešenje za kapilarne i kondenzacione probleme. Pozovite 062 133 83 83.",
    },
  },
];

console.log("Patching 6 servicePage documents in project i2ploj4y...\n");

let ok = 0;
let fail = 0;

for (const { id, heroTitle, seo } of patches) {
  try {
    // First check the document exists
    const doc = await client.getDocument(id);
    if (!doc) {
      console.log(`  ⚠  ${id} — document not found, skipping`);
      fail++;
      continue;
    }
    await client
      .patch(id)
      .set({ heroTitle, seo })
      .commit();
    console.log(`  ✓  ${id} → heroTitle: "${heroTitle}"`);
    ok++;
  } catch (err) {
    console.error(`  ✗  ${id} — ${err.message}`);
    fail++;
  }
}

console.log(`\nDone: ${ok} patched, ${fail} failed.`);
if (fail > 0) process.exit(1);
