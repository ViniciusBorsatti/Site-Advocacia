# Site — Luiza Justina Tebaldi, Advogada

Site institucional de página única. Estático, sem back-end.

## Stack

- [Astro](https://astro.build) 5 — gera HTML estático, envia praticamente zero JavaScript
- TypeScript em modo `strict`
- CSS com escopo por componente + tokens em `src/styles/global.css`

## Rodando localmente

```bash
npm install
npm run dev      # http://localhost:4321
```

| Comando | O que faz |
| --- | --- |
| `npm run dev` | servidor de desenvolvimento com hot reload |
| `npm run build` | gera o site em `dist/` |
| `npm run preview` | serve o `dist/` para conferir antes de publicar |
| `npm run check` | checagem de tipos |

## Onde mexer

**Todo o conteúdo fica em `src/data/escritorio.ts`.** Telefone, endereço, horário, áreas de
atuação e textos estão lá, tipados. Não é preciso abrir os componentes para mudar texto.

Os pontos marcados com `// CONFERIR` precisam ser confirmados com a advogada.

```
src/
├── components/
│   ├── MarcaJustica.astro   logo vetorizada (SVG, herda a cor via currentColor)
│   ├── Cabecalho.astro      topo fixo
│   ├── Capa.astro           primeira dobra
│   ├── Sobre.astro
│   ├── Areas.astro
│   ├── Contato.astro
│   └── Rodape.astro
├── data/escritorio.ts       ← conteúdo do site
├── layouts/Base.astro       <head>, SEO, JSON-LD
├── styles/global.css        tokens de cor, tipografia e espaçamento
└── pages/index.astro
```

## Antes de publicar

1. Trocar `site:` no `astro.config.mjs` pelo domínio real (hoje: `luizatebaldi.adv.br`).
2. Atualizar a mesma URL em `public/robots.txt`.
3. Conferir os itens marcados com `// CONFERIR` em `src/data/escritorio.ts`.

## Publicação

Deploy na Vercel: importar o repositório. O framework é detectado sozinho
(`npm run build`, saída em `dist/`).

## Observação sobre publicidade

O conteúdo segue o Código de Ética da OAB e o Provimento nº 205/2021: sem promessa de
resultado, sem depoimento de cliente, sem valor de honorário e sem linguagem de captação.
Qualquer texto novo precisa respeitar as mesmas regras.
