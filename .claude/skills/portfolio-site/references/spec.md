# Especificação do portfólio

## Sumário

1. Stack e estrutura
2. Rotas e idiomas
3. Modelo de dados
4. Tokens de design
5. Página inicial
6. O céu: multidão e bonecos de destaque
7. Página de projeto
8. Transição entre páginas
9. Responsivo, toque e movimento reduzido
10. Acessibilidade e metadados
11. Textos (PT e EN)
12. Arquivos que o usuário vai fornecer
13. Checklist de aceite

---

## 1. Stack e estrutura

- Next.js (versão estável atual, App Router), React, TypeScript em modo estrito, Tailwind CSS (a versão que o `create-next-app` instalar), ESLint.
- Nenhuma outra dependência de execução sem aprovação.
- Estrutura esperada (ajuste fino é livre, desde que a separação se mantenha):

```
src/
  app/
    [lang]/
      layout.tsx            cabeçalho, rodapé, <html lang>
      page.tsx              página inicial
      projetos/[slug]/page.tsx
    globals.css             tokens, keyframes, regras de hover/animação
  components/
    Header.tsx  Footer.tsx  LangSwitch.tsx
    home/  Sky.tsx  Crowd.tsx  FeaturedFigure.tsx  AvatarFigure.tsx
           WorkSlots.tsx  Crafts.tsx  About.tsx
    project/  ProjectHero.tsx  ProjectPager.tsx
    Placeholder.tsx         caixa rotulada para conteúdo ausente
  content/projects.ts       único lugar onde os projetos são editados
  i18n/  pt.ts  en.ts  index.ts   dicionários tipados e helper getDictionary
public/
  images/projects/          prints dos projetos
  images/me.jpg             foto (opcional)
  cv/                       PDFs do currículo
```

## 2. Rotas e idiomas

- `/` redireciona para `/pt` (redirect em `next.config`).
- `/pt` e `/en`: página inicial.
- `/pt/projetos/[slug]` e `/en/projetos/[slug]`: página do projeto. O segmento `projetos` é o mesmo nos dois idiomas, por simplicidade.
- Idiomas suportados: `pt` e `en`. Qualquer outro valor de `lang` retorna 404.
- `generateStaticParams` para idiomas e slugs: o site inteiro deve ser estático.
- Dicionários simples em `src/i18n`. O tipo do dicionário em inglês deve ser derivado do português, para o TypeScript acusar chave faltando.
- O seletor PT/EN troca o idioma mantendo a página atual.
- O botão "Baixar currículo" aponta para o PDF do idioma atual, com o atributo `download`.

## 3. Modelo de dados

`src/content/projects.ts` exporta um array ordenado. A ordem define o número do trabalho (01, 02, 03), o boneco de destaque e o slot.

```ts
type Localized = { pt: string; en: string };

export type Project = {
  slug: string;
  sign: Localized;            // texto curto da placa do boneco
  title: Localized;
  summary: Localized;         // texto do slot na página inicial
  description: { pt: string[]; en: string[] };  // parágrafos da página do projeto
  tags: string[];
  image: string | null;       // caminho em /public; null mostra Placeholder
  imageAlt: Localized;
  caption: Localized | null;
  url: string | null;         // link "Visitar o site"; null esconde o botão
  urlLabel: string | null;    // endereço exibido na barra do navegador
};
```

Conteúdo inicial (o usuário revisa depois; não acrescente nada além disto):

1. `gerador-de-sites`
   - sign: "Gerador de sites" / "Site generator"
   - title: "Gerador de sites com Claude Code" / "Site generator with Claude Code"
   - summary: "Skill que monta um site novo a partir de 16 seções padronizadas, com revisão antes de cada execução." / "A skill that scaffolds a new site from 16 standardized sections, with a review step before every run."
   - description: ["Skill de Claude Code que monta a estrutura de um site novo a partir de 16 seções padronizadas. Um fluxo de perguntas define o conteúdo, e nada é executado antes de uma revisão."] / ["A Claude Code skill that scaffolds a new website from 16 standardized sections. A question flow defines the content, and nothing runs before a review."]
   - tags: ["Claude Code", "Next.js", "TypeScript", "Tailwind"]
   - image, url, urlLabel, caption: null
