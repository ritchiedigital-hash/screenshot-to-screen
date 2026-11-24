import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Heart, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";
import { CtaBand } from "@/components/site/CtaBand";
import { BUSINESS, PHOTOS, pageHead } from "@/lib/site";
import { SERVICES } from "@/lib/services";

export const Route = createFileRoute("/")({
  head: () =>
    pageHead(
      "Cleaning Angels | Professional Cleaning Services Maclean NSW",
      "Cleaning Angels provides professional home cleaning, deep cleaning, end-of-lease cleaning and Airbnb/holiday cleaning throughout Maclean and surrounding areas. Request a quote today.",
    ),
  component: Home,
});

function Home() {
  return (
    <>
      <section className="relative isolate overflow-hidden">
        <img src={PHOTOS.kitchenIsland.src} alt={PHOTOS.kitchenIsland.alt} className="absolute inset-0 -z-20 h-full w-full object-cover object-[70%_center]" fetchPriority="high" />
        <div className="hero-veil absolute inset-0 -z-10" />
        <div className="mx-auto flex min-h-[560px] max-w-7xl items-end px-4 pt-48 pb-12 sm:px-6 md:min-h-[640px] md:items-center md:py-24">
          <div className="max-w-xl animate-[rise_0.8s_ease-out]">
            <p className="eyebrow">Cleaning services in Maclean NSW</p>
            <h1 className="mt-3 text-5xl leading-[0.95] text-primary sm:text-6xl lg:text-7xl">
              Your Home,
              <span className="block font-script text-6xl font-normal text-sky sm:text-7xl lg:text-8xl">Our Passion</span>
            </h1>
            <p className="mt-5 max-w-md text-base text-foreground/80 sm:text-lg">
              Exceptional cleaning services delivered with care, quality and attention to detail throughout Maclean and surrounding areas.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="hero" size="xl"><Link to="/contact" hash="quote">Request a Quote <ArrowRight /></Link></Button>
              <Button asChild variant="soft" size="xl"><a href={BUSINESS.phoneHref}><Phone /> Call Now</a></Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center">
            <p className="eyebrow">What we do</p>
            <h2 className="mt-2 text-3xl text-primary sm:text-4xl">Cleaning services for Maclean homes</h2>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((s, i) => (
              <Reveal key={s.id} delay={i * 80}>
                <article className="card-soft group flex h-full flex-col p-6 text-center transition-all hover:-translate-y-1 hover:shadow-lift">
                  <div className="mx-auto grid size-16 place-items-center rounded-full bg-sky-soft text-primary transition-colors group-hover:bg-sky group-hover:text-accent-foreground">
                    <s.icon className="size-7" strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-5 text-2xl text-primary">{s.title}</h3>
                  <p className="mt-2 flex-1 text-sm text-muted-foreground">{s.short}</p>
                  <Link to="/services" hash={s.id} className="mt-5 inline-flex items-center justify-center gap-1.5 text-sm font-medium text-sky hover:text-primary">
                    Learn More <ArrowRight className="size-4" />
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <img src={PHOTOS.livingRoom.src} alt={PHOTOS.livingRoom.alt} loading="lazy" className="aspect-[4/5] w-full rounded-3xl object-cover shadow-lift sm:aspect-[4/3] lg:aspect-[4/5]" />
          </Reveal>
          <Reveal delay={100}>
            <p className="eyebrow">About Cleaning Angels</p>
            <h2 className="mt-2 text-4xl text-primary sm:text-5xl">Cleaning with Care</h2>
            <div className="mt-5 space-y-4 text-foreground/80">
              <p>Cleaning Angels is a locally operated cleaning business proudly servicing Maclean and surrounding areas.</p>
              <p>We believe a clean home should feel fresh, comfortable and welcoming. Every clean is completed with care, attention to detail and respect for our clients' homes.</p>
              <p>From regular household cleaning through to deep cleans, end-of-lease services and holiday accommodation, our focus is simple — dependable service and a beautifully clean result.</p>
            </div>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-sky-soft px-4 py-2 text-sm font-medium text-primary">
              <Heart className="size-4 text-sky" /> Locally owned & operated in Maclean NSW
            </div>
            <div className="mt-8"><Button asChild variant="hero" size="xl"><Link to="/about">More About Us</Link></Button></div>
          </Reveal>
        </div>
      </section>

      <section className="pb-16 sm:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3">
            {[PHOTOS.showerBathroom, PHOTOS.benchtopSink, PHOTOS.twinBedroom].map((p, i) => (
              <Reveal key={p.src} delay={i * 80} className={i === 2 ? "col-span-2 md:col-span-1" : ""}>
                <img src={p.src} alt={p.alt} loading="lazy" className="aspect-square w-full rounded-2xl object-cover md:aspect-[4/5]" />
              </Reveal>
            ))}
          </div>
          <div className="mt-8 text-center"><Button asChild variant="soft" size="xl"><Link to="/gallery">View Our Gallery <ArrowRight /></Link></Button></div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

