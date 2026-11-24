import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/CtaBand";
import { PHOTOS, pageHead } from "@/lib/site";

export const Route = createFileRoute("/gallery")({
  head: () => pageHead("Gallery | Cleaning Angels Maclean NSW", "Real results from Cleaning Angels: kitchens, bathrooms, bedrooms, ovens and holiday accommodation cleaned throughout Maclean and surrounding areas."),
  component: Gallery,
});

const ORDER = [PHOTOS.kitchenIsland, PHOTOS.showerBathroom, PHOTOS.holidayBedroom, PHOTOS.timberStaircase, PHOTOS.benchtopSink, PHOTOS.livingRoom, PHOTOS.cleanOven, PHOTOS.guestBedroom, PHOTOS.twinBedroom, PHOTOS.cleanBath, PHOTOS.kitchenGalley];

function Gallery() {
  const [active, setActive] = useState<(typeof ORDER)[number] | null>(null);
  return (
    <>
      <PageHero eyebrow="Gallery" title="Real homes, really clean">
        <p>Fresh kitchens, welcoming bedrooms and beautifully clean bathrooms around Maclean.</p>
      </PageHero>
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="columns-2 gap-3 lg:columns-3 sm:gap-4 [&>*]:mb-3 sm:[&>*]:mb-4">
          {ORDER.map((p) => (
            <Button key={p.src} type="button" variant="ghost" onClick={() => setActive(p)} className="group block h-auto w-full break-inside-avoid overflow-hidden rounded-2xl p-0 shadow-soft" aria-label={`View larger: ${p.alt}`}>
              <img src={p.src} alt={p.alt} loading="lazy" className="h-auto w-full transition-transform duration-500 group-hover:scale-[1.03]" />
            </Button>
          ))}
        </div>
      </section>
      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent aria-describedby={undefined} className="w-[calc(100%-2rem)] max-w-5xl border-0 bg-card p-3 pt-12 shadow-soft">
          <DialogTitle className="sr-only">{active?.alt}</DialogTitle>
          {active && <img src={active.src} alt={active.alt} className="max-h-[85vh] w-full rounded-2xl object-contain" />}
        </DialogContent>
      </Dialog>
      <CtaBand />
    </>
  );
}