2. `gestao-de-competicoes`
   - sign: "Sistema de competições" / "Competition system"
   - title: "Sistema de gestão de competições" / "Competition management system"
   - summary: "Plataforma web usada em competição oficial, com suporte presencial aos usuários no primeiro teste real." / "A web platform used at an official competition, with on-site user support during its first real test."
   - description: [mesmo texto do summary] / [same as summary]
   - tags: ["Next.js", "TypeScript", "REST"]
   - image, url, urlLabel, caption: null
3. `projeto-pessoal`
   - sign: "Projeto pessoal" / "Personal project"
   - title: "[Projeto pessoal]" / "[Personal project]"
   - summary e description: "[Descrição curta: o problema, o que você construiu e o resultado.]" / "[Short description: the problem, what you built and the result.]"
   - tags: []
   - image, url, urlLabel, caption: null

## 4. Tokens de design

Defina como tokens do Tailwind (no CSS global, conforme a versão instalada) e use só os tokens nos componentes.

| Token | Valor | Uso |
|---|---|---|
| ink | `#17202B` | texto, bordas, fundos escuros |
| paper | `#F4F1EA` | fundo geral, caixas |
| sky | `#D9E6F0` | céu, slot 01, seção Sobre, hover do paginador |
| mountain-far | `#BFD0DE` | montanha de trás |
| mountain-near | `#A9BED0` | montanha da frente |
| ochre | `#B8742E` | faixa lateral, slot 02, hover de links |
| olive | `#8C8A3A` | slot 03, painel da foto |
| ochre-light | `#E9B676` | e-mail sobre fundo escuro |
| avatar | `#C3C9CF` | bonecos da multidão |
| avatar-featured | `#AEB6BF` | bonecos de destaque em repouso |
| accent | `#1A73E8` | bonecos de destaque ativos, sombra do botão de visitar |
| white | `#FFFFFF` | disco dos avatares |

- Fontes: Archivo variável (eixos `wdth` 62–125 e `wght`) para interface e para o nome gigante (`font-weight: 800`, `font-stretch: 125%`); Fraunces variável (eixo `opsz`, com itálico) para títulos e listas. Carregue as duas via `next/font/google` com os eixos necessários e exponha como variáveis CSS. Fallbacks: `'Helvetica Neue', sans-serif` e `Georgia, serif`.
- Bordas: `2px solid ink` em todas as divisões. Raio zero, exceto pílula da barra de endereço (999px) e placas (3px).
- Sombras sólidas, sem desfoque: `3px 3px 0 ink` (placas), `8px 8px 0 ink` (moldura do print), `5px 5px 0 accent` (hover do botão de visitar).
- Curva padrão: `cubic-bezier(.2,.8,.2,1)`.

## 5. Página inicial

Reproduza `home.dc.html` seção por seção, com os mesmos valores:

1. **Cabeçalho**: nome gigante (`clamp(2.6rem, 9.6vw, 9.4rem)`, `line-height .92`, `letter-spacing -0.03em`, sem quebra), depois a barra de navegação com links âncora (`#trabalhos`, `#oficios`, `#sobre`, `#contato`), o seletor PT/EN (botões de 56×56, ativo em ink) e o botão "Baixar currículo" em ink.
2. **Céu** (seção 6) ao lado da **faixa lateral** ocre com e-mail, LinkedIn e cidade em escrita vertical (`writing-mode: vertical-rl`), que vira horizontal abaixo de 760px. Caixa de apresentação paper com borda, ancorada no canto inferior esquerdo do céu.
3. **Trabalhos selecionados**: título e frase, e os três slots em linha, gerados a partir de `projects.ts`. Slot selecionado: `flex: 3 1 440px`, com a cor do slot (01 sky, 02 ochre, 03 olive). Os outros: `flex: 1 1 220px`, em paper. Transição de `flex` e cor em 0,5s. Ao clicar, o slot seleciona e se expande mostrando imagem 16:10 (ou Placeholder), summary e tags. No hover, o número sobe 6px. Abaixo, o link "Ver trabalho 0N →" leva à página do projeto selecionado. Slot 01 começa selecionado. Use `<button aria-expanded>` em cada slot.
4. **O que eu faço**: painel ink à esquerda; à direita, lista em Fraunces grande. No hover de cada item, `padding-left: 24px` e cor ochre, em 0,3s. O último item fica em itálico.
5. **Sobre**: painel sky com texto em Fraunces e link para o Substack; painel olive com a foto em 3:4 (ou Placeholder).
6. **Rodapé**: fundo ink, "Vamos conversar." em Fraunces enorme, links (e-mail em ochre-light) e copyright.

