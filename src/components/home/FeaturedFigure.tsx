import Link from "next/link";
import { ViewTransition, type CSSProperties } from "react";
import AvatarFigure, { figColor } from "@/components/AvatarFigure";
import type { Project } from "@/content/projects";
import { fill, type Dictionary, type Lang } from "@/i18n";

// Posições dos bonecos de destaque (em %), fora da área da caixa de apresentação.
// Desktop: zigue-zague em uma faixa; celular (até 760px): duas fileiras acima da caixa, com bonecos de 84px.
const POSITIONS = [
  { left: 6, top: 8, mLeft: 2, mTop: 2 },
  { left: 24, top: 22, mLeft: 31, mTop: 2 },
  { left: 46, top: 30, mLeft: 67, mTop: 2 },
  { left: 66, top: 8, mLeft: 16, mTop: 16 },
  { left: 82, top: 28, mLeft: 50, mTop: 16 },
];

type FeaturedFigureProps = {
  project: Project;
  index: number;
  lang: Lang;
  dict: Dictionary;
};

/** Boneco de destaque: link para o projeto, com placa e transição para a página dele. */
export default function FeaturedFigure({ project, index, lang, dict }: FeaturedFigureProps) {
  const { left, top, mLeft, mTop } = POSITIONS[index % POSITIONS.length];
  const title = project.title[lang];

  return (
    <Link
      href={`/${lang}/projetos/${project.slug}`}
      aria-label={fill(dict.project.ariaFigure, { title })}
      className="fig absolute z-10 block"
      style={{ "--fig-left": `${left}%`, "--fig-top": `${top}%`, "--fig-left-m": `${mLeft}%`, "--fig-top-m": `${mTop}%`, "--fig-color": figColor(index) } as CSSProperties}
    >
      <span
        className="lean d1 relative block h-full w-full"
        style={{ "--left": left, "--top": top, "--pull": 1.1, "--lim": 140 } as CSSProperties}
      >
        <ViewTransition name={`avatar-${project.slug}`} share="morph" default="none">
          <span className="disc block h-full w-full">
            <AvatarFigure color="var(--color-avatar-featured)" outlined hat="hover" />
          </span>
        </ViewTransition>
        <span className="sign absolute top-[60%] left-1/2 block rounded-[3px] border-2 border-ink bg-paper px-3 py-1.5 text-[14px] font-bold whitespace-nowrap text-ink shadow-sign">
          {project.sign[lang]}
        </span>
      </span>
    </Link>
  );
}
