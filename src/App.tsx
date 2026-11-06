import Karla from './pages/Karla'
import Vinicius from './pages/Vinicius'

const paginas = [
  { caminho: '/', nome: 'Karla', Pagina: Karla },
  { caminho: '/vinicius', nome: 'Vinicius', Pagina: Vinicius },
]

export default function App() {
  const atual = window.location.pathname.replace(/\/+$/, '') || '/'
  const pagina = paginas.find((p) => p.caminho === atual) ?? paginas[0]

  return (
    <>
      <nav className="site-nav">
        {paginas.map((p) => (
          <a key={p.caminho} href={p.caminho} className={p === pagina ? 'active' : undefined}>
            {p.nome}
          </a>
        ))}
      </nav>
      <pagina.Pagina />
    </>
  )
}
