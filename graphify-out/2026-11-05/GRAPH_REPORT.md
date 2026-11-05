# Graph Report - treino_karla  (2026-08-31)

## Corpus Check
- 41 files · ~347,031 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 77 nodes · 70 edges · 17 communities (9 shown, 5 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 46,950 input · 2,957 output

## Community Hubs (Navigation)
- Configuracao TypeScript
- App React (dados e componentes)
- Dependencias de build (dev)
- package.json (metadados/scripts)
- Dependencias React (runtime)
- Bloco 14-07-2026 e GIFs
- Treino 15-05-2026 e GIFs
- Config lib TS (DOM/ES2020)
- Treino 08-03-2026 e GIFs
- Treino 31-04-2026 e GIF
- GIF Plank
- GIF Reverse Lunge
- GIF Skull Crusher
- GIF Wide Grip Lat Pulldown

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 13 edges
2. `scripts` - 4 edges
3. `lib` - 4 edges
4. `Treino` - 3 edges
5. `Treino 14-07-2026 v2 Revisado` - 3 edges
6. `Treino 15-05-2026` - 3 edges
7. `react` - 2 edges
8. `react-dom` - 2 edges
9. `@types/react` - 2 edges
10. `@types/react-dom` - 2 edges

## Surprising Connections (you probably didn't know these)
- `Barbell Hip Thrust GIF` --references--> `Treino 08-03-2026`  [EXTRACTED]
  public/gifs/Barbell-Hip-Thrust.gif → Treinos/Karla/treino-08-03-2026.md
- `Leg Extension GIF` --references--> `Treino 08-03-2026`  [EXTRACTED]
  public/gifs/Leg-Extension.gif → Treinos/Karla/treino-08-03-2026.md
- `Ab Wheel Rollout GIF` --references--> `Treino 14-07-2026 v2 Revisado`  [EXTRACTED]
  public/gifs/Ab-Wheel-Rollout.gif → Treinos/Karla/treino-14-07-2026-v2-revisado.md
- `Barbell Romanian Deadlift GIF` --references--> `Treino 14-07-2026 v2 Revisado`  [EXTRACTED]
  public/gifs/Barbell-Romanian-Deadlift.gif → Treinos/Karla/treino-14-07-2026-v2-revisado.md
- `Goblet Squat GIF` --references--> `Treino 14-07-2026`  [EXTRACTED]
  public/gifs/Goblet-Squat.gif → Treinos/Karla/treino-14-07-2026.md

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Karla Terra Training Evolution** — treinos_karla_treino_08_03_2026, treinos_karla_treino_31_04_2026, treinos_karla_treino_15_05_2026, treinos_karla_treino_14_07_2026, treinos_karla_treino_14_07_2026_v2_revisado [EXTRACTED 1.00]
- **Exercise Visual Demonstrations** — public_gifs_plank, public_gifs_reverse_lunge, public_gifs_skull_crusher, public_gifs_wide_grip_lat_pulldown [EXTRACTED 1.00]

## Communities (17 total, 5 thin omitted)

### Community 0 - "Configuracao TypeScript"
Cohesion: 0.13
Nodes (14): src, compilerOptions, allowImportingTsExtensions, isolatedModules, jsx, module, moduleDetection, moduleResolution (+6 more)

### Community 1 - "App React (dados e componentes)"
Cohesion: 0.27
Nodes (7): App(), Props, TreinoCard(), gifs, Exercicio, Treino, treinos

### Community 2 - "Dependencias de build (dev)"
Cohesion: 0.18
Nodes (11): devDependencies, @types/react, @types/react-dom, typescript, vite, @vitejs/plugin-react, @types/react, @types/react-dom (+3 more)

### Community 3 - "package.json (metadados/scripts)"
Cohesion: 0.22
Nodes (8): name, private, scripts, build, dev, preview, type, version

### Community 4 - "Dependencias React (runtime)"
Cohesion: 0.40
Nodes (5): dependencies, react, react-dom, react, react-dom

### Community 5 - "Bloco 14-07-2026 e GIFs"
Cohesion: 0.40
Nodes (5): Ab Wheel Rollout GIF, Barbell Romanian Deadlift GIF, Goblet Squat GIF, Treino 14-07-2026, Treino 14-07-2026 v2 Revisado

### Community 6 - "Treino 15-05-2026 e GIFs"
Cohesion: 0.50
Nodes (4): Cable Donkey Kickback GIF, Hanging Leg Raise GIF, Lateral Band Walk GIF, Treino 15-05-2026

### Community 7 - "Config lib TS (DOM/ES2020)"
Cohesion: 0.50
Nodes (4): DOM, DOM.Iterable, ES2020, lib

### Community 8 - "Treino 08-03-2026 e GIFs"
Cohesion: 0.67
Nodes (3): Barbell Hip Thrust GIF, Leg Extension GIF, Treino 08-03-2026

## Knowledge Gaps
- **44 isolated node(s):** `name`, `private`, `version`, `type`, `dev` (+39 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 47 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **5 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `devDependencies` connect `Dependencias de build (dev)` to `package.json (metadados/scripts)`?**
  _High betweenness centrality (0.063) - this node is a cross-community bridge._
- **Why does `compilerOptions` connect `Configuracao TypeScript` to `Config lib TS (DOM/ES2020)`?**
  _High betweenness centrality (0.051) - this node is a cross-community bridge._
- **Why does `dependencies` connect `Dependencias React (runtime)` to `package.json (metadados/scripts)`?**
  _High betweenness centrality (0.029) - this node is a cross-community bridge._
- **What connects `name`, `private`, `version` to the rest of the system?**
  _44 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Configuracao TypeScript` be split into smaller, more focused modules?**
  _Cohesion score 0.13333333333333333 - nodes in this community are weakly interconnected._