import TreinoCard from '../components/TreinoCard'
import { treinos } from '../data/vinicius/treinos'

export default function Vinicius() {
  return (
    <>
      <header className="header">
        <div className="header-inner">
          <div className="prog-title">
            Ficha de Treino<br />
            <span>Vinicius</span>
          </div>
          <div className="student-row">
            <div className="student-name">Vinicius Siqueira</div>
          </div>
        </div>
      </header>

      <main className="content">
        {treinos.length === 0 ? (
          <p className="empty-state">Treino em montagem. Em breve por aqui.</p>
        ) : (
          treinos.map((treino) => <TreinoCard key={treino.id} treino={treino} />)
        )}
      </main>

      <footer>
        Ficha de Treino — <span>Vinicius</span>
      </footer>
    </>
  )
}
