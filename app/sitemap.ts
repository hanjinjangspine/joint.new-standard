import type { MetadataRoute } from "next";
import { contentUpdatedAt } from "@/lib/content-dates";
import { allStaticPaths, SITE_URL } from "@/lib/data";
import { patientGuides } from "@/lib/patient-guides";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    ...allStaticPaths,
    ...patientGuides.map((guide) => `/patient-guides/${guide.slug}`)
  ];

  return paths.map((path) => ({
    url: new URL(path, SITE_URL).toString(),
    lastModified: contentUpdatedAt[path]
      ? new Date(contentUpdatedAt[path])
      : path.startsWith("/patient-guides/")
        ? new Date("2026-07-31")
      : new Date("2026-05-31"),
    changeFrequency: path.startsWith("/column") ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path.startsWith("/column") ? 0.7 : 0.8
  }));
}
