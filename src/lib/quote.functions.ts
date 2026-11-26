import { createServerFn } from "@tanstack/react-start";
import { getRequestHeader } from "@tanstack/react-start/server";
import { z } from "zod";
import { quoteSchema } from "./quote.schema";

const submitSchema = quoteSchema.extend({
  submissionId: z.string().uuid(),
  website: z.string().max(200).optional(), // honeypot: must be empty
});

const RATE_WINDOW_MS = 10 * 60 * 1000;
const RATE_MAX = 3;

async function hashClient(ip: string, ua: string) {
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(`${ip}|${ua}`));
  return Array.from(new Uint8Array(buf)).map((b) => b.toString(16).padStart(2, "0")).join("");
}

export type SubmitResult =
  | { ok: true; emailed: boolean }
  | { ok: false; reason: "rate_limited" | "error" };

export const submitQuote = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => submitSchema.parse(data))
  .handler(async ({ data }): Promise<SubmitResult> => {
    // Bots fill the hidden field; pretend success without storing or emailing.
    if (data.website) return { ok: true, emailed: true };

    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const email = await import("./quote-email.server");

    const ip = getRequestHeader("cf-connecting-ip") ?? getRequestHeader("x-forwarded-for") ?? "unknown";
    const clientHash = await hashClient(ip, getRequestHeader("user-agent") ?? "");

    let { data: row } = await supabaseAdmin
      .from("quote_requests")
      .select("id, business_email_sent_at, customer_email_sent_at")
      .eq("submission_id", data.submissionId)
      .maybeSingle();

    if (!row) {
      const since = new Date(Date.now() - RATE_WINDOW_MS).toISOString();
      const { count } = await supabaseAdmin
        .from("quote_requests")
        .select("id", { count: "exact", head: true })
        .eq("client_hash", clientHash)
        .gte("created_at", since);
      if ((count ?? 0) >= RATE_MAX) return { ok: false, reason: "rate_limited" };

      const { data: inserted, error } = await supabaseAdmin
        .from("quote_requests")
        .insert({
          submission_id: data.submissionId,
          client_hash: clientHash,
          name: data.name,
          phone: data.phone,
          email: data.email,
          suburb: data.suburb,
          service: data.service,
          preferred_date: data.preferredDate ? data.preferredDate : null,
          message: data.message,
        })
        .select("id, business_email_sent_at, customer_email_sent_at")
        .single();
      if (error || !inserted) {
        console.error("quote insert failed", error?.message);
        return { ok: false, reason: "error" };
      }
      row = inserted;
    }

    let businessSent = !!row.business_email_sent_at;
    let customerSent = !!row.customer_email_sent_at;

    if (!businessSent) {
      const m = email.businessEmail(data);
      businessSent = await email.sendEmail({ to: email.OWNER_EMAIL, replyTo: data.email, ...m, idempotencyKey: `quote-business-${data.submissionId}` });
      if (businessSent) await supabaseAdmin.from("quote_requests").update({ business_email_sent_at: new Date().toISOString() }).eq("id", row.id);
    }
    if (!customerSent) {
      const m = email.customerEmail(data);
      customerSent = await email.sendEmail({ to: data.email, replyTo: email.OWNER_EMAIL, ...m, idempotencyKey: `quote-customer-${data.submissionId}` });
      if (customerSent) await supabaseAdmin.from("quote_requests").update({ customer_email_sent_at: new Date().toISOString() }).eq("id", row.id);
    }

    return { ok: true, emailed: businessSent };
  });
