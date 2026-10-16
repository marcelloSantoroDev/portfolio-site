import Image from "next/image";
import Mountains from "@/components/Mountains";
import Placeholder from "@/components/Placeholder";
import type { Project } from "@/content/projects";
import type { Dictionary, Lang } from "@/i18n";

/** Print do projeto numa moldura de navegador, sobre o céu. */
export default function ProjectShot({ project, lang, dict }: { project: Project; lang: Lang; dict: Dictionary }) {
  return (
    <div className="relative flex min-h-[36rem] flex-[2_1_640px] items-center overflow-hidden border-l-2 border-ink bg-sky px-8 pt-12 pb-20">
      <Mountains className="h-36" />
      <figure className="rise3 relative m-0 w-full border-2 border-ink bg-paper shadow-frame">
        <div className="flex items-center gap-3 border-b-2 border-ink px-4 py-2.5 text-[13px]">
          <span className="block flex-[1_1_auto] truncate rounded-full border border-ink bg-white px-3 py-1">
            {project.urlLabel ?? dict.project.urlPlaceholder}
          </span>
        </div>
        <div className="relative aspect-[16/10] bg-white">
          {project.image ? (
            <Image
              src={project.image}
              alt={project.imageAlt[lang]}
              fill
              sizes="(max-width: 1040px) 100vw, 66vw"
              className="object-cover"
              priority
            />
          ) : (
            <Placeholder label={dict.project.shotPlaceholder} dashed={false} className="h-full w-full text-[13px]" />
          )}
        </div>
        {project.caption && (
          <figcaption className="border-t-2 border-ink px-4 py-2.5 text-[13px]">{project.caption[lang]}</figcaption>
        )}
      </figure>
    </div>
  );
}
