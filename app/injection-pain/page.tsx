import type { Metadata } from "next";
import ClinicPageContent from "@/components/ClinicPageContent";
import { clinicPages } from "@/lib/data";
import { createMetadata } from "@/lib/seo";

const page = clinicPages["injection-pain"];

export const metadata: Metadata = createMetadata({
  title: page.seoTitle,
  description: page.seoDescription,
  path: "/injection-pain",
  keywords: page.keywords
});

export default function InjectionPainPage() {
  return <ClinicPageContent page={page} />;
}
