import { Link } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { BUSINESS, NAV } from "@/lib/site";
import { Logo } from "./Logo";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/90 backdrop-blur">
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 sm:px-6 lg:flex lg:justify-between">
        <Logo />
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: true }}
              className="relative py-1 text-sm font-medium text-primary/80 transition-colors hover:text-primary data-[status=active]:text-sky after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:scale-x-0 after:rounded-full after:bg-sky after:transition-transform data-[status=active]:after:scale-x-100"
            >
              {n.label}
            </Link>
          ))}
          <Button asChild variant="hero" size="lg">
            <Link to="/contact" hash="quote">Request a Quote</Link>
          </Button>
        </nav>
        <div className="flex items-center gap-1 lg:hidden">
          <Button asChild variant="ghost" size="icon" aria-label={`Call ${BUSINESS.phone}`}>
            <a href={BUSINESS.phoneHref}><Phone /></a>
          </Button>
          <Button variant="ghost" size="icon" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </div>
      {open && (
        <nav className="border-t border-border bg-background px-4 pb-5 lg:hidden" aria-label="Mobile">
          <ul className="flex flex-col py-2">
            {NAV.map((n) => (
              <li key={n.to}>
                <Link to={n.to} activeOptions={{ exact: true }} onClick={() => setOpen(false)} className="block border-b border-border/60 py-3.5 text-base font-medium text-primary data-[status=active]:text-sky">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
          <Button asChild variant="hero" size="xl" className="mt-3 w-full">
            <Link to="/contact" hash="quote" onClick={() => setOpen(false)}>Request a Quote</Link>
          </Button>
        </nav>
      )}
    </header>
  );
}
