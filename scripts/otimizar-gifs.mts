// Baixa os GIFs dos catálogos e gera cópias leves em public/gifs/ (WebP animado, 260px).
// Uso: npm run gifs   (só converte o que ainda não existe)
import { execFileSync } from 'node:child_process'
import { existsSync, mkdirSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { gifs as karla } from '../src/data/karla/gifs'
import { gifs as vinicius } from '../src/data/vinicius/gifs'
import { localGifPath } from '../src/data/localGif'

const saida = join(import.meta.dirname, '..', 'public')
mkdirSync(join(saida, 'gifs'), { recursive: true })
const tmp = mkdtempSync(join(tmpdir(), 'gifs-'))

const urls = [...new Set([...Object.values(karla), ...Object.values(vinicius)])]
let novos = 0
for (const url of urls) {
  const destino = join(saida, localGifPath(url))
  if (existsSync(destino)) continue
  const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } })
  if (!res.ok) {
    console.error(`FALHOU ${res.status} ${url}`)
    continue
  }
  const origem = join(tmp, 'in.gif')
  writeFileSync(origem, Buffer.from(await res.arrayBuffer()))
  execFileSync('ffmpeg', ['-v', 'error', '-y', '-i', origem, '-vf', 'scale=260:-1:flags=lanczos',
    '-c:v', 'libwebp_anim', '-lossless', '0', '-q:v', '60', '-loop', '0', destino])
  novos++
  console.log(`ok ${localGifPath(url)}`)
}
rmSync(tmp, { recursive: true, force: true })
console.log(`${novos} convertidos, ${urls.length} no total`)
