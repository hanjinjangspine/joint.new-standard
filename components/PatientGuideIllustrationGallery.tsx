import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import type { PatientGuideIllustration } from "@/lib/patient-guide-illustrations";

type PatientGuideIllustrationGalleryProps = {
  illustrations: PatientGuideIllustration[];
  showDisclosure?: boolean;
};

export default function PatientGuideIllustrationGallery({
  illustrations,
  showDisclosure = false
}: PatientGuideIllustrationGalleryProps) {
  if (illustrations.length === 0) return null;

  return (
    <>
      <div className={illustrations.length > 1 ? "grid items-start gap-6 lg:grid-cols-2" : "mx-auto max-w-5xl"}>
        {illustrations.map((illustration) => {
          const crop = illustration.displayCrop;
          const cropTop = crop?.top ?? 0;
          const cropRight = crop?.right ?? 0;
          const cropBottom = crop?.bottom ?? 0;
          const cropLeft = crop?.left ?? 0;
          const visibleWidth = illustration.width - cropLeft - cropRight;
          const visibleHeight = illustration.height - cropTop - cropBottom;

          return (
            <figure
              key={illustration.src}
              className="overflow-hidden rounded-2xl border border-line bg-white shadow-sm"
            >
              <div className="relative flex min-h-0 items-center justify-center overflow-hidden bg-[#F4F7F8]">
                {crop ? (
                  <div
                    className="relative w-full overflow-hidden"
                    style={{ aspectRatio: `${visibleWidth} / ${visibleHeight}` }}
                  >
                    <Image
                      src={illustration.src}
                      width={illustration.width}
                      height={illustration.height}
                      alt={illustration.alt}
                      sizes="(max-width: 640px) calc(100vw - 32px), (max-width: 1024px) calc(100vw - 48px), 960px"
                      loading="lazy"
                      decoding="async"
                      className="absolute h-auto max-w-none object-contain"
                      style={{
                        width: `${(illustration.width / visibleWidth) * 100}%`,
                        left: `${-(cropLeft / visibleWidth) * 100}%`,
                        top: `${-(cropTop / visibleHeight) * 100}%`
                      }}
                    />
                  </div>
                ) : (
                  <div className="flex w-full items-center justify-center p-2 sm:p-3">
                    <Image
                      src={illustration.src}
                      width={illustration.width}
                      height={illustration.height}
                      alt={illustration.alt}
                      sizes="(max-width: 640px) calc(100vw - 32px), (max-width: 1024px) calc(100vw - 48px), 960px"
                      loading="lazy"
                      decoding="async"
                      className="h-auto w-auto max-h-[720px] max-w-full rounded-xl object-contain"
                    />
                  </div>
                )}
              </div>
              <figcaption className="border-t border-line bg-white px-5 py-4 sm:px-6">
                <p className="text-base font-extrabold leading-7 text-ink">{illustration.caption}</p>
                {illustration.note ? (
                  <p className="mt-2 text-sm leading-6 text-muted">{illustration.note}</p>
                ) : null}
                <Link
                  href={illustration.src}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 text-sm font-extrabold text-brand-700"
                  aria-label={`${illustration.caption} 원본 이미지 새 창에서 보기`}
                >
                  원본 크게 보기
                  <ExternalLink aria-hidden="true" size={15} />
                </Link>
              </figcaption>
            </figure>
          );
        })}
      </div>
      {showDisclosure ? (
        <p className="mt-4 text-sm leading-6 text-muted">
          치료 이해를 돕기 위한 AI 기반 3D 의료 일러스트입니다. 실제 환자의 치료 전·후 사진이 아니며,
          치료 방법·과정·회복은 환자 상태와 의료진의 판단에 따라 달라질 수 있습니다.
        </p>
      ) : null}
    </>
  );
}
