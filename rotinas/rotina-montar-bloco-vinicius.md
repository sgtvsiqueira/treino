# Rotina automática — montar o próximo bloco do plano até o Carnaval do Vinicius

Executada sem supervisão pelo agendamento (`claude -p`). O prompt informa o **número do bloco** (2 ou 3).
Siga do início ao fim, sem perguntar nada. Se algum passo falhar, siga a seção "Se der errado" e pare.

## Dados de cada bloco

| Bloco | Nome | Arquivo novo | Treino | Deload em curso (hoje) | Depois do bloco | Reps compostos (pirâmide) | Reps isolados | Técnicas |
|---|---|---|---|---|---|---|---|---|
| 2 | Especialização Costas + Braço | `Treinos/Vinicius/treino-14-12-2026.md` | 14/12/2026 → 10/01/2027 | 07–13/12 | Deload 11–17/01 | 10-8-6 | 10-15 | Rosca e tríceps no alongamento; rest-pause na última série de 1 exercício de bíceps e 1 de tríceps por semana |
| 3 | Pico + Polimento | `Treinos/Vinicius/treino-18-01-2027.md` | 18/01 → 03/02/2027 + polimento 04–05/02 | 11–17/01 | Carnaval 06–09/02 | 12-10-8 | 12-20 | Drop set (−25%) ou rest-pause na última série dos isolados; descanso 45"–1' nos isolados |

## Fontes obrigatórias (ler antes de montar)
1. `claudedocs/03 - 2026-11-06-plano-carnaval-vinicius.md`: regras fixas (seção 2), cronograma (3) e **volume por bloco (seção 4), que é obrigatório**.
2. A ficha do bloco anterior (o `treino-*.md` mais recente em `Treinos/Vinicius/`): base de estrutura, formato e exercícios.
3. `.claude/skills/hipertrofia-skill/SKILL.md` e `cheatsheet.md`: princípios (Schoenfeld).
4. `src/data/vinicius/treinos.ts`, `src/data/vinicius/gifs.ts`, `src/data/types.ts`, `src/pages/Vinicius.tsx`: formato do app.

## Regras de montagem
- **Mantenha a divisão:** A Seg Push 1 (peito + ombro + tríceps), B Ter Pull 1 (costas largura + bíceps), C Qua Ombros + Braços 1 + abdômen, D Qui Push 2 (peito superior + tríceps), E Sex Pull 2 (costas espessura + bíceps), F Sáb Ombros + Braços 2 + trapézio + abdômen. **Nada de perna.**
- **Âncoras nunca mudam:** Supino Reto com Barra (A), Barra Fixa Pronada (B), Remada Curvada com Barra (B), Desenvolvimento Militar com Barra (F). Faixas de reps seguem a tabela acima.
- **Proibidos:** Paralelas (Mergulho) e Remada T (Cavalinho).
- **Bloco 2:** costas e braços sobem (acrescente exercícios ou séries nos treinos B, C, E e F; pode colocar 1 exercício de costas no C ou F); peito e deltoide lateral caem para manutenção (~10 séries/semana cada; tire acessórios de peito em A e D). Troque 2–3 acessórios de costas e braço por variações novas (ângulo e pegada diferentes, com ênfase no alongamento).
- **Bloco 3:** volume de volta a todos os músculos conforme a seção 4; troque no máximo 2 acessórios. Inclua no fim da ficha a seção **"Polimento — Qui 04/02 e Sex 05/02"**: treinos D e E com metade das séries, 2–3 reps sobrando, sem falha, foco no pump; Sáb 06/02 descanso. No app, coloque essa instrução na `tecnica` do primeiro exercício de D e de E ("04–05/02 (polimento): metade das séries, sem falha").
- **Contagem de volume:** só conta a série em que o músculo é alvo principal (supinos e crucifixos = peito; puxadas e remadas = costas; elevações laterais = deltoide lateral; face pull e crucifixo inverso = deltoide posterior; roscas = bíceps; tríceps e supino fechado = tríceps; desenvolvimento = deltoide anterior, fora da tabela). Bata a tabela da seção 4 no início e no fim do bloco, com ±1 série.
- **Máximo ~10 séries por músculo por sessão.**
- **Progressão de volume:** Bloco 2 nas semanas 3–4 (a partir de 28/12); Bloco 3 na semana 3 (01–03/02). Marque "Sem. 3-4: N séries" (ou "Sem. 3: ...") na `tecnica`.
- **Compostos em pirâmide curta; isolados em dupla progressão** (igual ao Bloco 1).

