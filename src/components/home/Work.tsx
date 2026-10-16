import type { Dictionary, Lang } from "@/i18n";
import WorkSlots from "./WorkSlots";

export default function Work({ lang, dict }: { lang: Lang; dict: Dictionary }) {
  return (
    <section id="trabalhos" aria-label={dict.work.title} className="border-b-2 border-ink">
      <div className="flex flex-wrap items-baseline justify-between gap-4 px-8 pt-12 pb-8">
        <h2 className="m-0 font-serif text-[clamp(2.2rem,4vw,3.6rem)] font-normal tracking-[-0.02em]">
          {dict.work.title}
        </h2>
        <p className="m-0 max-w-[26rem] text-[15px] leading-normal">{dict.work.text}</p>
      </div>
      <WorkSlots lang={lang} dict={dict} />
    </section>
  );
}
