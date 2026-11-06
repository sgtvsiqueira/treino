export const localGifPath = (url: string): string =>
  `/gifs/${url.split('/').pop()!.replace(/\.gif$/i, '')}.webp`
