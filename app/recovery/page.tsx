import type { Metadata } from "next";
import ClinicPageContent from "@/components/ClinicPageContent";
import { clinicPages } from "@/lib/data";
import { createMetadata } from "@/lib/seo";

const page = clinicPages.recovery;

export const metadata: Metadata = createMetadata({
  title: page.seoTitle,
  description: page.seoDescription,
  path: "/recovery",
  keywords: page.keywords
});

export default function RecoveryPage() {
  return <ClinicPageContent page={page} />;
}
