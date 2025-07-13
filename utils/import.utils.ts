async function getAsyncImage(path: string): Promise<{} | null> {
  const mod = import.meta.glob(path, { eager: true })
  return mod?.default || null
}

export { getAsyncImage }
