import { cvPath } from "@/content/site";
import type { Dictionary, Lang } from "@/i18n";

export default function CvButton({ lang, dict }: { lang: Lang; dict: Dictionary }) {
  return (
    <a
      href={cvPath[lang]}
      download
      className="flex min-h-14 items-center bg-ink px-8 text-[15px] font-semibold text-paper no-underline hover:text-ochre-light"
    >
      {dict.cv}
    </a>
  );
}
