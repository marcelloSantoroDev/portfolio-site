// Único lugar onde os projetos são editados.
// A ordem do array define o número do trabalho (01, 02, 03…).
// Os projetos com `featured: true` (até 3) ganham boneco de destaque no céu e slot na página inicial;
// os demais aparecem na lista "Outros trabalhos". Coloque os destacados primeiro.

export type Localized = { pt: string; en: string };

export type ProjectImage = {
  /** Caminho em /public, ex.: "/images/projects/gerador-de-sites-1.webp" */
  src: string;
  alt: Localized;
  /** Legenda abaixo do print; null esconde */
  caption: Localized | null;
};

export type Project = {
  slug: string;
  /** Boneco de destaque e slot na página inicial */
  featured: boolean;
  /** Texto curto da placa do boneco */
  sign: Localized;
  title: Localized;
  /** Texto do slot na página inicial */
  summary: Localized;
  /** Parágrafos da página do projeto */
  description: { pt: string[]; en: string[] };
  tags: string[];
  /** Prints 16:10 (sugestão: 1600×1000) em /public. O primeiro aparece no slot; vários viram carrossel. Vazio mostra o Placeholder. */
  images: ProjectImage[];
  /** Link "Visitar o site"; null esconde o botão */
  url: string | null;
  /** Endereço exibido na barra do navegador */
  urlLabel: string | null;
};

