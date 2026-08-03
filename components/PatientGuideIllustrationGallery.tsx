import Image from "next/image";
import MedicalImageLightbox from "@/components/MedicalImageLightbox";
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
          const isPortrait = illustration.width / illustration.height < 0.85;

          return (
            <figure
              key={illustration.src}
              className="overflow-hidden rounded-2xl border border-line bg-white shadow-sm"
            >
              <div className="relative flex min-h-0 items-center justify-center overflow-hidden bg-[#F4F7F8] p-2 sm:p-3">
                <Image
                  src={illustration.src}
                  width={illustration.width}
                  height={illustration.height}
                  alt={illustration.alt}
                  sizes="(max-width: 640px) calc(100vw - 32px), (max-width: 1024px) calc(100vw - 48px), 960px"
                  loading="lazy"
                  decoding="async"
                  className={`h-auto w-auto max-w-full rounded-xl object-contain ${isPortrait ? "max-h-[560px]" : "max-h-[720px]"}`}
                />
              </div>
              <figcaption className="border-t border-line bg-white px-5 py-4 sm:px-6">
                <p className="text-base font-extrabold leading-7 text-ink">{illustration.caption}</p>
                {illustration.note ? (
                  <p className="mt-2 text-sm leading-6 text-muted">{illustration.note}</p>
                ) : null}
                <div className="mt-4">
                  <MedicalImageLightbox
                    src={illustration.src}
                    alt={illustration.alt}
                    width={illustration.width}
                    height={illustration.height}
                    caption={illustration.caption}
                  />
                </div>
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
