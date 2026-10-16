import type { Lang } from "@/i18n";

export const contact = {
  email: "marcelloaltermundi@gmail.com",
  linkedin: "https://www.linkedin.com/in/marcello-santoro-dev/",
  linkedinLabel: "linkedin.com/in/marcello-santoro-dev",
  github: "https://github.com/marcelloSantoroDev",
  substack: "https://depoisdepensar.substack.com/",
};

export const repoUrl = "https://github.com/marcelloSantoroDev/portfolio-site";

export const cvPath: Record<Lang, string> = {
  pt: "/cv/marcello-miranda-cv-pt.pdf",
  en: "/cv/marcello-miranda-cv-en.pdf",
};

/** Caminho em /public; null mostra o Placeholder. */
export const photo: string | null = null; // "/images/me.jpg"
