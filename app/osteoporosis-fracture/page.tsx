import type { Metadata } from "next";
import ClinicPageContent from "@/components/ClinicPageContent";
import { clinicPages } from "@/lib/data";
import { createMetadata } from "@/lib/seo";

const page = clinicPages["osteoporosis-fracture"];

export const metadata: Metadata = createMetadata({
  title: page.seoTitle,
  description: page.seoDescription,
  path: "/osteoporosis-fracture",
  keywords: page.keywords
});

export default function OsteoporosisFracturePage() {
  return <ClinicPageContent page={page} />;
}
