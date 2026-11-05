import TreinoCard from './components/TreinoCard'
import { treinos } from './data/treinos'

export default function App() {
  return (
    <>
      <header className="header">
        <div className="header-inner">
          <div className="prog-title">
            Periodização<br />
            <span>Glúteos & Pernas</span>
          </div>
          <div className="student-row">
            <div className="student-name">Karla Terra</div>
            <div className="sep">·</div>
            <div className="header-meta">Fase 1 · Base · 16/11 → 20/12/2026</div>
            <div className="sep">·</div>
            <div className="header-meta">Deloads: 09–15/11 e 21/12–03/01</div>
          </div>
          <div className="chips">
            <span className="chip">5 dias + Qui opcional · Seg a Sáb</span>
            <span className="chip hi">Pernas 4x · Glúteo 4x · Superiores manutenção · Core 2x</span>
            <span className="chip">A · B · C · D · E · F</span>
          </div>
        </div>
      </header>

      <div className="legend-bar">
        <strong>Dupla progressão</strong> — mesma carga em todas as séries, dentro da faixa de reps; fechou o topo da faixa em todas as séries, suba a carga. Todas as séries a 1–3 reps da falha (última a 0–1).<br />
        <strong>Semana 09–15/11 = deload</strong> — faça metade das séries com 20–30% menos carga. A Fase 1 começa em 16/11.
      </div>

      <main className="content">
        {treinos.map((treino) => (
          <TreinoCard key={treino.id} treino={treino} />
        ))}
      </main>

      <footer>
        Ficha de Treino — <span>Karla Terra</span> · Plano de 6 meses · Fase 1 de 5 · 16/11 → 20/12/2026
      </footer>
    </>
  )
}
