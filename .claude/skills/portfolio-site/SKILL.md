---
name: portfolio-site
description: Constrói do zero o portfólio pessoal de Marcello Miranda em Next.js (App Router), TypeScript e Tailwind CSS, reproduzindo fielmente o layout de referência (céu com multidão de avatares, três bonecos de destaque que seguem o cursor e levam às páginas de projeto, slots de trabalhos, versões PT/EN). Use esta skill sempre que o pedido envolver criar, montar, iniciar, reconstruir ou evoluir o site de portfólio, o "site pessoal", a "página de projetos" ou qualquer parte desse layout, mesmo que o pedido não diga "skill" nem "portfólio" explicitamente.
---

# Portfólio Marcello Miranda

Esta skill guia a construção do portfólio a partir de uma pasta praticamente vazia. A fonte da verdade visual e de comportamento são os dois arquivos de layout. O objetivo é chegar a um site que, aberto no navegador, seja indistinguível do layout em aparência e interação, mas escrito como um projeto Next.js de verdade, idiomático, tipado e fácil de manter.

O dono do projeto trabalha com um fluxo de **revisar antes de executar**. Respeite isso: nada de código antes de um plano aprovado.

## Arquivos de referência

Leia, nesta ordem, antes de qualquer outra coisa:

1. `references/spec.md` — especificação completa: tokens de design, estrutura de rotas, modelo de dados, comportamento de cada interação, textos em PT e EN e checklist de aceite. É o documento principal.
2. `references/layout/home.dc.html` — layout da página inicial.
3. `references/layout/projeto.dc.html` — layout da página de projeto.

Se a pasta do projeto tiver uma pasta `referencias/` (ou arquivos `.dc.html`, prints do layout) colocados pelo usuário, leia também. Se houver diferença entre o que o usuário colocou na pasta e o que está nesta skill, a versão da pasta do projeto vence, porque é a mais recente. Aponte a diferença no plano.

### Como ler os arquivos `.dc.html`

São componentes de um editor de design, não HTML para copiar. A estrutura:

- O markup dentro de `<x-dc>` é a estrutura e o estilo visual. Os estilos inline são os valores exatos (cores, tamanhos, espaçamentos, bordas) a reproduzir com Tailwind.
- O `<style>` dentro de `<helmet>` contém hovers, keyframes e media queries. Traduza para Tailwind ou para CSS em `globals.css` quando for animação.
- `{{ algo }}` são valores calculados no bloco `<script type="text/x-dc">`, na função `renderVals()`. Esse script é a especificação do comportamento: posições da multidão, fórmula de atração ao cursor, estados dos slots. Reimplemente a lógica em React, não copie a classe.
- `<sc-for>` é um `.map()`; `<sc-if>` é renderização condicional.
- Links para `Main.dc.html` significam a página inicial; links para `Projeto.dc.html` significam a página do projeto correspondente.
- Textos entre colchetes (`[PRINT DO PROJETO]`, `[SUA FOTO]`) são espaços reservados para conteúdo que o usuário vai fornecer.

## Restrições que não se negociam

- **Nada de Magritte no site.** A pasta pode conter uma imagem de inspiração (uma pintura ou a capa do LinkedIn do usuário). Ela é só contexto: não use a imagem, não a recrie e não desenhe figuras de homens de chapéu-coco. Os bonecos do site são o avatar genérico de perfil vazio, exatamente como no layout.
- **Código de cliente não entra.** Os projetos são apresentados por print, título, descrição e link. Não invente detalhes técnicos, números ou resultados que não estejam em `content/projects.ts`.
- **Não invente conteúdo.** Use os textos do layout e do `spec.md`. Onde faltar conteúdo, mantenha o espaço reservado visível e liste-o no relatório final.
- **Dependências mínimas.** Next.js, React, TypeScript e Tailwind dão conta de tudo. Não adicione biblioteca de animação, de i18n ou de componentes. Se achar que alguma é indispensável, justifique no plano e espere aprovação.
- **Sem commit, push ou deploy** a menos que o usuário peça.

## Fluxo de trabalho

### 1. Entender

Leia os três arquivos de referência e a pasta do projeto. Verifique as versões disponíveis de Node e do `create-next-app` (`node -v`, `npx create-next-app@latest --version`). Consulte a documentação da versão instalada do Next.js para as APIs que mudam entre versões, principalmente View Transitions, `next/font` com eixos variáveis e configuração do Tailwind. Não assuma a API de memória.

### 2. Planejar (Plan Mode)

Apresente um plano curto e concreto, e **pare até o usuário aprovar**. O plano deve conter:

- comando de criação do projeto e as opções escolhidas;
- árvore de pastas e arquivos que serão criados;
- como cada interação será implementada (multidão curiosa, três bonecos de destaque, placas, slots, transição para a página de projeto, troca de idioma, comportamento em toque e com movimento reduzido);
- qual API de transição a versão instalada do Next oferece e qual será usada, com o fallback;
- lista de espaços reservados que vão ficar à espera de conteúdo;
- qualquer divergência encontrada entre as referências.

### 3. Construir

Depois da aprovação, siga a estrutura do `spec.md`. Ordem sugerida, conferindo cada etapa antes de seguir:

1. Criar o projeto com App Router, TypeScript, Tailwind, ESLint e a pasta `src/`, com alias `@/*`.
2. Tokens de design no CSS global (cores, fontes, bordas) e fontes via `next/font/google`.
3. Modelo de dados (`src/content/projects.ts`) e dicionários (`src/i18n/`).
4. Rotas `[lang]`, redirecionamento da raiz e layout com cabeçalho e rodapé.
5. Página inicial, seção por seção, deixando o céu com a multidão por último.
6. Céu com a multidão e os três bonecos de destaque.
7. Página de projeto e navegação anterior e próximo.
8. Transição entre o boneco clicado e a página do projeto.
9. Metadados, `alternates` de idioma e páginas estáticas com `generateStaticParams`.

Prefira Server Components. Só vire Client Component o que precisa de estado ou eventos: o céu interativo, os slots de trabalhos e o seletor de idioma, se ele precisar de estado.

### 4. Verificar

Rode `npm run lint`, `npx tsc --noEmit` e `npm run build`. Corrija tudo antes de terminar. Depois percorra o checklist de aceite do `spec.md` item por item e marque o que foi atendido.

### 5. Relatar

Termine com um relatório curto:

- o que foi construído e como rodar (`npm run dev`);
- o checklist de aceite com o status de cada item;
- os espaços reservados que esperam conteúdo e o caminho exato de cada arquivo a colocar (prints, foto, PDFs do currículo);
- como adicionar ou trocar um projeto editando só `src/content/projects.ts`;
- decisões tomadas que o usuário deveria conhecer.
