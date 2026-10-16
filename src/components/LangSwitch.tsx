"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { langs, type Lang } from "@/i18n";

/** PT/EN: troca o primeiro segmento da rota e mantém a página atual. */
export default function LangSwitch({ lang }: { lang: Lang }) {
  const pathname = usePathname();
  const rest = pathname.split("/").slice(2).join("/");

  return (
    <div className="flex items-stretch border-l-2 border-ink">
      {langs.map((l) => {
        const active = l === lang;
        return (
          <Link
            key={l}
            href={`/${l}${rest ? `/${rest}` : ""}`}
            hrefLang={l}
            aria-current={active ? "true" : undefined}
            className={`flex min-h-14 min-w-14 items-center justify-center border-r-2 border-ink text-[14px] font-bold no-underline ${
              active ? "bg-ink text-paper hover:text-paper" : "bg-paper text-ink"
            }`}
          >
            {l.toUpperCase()}
          </Link>
        );
      })}
    </div>
  );
}
