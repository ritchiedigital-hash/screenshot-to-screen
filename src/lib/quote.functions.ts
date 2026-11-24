import { createServerFn } from "@tanstack/react-start";
import { quoteSchema } from "./quote.schema";

export const submitQuote = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => quoteSchema.parse(data))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin.from("quote_requests").insert({
      name: data.name,
      phone: data.phone,
      email: data.email,
      suburb: data.suburb,
      service: data.service,
      preferred_date: data.preferredDate ? data.preferredDate : null,
      message: data.message,
    });
    if (error) {
      console.error("quote insert failed", error.message);
      throw new Error("Could not save enquiry");
    }
    return { ok: true as const };
  });
