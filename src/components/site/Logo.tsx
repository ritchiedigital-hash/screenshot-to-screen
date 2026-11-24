import { Link } from "@tanstack/react-router";

export function HaloMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 48" aria-hidden="true" className={className} fill="none">
      <ellipse cx="32" cy="8" rx="13" ry="4" stroke="currentColor" strokeWidth="2.4" className="text-sky" />
      <path d="M30 34C22 22 10 20 3 24c6 1 9 4 11 7-5 0-8 2-10 5 8-2 17 0 26 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-sky" />
      <path d="M34 34c8-12 20-14 27-10-6 1-9 4-11 7 5 0 8 2 10 5-8-2-17 0-26 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-sky" />
      <path d="M22 44V32l10-8 10 8v12" stroke="currentColor" strokeWidth="2.4" strokeLinejoin="round" className="text-primary" />
    </svg>
  );
}

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link to="/" className="flex min-w-0 items-center gap-2.5" aria-label="Cleaning Angels home">
      <HaloMark className="h-10 w-12 shrink-0 sm:h-12 sm:w-14" />
      <span className="flex min-w-0 flex-col leading-none">
        <span className="text-[0.6rem] font-medium tracking-[0.35em] text-muted-foreground uppercase">Cleaning</span>
        <span className="font-script text-3xl text-primary sm:text-4xl">Angels</span>
        {!compact && <span className="mt-0.5 text-[0.6rem] font-semibold tracking-[0.2em] text-primary uppercase">Maclean NSW</span>}
      </span>
    </Link>
  );
}
