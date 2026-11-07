import TreinoCard from '../components/TreinoCard'
import { treinos } from '../data/vinicius/treinos'

export default function Vinicius() {
  return (
    <>
      <header className="header">
        <div className="header-inner">
          <div className="prog-title">
            Plano até o Carnaval<br />
            <span>Superior 6x</span>
          </div>
          <div className="student-row">
            <div className="student-name">Vinicius Siqueira</div>
            <div className="sep">·</div>
            <div className="header-meta">Bloco 1 · Base · 09/11 → 06/12/2026</div>
            <div className="sep">·</div>
            <div className="header-meta">Deload: 07–13/12 · Carnaval: 06/02</div>
          </div>
          <div className="chips">
            <span className="chip">6 dias · Seg a Sáb</span>
            <span className="chip hi">Push · Pull · Ombros + Braços (2x)</span>
            <span className="chip">A · B · C · D · E · F</span>
          </div>
        </div>
      </header>

      <div className="legend-bar">
        <strong>Semana 1 = calibração</strong> — escolha cargas que deixem 2 reps sobrando e anote tudo.<br />
        <strong>Compostos: pirâmide curta</strong> (ex.: 10-8-6) — suba a carga a cada série, todas a 1–2 reps da falha. Âncoras: Supino Reto, Barra Fixa, Remada Curvada, Militar.<br />
        <strong>Isolados: mesma carga</strong> nas séries, dentro da faixa; fechou o topo da faixa em todas, suba a carga.
      </div>

      <main className="content">
        {treinos.length === 0 ? (
          <p className="empty-state">Treino em montagem. Em breve por aqui.</p>
        ) : (
          treinos.map((treino) => <TreinoCard key={treino.id} treino={treino} />)
        )}
      </main>

      <footer>
        Ficha de Treino — <span>Vinicius Siqueira</span> · Bloco 1 de 3 · até o Carnaval
      </footer>
    </>
  )
}
