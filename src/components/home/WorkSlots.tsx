"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Placeholder from "@/components/Placeholder";
import { featuredProjects, projectNumber } from "@/content/projects";
import { fill, pad, type Dictionary, type Lang } from "@/i18n";

// Cor do slot selecionado, pela posição (01 sky, 02 ochre, 03 olive).
const SLOT_COLORS = ["bg-sky", "bg-ochre", "bg-olive"];

/** Slots dos projetos em destaque, que expandem ao clicar. */
export default function WorkSlots({ lang, dict }: { lang: Lang; dict: Dictionary }) {
  const [selected, setSelected] = useState(0);
  const current = featuredProjects[selected];

  return (
    <>
      <div className="flex flex-wrap border-t-2 border-ink">
        {featuredProjects.map((project, i) => {
          const on = i === selected;
          return (
            <button
              key={project.slug}
              type="button"
              aria-expanded={on}
              onClick={() => setSelected(i)}
              className={`slot flex min-h-[30rem] cursor-pointer flex-col justify-start border-b-2 border-ink p-8 text-left text-ink ${
                i > 0 ? "border-l-2" : ""
              } ${on ? `flex-[3_1_440px] ${SLOT_COLORS[i % SLOT_COLORS.length]}` : "flex-[1_1_220px] bg-paper"}`}
            >
              <span className="slotnum font-wide block text-[4.5rem] leading-none">{pad(projectNumber(project))}</span>
              <span className="mt-4 block font-serif text-[1.7rem] leading-[1.15]">{project.title[lang]}</span>
              {on && (
                <span className="mt-6 flex flex-col gap-4">
                  {project.image ? (
                    <span className="relative block aspect-[16/10] border-2 border-ink">
                      <Image
                        src={project.image}
                        alt={project.imageAlt[lang]}
                        fill
                        sizes="(max-width: 760px) 100vw, 50vw"
                        className="object-cover"
                      />
                    </span>
                  ) : (
                    <Placeholder label={dict.work.imagePlaceholder} className="aspect-[16/10]" />
                  )}
                  <span className="block text-[16px] leading-[1.55]">{project.summary[lang]}</span>
                  {project.tags.length > 0 && (
                    <span className="block text-[13px] tracking-[0.06em] uppercase">{project.tags.join(" · ")}</span>
                  )}
                </span>
              )}
            </button>
          );
        })}
      </div>
      <div className="flex justify-end px-8 py-5">
        <Link href={`/${lang}/projetos/${current.slug}`} className="text-[15px] font-semibold">
          {fill(dict.work.link, { n: pad(projectNumber(current)) })}
        </Link>
      </div>
    </>
  );
}
