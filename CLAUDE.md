# CLAUDE.md

## Comandos

```bash
npm run dev       # servidor local em http://localhost:5173
npm run build     # gera dist/ para produção
npm run preview   # serve o dist/ localmente
```

Deploy: automático via Vercel ao fazer push para `main`.

## Arquitetura

React 18 + Vite + TypeScript. Projeto "treino": um site com uma página por aluno.
Roteamento simples por `window.location.pathname` em `App.tsx` (`/` = Karla, `/vinicius` = Vinicius);
`vercel.json` reescreve todas as rotas para `index.html`.

```
src/
  data/types.ts               # interfaces Exercicio e Treino (compartilhadas)
  data/karla/treinos.ts       # treinos da Karla
  data/karla/gifs.ts          # catálogo de GIFs
  data/vinicius/treinos.ts    # treinos do Vinicius (vazio por enquanto)
  pages/Karla.tsx             # header, legenda, cards e rodapé da Karla
  pages/Vinicius.tsx          # página do Vinicius
  components/TreinoCard.tsx   # tabela de exercícios de um treino
  App.tsx                     # menu Karla | Vinicius + escolha da página
  main.tsx, index.css
```

Novo aluno: criar `src/data/<nome>/treinos.ts`, `src/pages/<Nome>.tsx` e adicionar em `paginas` no `App.tsx`.

### Estrutura de dados (`types.ts`)

```ts
interface Exercicio {
  imgSrc: string   // URL de GIF animado (fitnessprogramer.com)
  imgAlt: string
  musculos: string
  exercicio: string
  series: number
  repeticoes: string  // ex: '12-10-8-6'
  intervalo: string
  tecnica: string
}

interface Treino {
  id: string        // 'A' | 'B' | 'C' | 'D' | 'E'
  titulo: string
  subtitulo: string
  exercicios: Exercicio[]
}
```

## Contexto do Projeto

Ficha de treino da aluna Karla Terra. Programa de Periodização de Glúteos com 5 dias/semana (A–E).

Treinos ficam em `Treinos/Karla/treino-DD-MM-YYYY.md` (um arquivo por bloco).
O app React exibe sempre o bloco atual definido em `src/data/karla/treinos.ts`.
Treinos do Vinicius: `Treinos/Vinicius/` e `src/data/vinicius/treinos.ts`.

## Preferências e Fluxo de Trabalho

- Novo treino: criar `.md` em `Treinos/<Aluno>/` → atualizar `src/data/<aluno>/treinos.ts` → build → push para `main`
- Exercícios variam a cada bloco para evitar adaptação, mantendo o foco em glúteos 4x/semana
- Upper body apenas 1x/semana (Treino A)
- Sistema de pirâmide crescente: mais reps com menos peso → menos reps com mais peso por série
- Deload na semana 9 de cada bloco (−50% volume, −20–30% carga)
- Sem arquivos HTML de treino — usar apenas `.md` + React/TypeScript
- GIFs vêm de `fitnessprogramer.com` ou `inspireusafoundation.org`
