import type { Metadata } from "next";
import ClinicPageContent from "@/components/ClinicPageContent";
import { clinicPages } from "@/lib/data";
import { createMetadata } from "@/lib/seo";

const page = clinicPages["foot-ankle"];

export const metadata: Metadata = createMetadata({
  title: page.seoTitle,
  description: page.seoDescription,
  path: "/foot-ankle",
  keywords: page.keywords
});

export default function FootAnklePage() {
  return <ClinicPageContent page={page} />;
}
