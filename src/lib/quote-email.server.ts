import type { QuoteInput } from "./quote.schema";

const RESEND_URL = "https://api.resend.com/emails";
export const FROM = "Cleaning Angels <bookings@cleaningangels.com.au>";
export const OWNER_EMAIL = "cleaningangels2@outlook.com";

export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

const NAVY = "#1f2f57";
const SKY = "#8ec5ea";
const SOFT = "#eef6fc";

function shell(title: string, inner: string) {
  return `<!doctype html><html><body style="margin:0;background:#ffffff;font-family:Arial,Helvetica,sans-serif;color:${NAVY}">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#ffffff"><tr><td align="center" style="padding:24px 12px">
<table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;border:1px solid ${SOFT};border-radius:14px;overflow:hidden">
<tr><td style="background:${NAVY};padding:22px 28px;color:#ffffff">
<div style="font-size:22px;font-weight:bold">Cleaning Angels</div>
<div style="font-size:13px;color:${SKY};margin-top:4px">Your Home, Our Passion</div></td></tr>
<tr><td style="padding:28px">
<h1 style="font-size:20px;margin:0 0 16px;color:${NAVY}">${title}</h1>
${inner}
</td></tr>
<tr><td style="background:${SOFT};padding:16px 28px;font-size:12px;color:${NAVY}">Cleaning Angels · Maclean NSW · 0450 385 771 · cleaningangels.com.au</td></tr>
</table></td></tr></table></body></html>`;
}

export function businessEmail(q: QuoteInput) {
  const rows: [string, string][] = [
    ["Name", q.name],
    ["Phone", q.phone],
    ["Email", q.email],
    ["Suburb / Area", q.suburb],
    ["Service", q.service],
    ["Preferred date", q.preferredDate || "Not specified"],
    ["Message", q.message],
  ];
  const table = rows
    .map(
      ([k, v]) =>
        `<tr><td style="padding:8px 12px;background:${SOFT};font-weight:bold;width:150px;vertical-align:top">${k}</td><td style="padding:8px 12px;white-space:pre-wrap;vertical-align:top">${escapeHtml(v)}</td></tr>`,
    )
    .join("");
  const html = shell(
    "New website booking enquiry",
    `<table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:separate;border-spacing:0 4px;font-size:14px">${table}</table>
<p style="font-size:13px;margin-top:18px">Reply to this email to respond directly to ${escapeHtml(q.name)}.</p>`,
  );
  const text = rows.map(([k, v]) => `${k}: ${v}`).join("\n");
  return { subject: "New Website Quote Request — Cleaning Angels", html, text };
}

export function customerEmail(q: QuoteInput) {
  const name = escapeHtml(q.name);
  const p = (t: string) => `<p style="font-size:15px;line-height:1.6;margin:0 0 14px">${t}</p>`;
  const html = shell(
    "We've received your enquiry",
    p(`Hi ${name},`) +
      p("Thank you for contacting Cleaning Angels!") +
      p("We have received your enquiry and will be in touch as soon as possible to discuss your cleaning requirements, availability and quotation.") +
      `<p style="font-size:15px;line-height:1.6;margin:0 0 14px;padding:12px 14px;background:${SOFT};border-left:4px solid ${SKY};border-radius:6px"><strong>Please note that your booking is not confirmed until we contact you directly.</strong></p>` +
      p("We look forward to creating a happy, clean space for you to enjoy.") +
      p(`Kind regards,<br><strong>Jeniferr Collins</strong><br>Owner/Operator — Cleaning Angels<br>0450 385 771<br>cleaningangels2@outlook.com<br>cleaningangels.com.au`) +
      `<p style="font-size:15px;font-style:italic;color:${NAVY};margin:0">Your Home, Our Passion.</p>`,
  );
  const text = `Hi ${q.name},

Thank you for contacting Cleaning Angels!

We have received your enquiry and will be in touch as soon as possible to discuss your cleaning requirements, availability and quotation.

Please note that your booking is not confirmed until we contact you directly.

We look forward to creating a happy, clean space for you to enjoy.

Kind regards,
Jeniferr Collins
Owner/Operator — Cleaning Angels
0450 385 771
cleaningangels2@outlook.com
cleaningangels.com.au

Your Home, Our Passion.`;
  return { subject: "We've Received Your Enquiry — Cleaning Angels", html, text };
}

export async function sendEmail(args: {
  to: string;
  replyTo: string;
  subject: string;
  html: string;
  text: string;
  idempotencyKey: string;
}): Promise<boolean> {
  const resendKey = process.env["RESEND_API_KEY"];
  if (!resendKey) {
    console.error("email not configured: RESEND_API_KEY missing from runtime environment");
    return false;
  }
  try {
    const res = await fetch(RESEND_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${resendKey}`,
        "Idempotency-Key": args.idempotencyKey,
      },
      body: JSON.stringify({
        from: FROM,
        to: [args.to],
        reply_to: args.replyTo,
        subject: args.subject,
        html: args.html,
        text: args.text,
      }),
    });
    if (!res.ok) {
      console.error(`Resend send failed [${res.status}] (${args.idempotencyKey.split("-").slice(0, 2).join("-")}): ${(await res.text()).slice(0, 300)}`);
      return false;
    }
    return true;
  } catch (e) {
    console.error("email send error", e instanceof Error ? e.message : e);
    return false;
  }
}
