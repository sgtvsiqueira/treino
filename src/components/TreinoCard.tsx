import type { Treino } from '../data/types'
import { localGifPath } from '../data/localGif'

interface Props {
  treino: Treino
}

export default function TreinoCard({ treino }: Props) {
  return (
    <div className="treino-card">
      <div className="card-header">
        <div className="treino-badge">{treino.id}</div>
        <div>
          <div className="card-title-main">{treino.titulo}</div>
          <div className="card-title-sub">{treino.subtitulo}</div>
        </div>
      </div>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th className="th-img">Demo</th>
              <th>Músculos</th>
              <th>Exercício</th>
              <th>Séries</th>
              <th>Repetições</th>
              <th>Intervalo</th>
              <th>Técnica</th>
            </tr>
          </thead>
          <tbody>
            {treino.exercicios.map((ex, i) => (
              <tr key={i}>
                <td className="td-img">
                  <img
                    className="ex-img"
                    src={localGifPath(ex.imgSrc)}
                    alt={ex.imgAlt}
                    loading="lazy"
                    decoding="async"
                    onError={(e) => {
                      if (e.currentTarget.src !== ex.imgSrc) e.currentTarget.src = ex.imgSrc
                    }}
                  />
                </td>
                <td>{ex.musculos}</td>
                <td>{ex.exercicio}</td>
                <td>{ex.series}</td>
                <td>{ex.repeticoes}</td>
                <td>{ex.intervalo}</td>
                <td>{ex.tecnica}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
