import Image from "next/image";
import MedicalImageLightbox from "@/components/MedicalImageLightbox";

export type ResponsiveHeroImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

type ResponsiveHeroMediaProps = ResponsiveHeroImage & {
  priority?: boolean;
  caption?: string;
  expandable?: boolean;
};

export default function ResponsiveHeroMedia({
  src,
  alt,
  width,
  height,
  priority = false,
  caption,
  expandable = src.startsWith("/patient-guides/illustrations/")
}: ResponsiveHeroMediaProps) {
  return (
    <figure className="nsh-responsive-hero__media">
      <div className="nsh-responsive-hero__media-frame">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          sizes="(max-width: 640px) calc(100vw - 32px), (max-width: 1023px) min(880px, calc(100vw - 48px)), 540px"
          className="h-full w-full object-contain object-center"
        />
      </div>
      {caption || expandable ? (
        <figcaption className="flex flex-col gap-3 border-t border-brand-100 bg-white px-4 py-3 text-sm font-semibold leading-6 text-muted sm:flex-row sm:items-center sm:justify-between">
          {caption ? <span>{caption}</span> : <span className="sr-only">의료 일러스트</span>}
          {expandable ? (
            <MedicalImageLightbox
              src={src}
              alt={alt}
              width={width}
              height={height}
              caption={caption}
            />
          ) : null}
        </figcaption>
      ) : null}
    </figure>
  );
}
