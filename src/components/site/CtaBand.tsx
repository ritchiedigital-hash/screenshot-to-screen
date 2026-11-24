import { Link } from "@tanstack/react-router";
import { MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BUSINESS } from "@/lib/site";

export function CtaBand() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto flex max-w-5xl flex-col items-center px-4 py-14 text-center sm:px-6 sm:py-16">
        <p className="flex items-center gap-1.5 text-sm opacity-80"><MapPin className="size-4" /> {BUSINESS.area}</p>
        <h2 className="mt-3 text-3xl sm:text-4xl">Ready for a beautifully clean home?</h2>
        <p className="mt-3 max-w-xl opacity-85">Every home is different, so every quote is tailored to you. Get in touch and we'll take care of the rest.</p>
        <div className="mt-7 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <Button asChild variant="sky" size="xl"><Link to="/contact" hash="quote">Request a Quote</Link></Button>
          <Button asChild variant="soft" size="xl"><a href={BUSINESS.phoneHref}><Phone /> {BUSINESS.phone}</a></Button>
        </div>
      </div>
    </section>
  );
}
