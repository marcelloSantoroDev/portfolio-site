import { ViewTransition } from "react";
import AvatarFigure from "@/components/AvatarFigure";
import { projectTags, type Project } from "@/content/projects";
import { pad, type Dictionary, type Lang } from "@/i18n";
import ProjectShot from "./ProjectShot";

type ProjectHeroProps = { project: Project; index: number; lang: Lang; dict: Dictionary };

export default function ProjectHero({ project, index, lang, dict }: ProjectHeroProps) {
  const tags = projectTags(project, lang);
  const links = project.links ?? [];

  return (
    <main className="flex flex-wrap border-b-2 border-ink">
      <div className="flex flex-[1_1_400px] flex-col gap-7 px-8 py-12">
        <div className="rise1 flex items-center gap-5">
          <span className="bob block h-24 w-24 flex-[0_0_auto]">
            <ViewTransition name={`avatar-${project.slug}`} share="morph" default="none">
              <span className="block h-full w-full">
                <AvatarFigure color="var(--color-accent)" outlined />
              </span>
            </ViewTransition>
          </span>
          <span className="font-wide text-[4rem] leading-none">{pad(index + 1)}</span>
        </div>
        <h1 className="rise2 m-0 font-serif text-[clamp(2.6rem,4.6vw,4.6rem)] leading-[1.02] font-normal tracking-[-0.02em]">
          {project.title[lang]}
        </h1>
        <div className="rise2 flex max-w-[34rem] flex-col gap-4">
          {project.description[lang].map((paragraph) => (
            <p key={paragraph} className="m-0 text-[18px] leading-[1.6]">
              {paragraph}
            </p>
          ))}
        </div>
        {tags.length > 0 && <p className="rise2 m-0 text-[13px] tracking-[0.08em] uppercase">{tags.join(" · ")}</p>}
        {(project.url || links.length > 0) && (
          <div className="rise3 flex flex-wrap gap-4">
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="visit inline-flex min-h-14 items-center gap-2.5 border-2 border-ink bg-ink px-7 text-[16px] font-semibold text-paper no-underline"
              >
                {project.urlText?.[lang] ?? dict.project.visit}
              </a>
            )}
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="visit inline-flex min-h-14 items-center gap-2.5 border-2 border-ink bg-paper px-7 text-[16px] font-semibold text-ink no-underline hover:text-ink"
              >
                {link.label[lang]}
              </a>
            ))}
          </div>
        )}
      </div>
      <ProjectShot project={project} lang={lang} dict={dict} />
    </main>
  );
}
