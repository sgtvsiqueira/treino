# Project Index: treino

Gerado em: 2026-11-06

App web (React + Vite) com fichas de treino por aluno. Páginas: Karla (`/`) e Vinicius (`/vinicius`, ainda vazia). Deploy na Vercel (projeto `treino`).

## Estrutura

```
treino/
├── src/
│   ├── main.tsx              # entrada: monta <App/> em #root
│   ├── App.tsx               # roteamento por pathname + nav
│   ├── index.css
│   ├── pages/{Karla,Vinicius}.tsx
│   ├── components/TreinoCard.tsx
│   └── data/
│       ├── types.ts          # interfaces Exercicio, Treino
│       ├── karla/{treinos,gifs}.ts
│       └── vinicius/treinos.ts
├── public/gifs/              # 24 GIFs locais de exercícios
├── Treinos/Karla/            # 7 fichas históricas em markdown
├── Treinos/Vinicius/         # vazio
├── claudedocs/               # 01 livros hipertrofia, 02 plano 6 meses
├── rotinas/rotina-montar-fase.md
├── vercel.json               # rewrite SPA (/(.*) -> /index.html)
└── vite.config.ts
```

## Pontos de entrada

- App: `src/main.tsx` -> `src/App.tsx`
- Roteamento: lista `paginas` em `App.tsx` (`/` Karla, `/vinicius`); rota desconhecida cai em Karla
- Build/dev: `npm run dev`, `npm run build`, `npm run preview`

## Módulos principais

- `src/data/types.ts`: `Exercicio` (imgSrc, imgAlt, musculos, exercicio, series, repeticoes, intervalo, tecnica) e `Treino` (id, titulo, subtitulo, exercicios)
- `src/data/karla/treinos.ts`: `treinos` Fase 1, treinos A-F, 33 exercícios
- `src/data/karla/gifs.ts`: objeto `gifs` com ~52 URLs (fitnessprogramer.com) por grupo muscular
- `src/data/vinicius/treinos.ts`: `treinos` vazio (placeholder)
- `src/components/TreinoCard.tsx`: card de um `Treino` (prop `treino`)
- `src/pages/Karla.tsx`: cabeçalho da fase, deloads, legenda, rodapé; renderiza TreinoCards
- `src/pages/Vinicius.tsx`: igual, com estado vazio "Treino em montagem"

## Automação

- `rotinas/rotina-montar-fase.md`: roteiro executado por `claude -p` via agendamentos (at) para montar as Fases 2-5 (arquivo novo em `Treinos/Karla/`, GIFs novos, `treinos.ts`, `Karla.tsx`, nota no claudedocs 02). Fases: 2 em 04/01/2027, 3 em 08/02, 4 em 15/03, 5 em 19/04.
- Novo aluno: criar `src/data/<aluno>/treinos.ts`, `src/pages/<Aluno>.tsx` e entrada em `paginas` (ver `CLAUDE.md` / rotina)

## Documentação

- `claudedocs/01 - 2026-11-02-livros-hipertrofia-avancada.md`: ranking de livros
- `claudedocs/02 - 2026-11-05-plano-6-meses-karla.md`: plano de 6 meses (regras fixas, volume por fase)
- `Treinos/Karla/treino-*.md`: fichas por data (08-03, 15-05, 31-04, 14-07 e v2, 31-08, 09-11-2026)
- `CLAUDE.md`: instruções do projeto (graphify)

## Testes

Nenhum. Verificação: `npx tsc --noEmit` e `npm run build`.

## Dependências

- react / react-dom ^18.3.1
- vite ^6.0.5, @vitejs/plugin-react ^4.3.4
- typescript ^6.0.3, @types/react(-dom) ^19

## Início rápido

1. `npm install`
2. `npm run dev`
3. `npm run build` (saída em `dist/`; deploy automático na Vercel via push na `main`)
