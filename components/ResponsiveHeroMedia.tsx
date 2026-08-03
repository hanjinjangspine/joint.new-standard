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

type MediaKind = "medical" | "photo" | "illustration";

function getMediaKind(src: string): MediaKind {
  if (src.startsWith("/patient-guides/illustrations/")) return "medical";
  if (src.includes("/doctors/")) return "photo";
  return "illustration";
}

export default function ResponsiveHeroMedia({
  src,
  alt,
  width,
  height,
  priority = false,
  caption,
  expandable = src.startsWith("/patient-guides/illustrations/")
}: ResponsiveHeroMediaProps) {
  const mediaKind = getMediaKind(src);
  const sourceAspectRatio = width / height;
  const mediaLayout = sourceAspectRatio < 0.85 ? "portrait" : sourceAspectRatio > 1.9 ? "wide" : "standard";
  const minimumAspectRatio = mediaKind === "photo" ? 0.78 : mediaLayout === "portrait" ? 0.72 : 1;
  const frameAspectRatio = Math.min(2.2, Math.max(minimumAspectRatio, sourceAspectRatio));
  const responsiveSizes =
    mediaKind === "photo" || mediaLayout === "portrait"
      ? "(max-width: 640px) calc(100vw - 32px), 400px"
      : "(max-width: 640px) calc(100vw - 32px), (max-width: 1023px) 520px, 540px";

  return (
    <figure
      className="nsh-responsive-hero__media"
      data-media-kind={mediaKind}
      data-media-layout={mediaLayout}
    >
      <div className="nsh-responsive-hero__media-frame" style={{ aspectRatio: frameAspectRatio }}>
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          sizes={responsiveSizes}
          className={`h-full w-full object-contain ${mediaKind === "photo" ? "object-top" : "object-center"}`}
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
