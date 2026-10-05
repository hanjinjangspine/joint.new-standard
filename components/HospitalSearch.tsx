"use client";

import { useEffect, useRef } from "react";
import { mountHospitalSearch } from "@/lib/hospital-search";

export default function HospitalSearch() {
  const host = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!host.current) return;
    return mountHospitalSearch(host.current, { site: "joint", indexUrl: "/hospital-search-v1.json" });
  }, []);
  return <div ref={host} />;
}