## Passos
1. `cd /home/vinicius/Documentos/GitHub/treino && git pull --ff-only`. Se o working tree não estiver limpo antes de começar, vá para "Se der errado".
2. Leia as fontes obrigatórias.
3. Escreva a ficha nova (arquivo da tabela) no mesmo formato de `Treinos/Vinicius/treino-09-11-2026.md`: cabeçalho com bloco e datas; aviso do deload em curso ("esta semana use os treinos abaixo com metade das séries e 20-30% menos carga, nada até a falha; o bloco começa em <início>"); como progredir; divisão; volume semanal (início → fim); tabelas A–F; seção de polimento (só Bloco 3).
4. Para cada exercício novo, ache o GIF em `https://fitnessprogramer.com/exercise/<slug>/` (extraia a URL `wp-content/uploads/...gif`, sem sufixo `-NNNxNNN`) ou em `inspireusafoundation.org`. Valide com `curl -s -A "Mozilla/5.0" -o /dev/null -w "%{http_code} %{content_type}"`: precisa dar `200 image/gif`. Sem GIF válido, escolha outro exercício equivalente. Acrescente as chaves em `src/data/vinicius/gifs.ts` (não remova as existentes).
5. Reescreva `src/data/vinicius/treinos.ts` com os treinos A–F do bloco (mantenha o helper `ex` e as interfaces de `src/data/types.ts`).
6. Atualize `src/pages/Vinicius.tsx`: `header-meta` ("Bloco N · <Nome> · <início> → <fim>"), linha do deload (em curso e o próximo marco), chips, legenda e rodapé ("Bloco N de 3 · até o Carnaval").
7. `npm run gifs` (gera as cópias leves dos GIFs novos em `public/gifs/`).
8. No `claudedocs/03 ...`, seção 9, acrescente: "Bloco N montado automaticamente em <data de hoje>: `Treinos/Vinicius/<arquivo>`".
9. `npm run build`. Precisa terminar sem erro.
10. `graphify update .` (pode falhar sem bloquear).
11. `git add -A`, commit `feat: Bloco N (<Nome>) do Vinicius — <início>` com a linha `Co-Authored-By: Claude <noreply@anthropic.com>`, e `git push`.
12. Confira o deploy: em `gh api repos/sgtvsiqueira/treino/deployments` ache o deploy do SHA do commit e espere (até ~3 min, checando a cada 15s) o status `success`. Depois confirme que o bundle JS de `https://treinokarla.vercel.app/vinicius` contém o texto "Bloco N".
13. Envie um resumo pelo WhatsApp: `~/scripts/whatsapp-send.sh texto "<mensagem>"`, em português, no máximo ~15 linhas:
    - "Treino Vinicius: Bloco N (<Nome>) publicado em treinokarla.vercel.app/vinicius"
    - "Esta semana é DELOAD (<datas>): metade das séries, 20-30% menos carga. O bloco começa <início>."
    - exercícios trocados (saiu → entrou);
    - volume semanal de costas, bíceps, tríceps, peito e deltoide lateral;
    - "Medir no dia <início>: peso, braço, peito, cintura, fotos e cargas das 4 âncoras".

## Se der errado
Não faça push de nada quebrado. Não use `git reset --hard`, `git checkout .` nem apague arquivos. Envie pelo WhatsApp:
`~/scripts/whatsapp-send.sh texto "ALERTA Treino Vinicius: a montagem automatica do Bloco N parou no passo <X>: <motivo em 1-2 linhas>. Nada foi publicado. Abra o Claude no projeto treino para resolver."`
Se o problema aparecer depois do push (deploy falhou ou o site não mostra o bloco), mande o mesmo ALERTA dizendo que o commit foi enviado mas o site não atualizou.
