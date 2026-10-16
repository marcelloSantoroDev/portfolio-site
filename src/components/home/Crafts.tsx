import type { Dictionary } from "@/i18n";

export default function Crafts({ dict }: { dict: Dictionary }) {
  return (
    <section id="oficios" aria-label={dict.crafts.title} className="flex flex-wrap border-b-2 border-ink">
      <div className="flex flex-[1_1_360px] flex-col justify-between gap-8 bg-ink px-8 py-12 text-paper">
        <h2 className="m-0 font-serif text-[2.2rem] leading-[1.1] font-normal">{dict.crafts.title}</h2>
        <p className="m-0 max-w-[22rem] text-[15px] leading-[1.55]">{dict.crafts.text}</p>
      </div>
      <ul className="m-0 flex flex-[2_1_520px] list-none flex-col gap-1 px-8 py-10 font-serif text-[clamp(2.2rem,4.6vw,4.2rem)] leading-[1.1]">
        {dict.crafts.items.map((item) => (
          <li key={item} className="craft">
            {item}
          </li>
        ))}
        <li className="craft">
          <i>{dict.crafts.lastItem}</i>
        </li>
      </ul>
    </section>
  );
}
