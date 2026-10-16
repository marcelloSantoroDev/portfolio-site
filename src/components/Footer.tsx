import { contact } from "@/content/site";
import type { Dictionary } from "@/i18n";

const year = new Date().getFullYear();

const social = [
  { href: contact.linkedin, label: "LinkedIn" },
  { href: contact.github, label: "GitHub" },
  { href: contact.substack, label: "Substack" },
];

/** Rodapé da página inicial. */
export function Footer({ dict }: { dict: Dictionary }) {
  return (
    <footer id="contato" className="flex flex-col gap-12 bg-ink px-8 pt-16 pb-8 text-paper">
      <p className="m-0 font-serif text-[clamp(2.8rem,7vw,6.5rem)] leading-none tracking-[-0.02em]">
        {dict.footer.title}
      </p>
      <div className="flex flex-wrap gap-x-12 gap-y-8 text-[16px]">
        <a href={`mailto:${contact.email}`} className="text-ochre-light">
          {contact.email}
        </a>
        {social.map((s) => (
          <a key={s.label} href={s.href} className="text-paper">
            {s.label}
          </a>
        ))}
      </div>
      <p className="m-0 border-t border-paper pt-5 text-[13px]">© {year} Marcello Miranda</p>
    </footer>
  );
}

/** Rodapé compacto da página de projeto. */
export function CompactFooter() {
  return (
    <footer className="flex flex-wrap justify-between gap-x-12 gap-y-6 bg-ink p-8 text-[15px] text-paper">
      <a href={`mailto:${contact.email}`} className="text-ochre-light">
        {contact.email}
      </a>
      <div className="flex flex-wrap gap-x-10 gap-y-6">
        {social.map((s) => (
          <a key={s.label} href={s.href} className="text-paper">
            {s.label}
          </a>
        ))}
      </div>
      <span>© {year} Marcello Miranda</span>
    </footer>
  );
}