`html { scroll-behavior: smooth }`, desligado com movimento reduzido.

## 6. O céu: multidão e bonecos de destaque

O céu é a peça central. Fundo sky, duas montanhas em SVG na base (paths exatos no layout, `preserveAspectRatio="none"`, altura 11rem) e três camadas de avatares.

### O avatar

SVG `viewBox="0 0 100 100"`: disco branco (`r=49`; nos de destaque `r=48` com contorno ink de 2px), cabeça (`circle cx=50 cy=25 r=10`) e corpo inteiro (path exato no layout). Crie um componente `AvatarFigure` reutilizado nas duas páginas, com props de tamanho, cor e contorno.

### Posições

Para uma camada com `count` bonecos e `rowTops` (em %):

```
row  = i % rowTops.length
left = (i * (100 / count) + (row é ímpar ? shift : 0)) % 88 + 3   // em %
top  = rowTops[row]                                               // em %
```

| Camada | Qtde | Tamanho | rowTops | shift | pull | limite | opacidade | Interativa |
|---|---|---|---|---|---|---|---|---|
| fundo | 8 | 50px | 4, 26, 48 | 6 | 0,1 | 40px | 0,6 | não |
| meio | 7 | 74px | 12, 36, 58 | 7 | 0,2 | 40px | 1 | não |
| frente | 5 | 104px | 26, 6, 46 | 9 | 0,3 | 40px | 1 | não |
| destaque | 3 | 148px | lefts 16, 46, 74 · tops 10, 30, 8 | — | 1,1 | 140px | 1 | sim |

`z-index`: fundo 1, meio 2, frente 3, destaque 10, destaque em hover ou foco 30.

### Multidão curiosa

Com o cursor sobre o céu, sendo `cx` e `cy` a posição relativa (0 a 1):

```
dx = cx * 100 - left        dy = cy * 100 - top
tx = clamp(dx * pull * 3,   -limite,   limite)       // px
ty = clamp(dy * pull * 1.5, -limite/2, limite/2)     // px
rot = clamp(dx * 0.3, -12, 12)                       // graus
transform: translate(tx, ty) rotate(rot)
```

Transição do `transform`: 0,8s nos destaques e 1,3s nos demais, com a curva padrão. Quando o cursor sai, tudo volta a `translate(0,0) rotate(0)`.

**Desempenho:** não faça `setState` a cada `mousemove` para 23 bonecos. Guarde a posição do cursor e aplique numa só escrita por quadro (`requestAnimationFrame`): o caminho preferido é definir variáveis CSS no contêiner (`--cx`, `--cy`, `--active`) e calcular o `transform` de cada boneco em CSS com `calc()` e `clamp()`, usando variáveis por boneco (`--left`, `--top`, `--pull`, `--lim`). Assim o React não renderiza de novo ao mover o mouse.

Flutuação contínua: keyframe `drift` (`translate: 0 0 → 0 -10px → 0 0`), 7s na frente e nos destaques, 9s no meio, 12s no fundo, `ease-in-out infinite`. Use a propriedade `translate` (e não `transform`) para não conflitar com a atração ao cursor.

### Bonecos de destaque

- Um para cada projeto, na ordem de `projects.ts`. São `<Link>` para `/[lang]/projetos/[slug]`, com `aria-label` "Ver projeto: {título}" / "View project: {title}".
- Em repouso: corpo `avatar-featured`.
- Em hover ou foco: corpo muda para `accent` em 0,3s, o disco cresce para `scale(1.08)` e a placa aparece. Ao pressionar, `scale(.92)`.
- Placa: centralizada, no topo a 60% do boneco, paper, borda ink de 2px, raio 3px, sombra `3px 3px 0 ink`, Archivo 14px peso 700, sem quebra. Aparece com opacidade 0→1 e transform `translate(-50%, 8px) scale(.85)` → `translate(-50%, 0) scale(1)`, em 0,25s/0,35s.
- Só esses três mudam de cor. A multidão nunca reage ao hover.

