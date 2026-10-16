"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import Placeholder from "@/components/Placeholder";
import type { ProjectImage } from "@/content/projects";
import { fill, type Dictionary, type Lang } from "@/i18n";

type ProjectGalleryProps = {
  images: ProjectImage[];
  urlLabel: string | null;
  lang: Lang;
  dict: Dictionary;
};

/**
 * Moldura de navegador com os prints do projeto. Com mais de um print, vira um carrossel discreto:
 * trilho com scroll-snap (arrasta no toque), setas e contador na barra de endereço.
 */
export default function ProjectGallery({ images, urlLabel, lang, dict }: ProjectGalleryProps) {
  const track = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const t = dict.project;
  const many = images.length > 1;
  const caption = images[index]?.caption;

  const go = (next: number) => {
    const el = track.current;
    if (!el) return;
    const target = (next + images.length) % images.length;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollTo({ left: target * el.clientWidth, behavior: reduce ? "auto" : "smooth" });
  };

  const onScroll = () => {
    const el = track.current;
    if (!el) return;
    const current = Math.round(el.scrollLeft / el.clientWidth);
    if (current !== index) setIndex(current);
  };

  return (
    <figure
      className="rise3 relative m-0 w-full border-2 border-ink bg-paper shadow-frame"
      aria-roledescription={many ? t.galleryRole : undefined}
      aria-label={many ? t.galleryLabel : undefined}
    >
      <div className="flex items-center gap-3 border-b-2 border-ink px-4 py-2.5 text-[13px]">
        <span className="block min-w-0 flex-[1_1_auto] truncate rounded-full border border-ink bg-white px-3 py-1">
          {urlLabel ?? t.urlPlaceholder}
        </span>
        {many && (
          <span className="flex flex-[0_0_auto] items-center gap-2">
            <button
              type="button"
              onClick={() => go(index - 1)}
              aria-label={t.galleryPrev}
              className="flex h-7 w-7 cursor-pointer items-center justify-center border-2 border-ink bg-paper leading-none hover:bg-sky"
            >
              ‹
            </button>
            <span aria-live="polite" className="min-w-[3.25rem] text-center tabular-nums">
              {fill(t.galleryCount, { n: index + 1, total: images.length })}
            </span>
            <button
              type="button"
              onClick={() => go(index + 1)}
              aria-label={t.galleryNext}
              className="flex h-7 w-7 cursor-pointer items-center justify-center border-2 border-ink bg-paper leading-none hover:bg-sky"
            >
              ›
            </button>
          </span>
        )}
      </div>

      {images.length === 0 ? (
        <div className="relative aspect-[16/10] bg-white">
          <Placeholder label={t.shotPlaceholder} dashed={false} className="h-full w-full text-[13px]" />
        </div>
      ) : (
        <div
          ref={track}
          onScroll={onScroll}
          className="no-scrollbar flex snap-x snap-mandatory overflow-x-auto bg-white"
        >
          {images.map((image, i) => (
            <div
              key={image.src}
              role={many ? "group" : undefined}
              aria-roledescription={many ? t.gallerySlide : undefined}
              aria-label={many ? fill(t.galleryCount, { n: i + 1, total: images.length }) : undefined}
              className="relative aspect-[16/10] w-full flex-[0_0_100%] snap-start"
            >
              <Image
                src={image.src}
                alt={image.alt[lang]}
                fill
                sizes="(max-width: 1040px) 100vw, 66vw"
                className="object-cover object-top"
                priority={i === 0}
              />
            </div>
          ))}
        </div>
      )}

      {caption && (
        <figcaption className="border-t-2 border-ink px-4 py-2.5 text-[13px]">{caption[lang]}</figcaption>
      )}
    </figure>
  );
}
