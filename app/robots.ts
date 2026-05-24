import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/data";
import { isIndexable } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      ...(isIndexable ? { allow: "/" } : { disallow: "/" })
    },
    sitemap: new URL("/sitemap.xml", SITE_URL).toString(),
    host: SITE_URL
  };
}
