export async function withRetry<T>(load: () => Promise<T>, retries = 2): Promise<T> {
  let lastError: unknown

  for (let attempt = 0; attempt <= retries; attempt += 1) {
    try {
      return await load()
    } catch (error) {
      lastError = error
      await new Promise((resolve) => setTimeout(resolve, 400 * (attempt + 1)))
    }
  }

  throw lastError
}

export async function getRemoteHealth(url: string) {
  try {
    const response = await fetch(url)
    return response.ok ? 'healthy' : 'degraded'
  } catch {
    return 'offline'
  }
}
