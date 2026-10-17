import Link from "next/link";
import type { Dictionary, Lang } from "@/i18n";
import LangSwitch from "./LangSwitch";
import CvButton from "./CvButton";

type HeaderProps = { lang: Lang; dict: Dictionary };

/** Cabeçalho da página inicial: nome gigante e barra de navegação. */
export function Header({ lang, dict }: HeaderProps) {
  const links = [
    { href: "#trabalhos", label: dict.nav.work },
    { href: "#oficios", label: dict.nav.crafts },
    { href: "#sobre", label: dict.nav.about },
    { href: "#contato", label: dict.nav.contact },
  ];

  return (
    <header className="border-b-2 border-ink">
      {/* O nome ocupa ~10,2× o tamanho da fonte: dividir a largura disponível (100cqw) por 10,3 faz ele caber sempre, até o teto de 9,4rem */}
      <div className="@container overflow-hidden px-8 pt-6 pb-2">
        <h1 className="font-wide m-0 text-[min(9.4rem,calc(100cqw/10.3))] leading-[0.92] tracking-[-0.03em] whitespace-nowrap">
          Marcello Miranda
        </h1>
      </div>
      <nav aria-label={dict.nav.label} className="mt-4 flex flex-wrap items-stretch border-t-2 border-ink">
        <div className="flex flex-[1_1_420px] flex-wrap items-center gap-8 px-8 py-4">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="navlink text-[15px]">
              {l.label}
            </a>
          ))}
          <Link href={`/${lang}/sobre-este-site`} className="navlink text-[15px]">
            {dict.siteInfo.link}
          </Link>
        </div>
        <LangSwitch lang={lang} />
        <CvButton lang={lang} dict={dict} />
      </nav>
    </header>
  );
}

/** Cabeçalho compacto da página de projeto. */
export function CompactHeader({ lang, dict }: HeaderProps) {
  return (
    <header className="flex flex-wrap items-stretch border-b-2 border-ink">
      <Link
        href={`/${lang}`}
        className="font-wide flex flex-[1_1_320px] items-center px-8 py-4 text-[1.9rem] tracking-[-0.02em] no-underline"
      >
        Marcello Miranda
      </Link>
      <LangSwitch lang={lang} />
      <CvButton lang={lang} dict={dict} />
    </header>
  );
}
