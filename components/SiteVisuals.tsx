"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { applyHospitalVisuals } from "@/lib/visual-refresh";
export default function SiteVisuals() {
  const pathname = usePathname();
  useEffect(() => {
    const timer = requestAnimationFrame(() => applyHospitalVisuals("/images/visual-refresh-v1/"));
    return () => {
      cancelAnimationFrame(timer);
      document.querySelectorAll<HTMLElement>(".nsv-card,.nsv-section").forEach((element) => {
        element.classList.remove("nsv-card", "nsv-section");
        element.style.removeProperty("--nsv-card-image");
        delete element.dataset.nsvImage;
      });
    };
  }, [pathname]);
  return null;
}
