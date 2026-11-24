import { describe, expect, it } from "vitest";
import { quoteSchema } from "@/lib/quote.schema";

const enquiry = {
  name: "Client review test",
  phone: "0450 385 771",
  email: "review@example.com",
  suburb: "Maclean",
  preferredDate: "",
  message: "Test enquiry for a home clean.",
};

describe("Approved quote form services", () => {
  it.each([
    "General Service Cleaning",
    "Deep Clean",
    "End of Lease Clean",
    "Airbnb / Holiday Clean",
    "Other",
  ])("accepts %s", (service) => {
    expect(quoteSchema.safeParse({ ...enquiry, service }).success).toBe(true);
  });

  it("rejects a service outside the five approved options", () => {
    expect(quoteSchema.safeParse({ ...enquiry, service: "Window installation" }).success).toBe(false);
  });
});