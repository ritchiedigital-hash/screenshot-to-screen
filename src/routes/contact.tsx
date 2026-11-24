import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { QuoteForm } from "@/components/site/QuoteForm";
import { FacebookIcon } from "@/components/site/Icons";
import { BUSINESS, pageHead } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => pageHead("Contact & Request a Quote | Cleaning Angels Maclean", "Request a cleaning quote from Cleaning Angels. Servicing Maclean, Yamba and all local areas up to Ballina. Call 0450 385 771 or send an enquiry online."),
  component: Contact,
});

function Contact() {
  return (
    <>
      <PageHero eyebrow="Contact Us" title="Request a Quote">
        <p>Tell us a little about your home and what you need, and we'll get back to you with a tailored quote.</p>
      </PageHero>
      <section id="quote" className="mx-auto grid max-w-7xl scroll-mt-24 gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[1.5fr_1fr]">
        <QuoteForm />
        <aside className="space-y-4">
          <div className="card-soft p-6">
            <h2 className="text-2xl text-primary">Get in touch</h2>
            <ul className="mt-4 space-y-4">
              <li><a href={BUSINESS.phoneHref} className="flex items-center gap-3 text-primary hover:text-sky"><span className="grid size-10 shrink-0 place-items-center rounded-full bg-sky-soft"><Phone className="size-4" /></span>{BUSINESS.phone}</a></li>
              <li><a href={`mailto:${BUSINESS.email}`} className="flex min-w-0 items-center gap-3 break-all text-primary hover:text-sky"><span className="grid size-10 shrink-0 place-items-center rounded-full bg-sky-soft"><Mail className="size-4" /></span>{BUSINESS.email}</a></li>
              <li className="flex items-center gap-3 text-primary"><span className="grid size-10 shrink-0 place-items-center rounded-full bg-sky-soft"><MapPin className="size-4" /></span>{BUSINESS.location}</li>
              <li><a href={BUSINESS.facebook} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-primary hover:text-sky"><span className="grid size-10 shrink-0 place-items-center rounded-full bg-sky-soft"><FacebookIcon className="size-4" /></span>Follow us on Facebook</a></li>
            </ul>
            <p className="mt-5 text-sm text-muted-foreground">Owner / operator: {BUSINESS.owner}</p>
          </div>
        </aside>
      </section>
      <section className="bg-secondary py-14 sm:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_1.6fr]">
          <div>
            <p className="eyebrow">Service area</p>
            <h2 className="mt-2 text-3xl text-primary sm:text-4xl">Proudly servicing Maclean, Yamba & all local areas up to Ballina</h2>
            <p className="mt-3 text-muted-foreground">Not sure if we cover your suburb? Send an enquiry and we'll let you know.</p>
          </div>
          <iframe
            title="Map of Maclean NSW, the Cleaning Angels service area"
            src="https://www.google.com/maps?q=Maclean+NSW+2463&z=12&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-80 w-full rounded-3xl border-0 shadow-soft sm:h-96"
          />
        </div>
      </section>
    </>
  );
}
