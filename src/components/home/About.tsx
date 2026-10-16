import Image from "next/image";
import Placeholder from "@/components/Placeholder";
import { contact, photo } from "@/content/site";
import type { Dictionary } from "@/i18n";

export default function About({ dict }: { dict: Dictionary }) {
  return (
    <section id="sobre" aria-label={dict.about.label} className="flex flex-wrap border-b-2 border-ink">
      <div className="flex flex-[2_1_520px] flex-col gap-6 bg-sky px-8 py-14">
        <h2 className="m-0 text-[13px] font-bold tracking-[0.12em] uppercase">{dict.about.label}</h2>
        <p className="m-0 max-w-[44rem] font-serif text-[clamp(1.6rem,2.6vw,2.3rem)] leading-[1.25]">
          {dict.about.text}
        </p>
        <a href={contact.substack} className="text-[15px] font-semibold">
          {dict.about.substack}
        </a>
      </div>
      <div className="relative flex min-h-[26rem] flex-[1_1_320px] items-center justify-center border-l-2 border-ink bg-olive">
        <div className="relative aspect-[3/4] w-[62%] border-2 border-ink bg-paper">
          {photo ? (
            <Image src={photo} alt={dict.about.photoAlt} fill sizes="(max-width: 760px) 62vw, 20vw" className="object-cover" />
          ) : (
            <Placeholder label={dict.about.photoPlaceholder} dashed={false} className="h-full w-full" />
          )}
        </div>
      </div>
    </section>
  );
}
