'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { AUTH_COOKIE_NAME } from '../lib/auth'

function getEmail(formData: FormData) {
  const email = formData.get('email')
  return typeof email === 'string' ? email.trim().toLowerCase() : ''
}

export async function loginAction(formData: FormData) {
  const email = getEmail(formData)

  if (!email) {
    redirect('/login')
  }

  const cookieStore = await cookies()
  cookieStore.set(AUTH_COOKIE_NAME, email, {
    httpOnly: true,
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 30,
  })

  redirect('/me')
}

export async function registerAction(formData: FormData) {
  const email = getEmail(formData)

  if (!email) {
    redirect('/register')
  }

  const cookieStore = await cookies()
  cookieStore.set(AUTH_COOKIE_NAME, email, {
    httpOnly: true,
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 30,
  })

  redirect('/me')
}

export async function logoutAction() {
  const cookieStore = await cookies()
  cookieStore.set(AUTH_COOKIE_NAME, '', {
    httpOnly: true,
    sameSite: 'lax',
    path: '/',
    maxAge: 0,
  })

  redirect('/login')
}
