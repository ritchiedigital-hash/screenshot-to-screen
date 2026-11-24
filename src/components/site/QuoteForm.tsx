import { useState, type FormEvent } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { useServerFn } from "@tanstack/react-start";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { BUSINESS, SERVICE_OPTIONS } from "@/lib/site";
import { quoteSchema } from "@/lib/quote.schema";
import { submitQuote } from "@/lib/quote.functions";

type Status = "idle" | "sending" | "success" | "error";
const field = "h-12 rounded-xl bg-card text-base";

export function QuoteForm() {
  const send = useServerFn(submitQuote);
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const raw = Object.fromEntries(new FormData(form).entries());
    const parsed = quoteSchema.safeParse(raw);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const k = String(issue.path[0]);
        if (!errs[k]) errs[k] = issue.message;
      }
      setErrors(errs);
      return;
    }
    setErrors({});
    setStatus("sending");
    try {
      await send({ data: parsed.data });
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div role="status" className="card-soft flex flex-col items-center p-10 text-center">
        <CheckCircle2 className="size-12 text-sky" />
        <p className="mt-4 text-lg text-primary">Thank you! Your enquiry has been sent to Cleaning Angels. We'll be in touch as soon as possible.</p>
        <Button variant="soft" className="mt-6" onClick={() => setStatus("idle")}>Send another enquiry</Button>
      </div>
    );
  }

  const err = (k: string) => errors[k] && <p id={`${k}-error`} className="mt-1.5 text-sm text-destructive">{errors[k]}</p>;
  const aria = (k: string) => (errors[k] ? { "aria-invalid": true, "aria-describedby": `${k}-error` } : {});

  return (
    <form onSubmit={onSubmit} noValidate className="card-soft grid gap-5 p-5 sm:grid-cols-2 sm:p-8">
      <div><Label htmlFor="name">Name *</Label><Input id="name" name="name" autoComplete="name" required className={`mt-2 ${field}`} {...aria("name")} />{err("name")}</div>
      <div><Label htmlFor="phone">Phone Number *</Label><Input id="phone" name="phone" type="tel" autoComplete="tel" required className={`mt-2 ${field}`} {...aria("phone")} />{err("phone")}</div>
      <div><Label htmlFor="email">Email Address *</Label><Input id="email" name="email" type="email" autoComplete="email" required className={`mt-2 ${field}`} {...aria("email")} />{err("email")}</div>
      <div><Label htmlFor="suburb">Suburb / Area *</Label><Input id="suburb" name="suburb" required className={`mt-2 ${field}`} {...aria("suburb")} />{err("suburb")}</div>
      <div>
        <Label htmlFor="service">Service Required *</Label>
        <select id="service" name="service" required defaultValue="" className={`mt-2 w-full border border-input px-3 focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none ${field}`} {...aria("service")}>
          <option value="" disabled>Select a service</option>
          {SERVICE_OPTIONS.map((s) => <option key={s} value={s}>{s}</option>)}
        </select>
        {err("service")}
      </div>
      <div><Label htmlFor="preferredDate">Preferred Cleaning Date</Label><Input id="preferredDate" name="preferredDate" type="date" className={`mt-2 ${field}`} /></div>
      <div className="sm:col-span-2"><Label htmlFor="message">Message / Tell Us What You Need *</Label><Textarea id="message" name="message" rows={5} required className="mt-2 rounded-xl bg-card text-base" {...aria("message")} />{err("message")}</div>
      {status === "error" && (
        <p role="alert" className="rounded-xl border border-destructive/30 bg-destructive/5 p-4 text-sm text-destructive sm:col-span-2">
          Sorry, we couldn't send your enquiry. Please contact Cleaning Angels directly by phone or email.{" "}
          <a href={BUSINESS.phoneHref} className="font-semibold underline">{BUSINESS.phone}</a> · <a href={`mailto:${BUSINESS.email}`} className="font-semibold underline">{BUSINESS.email}</a>
        </p>
      )}
      <div className="sm:col-span-2">
        <Button type="submit" variant="hero" size="xl" disabled={status === "sending"} className="w-full sm:w-auto">
          {status === "sending" && <Loader2 className="animate-spin" />}Request My Quote
        </Button>
      </div>
    </form>
  );
}
