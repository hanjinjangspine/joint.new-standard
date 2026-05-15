import type { MetadataRoute } from "next";
import { allStaticPaths, SITE_URL } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return allStaticPaths.map((path) => ({
    url: new URL(path, SITE_URL).toString(),
    lastModified: now,
    changeFrequency: path.startsWith("/column") ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path.startsWith("/column") ? 0.7 : 0.8
  }));
}
