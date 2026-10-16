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
  siteInfo: {
    link: "About this site",
    metaTitle: "About this site — Marcello Miranda",
    metaDescription: "How this portfolio was built: layout, specification, Claude Code and the technical decisions.",
    navLabel: "Page navigation",
    back: "← Back to home",
    eyebrow: "How this site was made",
    title: "About this site",
    intro: [
      "This portfolio was built with Next.js, TypeScript and Tailwind CSS, with Claude Code leading the implementation. The workflow is the same one I use at work: review before running.",
      "The centerpiece is the sky on the home page: a crowd of avatars that floats and leans toward the cursor, and three featured figures that lead to the project pages. Click one, and its avatar grows into the avatar on the project page. The scene nods to a René Magritte painting, with its bowler-hatted men suspended in the sky; here, they became blank profile avatars.",
    ],
    repo: "Visit this site's repository ↗",
    stackLabel: "Stack",
    stack: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS 4", "Claude Code"],
    stackNote: "No animation, i18n or component libraries: it's all CSS and React. The whole site is statically generated.",
    processTitle: "How it was built",
    process: [
      {
        title: "Layout first",
        text: "The pages were designed first, in a design editor. Those files and a written specification became the source of truth: colors, measurements, how each interaction behaves, copy in PT and EN, and an acceptance checklist.",
      },
      {
        title: "A Claude Code skill",
        text: "Layout, specification and project rules were packaged into a skill. It sets what isn't negotiable (no made-up content, no client code, minimal dependencies) and the order of the work.",
      },
      {
        title: "Plan approved before code",
        text: "Claude Code read the references, checked the installed versions and the Next.js 16 docs, and presented a plan with the file structure, the approach for each interaction and the mismatches it found. Coding started only after approval.",
      },
      {
        title: "Build and verify",
        text: "After implementation came lint, type checking and the build, plus tests in an automated Chrome: hover, keyboard, touch, reduced motion, 390px width and the page transition. The acceptance checklist was checked item by item.",
      },
    ],
    decisionsTitle: "Technical decisions",
    decisionsText: "A few details that aren't visible at first glance.",
    decisions: [
      {
        title: "The cursor doesn't re-render React",
        text: "The sky writes the mouse position to CSS variables once per frame, with requestAnimationFrame. Each figure's offset is computed in CSS, with calc() and clamp().",
      },
      {
        title: "Two animations, no conflict",
        text: "Floating uses the translate property and the pull toward the cursor uses transform, so both run together.",
      },
      {
        title: "Page transition",
        text: "React's <ViewTransition> component links the clicked figure to the avatar on the project page. Without browser support, navigation works normally.",
      },
      {
        title: "Accessible",
        text: "The featured figures are focusable links, with a label and visible focus. On touch screens they're always blue with the sign showing, and with reduced motion nothing moves.",
      },
    ],
  },
};

export default en;
