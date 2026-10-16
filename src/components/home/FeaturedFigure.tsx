import Link from "next/link";
import { ViewTransition, type CSSProperties } from "react";
import AvatarFigure from "@/components/AvatarFigure";
import type { Project } from "@/content/projects";
import { fill, type Dictionary, type Lang } from "@/i18n";

// Posições dos três bonecos de destaque (em %). Um quarto projeto reaproveita o ciclo.
const LEFTS = [16, 46, 74];
const TOPS = [10, 30, 8];

type FeaturedFigureProps = {
  project: Project;
  index: number;
  lang: Lang;
  dict: Dictionary;
};

/** Boneco de destaque: link para o projeto, com placa e transição para a página dele. */
export default function FeaturedFigure({ project, index, lang, dict }: FeaturedFigureProps) {
  const left = LEFTS[index % LEFTS.length];
  const top = TOPS[index % TOPS.length];
  const title = project.title[lang];

  return (
    <Link
      href={`/${lang}/projetos/${project.slug}`}
      aria-label={fill(dict.project.ariaFigure, { title })}
      className="fig absolute z-10 block"
      style={{ left: `${left}%`, top: `${top}%` }}
    >
      <span
        className="lean d1 relative block h-full w-full"
        style={{ "--left": left, "--top": top, "--pull": 1.1, "--lim": 140 } as CSSProperties}
      >
        <ViewTransition name={`avatar-${project.slug}`} share="morph" default="none">
          <span className="disc block h-full w-full">
            <AvatarFigure color="var(--color-avatar-featured)" outlined inkClassName="ink" />
          </span>
        </ViewTransition>
        <span className="sign absolute top-[60%] left-1/2 block rounded-[3px] border-2 border-ink bg-paper px-3 py-1.5 text-[14px] font-bold whitespace-nowrap text-ink shadow-sign">
          {project.sign[lang]}
        </span>
      </span>
    </Link>
  );
}
