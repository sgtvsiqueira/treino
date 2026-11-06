# Rotina automática — montar a próxima fase do plano de 6 meses da Karla

Executada sem supervisão pelo agendamento (`claude -p`). O prompt informa o **número da fase** (2, 3, 4 ou 5).
Siga do início ao fim, sem perguntar nada. Se algum passo falhar, siga a seção "Se der errado" e pare.

## Dados de cada fase

| Fase | Nome | Arquivo novo | Treino | Deload em curso / anterior | Deload seguinte | Reps nos compostos (pirâmide) | Reps nos isolados | Técnicas |
|---|---|---|---|---|---|---|---|---|
| 2 | Especialização I | `Treinos/Karla/treino-04-01-2027.md` | 04/01 → 31/01/2027 | 21/12/2026 → 03/01/2027 (festas) | 01–07/02 | 12-10-8 (4ª série 8 nas semanas 3-4) | 12-20 | Pausa 2-3s no alongamento; rest-pause na última série dos isolados |
| 3 | Força | `Treinos/Karla/treino-08-02-2027.md` | 08/02 → 07/03/2027 | 01–07/02 | 08–14/03 | 8-6-4 nos âncoras; 10-8-6 nos demais compostos | 10-15 | Descanso 3' nos âncoras; sem drop set |
| 4 | Especialização II | `Treinos/Karla/treino-15-03-2027.md` | 15/03 → 11/04/2027 | 08–14/03 | 12–18/04 | 12-10-8 / 10-8-6 (4ª série nas semanas 3-4) | 12-20 | Acessórios novos; drop set; excêntrica lenta (3-4s) |
| 5 | Consolidação | `Treinos/Karla/treino-19-04-2027.md` | 19/04 → 16/05/2027 | 12–18/04 | 17–23/05 + avaliação final | 15-12-10 / 12-10-8 | 10-15 | Nenhuma técnica avançada |

Fases de 4 semanas de treino. A progressão de volume dentro da fase acontece nas **semanas 3–4** (+1 série nos mesmos exercícios em que a Fase 1 fazia isso).

## Fontes obrigatórias (ler antes de montar)
1. `claudedocs/02 - 2026-11-05-plano-6-meses-karla.md`: regras fixas (seção 3) e **volume por fase** (seção 5). O volume da tabela é obrigatório.
2. A ficha da fase anterior (o `treino-*.md` mais recente em `Treinos/Karla/`): base de estrutura, formato e exercícios.
3. `.claude/skills/hipertrofia-skill/SKILL.md` e `cheatsheet.md`: princípios (Schoenfeld).
4. `src/data/karla/treinos.ts`, `src/data/karla/gifs.ts`, `src/data/types.ts`, `src/pages/Karla.tsx`: formato do app.

## Regras de montagem
- **Mantenha a divisão:** A Seg Inferior A (glúteo + posterior + panturrilha), B Ter Superior completo + core, C Qua Inferior B (quadríceps + adutores + panturrilha), D Qui Superior curto opcional + core, E Sex Inferior C (glúteo + posterior unilateral), F Sáb Inferior D (quadríceps + glúteo médio + adutores + panturrilha).
- **Âncoras nunca mudam:** Hip Thrust com Barra (A), Terra Romeno com Barra (A), Agachamento Livre com Barra (C), Agachamento Búlgaro com Halteres déficit (E).
- **Acessórios:** na Fase 2 troque até 2 acessórios de perna; na Fase 4 troque a maioria dos acessórios de perna (estímulo novo); nas Fases 3 e 5 troque no máximo 1. Superiores: troque 1–2 exercícios por fase.
- **Contagem de volume:** conta só a série em que o músculo é o alvo principal. Agachamento e leg press contam para quadríceps; hip thrust, búlgaro, step-up e abdutora contam para glúteo; terra romeno, good morning e flexoras contam para posterior; adutora conta para adutores; panturrilha em pé e sentada contam para panturrilha. Bata a tabela da seção 5 nas semanas 1-2 (início) e 3-4 (fim) com margem de ±1 série.
- **Máximo ~8 séries por músculo por sessão.**
- **Compostos em pirâmide curta** (suba a carga a cada série, todas a 1-2 reps da falha). **Máquinas e isolados em dupla progressão** (mesma carga; fechou o topo da faixa em todas as séries, sobe a carga).
- **Superiores:** fases 2 e 4 em ~6 séries por grupo por semana; fases 3 e 5 em ~8-10.
- **Core:** 2x/semana (B e D), 1 exercício de 3 séries em cada.

