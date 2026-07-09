export function formatRsd(amount: number): string {
  return `${new Intl.NumberFormat("sr-Latn-RS").format(amount)} din`;
}

export function formatDate(dateString: string): string {
  return new Intl.DateTimeFormat("sr-Latn-RS", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(dateString));
}

const categoryLabels: Record<string, string> = {
  "unutrasnji-radovi": "Unutrašnji radovi",
  "fasadni-radovi": "Fasadni radovi",
  "dekorativni-premazi": "Dekorativni premazi i tapete",
  "sanacija-renoviranje": "Sanacija i renoviranje",
};

export function serviceCategoryLabel(category: string): string {
  return categoryLabels[category] ?? category;
}

const unitLabels: Record<string, string> = {
  m2: "po m²",
  kom: "po komadu",
  fiksno: "fiksna cena",
  dm: "po dužnom metru",
};

export function unitLabel(unit: string): string {
  return unitLabels[unit] ?? "";
}

export function formatServiceAreas(city: string, serviceAreas: string[]): string {
  const municipalities = serviceAreas.filter((area) => area !== city);
  if (municipalities.length === 0) return city;
  return `${city} i okolina (${municipalities.join(", ")})`;
}

const contactReasonLabels: Record<string, string> = {
  procena: "Zahtev za procenu",
  unutrasnji: "Unutrašnji radovi",
  fasada: "Fasada",
  sanacija: "Sanacija i renoviranje",
  ostalo: "Ostalo",
};

export function contactReasonLabel(reason: string): string {
  return contactReasonLabels[reason] ?? reason;
}

const blogCategoryLabels: Record<string, string> = {
  priprema: "Priprema i procena",
  unutrasnji: "Unutrašnji radovi",
  fasada: "Fasada",
  saveti: "Saveti",
};

export function blogCategoryLabel(category: string): string {
  return blogCategoryLabels[category] ?? category;
}

export const blogCategories = Object.entries(blogCategoryLabels).map(([value, label]) => ({
  value,
  label,
}));
