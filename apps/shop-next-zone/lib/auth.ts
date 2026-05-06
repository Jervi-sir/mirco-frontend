import { cookies } from 'next/headers'

const AUTH_COOKIE_NAME = 'dropjdid_user_email'

export async function getAuthEmail() {
  const cookieStore = await cookies()
  return cookieStore.get(AUTH_COOKIE_NAME)?.value ?? null
}