## Passos
1. `cd /home/vinicius/Documentos/GitHub/treino && git pull --ff-only`. Se o working tree não estiver limpo antes de começar, vá para "Se der errado".
2. Leia as fontes obrigatórias.
3. Escreva a ficha nova (arquivo da tabela), no mesmo formato de `treino-09-11-2026.md`. Inclua: cabeçalho com fase e datas; aviso do deload em curso ("use os treinos abaixo com metade das séries e 20-30% menos carga até <fim do deload>"); regras de progressão; divisão da semana; volume semanal (semanas 1-2 → 3-4); tabelas dos treinos A–F; registro/medição; quando antecipar deload; alimentação.
4. Para cada exercício novo, encontre o GIF em `fitnessprogramer.com` (página `https://fitnessprogramer.com/exercise/<slug>/`, extraia a URL `wp-content/uploads/...gif` sem sufixo `-NNNxNNN`) ou em `inspireusafoundation.org`. Valide com `curl -s -A "Mozilla/5.0" -o /dev/null -w "%{http_code} %{content_type}"`: precisa dar `200 image/gif`. Sem GIF válido, escolha outro exercício equivalente. Adicione as chaves novas em `src/data/karla/gifs.ts` (não remova as existentes).
5. Reescreva `src/data/karla/treinos.ts` com os treinos A–F da fase. Mantenha as interfaces `Exercicio` e `Treino` (em `src/data/types.ts`) intactas. Na `tecnica` de cada exercício que ganha série nas semanas 3-4, escreva "Sem. 3-4: ...".
6. Atualize `src/pages/Karla.tsx`: `header-meta` da fase ("Fase N · <Nome> · <início> → <fim>"), linha de deloads (deload em curso e o seguinte), chips, legenda (manter as regras de pirâmide e dupla progressão; atualizar a linha "Semana ... = deload ... A Fase N começa em ...") e rodapé ("Fase N de 5 · <início> → <fim>").
7. No `claudedocs/02 ...`, seção 6, acrescente uma linha: "Fase N montada automaticamente em <data de hoje>: `Treinos/Karla/<arquivo>`".
8. `npm run build`. Precisa terminar sem erro.
9. `graphify update .` (pode falhar sem bloquear).
10. `git add -A`, commit `feat: Fase N (<Nome>) do plano de 6 meses — <início>` com a linha `Co-Authored-By: Claude <noreply@anthropic.com>`, e `git push`.
11. Confira o deploy: em `gh api repos/sgtvsiqueira/treino-karla/deployments` ache o deploy do SHA do commit e espere (até ~3 min, checando a cada 15s) o status `success`. Depois confirme que o bundle JS de `https://treinokarla.vercel.app` contém o texto "Fase N".
12. Envie um resumo pelo WhatsApp: `~/scripts/whatsapp-send.sh texto "<mensagem>"`. A mensagem, em português, tem no máximo ~15 linhas:
    - "Treino Karla: Fase N (<Nome>) publicada em treinokarla.vercel.app"
    - o lembrete do deload em curso, com datas, e o dia em que a fase começa;
    - os exercícios trocados (o que saiu e o que entrou);
    - o volume semanal de glúteo, quadríceps, posterior, adutores e panturrilha;
    - "Medir no dia <início da fase>: quadril, coxa, panturrilha, fotos, cargas dos 4 âncoras".

## Se der errado
Não faça push de nada quebrado. Não use `git reset --hard`, `git checkout .` nem apague arquivos. Envie pelo WhatsApp:
`~/scripts/whatsapp-send.sh texto "ALERTA Treino Karla: a montagem automatica da Fase N parou no passo <X>: <motivo em 1-2 linhas>. Nada foi publicado. Abra o Claude no projeto treino para resolver."`
Se o problema aparecer depois do push (deploy falhou ou o site não mostra a fase), mande o mesmo ALERTA dizendo que o commit foi enviado mas o site não atualizou.
