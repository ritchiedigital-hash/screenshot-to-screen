import { Link } from "@tanstack/react-router";
import { LOGO_URL } from "@/lib/site";

export function LogoImage({ className = "" }: { className?: string }) {
  return <img src={LOGO_URL} alt="Cleaning Angels logo" width={480} height={480} className={`rounded-full object-cover ${className}`} />;
}

export function Logo() {
  return (
    <Link to="/" className="flex min-w-0 items-center gap-3" aria-label="Cleaning Angels home">
      <LogoImage className="size-20 shrink-0 shadow-soft sm:size-24" />
      <span className="text-[0.65rem] font-semibold tracking-[0.2em] text-primary uppercase">Maclean NSW</span>
    </Link>
  );
}
