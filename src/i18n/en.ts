import type { Dictionary } from "./pt";

const en: Dictionary = {
  htmlLang: "en",
  meta: {
    title: "Marcello Miranda — Full stack developer",
    description:
      "Portfolio of Marcello Miranda, full stack developer in São Paulo. Next.js, TypeScript and Claude Code.",
  },
  nav: {
    label: "Main",
    work: "Work",
    crafts: "What I do",
    about: "About",
    contact: "Contact",
  },
  cv: "Download résumé",
  hero: {
    label: "Introduction",
    eyebrow: "Full stack developer · São Paulo",
    titleStart: "One developer, ",
    titleEm: "many crafts.",
    text: "I build complete systems with Next.js, TypeScript and Claude Code, from the first client conversation to deploy. Today, at Bigmídia, I build web platforms for sports confederations.",
  },
  side: {
    label: "Quick contact",
    city: "São Paulo, Brazil",
  },
  work: {
    title: "Selected work",
    text: "Client code stays private. What you'll find here is the problem, the solution and the result.",
    link: "View work {n} →",
    imagePlaceholder: "[PROJECT IMAGE]",
  },
  crafts: {
    title: "What I do",
    text: "From the first interface sketch to the database, including the conversation with the people who will use the system.",
    items: ["Interfaces", "APIs and data", "AI-assisted development", "Requirements and clients"],
    lastItem: "Words and music",
  },
  about: {
    label: "About",
    text: "Before code, I was a songwriter, music producer, translator and copywriter. Today I listen to clients, turn their needs into specifications and lead the implementation with Claude Code.",
    substack: "I also write on Substack →",
    photoPlaceholder: "[YOUR PHOTO]",
    photoAlt: "Photo of Marcello Miranda",
  },
  footer: {
    title: "Let's talk.",
  },
  project: {
    navLabel: "Project navigation",
    pagerLabel: "Other work",
    back: "← All work",
    count: "Work {n} of {total}",
    visit: "Visit the site ↗",
    prev: "← Previous · {n}",
    next: "Next · {n} →",
    ariaFigure: "View project: {title}",
    shotPlaceholder: "[PROJECT SCREENSHOT]",
    urlPlaceholder: "[website-address.com]",
  },
};

export default en;
