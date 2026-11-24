import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CtaBand } from "@/components/site/CtaBand";
import { pageHead } from "@/lib/site";
import { SERVICES } from "@/lib/services";

export const Route = createFileRoute("/services")({
  head: () => pageHead("Cleaning Services Maclean | Deep, End of Lease & Airbnb Cleans", "House cleaning, deep cleaning, end of lease cleaning and Airbnb / holiday cleaning in Maclean NSW and surrounding areas. Request a tailored quote."),
  component: Services,
});

function Services() {
  return (
    <>
      <PageHero eyebrow="Our Services" title="Cleaning services in Maclean">
        <p>Four services, one simple promise: a home that feels fresh, comfortable and cared for. Every quote is tailored to your home.</p>
      </PageHero>
      <div className="mx-auto max-w-6xl space-y-16 px-4 py-16 sm:px-6 sm:py-24 lg:space-y-24">
        {SERVICES.map((s, i) => (
          <section key={s.id} id={s.id} className="scroll-mt-28">
            <Reveal className="grid items-center gap-8 md:grid-cols-2 md:gap-14">
              <img src={s.photo.src} alt={s.photo.alt} loading="lazy" className={`aspect-[4/3] w-full rounded-3xl object-cover shadow-lift ${i % 2 ? "md:order-2" : ""}`} />
              <div>
                <div className="grid size-14 place-items-center rounded-full bg-sky-soft text-primary"><s.icon className="size-6" strokeWidth={1.5} /></div>
                <h2 className="mt-4 text-3xl text-primary sm:text-4xl">{s.title}</h2>
                <div className="mt-4 space-y-3 text-foreground/80">{s.long.map((p) => <p key={p}>{p}</p>)}</div>
                <Button asChild variant="hero" size="xl" className="mt-7"><Link to="/contact" hash="quote">Request a Quote <ArrowRight /></Link></Button>
              </div>
            </Reveal>
          </section>
        ))}
      </div>
      <CtaBand />
    </>
  );
}