export const projects: Project[] = [
  {
    slug: "liga-paulista-de-futsal",
    featured: true,
    sign: { pt: "Futsal", en: "Futsal" },
    title: { pt: "Portal da Liga Paulista de Futsal", en: "Liga Paulista de Futsal portal" },
    summary: {
      pt: "Portal da liga com partidas, súmula online, scouts, classificação e artilharia, construído sobre a API de gestão esportiva.",
      en: "The league's portal, with matches, online scoresheets, scouts, standings and top scorers, built on the sports management API.",
    },
    description: {
      pt: [
        "Portal da Liga Paulista de Futsal, do qual fui o autor principal. Construí as páginas de partida com súmula online e scouts, a tabela de classificação, o artilheiro da rodada e o histórico de carreira de cada atleta, agrupado por campeonato.",
        "Os dados vêm da API de gestão esportiva da Bigmídia, consumida por uma camada de rotas do Next.js que adapta e cacheia as respostas.",
      ],
      en: [
        "The portal of the Liga Paulista de Futsal, a São Paulo futsal league, where I was the main author. I built the match pages with online scoresheets and scouts, the standings table, the top scorer of the round, and each athlete's career history grouped by championship.",
        "The data comes from Bigmídia's sports management API, consumed through a layer of Next.js routes that shapes and caches the responses.",
      ],
    },
    tags: ["Next.js", "TypeScript", "TanStack Query", "Tailwind"],
    images: [
      {
        src: "/images/projects/liga-paulista-de-futsal-1.webp",
        alt: {
          pt: "Tabela de classificação da Liga Paulista de Futsal 2026",
          en: "Liga Paulista de Futsal 2026 standings table",
        },
        caption: {
          pt: "Classificação da fase de liga, com o histórico dos últimos jogos de cada equipe.",
          en: "League-phase standings, with each team's recent results.",
        },
      },
      {
        src: "/images/projects/liga-paulista-de-futsal-2.webp",
        alt: {
          pt: "Página de atleta com números da carreira e histórico por temporada",
          en: "Athlete page with career numbers and history by season",
        },
        caption: {
          pt: "Perfil do atleta: números da carreira e histórico agrupado por temporada e campeonato.",
          en: "Athlete profile: career numbers and history grouped by season and championship.",
        },
      },
    ],
    url: null,
    urlLabel: null,
  },
  {
    slug: "cbat-atletismo",
    featured: true,
    sign: { pt: "Atletismo", en: "Athletics" },
    title: {
      pt: "Plataforma da Confederação Brasileira de Atletismo",
      en: "Brazilian Athletics Confederation platform",
    },
    summary: {
      pt: "Plataforma nacional e multi-federação, em que construí o ranking com filtro de vento e as tabelas de resultados de prova.",
      en: "A national, multi-federation platform, where I built the ranking with wind filters and the event results tables.",
    },
    description: {
      pt: [
        "A maior plataforma da família de sites de confederações da Bigmídia: um só código atende a confederação e várias federações estaduais, cada uma em seu domínio.",
        "Minha parte foram as telas de dados mais pesadas: o ranking nacional, criado do zero, com filtros de vento e categoria e rolagem infinita, e as tabelas de resultados de prova, com revezamentos, sumário ordenado por marca e quadro de medalhas. Também fiz as páginas de recordes e de corridas de rua.",
      ],
      en: [
        "The largest platform in Bigmídia's family of confederation sites: a single codebase serves the confederation and several state federations, each on its own domain.",
        "My part was the most data-heavy screens: the national ranking, built from scratch, with wind and category filters and infinite scroll, and the event results tables, with relays, a summary sorted by mark and a medal table. I also built the records and road races pages.",
      ],
    },
    tags: ["Next.js", "React", "TypeScript", "TanStack Query"],
    images: [
      {
        src: "/images/projects/cbat-atletismo-1.webp",
        alt: {
          pt: "Ranking brasileiro dos 100 metros, com filtros, pódio e tabela",
          en: "Brazilian 100 metres ranking, with filters, podium and table",
        },
        caption: {
          pt: "Ranking nacional dos 100 metros, com filtros de categoria, prova e vento.",
          en: "National 100 metres ranking, with category, event and wind filters.",
        },
      },
      {
        src: "/images/projects/cbat-atletismo-2.webp",
        alt: {
          pt: "Resultados da final dos 60 metros, com pódio e tabela de marcas",
          en: "60 metres final results, with podium and marks table",
        },
        caption: {
          pt: "Resultados de uma final: pódio, fases da prova e tabela com marca e vento.",
          en: "Results of a final: podium, event rounds and a table with marks and wind.",
        },
      },
    ],
    url: "https://cbat.org.br",
    urlLabel: "cbat.org.br",
  },
  {
    slug: "cbr-remo",
    featured: true,
    sign: { pt: "Remo", en: "Rowing" },
    title: {
      pt: "Plataforma da Confederação Brasileira de Remo",
      en: "Brazilian Rowing Confederation platform",
    },
    summary: {
      pt: "Projeto conduzido de ponta a ponta: resultados, inscrições de barcos, hotsites de federação e um mapa atualizado por pipeline automático.",
      en: "A project I led end to end: results, boat entries, federation hotsites and a map kept up to date by an automated pipeline.",
    },
    description: {
      pt: [
        "Conduzi o projeto do início à publicação: resultados de eventos, inscrições de barcos, perfis de atletas, seleção, hotsites de federação e o mapa \"onde praticar\".",
        "O mapa é alimentado por um pipeline: um script geocodifica os locais cadastrados na API, um pipeline no Bitbucket grava o resultado no repositório e a Vercel publica a nova versão sozinha.",
      ],
      en: [
        "I led the project from the first commit to launch: event results, boat entries, athlete profiles, the national team, federation hotsites and the \"where to row\" map.",
        "The map is fed by a pipeline: a script geocodes the venues registered in the API, a Bitbucket pipeline commits the result to the repository, and Vercel publishes the new version on its own.",
      ],
    },
    tags: ["Next.js", "TypeScript", "Leaflet", "Bitbucket Pipelines"],
    images: [
      {
        src: "/images/projects/cbr-remo-1.webp",
        alt: {
          pt: "Mapa do Brasil com os locais para praticar remo",
          en: "Map of Brazil with the places to row",
        },
        caption: {
          pt: "Mapa \"onde praticar\", com os locais geocodificados a partir da API pelo pipeline.",
          en: "The \"where to row\" map, with venues geocoded from the API by the pipeline.",
        },
      },
      {
        src: "/images/projects/cbr-remo-2.webp",
        alt: {
          pt: "Página da seleção brasileira de remo com os cards dos atletas",
          en: "Brazilian national rowing team page with athlete cards",
        },
        caption: {
          pt: "Seleção brasileira, com seletor de temporada e categoria.",
          en: "The national team, with a season and category selector.",
        },
      },
    ],
    url: null,
    urlLabel: null,
  },
  {
    slug: "gerador-de-sites",
    featured: false,
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
    images: [],
    url: null,
    urlLabel: null,
  },
  {
    slug: "gestao-de-competicoes",
    featured: false,
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
    images: [],
    url: null,
    urlLabel: null,
  },
  {
    slug: "projeto-pessoal",
    featured: false,
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
    images: [],
    url: null,
    urlLabel: null,
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

/** Número do trabalho (1, 2, 3…), pela posição na lista. */
export function projectNumber(project: Project): number {
  return projects.indexOf(project) + 1;
}

/** Até 3 projetos com boneco de destaque e slot na página inicial. */
export const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);

/** Projetos da lista "Outros trabalhos". */
export const otherProjects = projects.filter((p) => !featuredProjects.includes(p));
