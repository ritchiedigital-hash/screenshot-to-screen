import { describe, expect, it } from "vitest";
import { businessEmail, customerEmail, escapeHtml } from "@/lib/quote-email.server";

const q = { name: "<b>Sam</b>", phone: "0400 000 000", email: "sam@example.com", suburb: "Yamba", service: "Deep Clean" as const, preferredDate: "", message: "<script>x</script>" };

describe("quote emails", () => {
  it("escapes customer content", () => {
    expect(escapeHtml("<a>&\"'")).toBe("&lt;a&gt;&amp;&quot;&#39;");
    expect(businessEmail(q).html).not.toContain("<script>");
    expect(customerEmail(q).html).toContain("Hi &lt;b&gt;Sam&lt;/b&gt;,");
  });
  it("uses the approved subjects", () => {
    expect(businessEmail(q).subject).toBe("New Website Quote Request — Cleaning Angels");
    expect(customerEmail(q).subject).toBe("We've Received Your Enquiry — Cleaning Angels");
  });
});
