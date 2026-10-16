import Link from "next/link";
import { otherProjects, projectNumber } from "@/content/projects";
import { pad, type Dictionary, type Lang } from "@/i18n";

/** Lista dos projetos que não estão em destaque. */
export default function OtherWork({ lang, dict }: { lang: Lang; dict: Dictionary }) {
  if (otherProjects.length === 0) return null;

  return (
    <div className="border-t-2 border-ink">
      <h3 className="m-0 px-8 pt-10 pb-6 text-[13px] font-bold tracking-[0.12em] uppercase">{dict.work.otherTitle}</h3>
      <ul className="m-0 list-none p-0">
        {otherProjects.map((project) => (
          <li key={project.slug} className="border-t-2 border-ink">
            <Link
              href={`/${lang}/projetos/${project.slug}`}
              className="pager flex flex-wrap items-baseline gap-x-8 gap-y-2 px-8 py-6"
            >
              <span className="font-wide w-16 flex-[0_0_auto] text-[1.6rem] leading-none">
                {pad(projectNumber(project))}
              </span>
              <span className="flex-[1_1_280px] font-serif text-[clamp(1.4rem,2.2vw,1.9rem)] leading-[1.15]">
                {project.title[lang]}
              </span>
              <span className="flex-[2_1_320px] text-[15px] leading-[1.5]">{project.summary[lang]}</span>
              <span aria-hidden="true" className="flex-[0_0_auto] text-[15px] font-semibold">
                →
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
