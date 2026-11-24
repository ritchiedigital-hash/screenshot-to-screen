import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
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
        <p>A few of our recent cleans around Maclean. Tap any photo to view it larger.</p>
      </PageHero>
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
          {ORDER.map((p) => (
            <button key={p.src} type="button" onClick={() => setActive(p)} className="group block w-full break-inside-avoid overflow-hidden rounded-2xl shadow-soft focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none" aria-label={`View larger: ${p.alt}`}>
              <img src={p.src} alt={p.alt} loading="lazy" className="w-full transition-transform duration-500 group-hover:scale-[1.03]" />
            </button>
          ))}
        </div>
      </section>
      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-w-5xl border-0 bg-transparent p-0 shadow-none">
          <DialogTitle className="sr-only">{active?.alt}</DialogTitle>
          {active && <img src={active.src} alt={active.alt} className="max-h-[85vh] w-full rounded-2xl object-contain" />}
        </DialogContent>
      </Dialog>
      <CtaBand />
    </>
  );
}
