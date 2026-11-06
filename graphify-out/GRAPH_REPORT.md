# Graph Report - treino  (2026-11-06)

## Corpus Check
- 29 files · ~356,304 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 157 nodes · 153 edges · 24 communities (14 shown, 6 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 2 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `8470316e`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- compilerOptions
- vinicius/treinos.ts
- devDependencies
- package.json
- Plano de 6 meses — Karla Terra (Glúteos e Pernas)
- Treino 14-07-2026 v2 Revisado
- Treino 15-05-2026
- Fase 1 — Base (16/11 → 20/12)
- Treino 08-03-2026
- Dumbbell Bulgarian Split Squat GIF
- Plank Exercise Animation
- Reverse Lunge Exercise Animation
- Skull Crusher Exercise Animation
- Wide Grip Lat Pulldown Exercise Animation
- Melhores livros para treinos de hipertrofia avançados
- Nova Ficha de Treino — Periodização Híbrida (Glúteo + Superiores fundidos + Core 3x)
- Rotina automática — montar a próxima fase do plano de 6 meses da Karla
- vercel.json
- Project Index: treino
- Divisão da semana

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 13 edges
2. `Plano de 6 meses — Karla Terra (Glúteos e Pernas)` - 11 edges
3. `Project Index: treino` - 9 edges
4. `Fase 1 — Base (16/11 → 20/12)` - 7 edges
5. `Nova Ficha de Treino — Periodização Híbrida (Glúteo + Superiores fundidos + Core 3x)` - 7 edges
6. `Divisão da semana` - 7 edges
7. `Melhores livros para treinos de hipertrofia avançados` - 7 edges
8. `Rotina automática — montar a próxima fase do plano de 6 meses da Karla` - 6 edges
9. `Treino` - 5 edges
10. `scripts` - 4 edges

## Surprising Connections (you probably didn't know these)
- `Goblet Squat GIF` --references--> `Treino 14-07-2026`  [EXTRACTED]
  public/gifs/Goblet-Squat.gif → Treinos/Karla/treino-14-07-2026.md
- `Ab Wheel Rollout GIF` --references--> `Treino 14-07-2026 v2 Revisado`  [EXTRACTED]
  public/gifs/Ab-Wheel-Rollout.gif → Treinos/Karla/treino-14-07-2026-v2-revisado.md
- `Barbell Romanian Deadlift GIF` --references--> `Treino 14-07-2026 v2 Revisado`  [EXTRACTED]
  public/gifs/Barbell-Romanian-Deadlift.gif → Treinos/Karla/treino-14-07-2026-v2-revisado.md
- `Cable Donkey Kickback GIF` --references--> `Treino 15-05-2026`  [EXTRACTED]
  public/gifs/Cable-Donkey-Kickback.gif → Treinos/Karla/treino-15-05-2026.md
- `Hanging Leg Raise GIF` --references--> `Treino 15-05-2026`  [EXTRACTED]
  public/gifs/Hanging-Leg-Raise.gif → Treinos/Karla/treino-15-05-2026.md

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Exercise Visual Demonstrations** — public_gifs_plank, public_gifs_reverse_lunge, public_gifs_skull_crusher, public_gifs_wide_grip_lat_pulldown [EXTRACTED 1.00]
- **Karla Terra Training Evolution** — treinos_karla_treino_08_03_2026, treinos_karla_treino_31_04_2026, treinos_karla_treino_15_05_2026, treinos_karla_treino_14_07_2026, treinos_karla_treino_14_07_2026_v2_revisado [EXTRACTED 1.00]

## Communities (24 total, 6 thin omitted)

### Community 0 - "compilerOptions"
Cohesion: 0.11
Nodes (18): DOM, DOM.Iterable, ES2020, src, compilerOptions, allowImportingTsExtensions, isolatedModules, jsx (+10 more)

### Community 1 - "vinicius/treinos.ts"
Cohesion: 0.16
Nodes (12): App(), paginas, Props, TreinoCard(), gifs, treinos, Exercicio, Treino (+4 more)

### Community 2 - "devDependencies"
Cohesion: 0.18
Nodes (11): devDependencies, @types/react, @types/react-dom, typescript, vite, @vitejs/plugin-react, @types/react, @types/react-dom (+3 more)

### Community 3 - "package.json"
Cohesion: 0.14
Nodes (13): dependencies, react, react-dom, name, private, scripts, build, dev (+5 more)

### Community 4 - "Plano de 6 meses — Karla Terra (Glúteos e Pernas)"
Cohesion: 0.17
Nodes (11): 1. Perfil e premissas, 2. Avaliação do bloco anterior (31/08/2026), resumida, 3. Regras fixas (os 6 meses inteiros), 4. Cronograma, 5. Volume por fase (séries/semana, início → fim da fase), 6. Semana-tipo, 7. Monitoramento, 8. Alimentação (cap. 9) (+3 more)

### Community 5 - "Treino 14-07-2026 v2 Revisado"
Cohesion: 0.40
Nodes (5): Ab Wheel Rollout GIF, Barbell Romanian Deadlift GIF, Goblet Squat GIF, Treino 14-07-2026, Treino 14-07-2026 v2 Revisado

### Community 6 - "Treino 15-05-2026"
Cohesion: 0.50
Nodes (4): Cable Donkey Kickback GIF, Hanging Leg Raise GIF, Lateral Band Walk GIF, Treino 15-05-2026

### Community 7 - "Fase 1 — Base (16/11 → 20/12)"
Cohesion: 0.20
Nodes (9): Fase 0 — Deload (09–15/11), Fase 1 — Base (16/11 → 20/12), Ficha de Treino — Plano de 6 meses · Fase 0 (Deload) + Fase 1 (Base), Treino A — Segunda · Inferior A: Glúteo + Posterior + Panturrilha, Treino B — Terça · Superior Completo (manutenção) + Core, Treino C — Quarta · Inferior B: Quadríceps + Adutores + Panturrilha, Treino D — Quinta (opcional) · Superior Curto + Core, Treino E — Sexta · Inferior C: Glúteo + Posterior (unilateral) (+1 more)

### Community 8 - "Treino 08-03-2026"
Cohesion: 0.67
Nodes (3): Barbell Hip Thrust GIF, Leg Extension GIF, Treino 08-03-2026

### Community 17 - "Melhores livros para treinos de hipertrofia avançados"
Cohesion: 0.22
Nodes (8): Análise por livro, Fontes, Lacunas e incertezas, Melhores livros para treinos de hipertrofia avançados, Ranking, Recomendação (decisão humana), Resumo Didático, Resumo executivo

### Community 18 - "Nova Ficha de Treino — Periodização Híbrida (Glúteo + Superiores fundidos + Core 3x)"
Cohesion: 0.25
Nodes (7): Nova Ficha de Treino — Periodização Híbrida (Glúteo + Superiores fundidos + Core 3x), Treino A — Segunda · Glúteo + Upper Push (Peito + Ombro + Tríceps) + Core, Treino B — Terça · Quadríceps + Glúteo (Foco Anterior), Treino C — Quarta · Glúteo Médio + Upper Pull (Costas + Ombro Posterior + Bíceps) + Core, Treino D — Quinta · Glúteo + Isquiotibiais (Foco Posterior), Treino E — Sexta · Glúteo Full (Finalização) + Core, Treino F — Sábado · Glúteo Médio + Adutores (Manutenção Leve)

### Community 19 - "Rotina automática — montar a próxima fase do plano de 6 meses da Karla"
Cohesion: 0.29
Nodes (6): Dados de cada fase, Fontes obrigatórias (ler antes de montar), Passos, Regras de montagem, Rotina automática — montar a próxima fase do plano de 6 meses da Karla, Se der errado

### Community 22 - "Project Index: treino"
Cohesion: 0.20
Nodes (9): Automação, Dependências, Documentação, Estrutura, Início rápido, Módulos principais, Pontos de entrada, Project Index: treino (+1 more)

### Community 23 - "Divisão da semana"
Cohesion: 0.20
Nodes (9): Como progredir, Divisão da semana, Ficha de Treino — Bloco 1 (Superior, 6x/semana), Treino A — Segunda · Push 1: Peito + Ombro + Tríceps, Treino B — Terça · Pull 1: Costas (largura) + Bíceps, Treino C — Quarta · Ombros + Braços 1 + Abdômen, Treino D — Quinta · Push 2: Peito superior + Tríceps, Treino E — Sexta · Pull 2: Costas (espessura) + Bíceps (+1 more)

## Knowledge Gaps
- **95 isolated node(s):** `name`, `private`, `version`, `type`, `dev` (+90 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 107 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **6 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `devDependencies` connect `devDependencies` to `package.json`?**
  _High betweenness centrality (0.015) - this node is a cross-community bridge._
- **What connects `name`, `private`, `version` to the rest of the system?**
  _95 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `compilerOptions` be split into smaller, more focused modules?**
  _Cohesion score 0.10526315789473684 - nodes in this community are weakly interconnected._
- **Should `package.json` be split into smaller, more focused modules?**
  _Cohesion score 0.14285714285714285 - nodes in this community are weakly interconnected._