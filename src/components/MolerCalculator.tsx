"use client";

import { useState } from "react";

import {
  calculateResult,
  type CalculatorInput,
  type CalculatorResult,
  type WallCondition,
} from "@/lib/moler-calculator";

type Step = 1 | 2 | 3 | 4;

const initialInput: CalculatorInput = {
  length: 4,
  width: 3.5,
  height: 2.7,
  doors: 1,
  windows: 1,
  includeGletovanje: true,
  wallCondition: "average",
  coats: 2,
};

type OptionDef<T extends string> = { value: T; label: string };

function OptionGroup<T extends string>({
  legend,
  options,
  value,
  onChange,
}: {
  legend: string;
  options: OptionDef<T>[];
  value: T;
  onChange: (v: T) => void;
}) {
  return (
    <fieldset>
      <legend className="text-sm font-semibold text-navy">{legend}</legend>
      <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-3">
        {options.map((opt) => (
          <button
            key={opt.value}
            type="button"
            onClick={() => onChange(opt.value)}
            aria-pressed={value === opt.value}
            className={`rounded-lg border px-3 py-2.5 text-left text-sm font-medium transition ${
              value === opt.value
                ? "border-accent bg-accent/10 text-accent-dark"
                : "border-navy/15 text-navy hover:border-accent/40"
            }`}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </fieldset>
  );
}

function NumberField({
  id,
  label,
  value,
  onChange,
  step = 1,
  min = 0,
}: {
  id: string;
  label: string;
  value: number;
  onChange: (v: number) => void;
  step?: number;
  min?: number;
}) {
  return (
    <div>
      <label className="text-sm font-semibold text-navy" htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        type="number"
        min={min}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-2 w-full rounded-lg border border-navy/15 px-4 py-2.5 text-navy focus:border-accent focus:outline-none"
      />
    </div>
  );
}

export function MolerCalculator({ phone }: { phone: string }) {
  const [step, setStep] = useState<Step>(1);
  const [input, setInput] = useState<CalculatorInput>(initialInput);
  const [result, setResult] = useState<CalculatorResult | null>(null);

  function update<K extends keyof CalculatorInput>(key: K, value: CalculatorInput[K]) {
    setInput((prev) => ({ ...prev, [key]: value }));
  }

  function reset() {
    setStep(1);
    setInput(initialInput);
    setResult(null);
  }

  if (result) {
    return (
      <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm sm:p-8">
        <span className="text-xs font-semibold uppercase tracking-wide text-accent-dark">Rezultat</span>
        <h2 className="mt-2 text-2xl font-bold text-navy">
          Površina za obradu: {result.totalArea} m²
        </h2>
        <p className="mt-1 text-sm text-muted">
          (zidovi {result.wallArea} m² + plafon {result.ceilingArea} m²)
        </p>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-navy/10 bg-surface p-5">
            <span className="text-xs font-semibold uppercase tracking-wide text-muted">Boja</span>
            <p className="mt-1 text-2xl font-bold text-navy">{result.paintLiters} l</p>
            <p className="mt-1 text-xs text-muted">
              {input.coats === 2 ? "dva sloja" : "jedan sloj"}, uključena rezerva od ~12%
            </p>
          </div>
          {input.includeGletovanje && (
            <div className="rounded-xl border border-navy/10 bg-surface p-5">
              <span className="text-xs font-semibold uppercase tracking-wide text-muted">Glet masa</span>
              <p className="mt-1 text-2xl font-bold text-navy">{result.totalGletKg} kg</p>
              <p className="mt-1 text-xs text-muted">
                startni {result.startniGletKg} kg + fini {result.finiGletKg} kg
              </p>
            </div>
          )}
        </div>

        <div className="mt-6 rounded-xl border border-accent/30 bg-accent/10 p-4 text-sm text-navy">
          Ovo je orijentaciona računica, isto kao u našim tekstovima o
          potrošnji materijala - stvarna potrošnja zavisi od stanja zida koje
          se najbolje proceni na licu mesta. Pozovite {phone} za tačnu procenu
          i ponudu.
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={reset}
            className="rounded-lg border border-navy/20 px-5 py-2.5 text-sm font-semibold text-navy transition hover:bg-navy hover:text-white"
          >
            Izračunaj ponovo
          </button>
          <a
            href={`tel:${phone.replace(/\s/g, "")}`}
            className="rounded-lg bg-navy px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-accent"
          >
            Pozovite {phone}
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm sm:p-8">
      <div className="flex items-center gap-2 text-xs font-semibold text-muted">
        <span className="text-accent-dark">Korak {step} od 4</span>
      </div>
      <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-surface">
        <div
          className="h-full rounded-full bg-accent transition-all"
          style={{ width: `${(step / 4) * 100}%` }}
        />
      </div>

      <div className="mt-6 space-y-6">
        {step === 1 && (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <NumberField id="length" label="Dužina sobe (m)" value={input.length} step={0.1} min={1} onChange={(v) => update("length", v)} />
            <NumberField id="width" label="Širina sobe (m)" value={input.width} step={0.1} min={1} onChange={(v) => update("width", v)} />
            <NumberField id="height" label="Visina plafona (m)" value={input.height} step={0.1} min={2} onChange={(v) => update("height", v)} />
          </div>
        )}

        {step === 2 && (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <NumberField id="doors" label="Broj vrata" value={input.doors} min={0} onChange={(v) => update("doors", v)} />
            <NumberField id="windows" label="Broj prozora" value={input.windows} min={0} onChange={(v) => update("windows", v)} />
          </div>
        )}

        {step === 3 && (
          <>
            <OptionGroup
              legend="Vrsta posla"
              value={input.includeGletovanje ? "yes" : "no"}
              onChange={(v) => update("includeGletovanje", v === "yes")}
              options={[
                { value: "yes", label: "Gletovanje + farbanje" },
                { value: "no", label: "Samo farbanje" },
              ]}
            />
            {input.includeGletovanje && (
              <OptionGroup<WallCondition>
                legend="Stanje zida"
                value={input.wallCondition}
                onChange={(v) => update("wallCondition", v)}
                options={[
                  { value: "good", label: "Dobro (nova gradnja)" },
                  { value: "average", label: "Prosečno" },
                  { value: "poor", label: "Loše (stariji zid, oštećenja)" },
                ]}
              />
            )}
          </>
        )}

        {step === 4 && (
          <OptionGroup
            legend="Broj slojeva boje"
            value={String(input.coats) as "1" | "2"}
            onChange={(v) => update("coats", Number(v) as 1 | 2)}
            options={[
              { value: "1", label: "Jedan sloj" },
              { value: "2", label: "Dva sloja (preporučeno)" },
            ]}
          />
        )}
      </div>

      <div className="mt-8 flex justify-between">
        {step > 1 ? (
          <button
            type="button"
            onClick={() => setStep((s) => (s - 1) as Step)}
            className="rounded-lg border border-navy/20 px-5 py-2.5 text-sm font-semibold text-navy transition hover:bg-navy hover:text-white"
          >
            Nazad
          </button>
        ) : (
          <span />
        )}
        {step < 4 ? (
          <button
            type="button"
            onClick={() => setStep((s) => (s + 1) as Step)}
            className="rounded-lg bg-navy px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-accent"
          >
            Dalje
          </button>
        ) : (
          <button
            type="button"
            onClick={() => setResult(calculateResult(input))}
            className="rounded-lg bg-navy px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-accent"
          >
            Izračunaj
          </button>
        )}
      </div>
    </div>
  );
}
