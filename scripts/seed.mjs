// Puni Sanity CMS početnim (izmišljenim) sadržajem tako da sajt ne bude prazan.
// Pokretanje: node scripts/seed.mjs
// Zahteva NEXT_PUBLIC_SANITY_PROJECT_ID, NEXT_PUBLIC_SANITY_DATASET i SANITY_API_WRITE_TOKEN u .env.local
//
// Sadržaj se učitava direktno iz src/lib/placeholder-data.ts (Node nativno
// učitava TS fajlove), tako da seed uvek odgovara stvarnom sadržaju sajta.

import { createClient } from "@sanity/client";
import { config as loadEnv } from "dotenv";

loadEnv({ path: ".env.local" });

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const token = process.env.SANITY_API_WRITE_TOKEN;

if (!projectId || !token) {
  console.error(
    "Nedostaje NEXT_PUBLIC_SANITY_PROJECT_ID ili SANITY_API_WRITE_TOKEN u .env.local — vidi README za uputstvo.",
  );
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: "2025-01-01",
  token,
  useCdn: false,
});

const { siteSettings, services, servicePages, blogPosts } = await import(
  "../src/lib/placeholder-data.ts"
);

async function run() {
  console.log(`Seedujem podatke u Sanity projekat ${projectId} (dataset: ${dataset})...`);

  await client.createOrReplace({
    _id: "siteSettings",
    _type: "siteSettings",
    ...siteSettings,
    openingHoursSpecification: siteSettings.openingHoursSpecification?.map((block, i) => ({
      _type: "hoursBlock",
      _key: `hours-${i}`,
      ...block,
    })),
  });
  console.log("✓ Podešavanja sajta");

  for (const [i, service] of services.entries()) {
    const { slug, ...rest } = service;
    await client.createOrReplace({
      _id: `service-${slug}`,
      _type: "service",
      ...rest,
      slug: { _type: "slug", current: slug },
    });
    console.log(`✓ Usluga ${i + 1}/${services.length}: ${service.title}`);
  }

  for (const [i, page] of servicePages.entries()) {
    const { slug, ...rest } = page;
    await client.createOrReplace({
      _id: `servicePage-${slug}`,
      _type: "servicePage",
      ...rest,
      slug: { _type: "slug", current: slug },
    });
    console.log(`✓ Stranica usluge ${i + 1}/${servicePages.length}: ${page.title}`);
  }

  for (const [i, post] of blogPosts.entries()) {
    const { slug, ...rest } = post;
    await client.createOrReplace({
      _id: `blogPost-${slug}`,
      _type: "blogPost",
      ...rest,
      slug: { _type: "slug", current: slug },
    });
    console.log(`✓ Blog ${i + 1}/${blogPosts.length}: ${post.title}`);
  }

  console.log("\nGotovo! Otvori /studio da vidiš i uređuješ sadržaj.");
}

run().catch((err) => {
  console.error("Seed nije uspeo:", err.message);
  process.exit(1);
});
