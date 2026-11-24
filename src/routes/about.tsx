import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart, MapPin, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CtaBand } from "@/components/site/CtaBand";
import { PHOTOS, pageHead } from "@/lib/site";

export const Route = createFileRoute("/about")({
  head: () => pageHead("About Cleaning Angels | Local Cleaner in Maclean NSW", "Cleaning Angels is a locally owned and operated cleaning business servicing Maclean NSW and surrounding areas with care and attention to detail."),
  component: About,
});

const VALUES = [
  { icon: Heart, title: "Care", text: "Every home is treated with respect, as if it were our own." },
  { icon: Sparkles, title: "Attention to detail", text: "The little things are what make a clean feel truly finished." },
  { icon: MapPin, title: "Local", text: "Proudly based in Maclean and servicing the surrounding areas." },
];

function About() {
  return (
    <>
      <PageHero eyebrow="About Us" title="Cleaning with Care">
        <p>A locally owned and operated cleaning business, built from the ground up in Maclean NSW.</p>
      </PageHero>
      <section className="py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <img src={PHOTOS.kitchenGalley.src} alt={PHOTOS.kitchenGalley.alt} loading="lazy" className="aspect-[4/5] w-full rounded-3xl object-cover shadow-lift" />
          </Reveal>
          <Reveal delay={100}>
            <h2 className="text-4xl text-primary">A clean home should feel welcoming</h2>
            <div className="mt-5 space-y-4 text-foreground/80">
              <p>Cleaning Angels is a locally operated cleaning business proudly servicing Maclean and surrounding areas.</p>
              <p>We believe a clean home should feel fresh, comfortable and welcoming. Every clean is completed with care, attention to detail and respect for our clients' homes.</p>
              <p>From regular household cleaning through to deep cleans, end-of-lease services and holiday accommodation, our focus is simple — dependable service and a beautifully clean result.</p>
            </div>
            <p className="mt-6 font-display text-xl italic text-primary">— Jeniferr Collins, owner</p>
            <div className="mt-8"><Button asChild variant="hero" size="xl"><Link to="/services">Our Services</Link></Button></div>
          </Reveal>
        </div>
      </section>
      <section className="bg-secondary py-16">
        <div className="mx-auto grid max-w-6xl gap-5 px-4 sm:grid-cols-3 sm:px-6">
          {VALUES.map((v, i) => (
            <Reveal key={v.title} delay={i * 80}>
              <div className="card-soft h-full p-6 text-center">
                <v.icon className="mx-auto size-8 text-sky" strokeWidth={1.5} />
                <h3 className="mt-3 text-2xl text-primary">{v.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{v.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
