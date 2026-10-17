# Marcello Miranda — portfólio

Site pessoal de Marcello Miranda, desenvolvedor full stack em São Paulo. Apresenta trabalhos selecionados, o que eu faço e como falar comigo, em português e inglês.

A peça central é um céu com uma multidão de avatares que flutua e se inclina na direção do cursor. Três bonecos de destaque seguem o cursor com mais força e levam às páginas dos projetos. Ao clicar num deles, o avatar cresce e vira o avatar da página do projeto, numa transição contínua entre as páginas.

> Código de cliente não sai daqui. Os projetos são apresentados por print, título, descrição e link.

## Stack

- [Next.js 16](https://nextjs.org) (App Router), React 19 e TypeScript em modo estrito
- Tailwind CSS 4, com os tokens de design declarados em `@theme`
- Fontes Archivo e Fraunces via `next/font`
- Nenhuma biblioteca de animação, i18n ou componentes: tudo é CSS e React

O site inteiro é gerado estaticamente (`generateStaticParams`), nas rotas `/pt` e `/en`.

## Como foi desenvolvido

O projeto foi construído com [Claude Code](https://claude.com/claude-code), seguindo um fluxo de **revisar antes de executar**:

1. **Layout primeiro.** As duas páginas (início e projeto) foram desenhadas antes, num editor de design. Os arquivos resultantes e uma especificação escrita viraram a fonte da verdade: tokens de cor, medidas, comportamento de cada interação, textos em PT e EN e um checklist de aceite.
2. **Uma skill do Claude Code.** Layout, especificação e regras do projeto foram empacotados numa skill, que está em [`.claude/skills/portfolio-site`](.claude/skills/portfolio-site). Ela define o que não se negocia (nada de inventar conteúdo, nada de código de cliente, dependências mínimas) e a ordem do trabalho.
3. **Plano aprovado antes do código.** O Claude Code leu as referências, conferiu as versões instaladas e a documentação do Next.js 16 e apresentou um plano com a árvore de arquivos, a estratégia de cada interação e as divergências encontradas entre layout e especificação. O código só começou depois da aprovação.
4. **Construção e verificação.** Depois de implementar, rodou lint, checagem de tipos e build. Também testou as interações num Chrome automatizado: hover, teclado, toque, movimento reduzido, 390px de largura e a transição entre páginas. Por fim, conferiu o checklist de aceite item por item.

### Algumas decisões técnicas

- **O cursor não faz o React renderizar de novo.** O céu grava a posição do mouse em variáveis CSS (`--cx`, `--cy`, `--active`) uma vez por quadro, com `requestAnimationFrame`. O deslocamento de cada boneco é calculado em CSS com `calc()` e `clamp()`, a partir de variáveis próprias (`--left`, `--top`, `--pull`, `--lim`).
- **A flutuação usa a propriedade `translate`, e a atração usa `transform`.** Assim as duas animações rodam juntas sem conflito.
- **Transição entre páginas com o `<ViewTransition>` do React.** O disco do boneco e o avatar da página do projeto compartilham o mesmo nome (`avatar-{slug}`). Em navegadores sem suporte, a navegação acontece normalmente, sem animação.
- **Acessibilidade.**
  - Os bonecos de destaque são links focáveis, com `aria-label` e foco visível.
  - Os slots são `<button aria-expanded>`.
  - Em telas de toque, os destaques ficam sempre coloridos, de chapéu e com a placa visível.
  - Com `prefers-reduced-motion`, nada se move.

## Estrutura

```
src/
  app/[lang]/                  layout, página inicial e projetos/[slug]
  app/globals.css              tokens, keyframes, hovers e media queries
  components/                  cabeçalho, rodapé, seletor de idioma, avatar
  components/home/             céu, multidão, bonecos de destaque, slots, seções
  components/project/          página de projeto e paginador
  content/projects.ts          lista de projetos (único lugar a editar)
  content/site.ts              contatos e caminhos dos currículos
  i18n/                        dicionários PT e EN tipados
```

Para adicionar, remover ou reordenar um projeto, edite só `src/content/projects.ts`. A ordem define o número do trabalho, o boneco de destaque e o slot.

## Rodando localmente

Requer Node.js 20.9 ou superior.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de produção
npm run lint
```
