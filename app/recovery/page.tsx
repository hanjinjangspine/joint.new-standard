import type { Metadata } from "next";
import CareArticle from "@/components/CareArticle";
import SEOJsonLd from "@/components/SEOJsonLd";
import { recoveryCare } from "@/lib/care-articles";
import { createMetadata, webPageJsonLd } from "@/lib/seo";

const data = recoveryCare;
export const metadata: Metadata = createMetadata({ title: `${data.title} | 새기준병원 관절센터`, description: data.lead, path: "/recovery" });
export default function Page() {
  return <><SEOJsonLd data={webPageJsonLd({ title: data.title, description: data.lead, path: "/recovery" })} /><CareArticle data={data} /></>;
}
