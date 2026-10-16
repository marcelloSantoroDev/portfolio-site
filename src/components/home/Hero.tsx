import Mountains from "@/components/Mountains";
import { contact } from "@/content/site";
import { featuredProjects } from "@/content/projects";
import type { Dictionary, Lang } from "@/i18n";
import Sky from "./Sky";
import Crowd from "./Crowd";
import FeaturedFigure from "./FeaturedFigure";

/** Céu com a multidão, caixa de apresentação e faixa lateral de contato. */
export default function Hero({ lang, dict }: { lang: Lang; dict: Dictionary }) {
  return (
    <section aria-label={dict.hero.label} className="flex flex-wrap border-b-2 border-ink">
      <Sky>
        <div className="absolute inset-0">
          <Crowd />
          {featuredProjects.map((project, i) => (
            <FeaturedFigure key={project.slug} project={project} index={i} lang={lang} dict={dict} />
          ))}
        </div>
        <Mountains className="h-44" />
        {/* z-[5]: acima da multidão (1–3), abaixo dos bonecos de destaque (10) */}
        <div className="absolute right-8 bottom-8 left-8 z-[5] flex max-w-xl flex-col gap-4 border-2 border-ink bg-paper p-7">
          <p className="m-0 text-[13px] font-semibold tracking-[0.12em] uppercase">{dict.hero.eyebrow}</p>
          <h2 className="m-0 font-serif text-[clamp(2.2rem,3.8vw,3.6rem)] leading-[1.02] font-normal tracking-[-0.02em]">
            {dict.hero.titleStart}
            <i>{dict.hero.titleEm}</i>
          </h2>
          <p className="m-0 text-[17px] leading-[1.55]">{dict.hero.text}</p>
        </div>
      </Sky>
      <aside
        aria-label={dict.side.label}
        className="side flex flex-[0_0_auto] gap-12 border-l-2 border-ink bg-ochre px-5 py-8 text-[14px] leading-[1.6] text-ink [writing-mode:vertical-rl] max-[760px]:basis-full max-[760px]:flex-wrap max-[760px]:gap-y-2 max-[760px]:border-t-2 max-[760px]:border-l-0"
      >
        <a href={`mailto:${contact.email}`}>{contact.email}</a>
        <a href={contact.linkedin}>{contact.linkedinLabel}</a>
        <span>{dict.side.city}</span>
      </aside>
    </section>
  );
}
