import { z } from "zod";
import { SERVICE_OPTIONS } from "./site";

export const quoteSchema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100),
  phone: z.string().trim().min(6, "Please enter a phone number").max(30).regex(/^[0-9+()\s-]+$/, "Please enter a valid phone number"),
  email: z.string().trim().email("Please enter a valid email address").max(255),
  suburb: z.string().trim().min(1, "Please enter your suburb or area").max(100),
  service: z.enum(SERVICE_OPTIONS, { message: "Please choose a service" }),
  preferredDate: z.union([z.literal(""), z.string().regex(/^\d{4}-\d{2}-\d{2}$/)]).optional(),
  message: z.string().trim().min(1, "Please tell us what you need").max(2000),
});
export type QuoteInput = z.infer<typeof quoteSchema>;