## 7. Página de projeto

Reproduza `projeto.dc.html`:

- Cabeçalho compacto: nome em Archivo 800 expandido (1,9rem) linkando para a página inicial, seletor PT/EN e "Baixar currículo".
- Barra: "← Todos os trabalhos" (volta para `/[lang]#trabalhos`) e "Trabalho 0N de 03".
- Coluna de texto: avatar azul de 96px (contorno ink, corpo `accent`) com flutuação de 6s, número grande, título em Fraunces, parágrafos da descrição, tags em caixa alta e botão "Visitar o site ↗" (ink, 56px de altura, `target="_blank" rel="noopener noreferrer"`; some se `url` for null). Hover do botão: sombra `5px 5px 0 accent` e `translate(-2px,-2px)`.
- Coluna do print: fundo sky com as montanhas, moldura com barra de endereço (`urlLabel`), imagem 16:10 com `next/image` (ou Placeholder) e legenda (some se `caption` for null).
- Entrada: elementos sobem 28px com fade em sequência (0s, 0,12s, 0,22s; 0,7–0,8s).
- Paginador: anterior e próximo em ciclo (do 01, o anterior é o 03), com hover sky.
- Rodapé compacto.
- `notFound()` para slug inexistente.

## 8. Transição entre páginas

Ao clicar num boneco de destaque, o boneco deve parecer crescer e virar o avatar da página do projeto.

- Dê ao disco do boneco de destaque e ao avatar da página de projeto o mesmo `view-transition-name` (`avatar-{slug}`), único por página.
- Use a integração de View Transitions oficial da versão instalada do Next/React (verifique na documentação se exige flag em `next.config`, ou o componente `<ViewTransition>` do React). Se não houver suporte estável, use `document.startViewTransition` envolvendo a navegação do `router.push`, com fallback para navegação normal quando a API não existir.
- Transição curta (0,5s, curva padrão). O conteúdo restante faz fade.
- Com movimento reduzido, sem transição.

## 9. Responsivo, toque e movimento reduzido

- Todos os blocos usam `flex-wrap` com os `flex-basis` do layout, então empilham naturalmente no celular. Teste em 390px de largura, sem rolagem horizontal.
- Abaixo de 760px: faixa lateral horizontal; bonecos de destaque com 104px, e a multidão de fundo some, deixando só meio e frente.
- Em `(hover: none)` ou `(pointer: coarse)`: os três bonecos de destaque ficam azuis com a placa sempre visível; a atração ao cursor fica desligada; o toque navega direto.
- Em `prefers-reduced-motion: reduce`: sem `drift`, sem atração, sem transições de página, sem rolagem suave e sem animação de entrada. As placas e as cores continuam funcionando.

## 10. Acessibilidade e metadados

- `<html lang>` conforme o idioma (`pt-BR` / `en`).
- Bonecos decorativos com `aria-hidden="true"`; os três de destaque são links focáveis com `aria-label` e estado de foco visível (mesmo visual do hover).
- Ordem de tabulação: cabeçalho, bonecos de destaque, slots, links.
- Contraste mínimo 4,5:1 no texto. Texto escuro sobre ochre e olive; texto claro só sobre ink.
- `metadata` por página: título ("Marcello Miranda — Desenvolvedor full stack" / "Marcello Miranda — Full stack developer"; nas páginas de projeto, "{título} — Marcello Miranda"), descrição e `alternates.languages`.
- Imagens com `alt` vindo de `imageAlt`.

## 11. Textos

Os textos em português estão nos arquivos de layout. Use exatamente estes, nos dois idiomas:

