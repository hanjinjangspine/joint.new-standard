"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { hospitalInfo } from "@/lib/data";

const groups = [
  { label: "증상·질환", links: [
    ["아픈 부위·질환 전체 보기", "/patient-guides"], ["무릎", "/knee"], ["어깨", "/shoulder"],
    ["고관절", "/hip"], ["족부·발목", "/foot-ankle"], ["손·손목·팔꿈치", "/hand-wrist-elbow"],
    ["골절·골다공증", "/osteoporosis-fracture"]
  ] },
  { label: "치료·회복", links: [
    ["비수술 치료", "/injection-pain"], ["관절수술 판단", "/minimally-invasive-surgery"],
    ["족부·발목 수술 판단", "/foot-ankle-mis"], ["관절 회복관리", "/recovery"]
  ] },
  { label: "의료진", links: [["의료진", "/doctor"]] },
  { label: "의학정보", links: [["의학정보", "/column"]] },
  { label: "진료안내", links: [["진료시간·오시는 길·예약", "/contact"]] }
];

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const header = useRef<HTMLElement>(null);
  const menuButton = useRef<HTMLButtonElement>(null);
  const close = () => {
    setIsOpen(false);
    header.current?.querySelectorAll("details[open]").forEach((item) => item.removeAttribute("open"));
  };
  useEffect(() => {
    const dismiss = (event: PointerEvent) => {
      if (header.current && !header.current.contains(event.target as Node)) {
        header.current.querySelectorAll("details[open]").forEach((item) => item.removeAttribute("open"));
        setIsOpen(false);
      }
    };
    document.addEventListener("pointerdown", dismiss);
    return () => document.removeEventListener("pointerdown", dismiss);
  }, []);
  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <>
      <a href="#main-content" className="sr-only z-50 rounded-md bg-brand-900 px-4 py-3 text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4">본문으로 바로가기</a>
      <header ref={header} className="site-header sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur" onKeyDown={(event) => {
        if (event.key === "Escape") {
          const summary = (event.target as HTMLElement).closest("details")?.querySelector("summary");
          close();
          if (isOpen) menuButton.current?.focus(); else summary?.focus();
        }
      }}>
        <nav aria-label="새기준병원 사이트 이동" className="site-switcher">
          <div className="mx-auto flex max-w-7xl items-center gap-1 px-5 sm:px-6 lg:px-8">
            <a href="https://new-standard.co.kr/">본원</a>
            <Link href="/" aria-current="true" onClick={close}>관절센터 <span className="sr-only">현재 사이트</span></Link>
            <a href="https://rehab.new-standard.co.kr/">회복재활센터</a>
          </div>
        </nav>
        <div className="site-header-row mx-auto flex max-w-7xl items-center gap-4 px-5 sm:px-6 lg:px-8">
          <Link href="/" className="flex min-w-0 shrink-0 items-center gap-3" aria-label="새기준병원 관절센터 메인" onClick={close}>
            <Image src={hospitalInfo.logoPath} alt={hospitalInfo.logoAlt} width={1200} height={368} priority className="h-auto w-[124px] sm:w-[152px]" />
            <span className="whitespace-nowrap text-sm font-extrabold text-ink">관절센터</span>
          </Link>
          <nav id="center-navigation" aria-label="주요 메뉴" className={`center-navigation ${isOpen ? "is-open" : ""}`}>
            {groups.map((group) => group.links.length === 1 ? (
              <Link key={group.label} href={group.links[0][1]} aria-current={isActive(group.links[0][1]) ? "page" : undefined} onClick={close} className="nav-top-link">{group.label}</Link>
            ) : (
              <details key={group.label} className="nav-group" onToggle={(event) => {
                if (event.currentTarget.open) header.current?.querySelectorAll("details[open]").forEach((item) => { if (item !== event.currentTarget) item.removeAttribute("open"); });
              }}>
                <summary className={group.links.some(([, href]) => isActive(href)) ? "is-active" : ""}>{group.label}<ChevronDown size={15} aria-hidden="true" /></summary>
                <div className="nav-group-links">
                  {group.links.map(([label, href]) => <Link key={href} href={href} aria-current={isActive(href) ? "page" : undefined} onClick={close}>{label}</Link>)}
                </div>
              </details>
            ))}
          </nav>
          <div className="ml-auto flex shrink-0 items-center gap-2">
            <Link href={hospitalInfo.consultationPhoneHref} className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-brand-800 px-3 text-sm font-bold text-white hover:bg-brand-900" aria-label="전화 상담 031-328-0333"><Phone size={18} aria-hidden="true" /><span className="hidden sm:inline">전화상담</span></Link>
            <button ref={menuButton} type="button" className="site-menu-toggle inline-flex h-11 w-11 items-center justify-center rounded-lg border border-line" aria-label={isOpen ? "메뉴 닫기" : "메뉴 열기"} aria-expanded={isOpen} aria-controls="center-navigation" onClick={() => isOpen ? close() : setIsOpen(true)}>{isOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}</button>
          </div>
        </div>
      </header>
    </>
  );
}
