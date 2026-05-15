"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { hospitalInfo, navItems } from "@/lib/data";

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur">
      <div className="border-b border-brand-100 bg-brand-50">
        <div className="mx-auto flex max-w-7xl items-center justify-center px-4 py-1.5 text-center text-xs font-semibold leading-5 text-brand-800 sm:px-6 sm:text-sm">
          {hospitalInfo.commonNotice}
        </div>
      </div>
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex min-w-[180px] flex-col sm:min-w-[220px]"
          aria-label="새기준병원 관절센터 메인으로 이동"
          onClick={() => setIsOpen(false)}
        >
          <span className="text-lg font-extrabold tracking-[-0.01em] text-ink sm:text-xl">
            {hospitalInfo.centerName}
          </span>
          <span className="hidden text-[10px] font-bold uppercase leading-[1.25] tracking-[0.08em] text-brand-600 sm:block">
            NEW STANDARD HOSPITAL
            <br />
            JOINT & FOOT-ANKLE CENTER
          </span>
        </Link>

        <nav aria-label="주요 메뉴" className="hidden min-w-0 flex-1 items-center justify-end gap-1 xl:flex">
          {navItems.map((item) => {
            const activePaths = "activePaths" in item ? item.activePaths : undefined;
            const isActive = activePaths
              ? activePaths.some((path) => pathname.startsWith(path))
              : item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`whitespace-nowrap rounded-md px-2 py-2 text-[13px] font-bold transition 2xl:px-2.5 ${
                  isActive ? "bg-brand-50 text-brand-800" : "text-muted hover:bg-brand-50"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href={hospitalInfo.consultationPhoneHref}
            className="inline-flex min-h-11 items-center justify-center gap-2 whitespace-nowrap rounded-md bg-brand-800 px-3 py-2 text-sm font-bold text-white shadow-sm transition hover:bg-brand-900 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 sm:px-4"
            aria-label="새기준병원 관절센터 전화 상담 안내로 이동"
          >
            <Phone aria-hidden="true" size={18} />
            <span className="hidden sm:inline">전화상담</span>
          </Link>
          <button
            type="button"
            aria-label={isOpen ? "모바일 메뉴 닫기" : "모바일 메뉴 열기"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-line text-ink transition hover:bg-brand-50 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 xl:hidden"
            onClick={() => setIsOpen((current) => !current)}
          >
            {isOpen ? <X aria-hidden="true" size={22} /> : <Menu aria-hidden="true" size={22} />}
          </button>
        </div>
      </div>

      {isOpen ? (
        <div id="mobile-navigation" className="border-t border-line bg-white xl:hidden">
          <nav aria-label="모바일 주요 메뉴" className="mx-auto grid max-w-7xl gap-1 px-4 py-4">
            {navItems.map((item) => {
              const activePaths = "activePaths" in item ? item.activePaths : undefined;
              const isActive = activePaths
                ? activePaths.some((path) => pathname.startsWith(path))
                : item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`rounded-md px-4 py-3 text-base font-semibold ${
                    isActive ? "bg-brand-50 text-brand-800" : "text-ink hover:bg-brand-50"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
