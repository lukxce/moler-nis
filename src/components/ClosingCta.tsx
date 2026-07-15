import { Container } from "@/components/Container";

export function ClosingCta({ phone }: { phone: string }) {
  return (
    <section className="py-10">
      <Container>
        <div className="wash-warm-alt relative flex flex-col items-start gap-6 overflow-hidden rounded-lg border border-black/5 p-8 sm:flex-row sm:items-center sm:justify-between sm:p-12">
          <div>
            <span className="font-mono text-sm font-semibold uppercase tracking-wide text-accent">
              Besplatna procena
            </span>
            <h2 className="mt-2 text-2xl font-bold text-navy sm:text-3xl">
              Niste sigurni koji radovi vam trebaju?
            </h2>
            <p className="mt-2 max-w-xl text-muted">
              Pozovite nas i opišite prostor. Dogovaramo besplatan obilazak i
              dajemo tačnu procenu pre početka bilo kakvog rada.
            </p>
          </div>
          <a
            href={`tel:${phone.replace(/\s/g, "")}`}
            className="shrink-0 rounded-md bg-accent px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-accent-dark"
          >
            Pozovite {phone}
          </a>
        </div>
      </Container>
    </section>
  );
}
