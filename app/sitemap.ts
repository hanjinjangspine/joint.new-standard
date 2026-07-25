import type { MetadataRoute } from "next";
import { contentUpdatedAt } from "@/lib/content-dates";
import { allStaticPaths, SITE_URL } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  return allStaticPaths.map((path) => ({
    url: new URL(path, SITE_URL).toString(),
    lastModified: contentUpdatedAt[path]
      ? new Date(contentUpdatedAt[path])
      : new Date("2026-05-31"),
    changeFrequency: path.startsWith("/column") ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path.startsWith("/column") ? 0.7 : 0.8
  }));
}
