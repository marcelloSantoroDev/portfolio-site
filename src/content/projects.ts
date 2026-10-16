// Único lugar onde os projetos são editados.
// A ordem do array define o número do trabalho (01, 02, 03…), o boneco de destaque e o slot.

export type Localized = { pt: string; en: string };

export type Project = {
  slug: string;
  /** Texto curto da placa do boneco */
  sign: Localized;
  title: Localized;
  /** Texto do slot na página inicial */
  summary: Localized;
  /** Parágrafos da página do projeto */
  description: { pt: string[]; en: string[] };
  tags: string[];
  /** Caminho em /public, ex.: "/images/projects/gerador-de-sites.webp". null mostra o Placeholder. */
  image: string | null;
  imageAlt: Localized;
  caption: Localized | null;
  /** Link "Visitar o site"; null esconde o botão */
  url: string | null;
  /** Endereço exibido na barra do navegador */
  urlLabel: string | null;
};

export const projects: Project[] = [
  {
    slug: "gerador-de-sites",
    sign: { pt: "Gerador de sites", en: "Site generator" },
    title: { pt: "Gerador de sites com Claude Code", en: "Site generator with Claude Code" },
    summary: {
      pt: "Skill que monta um site novo a partir de 16 seções padronizadas, com revisão antes de cada execução.",
      en: "A skill that scaffolds a new site from 16 standardized sections, with a review step before every run.",
    },
    description: {
      pt: [
        "Skill de Claude Code que monta a estrutura de um site novo a partir de 16 seções padronizadas. Um fluxo de perguntas define o conteúdo, e nada é executado antes de uma revisão.",
      ],
      en: [
        "A Claude Code skill that scaffolds a new website from 16 standardized sections. A question flow defines the content, and nothing runs before a review.",
      ],
    },
    tags: ["Claude Code", "Next.js", "TypeScript", "Tailwind"],
    image: null,
    imageAlt: { pt: "Print do gerador de sites", en: "Screenshot of the site generator" },
    caption: null,
    url: null,
    urlLabel: null,
  },
  {
    slug: "gestao-de-competicoes",
    sign: { pt: "Sistema de competições", en: "Competition system" },
    title: { pt: "Sistema de gestão de competições", en: "Competition management system" },
    summary: {
      pt: "Plataforma web usada em competição oficial, com suporte presencial aos usuários no primeiro teste real.",
      en: "A web platform used at an official competition, with on-site user support during its first real test.",
    },
    description: {
      pt: [
        "Plataforma web usada em competição oficial, com suporte presencial aos usuários no primeiro teste real.",
      ],
      en: [
        "A web platform used at an official competition, with on-site user support during its first real test.",
      ],
    },
    tags: ["Next.js", "TypeScript", "REST"],
    image: null,
    imageAlt: {
      pt: "Print do sistema de gestão de competições",
      en: "Screenshot of the competition management system",
    },
    caption: null,
    url: null,
    urlLabel: null,
  },
  {
    slug: "projeto-pessoal",
    sign: { pt: "Projeto pessoal", en: "Personal project" },
    title: { pt: "[Projeto pessoal]", en: "[Personal project]" },
    summary: {
      pt: "[Descrição curta: o problema, o que você construiu e o resultado.]",
      en: "[Short description: the problem, what you built and the result.]",
    },
    description: {
      pt: ["[Descrição curta: o problema, o que você construiu e o resultado.]"],
      en: ["[Short description: the problem, what you built and the result.]"],
    },
    tags: [],
    image: null,
    imageAlt: { pt: "Print do projeto pessoal", en: "Screenshot of the personal project" },
    caption: null,
    url: null,
    urlLabel: null,
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
