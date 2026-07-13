import type { ReactNode } from "react";

import { Container } from "@/components/Container";

type Stat = {
  value: string;
  label: string;
};

type Cta = {
  label: string;
  href: string;
};

export function PageHero({
  eyebrow,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  stats,
  breadcrumb,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  primaryCta?: Cta;
  secondaryCta?: Cta;
  stats?: Stat[];
  breadcrumb?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-surface">
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
      <Container className="relative py-10 md:py-14">
        {breadcrumb}
        <span className="text-sm font-semibold uppercase tracking-wide text-accent">
          {eyebrow}
        </span>
        <h1 className="mt-3 max-w-2xl text-3xl font-extrabold leading-tight text-navy sm:text-4xl">
          {title}
        </h1>
        {subtitle && <p className="mt-4 max-w-2xl text-muted">{subtitle}</p>}
        {(primaryCta || secondaryCta) && (
          <div className="mt-6 flex flex-wrap gap-3">
            {primaryCta && (
              <a
                href={primaryCta.href}
                className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:bg-accent-dark"
              >
                {primaryCta.label}
              </a>
            )}
            {secondaryCta && (
              <a
                href={secondaryCta.href}
                className="rounded-full border border-navy/15 bg-white px-6 py-3 text-sm font-semibold text-navy transition hover:bg-navy hover:text-white"
              >
                {secondaryCta.label}
              </a>
            )}
          </div>
        )}

        {stats && stats.length > 0 && (
          <div className="mt-8 overflow-hidden rounded-2xl border border-black/5 bg-white text-navy shadow-sm sm:overflow-visible sm:rounded-none sm:border-none sm:bg-transparent sm:shadow-none sm:grid sm:grid-cols-3 sm:gap-4">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`flex items-center justify-between gap-4 px-5 py-4 sm:block sm:rounded-2xl sm:border sm:border-black/5 sm:bg-white sm:p-5 sm:shadow-sm ${
                  i !== stats.length - 1 ? "border-b border-black/5 sm:border-b-0" : ""
                }`}
              >
                <span className="text-sm text-muted sm:hidden">{stat.label}</span>
                <span className="font-bold sm:block">{stat.value}</span>
                <span className="hidden text-sm text-muted sm:block">{stat.label}</span>
              </div>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
