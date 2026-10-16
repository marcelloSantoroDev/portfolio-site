import Mountains from "@/components/Mountains";
import type { Project } from "@/content/projects";
import type { Dictionary, Lang } from "@/i18n";
import ProjectGallery from "./ProjectGallery";

/** Prints do projeto numa moldura de navegador, sobre o céu. */
export default function ProjectShot({ project, lang, dict }: { project: Project; lang: Lang; dict: Dictionary }) {
  return (
    <div className="relative flex min-h-[36rem] flex-[2_1_640px] items-center overflow-hidden border-l-2 border-ink bg-sky px-8 pt-12 pb-20">
      <Mountains className="h-36" />
      <ProjectGallery
        images={project.images}
        urlLabel={project.urlLabel}
        photo={project.media === "photo"}
        lang={lang}
        dict={dict}
      />
    </div>
  );
}
