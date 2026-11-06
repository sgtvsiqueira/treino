export interface Exercicio {
  imgSrc: string
  imgAlt: string
  musculos: string
  exercicio: string
  series: number
  repeticoes: string
  intervalo: string
  tecnica: string
}

export interface Treino {
  id: string
  titulo: string
  subtitulo: string
  exercicios: Exercicio[]
}
