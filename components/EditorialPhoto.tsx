import Image from "next/image";
import type { EditorialMedia } from "@/lib/editorial-media";

export default function EditorialPhoto({ media, className = "" }: { media: EditorialMedia; className?: string }) {
  return <figure className={`editorial-photo ${className}`} data-media-source={media.caption.startsWith("새기준병원 실제") ? "hospital-photo" : "explanatory"}>
    <Image src={media.src} alt={media.alt} width={media.width} height={media.height} sizes="(max-width: 767px) calc(100vw - 40px), 720px" className={media.src.includes("/illustrations/") ? "!object-contain" : ""} />
    <figcaption>{media.caption}</figcaption>
  </figure>;
}
