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
    otherTitle: "Outros trabalhos",
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
    galleryLabel: "Prints do projeto",
    galleryRole: "carrossel",
    gallerySlide: "print",
    galleryPrev: "Print anterior",
    galleryNext: "Próximo print",
    galleryCount: "{n} de {total}",
  },
  siteInfo: {
    link: "Sobre este site",
    metaTitle: "Sobre este site — Marcello Miranda",
    metaDescription: "Como este portfólio foi desenvolvido: layout, especificação, Claude Code e as decisões técnicas.",
    navLabel: "Navegação da página",
    back: "← Voltar ao início",
    eyebrow: "Como este site foi feito",
    title: "Sobre este site",
    intro: [
      "Este portfólio foi construído com Next.js, TypeScript e Tailwind CSS, com o Claude Code conduzindo a implementação. O fluxo é o mesmo que uso no trabalho: revisar antes de executar.",
      "A peça central é o céu da página inicial: uma multidão de avatares que flutua e se inclina na direção do cursor, e três bonecos de destaque que levam às páginas dos projetos. Ao clicar num deles, o avatar cresce e vira o avatar da página do projeto. A cena é uma referência a uma pintura de René Magritte, com seus homens de chapéu-coco suspensos no céu; aqui, eles viraram avatares de perfil vazio.",
    ],
    repo: "Acesse o repositório deste site ↗",
    stackLabel: "Stack",
    stack: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS 4", "Claude Code"],
    stackNote: "Nenhuma biblioteca de animação, i18n ou componentes: tudo é CSS e React. O site inteiro é gerado estaticamente.",
    processTitle: "Como foi desenvolvido",
    process: [
      {
        title: "Layout primeiro",
        text: "As páginas foram desenhadas antes, num editor de design. Os arquivos resultantes e uma especificação escrita viraram a fonte da verdade: cores, medidas, comportamento de cada interação, textos em PT e EN e um checklist de aceite.",
      },
      {
        title: "Uma skill do Claude Code",
        text: "Layout, especificação e regras do projeto foram empacotados numa skill. Ela define o que não se negocia (nada de inventar conteúdo, nada de código de cliente, dependências mínimas) e a ordem do trabalho.",
      },
      {
        title: "Plano aprovado antes do código",
        text: "O Claude Code leu as referências, conferiu as versões instaladas e a documentação do Next.js 16 e apresentou um plano com a estrutura de arquivos, a estratégia de cada interação e as divergências encontradas. O código só começou depois da aprovação.",
      },
      {
        title: "Construção e verificação",
        text: "Depois de implementar, vieram lint, checagem de tipos e build, e testes num Chrome automatizado: hover, teclado, toque, movimento reduzido, 390px de largura e a transição entre páginas. O checklist de aceite foi conferido item por item.",
      },
    ],
    decisionsTitle: "Decisões técnicas",
    decisionsText: "Alguns detalhes que não aparecem à primeira vista.",
    decisions: [
      {
        title: "O cursor não renderiza o React",
        text: "O céu grava a posição do mouse em variáveis CSS uma vez por quadro, com requestAnimationFrame. O deslocamento de cada boneco é calculado em CSS, com calc() e clamp().",
      },
      {
        title: "Duas animações sem conflito",
        text: "A flutuação usa a propriedade translate e a atração ao cursor usa transform, então as duas rodam juntas.",
      },
      {
        title: "Transição entre páginas",
        text: "O componente <ViewTransition> do React liga o boneco clicado ao avatar da página do projeto. Sem suporte do navegador, a navegação acontece normalmente.",
      },
      {
        title: "Acessível",
        text: "Os bonecos de destaque são links focáveis, com rótulo e foco visível. Em telas de toque, eles ficam sempre azuis com a placa visível, e com movimento reduzido nada se move.",
      },
    ],
  },
};

type Widen<T> = T extends string
  ? string
  : T extends readonly (infer U)[]
    ? Widen<U>[]
    : { [K in keyof T]: Widen<T[K]> };

export type Dictionary = Widen<typeof pt>;

export default pt satisfies Dictionary;
