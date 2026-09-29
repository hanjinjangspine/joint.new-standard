"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

type Category = { id: string; label: string; hint: string; links: { title: string; description: string; href: string }[] };

export default function GuideDirectory({ categories }: { categories: Category[] }) {
  const directory = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const revealHash = () => {
      const id = window.location.hash.slice(1);
      const item = Array.from(directory.current?.querySelectorAll("details") ?? []).find((element) => element.id === id);
      if (item) { item.open = true; item.scrollIntoView({ block: "start" }); }
    };
    revealHash();
    window.addEventListener("hashchange", revealHash);
    return () => window.removeEventListener("hashchange", revealHash);
  }, []);
  return (
    <div ref={directory} className="grid gap-4">
      {categories.map((category) => (
        <details key={category.id} id={category.id} className="guide-directory">
          <summary>
            <span><span className="block text-xl font-bold text-ink">{category.label} <span className="ml-2 text-sm font-medium text-muted">{category.links.length}개 안내</span></span><span className="mt-1 block text-sm leading-6 text-muted">{category.hint}</span></span>
          </summary>
          <div className="guide-directory-links grid gap-x-8 md:grid-cols-2">
            {category.links.map((link) => <Link key={link.href} href={link.href} className="group"><h2 className="text-base font-bold leading-7 text-brand-800 group-hover:underline">{link.title} →</h2><p className="mt-1 text-sm leading-6 text-muted">{link.description}</p></Link>)}
          </div>
        </details>
      ))}
    </div>
  );
}
