import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { BUSINESS, NAV } from "@/lib/site";
import { FacebookIcon, InstagramIcon } from "./Icons";
import { LogoImage } from "./Logo";

export function SiteFooter() {
  return (
    <footer className="bg-navy-deep text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <LogoImage className="size-28" />
          <p className="mt-4 font-display text-xl italic opacity-90">{BUSINESS.slogan}</p>
        </div>
        <div>
          <h3 className="font-sans text-sm font-semibold tracking-[0.18em] uppercase opacity-70">Quick Links</h3>
          <ul className="mt-4 space-y-2.5">
            {NAV.map((n) => (
              <li key={n.to}><Link to={n.to} className="opacity-85 transition-opacity hover:opacity-100 hover:text-sky">{n.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-sans text-sm font-semibold tracking-[0.18em] uppercase opacity-70">Contact</h3>
          <ul className="mt-4 space-y-3">
            <li><a href={BUSINESS.phoneHref} className="flex items-center gap-2.5 hover:text-sky"><Phone className="size-4 shrink-0" />{BUSINESS.phone}</a></li>
            <li><a href={`mailto:${BUSINESS.email}`} className="flex min-w-0 items-center gap-2.5 break-all hover:text-sky"><Mail className="size-4 shrink-0" />{BUSINESS.email}</a></li>
            <li className="flex items-center gap-2.5"><MapPin className="size-4 shrink-0" />{BUSINESS.location}</li>
          </ul>
        </div>
        <div>
          <h3 className="font-sans text-sm font-semibold tracking-[0.18em] uppercase opacity-70">Service Area</h3>
          <p className="mt-4 opacity-85">{BUSINESS.area}</p>
          <div className="mt-5 flex gap-3">
            <a href={BUSINESS.facebook} target="_blank" rel="noopener noreferrer" aria-label="Cleaning Angels on Facebook" className="grid size-10 place-items-center rounded-full border border-primary-foreground/25 transition-colors hover:bg-sky hover:border-sky"><FacebookIcon /></a>
            {/* Instagram: replace href with the correct profile URL when available */}
            <span role="img" aria-label="Instagram coming soon" title="Instagram coming soon" className="grid size-10 place-items-center rounded-full border border-primary-foreground/25 opacity-50"><InstagramIcon /></span>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 text-xs opacity-70 sm:flex-row sm:justify-between sm:px-6">
          <p>© 2026 Cleaning Angels. All rights reserved.</p>
          <p>Website by Ritchie Digital</p>
        </div>
      </div>
    </footer>
  );
}
