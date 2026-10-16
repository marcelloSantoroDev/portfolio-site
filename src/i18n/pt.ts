const pt = {
  htmlLang: "pt-BR",
  meta: {
    title: "Marcello Miranda — Desenvolvedor full stack",
    description:
      "Portfólio de Marcello Miranda, desenvolvedor full stack em São Paulo. Next.js, TypeScript e Claude Code.",
  },
  nav: {
    label: "Principal",
    work: "Trabalhos",
    crafts: "O que eu faço",
    about: "Sobre",
    contact: "Contato",
  },
  cv: "Baixar currículo",
  hero: {
    label: "Apresentação",
    eyebrow: "Desenvolvedor full stack · São Paulo",
    titleStart: "Um desenvolvedor, ",
    titleEm: "muitos ofícios.",
    text: "Construo sistemas completos com Next.js, TypeScript e Claude Code, da conversa com o cliente ao deploy. Hoje, na Bigmídia, desenvolvo plataformas web para confederações esportivas.",
  },
  side: {
    label: "Contato rápido",
    city: "São Paulo, Brasil",
  },
  work: {
    title: "Trabalhos selecionados",
    text: "Código de cliente não sai daqui. O que sai é o problema, a solução e o resultado.",
    link: "Ver trabalho {n} →",
    imagePlaceholder: "[IMAGEM DO PROJETO]",
  },
  crafts: {
    title: "O que eu faço",
    text: "Do primeiro rascunho da interface ao banco de dados, passando pela conversa com quem vai usar o sistema.",
    items: ["Interfaces", "APIs e dados", "Desenvolvimento com IA", "Requisitos e clientes"],
    lastItem: "Palavras e música",
  },
  about: {
    label: "Sobre",
    text: "Antes do código, fui compositor, produtor musical, tradutor e redator. Hoje escuto o cliente, transformo a necessidade em especificação e conduzo a implementação com Claude Code.",
    substack: "Também escrevo no Substack →",
    photoPlaceholder: "[SUA FOTO]",
    photoAlt: "Foto de Marcello Miranda",
  },
  footer: {
    title: "Vamos conversar.",
  },
  project: {
    navLabel: "Navegação do projeto",
    pagerLabel: "Outros trabalhos",
    back: "← Todos os trabalhos",
    count: "Trabalho {n} de {total}",
    visit: "Visitar o site ↗",
    prev: "← Anterior · {n}",
    next: "Próximo · {n} →",
    ariaFigure: "Ver projeto: {title}",
    shotPlaceholder: "[PRINT DO PROJETO]",
    urlPlaceholder: "[endereço-do-site.com.br]",
  },
};

type Widen<T> = T extends string
  ? string
  : T extends readonly (infer U)[]
    ? Widen<U>[]
    : { [K in keyof T]: Widen<T[K]> };

export type Dictionary = Widen<typeof pt>;

export default pt satisfies Dictionary;
