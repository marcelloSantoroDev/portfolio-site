import Link from "next/link";
import { projects } from "@/content/projects";
import { fill, pad, type Dictionary, type Lang } from "@/i18n";

/** Anterior e próximo, em ciclo. */
export default function ProjectPager({ index, lang, dict }: { index: number; lang: Lang; dict: Dictionary }) {
  const total = projects.length;
  const prev = (index - 1 + total) % total;
  const next = (index + 1) % total;

  return (
    <nav aria-label={dict.project.pagerLabel} className="flex flex-wrap border-b-2 border-ink">
      <Link
        href={`/${lang}/projetos/${projects[prev].slug}`}
        className="pager flex flex-[1_1_360px] flex-col gap-2 px-8 py-10"
      >
        <span className="text-[13px] tracking-[0.1em] uppercase">{fill(dict.project.prev, { n: pad(prev + 1) })}</span>
        <span className="font-serif text-[clamp(1.6rem,2.6vw,2.4rem)] leading-[1.1]">{projects[prev].title[lang]}</span>
      </Link>
      <Link
        href={`/${lang}/projetos/${projects[next].slug}`}
        className="pager flex flex-[1_1_360px] flex-col items-end gap-2 border-l-2 border-ink px-8 py-10 text-right"
      >
        <span className="text-[13px] tracking-[0.1em] uppercase">{fill(dict.project.next, { n: pad(next + 1) })}</span>
        <span className="font-serif text-[clamp(1.6rem,2.6vw,2.4rem)] leading-[1.1]">{projects[next].title[lang]}</span>
      </Link>
    </nav>
  );
}
