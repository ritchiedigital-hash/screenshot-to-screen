import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { LOGO_URL, PHOTOS } from "@/lib/site";

const publicFile = (url: string) => path.resolve(process.cwd(), "public", `.${url}`);

describe("self-hosted production images", () => {
  it("uses a deployable public path for the logo and every original photo", () => {
    const urls = [LOGO_URL, ...Object.values(PHOTOS).map((photo) => photo.src)];

    expect(urls).toHaveLength(12);
    expect(new Set(urls).size).toBe(12);
    for (const url of urls) {
      expect(url).toMatch(/^\/images\/[a-z0-9-]+\.jpg$/);
      expect(url).not.toContain("/__l5e/");
    }
  });

  it("includes a valid JPEG at every referenced public path", () => {
    const urls = [LOGO_URL, ...Object.values(PHOTOS).map((photo) => photo.src)];

    for (const url of urls) {
      const file = publicFile(url);
      expect(existsSync(file), `${url} must be included in the repository`).toBe(true);
      const bytes = readFileSync(file);
      expect(bytes.subarray(0, 2).toString("hex"), `${url} must be a JPEG`).toBe("ffd8");
      expect(bytes.subarray(-2).toString("hex"), `${url} must be a complete JPEG`).toBe("ffd9");
    }
  });
});
