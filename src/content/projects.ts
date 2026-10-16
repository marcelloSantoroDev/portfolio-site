// Único lugar onde os projetos são editados.
// A ordem do array define o número do trabalho (01, 02, 03…).
// Os projetos com `featured: true` (até 5) ganham boneco de destaque no céu e slot na página inicial;
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
    url: "https://ligapaulistafutsal.com.br",
    urlLabel: "ligapaulistafutsal.com.br",
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
    slug: "cbfa-futebol-americano",
    featured: true,
    sign: { pt: "Futebol americano", en: "American football" },
    title: {
      pt: "Plataforma da Confederação Brasileira de Futebol Americano",
      en: "Brazilian American Football Confederation platform",
    },
    summary: {
      pt: "Módulo de campeonatos da confederação: classificação por regional, tabela de jogos, página da partida com súmula e vídeo, e perfil de atleta.",
      en: "The confederation's championship module: standings by region, fixtures, a match page with scoresheet and video, and athlete profiles.",
    },
    description: {
      pt: [
        "Site da Confederação Brasileira de Futebol Americano, construído sobre a plataforma de confederações da Bigmídia.",
        "Fui o autor principal do módulo de campeonatos: listagem de partidas, classificação e a página da partida, com súmula, vídeo do YouTube, elenco e árbitros oficiais, além do perfil do atleta com a tabela de resultados. As estatísticas de cada partida são calculadas em hooks tipados, a partir dos scouts dos atletas.",
      ],
      en: [
        "The website of the Brazilian American Football Confederation, built on Bigmídia's confederation platform.",
        "I was the main author of the championship module: the match listing, the standings and the match page, with scoresheet, YouTube video, roster and officials, plus the athlete profile with its results table. Each match's statistics are computed in typed hooks from the athletes' scouts.",
      ],
    },
    tags: ["Next.js", "React", "TypeScript", "TanStack Query"],
    images: [
      {
        src: "/images/projects/cbfa-futebol-americano-1.webp",
        alt: {
          pt: "Classificação por regional e jogos da Superliga de futebol americano 2026",
          en: "Standings by region and fixtures of the 2026 American football Superliga",
        },
        caption: {
          pt: "Classificação geral por regional e tabela de jogos da Superliga FA 2026.",
          en: "Overall standings by region and fixtures of the 2026 Superliga FA.",
        },
      },
      {
        src: "/images/projects/cbfa-futebol-americano-2.webp",
        alt: {
          pt: "Página de partida com placar, elenco e árbitros oficiais",
          en: "Match page with score, roster and officials",
        },
        caption: {
          pt: "Página da partida: placar, elenco com fotos, árbitros oficiais e total de atletas.",
          en: "Match page: score, roster with photos, officials and athlete count.",
        },
      },
    ],
    url: "https://cbfabrasil.com.br",
    urlLabel: "cbfabrasil.com.br",
  },
  {
    slug: "cbsurf-surf",
    featured: true,
    sign: { pt: "Surf", en: "Surf" },
    title: {
      pt: "Plataforma da Confederação Brasileira de Surf",
      en: "Brazilian Surfing Confederation platform",
    },
    summary: {
      pt: "Projeto que iniciei do zero: primeira versão das páginas de eventos, etapas e atletas, inscritos por etapa e a ouvidoria com envio de e-mail.",
      en: "A project I started from scratch: the first version of the event, stage and athlete pages, per-stage entries and an ombudsman form that sends email.",
    },
    description: {
      pt: [
        "Site da Confederação Brasileira de Surf. Criei o projeto e fiz a primeira versão da maior parte das páginas: atletas, eventos, etapas, ranking, clubes, federações e portal da transparência.",
        "Depois vieram o calendário de etapas, as páginas do STJD com documentos em PDF, a reestruturação das rotas de API, a aba de inscritos de cada etapa, com filtros, e o formulário da ouvidoria, que envia e-mail por uma rota de API com template em React Email.",
      ],
      en: [
        "The website of the Brazilian Surfing Confederation. I created the project and built the first version of most pages: athletes, events, stages, ranking, clubs, federations and the transparency portal.",
        "Later came the stage calendar, the sports court (STJD) pages with PDF documents, a restructuring of the API routes, the entries tab for each stage, with filters, and the ombudsman form, which sends email through an API route with a React Email template.",
      ],
    },
    tags: ["Next.js", "TypeScript", "TanStack Query", "React Email"],
    images: [
      {
        src: "/images/projects/cbsurf-surf-1.webp",
        alt: {
          pt: "Aba de inscritos de uma etapa do Surf Brasil Pro",
          en: "Entries tab of a Surf Brasil Pro stage",
        },
        caption: {
          pt: "Aba de inscritos de uma etapa do Surf Brasil Pro, com filtro masculino e feminino.",
          en: "Entries tab of a Surf Brasil Pro stage, with a men's and women's filter.",
        },
      },
    ],
    url: "https://www.surfbrasil.org.br",
    urlLabel: "surfbrasil.org.br",
  },
  {
    slug: "cbescalada-escalada",
    featured: true,
    sign: { pt: "Escalada", en: "Climbing" },
    title: {
      pt: "Plataforma da Confederação Brasileira de Escalada Esportiva",
      en: "Brazilian Sport Climbing Confederation platform",
    },
    summary: {
      pt: "Projeto que conduzo desde o início: competições, resultados por fase e um mapa de onde praticar gerado por script de geocodificação.",
      en: "A project I've led from the start: competitions, results by round and a where-to-climb map generated by a geocoding script.",
    },
    description: {
      pt: [
        "Site da Confederação Brasileira de Escalada Esportiva, que criei e conduzo desde o primeiro commit, em dezembro de 2024.",
        "Construí as páginas de competição, a aba de resultados por fase (qualificatória, semifinal e final), os resultados no perfil de cada atleta e o mapa \"onde praticar\", alimentado por um script que geocodifica os locais cadastrados e gera o arquivo do mapa.",
      ],
      en: [
        "The website of the Brazilian Sport Climbing Confederation, which I created and have led since the first commit, in December 2024.",
        "I built the competition pages, the results tab by round (qualification, semifinal and final), the results on each athlete's profile and the \"where to climb\" map, fed by a script that geocodes the registered venues and generates the map file.",
      ],
    },
    tags: ["Next.js", "TypeScript", "Leaflet", "Node.js"],
    images: [
      {
        src: "/images/projects/cbescalada-escalada-1.webp",
        alt: {
          pt: "Mapa do Brasil com os locais para praticar escalada",
          en: "Map of Brazil with the places to climb",
        },
        caption: {
          pt: "Mapa \"onde praticar\", com 57 locais geocodificados por script.",
          en: "The \"where to climb\" map, with 57 venues geocoded by a script.",
        },
      },
      {
        src: "/images/projects/cbescalada-escalada-2.webp",
        alt: {
          pt: "Resultados do Campeonato Brasileiro de Boulder por fase",
          en: "Brazilian Bouldering Championship results by round",
        },
        caption: {
          pt: "Resultados do Campeonato Brasileiro de Boulder: qualificatória, semifinal e final.",
          en: "Brazilian Bouldering Championship results: qualification, semifinal and final.",
        },
      },
    ],
    url: "https://cbescalada.org.br",
    urlLabel: "cbescalada.org.br",
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

/** Até 5 projetos com boneco de destaque e slot na página inicial. */
export const featuredProjects = projects.filter((p) => p.featured).slice(0, 5);

/** Projetos da lista "Outros trabalhos". */
export const otherProjects = projects.filter((p) => !featuredProjects.includes(p));
