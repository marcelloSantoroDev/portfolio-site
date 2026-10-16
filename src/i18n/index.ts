import pt, { type Dictionary } from "./pt";
import en from "./en";

export const langs = ["pt", "en"] as const;
export type Lang = (typeof langs)[number];
export type { Dictionary };

const dictionaries: Record<Lang, Dictionary> = { pt, en };

export function isLang(value: string): value is Lang {
  return (langs as readonly string[]).includes(value);
}

export function getDictionary(lang: Lang): Dictionary {
  return dictionaries[lang];
}

/** Troca {chave} pelos valores informados. */
export function fill(template: string, values: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (match, key: string) =>
    key in values ? String(values[key]) : match,
  );
}

/** 1 → "01" */
export function pad(n: number): string {
  return String(n).padStart(2, "0");
}