| Chave | PT | EN |
|---|---|---|
| nav.work | Trabalhos | Work |
| nav.crafts | O que eu faço | What I do |
| nav.about | Sobre | About |
| nav.contact | Contato | Contact |
| cv | Baixar currículo | Download résumé |
| hero.eyebrow | Desenvolvedor full stack · São Paulo | Full stack developer · São Paulo |
| hero.title | Um desenvolvedor, *muitos ofícios.* | One developer, *many crafts.* |
| hero.text | Construo sistemas completos com Next.js, TypeScript e Claude Code, da conversa com o cliente ao deploy. Hoje, na Bigmídia, desenvolvo plataformas web para confederações esportivas. | I build complete systems with Next.js, TypeScript and Claude Code, from the first client conversation to deploy. Today, at Bigmídia, I build web platforms for sports confederations. |
| side.city | São Paulo, Brasil | São Paulo, Brazil |
| work.title | Trabalhos selecionados | Selected work |
| work.text | Código de cliente não sai daqui. O que sai é o problema, a solução e o resultado. | Client code stays private. What you'll find here is the problem, the solution and the result. |
| work.link | Ver trabalho {n} → | View work {n} → |
| crafts.title | O que eu faço | What I do |
| crafts.text | Do primeiro rascunho da interface ao banco de dados, passando pela conversa com quem vai usar o sistema. | From the first interface sketch to the database, including the conversation with the people who will use the system. |
| crafts.items | Interfaces · APIs e dados · Desenvolvimento com IA · Requisitos e clientes · *Palavras e música* | Interfaces · APIs and data · AI-assisted development · Requirements and clients · *Words and music* |
| about.label | Sobre | About |
| about.text | Antes do código, fui compositor, produtor musical, tradutor e redator. Hoje escuto o cliente, transformo a necessidade em especificação e conduzo a implementação com Claude Code. | Before code, I was a songwriter, music producer, translator and copywriter. Today I listen to clients, turn their needs into specifications and lead the implementation with Claude Code. |
| about.substack | Também escrevo no Substack → | I also write on Substack → |
| footer.title | Vamos conversar. | Let's talk. |
| project.back | ← Todos os trabalhos | ← All work |
| project.count | Trabalho {n} de {total} | Work {n} of {total} |
| project.visit | Visitar o site ↗ | Visit the site ↗ |
| project.prev | ← Anterior · {n} | ← Previous · {n} |
| project.next | Próximo · {n} → | Next · {n} → |
| project.ariaFigure | Ver projeto: {título} | View project: {title} |

Contatos fixos: `marcelloaltermundi@gmail.com`, `https://www.linkedin.com/in/marcello-santoro-dev/`, `https://github.com/marcelloSantoroDev`, `https://depoisdepensar.substack.com/`. Copyright: "© {ano atual} Marcello Miranda".

## 12. Arquivos que o usuário vai fornecer

Enquanto não existirem, use o componente `Placeholder` (caixa com borda tracejada e o rótulo entre colchetes) e liste no relatório final:

- `public/images/projects/{slug}.webp` — print de cada projeto, 16:10 (sugestão: 1600×1000).
- `public/images/me.jpg` — foto, 3:4.
- `public/cv/marcello-miranda-cv-pt.pdf` e `public/cv/marcello-miranda-cv-en.pdf`.
- Conteúdo do projeto 03 e links dos projetos em `src/content/projects.ts`.

## 13. Checklist de aceite

- [ ] `npm run lint`, `npx tsc --noEmit` e `npm run build` passam sem erros.
- [ ] `/` redireciona para `/pt`; `/pt` e `/en` mostram todos os textos traduzidos; idioma inválido dá 404.
- [ ] A aparência confere com os layouts: cores, fontes, bordas de 2px, tamanhos e espaçamentos.
- [ ] A multidão flutua e se inclina na direção do cursor; os três de destaque seguem bem mais e mais rápido.
- [ ] Só os três de destaque reagem ao hover: ficam azuis `#1A73E8`, crescem e mostram a placa com o nome do projeto.
- [ ] O clique num boneco leva à página do projeto com a transição do avatar (ou navegação normal sem suporte).
- [ ] Mover o mouse no céu não provoca nova renderização do React.
- [ ] Slots expandem e recolhem com animação; o link inferior leva ao projeto selecionado.
- [ ] Página de projeto: print, título, descrição, botão de visitar, anterior/próximo em ciclo, 404 para slug inválido.
- [ ] Em 390px de largura, sem rolagem horizontal; no toque, os destaques ficam azuis com placa visível.
- [ ] Com movimento reduzido, nada se move e tudo continua utilizável.
- [ ] Bonecos de destaque acessíveis por teclado, com foco visível.
- [ ] Trocar, remover ou acrescentar um projeto exige editar só `src/content/projects.ts`.
- [ ] Nenhuma imagem ou figura de Magritte no site.
