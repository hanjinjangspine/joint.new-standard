"use client";

import Image from "next/image";
import Link from "next/link";
import { createPortal } from "react-dom";
import { ExternalLink, Maximize2, X } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";

type MedicalImageLightboxProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
};

const focusableSelector =
  'button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])';

export default function MedicalImageLightbox({
  src,
  alt,
  width,
  height,
  caption
}: MedicalImageLightboxProps) {
  const [isOpen, setIsOpen] = useState(false);
  const titleId = useId();
  const descriptionId = useId();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const trigger = triggerRef.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setIsOpen(false);
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) return;
      const focusable = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>(focusableSelector)
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      trigger?.focus();
    };
  }, [isOpen]);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(true)}
        className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-brand-200 bg-white px-4 py-2 text-sm font-extrabold text-brand-800 transition hover:bg-brand-50 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2"
      >
        <Maximize2 aria-hidden="true" size={17} />
        원본 크게 보기
      </button>

      {isOpen && typeof document !== "undefined"
        ? createPortal(
            <div
              data-testid="medical-image-lightbox-backdrop"
              className="fixed inset-0 z-[100] flex items-center justify-center bg-brand-900/95 p-3 sm:p-6"
              onClick={(event) => {
                if (event.currentTarget === event.target) setIsOpen(false);
              }}
            >
              <div
                ref={dialogRef}
                role="dialog"
                aria-modal="true"
                aria-labelledby={titleId}
                aria-describedby={caption ? descriptionId : undefined}
                className="flex max-h-[calc(100dvh-1.5rem)] w-full max-w-[1600px] flex-col overflow-hidden rounded-2xl border border-white/20 bg-white shadow-soft sm:max-h-[calc(100dvh-3rem)]"
              >
                <div className="flex items-center justify-between gap-4 border-b border-line px-4 py-3 sm:px-6">
                  <h2 id={titleId} className="text-lg font-extrabold text-ink sm:text-xl">
                    의료 일러스트 원본 보기
                  </h2>
                  <button
                    ref={closeRef}
                    type="button"
                    aria-label="원본 이미지 창 닫기"
                    onClick={() => setIsOpen(false)}
                    className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-line bg-white text-ink transition hover:bg-brand-50 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2"
                  >
                    <X aria-hidden="true" size={22} />
                  </button>
                </div>

                <div className="flex min-h-0 flex-1 items-center justify-center overflow-auto bg-[#EEF4F7] p-2 sm:p-4">
                  <Image
                    src={src}
                    alt={alt}
                    width={width}
                    height={height}
                    unoptimized
                    priority
                    sizes="100vw"
                    className="h-auto max-h-[calc(100dvh-12rem)] w-auto max-w-full object-contain object-center"
                  />
                </div>

                <div className="flex flex-col gap-3 border-t border-line bg-white px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
                  {caption ? (
                    <p id={descriptionId} className="text-sm font-semibold leading-6 text-muted">
                      {caption}
                    </p>
                  ) : (
                    <span />
                  )}
                  <Link
                    href={src}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-md bg-brand-800 px-4 py-2 text-sm font-extrabold text-white transition hover:bg-brand-900 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2"
                    aria-label={`${caption ?? alt} 원본 이미지 새 창에서 보기`}
                  >
                    새 창에서 원본 보기
                    <ExternalLink aria-hidden="true" size={17} />
                  </Link>
                </div>
              </div>
            </div>,
            document.body
          )
        : null}
    </>
  );
}
