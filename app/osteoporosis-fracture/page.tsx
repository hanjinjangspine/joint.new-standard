import type { Metadata } from "next";
import ClinicPageContent from "@/components/ClinicPageContent";
import SEOJsonLd from "@/components/SEOJsonLd";
import { clinicPages } from "@/lib/data";
import { createMetadata, webPageJsonLd } from "@/lib/seo";

const page = clinicPages["osteoporosis-fracture"];

export const metadata: Metadata = createMetadata({
  title: page.seoTitle,
  description: page.seoDescription,
  path: "/osteoporosis-fracture",
  keywords: page.keywords
});

export default function OsteoporosisFracturePage() {
  return (
    <>
      <SEOJsonLd
        data={webPageJsonLd({
          title: page.seoTitle,
          description: page.seoDescription,
          path: "/osteoporosis-fracture"
        })}
      />
      <ClinicPageContent page={page} />
    </>
  );
}
