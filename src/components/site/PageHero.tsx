import type { ReactNode } from "react";

export function PageHero({ eyebrow, title, children }: { eyebrow: string; title: string; children?: ReactNode }) {
  return (
    <section className="bg-secondary">
      <div className="mx-auto max-w-4xl px-4 py-14 text-center sm:px-6 sm:py-20">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-3 text-4xl text-primary sm:text-5xl">{title}</h1>
        {children && <div className="mx-auto mt-4 max-w-2xl text-muted-foreground sm:text-lg">{children}</div>}
      </div>
    </section>
  );
}
