"use client";
import Script from "next/script";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

declare global {
  interface Window {
    NSCardImages?: { apply: () => Promise<void>; clear: () => void };
  }
}

/** Frozen card selections are checked again after each Next.js navigation. */
export default function CardImageEnhancements() {
  const pathname = usePathname();
  useEffect(() => {
    const apply = () => { void window.NSCardImages?.apply(); };
    window.addEventListener("nsc:ready", apply);
    apply();
    return () => {
      window.removeEventListener("nsc:ready", apply);
      window.NSCardImages?.clear();
    };
  }, [pathname]);
  return <Script src="/scripts/card-images-20261026.js" strategy="afterInteractive" />;
}
