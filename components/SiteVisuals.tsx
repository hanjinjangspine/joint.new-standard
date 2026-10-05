"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { applyHospitalVisuals } from "@/lib/visual-refresh";
export default function SiteVisuals() {
  const pathname = usePathname();
  useEffect(() => {
    const timer = requestAnimationFrame(() => applyHospitalVisuals("/images/content-images-v3/"));
    return () => {
      cancelAnimationFrame(timer);
      document.querySelectorAll("[data-nsv-added]").forEach((element) => element.remove());
      document.querySelectorAll(".nsv-content-card,.nsv-content-section").forEach((element) => element.classList.remove("nsv-content-card", "nsv-content-section", "nsv-content-wide"));
      document.querySelectorAll<HTMLElement>(".nsv-card,.nsv-section").forEach((element) => {
        element.classList.remove("nsv-card", "nsv-section");
        element.style.removeProperty("--nsv-card-image");
        delete element.dataset.nsvImage;
      });
    };
  }, [pathname]);
  return null;
}
