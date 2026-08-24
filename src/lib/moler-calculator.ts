// Logika kalkulatora potrošnje boje i glet mase - brojevi su usklađeni sa
// stvarnim vrednostima iz blog tekstova "Koliko boje i koliko dana treba za
// farbanje jedne sobe" i "Koliko gleta ide po kvadratu", da kalkulator nikad
// ne kaže nešto drugačije od onoga što sajt već objašnjava.

export type WallCondition = "good" | "average" | "poor";

export type CalculatorInput = {
  length: number; // m
  width: number; // m
  height: number; // m
  doors: number;
  windows: number;
  includeGletovanje: boolean;
  wallCondition: WallCondition;
  coats: 1 | 2;
};

// Prosečna površina standardnih vrata i prozora, za odbijanje od ukupne
// zidne površine.
const DOOR_AREA_M2 = 1.6; // ~0.8 x 2m
const WINDOW_AREA_M2 = 1.8; // ~1.2 x 1.5m

// 1 litar kvalitetne disperzivne boje pokrije 6-8 m2 po sloju na već
// impregnisanoj, gletovanoj podlozi - koristimo sredinu (7), isto kao primer
// u blog tekstu.
const PAINT_M2_PER_LITER = 7;
const PAINT_RESERVE = 0.12; // 10-15% rezerve, sredina

// Startni glet: 1-1.5 kg/m2 u standardnom sloju, prosek 1.2. Fini glet:
// 0.3-0.5 kg/m2, prosek 0.4. Za lošije stanje zida, startni sloj raste
// 20-30%, za dobro stanje pada ka donjoj granici.
const STARTNI_GLET_KG_PER_M2 = 1.2;
const FINI_GLET_KG_PER_M2 = 0.4;
const WALL_CONDITION_MULT: Record<WallCondition, number> = {
  good: 0.85,
  average: 1,
  poor: 1.28,
};

export type CalculatorResult = {
  wallArea: number;
  ceilingArea: number;
  totalArea: number;
  paintLiters: number;
  startniGletKg: number;
  finiGletKg: number;
  totalGletKg: number;
};

export function calculateResult(input: CalculatorInput): CalculatorResult {
  const grossWallArea = 2 * (input.length + input.width) * input.height;
  const openings = input.doors * DOOR_AREA_M2 + input.windows * WINDOW_AREA_M2;
  const wallArea = Math.max(grossWallArea - openings, 0);
  const ceilingArea = input.length * input.width;
  const totalArea = wallArea + ceilingArea;

  const rawLiters = (totalArea * input.coats) / PAINT_M2_PER_LITER;
  const paintLiters = Math.ceil(rawLiters * (1 + PAINT_RESERVE));

  let startniGletKg = 0;
  let finiGletKg = 0;
  if (input.includeGletovanje) {
    startniGletKg = Math.round(
      totalArea * STARTNI_GLET_KG_PER_M2 * WALL_CONDITION_MULT[input.wallCondition],
    );
    finiGletKg = Math.round(totalArea * FINI_GLET_KG_PER_M2);
  }

  return {
    wallArea: Math.round(wallArea * 10) / 10,
    ceilingArea: Math.round(ceilingArea * 10) / 10,
    totalArea: Math.round(totalArea * 10) / 10,
    paintLiters,
    startniGletKg,
    finiGletKg,
    totalGletKg: startniGletKg + finiGletKg,
  };
}
